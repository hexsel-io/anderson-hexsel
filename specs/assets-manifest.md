# Assets manifest

Every asset the site references. Items marked **placeholder** can be stubbed by the implementing agent now and replaced by the owner later.

## Fonts (`assets/fonts/`)

| File | Source | Notes |
|------|--------|-------|
| `Inter-Variable.woff2` | https://github.com/rsms/inter/releases — pick the latest `Inter.zip`, copy `Inter Variable/Inter-Variable.woff2`. | Variable weight 100–900. |
| `JetBrainsMono-Variable.woff2` | https://www.jetbrains.com/lp/mono/ → Download → copy `JetBrainsMono[wght]-VariableFont.woff2` (rename to match). | Variable weight 100–800. |

Implementing agent: download both files into `assets/fonts/`. If `curl` / `wget` are not allowed by the harness, leave a `.placeholder` file with the exact instructions inside, and **do not** add `@font-face` rules to CSS — instead add a comment in `main.css` `/* TODO: add @font-face once fonts/ is populated */` and let the system stack render. The site must still load and look reasonable without the custom fonts.

## Images (`assets/img/`)

| File | Dimensions | Status |
|------|-----------|--------|
| `favicon.svg` | scalable | **Generate now** per `08-seo-and-meta.md` (inline SVG content provided). |
| `og-cover.png` | 1200×630 | **Placeholder.** Generate a 1200×630 PNG with dark background `#0b0d10` and white-on-dark text "hexsel.io". If you can't generate a PNG (no image tools), commit a 1×1 transparent placeholder PNG and add `# TODO: replace og-cover.png with a real preview` to the README. |
| `profile.jpg` | square, ≤ 600×600 | **Optional.** Skip unless owner provides one. The site does not display a headshot in v1; reserve the path for future use. Do NOT commit a placeholder JPG — leave the file absent. |

## Documents (`assets/docs/`)

| File | Status |
|------|--------|
| `anderson-hexsel-resume.pdf` | **Placeholder.** Until the owner provides a PDF: commit a 1-page PDF containing the text `Resume placeholder — open https://hexsel.io/resume.html for the live HTML version. Use Cmd+P on that page to print to PDF.` Any tool to generate the placeholder works (e.g. browser-print on a temporary HTML file). If no tool is available, omit the file and update the "Download Resume" / "Download PDF" buttons to disable themselves with `aria-disabled="true"` and a tooltip "PDF coming soon". |

## Inline assets (no separate files)

These live inline in HTML/CSS/JS, not as separate files:

- All service-card icons (4 inline SVGs). Pick stroke icons matching: code (`</>`), cloud, lightbulb, gear.
- Hamburger SVG inside `.nav__toggle`.
- Sun + moon SVGs inside `.theme-toggle` (CSS shows the right one based on `data-theme`).
- Mail / LinkedIn / GitHub icons in the contact section.

Use 1.5px stroke, `currentColor`, `viewBox="0 0 24 24"`.

## Asset URL contract

Reference assets via root-relative URLs from HTML:
- `<link rel="stylesheet" href="/assets/css/main.css">`
- `<link rel="icon" href="/assets/img/favicon.svg">`
- `<a href="/assets/docs/anderson-hexsel-resume.pdf" download>`

Reference assets via relative URLs from CSS (relative to the CSS file):
- `src: url("../fonts/Inter-Variable.woff2") format("woff2-variations");`

This dual convention is intentional: HTML uses `/`-rooted URLs so links work from any path; CSS uses relative URLs so the stylesheet remains portable if the asset folder is renamed.
