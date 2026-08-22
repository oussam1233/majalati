<<<<<<< HEAD:app.js
/* =========================================================
   مجَلّتكم - APP.JS
   نظام موحد:
   Home / Articles / Article / News
========================================================= */

"use strict";

/* =========================================================
   DATA
========================================================= */

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

/* =========================================================
   ARTICLES DATABASE
========================================================= */

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
      "يشهد العالم تحولاً كبيراً مع انتشار تقنيات الذكاء الاصطناعي. ولم تعد هذه التقنيات مقتصرة على المختبرات والشركات التقنية، بل أصبحت جزءاً من قطاعات متعددة مثل التعليم والصحة والإعلام والتجارة.\n\nوتعمل المؤسسات على دمج أدوات الذكاء الاصطناعي في تحليل البيانات وأتمتة المهام وتحسين تجربة المستخدم.\n\nومن المتوقع أن يستمر هذا التحول خلال السنوات القادمة مع ظهور وظائف جديدة وتغير طبيعة عدد من الوظائف الحالية."
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
      "تتجه الشركات بشكل متزايد نحو الحلول الرقمية بهدف تحسين الإنتاجية والوصول إلى العملاء وخفض التكاليف التشغيلية.\n\nوتساعد التجارة الإلكترونية والخدمات السحابية وأدوات تحليل البيانات الشركات على تطوير نماذج أعمال أكثر مرونة."
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
      "تواصل الهواتف الذكية تطورها من خلال تحسين الكاميرات والشاشات والأداء والذكاء الاصطناعي.\n\nوأصبح الهاتف مركزاً للاتصالات والعمل والدفع الإلكتروني والترفيه والوصول إلى الخدمات الرقمية."
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
      "تعتمد الأندية والمنتخبات اليوم على البيانات والتحليل المتقدم من أجل تحسين الأداء الرياضي.\n\nوتستخدم التقنيات الحديثة في تحليل أداء اللاعبين ومراقبة اللياقة وتطوير الاستراتيجيات."
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
      "تساعد التكنولوجيا الحديثة المدن على إدارة النقل والطاقة والخدمات العامة بطريقة أكثر كفاءة.\n\nوتسعى مشاريع المدن الذكية إلى تحسين جودة الحياة وتسهيل الوصول إلى الخدمات."
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
      "أصبحت الأسواق العالمية مترابطة بشكل كبير، مما يجعل الأحداث الدولية عاملاً مهماً في حركة الاقتصاد.\n\nوتؤثر الأحداث الجيوسياسية والتجارية والاقتصادية على حركة الاستثمارات والأسعار."
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
      "أصبحت شبكات التواصل الاجتماعي مصدراً رئيسياً للمعلومات السياسية، وهو ما يفرض تحديات جديدة على الإعلام.\n\nويحتاج الجمهور إلى التحقق من مصادر المعلومات ومقارنة الأخبار قبل اعتمادها."
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
      "استخدام كلمات مرور قوية والمصادقة الثنائية وتحديث التطبيقات باستمرار من أهم خطوات حماية الخصوصية.\n\nكما ينصح بمراجعة صلاحيات التطبيقات وعدم مشاركة البيانات الحساسة مع جهات غير موثوقة."
  }
];

/* =========================================================
   NEWS DATABASE
========================================================= */

