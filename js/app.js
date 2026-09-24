"use strict";

// استخراج البيانات من window.MajalatiData
const articles = (window.MajalatiData && window.MajalatiData.articles) || [];
const news = (window.MajalatiData && window.MajalatiData.news) || [];
const categories = (window.MajalatiData && window.MajalatiData.categories) || [];

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

/* =========================================================
   FAVORITES & HISTORY
========================================================= */

function saveLastRead(id) {
  try {
    localStorage.setItem("lastReadArticle", String(id));
  } catch (e) { /* تجاهل */ }
}

function addToHistory(id, type) {
  try {
    let history = JSON.parse(localStorage.getItem("history")) || [];
    history = history.filter(function(item) { return item.id !== id; });
    history.unshift({ id: id, type: type, date: new Date().toISOString() });
    if (history.length > 20) history = history.slice(0, 20);
    localStorage.setItem("history", JSON.stringify(history));
  } catch (e) { /* تجاهل */ }
}

function toggleFavorite(id) {
  try {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const index = favorites.indexOf(id);
    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (e) { /* تجاهل */ }
}

function isFavorite(id) {
  try {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    return favorites.includes(id);
  } catch (e) {
    return false;
  }
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
      const url = item.type === "article"
        ? `article.html?id=${item.id}`
        : `news-article.html?id=${item.id}`;
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
  const url = type === "article"
    ? `article.html?id=${item.id}`
    : `news-article.html?id=${item.id}`;
  const historyType = type === "article" ? "article" : "news";
  const isFav = isFavorite(item.id);

  const timeHtml = item.time ? `<span>🕐 ${escapeHTML(item.time)}</span>` : "";
  const authorHtml = type === "article"
    ? `<span>✍️ ${escapeHTML(item.author || "التحرير")}</span>`
    : "";

  return `
    <article class="article-card">
      <a href="${url}" onclick="saveLastRead(${item.id}); addToHistory(${item.id}, '${historyType}');" aria-label="${escapeHTML(item.title)}">
        <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy">
      </a>
      <div class="article-body">
        <span class="eyebrow">${escapeHTML(item.category)}</span>
        <div class="meta-row">
          <span>📅 ${formatDate(item.date)}</span>
          ${timeHtml}
          ${authorHtml}
        </div>
        <h3><a href="${url}" onclick="saveLastRead(${item.id}); addToHistory(${item.id}, '${historyType}');">${escapeHTML(item.title)}</a></h3>
        <p>${escapeHTML(item.excerpt)}</p>
        <div class="card-actions">
          <button class="fav-btn ${isFav ? "active" : ""}" data-id="${item.id}"
                  onclick="toggleFavorite(${item.id}); this.classList.toggle('active'); this.innerHTML = isFavorite(${item.id}) ? '❤️' : '🤍';">
            ${isFav ? "❤️" : "🤍"}
          </button>
          <a class="read-more" href="${url}" onclick="saveLastRead(${item.id}); addToHistory(${item.id}, '${historyType}');">
            ${type === "article" ? "قراءة المقال" : "قراءة الخبر"} ←
          </a>
        </div>
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
    latestArticles.innerHTML = articles.map(function(item) {
      return createCard(item, "article");
    }).join("");
  }

  if (latestNews) {
    latestNews.innerHTML = news.map(function(item) {
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
   HERO SLIDER (بدون حدود ♾️)
========================================================= */

let heroIndex = 0;
let heroTimer = null;
const AUTO_SLIDE_INTERVAL = 5000;

function createHero(container) {
  if (!container || !articles.length) return;

  const heroList = articles;
  const total = heroList.length;

  function render() {
    if (heroIndex >= total) heroIndex = 0;
    if (heroIndex < 0) heroIndex = total - 1;

    const item = heroList[heroIndex];

    let dotsHtml = "";
    for (let i = 0; i < total; i++) {
      dotsHtml += `<span class="hero-dot ${i === heroIndex ? "active" : ""}" onclick="goToHero(${i})"></span>`;
    }

    container.innerHTML = `
      <div class="feature-card">
        <a href="article.html?id=${item.id}" onclick="saveLastRead(${item.id}); addToHistory(${item.id}, 'article');">
          <img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
        </a>
        <div class="feature-content">
          <span class="eyebrow">${escapeHTML(item.category)}</span>
          <h2><a href="article.html?id=${item.id}" onclick="saveLastRead(${item.id}); addToHistory(${item.id}, 'article');">${escapeHTML(item.title)}</a></h2>
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
    if (heroIndex < 0) heroIndex = total - 1;
    if (heroIndex >= total) heroIndex = 0;
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
      if (heroIndex >= total) heroIndex = 0;
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

  container.addEventListener("mouseenter", function() {
    if (heroTimer) clearInterval(heroTimer);
  });

  container.addEventListener("mouseleave", function() {
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

function loadCategoryFromURL() {
  const category = getQueryParam("category");
  if (!category) return;
  const exists = categories.some(function(item) { return item.name === category; });
  if (exists) currentCategory = category;
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

function handleNewsQuery() {
  const id = Number(getQueryParam("id"));
  if (!id) return;
  const item = news.find(function(n) { return Number(n.id) === id; });
  if (!item) return;
  // إذا كان المستخدم في news.html?id=X، وجّهه لصفحة الخبر
  window.location.href = `news-article.html?id=${id}`;
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
  saveLastRead(item.id);
  addToHistory(item.id, "article");

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
  saveLastRead(item.id);
  addToHistory(item.id, "news");

  const timeHtml = item.time
    ? `<span>🕐 ${escapeHTML(item.time)}</span>`
    : "";

  container.innerHTML = `
    <article class="article-detail">
      <img class="article-detail-image" src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}">
      <div class="article-detail-content">
        <span class="eyebrow">${escapeHTML(item.category)}</span>
        <div class="meta-row">
          <span>📅 ${formatDate(item.date)}</span>
          ${timeHtml}
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
  if (typeof articles === "undefined" || typeof news === "undefined") {
    console.error("❌ البيانات غير متوفرة — تأكد من تحميل js/articles.js و js/news.js قبل app.js");
    return;
  }

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
  console.log("📚 عدد المقالات:", articles.length);
  console.log("📰 عدد الأخبار:", news.length);
});