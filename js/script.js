(() => {
  "use strict";

  const translations = window.TRANSLATIONS || {};
  const textlessTags = new Set([
    "IMG",
    "INPUT",
    "TEXTAREA",
    "SOURCE",
    "META",
    "LINK",
  ]);

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

  const applyTranslations = (lang) => {
    const dict = translations[lang];
    if (!dict) {
      return;
    }

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.dataset.i18nHtml;
      if (key && dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

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

  const init = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const scrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    const styleSwitcher = document.querySelector(".style-switcher");
    const styleSwitcherToggler = document.querySelector(
      ".style-switcher-toggler",
    );
    const languageSwitcher = document.querySelector(".language-switcher");
    const closeSwitcher = () => {
      if (!styleSwitcher) {
        return;
      }
      styleSwitcher.classList.remove("open", "panel-theme", "panel-language");
    };
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

    window.addEventListener(
      "scroll",
      () => {
        closeSwitcher();
      },
      { passive: true },
    );

    const dayNight = document.querySelector(".day-night");
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

    const savedTheme = storage.get("theme-mode");
    if (savedTheme === "light") {
      document.body.classList.remove("dark");
    } else if (savedTheme === "dark") {
      document.body.classList.add("dark");
    }

    updateThemeIcon();

    if (dayNight) {
      dayNight.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        storage.set(
          "theme-mode",
          document.body.classList.contains("dark") ? "dark" : "light",
        );
        updateThemeIcon();
      });
    }

    const colorClasses = ["color0", "color1", "color2", "color3", "color4"];
    const applyColor = (colorClass) => {
      document.body.classList.remove(...colorClasses);
      if (colorClass) {
        document.body.classList.add(colorClass);
      }
      storage.set("theme-color", colorClass || "");
    };

    const savedColor = storage.get("theme-color");
    if (savedColor) {
      applyColor(savedColor);
    }

    document.querySelectorAll(".color-change").forEach((option, index) => {
      option.addEventListener("click", () => {
        applyColor(colorClasses[index]);
      });
    });

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

    const navToggler = document.querySelector(".nav-toggler");
    const aside = document.querySelector(".aside");

    if (navToggler && aside) {
      navToggler.addEventListener("click", () => {
        navToggler.classList.toggle("open");
        aside.classList.toggle("open");
      });
    }

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
