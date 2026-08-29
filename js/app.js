"use strict";

/* =========================================================
   مجَلّتكم - APP.JS
   نظام موحد: Home / Articles / Article / News
========================================================= */

/* =========================================================
   DATA
========================================================= */

const categories = [
  { name: "سياسة", icon: "🏛️", description: "أهم التطورات والتحليلات السياسية." },
  { name: "اقتصاد", icon: "💰", description: "الأسواق والأعمال والاقتصاد." },
  { name: "تكنولوجيا", icon: "💻", description: "أحدث الابتكارات التقنية." },
  { name: "مجتمع", icon: "👥", description: "قضايا المجتمع والحياة اليومية." },
  { name: "رياضة", icon: "⚽", description: "آخر أخبار الرياضة والبطولات." },
  { name: "العالم", icon: "🌍", description: "أهم الأحداث الدولية." },
  { name: "ذكاء اصطناعي", icon: "🤖", description: "كل جديد في عالم الذكاء الاصطناعي." },
  { name: "تطبيقات", icon: "📱", description: "أفضل التطبيقات والخدمات الرقمية." }
];

const articles = [
  {
    id: 1,
    title: "كيف يغيّر الذكاء الاصطناعي مستقبل العمل؟",
    category: "ذكاء اصطناعي",
    author: "هيئة التحرير",
    date: "2026-08-12",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    excerpt: "الذكاء الاصطناعي يدخل بسرعة في مختلف القطاعات ويعيد تشكيل طريقة العمل والإنتاج.",
    content: "يشهد العالم تحولاً كبيراً مع انتشار تقنيات الذكاء الاصطناعي. ولم تعد هذه التقنيات مقتصرة على المختبرات والشركات التقنية، بل أصبحت جزءاً من قطاعات متعددة مثل التعليم والصحة والإعلام والتجارة.\n\nوتعمل المؤسسات على دمج أدوات الذكاء الاصطناعي في تحليل البيانات وأتمتة المهام وتحسين تجربة المستخدم.\n\nومن المتوقع أن يستمر هذا التحول خلال السنوات القادمة مع ظهور وظائف جديدة وتغير طبيعة عدد من الوظائف الحالية."
  },
  {
    id: 2,
    title: "الاقتصاد الرقمي يفتح فرصاً جديدة للشركات",
    category: "اقتصاد",
    author: "قسم الاقتصاد",
    date: "2026-08-11",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    excerpt: "التحول الرقمي أصبح أحد أهم عوامل نمو الشركات الصغيرة والمتوسطة.",
    content: "تتجه الشركات بشكل متزايد نحو الحلول الرقمية بهدف تحسين الإنتاجية والوصول إلى العملاء وخفض التكاليف التشغيلية.\n\nوتساعد التجارة الإلكترونية والخدمات السحابية وأدوات تحليل البيانات الشركات على تطوير نماذج أعمال أكثر مرونة."
  },
  {
    id: 3,
    title: "الهواتف الذكية أصبحت مركز الحياة الرقمية",
    category: "تكنولوجيا",
    author: "قسم التكنولوجيا",
    date: "2026-08-10",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    excerpt: "من التواصل إلى العمل والترفيه، أصبح الهاتف الذكي جزءاً أساسياً من الحياة اليومية.",
    content: "تواصل الهواتف الذكية تطورها من خلال تحسين الكاميرات والشاشات والأداء والذكاء الاصطناعي.\n\nوأصبح الهاتف مركزاً للاتصالات والعمل والدفع الإلكتروني والترفيه والوصول إلى الخدمات الرقمية."
  },
  {
    id: 4,
    title: "الرياضة الرقمية تدخل مرحلة جديدة",
    category: "رياضة",
    author: "قسم الرياضة",
    date: "2026-08-09",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
    excerpt: "التكنولوجيا والبيانات أصبحت جزءاً أساسياً من عالم الرياضة الحديثة.",
    content: "تعتمد الأندية والمنتخبات اليوم على البيانات والتحليل المتقدم من أجل تحسين الأداء الرياضي.\n\nوتستخدم التقنيات الحديثة في تحليل أداء اللاعبين ومراقبة اللياقة وتطوير الاستراتيجيات."
  },
  {
    id: 5,
    title: "كيف تتغير المدن العربية مع التكنولوجيا؟",
    category: "مجتمع",
    author: "قسم المجتمع",
    date: "2026-08-08",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=85",
    excerpt: "المدن الذكية أصبحت واقعاً يتوسع في المنطقة العربية.",
    content: "تساعد التكنولوجيا الحديثة المدن على إدارة النقل والطاقة والخدمات العامة بطريقة أكثر كفاءة.\n\nوتسعى مشاريع المدن الذكية إلى تحسين جودة الحياة وتسهيل الوصول إلى الخدمات."
  },
  {
    id: 6,
    title: "التغيرات العالمية وتأثيرها على الأسواق",
    category: "العالم",
    author: "قسم العالم",
    date: "2026-08-07",
    image: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1400&q=85",
    excerpt: "تؤثر التحولات الدولية بشكل مباشر على التجارة والاستثمار والأسواق العالمية.",
    content: "أصبحت الأسواق العالمية مترابطة بشكل كبير، مما يجعل الأحداث الدولية عاملاً مهماً في حركة الاقتصاد.\n\nوتؤثر الأحداث الجيوسياسية والتجارية والاقتصادية على حركة الاستثمارات والأسعار."
  },
  {
    id: 7,
    title: "السياسة الحديثة بين الإعلام والمنصات الرقمية",
    category: "سياسة",
    author: "قسم السياسة",
    date: "2026-08-06",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85",
    excerpt: "غيرت المنصات الرقمية طريقة وصول الأخبار السياسية إلى الجمهور.",
    content: "أصبحت شبكات التواصل الاجتماعي مصدراً رئيسياً للمعلومات السياسية، وهو ما يفرض تحديات جديدة على الإعلام.\n\nويحتاج الجمهور إلى التحقق من مصادر المعلومات ومقارنة الأخبار قبل اعتمادها."
  },
  {
    id: 8,
    title: "أفضل الممارسات لحماية الخصوصية الرقمية",
    category: "تطبيقات",
    author: "قسم التطبيقات",
    date: "2026-08-05",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
    excerpt: "خطوات بسيطة تساعد المستخدمين على حماية حساباتهم وبياناتهم الشخصية.",
    content: "استخدام كلمات مرور قوية والمصادقة الثنائية وتحديث التطبيقات باستمرار من أهم خطوات حماية الخصوصية.\n\nكما ينصح بمراجعة صلاحيات التطبيقات وعدم مشاركة البيانات الحساسة مع جهات غير موثوقة."
  }
];

