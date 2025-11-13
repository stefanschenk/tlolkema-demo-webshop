// --- Internationalization (i18n) ---
const SUPPORTED_LOCALES = ["en", "nl", "ja", "vi", "fy"];

const TRANSLATIONS = {
  en: {
    brand: {
      titleIndex: "Welcome to Fruit Shop - Fresh Fruits Online",
      titleBasket: "Shopping Basket - Fruit Shop",
      titleCheckout: "Checkout - Complete Your Order - Fruit Shop",
      titleSlot: "Fruit Slot Machine - Fruit Shop",
      titleApple: "Fresh Apple - Fruit Shop",
      titleBanana: "Fresh Banana - Fruit Shop",
      titleLemon: "Fresh Lemon - Fruit Shop",
      by: "By {name}",
    },
    header: {
      homeAria: "Go to homepage",
      productsLink: "View Products",
      basketAria: "View shopping basket",
      basketText: "View shopping basket",
      logoAlt: "Fruit Shop Logo",
      basketAlt: "Shopping basket icon",
      chooseLanguage: "Language",
      languages: {
        en: "English",
        nl: "Nederlands",
        ja: "日本語",
        vi: "Tiếng Việt",
        fy: "Frysk",
      },
    },
    products: {
      title: "Products",
      apple: "Apple",
      banana: "Banana",
      lemon: "Lemon",
      goTo: "Go to {product}",
      slotTry: "Try the Slot Machine",
      slotAria: "Try your luck with the Slot Machine",
    },
    product: {
      appleDesc: "Keeps the doctor away (unless you throw it at them).",
      bananaDesc: "Nature's energy bar. Also, monkeys approve!",
      lemonDesc: "When life gives you lemons, make lemonade.",
      addAria: "Add {product} to basket",
      addBtn: "Add to Basket",
    },
    basket: {
      title: "Your Shopping Basket",
      empty: "No products in basket.",
      clear: "Clear Basket",
      checkout: "Checkout",
      actionsAria: "Basket actions",
      listAria: "Shopping basket items",
    },
    blend: {
      optionLabel: "Blend selected fruits into a smoothie",
      single: "Single flavour smoothie: {flavours}",
      multi: "Multi flavour smoothie: {flavours}",
      checkoutNoticePrefix: "Smoothie option selected.",
      ariaGroup: "Smoothie option",
      blendingTitle: "Blending",
    },
    checkout: {
      title: "Checkout",
      formAria: "Checkout form",
      name: "Name:",
      address: "Address:",
      placeOrder: "Place Order",
      success: "Thank you for your order!",
      nameAria: "Enter your full name",
      addressAria: "Enter your delivery address",
      placeAria: "Place order",
    },
    slot: {
      title: "Slot Machine",
      desc: "Click \"Add to Basket\" to spin! A random fruit will be selected and added to your basket.",
      addBtn: "Add to Basket",
      addAria: "Spin slot machine and add a random fruit to basket",
      spinning: "Spinning...",
      none: "No fruits available to spin.",
      addedLive: "{product} added to basket.",
      displayAria: "Fruit slot machine display",
    },
    common: {
      mainNav: "Main navigation",
    },
  },
  nl: {
    brand: {
      titleIndex: "Welkom bij Fruit Shop - Verse Fruit Online",
      titleBasket: "Winkelmand - Fruit Shop",
      titleCheckout: "Afrekenen - Rond uw bestelling af - Fruit Shop",
      titleSlot: "Fruit Gokkast - Fruit Shop",
      titleApple: "Verse Appel - Fruit Shop",
      titleBanana: "Verse Banaan - Fruit Shop",
      titleLemon: "Verse Citroen - Fruit Shop",
      by: "Door {name}",
    },
    header: {
      homeAria: "Ga naar homepage",
      productsLink: "Bekijk Producten",
      basketAria: "Bekijk winkelmand",
      basketText: "Bekijk winkelmand",
      logoAlt: "Fruit Shop Logo",
      basketAlt: "Pictogram winkelmand",
      chooseLanguage: "Taal",
      languages: { en: "English", nl: "Nederlands", ja: "日本語", vi: "Tiếng Việt", fy: "Frysk" },
    },
    products: {
      title: "Producten",
      apple: "Appel",
      banana: "Banaan",
      lemon: "Citroen",
      goTo: "Ga naar {product}",
      slotTry: "Probeer de Gokkast",
      slotAria: "Waag een gokje met de gokkast",
    },
    product: {
      appleDesc: "Houdt de dokter weg (tenzij je hem gooit).",
      bananaDesc: "Natuurlijke energiereep. Apen keuren het goed!",
      lemonDesc: "Als het leven je citroenen geeft, maak limonade.",
      addAria: "Voeg {product} toe aan winkelmand",
      addBtn: "Toevoegen aan mandje",
    },
    basket: {
      title: "Uw winkelmand",
      empty: "Geen producten in de mand.",
      clear: "Mand legen",
      checkout: "Afrekenen",
      actionsAria: "Winkelmand acties",
      listAria: "Artikelen in winkelmand",
    },
    blend: {
      optionLabel: "Geselecteerd fruit blenden tot een smoothie",
      single: "Smoothie met één smaak: {flavours}",
      multi: "Smoothie met meerdere smaken: {flavours}",
      checkoutNoticePrefix: "Smoothie-optie geselecteerd.",
      ariaGroup: "Smoothie-optie",
      blendingTitle: "Blenden",
    },
    checkout: {
      title: "Afrekenen",
      formAria: "Afrekenformulier",
      name: "Naam:",
      address: "Adres:",
      placeOrder: "Bestelling plaatsen",
      success: "Bedankt voor uw bestelling!",
      nameAria: "Vul uw volledige naam in",
      addressAria: "Vul uw afleveradres in",
      placeAria: "Bestelling plaatsen",
    },
    slot: {
      title: "Gokkast",
      desc: "Klik op \"Toevoegen aan mandje\" om te draaien! Er wordt willekeurig een fruit gekozen en toegevoegd aan je mand.",
      addBtn: "Toevoegen aan mandje",
      addAria: "Draai de gokkast en voeg willekeurig fruit toe aan de mand",
      spinning: "Draaien...",
      none: "Geen fruit beschikbaar om te draaien.",
      addedLive: "{product} toegevoegd aan de mand.",
      displayAria: "Fruit gokkast weergave",
    },
    common: { mainNav: "Hoofdnavigatie" },
  },
  ja: {
    brand: {
      titleIndex: "フルーツショップへようこそ - 新鮮なフルーツ通販",
      titleBasket: "ショッピングバスケット - フルーツショップ",
      titleCheckout: "チェックアウト - ご注文の確定 - フルーツショップ",
      titleSlot: "フルーツスロットマシン - フルーツショップ",
      titleApple: "新鮮なりんご - フルーツショップ",
      titleBanana: "新鮮なバナナ - フルーツショップ",
      titleLemon: "新鮮なレモン - フルーツショップ",
      by: "制作: {name}",
    },
    header: {
      homeAria: "ホームページへ",
      productsLink: "商品を見る",
      basketAria: "買い物かごを見る",
      basketText: "買い物かごを見る",
      logoAlt: "フルーツショップのロゴ",
      basketAlt: "買い物かごのアイコン",
      chooseLanguage: "言語",
      languages: { en: "English", nl: "Nederlands", ja: "日本語", vi: "Tiếng Việt", fy: "Frysk" },
    },
    products: {
      title: "商品一覧",
      apple: "りんご",
      banana: "バナナ",
      lemon: "レモン",
      goTo: "{product} の詳細へ",
      slotTry: "スロットマシンを試す",
      slotAria: "スロットマシンに挑戦",
    },
    product: {
      appleDesc: "医者いらず（投げつけないでね）。",
      bananaDesc: "自然のエナジーバー。おサルも大好き！",
      lemonDesc: "レモンをもらったらレモネードを作ろう。",
      addAria: "{product} をかごに追加",
      addBtn: "かごに追加",
    },
    basket: {
      title: "ショッピングバスケット",
      empty: "かごに商品はありません。",
      clear: "かごを空にする",
      checkout: "レジへ進む",
      actionsAria: "バスケットの操作",
      listAria: "バスケット内の商品",
    },
    blend: {
      optionLabel: "選んだフルーツをスムージーにする",
      single: "単一フレーバースムージー: {flavours}",
      multi: "ミックスフレーバースムージー: {flavours}",
      checkoutNoticePrefix: "スムージーが選択されています。",
      ariaGroup: "スムージーのオプション",
      blendingTitle: "ブレンド中",
    },
    checkout: {
      title: "チェックアウト",
      formAria: "チェックアウトフォーム",
      name: "お名前:",
      address: "住所:",
      placeOrder: "注文を確定する",
      success: "ご注文ありがとうございます！",
      nameAria: "氏名を入力してください",
      addressAria: "配送先住所を入力してください",
      placeAria: "注文を確定",
    },
    slot: {
      title: "スロットマシン",
      desc: "\"かごに追加\"で回転！ ランダムに選ばれたフルーツがかごに追加されます。",
      addBtn: "かごに追加",
      addAria: "スロットを回してランダムなフルーツをかごに追加",
      spinning: "回転中...",
      none: "回転できるフルーツがありません。",
      addedLive: "{product} をかごに追加しました。",
      displayAria: "フルーツスロットの表示",
    },
    common: { mainNav: "メインナビゲーション" },
  },
  vi: {
    brand: {
      titleIndex: "Chào mừng đến Fruit Shop - Trái cây tươi online",
      titleBasket: "Giỏ hàng - Fruit Shop",
      titleCheckout: "Thanh toán - Hoàn tất đơn hàng - Fruit Shop",
      titleSlot: "Máy đánh hoa quả - Fruit Shop",
      titleApple: "Táo tươi - Fruit Shop",
      titleBanana: "Chuối tươi - Fruit Shop",
      titleLemon: "Chanh tươi - Fruit Shop",
      by: "Bởi {name}",
    },
    header: {
      homeAria: "Về trang chủ",
      productsLink: "Xem sản phẩm",
      basketAria: "Xem giỏ hàng",
      basketText: "Xem giỏ hàng",
      logoAlt: "Logo Fruit Shop",
      basketAlt: "Biểu tượng giỏ hàng",
      chooseLanguage: "Ngôn ngữ",
      languages: { en: "English", nl: "Nederlands", ja: "日本語", vi: "Tiếng Việt", fy: "Frysk" },
    },
    products: {
      title: "Sản phẩm",
      apple: "Táo",
      banana: "Chuối",
      lemon: "Chanh",
      goTo: "Xem {product}",
      slotTry: "Thử Máy Slot",
      slotAria: "Thử vận may với Máy Slot",
    },
    product: {
      appleDesc: "Táo giúp khỏe mạnh (nhưng đừng ném vào bác sĩ).",
      bananaDesc: "Thanh năng lượng tự nhiên. Khỉ cũng thích!",
      lemonDesc: "Có chanh thì làm nước chanh thôi.",
      addAria: "Thêm {product} vào giỏ",
      addBtn: "Thêm vào giỏ",
    },
    basket: {
      title: "Giỏ hàng của bạn",
      empty: "Chưa có sản phẩm nào trong giỏ.",
      clear: "Xóa giỏ hàng",
      checkout: "Thanh toán",
      actionsAria: "Thao tác giỏ hàng",
      listAria: "Sản phẩm trong giỏ",
    },
    blend: {
      optionLabel: "Xay các loại trái cây đã chọn thành sinh tố",
      single: "Sinh tố một vị: {flavours}",
      multi: "Sinh tố nhiều vị: {flavours}",
      checkoutNoticePrefix: "Đã chọn tùy chọn sinh tố.",
      ariaGroup: "Tùy chọn sinh tố",
      blendingTitle: "Đang xay",
    },
    checkout: {
      title: "Thanh toán",
      formAria: "Biểu mẫu thanh toán",
      name: "Họ tên:",
      address: "Địa chỉ:",
      placeOrder: "Đặt hàng",
      success: "Cảm ơn bạn đã đặt hàng!",
      nameAria: "Nhập họ tên đầy đủ",
      addressAria: "Nhập địa chỉ giao hàng",
      placeAria: "Đặt hàng",
    },
    slot: {
      title: "Máy slot",
      desc: "Nhấn \"Thêm vào giỏ\" để quay! Một loại trái cây ngẫu nhiên sẽ được thêm vào giỏ của bạn.",
      addBtn: "Thêm vào giỏ",
      addAria: "Quay và thêm một trái cây ngẫu nhiên vào giỏ",
      spinning: "Đang quay...",
      none: "Không có trái cây để quay.",
      addedLive: "Đã thêm {product} vào giỏ.",
      displayAria: "Màn hình máy slot trái cây",
    },
    common: { mainNav: "Điều hướng chính" },
  },
  fy: {
    brand: {
      titleIndex: "Wolkom by Fruit Shop - Farske Fruiten Online",
      titleBasket: "Winkelwein - Fruit Shop",
      titleCheckout: "Ofrekkenje - Oarder ôfmeitsje - Fruit Shop",
      titleSlot: "Fruitlechje - Fruit Shop",
      titleApple: "Farske Appel - Fruit Shop",
      titleBanana: "Farske Banaan - Fruit Shop",
      titleLemon: "Farske Sitroen - Fruit Shop",
      by: "Troch {name}",
    },
    header: {
      homeAria: "Gean nei de thússide",
      productsLink: "Sjoch produkten",
      basketAria: "Sjoch winkelwein",
      basketText: "Sjoch winkelwein",
      logoAlt: "Fruit Shop Logo",
      basketAlt: "Ikoan winkelwein",
      chooseLanguage: "Taal",
      languages: { en: "English", nl: "Nederlands", ja: "日本語", vi: "Tiếng Việt", fy: "Frysk" },
    },
    products: {
      title: "Produkten",
      apple: "Appel",
      banana: "Banaan",
      lemon: "Sitroen",
      goTo: "Nei {product}",
      slotTry: "Probearje de Slotmasine",
      slotAria: "Probearje dyn gelok mei de slotmasine",
    },
    product: {
      appleDesc: "Hâldt de dokter bûten de doar (net goaie!).",
      bananaDesc: "Natuerlike enerzjybar. Apkes hâlde der fan!",
      lemonDesc: "Krijst sitroenen? Meitsje limonade.",
      addAria: "Foegje {product} ta oan winkelwein",
      addBtn: "Tafoegje oan wein",
    },
    basket: {
      title: "Dyn winkelwein",
      empty: "Gjin produkten yn 'e wein.",
      clear: "Wein leegje",
      checkout: "Ofrekkenje",
      actionsAria: "Aksjes winkelwein",
      listAria: "Produkten yn 'e wein",
    },
    blend: {
      optionLabel: "Selektearre fruchten blende ta in smoothie",
      single: "Smoothy mei ien smaak: {flavours}",
      multi: "Smoothy mei meardere smaken: {flavours}",
      checkoutNoticePrefix: "Smoothie-opsje selektearre.",
      ariaGroup: "Smoothie-opsje",
      blendingTitle: "Blende",
    },
    checkout: {
      title: "Ofrekkenje",
      formAria: "Ofrekkenformulier",
      name: "Namme:",
      address: "Adres:",
      placeOrder: "Bestelling pleatse",
      success: "Tanke foar dyn bestelling!",
      nameAria: "Folsleine namme ynfiere",
      addressAria: "Leveringsadres ynfiere",
      placeAria: "Bestelling pleatse",
    },
    slot: {
      title: "Slotmasine",
      desc: "Klik \"Tafoegje oan wein\" om te draaien! In tafallich stik fruit wurdt tafoege oan dyn wein.",
      addBtn: "Tafoegje oan wein",
      addAria: "Draai de slot en foegje tafallich fruit ta oan 'e wein",
      spinning: "Draait...",
      none: "Gjin fruchten beskikber om te draaien.",
      addedLive: "{product} tafoege oan de wein.",
      displayAria: "Fruitslot werjefte",
    },
    common: { mainNav: "Haadnavigaasje" },
  },
};

