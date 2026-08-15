/* =========================================================
   مجَلّتكم
   Main JavaScript
========================================================= */

"use strict";


/* =========================================================
   DATA
========================================================= */

document.getElementById("newsList")
const categories = [
  {
    name: "سياسة",
    icon: "🏛️",
    description: "أهم التطورات والتحليلات السياسية."
  },
  {
    name: "اقتصاد",
    icon: "💰",
    description: "الأسواق والأعمال والاقتصاد."
  },
  {
    name: "تكنولوجيا",
    icon: "💻",
    description: "أحدث الابتكارات التقنية."
  },
  {
    name: "مجتمع",
    icon: "👥",
    description: "قضايا المجتمع والحياة اليومية."
  },
  {
    name: "رياضة",
    icon: "⚽",
    description: "آخر أخبار الرياضة والبطولات."
  },
  {
    name: "العالم",
    icon: "🌍",
    description: "أهم الأحداث الدولية."
  },
  {
    name: "ذكاء اصطناعي",
    icon: "🤖",
    description: "كل جديد في عالم الذكاء الاصطناعي."
  },
  {
    name: "تطبيقات",
    icon: "📱",
    description: "أفضل التطبيقات والخدمات الرقمية."
  }
];


const articles = [

  {
    id: 1,
    title: "كيف يغيّر الذكاء الاصطناعي مستقبل العمل؟",
    category: "ذكاء اصطناعي",
    author: "هيئة التحرير",
    date: "2026-08-12",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "الذكاء الاصطناعي يدخل بسرعة في مختلف القطاعات ويعيد تشكيل طريقة العمل والإنتاج.",
    content:
      "يشهد العالم تحولاً كبيراً مع انتشار تقنيات الذكاء الاصطناعي. ولم تعد هذه التقنيات مقتصرة على المختبرات والشركات التقنية، بل أصبحت جزءاً من قطاعات متعددة مثل التعليم والصحة والإعلام والتجارة."
  },

  {
    id: 2,
    title: "الاقتصاد الرقمي يفتح فرصاً جديدة للشركات",
    category: "اقتصاد",
    author: "قسم الاقتصاد",
    date: "2026-08-11",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "التحول الرقمي أصبح أحد أهم عوامل نمو الشركات الصغيرة والمتوسطة.",
    content:
      "تتجه الشركات بشكل متزايد نحو الحلول الرقمية بهدف تحسين الإنتاجية والوصول إلى العملاء وخفض التكاليف التشغيلية."
  },

  {
    id: 3,
    title: "الهواتف الذكية أصبحت مركز الحياة الرقمية",
    category: "تكنولوجيا",
    author: "قسم التكنولوجيا",
    date: "2026-08-10",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "من التواصل إلى العمل والترفيه، أصبح الهاتف الذكي جزءاً أساسياً من الحياة اليومية.",
    content:
      "تواصل الهواتف الذكية تطورها من خلال تحسين الكاميرات والشاشات والأداء والذكاء الاصطناعي."
  },

  {
    id: 4,
    title: "الرياضة الرقمية تدخل مرحلة جديدة",
    category: "رياضة",
    author: "قسم الرياضة",
    date: "2026-08-09",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "التكنولوجيا والبيانات أصبحت جزءاً أساسياً من عالم الرياضة الحديثة.",
    content:
      "تعتمد الأندية والمنتخبات اليوم على البيانات والتحليل المتقدم من أجل تحسين الأداء الرياضي."
  },

  {
    id: 5,
    title: "كيف تتغير المدن العربية مع التكنولوجيا؟",
    category: "مجتمع",
    author: "قسم المجتمع",
    date: "2026-08-08",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "المدن الذكية أصبحت واقعاً يتوسع في المنطقة العربية.",
    content:
      "تساعد التكنولوجيا الحديثة المدن على إدارة النقل والطاقة والخدمات العامة بطريقة أكثر كفاءة."
  },

  {
    id: 6,
    title: "التغيرات العالمية وتأثيرها على الأسواق",
    category: "العالم",
    author: "قسم العالم",
    date: "2026-08-07",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "تؤثر التحولات الدولية بشكل مباشر على التجارة والاستثمار والأسواق العالمية.",
    content:
      "أصبحت الأسواق العالمية مترابطة بشكل كبير، مما يجعل الأحداث الدولية عاملاً مهماً في حركة الاقتصاد."
  },

  {
    id: 7,
    title: "السياسة الحديثة بين الإعلام والمنصات الرقمية",
    category: "سياسة",
    author: "قسم السياسة",
    date: "2026-08-06",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "غيرت المنصات الرقمية طريقة وصول الأخبار السياسية إلى الجمهور.",
    content:
      "أصبحت شبكات التواصل الاجتماعي مصدراً رئيسياً للمعلومات السياسية، وهو ما يفرض تحديات جديدة على الإعلام."
  },

  {
    id: 8,
    title: "أفضل الممارسات لحماية الخصوصية الرقمية",
    category: "تطبيقات",
    author: "قسم التطبيقات",
    date: "2026-08-05",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1400&q=85",
    excerpt:
      "خطوات بسيطة تساعد المستخدمين على حماية حساباتهم وبياناتهم الشخصية.",
    content:
      "استخدام كلمات مرور قوية والمصادقة الثنائية وتحديث التطبيقات باستمرار من أهم خطوات حماية الخصوصية."
  }

];


