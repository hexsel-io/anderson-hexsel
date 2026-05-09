# 07 — JavaScript (`main.js`)

Vanilla ES2020+. No build, no dependencies. Loaded with `defer`. Total size budget: **2 KB minified, 4 KB unminified.**

## File: `assets/js/main.js`

```js
(function () {
  'use strict';

  // ---------- Theme toggle ----------
  // Bootstrap script in <head> already applied saved theme to <html data-theme="...">
  // before stylesheet loaded (see 04-index-html.md). This block wires the toggle button.
  var THEME_KEY = 'hexsel-theme';
  var root = document.documentElement;
  var toggles = document.querySelectorAll('.theme-toggle');

  function getCurrentTheme() {
    return root.getAttribute('data-theme') || 'dark';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) {}
    toggles.forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(theme === 'light'));
    });
  }

  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyTheme(getCurrentTheme() === 'dark' ? 'light' : 'dark');
    });
  });

  // Initialize aria-pressed on load
  applyTheme(getCurrentTheme());

  // ---------- Mobile nav toggle ----------
  var navToggle = document.querySelector('.nav__toggle');
  var navList = document.getElementById('nav-list');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      var open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      navList.classList.toggle('is-open', !open);
    });
    // Close menu when a link is clicked
    navList.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        navToggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('is-open');
      }
    });
  }

  // ---------- Scroll-reveal ----------
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealEls = document.querySelectorAll('[data-reveal]');
  if (prefersReduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  // ---------- Footer year ----------
  var yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
```

## Behavioral contract

- **Theme toggle**: clicking flips `data-theme` between `dark` and `light`, persists to `localStorage` under key `hexsel-theme`. `aria-pressed="true"` when light is active.
- **Mobile nav**: button toggles `aria-expanded` and the `.is-open` class on `#nav-list`. Tapping any link inside closes the menu.
- **Scroll-reveal**: every `[data-reveal]` gets `.is-visible` once it enters the viewport (5% intersection ratio, with a -10% bottom rootMargin so the trigger fires slightly before the element is fully in view). Respects `prefers-reduced-motion: reduce` — applies the visible class immediately.
- **Footer year**: replaced with the current year on load. Initial HTML uses `2026` so JS-disabled visitors still see something reasonable.

## What this script must NOT do

- No analytics. No fetch calls. No fingerprinting. No third-party scripts.
- No DOM manipulation beyond what's listed above.
- No global variables besides what the IIFE captures.
- No use of `eval`, `new Function`, or `innerHTML` with untrusted content.
- No `console.log` left in.

## Loading

Both `index.html` and `resume.html` reference `<script src="/assets/js/main.js" defer></script>` exactly once at the end of `<body>`. Defer ensures it executes after parse but before `DOMContentLoaded`, and parallel to HTML parsing.