function getLanguage() {
  try {
    const stored = localStorage.getItem("lang");
    if (stored && SUPPORTED_LOCALES.includes(stored)) return stored;
  } catch (e) {}
  const nav = (navigator.language || "en").toLowerCase();
  const found = SUPPORTED_LOCALES.find((l) => nav.startsWith(l));
  return found || "en";
}

function setLanguage(lang) {
  if (!SUPPORTED_LOCALES.includes(lang)) return;
  try { localStorage.setItem("lang", lang); } catch (e) {}
  document.documentElement.setAttribute("lang", lang);
  applyTranslations();
  // Re-render dynamic UI parts to update composed strings
  try {
    renderBasket && renderBasket();
  } catch (e) {}
  try {
    renderBlendUI && renderBlendUI();
  } catch (e) {}
  try {
    renderCheckoutBlendNote && renderCheckoutBlendNote();
  } catch (e) {}
  try {
    renderBasketIndicator && renderBasketIndicator();
  } catch (e) {}
}

function t(key, vars) {
  const lang = getLanguage();
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  const parts = key.split(".");
  let cur = dict;
  for (const p of parts) {
    if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
      cur = cur[p];
    } else {
      cur = null; break;
    }
  }
  let str = (typeof cur === "string" ? cur : null) || key;
  if (vars && typeof vars === "object") {
    for (const [k, v] of Object.entries(vars)) {
      str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
    }
  }
  return str;
}

