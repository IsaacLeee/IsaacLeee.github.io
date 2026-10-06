/* Progressive enhancement: all portfolio content and case studies are plain HTML. */
(() => {
  "use strict";
  const config = window.PORTFOLIO_CONFIG || {};
  const script = document.querySelector('script[src$="js/script.js"]');
  const siteRoot = new URL("../", script.src);

  // Only complete HTTP(S) URLs activate external profiles. No invented destinations.
  document.querySelectorAll("[data-profile]").forEach(link => {
    let url;
    try { url = new URL(config[link.dataset.profile]); } catch { return; }
    if (!["http:", "https:"].includes(url.protocol)) return;
    link.href = url.href;
    link.removeAttribute("aria-disabled");
    link.querySelector("small")?.remove();
  });

  if (config.resumeReady && config.resumePath) {
    const resumeURL = new URL(config.resumePath, siteRoot);
    document.querySelectorAll("[data-resume]").forEach(link => {
      link.href = resumeURL.href;
      link.removeAttribute("aria-disabled");
      if (link.dataset.resume === "download") link.download = "Isaac_Lee_Resume.pdf";
      else { link.target = "_blank"; link.rel = "noopener"; }
    });
    document.querySelectorAll("[data-resume-status]").forEach(el => {
      el.textContent = "PDF resume · Open or download below.";
    });
  }

  document.querySelectorAll('[aria-disabled="true"]').forEach(link => {
    link.addEventListener("click", event => event.preventDefault());
  });

  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  if (!menu || !nav) return;
  menu.hidden = false;
  const closeMenu = () => {
    menu.setAttribute("aria-expanded", "false");
    menu.textContent = "Menu";
    nav.classList.remove("is-open");
  };
  menu.addEventListener("click", () => {
    const expanded = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(expanded));
    menu.textContent = expanded ? "Close" : "Menu";
    nav.classList.toggle("is-open", expanded);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  window.matchMedia("(min-width: 961px)").addEventListener("change", closeMenu);
})();
