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