function parseI18nVars(el) {
  try {
    const raw = el.getAttribute("data-i18n-vars");
    if (!raw) return undefined;
    const obj = JSON.parse(raw);
    const resolved = {};
    for (const [k, v] of Object.entries(obj)) {
      if (typeof v === "string" && v.startsWith("i18n:")) {
        resolved[k] = t(v.slice(5));
      } else {
        resolved[k] = v;
      }
    }
    return resolved;
  } catch (e) {
    return undefined;
  }
}

function applyTranslations(root) {
  const r = root || document;
  // text content keys
  r.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key, parseI18nVars(el));
  });
  // attribute translations: data-i18n-attrs="attr1:key1,attr2:key2"
  r.querySelectorAll("[data-i18n-attrs]").forEach((el) => {
    const mapping = el.getAttribute("data-i18n-attrs");
    if (!mapping) return;
    const vars = parseI18nVars(el);
    mapping.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key, vars));
    });
  });
  // document title via body[data-i18n-title]
  const titleKey = document.body && document.body.getAttribute("data-i18n-title");
  if (titleKey) {
    document.title = t(titleKey);
  }
  // footer author text variables
  const author = r.querySelector("[data-i18n-author]");
  if (author) {
    author.textContent = t("brand.by", { name: author.getAttribute("data-author-name") || "Tim Lolkema" });
  }
  // language selector label and options
  const langLabel = r.querySelector("label[for='langSelect'] [data-i18n]") || r.querySelector("label[for='langSelect']");
  if (langLabel) {
    langLabel.textContent = t("header.chooseLanguage");
  }
  const select = document.getElementById("langSelect");
  if (select) {
    const lang = getLanguage();
    select.value = lang;
    // Update option text per language
    select.querySelectorAll("option").forEach((opt) => {
      const val = opt.value;
      opt.textContent = t(`header.languages.${val}`);
    });
  }
}

