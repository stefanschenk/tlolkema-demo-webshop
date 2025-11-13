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
    note.textContent = `Smoothie option selected. ${computeBlendSummary(basket)}.`;
  } else {
    note.style.display = "none";
    note.textContent = "";
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
