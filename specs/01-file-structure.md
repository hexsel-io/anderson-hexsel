# 01 — File structure

Create exactly this tree under `/Users/anderson/repo/hexsel.io/`. Do not introduce extra files.

```
hexsel.io/
├── index.html                       # Main single-page site
├── resume.html                      # Standalone styled resume
├── 404.html                         # GitHub Pages custom 404
├── CNAME                            # Single line: hexsel.io
├── .nojekyll                        # Empty file; disables Jekyll
├── robots.txt                       # SEO crawl rules
├── sitemap.xml                      # SEO sitemap
├── README.md                        # Repo README (NOT site content)
├── assets/
│   ├── css/
│   │   ├── main.css                 # Site styles + tokens
│   │   └── resume.css               # Resume page + print stylesheet
│   ├── js/
│   │   └── main.js                  # Nav, theme toggle, scroll-reveal
│   ├── img/
│   │   ├── favicon.svg              # Vector favicon (monogram "AH")
│   │   ├── og-cover.png             # 1200x630 social preview (placeholder OK)
│   │   └── profile.jpg              # Optional headshot (placeholder OK if absent)
│   ├── fonts/
│   │   ├── Inter-Variable.woff2     # Inter variable font
│   │   └── JetBrainsMono-Variable.woff2
│   └── docs/
│       └── anderson-hexsel-resume.pdf   # Placeholder: stub a 1-page PDF
└── specs/                           # ← these spec files (do not modify)
```

## Per-file purpose

- **`index.html`** — single-page site with anchor sections (`#about`, `#services`, `#resume`, `#contact`). See `04-index-html.md`.
- **`resume.html`** — full HTML resume with print stylesheet. See `05-resume-html.md`.
- **`404.html`** — minimal page. See `09-github-pages-setup.md` for content spec.
- **`CNAME`** — exactly one line: `hexsel.io` (no trailing newline beyond standard).
- **`.nojekyll`** — empty file. Tells GitHub Pages "do not run Jekyll." Required because filenames starting with `_` are otherwise hidden.
- **`robots.txt`** / **`sitemap.xml`** — see `08-seo-and-meta.md`.
- **`README.md`** — for the repo (devs, GitHub viewers). NOT what visitors see. Includes: site purpose, how to edit, local dev command (`python3 -m http.server 8000`), deploy steps.
- **`assets/css/main.css`** / **`resume.css`** — see `06-styles.md`.
- **`assets/js/main.js`** — see `07-javascript.md`.
- **`assets/img/`** — see `assets-manifest.md` for placeholder generation rules.
- **`assets/fonts/`** — see `assets-manifest.md`. Self-hosted, referenced via `@font-face`.
- **`assets/docs/anderson-hexsel-resume.pdf`** — placeholder PDF until owner replaces it. Generate via the print preview of `resume.html` once it's written, or commit a 1-page placeholder noting "[FILL IN]".

## Path conventions

- All paths in HTML are **root-relative** (start with `/`): `<link href="/assets/css/main.css">`. This works on GitHub Pages with a custom domain (apex). Do **not** use relative paths like `./assets/...` — they break for `resume.html` if it ever moves to a sub-path.
- All asset URLs in CSS use relative paths from the CSS file's location: `url('../fonts/Inter-Variable.woff2')`.

## Casing

- Filenames: **kebab-case-lowercase.ext**.
- IDs and classes: **kebab-case-lowercase**.
- JS variables: **camelCase**.
- CSS custom properties: `--kebab-case-lowercase`.