const news = [
  {
    id: 101,
    title: "تطورات جديدة في عالم الذكاء الاصطناعي",
    category: "ذكاء اصطناعي",
    author: "قسم التكنولوجيا",
    date: "2026-08-15",
    time: "10:30",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    excerpt: "شركات التقنية تواصل تطوير أدوات ذكية جديدة للمستخدمين.",
    content: "تشهد تقنيات الذكاء الاصطناعي تطورات متسارعة مع استمرار الشركات في إطلاق أدوات وحلول جديدة."
  },
  {
    id: 102,
    title: "أسواق المال تراقب التطورات الاقتصادية",
    category: "اقتصاد",
    author: "قسم الاقتصاد",
    date: "2026-08-15",
    time: "09:45",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    excerpt: "المستثمرون يترقبون مجموعة من المؤشرات الاقتصادية الجديدة.",
    content: "تتابع الأسواق مجموعة من المؤشرات الاقتصادية التي قد تؤثر على حركة الاستثمار والأسعار."
  },
  {
    id: 103,
    title: "بطولات رياضية جديدة تستقطب الجماهير",
    category: "رياضة",
    author: "قسم الرياضة",
    date: "2026-08-14",
    time: "08:50",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    excerpt: "منافسات قوية وحضور جماهيري كبير في البطولات الأخيرة.",
    content: "تشهد البطولات الرياضية الأخيرة منافسات قوية وحضوراً جماهيرياً متزايداً."
  },
  {
    id: 104,
    title: "تطبيقات جديدة تعزز الإنتاجية اليومية",
    category: "تطبيقات",
    author: "قسم التطبيقات",
    date: "2026-08-14",
    time: "08:20",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    excerpt: "عدد من التطبيقات الجديدة يقدم حلولاً عملية للمستخدمين.",
    content: "ظهرت مجموعة من التطبيقات التي تهدف إلى تنظيم الوقت وإدارة المهام وتحسين الإنتاجية اليومية."
  },
  {
    id: 105,
    title: "تطورات دولية تحظى باهتمام واسع",
    category: "العالم",
    author: "قسم العالم",
    date: "2026-08-13",
    time: "07:45",
    image: "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=85",
    excerpt: "أحداث دولية جديدة تتصدر اهتمام وسائل الإعلام.",
    content: "تتصدر مجموعة من التطورات الدولية اهتمام وسائل الإعلام والمتابعين حول العالم."
  },
  {
    id: 106,
    title: "مدن عربية تتجه نحو الحلول الذكية",
    category: "مجتمع",
    author: "قسم المجتمع",
    date: "2026-08-13",
    time: "07:15",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85",
    excerpt: "توسع مشاريع المدن الذكية في عدد من الدول العربية.",
    content: "تتوسع مشاريع المدن الذكية في عدد من المدن العربية بهدف تحسين النقل والخدمات والطاقة."
  },
  {
    id: 107,
    title: "مستجدات سياسية جديدة في المنطقة",
    category: "سياسة",
    author: "قسم السياسة",
    date: "2026-08-12",
    time: "18:30",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
    excerpt: "متابعة لأبرز التطورات السياسية الإقليمية والدولية.",
    content: "تتابع الأوساط الإعلامية والسياسية مجموعة من التطورات الجديدة في المنطقة."
  }
];

