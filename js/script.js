(() => {
  "use strict";

  // 互動行為入口：語系切換、主題/色彩、導覽、滾動相關 UI。

  // 從 js/i18n.js 注入的語系字典
  const translations = window.TRANSLATIONS || {};
  // 這些元素不應被寫入 textContent（沒有純文字內容）
  const textlessTags = new Set([
    "IMG",
    "INPUT",
    "TEXTAREA",
    "SOURCE",
    "META",
    "LINK",
  ]);

  // localStorage 安全封裝：避免隱私模式或權限錯誤造成中斷
  const storage = {
    get(key, fallback = null) {
      try {
        const value = localStorage.getItem(key);
        return value === null ? fallback : value;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // ignore storage errors
      }
    },
  };

  // 套用指定語系到所有 data-i18n / data-i18n-html / data-i18n-attr 元素
  const applyTranslations = (lang) => {
    const dict = translations[lang];
    if (!dict) {
      return;
    }

    // 更新 <html lang="...">
    document.documentElement.setAttribute("lang", lang);

    // 允許 HTML 內容（例如包含 <span> 的字串）
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (key && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // 一般純文字替換
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (el.dataset.i18nHtml) {
        return;
      }
      if (el.dataset.i18nAttr && el.childElementCount > 0) {
        return;
      }
      const key = el.dataset.i18n;
      if (!key || dict[key] === undefined) {
        return;
      }
      if (!textlessTags.has(el.tagName)) {
        el.textContent = dict[key];
      }
    });

    // 依 data-i18n-attr 指定的屬性（例如 aria-label、title）
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const key = el.dataset.i18n || el.dataset.i18nHtml;
      if (!key || dict[key] === undefined) {
        return;
      }
      const attrs = el.dataset.i18nAttr
        .split(",")
        .map((attr) => attr.trim())
        .filter(Boolean);
      attrs.forEach((attr) => {
        el.setAttribute(attr, dict[key]);
      });
    });
  };

  // 初始化所有互動、狀態與事件監聽
  const init = () => {
    // 尊重使用者偏好：降低動態效果時停用平滑捲動
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    // 風格切換面板（主題 / 語言）
    const styleSwitcher = document.querySelector(".style-switcher");
    const styleSwitcherToggler = document.querySelector(
      ".style-switcher-toggler",
    );
    const languageSwitcher = document.querySelector(".language-switcher");
    // 關閉面板
    const closeSwitcher = () => {
      if (!styleSwitcher) {
        return;
      }
      styleSwitcher.classList.remove("open", "panel-theme", "panel-language");
    };
    // 開啟指定面板（theme 或 language），同面板再次點擊會收合
    const openSwitcher = (panel) => {
      if (!styleSwitcher) {
        return;
      }
      const panelClass =
        panel === "language" ? "panel-language" : "panel-theme";
      const isOpen = styleSwitcher.classList.contains("open");
      const isSamePanel = styleSwitcher.classList.contains(panelClass);
      styleSwitcher.classList.remove("panel-theme", "panel-language");
      if (isOpen && isSamePanel) {
        styleSwitcher.classList.remove("open");
        return;
      }
      styleSwitcher.classList.add("open", panelClass);
    };

    if (styleSwitcher && styleSwitcherToggler) {
      styleSwitcherToggler.addEventListener("click", (event) => {
        event.preventDefault();
        openSwitcher("theme");
      });
    }

    if (styleSwitcher && languageSwitcher) {
      languageSwitcher.addEventListener("click", (event) => {
        event.preventDefault();
        openSwitcher("language");
      });
    }

    // 捲動時自動關閉面板，避免遮擋內容
    window.addEventListener(
      "scroll",
      () => {
        closeSwitcher();
      },
      { passive: true },
    );

    const dayNight = document.querySelector(".day-night");
    // 根據目前主題切換圖示（太陽 / 月亮）
    const updateThemeIcon = () => {
      if (!dayNight) {
        return;
      }
      const icon = dayNight.querySelector("i");
      if (!icon) {
        return;
      }
      if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
    };

    // 套用已儲存的主題（若無則維持預設）
    const savedTheme = storage.get("theme-mode");
    if (savedTheme === "light") {
      document.body.classList.remove("dark");
    } else if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }

    updateThemeIcon();

    if (dayNight) {
      dayNight.addEventListener("click", () => {
        // 反轉主題並保存偏好
        document.body.classList.toggle("dark");
        storage.set(
          "theme-mode",
          document.body.classList.contains("dark") ? "dark" : "light",
        );
        updateThemeIcon();
      });
    }

    // 主色切換：透過 body class 變更 CSS 變數
    const colorClasses = ["color0", "color1", "color2", "color3", "color4"];
    const applyColor = (colorClass) => {
      document.body.classList.remove(...colorClasses);
      if (colorClass) {
        document.body.classList.add(colorClass);
      }
      storage.set("theme-color", colorClass || "");
    };

    // 套用已儲存的主色
    const savedColor = storage.get("theme-color");
    if (savedColor) {
      applyColor(savedColor);
    }

    document.querySelectorAll(".color-change").forEach((option, index) => {
      option.addEventListener("click", () => {
        applyColor(colorClasses[index]);
      });
    });

    // 語系切換：套用字典、切換按鈕狀態、儲存偏好
    const languageButtons = Array.from(document.querySelectorAll(".lang-btn"));
    const setLanguage = (lang) => {
      if (!translations[lang]) {
        return;
      }
      applyTranslations(lang);
      storage.set("site-language", lang);
      languageButtons.forEach((button) => {
        button.classList.toggle("active", button.dataset.lang === lang);
      });
    };

    // 若有記錄語系就套用，否則以 <html lang> 或預設 zh-Hant
    const savedLanguage = storage.get("site-language");
    const initialLanguage = translations[savedLanguage]
      ? savedLanguage
      : document.documentElement.getAttribute("lang") || "zh-Hant";
    setLanguage(initialLanguage);

    languageButtons.forEach((button) => {
      button.addEventListener("click", () => {
        setLanguage(button.dataset.lang);
      });
    });

    // 假連結（# 或 is-placeholder）一律攔截，避免跳頁
    document
      .querySelectorAll('a[href="#"], a.is-placeholder')
      .forEach((link) => {
        if (!link.getAttribute("aria-disabled")) {
          link.setAttribute("aria-disabled", "true");
        }
        link.addEventListener("click", (event) => {
          event.preventDefault();
        });
      });

    // 行動版側邊欄開合
    const navToggler = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");

    if (navToggler && aside) {
      navToggler.addEventListener("click", () => {
        navToggler.classList.toggle("open");
        aside.classList.toggle("open");
      });
    }

    // 內部錨點平滑捲動，並更新 URL hash
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || href === "#") {
        return;
      }
      link.addEventListener("click", (event) => {
        const target = document.querySelector(href);
        if (!target) {
          return;
        }
        event.preventDefault();
        target.scrollIntoView({ behavior: scrollBehavior, block: "start" });
        history.pushState(null, "", href);
      });
    });

    // 依捲動位置高亮目前段落的導覽
    const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
    const sections = Array.from(document.querySelectorAll(".section[id]"));
    const setActiveNav = (sectionId) => {
      navLinks.forEach((link) => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${sectionId}`,
        );
      });
    };
    // 以 offset 計算目前段落，並處理接近底部時的最後段落
    const updateActiveOnScroll = () => {
      if (!sections.length) {
        return;
      }
      const offset = 160;
      const scrollPosition = window.scrollY + offset;
      let currentId = sections[0].id;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          currentId = section.id;
        }
      });
      if (
        window.innerHeight + window.scrollY >=
        document.body.scrollHeight - 2
      ) {
        currentId = sections[sections.length - 1].id;
      }
      setActiveNav(currentId);
    };
    window.addEventListener("scroll", updateActiveOnScroll, { passive: true });
    updateActiveOnScroll();

    // 點擊導覽時同步更新高亮並收合側邊欄
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          setActiveNav(href.slice(1));
        }
        if (aside && aside.classList.contains("open")) {
          aside.classList.remove("open");
          navToggler?.classList.remove("open");
        }
      });
    });

    // 優先用 IntersectionObserver（較省效能），否則退回 scroll 監聽
    if ("IntersectionObserver" in window && sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveNav(entry.target.id);
            }
          });
        },
        {
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0.1,
        },
      );
      sections.forEach((section) => observer.observe(section));
    } else if (sections.length) {
      const onScroll = () => {
        let currentId = sections[0].id;
        sections.forEach((section) => {
          if (window.scrollY >= section.offsetTop - 200) {
            currentId = section.id;
          }
        });
        setActiveNav(currentId);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    // 回到頂部按鈕：滾動一定距離才顯示
    const backToTop = document.querySelector(".back-to-top");
    const toggleBackToTop = () => {
      if (!backToTop) {
        return;
      }
      if (window.scrollY > window.innerHeight * 0.7) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    };

    // 綁定回頂按鈕的顯示與點擊行為
    if (backToTop) {
      window.addEventListener("scroll", toggleBackToTop, { passive: true });
      toggleBackToTop();
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
      });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