const news = [

  {
    id: 101,
    title: "تطورات جديدة في عالم الذكاء الاصطناعي",
    category: "ذكاء اصطناعي",
    date: "2026-08-15",
    excerpt:
      "شركات التقنية تواصل تطوير أدوات ذكية جديدة للمستخدمين."
  },

  {
    id: 102,
    title: "أسواق المال تراقب التطورات الاقتصادية",
    category: "اقتصاد",
    date: "2026-08-15",
    excerpt:
      "المستثمرون يترقبون مجموعة من المؤشرات الاقتصادية الجديدة."
  },

  {
    id: 103,
    title: "بطولات رياضية جديدة تستقطب الجماهير",
    category: "رياضة",
    date: "2026-08-14",
    excerpt:
      "منافسات قوية وحضور جماهيري كبير في البطولات الأخيرة."
  },

  {
    id: 104,
    title: "تطبيقات جديدة تعزز الإنتاجية اليومية",
    category: "تطبيقات",
    date: "2026-08-14",
    excerpt:
      "عدد من التطبيقات الجديدة يقدم حلولاً عملية للمستخدمين."
  },

  {
    id: 105,
    title: "تطورات دولية تحظى باهتمام واسع",
    category: "العالم",
    date: "2026-08-13",
    excerpt:
      "أحداث دولية جديدة تتصدر اهتمام وسائل الإعلام."
  },

  {
    id: 106,
    title: "مدن عربية تتجه نحو الحلول الذكية",
    category: "مجتمع",
    date: "2026-08-13",
    excerpt:
      "توسع مشاريع المدن الذكية في عدد من الدول العربية."
  }

];


/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "الرئيسية",
    href: "index.html",
    page: "home"
  },
  {
    label: "المقالات",
    href: "articles.html",
    page: "articles"
  },
  {
    label: "الأخبار",
    href: "news.html",
    page: "news"
  }
];


function renderNavigation() {

  const nav =
    document.querySelector(".main-nav");

  if (!nav) return;

  const currentPage =
    document.body.dataset.page || "home";

  nav.innerHTML = navItems
    .map(item => {

      const active =
        item.page === currentPage
          ? "active"
          : "";

      return `
        <a
          class="nav-link ${active}"
          href="${item.href}"
        >
          ${item.label}
        </a>
      `;

    })
    .join("");

}


/* =========================================================
   ARTICLE CARD
========================================================= */

function articleCard(article) {

  return `
    <article class="article-card">

      <img
        src="${article.image}"
        alt="${escapeHTML(article.title)}"
        loading="lazy"
      >

      <div class="article-body">

        <span class="eyebrow">
          ${escapeHTML(article.category)}
        </span>

        <h3>
          ${escapeHTML(article.title)}
        </h3>

        <div class="meta-row">
          <span>✍️ ${escapeHTML(article.author)}</span>
          <span>📅 ${formatDate(article.date)}</span>
        </div>

        <p>
          ${escapeHTML(article.excerpt)}
        </p>

        <a
          class="read-more"
          href="article.html?id=${article.id}"
        >
          اقرأ المقال ←
        </a>

      </div>

    </article>
  `;

}


/* =========================================================
   HOME - LATEST ARTICLES
========================================================= */

function renderLatestArticles() {

  const container =
    document.getElementById("latestArticles");

  if (!container) return;

  const latest =
    [...articles]
      .sort(
        (a, b) =>
          new Date(b.date) -
          new Date(a.date)
      )
      .slice(0, 6);

  container.innerHTML =
    latest
      .map(articleCard)
      .join("");

}


/* =========================================================
   HOME - NEWS
========================================================= */

