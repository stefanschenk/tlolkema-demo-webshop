const PRODUCTS = {
  apple: { name: "Apple", emoji: "🍏" },
  banana: { name: "Banana", emoji: "🍌" },
  lemon: { name: "Lemon", emoji: "🍋" },
};

// Expose for pages that need to iterate available fruits (e.g., slot machine)
window.PRODUCTS = PRODUCTS;

// --- Smoothie (blend) option helpers ---
function getBlendFlag() {
  try {
    return localStorage.getItem("blendSmoothie") === "true";
  } catch (e) {
    return false;
  }
}

function setBlendFlag(value) {
  try {
    if (value) {
      localStorage.setItem("blendSmoothie", "true");
    } else {
      localStorage.removeItem("blendSmoothie");
    }
  } catch (e) {
    // ignore
  }
}

function computeBlendSummary(basket) {
  const items = basket && basket.length ? basket : getBasket();
  if (!items.length) return "";
  const uniqueKeys = Array.from(new Set(items));
  const names = uniqueKeys
    .map((k) => (PRODUCTS[k] ? PRODUCTS[k].name : null))
    .filter(Boolean);
  if (names.length === 0) return "";
  if (names.length === 1) {
    return `Single flavour smoothie: ${names[0]}`;
  }
  return `Multi flavour smoothie: ${names.join(" + ")}`;
}

function renderBlendUI() {
  const basket = getBasket();
  const row = document.getElementById("blendRow");
  const checkbox = document.getElementById("blendSmoothie");
  const summary = document.getElementById("blendSummary");
  if (!row || !checkbox || !summary) return;

  if (basket.length === 0) {
    row.style.display = "none";
    checkbox.checked = false;
    summary.textContent = "";
    row.classList.remove("is-blending");
    return;
  }

  row.style.display = "flex";
  checkbox.checked = getBlendFlag();
  summary.textContent = checkbox.checked ? computeBlendSummary(basket) : "";
  row.classList.toggle("is-blending", checkbox.checked);

  // Ensure change handler is attached only once
  if (!checkbox._blendAttached) {
    checkbox.addEventListener("change", function () {
      setBlendFlag(checkbox.checked);
      summary.textContent = checkbox.checked ? computeBlendSummary(getBasket()) : "";
      row.classList.toggle("is-blending", checkbox.checked);
    });
    checkbox._blendAttached = true;
  }
}

function renderCheckoutBlendNote() {
  const note = document.getElementById("blendCheckoutNote");
  if (!note) return;
  const basket = getBasket();
  if (getBlendFlag() && basket.length) {
    note.style.display = "block";
    const summary = computeBlendSummary(basket);
    // Static blender icon (decorative) + summary text
    note.innerHTML = `
      <span class="blend-icon" aria-hidden="true" title="Smoothie selected">
        <svg class="blender-svg" viewBox="0 0 24 24" width="22" height="22" focusable="false" aria-hidden="true">
          <rect x="6" y="2" width="12" height="2" fill="#0aa" />
          <rect x="6" y="4" width="10" height="12" rx="2" ry="2" fill="#e0f7fa" stroke="#0aa" stroke-width="1" />
          <rect x="16" y="6" width="3" height="8" rx="1.5" ry="1.5" fill="#c8f0f4" stroke="#0aa" stroke-width="1" />
          <!-- No animation on checkout: rotor group present but not animated -->
          <g>
            <circle cx="11" cy="10" r="1.2" fill="#00796b" />
            <rect x="10.6" y="7.5" width="0.8" height="5" fill="#00796b" />
            <rect x="8.5" y="9.6" width="5" height="0.8" fill="#00796b" />
          </g>
          <rect x="5" y="16" width="14" height="6" rx="2" ry="2" fill="#def2f6" stroke="#0aa" stroke-width="1" />
          <circle cx="12" cy="19" r="1.6" fill="#0aa" />
        </svg>
      </span>
      <span>Smoothie option selected. ${summary}.</span>`;
  } else {
    note.style.display = "none";
    note.innerHTML = "";
  }
}

function getBasket() {
  try {
    const basket = localStorage.getItem("basket");
    if (!basket) return [];
    const parsed = JSON.parse(basket);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.warn("Error parsing basket from localStorage:", error);
    return [];
  }
}

function addToBasket(product) {
  const basket = getBasket();
  basket.push(product);
  localStorage.setItem("basket", JSON.stringify(basket));
}

function clearBasket() {
  localStorage.removeItem("basket");
  localStorage.removeItem("blendSmoothie");
}

function renderBasket() {
  const basket = getBasket();
  const basketList = document.getElementById("basketList");
  const cartButtonsRow = document.querySelector(".cart-buttons-row");
  if (!basketList) return;
  basketList.innerHTML = "";
  if (basket.length === 0) {
    basketList.innerHTML = "<li>No products in basket.</li>";
    if (cartButtonsRow) cartButtonsRow.style.display = "none";
    // Update blend UI as well when empty
    renderBlendUI && renderBlendUI();
    return;
  }
  basket.forEach((product) => {
    const item = PRODUCTS[product];
    if (item) {
      const li = document.createElement("li");
      li.innerHTML = `<span class='basket-emoji'>${item.emoji}</span> <span>${item.name}</span>`;
      basketList.appendChild(li);
    }
  });
  if (cartButtonsRow) cartButtonsRow.style.display = "flex";
  // Update blend UI to reflect current basket
  renderBlendUI && renderBlendUI();
}

function renderBasketIndicator() {
  const basket = getBasket();
  let indicator = document.querySelector(".basket-indicator");
  if (!indicator) {
    const basketLink = document.querySelector(".basket-link");
    if (!basketLink) return;
    indicator = document.createElement("span");
    indicator.className = "basket-indicator";
    basketLink.appendChild(indicator);
  }
  if (basket.length > 0) {
    indicator.textContent = basket.length;
    indicator.style.display = "flex";
  } else {
    indicator.style.display = "none";
  }
}

// Call this on page load and after basket changes
if (document.readyState !== "loading") {
  renderBasketIndicator();
} else {
  document.addEventListener("DOMContentLoaded", renderBasketIndicator);
}

// Patch basket functions to update indicator
const origAddToBasket = window.addToBasket;
window.addToBasket = function (product) {
  origAddToBasket(product);
  renderBasketIndicator();
};
const origClearBasket = window.clearBasket;
window.clearBasket = function () {
  origClearBasket();
  renderBasketIndicator();
};
