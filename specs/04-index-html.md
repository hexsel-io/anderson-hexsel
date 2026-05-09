# 04 — `index.html` spec

Single-page site with anchor sections. Use semantic HTML5 throughout.

## Document head

```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Anderson Hexsel — IT Consultant & Software Engineer</title>
  <meta name="description" content="Anderson Hexsel — IT consulting, web development, cloud & DevOps. Based on LinkedIn experience and current portfolio.">

  <link rel="canonical" href="https://hexsel.io/">
  <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg">
  <meta name="theme-color" content="#0b0d10" media="(prefers-color-scheme: dark)">
  <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://hexsel.io/">
  <meta property="og:title" content="Anderson Hexsel — IT Consultant & Software Engineer">
  <meta property="og:description" content="IT consulting, web development, cloud & DevOps.">
  <meta property="og:image" content="https://hexsel.io/assets/img/og-cover.png">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Anderson Hexsel — IT Consultant & Software Engineer">
  <meta name="twitter:description" content="IT consulting, web development, cloud & DevOps.">
  <meta name="twitter:image" content="https://hexsel.io/assets/img/og-cover.png">

  <!-- Theme bootstrap (must be inline + before stylesheet to avoid FOUC) -->
  <script>
    (function () {
      try {
        var saved = localStorage.getItem('hexsel-theme');
        if (saved === 'light' || saved === 'dark') {
          document.documentElement.setAttribute('data-theme', saved);
        }
      } catch (e) { /* localStorage unavailable; fall through */ }
    })();
  </script>

  <link rel="stylesheet" href="/assets/css/main.css">
</head>
```

The inline theme bootstrap MUST execute before the stylesheet loads to prevent a flash of the wrong theme. Keep it under 500 bytes.

## Document body skeleton

```html
<body>
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header">
    <div class="container site-header__inner">
      <a class="brand" href="/">hexsel</a>
      <nav class="nav" aria-label="Primary">
        <button class="nav__toggle" aria-expanded="false" aria-controls="nav-list">
          <span class="visually-hidden">Open menu</span>
          <!-- inline hamburger SVG -->
        </button>
        <ul id="nav-list" class="nav__list">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button class="theme-toggle" aria-label="Toggle color theme" aria-pressed="false">
        <!-- inline sun + moon SVG; CSS shows the right one based on data-theme -->
      </button>
    </div>
  </header>

  <main id="main">
    <section class="hero">…</section>
    <section id="about" class="section">…</section>
    <section id="services" class="section section--alt">…</section>
    <section id="resume" class="section">…</section>
    <section id="contact" class="section section--alt">…</section>
  </main>

  <footer class="site-footer">…</footer>

  <script src="/assets/js/main.js" defer></script>
</body>
</html>
```

## Section IDs (immutable contract)

These IDs are used by nav links, scroll-reveal observer, and CSS:
`about`, `services`, `resume`, `contact`. Do not rename.

## Section structure (per `03-content.md`)

### Hero
```html
<section class="hero">
  <div class="container hero__inner">
    <h1 class="hero__title">
      <span class="hero__name">Anderson Hexsel</span>
      <span class="hero__role">IT Consultant &amp; Software Engineer</span>
    </h1>
    <p class="hero__tagline">
      <span class="fillin">[FILL IN — short tagline, ~12 words]</span>
    </p>
    <div class="hero__cta">
      <a class="btn btn--primary" href="#services">View Services</a>
      <a class="btn btn--ghost" href="/assets/docs/anderson-hexsel-resume.pdf" download>Download Resume</a>
    </div>
  </div>
</section>
```

### About
```html
<section id="about" class="section">
  <div class="container">
    <h2 class="section__heading">About</h2>
    <p class="section__lede">
      <span class="fillin">[FILL IN — 2–3 sentence bio from LinkedIn About]</span>
    </p>
    <h3 class="cluster__label">Tech I work with</h3>
    <ul class="chip-cluster" role="list">
      <li class="chip fillin">[FILL IN — skill 1]</li>
      <!-- repeat for 6–12 chips total -->
    </ul>
  </div>
</section>
```

### Services
```html
<section id="services" class="section section--alt">
  <div class="container">
    <h2 class="section__heading">Services</h2>
    <p class="section__sub">What I help clients with.</p>
    <ul class="card-grid" role="list">
      <li class="card">
        <div class="card__icon" aria-hidden="true"><!-- inline SVG --></div>
        <h3 class="card__title">Web Development</h3>
        <p class="card__body">Modern, accessible websites and web apps. From single-page portfolios to full-stack applications, built to load fast and stay maintainable.</p>
      </li>
      <!-- repeat for the other 3 cards from 03-content.md -->
    </ul>
  </div>
</section>
```

### Resume preview
```html
<section id="resume" class="section">
  <div class="container">
    <h2 class="section__heading">Resume</h2>
    <p class="section__sub">Selected highlights — full version on the <a href="/resume.html">resume page</a>.</p>
    <ol class="timeline" role="list">
      <li class="timeline__item">
        <h3 class="timeline__role"><span class="fillin">[FILL IN — role]</span></h3>
        <p class="timeline__meta"><span class="fillin">[FILL IN — company · dates]</span></p>
        <p class="timeline__summary"><span class="fillin">[FILL IN — one-line summary]</span></p>
      </li>
      <!-- 3 entries total -->
    </ol>
    <div class="resume__cta">
      <a class="btn btn--primary" href="/resume.html">Full resume</a>
      <a class="btn btn--ghost" href="/assets/docs/anderson-hexsel-resume.pdf" download>Download PDF</a>
    </div>
  </div>
</section>
```

### Contact
```html
<section id="contact" class="section section--alt">
  <div class="container">
    <h2 class="section__heading">Contact</h2>
    <p class="section__lede">Open to consulting work, freelance projects, and full-time roles. The fastest way to reach me is email.</p>
    <ul class="contact-links" role="list">
      <li><a href="mailto:anderson.hexsel@gmail.com"><!-- mail icon -->anderson.hexsel@gmail.com</a></li>
      <li><a href="https://www.linkedin.com/in/hexsel/" rel="me noopener"><!-- linkedin icon -->linkedin.com/in/hexsel</a></li>
      <li><a href="[FILL IN — github URL]" rel="me noopener" class="fillin"><!-- github icon -->[FILL IN — github username]</a></li>
    </ul>
  </div>
</section>
```

### Footer
```html
<footer class="site-footer">
  <div class="container site-footer__inner">
    <p>© <span id="footer-year">2026</span> Anderson Hexsel</p>
    <p>Built with HTML, CSS &amp; a little JS · <a href="[FILL IN — repo URL]" class="fillin">view source</a></p>
  </div>
</footer>
```

`#footer-year` is updated by `main.js`.

## Scroll-reveal hook

Add `data-reveal` to: `.hero__inner`, every `.section .container > *`, every `.card`, every `.timeline__item`. JS observes these and toggles a `.is-visible` class. See `07-javascript.md`.

## Skip link

```html
<a class="skip-link" href="#main">Skip to content</a>
```
Hidden off-screen by default; appears on `:focus` to support keyboard users. CSS in `06-styles.md`.