/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString + "T12:00:00");
  if (isNaN(date.getTime())) return "";
  return new Intl.DateTimeFormat("ar-MA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function getPageNumber(name) {
  const value = Number(getQueryParam(name) || 1);
  if (!isFinite(value) || value < 1) return 1;
  return Math.floor(value);
}

function getCategoryFromURL() {
  return getQueryParam("category") || "الكل";
}

/* =========================================================
   THEME
========================================================= */

function initializeTheme() {
  const saved = localStorage.getItem("majalati-theme");
  if (saved === "dark") document.body.classList.add("dark");
  updateThemeButton();
}

function updateThemeButton() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  const dark = document.body.classList.contains("dark");
  btn.textContent = dark ? "☀️" : "🌙";
  btn.setAttribute("aria-label", dark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن");
}

function setupTheme() {
  const btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
    localStorage.setItem("majalati-theme", document.body.classList.contains("dark") ? "dark" : "light");
    updateThemeButton();
  });
}

/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {
  const nav = document.querySelector(".main-nav");
  if (!nav) return;

  const page = document.body.dataset.page || "home";
  const links = [
    { label: "🏠 الرئيسية", href: "index.html", page: "home" },
    { label: "📰 الأخبار", href: "news.html", page: "news" },
    { label: "📚 المقالات", href: "articles.html", page: "articles" }
  ];

  nav.innerHTML = links.map(function(item) {
    const active = item.page === page ? "active" : "";
    return `<a class="nav-link ${active}" href="${item.href}">${item.label}</a>`;
  }).join("");
}

/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", function() {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(open));
    btn.textContent = open ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      nav.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "☰";
    });
  });
}

/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {
  const input = document.getElementById("searchInput");
  const dropdown = document.getElementById("searchDropdown");
  if (!input || !dropdown) return;

  const allItems = [
    ...articles.map(function(item) { return { ...item, type: "article" }; }),
    ...news.map(function(item) { return { ...item, type: "news" }; })
  ];

  input.addEventListener("input", function() {
    const query = input.value.trim().toLowerCase();
    if (!query) {
      dropdown.innerHTML = "";
      dropdown.classList.remove("visible");
      return;
    }

    const results = allItems.filter(function(item) {
      return item.title.toLowerCase().includes(query) ||
             item.excerpt.toLowerCase().includes(query) ||
             item.category.toLowerCase().includes(query);
    }).slice(0, 8);

    if (!results.length) {
      dropdown.innerHTML = `<div class="search-item"><strong>لا توجد نتائج</strong></div>`;
      dropdown.classList.add("visible");
      return;
    }

    dropdown.innerHTML = results.map(function(item) {
      const url = item.type === "article" ? `article.html?id=${item.id}` : `news.html?id=${item.id}`;
      return `<a href="${url}" class="search-item"><strong>${escapeHTML(item.title)}</strong><small>${escapeHTML(item.category)} · ${formatDate(item.date)}</small></a>`;
    }).join("");

    dropdown.classList.add("visible");
  });

  document.addEventListener("click", function(e) {
    if (!e.target.closest(".search-shell")) dropdown.classList.remove("visible");
  });
}