function renderLatestNews() {

  const container =
    document.getElementById("latestNews");

  if (!container) return;

  container.innerHTML =
    news
      .slice(0, 6)
      .map(item => {

        return `
          <article class="article-card">

            <div class="article-body">

              <span class="eyebrow">
                ${escapeHTML(item.category)}
              </span>

              <h3>
                ${escapeHTML(item.title)}
              </h3>

              <div class="meta-row">
                <span>
                  📅 ${formatDate(item.date)}
                </span>
              </div>

              <p>
                ${escapeHTML(item.excerpt)}
              </p>

              <a
                class="read-more"
                href="news.html"
              >
                تفاصيل الخبر ←
              </a>

            </div>

          </article>
        `;

      })
      .join("");

}


/* =========================================================
   HOME - CATEGORIES
========================================================= */

function renderCategories() {

  const container =
    document.getElementById(
      "categoryHighlights"
    );

  if (!container) return;

  container.innerHTML =
    categories
      .map(category => {

        return `
          <a
            class="category-card"
            href="articles.html?category=${encodeURIComponent(category.name)}"
          >

            <div class="category-icon">
              ${category.icon}
            </div>

            <h3>
              ${escapeHTML(category.name)}
            </h3>

            <p>
              ${escapeHTML(category.description)}
            </p>

          </a>
        `;

      })
      .join("");

}


/* =========================================================
   FEATURED SLIDER
========================================================= */

let featuredIndex = 0;

let featuredTimer = null;


function renderFeatured() {

  const container =
    document.getElementById(
      "heroFeatured"
    );

  if (!container) return;

  const sorted =
    [...articles]
      .sort(
        (a, b) =>
          new Date(b.date) -
          new Date(a.date)
      );

  if (!sorted.length) {

    container.innerHTML =
      `<div class="empty-state">
        لا توجد مقالات مميزة حالياً.
      </div>`;

    return;
  }

  if (featuredIndex >= sorted.length) {
    featuredIndex = 0;
  }

  const article =
    sorted[featuredIndex];

  container.innerHTML = `

    <article class="feature-card">

      <img
        src="${article.image}"
        alt="${escapeHTML(article.title)}"
      >

      <div class="feature-content">

        <span class="eyebrow">
          ${escapeHTML(article.category)}
        </span>

        <h2>
          ${escapeHTML(article.title)}
        </h2>

        <div class="meta-row">

          <span>
            ✍️ ${escapeHTML(article.author)}
          </span>

          <span>
            📅 ${formatDate(article.date)}
          </span>

        </div>

        <p>
          ${escapeHTML(article.excerpt)}
        </p>

        <a
          href="article.html?id=${article.id}"
          class="primary-btn"
        >
          اقرأ المقال
        </a>

      </div>

    </article>

    <div class="featured-controls">

      <button
        type="button"
        id="featuredPrev"
      >
        → السابق
      </button>

      <button
        type="button"
        id="featuredNext"
      >
        التالي ←
      </button>

    </div>
  `;


  const previous =
    document.getElementById(
      "featuredPrev"
    );

  const next =
    document.getElementById(
      "featuredNext"
    );


  previous?.addEventListener(
    "click",
    () => {

      featuredIndex--;

      if (featuredIndex < 0) {
        featuredIndex =
          sorted.length - 1;
      }

      renderFeatured();

      restartFeaturedTimer();

    }
  );


  next?.addEventListener(
    "click",
    () => {

      featuredIndex++;

      if (
        featuredIndex >=
        sorted.length
      ) {
        featuredIndex = 0;
      }

      renderFeatured();

      restartFeaturedTimer();

    }
  );

}


function startFeaturedTimer() {

  if (featuredTimer) {
    clearInterval(featuredTimer);
  }

  featuredTimer =
    setInterval(() => {

      featuredIndex++;

      if (
        featuredIndex >=
        articles.length
      ) {
        featuredIndex = 0;
      }

      renderFeatured();

    }, 6000);

}


function restartFeaturedTimer() {

  startFeaturedTimer();

}


/* =========================================================
   ARTICLES PAGE
========================================================= */

let currentCategory = "الكل";

let currentArticlePage = 1;

const articlesPerPage = 6;


function renderCategoryFilter() {

  const container =
    document.getElementById(
      "categoryFilter"
    );

  if (!container) return;


  const allCategories = [
    "الكل",
    ...categories.map(c => c.name)
  ];


  container.innerHTML =
    allCategories
      .map(category => {

        const active =
          category === currentCategory
            ? "active"
            : "";

        return `
          <button
            type="button"
            class="filter-chip ${active}"
            data-category="${escapeHTML(category)}"
          >
            ${escapeHTML(category)}
          </button>
        `;

      })
      .join("");


  container
    .querySelectorAll(".filter-chip")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          currentCategory =
            button.dataset.category;

          currentArticlePage = 1;

          renderCategoryFilter();

          renderArticlesPage();

        }
      );

    });

}