// expose minimal i18n globally for inline scripts
window.t = t;
window.setLanguage = setLanguage;
window.applyTranslations = applyTranslations;

// Initialize i18n on DOMContentLoaded
(function initI18n() {
  const lang = getLanguage();
  document.documentElement.setAttribute("lang", lang);
  if (document.readyState !== "loading") {
    applyTranslations();
  } else {
    document.addEventListener("DOMContentLoaded", () => applyTranslations());
  }
})();

const PRODUCTS = {
  apple: { name: "Apple", emoji: "🍏" },
  banana: { name: "Banana", emoji: "🍌" },
  lemon: { name: "Lemon", emoji: "🍋" },
};

// Expose for pages that need to iterate available fruits (e.g., slot machine)
window.PRODUCTS = PRODUCTS;

function productName(key) {
  return t(`products.${key}`);
}

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
    .map((k) => (PRODUCTS[k] ? productName(k) : null))
    .filter(Boolean);
  if (names.length === 0) return "";
  const flavours = names.join(" + ");
  if (names.length === 1) {
    return t("blend.single", { flavours });
  }
  return t("blend.multi", { flavours });
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
    const prefix = t("blend.checkoutNoticePrefix");
    // Static blender icon (decorative) + summary text
    note.innerHTML = `
      <span class="blend-icon" aria-hidden="true" title="${t("blend.blendingTitle")}">
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
      <span>${prefix} ${summary}.</span>`;
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
    basketList.innerHTML = `<li>${t("basket.empty")}</li>`;
    if (cartButtonsRow) cartButtonsRow.style.display = "none";
    // Update blend UI as well when empty
    renderBlendUI && renderBlendUI();
    return;
  }
  basket.forEach((product) => {
    const item = PRODUCTS[product];
    if (item) {
      const li = document.createElement("li");
      li.innerHTML = `<span class='basket-emoji'>${item.emoji}</span> <span>${productName(product)}</span>`;
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