/* =========================================================
   CARD HTML
========================================================= */

function createCard(item, type) {
  const url = type === "article" ? `article.html?id=${item.id}` : `news-article.html?id=${item.id}`;
  const timeHtml = item.time ? `<span>🕐 ${escapeHTML(item.time)}</span>` : "";
  const authorHtml = type === "article" ? `<span>✍️ ${escapeHTML(item.author || "التحرير")}</span>` : "";

  return `
    <article class="article-card">
      <a href="${url}" aria-label="${escapeHTML(item.title)}">
        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy">
      </a>
      <div class="article-body">
        <span class="eyebrow">${escapeHTML(item.category)}</span>
        <div class="meta-row">
          <span>📅 ${formatDate(item.date)}</span>
          ${timeHtml}
          ${authorHtml}
        </div>
        <h3><a href="${url}">${escapeHTML(item.title)}</a></h3>
        <p>${escapeHTML(item.excerpt)}</p>
        <a class="read-more" href="${url}">${type === "article" ? "قراءة المقال" : "قراءة الخبر"} ←</a>
      </div>
    </article>
  `;
}

/* =========================================================
   HOME
========================================================= */

function initializeHome() {
  const hero = document.getElementById("heroFeatured");
  const latestArticles = document.getElementById("latestArticles");
  const latestNews = document.getElementById("latestNews");
  const categoryHighlights = document.getElementById("categoryHighlights");

  if (hero) createHero(hero);
  if (latestArticles) {
    latestArticles.innerHTML = articles.slice(0, 3).map(function(item) {
      return createCard(item, "article");
    }).join("");
  }
  if (latestNews) {
    latestNews.innerHTML = news.slice(0, 3).map(function(item) {
      return createCard(item, "news");
    }).join("");
  }
  if (categoryHighlights) {
    categoryHighlights.innerHTML = categories.map(function(cat) {
      const count = articles.filter(function(a) { return a.category === cat.name; }).length +
                    news.filter(function(n) { return n.category === cat.name; }).length;
      return `
        <a href="articles.html?category=${encodeURIComponent(cat.name)}" class="category-card">
          <div class="category-icon">${cat.icon}</div>
          <h3>${escapeHTML(cat.name)}</h3>
          <p>${escapeHTML(cat.description)} · ${count} محتوى</p>
        </a>
      `;
    }).join("");
  }
}

/* =========================================================
   HERO SLIDER (مع نقاط ● ● ● ● ●)
========================================================= */

let heroIndex = 0;
let heroTimer = null;
const AUTO_SLIDE_INTERVAL = 5000;

function createHero(container) {
  if (!container || !articles.length) return;

  function render() {
    const total = articles.length;
    if (heroIndex >= total) heroIndex = 0;
    if (heroIndex < 0) heroIndex = total - 1;

    const item = articles[heroIndex];

    let dotsHtml = '';
    for (let i = 0; i < total; i++) {
      dotsHtml += `<span class="hero-dot ${i === heroIndex ? 'active' : ''}" onclick="goToHero(${i})"></span>`;
    }

    container.innerHTML = `
      <div class="feature-card">
        <a href="article.html?id=${item.id}">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
        </a>
        <div class="feature-content">
          <span class="eyebrow">${escapeHTML(item.category)}</span>
          <h2><a href="article.html?id=${item.id}">${escapeHTML(item.title)}</a></h2>
          <p>${escapeHTML(item.excerpt)}</p>
          <div class="meta-row">📅 ${formatDate(item.date)} · ✍️ ${escapeHTML(item.author)}</div>
          <div class="hero-dots-wrapper">
            <button class="hero-arrow" onclick="changeHero(-1)">❮</button>
            <div class="hero-dots">${dotsHtml}</div>
            <button class="hero-arrow" onclick="changeHero(1)">❯</button>
          </div>
        </div>
      </div>
    `;
  }

  window.changeHero = function(direction) {
    heroIndex += direction;
    if (heroIndex < 0) heroIndex = articles.length - 1;
    if (heroIndex >= articles.length) heroIndex = 0;
    render();
    resetHeroTimer();
  };

  window.goToHero = function(index) {
    heroIndex = index;
    render();
    resetHeroTimer();
  };

  function startHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(function() {
      heroIndex++;
      if (heroIndex >= articles.length) heroIndex = 0;
      render();
    }, AUTO_SLIDE_INTERVAL);
  }

  function resetHeroTimer() {
    if (heroTimer) {
      clearInterval(heroTimer);
      startHeroTimer();
    }
  }

  render();
  startHeroTimer();

  container.addEventListener('mouseenter', function() {
    if (heroTimer) clearInterval(heroTimer);
  });

  container.addEventListener('mouseleave', function() {
    startHeroTimer();
  });
}