function getFilteredArticles() {

  if (currentCategory === "الكل") {

    return [...articles];

  }

  return articles.filter(
    article =>
      article.category ===
      currentCategory
  );

}


function renderArticlesPage() {

  const container =
    document.getElementById(
      "articlesList"
    );

  if (!container) return;


  let filtered =
    getFilteredArticles();


  const start =
    (currentArticlePage - 1) *
    articlesPerPage;

  const end =
    start + articlesPerPage;


  const pageArticles =
    filtered.slice(start, end);


  if (!pageArticles.length) {

    container.innerHTML = `
      <div class="empty-state">
        لا توجد مقالات في هذا القسم.
      </div>
    `;

    renderPagination(0);

    return;
  }


  container.innerHTML =
    pageArticles
      .map(articleCard)
      .join("");


  renderPagination(
    Math.ceil(
      filtered.length /
      articlesPerPage
    )
  );

}


function renderPagination(totalPages) {

  const container =
    document.getElementById(
      "pagination"
    );

  if (!container) return;


  if (totalPages <= 1) {

    container.innerHTML = "";

    return;
  }


  let html = "";


  html += `
    <button
      type="button"
      ${currentArticlePage === 1 ? "disabled" : ""}
      data-page="${currentArticlePage - 1}"
    >
      السابق
    </button>
  `;


  for (
    let i = 1;
    i <= totalPages;
    i++
  ) {

    html += `
      <button
        type="button"
        class="${i === currentArticlePage ? "active" : ""}"
        data-page="${i}"
      >
        ${i}
      </button>
    `;

  }


  html += `
    <button
      type="button"
      ${currentArticlePage === totalPages ? "disabled" : ""}
      data-page="${currentArticlePage + 1}"
    >
      التالي
    </button>
  `;


  container.innerHTML = html;


  container
    .querySelectorAll("button")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const page =
            Number(
              button.dataset.page
            );

          if (
            page >= 1 &&
            page <= totalPages
          ) {

            currentArticlePage =
              page;

            renderArticlesPage();

            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });

          }

        }
      );

    });

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

  const input =
    document.getElementById(
      "searchInput"
    );

  const dropdown =
    document.getElementById(
      "searchDropdown"
    );

  if (!input || !dropdown) return;


  input.addEventListener(
    "input",
    () => {

      const query =
        input.value
          .trim()
          .toLowerCase();


      if (!query) {

        dropdown.classList.remove(
          "visible"
        );

        dropdown.innerHTML = "";

        return;
      }


      const articleResults =
        articles.filter(article => {

          const text =
            `${article.title}
             ${article.excerpt}
             ${article.category}`
              .toLowerCase();

          return text.includes(query);

        });


      const newsResults =
        news.filter(item => {

          const text =
            `${item.title}
             ${item.excerpt}
             ${item.category}`
              .toLowerCase();

          return text.includes(query);

        });


      if (
        !articleResults.length &&
        !newsResults.length
      ) {

        dropdown.innerHTML = `
          <div class="search-item">
            لا توجد نتائج.
          </div>
        `;

        dropdown.classList.add(
          "visible"
        );

        return;
      }


      let html = "";


      articleResults
        .slice(0, 5)
        .forEach(article => {

          html += `
            <a
              class="search-item"
              href="article.html?id=${article.id}"
            >
              <strong>
                ${escapeHTML(article.title)}
              </strong>

              <small>
                مقال · ${escapeHTML(article.category)}
              </small>
            </a>
          `;

        });


      newsResults
        .slice(0, 5)
        .forEach(item => {

          html += `
            <a
              class="search-item"
              href="news.html"
            >
              <strong>
                ${escapeHTML(item.title)}
              </strong>

              <small>
                خبر · ${escapeHTML(item.category)}
              </small>
            </a>
          `;

        });


      dropdown.innerHTML = html;

      dropdown.classList.add(
        "visible"
      );

    }
  );


  document.addEventListener(
    "click",
    event => {

      if (
        !event.target.closest(
          ".search-shell"
        )
      ) {

        dropdown.classList.remove(
          "visible"
        );

      }

    }
  );

}


/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {

  const button =
    document.querySelector(
      ".menu-toggle"
    );

  const nav =
    document.querySelector(
      ".main-nav"
    );

  if (!button || !nav) return;


  button.addEventListener(
    "click",
    () => {

      const isOpen =
        nav.classList.toggle(
          "open"
        );

      button.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      button.textContent =
        isOpen ? "✕" : "☰";

    }
  );


  nav.addEventListener(
    "click",
    event => {

      if (
        event.target.closest(
          ".nav-link"
        )
      ) {

        nav.classList.remove(
          "open"
        );

        button.setAttribute(
          "aria-expanded",
          "false"
        );

        button.textContent = "☰";

      }

    }
  );

}