const news = [
  {
    id: 101,
    title: "تطورات جديدة في عالم الذكاء الاصطناعي",
    category: "ذكاء اصطناعي",
    author: "قسم التكنولوجيا",
    date: "2026-08-15",
    time: "10:30",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "شركات التقنية تواصل تطوير أدوات ذكية جديدة للمستخدمين.",
    content:
      "تشهد تقنيات الذكاء الاصطناعي تطورات متسارعة مع استمرار الشركات في إطلاق أدوات وحلول جديدة."
  },

  {
    id: 102,
    title: "أسواق المال تراقب التطورات الاقتصادية",
    category: "اقتصاد",
    author: "قسم الاقتصاد",
    date: "2026-08-15",
    time: "09:45",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "المستثمرون يترقبون مجموعة من المؤشرات الاقتصادية الجديدة.",
    content:
      "تتابع الأسواق مجموعة من المؤشرات الاقتصادية التي قد تؤثر على حركة الاستثمار والأسعار."
  },

  {
    id: 103,
    title: "بطولات رياضية جديدة تستقطب الجماهير",
    category: "رياضة",
    author: "قسم الرياضة",
    date: "2026-08-14",
    time: "08:50",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "منافسات قوية وحضور جماهيري كبير في البطولات الأخيرة.",
    content:
      "تشهد البطولات الرياضية الأخيرة منافسات قوية وحضوراً جماهيرياً متزايداً."
  },

  {
    id: 104,
    title: "تطبيقات جديدة تعزز الإنتاجية اليومية",
    category: "تطبيقات",
    author: "قسم التطبيقات",
    date: "2026-08-14",
    time: "08:20",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "عدد من التطبيقات الجديدة يقدم حلولاً عملية للمستخدمين.",
    content:
      "ظهرت مجموعة من التطبيقات التي تهدف إلى تنظيم الوقت وإدارة المهام وتحسين الإنتاجية اليومية."
  },

  {
    id: 105,
    title: "تطورات دولية تحظى باهتمام واسع",
    category: "العالم",
    author: "قسم العالم",
    date: "2026-08-13",
    time: "07:45",
    image:
      "https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "أحداث دولية جديدة تتصدر اهتمام وسائل الإعلام.",
    content:
      "تتصدر مجموعة من التطورات الدولية اهتمام وسائل الإعلام والمتابعين حول العالم."
  },

  {
    id: 106,
    title: "مدن عربية تتجه نحو الحلول الذكية",
    category: "مجتمع",
    author: "قسم المجتمع",
    date: "2026-08-13",
    time: "07:15",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "توسع مشاريع المدن الذكية في عدد من الدول العربية.",
    content:
      "تتوسع مشاريع المدن الذكية في عدد من المدن العربية بهدف تحسين النقل والخدمات والطاقة."
  },

  {
    id: 107,
    title: "مستجدات سياسية جديدة في المنطقة",
    category: "سياسة",
    author: "قسم السياسة",
    date: "2026-08-12",
    time: "18:30",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
    excerpt:
      "متابعة لأبرز التطورات السياسية الإقليمية والدولية.",
    content:
      "تتابع الأوساط الإعلامية والسياسية مجموعة من التطورات الجديدة في المنطقة."
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
  const nav = document.querySelector(".main-nav");

  if (!nav) return;

  const currentPage =
    document.body.dataset.page || "home";

  nav.innerHTML = navItems
    .map(item => {
      const active =
        item.page === currentPage ? "active" : "";

      return `
        <a
          class="nav-link ${active}"
          href="${item.href}"
        >
          ${escapeHTML(item.label)}
        </a>
      `;
    })
    .join("");
}

/* =========================================================
   HELPERS
========================================================= */

function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatDate(date) {
  if (!date) return "";

  const parsed = new Date(date);

  if (Number.isNaN(parsed.getTime())) {
    return String(date);
  }

  return new Intl.DateTimeFormat("ar-MA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(parsed);
}

function getQueryParam(name) {
  return new URLSearchParams(
    window.location.search
  ).get(name);
}

/* =========================================================
   ARTICLE CARD
========================================================= */

function articleCard(article) {
  return `
    <article class="article-card">

      <img
        src="${escapeHTML(article.image)}"
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
          <span>
            ✍️ ${escapeHTML(article.author || "هيئة التحرير")}
          </span>

          <span>
            📅 ${formatDate(article.date)}
          </span>
        </div>

        <p>
          ${escapeHTML(article.excerpt)}
        </p>

        <a
          class="read-more"
          href="article.html?id=${encodeURIComponent(article.id)}"
        >
          اقرأ المقال ←
        </a>

      </div>

    </article>
  `;
}

/* =========================================================
   HOME
========================================================= */

function renderLatestArticles() {
  const container =
    document.getElementById("latestArticles");

  if (!container) return;

  const latest = [...articles]
    .sort(
      (a, b) =>
        new Date(b.date) - new Date(a.date)
    )
    .slice(0, 6);

  container.innerHTML =
    latest.map(articleCard).join("");
}

function renderLatestNews() {
  const container =
    document.getElementById("latestNews");

  if (!container) return;

  container.innerHTML = news
    .slice()
    .sort(
      (a, b) =>
        new Date(b.date) - new Date(a.date)
    )
    .slice(0, 6)
    .map(newsCard)
    .join("");
}

function newsCard(item) {
  return `
    <article class="article-card">

      ${
        item.image
          ? `
            <img
              src="${escapeHTML(item.image)}"
              alt="${escapeHTML(item.title)}"
              loading="lazy"
            >
          `
          : ""
      }

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

          ${
            item.time
              ? `<span>🕐 ${escapeHTML(item.time)}</span>`
              : ""
          }
        </div>

        <p>
          ${escapeHTML(item.excerpt)}
        </p>

        <a
          class="read-more"
          href="news.html?id=${encodeURIComponent(item.id)}"
        >
          تفاصيل الخبر ←
        </a>

      </div>

    </article>
  `;
}

function renderCategories() {
  const container =
    document.getElementById("categoryHighlights");

  if (!container) return;

  container.innerHTML = categories
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
   FEATURED
========================================================= */

let featuredIndex = 0;
let featuredTimer = null;

function renderFeatured() {
  const container =
    document.getElementById("heroFeatured");

  if (!container) return;

  const sorted = [...articles].sort(
    (a, b) =>
      new Date(b.date) - new Date(a.date)
  );

  if (!sorted.length) {
    container.innerHTML = `
      <div class="empty-state">
        لا توجد مقالات مميزة حالياً.
      </div>
    `;
    return;
  }

  if (
    featuredIndex < 0 ||
    featuredIndex >= sorted.length
  ) {
    featuredIndex = 0;
  }

  const article = sorted[featuredIndex];

  container.innerHTML = `
    <article class="feature-card">

      <img
        src="${escapeHTML(article.image)}"
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
          href="article.html?id=${encodeURIComponent(article.id)}"
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

  document
    .getElementById("featuredPrev")
    ?.addEventListener("click", () => {
      featuredIndex--;

      if (featuredIndex < 0) {
        featuredIndex = sorted.length - 1;
      }

      renderFeatured();
      restartFeaturedTimer();
    });

  document
    .getElementById("featuredNext")
    ?.addEventListener("click", () => {
      featuredIndex++;

      if (featuredIndex >= sorted.length) {
        featuredIndex = 0;
      }

      renderFeatured();
      restartFeaturedTimer();
    });
}

function startFeaturedTimer() {
  if (featuredTimer) {
    clearInterval(featuredTimer);
  }

  featuredTimer = setInterval(() => {
    featuredIndex++;
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

function getFilteredArticles() {
  if (currentCategory === "الكل") {
    return [...articles];
  }

  return articles.filter(
    article =>
      article.category === currentCategory
  );
}

function renderCategoryFilter() {
  const container =
    document.getElementById("categoryFilter");

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
      button.addEventListener("click", () => {
        currentCategory =
          button.dataset.category;

        currentArticlePage = 1;

        renderCategoryFilter();
        renderArticlesPage();
      });
    });
}

function renderArticlesPage() {
  const container =
    document.getElementById("articlesList");

  if (!container) return;

  const filtered =
    getFilteredArticles();

  const start =
    (currentArticlePage - 1) *
    articlesPerPage;

  const pageArticles =
    filtered.slice(
      start,
      start + articlesPerPage
    );

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
    pageArticles.map(articleCard).join("");

  renderPagination(
    Math.ceil(
      filtered.length / articlesPerPage
    )
  );
}

/* =========================================================
   PAGINATION
========================================================= */
function renderPagination(totalPages) {
  const container = document.getElementById("pagination");

  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  container.innerHTML = `
    <button
      type="button"
      ${currentArticlePage === 1 ? "disabled" : ""}
      data-page="${currentArticlePage - 1}"
      aria-label="الصفحة السابقة"
    >
      ‹
    </button>

    <button
      type="button"
      ${currentArticlePage === totalPages ? "disabled" : ""}
      data-page="${currentArticlePage + 1}"
      aria-label="الصفحة التالية"
    >
      ›
    </button>
  `;

  container
    .querySelectorAll("button")
    .forEach(button => {
      button.addEventListener("click", () => {
        const page = Number(button.dataset.page);

        if (page >= 1 && page <= totalPages) {
          currentArticlePage = page;

          renderArticlesPage();

          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      });
    });
}
/* =========================================================
   NEWS PAGE
========================================================= */

let currentNewsCategory = "all";

function getFilteredNews() {
  if (
    currentNewsCategory === "all" ||
    currentNewsCategory === "الكل"
  ) {
    return [...news];
  }

  return news.filter(
    item =>
      item.category === currentNewsCategory
  );
}

function renderNewsPage() {
  const container =
    document.getElementById("newsList");

  if (!container) return;

  const empty =
    document.getElementById("newsEmpty");

  const count =
    document.getElementById("newsCount");

  const filtered =
    getFilteredNews();

  if (count) {
    count.textContent =
      `${filtered.length} خبر`;
  }

  if (!filtered.length) {
    container.innerHTML = "";

    if (empty) {
      empty.hidden = false;
    }

    return;
  }

  if (empty) {
    empty.hidden = true;
  }

  container.innerHTML =
    filtered
      .slice()
      .sort(
        (a, b) =>
          new Date(b.date) -
          new Date(a.date)
      )
      .map(newsCard)
      .join("");
}

function setupNewsFilters() {
  const container =
    document.getElementById(
      "newsCategoryFilter"
    );

  if (!container) return;

  const urlCategory =
    getQueryParam("category");

  if (urlCategory) {
    currentNewsCategory =
      urlCategory;
  }

  const buttons =
    container.querySelectorAll(
      ".filter-chip"
    );

  buttons.forEach(button => {
    const category =
      button.dataset.category;

    if (
      category === currentNewsCategory
    ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }

    button.addEventListener("click", () => {
      currentNewsCategory =
        button.dataset.category;

      buttons.forEach(item => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      renderNewsPage();
    });
  });
}

/* =========================================================
   ARTICLE PAGE
========================================================= */
function renderArticlePage() {
  const articleContent =
    document.getElementById("articleContent");

  if (!articleContent) return;

  const articleError =
    document.getElementById("articleError");

  const articleLoading =
    document.getElementById("articleLoading");

  const params =
    new URLSearchParams(window.location.search);

  const rawId = params.get("id");
  const articleId = Number(rawId);

  const article =
    content.find(
      item =>
        Number(item.id) === articleId &&
        item.published !== false
    );

  // المقال غير موجود
  if (!article) {
    articleLoading?.setAttribute("hidden", "");
    articleContent.setAttribute("hidden", "");
    articleError?.removeAttribute("hidden");
    return;
  }

  const title =
    document.getElementById("articleHeading");

  const category =
    document.getElementById("articleCategory");

  const excerpt =
    document.getElementById("articleExcerpt");

  const meta =
    document.getElementById("articleMeta");

  const image =
    document.getElementById("articleImage");

  const body =
    document.getElementById("articleBody");

  const pageTitle =
    document.getElementById("articleTitle");

  const description =
    document.getElementById("articleDescription");

  const canonical =
    document.getElementById("articleCanonical");

  const schema =
    document.getElementById("articleSchema");

  const articleTitle =
    article.title || "مقال من مجلّتكم";

  const articleDescription =
    article.excerpt ||
    article.content ||
    "مقال من مجلة مجلّتكم.";

  const articleAuthor =
    article.author || "هيئة التحرير";

  // =========================
  // معلومات المقال
  // =========================

  if (title) {
    title.textContent = articleTitle;
  }

  if (category) {
    category.textContent =
      article.category || "عام";
  }

  if (excerpt) {
    excerpt.textContent = articleDescription;
  }

  if (meta) {
    meta.textContent =
      `✍️ ${articleAuthor} • 📅 ${formatDate(article.date)}`;
  }

  // =========================
  // الصورة
  // =========================

  if (image) {
    const fallbackImage =
      "assets/default-news.jpg";

    const articleImage =
      typeof article.image === "string"
        ? article.image.trim()
        : "";

    // إذا لم توجد صورة
    if (!articleImage) {
      image.src = fallbackImage;
    } else {
      image.src = articleImage;
    }

    image.alt = articleTitle;

    image.removeAttribute("hidden");

    // إذا فشل تحميل الصورة
    image.onerror = function () {
      // منع الحلقة إذا كانت الصورة الافتراضية نفسها غير موجودة
      if (image.src.endsWith("default-news.jpg")) {
        image.removeAttribute("src");
        image.style.display = "none";
        return;
      }

      image.src = fallbackImage;
    };
  }

  // =========================
  // محتوى المقال
  // =========================

  if (body) {
    body.textContent =
      article.content ||
      articleDescription;
  }

  // =========================
  // SEO
  // =========================

  if (pageTitle) {
    pageTitle.textContent =
      `${articleTitle} | مجَلّتكم`;
  }

  if (description) {
    description.setAttribute(
      "content",
      articleDescription.substring(0, 160)
    );
  }

  const canonicalUrl =
    `${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(article.id)}`;

  canonical?.setAttribute(
    "href",
    canonicalUrl
  );

  // =========================
  // Structured Data
  // =========================

  if (schema) {
    const schemaData = {
      "@context": "https://schema.org",

      "@type":
        article.type === "news"
          ? "NewsArticle"
          : "Article",

      headline: articleTitle,

      description: articleDescription,

      image:
        articleImageIsValid(article.image)
          ? [article.image]
          : undefined,

      datePublished:
        article.date
          ? `${article.date}${
              article.time
                ? `T${article.time}`
                : ""
            }`
          : undefined,

      dateModified:
        article.date
          ? `${article.date}${
              article.time
                ? `T${article.time}`
                : ""
            }`
          : undefined,

      author: {
        "@type": "Person",
        name: articleAuthor
      },

      publisher: {
        "@type": "Organization",
        name: "مجَلّتكم"
      },

      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalUrl
      }
    };

    schema.textContent =
      JSON.stringify(
        schemaData,
        null,
        2
      );
  }

  // =========================
  // إظهار المقال
  // =========================

  articleLoading?.setAttribute(
    "hidden",
    ""
  );

  articleError?.setAttribute(
    "hidden",
    ""
  );

  articleContent.removeAttribute(
    "hidden"
  );
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
            `${article.title} ${article.excerpt} ${article.category} ${article.content}`
              .toLowerCase();

          return text.includes(query);
        });

      const newsResults =
        news.filter(item => {
          const text =
            `${item.title} ${item.excerpt} ${item.category} ${item.content}`
              .toLowerCase();

          return text.includes(query);
        });

      let html = "";

      articleResults
        .slice(0, 5)
        .forEach(article => {
          html += `
            <a
              class="search-item"
              href="article.html?id=${encodeURIComponent(article.id)}"
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
              href="news.html?id=${encodeURIComponent(item.id)}"
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

      if (!html) {
        html = `
          <div class="search-item">
            لا توجد نتائج.
          </div>
        `;
      }

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
  const forms =
    document.querySelectorAll(
      ".newsletter-form"
    );

  forms.forEach(form => {
    form.addEventListener(
      "submit",
      event => {
        event.preventDefault();

        const input =
          form.querySelector(
            "input[type='email']"
          );

        if (
          !input ||
          !input.value.trim()
        ) {
          return;
        }

        alert(
          "شكراً لاشتراكك في النشرة البريدية."
        );

        input.value = "";
      }
    );
  });
}

/* =========================================================
   URL CATEGORY
========================================================= */

function loadCategoryFromURL() {
  const category =
    getQueryParam("category");

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
   NEWS DIRECT ID
========================================================= */

function handleNewsQuery() {
  const id =
    Number(getQueryParam("id"));

  if (!id) return;

  const item =
    news.find(
      newsItem =>
        Number(newsItem.id) === id
    );

  if (!item) return;

  /*
   * حالياً صفحة الأخبار تعرض القائمة.
   * يمكن لاحقاً إنشاء news-article.html
   * إذا أردنا صفحة مستقلة لكل خبر.
   */
}

/* =========================================================
   INIT
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const page =
      document.body.dataset.page ||
      "home";

    renderNavigation();

    setupTheme();

    setupMobileMenu();

    setupSearch();

    setupNewsletter();

    /* HOME */

    if (page === "home") {
      renderLatestArticles();
      renderLatestNews();
      renderCategories();
      renderFeatured();
      startFeaturedTimer();
    }

    /* ARTICLES */

    if (page === "articles") {
      loadCategoryFromURL();
      renderCategoryFilter();
      renderArticlesPage();
    }

    /* ARTICLE */

    if (page === "article") {
      renderArticlePage();
    }

    /* NEWS */

    if (page === "news") {
      setupNewsFilters();
      renderNewsPage();
      handleNewsQuery();
    }

  }
);
=======
"use strict";

/* =========================================================
   MAJALATI - DATA
========================================================= */

const categories = [
  {
    name: "سياسة",
    icon: "🏛️",
    description: "أخبار وتحليلات سياسية"
  },
  {
    name: "اقتصاد",
    icon: "💰",
    description: "الأسواق والمال والأعمال"
  },
  {
    name: "تكنولوجيا",
    icon: "💻",
    description: "التقنية والذكاء الاصطناعي"
  },
  {
    name: "رياضة",
    icon: "⚽",
    description: "أخبار ونتائج الرياضة"
  },
  {
    name: "مجتمع",
    icon: "👥",
    description: "قضايا المجتمع والحياة"
  },
  {
    name: "العالم",
    icon: "🌍",
    description: "أخبار العالم"
  }
];

const articles = [
  {
    id: 1,
    title: "كيف يغيّر الذكاء الاصطناعي مستقبل العمل؟",
    category: "تكنولوجيا",
    date: "2026-08-18",
    author: "فريق مجلّتكم",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
    excerpt: "يشهد عالم العمل تحولاً متسارعاً مع انتشار أدوات الذكاء الاصطناعي في مختلف القطاعات.",
    content: [
      "أصبح الذكاء الاصطناعي أحد أهم العوامل التي تعيد تشكيل بيئة العمل الحديثة، حيث بدأت المؤسسات في استخدام أدوات ذكية لتحليل البيانات وأتمتة المهام وتحسين الإنتاجية.",
      "ولا يعني هذا التحول بالضرورة اختفاء الوظائف، بل يفتح المجال أمام مهارات جديدة تتطلب فهماً أفضل للتكنولوجيا وقدرة على التعاون معها.",
      "ويرى الخبراء أن السنوات القادمة ستشهد تركيزاً أكبر على المهارات الإنسانية مثل الإبداع والتفكير النقدي والتواصل، إلى جانب المهارات التقنية.",
      "ومع استمرار التطور، سيكون التعلم المستمر عاملاً أساسياً بالنسبة للموظفين والمؤسسات على حد سواء."
    ]
  },
  {
    id: 2,
    title: "التحول الرقمي يفتح فرصاً جديدة للشركات الناشئة",
    category: "اقتصاد",
    date: "2026-08-16",
    author: "فريق الاقتصاد",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    excerpt: "تساهم التقنيات الرقمية في خلق نماذج أعمال جديدة وتحسين قدرة الشركات الصغيرة على المنافسة.",
    content: [
      "تتجه الشركات الناشئة بشكل متزايد إلى الحلول الرقمية بهدف الوصول إلى أسواق جديدة وتطوير خدمات أكثر مرونة.",
      "وتوفر المنصات الرقمية للشركات الصغيرة أدوات كانت في السابق متاحة فقط للمؤسسات الكبرى.",
      "كما ساهم انتشار التجارة الإلكترونية والخدمات السحابية في تقليل تكاليف التشغيل وتسريع إطلاق المشاريع الجديدة.",
      "ومن المتوقع أن يستمر هذا الاتجاه مع تطور أدوات الدفع الإلكتروني والتحليلات والذكاء الاصطناعي."
    ]
  },
  {
    id: 3,
    title: "مدن المستقبل وكيف ستتغير طريقة حياتنا",
    category: "مجتمع",
    date: "2026-08-14",
    author: "قسم المجتمع",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=85",
    excerpt: "المدن الذكية تعيد التفكير في النقل والطاقة والخدمات العامة وجودة الحياة.",
    content: [
      "تتغير المدن حول العالم نتيجة التطور السريع في تقنيات النقل والطاقة والاتصالات.",
      "وتعتمد المدن الذكية على البيانات لمراقبة حركة المرور واستهلاك الطاقة وتحسين الخدمات العامة.",
      "لكن نجاح هذه المشاريع يتطلب تحقيق توازن بين استخدام التكنولوجيا وحماية الخصوصية واحتياجات السكان.",
      "وتبقى مشاركة المواطنين والتخطيط الحضري الجيد من أهم عناصر بناء مدن أكثر استدامة."
    ]
  },
  {
    id: 4,
    title: "الرياضة الرقمية تدخل مرحلة جديدة",
    category: "رياضة",
    date: "2026-08-12",
    author: "قسم الرياضة",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    excerpt: "التكنولوجيا أصبحت جزءاً أساسياً من التدريب وتحليل الأداء الرياضي.",
    content: [
      "أصبحت الأجهزة القابلة للارتداء وتحليل البيانات أدوات مهمة في عالم الرياضة الحديث.",
      "ويستخدم المدربون بيانات الأداء لمتابعة اللياقة البدنية وتحسين خطط التدريب.",
      "كما ساهمت تقنيات الفيديو والتحليل الآلي في تحسين فهم أداء اللاعبين والفرق.",
      "ومع استمرار تطور التكنولوجيا، يتوقع أن تصبح البيانات أكثر حضوراً في القرارات الرياضية."
    ]
  },
  {
    id: 5,
    title: "الاقتصاد الأخضر ومستقبل الطاقة",
    category: "اقتصاد",
    date: "2026-08-10",
    author: "قسم الاقتصاد",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=85",
    excerpt: "الاستثمار في الطاقة النظيفة أصبح محوراً رئيسياً في الاقتصاد العالمي.",
    content: [
      "يشهد قطاع الطاقة تحولاً كبيراً مع توسع الاستثمارات في الطاقة الشمسية وطاقة الرياح.",
      "ويهدف الاقتصاد الأخضر إلى تحقيق النمو مع تقليل الأثر البيئي للأنشطة الاقتصادية.",
      "كما تساهم التقنيات الجديدة في خفض تكلفة إنتاج الطاقة النظيفة وتحسين كفاءتها.",
      "وتفتح هذه التحولات فرصاً جديدة أمام الشركات والمستثمرين في قطاعات متعددة."
    ]
  },
  {
    id: 6,
    title: "التعليم الرقمي يعيد تعريف تجربة التعلم",
    category: "مجتمع",
    date: "2026-08-08",
    author: "قسم المجتمع",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    excerpt: "أصبحت المنصات الرقمية جزءاً مهماً من العملية التعليمية الحديثة.",
    content: [
      "ساهم انتشار المنصات التعليمية الرقمية في جعل الوصول إلى المعرفة أكثر سهولة.",
      "وأصبح بإمكان الطلاب متابعة الدروس والتفاعل مع المحتوى من أماكن مختلفة.",
      "لكن نجاح التعليم الرقمي يحتاج إلى بنية تحتية جيدة وتدريب للمعلمين والطلاب.",
      "ويبقى الجمع بين التكنولوجيا والتفاعل الإنساني من أفضل الطرق لبناء تجربة تعليمية متوازنة."
    ]
  }
];

const news = [
  {
    id: 101,
    title: "تطورات جديدة في قطاع التكنولوجيا والابتكار",
    category: "تكنولوجيا",
    date: "2026-08-22",
    time: "10:30",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85",
    excerpt: "قطاع التكنولوجيا يشهد إطلاق حلول جديدة في مجالات الذكاء الاصطناعي والحوسبة.",
    content: [
      "يشهد قطاع التكنولوجيا تطورات متسارعة مع إطلاق مجموعة من الحلول الجديدة التي تستهدف الشركات والمستخدمين.",
      "وتتركز أبرز الاتجاهات الحالية على الذكاء الاصطناعي وتحليل البيانات والحوسبة السحابية.",
      "ويرى متخصصون أن المنافسة في القطاع ستزداد خلال الفترة المقبلة مع توسع الاستثمارات."
    ]
  },
  {
    id: 102,
    title: "أسواق المال تتابع مؤشرات اقتصادية جديدة",
    category: "اقتصاد",
    date: "2026-08-22",
    time: "09:15",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=85",
    excerpt: "المستثمرون يراقبون مجموعة من المؤشرات الاقتصادية الجديدة خلال الفترة الحالية.",
    content: [
      "تتابع الأسواق المالية مجموعة من البيانات والمؤشرات الاقتصادية التي يمكن أن تؤثر في حركة الاستثمار.",
      "ويواصل المستثمرون تقييم أداء الشركات والتغيرات في الأسواق العالمية.",
      "وتبقى توقعات النمو والتضخم وأسعار الفائدة من أهم العوامل التي تحظى باهتمام الأسواق."
    ]
  },
  {
    id: 103,
    title: "منتخب عربي يستعد لمواجهة رياضية مرتقبة",
    category: "رياضة",
    date: "2026-08-21",
    time: "21:00",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=85",
    excerpt: "المنتخب يواصل تحضيراته للمواجهة القادمة وسط اهتمام جماهيري كبير.",
    content: [
      "يواصل المنتخب استعداداته للمواجهة المرتقبة من خلال تدريبات مكثفة.",
      "ويركز الجهاز الفني على رفع الجاهزية البدنية والتكتيكية للاعبين.",
      "ومن المنتظر أن تحظى المباراة بمتابعة واسعة من الجماهير."
    ]
  },
  {
    id: 104,
    title: "مبادرات جديدة لدعم المدن المستدامة",
    category: "مجتمع",
    date: "2026-08-21",
    time: "17:40",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=85",
    excerpt: "مشاريع جديدة تهدف إلى تحسين النقل والطاقة والخدمات داخل المدن.",
    content: [
      "أعلنت جهات محلية عن مبادرات جديدة تهدف إلى تطوير الخدمات وتحسين جودة الحياة.",
      "وتتضمن المبادرات مشاريع في النقل والطاقة والمساحات الخضراء.",
      "ويأتي ذلك ضمن توجه أوسع نحو بناء مدن أكثر استدامة."
    ]
  },
  {
    id: 105,
    title: "تطورات سياسية جديدة على الساحة الدولية",
    category: "سياسة",
    date: "2026-08-20",
    time: "15:20",
    image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=85",
    excerpt: "المشهد السياسي الدولي يشهد تحركات واتصالات جديدة بين عدد من الأطراف.",
    content: [
      "شهدت الساحة الدولية خلال الفترة الأخيرة سلسلة من الاتصالات والتحركات السياسية.",
      "وتسعى الأطراف المختلفة إلى بحث ملفات مشتركة وإيجاد حلول للقضايا العالقة.",
      "وتبقى التطورات المقبلة مرتبطة بنتائج المشاورات والمفاوضات."
    ]
  },
  {
    id: 106,
    title: "إطلاق مشروع رقمي جديد في المنطقة",
    category: "تكنولوجيا",
    date: "2026-08-20",
    time: "12:10",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    excerpt: "مشروع رقمي جديد يهدف إلى توفير خدمات تقنية للمستخدمين والشركات.",
    content: [
      "شهد القطاع الرقمي إطلاق مشروع جديد يركز على تطوير خدمات تقنية حديثة.",
      "ويعتمد المشروع على مجموعة من التقنيات الحديثة لتحسين تجربة المستخدم.",
      "ومن المتوقع أن يبدأ التوسع في الخدمات تدريجياً خلال الفترة القادمة."
    ]
  },
  {
    id: 107,
    title: "خبر اقتصادي جديد يلفت اهتمام المستثمرين",
    category: "اقتصاد",
    date: "2026-08-19",
    time: "11:45",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=1200&q=85",
    excerpt: "المستثمرون يتابعون تطورات جديدة في القطاعات الاقتصادية المختلفة.",
    content: [
      "تواصل الأسواق متابعة التطورات الاقتصادية الجديدة وتأثيرها على الاستثمار.",
      "ويركز المستثمرون على نتائج الشركات والتوقعات المستقبلية.",
      "وتتجه الأنظار إلى البيانات الاقتصادية القادمة."
    ]
  },
  {
    id: 108,
    title: "فعاليات رياضية جديدة تستقطب الجماهير",
    category: "رياضة",
    date: "2026-08-18",
    time: "19:30",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=85",
    excerpt: "الفعاليات الرياضية تشهد حضوراً جماهيرياً واسعاً ومنافسة قوية.",
    content: [
      "شهدت الفعاليات الرياضية الأخيرة حضوراً جماهيرياً واسعاً.",
      "وتنافس المشاركون في عدد من المنافسات وسط أجواء حماسية.",
      "ومن المنتظر تنظيم فعاليات إضافية خلال الفترة المقبلة."
    ]
  }
];

/* =========================================================
   GLOBAL HELPERS
========================================================= */

const PAGE_SIZE = 6;

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDate(dateString) {
  const date = new Date(dateString + "T12:00:00");

  return new Intl.DateTimeFormat("ar", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function getPageNumber(name) {
  const value = Number(getQueryParam(name) || 1);

  if (!Number.isFinite(value) || value < 1) {
    return 1;
  }

  return Math.floor(value);
}

function getCategoryFromURL() {
  return getQueryParam("category") || "الكل";
}

/* =========================================================
   THEME
========================================================= */

function initializeTheme() {
  const savedTheme = localStorage.getItem("majalati-theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  updateThemeButton();
}

function updateThemeButton() {
  const button = document.getElementById("themeToggle");

  if (!button) {
    return;
  }

  const dark = document.body.classList.contains("dark");

  button.textContent = dark ? "☀️" : "🌙";
  button.setAttribute(
    "aria-label",
    dark ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"
  );
}

function setupTheme() {
  const button = document.getElementById("themeToggle");

  if (!button) {
    return;
  }

  button.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    localStorage.setItem(
      "majalati-theme",
      document.body.classList.contains("dark")
        ? "dark"
        : "light"
    );

    updateThemeButton();
  });
}

/* =========================================================
   NAVIGATION
========================================================= */

function setupNavigation() {
  const nav = document.querySelector(".main-nav");

  if (!nav) {
    return;
  }

  nav.innerHTML = `
    <a class="nav-link" href="index.html">الرئيسية</a>
    <a class="nav-link" href="articles.html">المقالات</a>
    <a class="nav-link" href="news.html">الأخبار</a>
  `;

  const page = document.body.dataset.page;

  nav.querySelectorAll(".nav-link").forEach(function (link) {
    const href = link.getAttribute("href");

    if (
      (page === "home" && href === "index.html") ||
      (page === "articles" && href === "articles.html") ||
      (page === "article" && href === "articles.html") ||
      (page === "news" && href === "news.html") ||
      (page === "news-article" && href === "news.html")
    ) {
      link.classList.add("active");
    }
  });
}

/* =========================================================
   MOBILE MENU
========================================================= */

function setupMobileMenu() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  if (!button || !nav) {
    return;
  }

  button.addEventListener("click", function () {
    const open = nav.classList.toggle("open");

    button.setAttribute(
      "aria-expanded",
      open ? "true" : "false"
    );
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {
  const input = document.getElementById("searchInput");
  const dropdown = document.getElementById("searchDropdown");

  if (!input || !dropdown) {
    return;
  }

  const allItems = [
    ...articles.map(function (item) {
      return {
        ...item,
        type: "article"
      };
    }),
    ...news.map(function (item) {
      return {
        ...item,
        type: "news"
      };
    })
  ];

  input.addEventListener("input", function () {
    const query = input.value.trim().toLowerCase();

    if (!query) {
      dropdown.innerHTML = "";
      dropdown.classList.remove("visible");
      return;
    }

    const results = allItems.filter(function (item) {
      return (
        item.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query)
      );
    }).slice(0, 8);

    if (!results.length) {
      dropdown.innerHTML = `
        <div class="search-item">
          <strong>لا توجد نتائج</strong>
          <small>جرّب كلمة بحث أخرى</small>
        </div>
      `;

      dropdown.classList.add("visible");
      return;
    }

    dropdown.innerHTML = results.map(function (item) {
      const url =
        item.type === "article"
          ? `article.html?id=${item.id}`
          : `news-article.html?id=${item.id}`;

      return `
        <a href="${url}" class="search-item">
          <strong>${escapeHTML(item.title)}</strong>
          <small>
            ${escapeHTML(item.category)}
            ·
            ${formatDate(item.date)}
          </small>
        </a>
      `;
    }).join("");

    dropdown.classList.add("visible");
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".search-shell")) {
      dropdown.classList.remove("visible");
    }
  });
}

/* =========================================================
   CARD HTML
========================================================= */

function createCard(item, type) {
  const url =
    type === "article"
      ? `article.html?id=${item.id}`
      : `news-article.html?id=${item.id}`;

  const time = item.time
    ? ` · ${escapeHTML(item.time)}`
    : "";

  return `
    <article class="article-card">

      <a href="${url}" aria-label="${escapeHTML(item.title)}">
        <img
          src="${item.image}"
          alt="${escapeHTML(item.title)}"
          loading="lazy"
        >
      </a>

      <div class="article-body">

        <span class="eyebrow">
          ${escapeHTML(item.category)}
        </span>

        <div class="meta-row">
          <span>📅 ${formatDate(item.date)}</span>
          ${time ? `<span>🕐 ${time.replace(" · ", "")}</span>` : ""}
        </div>

        <h3>
          <a href="${url}">
            ${escapeHTML(item.title)}
          </a>
        </h3>

        <p>
          ${escapeHTML(item.excerpt)}
        </p>

        <a class="read-more" href="${url}">
          ${type === "article" ? "قراءة المقال" : "قراءة الخبر"} ←
        </a>

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
  const categoryHighlights = document.getElementById(
    "categoryHighlights"
  );

  if (hero) {
    createHero(hero);
  }

  if (latestArticles) {
    latestArticles.innerHTML = articles
      .slice(0, 3)
      .map(function (item) {
        return createCard(item, "article");
      })
      .join("");
  }

  if (latestNews) {
    latestNews.innerHTML = news
      .slice(0, 3)
      .map(function (item) {
        return createCard(item, "news");
      })
      .join("");
  }

  if (categoryHighlights) {
    categoryHighlights.innerHTML = categories
      .map(function (category) {
        const countArticles = articles.filter(function (item) {
          return item.category === category.name;
        }).length;

        const countNews = news.filter(function (item) {
          return item.category === category.name;
        }).length;

        return `
          <a
            href="articles.html?category=${encodeURIComponent(category.name)}"
            class="category-card"
          >
            <div class="category-icon">
              ${category.icon}
            </div>

            <h3>${escapeHTML(category.name)}</h3>

            <p>
              ${escapeHTML(category.description)}
              · ${countArticles + countNews} محتوى
            </p>
          </a>
        `;
      })
      .join("");
  }
}

/* =========================================================
   HERO SLIDER
========================================================= */

function createHero(container) {
  let current = 0;

  function render() {
    const item = articles[current];

    container.innerHTML = `
      <div class="feature-card">

        <a href="article.html?id=${item.id}">
          <img
            src="${item.image}"
            alt="${escapeHTML(item.title)}"
          >
        </a>

        <div class="feature-content">

          <span class="eyebrow">
            ${escapeHTML(item.category)}
          </span>

          <h2>
            <a href="article.html?id=${item.id}">
              ${escapeHTML(item.title)}
            </a>
          </h2>

          <p>
            ${escapeHTML(item.excerpt)}
          </p>

          <div class="meta-row">
            📅 ${formatDate(item.date)}
            · ${escapeHTML(item.author)}
          </div>

        </div>

      </div>

      <div class="featured-controls">

        <button type="button" id="heroPrev">
          → السابق
        </button>

        <button type="button" id="heroNext">
          التالي ←
        </button>

      </div>
    `;

    const previous = document.getElementById("heroPrev");
    const next = document.getElementById("heroNext");

    if (previous) {
      previous.addEventListener("click", function () {
        current--;

        if (current < 0) {
          current = articles.length - 1;
        }

        render();
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        current++;

        if (current >= articles.length) {
          current = 0;
        }

        render();
      });
    }
  }

  render();
}

/* =========================================================
   FILTER BUTTONS
========================================================= */

function createFilterButtons(container, currentCategory, callback) {
  if (!container) {
    return;
  }

  const names = ["الكل", ...categories.map(function (item) {
    return item.name;
  })];

  container.innerHTML = names.map(function (name) {
    return `
      <button
        type="button"
        class="filter-chip ${name === currentCategory ? "active" : ""}"
        data-category="${escapeHTML(name)}"
      >
        ${escapeHTML(name)}
      </button>
    `;
  }).join("");

  container.querySelectorAll(".filter-chip").forEach(function (button) {
    button.addEventListener("click", function () {
      callback(button.dataset.category);
    });
  });
}

/* =========================================================
   ARTICLES PAGE
========================================================= */

function initializeArticlesPage() {
  const grid = document.getElementById("articlesGrid");
  const pagination = document.getElementById(
    "articlesPagination"
  );
  const filter = document.getElementById(
    "articleCategoryFilter"
  );
  const count = document.getElementById("articlesCount");

  if (!grid || !pagination) {
    return;
  }

  let category = getCategoryFromURL();
  let page = getPageNumber("page");

  function render() {
    let filtered = [...articles];

    if (category !== "الكل") {
      filtered = filtered.filter(function (item) {
        return item.category === category;
      });
    }

    const totalPages = Math.max(
      1,
      Math.ceil(filtered.length / PAGE_SIZE)
    );

    if (page > totalPages) {
      page = totalPages;
    }

    const start = (page - 1) * PAGE_SIZE;
    const pageItems = filtered.slice(
      start,
      start + PAGE_SIZE
    );

    if (count) {
      count.textContent =
        `${filtered.length} مقال`;
    }

    if (!pageItems.length) {
      grid.innerHTML = `
        <div class="empty-state">
          لا توجد مقالات في هذا القسم.
        </div>
      `;

      pagination.innerHTML = "";
      return;
    }

    grid.innerHTML = pageItems
      .map(function (item) {
        return createCard(item, "article");
      })
      .join("");

    createPagination(
      pagination,
      page,
      totalPages,
      function (newPage) {
        page = newPage;
        updateArticleURL();
        render();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
  }

  function updateArticleURL() {
    const params = new URLSearchParams();

    if (category !== "الكل") {
      params.set(
        "category",
        category
      );
    }

    if (page > 1) {
      params.set(
        "page",
        page
      );
    }

    const query = params.toString();

    history.replaceState(
      null,
      "",
      query
        ? `articles.html?${query}`
        : "articles.html"
    );
  }

  createFilterButtons(
    filter,
    category,
    function (newCategory) {
      category = newCategory;
      page = 1;

      updateArticleURL();

      createFilterButtons(
        filter,
        category,
        arguments.callee
      );

      render();
    }
  );

  render();
}

/* =========================================================
   NEWS PAGE
========================================================= */

function initializeNewsPage() {
  const grid = document.getElementById("newsGrid");
  const pagination = document.getElementById(
    "newsPagination"
  );
  const filter = document.getElementById(
    "newsCategoryFilter"
  );
  const count = document.getElementById("newsCount");

  if (!grid || !pagination) {
    return;
  }

  let category = getCategoryFromURL();
  let page = getPageNumber("page");

  function render() {
    let filtered = [...news];

    if (category !== "الكل") {
      filtered = filtered.filter(function (item) {
        return item.category === category;
      });
    }

    const totalPages = Math.max(
      1,
      Math.ceil(filtered.length / PAGE_SIZE)
    );

    if (page > totalPages) {
      page = totalPages;
    }

    const start = (page - 1) * PAGE_SIZE;

    const pageItems = filtered.slice(
      start,
      start + PAGE_SIZE
    );

    if (count) {
      count.textContent =
        `${filtered.length} خبر`;
    }

    if (!pageItems.length) {
      grid.innerHTML = `
        <div class="empty-state">
          لا توجد أخبار في هذا القسم.
        </div>
      `;

      pagination.innerHTML = "";
      return;
    }

    grid.innerHTML = pageItems
      .map(function (item) {
        return createCard(item, "news");
      })
      .join("");

    createPagination(
      pagination,
      page,
      totalPages,
      function (newPage) {
        page = newPage;
        updateNewsURL();
        render();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    );
  }

  function updateNewsURL() {
    const params = new URLSearchParams();

    if (category !== "الكل") {
      params.set(
        "category",
        category
      );
    }

    if (page > 1) {
      params.set(
        "page",
        page
      );
    }

    const query = params.toString();

    history.replaceState(
      null,
      "",
      query
        ? `news.html?${query}`
        : "news.html"
    );
  }

  function updateFilter() {
    createFilterButtons(
      filter,
      category,
      function (newCategory) {
        category = newCategory;
        page = 1;

        updateNewsURL();
        updateFilter();
        render();
      }
    );
  }

  updateFilter();
  render();
}

/* =========================================================
   PAGINATION
========================================================= */

function createPagination(
  container,
  currentPage,
  totalPages,
  callback
) {
  if (!container) {
    return;
  }

  if (totalPages <= 1) {
    container.innerHTML = "";
    return;
  }

  const buttons = [];

  buttons.push(`
    <button
      type="button"
      ${currentPage === 1 ? "disabled" : ""}
      data-page="${currentPage - 1}"
    >
      السابق
    </button>
  `);

  for (let i = 1; i <= totalPages; i++) {
    buttons.push(`
      <button
        type="button"
        class="${i === currentPage ? "active" : ""}"
        data-page="${i}"
      >
        ${i}
      </button>
    `);
  }

  buttons.push(`
    <button
      type="button"
      ${currentPage === totalPages ? "disabled" : ""}
      data-page="${currentPage + 1}"
    >
      التالي
    </button>
  `);

  container.innerHTML = buttons.join("");

  container.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
      if (button.disabled) {
        return;
      }

      const page = Number(button.dataset.page);

      if (page >= 1 && page <= totalPages) {
        callback(page);
      }
    });
  });
}

/* =========================================================
   ARTICLE DETAILS
========================================================= */

function initializeArticleDetails() {
  const container = document.getElementById(
    "articleDetails"
  );

  if (!container) {
    return;
  }

  const id = Number(getQueryParam("id"));

  const item = articles.find(function (article) {
    return article.id === id;
  });

  if (!item) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>المقال غير موجود</h2>
        <p>
          عذراً، لم نتمكن من العثور على المقال المطلوب.
        </p>
        <a class="article-back" href="articles.html">
          العودة إلى المقالات
        </a>
      </div>
    `;

    return;
  }

  document.title =
    `${item.title} | مجلّتكم`;

  container.innerHTML = `
    <article class="article-detail">

      <img
        class="article-detail-image"
        src="${item.image}"
        alt="${escapeHTML(item.title)}"
      >

      <div class="article-detail-content">

        <span class="eyebrow">
          ${escapeHTML(item.category)}
        </span>

        <div class="meta-row">
          <span>📅 ${formatDate(item.date)}</span>
          <span>✍️ ${escapeHTML(item.author)}</span>
        </div>

        <h1>
          ${escapeHTML(item.title)}
        </h1>

        <div class="article-lead">
          ${escapeHTML(item.excerpt)}
        </div>

        <div class="article-text">
          ${item.content.map(function (paragraph) {
            return `<p>${escapeHTML(paragraph)}</p>`;
          }).join("")}
        </div>

        <a
          class="article-back"
          href="articles.html"
        >
          ← العودة إلى المقالات
        </a>

      </div>

    </article>
  `;
}

/* =========================================================
   NEWS DETAILS
========================================================= */

function initializeNewsDetails() {
  const container = document.getElementById(
    "newsArticleDetails"
  );

  if (!container) {
    return;
  }

  const id = Number(getQueryParam("id"));

  const item = news.find(function (article) {
    return article.id === id;
  });

  if (!item) {
    container.innerHTML = `
      <div class="empty-state">
        <h2>الخبر غير موجود</h2>

        <p>
          عذراً، لم نتمكن من العثور على الخبر المطلوب.
        </p>

        <a
          class="article-back"
          href="news.html"
        >
          العودة إلى الأخبار
        </a>
      </div>
    `;

    return;
  }

  document.title =
    `${item.title} | مجلّتكم`;

  container.innerHTML = `
    <article class="article-detail">

      <img
        class="article-detail-image"
        src="${item.image}"
        alt="${escapeHTML(item.title)}"
      >

      <div class="article-detail-content">

        <span class="eyebrow">
          ${escapeHTML(item.category)}
        </span>

        <div class="meta-row">
          <span>📅 ${formatDate(item.date)}</span>
          <span>🕐 ${escapeHTML(item.time)}</span>
        </div>

        <h1>
          ${escapeHTML(item.title)}
        </h1>

        <div class="article-lead">
          ${escapeHTML(item.excerpt)}
        </div>

        <div class="article-text">
          ${item.content.map(function (paragraph) {
            return `<p>${escapeHTML(paragraph)}</p>`;
          }).join("")}
        </div>

        <a
          class="article-back"
          href="news.html"
        >
          ← العودة إلى الأخبار
        </a>

      </div>

    </article>
  `;
}

/* =========================================================
   NEWSLETTER
========================================================= */

function setupNewsletter() {
  const form = document.getElementById(
    "newsletterForm"
  );

  if (!form) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = form.querySelector("input");

    if (!input || !input.value.trim()) {
      return;
    }

    alert(
      "تم تسجيل بريدك الإلكتروني بنجاح."
    );

    input.value = "";
  });
}

/* =========================================================
   INITIALIZATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  initializeTheme();

  setupTheme();

  setupNavigation();

  setupMobileMenu();

  setupSearch();

  setupNewsletter();

  initializeHome();

  initializeArticlesPage();

  initializeNewsPage();

  initializeArticleDetails();

  initializeNewsDetails();

});
>>>>>>> e59faae (Update pagination):js/app.js