/* =========================================================
   ARTICLES PAGE
========================================================= */

let currentCategory = "الكل";
let currentArticlePage = 1;
const articlesPerPage = 6;

function getFilteredArticles() {
  if (currentCategory === "الكل") return [...articles];
  return articles.filter(function(a) { return a.category === currentCategory; });
}

function renderCategoryFilter() {
  const container = document.getElementById("categoryFilter");
  if (!container) return;

  const allCategories = ["الكل", ...categories.map(function(c) { return c.name; })];
  container.innerHTML = allCategories.map(function(cat) {
    const active = cat === currentCategory ? "active" : "";
    return `<button type="button" class="filter-chip ${active}" data-category="${escapeHTML(cat)}">${escapeHTML(cat)}</button>`;
  }).join("");

  container.querySelectorAll(".filter-chip").forEach(function(btn) {
    btn.addEventListener("click", function() {
      currentCategory = btn.dataset.category;
      currentArticlePage = 1;
      renderCategoryFilter();
      renderArticlesPage();
    });
  });
}

function renderArticlesPage() {
  const container = document.getElementById("articlesList");
  if (!container) return;

  const filtered = getFilteredArticles();
  const start = (currentArticlePage - 1) * articlesPerPage;
  const pageArticles = filtered.slice(start, start + articlesPerPage);

  if (!pageArticles.length) {
    container.innerHTML = `<div class="empty-state">لا توجد مقالات في هذا القسم.</div>`;
    renderPagination(0);
    return;
  }

  container.innerHTML = pageArticles.map(function(item) { return createCard(item, "article"); }).join("");
  renderPagination(Math.ceil(filtered.length / articlesPerPage));
}

