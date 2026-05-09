# 05 — `resume.html` spec

Standalone, single-column, recruiter-friendly resume. Lives at `/resume.html`. Reuses the design tokens but loads its own stylesheet (`/assets/css/resume.css`) which adds a print stylesheet and tighter spacing.

## Document head

```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Anderson Hexsel — Resume</title>
  <meta name="description" content="Resume for Anderson Hexsel — IT consultant and software engineer.">
  <link rel="canonical" href="https://hexsel.io/resume.html">
  <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg">

  <script>
    (function () {
      try {
        var saved = localStorage.getItem('hexsel-theme');
        if (saved === 'light' || saved === 'dark') {
          document.documentElement.setAttribute('data-theme', saved);
        }
      } catch (e) {}
    })();
  </script>

  <link rel="stylesheet" href="/assets/css/main.css">
  <link rel="stylesheet" href="/assets/css/resume.css">
</head>
```

## Document body skeleton

```html
<body class="resume-body">
  <a class="skip-link" href="#resume-main">Skip to content</a>

  <header class="resume-header no-print">
    <div class="container resume-header__inner">
      <a class="brand" href="/">← hexsel.io</a>
      <div class="resume-header__actions">
        <a class="btn btn--ghost" href="/assets/docs/anderson-hexsel-resume.pdf" download>Download PDF</a>
        <button class="btn btn--ghost" type="button" onclick="window.print()">Print</button>
        <button class="theme-toggle" aria-label="Toggle color theme" aria-pressed="false">
          <!-- inline sun + moon SVG -->
        </button>
      </div>
    </div>
  </header>

  <main id="resume-main" class="resume container">
    <section class="resume__intro">
      <h1 class="resume__name">Anderson Hexsel</h1>
      <p class="resume__role">IT Consultant &amp; Software Engineer</p>
      <ul class="resume__contact" role="list">
        <li><a href="mailto:anderson.hexsel@gmail.com">anderson.hexsel@gmail.com</a></li>
        <li class="fillin">[FILL IN — phone, optional]</li>
        <li class="fillin">[FILL IN — city, country]</li>
        <li><a href="https://www.linkedin.com/in/hexsel/">linkedin.com/in/hexsel</a></li>
        <li class="fillin">[FILL IN — github URL]</li>
      </ul>
    </section>

    <section class="resume__section" aria-labelledby="r-summary">
      <h2 id="r-summary">Summary</h2>
      <p class="fillin">[FILL IN — 3-sentence professional summary]</p>
    </section>

    <section class="resume__section" aria-labelledby="r-experience">
      <h2 id="r-experience">Experience</h2>

      <article class="resume__job">
        <header class="resume__job-header">
          <h3 class="resume__job-title fillin">[FILL IN — Role title]</h3>
          <p class="resume__job-meta fillin">[FILL IN — Company · Location · YYYY-MM – Present]</p>
        </header>
        <ul class="resume__bullets">
          <li class="fillin">[FILL IN — achievement bullet]</li>
          <!-- 3–5 bullets per role -->
        </ul>
      </article>

      <!-- Repeat <article class="resume__job"> for each role from LinkedIn -->
    </section>

    <section class="resume__section" aria-labelledby="r-education">
      <h2 id="r-education">Education</h2>
      <article class="resume__edu">
        <h3 class="fillin">[FILL IN — Institution]</h3>
        <p class="fillin">[FILL IN — Degree, Field · YYYY–YYYY]</p>
      </article>
    </section>

    <section class="resume__section" aria-labelledby="r-skills">
      <h2 id="r-skills">Skills</h2>
      <dl class="resume__skills">
        <div>
          <dt>Languages</dt>
          <dd class="fillin">[FILL IN — Python, Go, etc.]</dd>
        </div>
        <div>
          <dt>Cloud &amp; Infra</dt>
          <dd class="fillin">[FILL IN]</dd>
        </div>
        <div>
          <dt>Tools</dt>
          <dd class="fillin">[FILL IN]</dd>
        </div>
      </dl>
    </section>

    <section class="resume__section" aria-labelledby="r-certs">
      <h2 id="r-certs">Certifications</h2>
      <ul class="fillin">
        <li>[FILL IN — cert + issuer + year]</li>
      </ul>
    </section>

    <section class="resume__section" aria-labelledby="r-langs">
      <h2 id="r-langs">Languages</h2>
      <ul class="fillin">
        <li>[FILL IN — Portuguese (native), English (fluent), …]</li>
      </ul>
    </section>
  </main>

  <footer class="site-footer no-print">
    <div class="container site-footer__inner">
      <p>© <span id="footer-year">2026</span> Anderson Hexsel</p>
      <p><a href="/">← back to hexsel.io</a></p>
    </div>
  </footer>

  <script src="/assets/js/main.js" defer></script>
</body>
</html>
```

## Print stylesheet rules (in `resume.css`, `@media print`)

- Force `data-theme` to be ignored by hardcoding light colors: white background, near-black text.
- Hide `.no-print` (header buttons, footer).
- Reduce font size by ~10%.
- Remove all `box-shadow`, `border-radius`, `background-color` on cards.
- Set `@page { margin: 18mm 14mm; }`.
- Keep section headings together with their first item: `h2 + * { break-before: avoid; } h2 { break-after: avoid; }`.
- Each `.resume__job` should not break across pages: `break-inside: avoid;`.

## Goal

The Cmd+P preview should produce a 1–2 page printable PDF without manual style edits. The `[FILL IN]` markers should still be visible in the printed PDF (so the owner can see what's missing).