/* =========================================================
   DARK MODE
========================================================= */

function setupTheme() {

  const button =
    document.getElementById(
      "themeToggle"
    );

  if (!button) return;


  const savedTheme =
    localStorage.getItem(
      "magTheme"
    );


  if (savedTheme === "dark") {

    document.body.classList.add(
      "dark"
    );

    button.textContent = "☀️";

  } else {

    button.textContent = "🌙";

  }


  button.addEventListener(
    "click",
    () => {

      document.body.classList.toggle(
        "dark"
      );


      const dark =
        document.body.classList.contains(
          "dark"
        );


      localStorage.setItem(
        "magTheme",
        dark ? "dark" : "light"
      );


      button.textContent =
        dark ? "☀️" : "🌙";

    }
  );

}


/* =========================================================
   NEWSLETTER
========================================================= */

function setupNewsletter() {

  const form =
    document.getElementById(
      "newsletterForm"
    );

  if (!form) return;


  form.addEventListener(
    "submit",
    event => {

      event.preventDefault();

      const input =
        form.querySelector(
          "input[type='email']"
        );

      if (!input.value.trim()) {
        return;
      }


      alert(
        "شكراً لاشتراكك في النشرة البريدية."
      );

      input.value = "";

    }
  );

}


/* =========================================================
   URL CATEGORY
========================================================= */

function loadCategoryFromURL() {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const category =
    params.get("category");


  if (!category) return;


  const exists =
    categories.some(
      item =>
        item.name === category
    );


  if (exists) {

    currentCategory =
      category;

  }

}


/* =========================================================
   DATE
========================================================= */

function formatDate(date) {

  try {

    return new Intl.DateTimeFormat(
      "ar-MA",
      {
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    ).format(
      new Date(date)
    );

  } catch {

    return date;

  }

}


/* =========================================================
   SECURITY
========================================================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================================================
   INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderNavigation();

    setupTheme();

    setupMobileMenu();

    setupSearch();

    setupNewsletter();


    /* HOME */

    renderLatestArticles();

    renderLatestNews();

    renderCategories();

    renderFeatured();

    startFeaturedTimer();


    /* ARTICLES */

    loadCategoryFromURL();

    renderCategoryFilter();

    renderArticlesPage();

  }
);
const newsData = [
  {
    id: 1,
    title: "مستجدات جديدة في المغرب اليوم",
    category: "سياسة",
    date: "15 أغسطس 2026",
    time: "10:30",
    image: "assets/news-1.jpg",
    summary: "أحدث التطورات والأخبار المحلية في المغرب.",
    content: "تفاصيل الخبر كاملة..."
  },

  {
    id: 2,
    title: "تطورات جديدة في الاقتصاد المغربي",
    category: "اقتصاد",
    date: "15 أغسطس 2026",
    time: "09:45",
    image: "assets/news-2.jpg",
    summary: "متابعة لأبرز المستجدات الاقتصادية.",
    content: "تفاصيل الخبر كاملة..."
  },

  {
    id: 3,
    title: "تكنولوجيا وابتكارات جديدة",
    category: "تكنولوجيا",
    date: "15 أغسطس 2026",
    time: "09:10",
    image: "assets/news-3.jpg",
    summary: "أحدث أخبار التكنولوجيا والذكاء الاصطناعي.",
    content: "تفاصيل الخبر كاملة..."
  },

  {
    id: 4,
    title: "أحدث أخبار الرياضة",
    category: "رياضة",
    date: "15 أغسطس 2026",
    time: "08:50",
    image: "assets/news-4.jpg",
    summary: "آخر أخبار كرة القدم والرياضة.",
    content: "تفاصيل الخبر كاملة..."
  },

  {
    id: 5,
    title: "أخبار المجتمع المغربي",
    category: "مجتمع",
    date: "15 أغسطس 2026",
    time: "08:20",
    image: "assets/news-5.jpg",
    summary: "أهم الأخبار الاجتماعية والمحلية.",
    content: "تفاصيل الخبر كاملة..."
  },

  {
    id: 6,
    title: "أبرز الأخبار الدولية",
    category: "العالم",
    date: "15 أغسطس 2026",
    time: "07:45",
    image: "assets/news-6.jpg",
    summary: "أهم الأحداث والتطورات حول العالم.",
    content: "تفاصيل الخبر كاملة..."
  }
];