function renderPagination(totalPages) {
  const container = document.getElementById("pagination");
  if (!container) return;
  if (totalPages <= 1) { container.innerHTML = ""; return; }

  let html = `
    <button type="button" ${currentArticlePage === 1 ? "disabled" : ""} data-page="${currentArticlePage - 1}">‹</button>
  `;

  for (let i = 1; i <= totalPages; i++) {
    html += `<button type="button" class="${i === currentArticlePage ? "active" : ""}" data-page="${i}">${i}</button>`;
  }

  html += `
    <button type="button" ${currentArticlePage === totalPages ? "disabled" : ""} data-page="${currentArticlePage + 1}">›</button>
  `;

  container.innerHTML = html;

  container.querySelectorAll("button").forEach(function(btn) {
    btn.addEventListener("click", function() {
      if (btn.disabled) return;
      const page = Number(btn.dataset.page);
      if (page >= 1 && page <= totalPages) {
        currentArticlePage = page;
        renderArticlesPage();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });
}

/* =========================================================
   NEWS PAGE
========================================================= */

let currentNewsCategory = "all";

function getFilteredNews() {
  if (currentNewsCategory === "all" || currentNewsCategory === "الكل") return [...news];
  return news.filter(function(item) { return item.category === currentNewsCategory; });
}

function renderNewsPage() {
  const container = document.getElementById("newsGrid");
  if (!container) return;

  const empty = document.getElementById("newsEmpty");
  const count = document.getElementById("newsCount");
  const filtered = getFilteredNews();

  if (count) count.textContent = filtered.length + " خبر";

  if (!filtered.length) {
    container.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }

  if (empty) empty.hidden = true;
  container.innerHTML = filtered.slice().sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  }).map(function(item) { return createCard(item, "news"); }).join("");
}

function setupNewsFilters() {
  const container = document.getElementById("newsCategoryFilter");
  if (!container) return;

  const urlCategory = getQueryParam("category");
  if (urlCategory) currentNewsCategory = urlCategory;

  const buttons = container.querySelectorAll(".filter-chip");
  buttons.forEach(function(btn) {
    const category = btn.dataset.category;
    if (category === currentNewsCategory) btn.classList.add("active");
    else btn.classList.remove("active");

    btn.addEventListener("click", function() {
      currentNewsCategory = btn.dataset.category;
      buttons.forEach(function(b) { b.classList.remove("active"); });
      btn.classList.add("active");
      renderNewsPage();
    });
  });
}

/* =========================================================
   ARTICLE DETAILS
========================================================= */

function initializeArticleDetails() {
  const container = document.getElementById("articleDetails");
  if (!container) return;

  const id = Number(getQueryParam("id"));
  const item = articles.find(function(a) { return a.id === id; });

  if (!item) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>المقال غير موجود</h2>
        <p>عذراً، لم نتمكن من العثور على المقال المطلوب.</p>
        <a class="article-back" href="articles.html">العودة إلى المقالات</a>
      </div>
    `;
    return;
  }

  document.title = item.title + " | مجلّتكم";

  container.innerHTML = `
    <article class="article-detail">
      <img class="article-detail-image" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
      <div class="article-detail-content">
        <span class="eyebrow">${escapeHTML(item.category)}</span>
        <div class="meta-row">
          <span>📅 ${formatDate(item.date)}</span>
          <span>✍️ ${escapeHTML(item.author)}</span>
        </div>
        <h1>${escapeHTML(item.title)}</h1>
        <div class="article-lead">${escapeHTML(item.excerpt)}</div>
        <div class="article-text">${item.content.split("\n").map(function(p) { return p.trim() ? "<p>" + escapeHTML(p) + "</p>" : ""; }).join("")}</div>
        <a class="article-back" href="articles.html">← العودة إلى المقالات</a>
      </div>
    </article>
  `;
}

/* =========================================================
   NEWS DETAILS
========================================================= */

function initializeNewsDetails() {
  const container = document.getElementById("newsArticleDetails");
  if (!container) return;

  const id = Number(getQueryParam("id"));
  const item = news.find(function(n) { return n.id === id; });

  if (!item) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>الخبر غير موجود</h2>
        <p>عذراً، لم نتمكن من العثور على الخبر المطلوب.</p>
        <a class="article-back" href="news.html">العودة إلى الأخبار</a>
      </div>
    `;
    return;
  }

  document.title = item.title + " | مجلّتكم";

  container.innerHTML = `
    <article class="article-detail">
      <img class="article-detail-image" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
      <div class="article-detail-content">
        <span class="eyebrow">${escapeHTML(item.category)}</span>
        <div class="meta-row">
          <span>📅 ${formatDate(item.date)}</span>
          <span>🕐 ${escapeHTML(item.time)}</span>
        </div>
        <h1>${escapeHTML(item.title)}</h1>
        <div class="article-lead">${escapeHTML(item.excerpt)}</div>
        <div class="article-text">${item.content.split("\n").map(function(p) { return p.trim() ? "<p>" + escapeHTML(p) + "</p>" : ""; }).join("")}</div>
        <a class="article-back" href="news.html">← العودة إلى الأخبار</a>
      </div>
    </article>
  `;
}

/* =========================================================
   NEWSLETTER
========================================================= */

function setupNewsletter() {
  const form = document.getElementById("newsletterForm");
  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const input = form.querySelector("input");
    if (!input || !input.value.trim()) return;
    alert("✅ تم تسجيل بريدك الإلكتروني بنجاح.");
    input.value = "";
  });
}

/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function() {
  initializeTheme();
  setupTheme();
  setupNavigation();
  setupMobileMenu();
  setupSearch();
  setupNewsletter();

  const page = document.body.dataset.page || "home";

  if (page === "home") {
    initializeHome();
  } else if (page === "articles") {
    loadCategoryFromURL();
    renderCategoryFilter();
    renderArticlesPage();
  } else if (page === "article") {
    initializeArticleDetails();
  } else if (page === "news") {
    setupNewsFilters();
    renderNewsPage();
    handleNewsQuery();
  } else if (page === "news-article") {
    initializeNewsDetails();
  }

  console.log("✅ تم تحميل مجلّتكم بنجاح");
});

function loadCategoryFromURL() {
  const category = getQueryParam("category");
  if (!category) return;
  const exists = categories.some(function(item) { return item.name === category; });
  if (exists) currentCategory = category;
}

function handleNewsQuery() {
  const id = Number(getQueryParam("id"));
  if (!id) return;
  const item = news.find(function(n) { return Number(n.id) === id; });
  if (!item) return;
}