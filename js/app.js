/**
 * js/app.js
 * Scroll reveal, nav behavior, mobile menu
 */

(function () {

  /* ─── SCROLL REVEAL ─── */
  // Shared observer used by app.js AND publications.js
  window.revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        window.revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  function observeAll() {
    document.querySelectorAll(".reveal:not(.visible)").forEach(el => {
      window.revealObserver.observe(el);
    });
  }

  // Observe initially + after DOM mutations (for dynamically rendered items)
  document.addEventListener("DOMContentLoaded", () => {
    observeAll();
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });
  });

  /* ─── NAV SCROLL ─── */
  const navbar = document.getElementById("navbar");
  if (navbar) {
    window.addEventListener("scroll", () => {
      navbar.classList.toggle("scrolled", window.scrollY > 40);
    }, { passive: true });
  }

  /* ─── MOBILE MENU ─── */
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("mobile-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (toggle && navLinks) {
      toggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });

      // Close on link click
      navLinks.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => navLinks.classList.remove("open"));
      });
    }
  });

  /* ─── SMOOTH ACTIVE NAV ─── */
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[id]");
    const links    = document.querySelectorAll(".nav-links a");

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove("active"));
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) active.classList.add("active");
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });

    sections.forEach(s => io.observe(s));
  });

})();
