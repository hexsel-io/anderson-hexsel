# hexsel.io — Implementation Specs

You are the implementing agent. Your job is to build the **hexsel.io** personal portfolio website per these specs. Read all spec files in numeric order before writing any code, then implement file-by-file.

## What you're building

A static personal portfolio for Anderson Hexsel, hosted on **GitHub Pages** at the custom domain **hexsel.io**. Single-page site (`index.html`) with anchor sections + a standalone styled resume page (`resume.html`). Vanilla HTML/CSS/JS — no build step, no framework, no Node dependencies.

## Owner / source of truth

- **Owner**: Anderson Hexsel
- **LinkedIn**: https://www.linkedin.com/in/hexsel/  ← canonical source for resume content
- **Email**: anderson.hexsel@gmail.com (use `mailto:` link unless owner specifies otherwise)
- **Repo path on disk**: `/Users/anderson/repo/hexsel.io/`

## Reading order (mandatory)

| # | File | Purpose |
|---|------|---------|
| 00 | `00-overview.md` | Goals, tech stack, non-goals, success criteria |
| 01 | `01-file-structure.md` | Exact directory tree + per-file purpose |
| 02 | `02-design-system.md` | Color tokens (light + dark), typography, spacing, breakpoints |
| 03 | `03-content.md` | Copy for every section, with `[FILL IN]` markers |
| 04 | `04-index-html.md` | Spec for `index.html` (sections, IDs, ARIA) |
| 05 | `05-resume-html.md` | Spec for `resume.html` (structure, print stylesheet) |
| 06 | `06-styles.md` | Spec for `main.css` and `resume.css` |
| 07 | `07-javascript.md` | Spec for `main.js` (nav, theme toggle, scroll-reveal) |
| 08 | `08-seo-and-meta.md` | Meta tags, OG cards, sitemap, robots |
| 09 | `09-github-pages-setup.md` | CNAME, .nojekyll, DNS records (manual user steps) |
| 10 | `10-accessibility.md` | WCAG AA targets, keyboard nav, focus rings |
| 11 | `11-verification.md` | How to verify done (commands, Lighthouse thresholds) |
| – | `assets-manifest.md` | List of asset files to create or stub |

## Implementation order (mandatory)

1. **Directory scaffold** — create folders + empty asset placeholders per `01-file-structure.md` and `assets-manifest.md`.
2. **`index.html`** per `04-index-html.md` — using copy from `03-content.md`.
3. **`resume.html`** per `05-resume-html.md` — using copy from `03-content.md`.
4. **`assets/css/main.css` and `assets/css/resume.css`** per `06-styles.md` — apply tokens from `02-design-system.md`.
5. **`assets/js/main.js`** per `07-javascript.md`.
6. **SEO files** (`robots.txt`, `sitemap.xml`, favicon, OG image) per `08-seo-and-meta.md`.
7. **GitHub Pages config files** (`CNAME`, `.nojekyll`, `404.html`) per `09-github-pages-setup.md`.
8. **Accessibility audit** per `10-accessibility.md` — verify *while* writing, don't bolt on at the end.
9. **Verification** per `11-verification.md` — run before declaring the task complete.

## Hard rules

1. **`[FILL IN]` markers stay as-is.** Do not invent bio text, job titles, dates, or company names. If a section has `[FILL IN — from https://www.linkedin.com/in/hexsel/]`, leave the marker visible in the rendered HTML inside an HTML comment **and** as visible text wrapped in a `.fillin` span. The owner will replace these.
2. **No build step.** No `package.json`, no bundler, no transpiler. CSS and JS are served as-is. The site must work by opening `index.html` in a browser directly.
3. **No framework runtime.** Do not link React, Vue, Tailwind CDN, jQuery, or similar. Web fonts are self-hosted from `assets/fonts/` (download into the manifest list — see `assets-manifest.md`).
4. **No external trackers / analytics** unless the owner adds them later.
5. **Deterministic output.** Use the exact CSS variable names, IDs, class names, and file paths from the specs. The specs are contracts — diverging makes it impossible for the owner to refactor later without re-reading everything.
6. **Don't add features that aren't specced.** No blog, no project gallery, no contact form (unless owner adds Formspree later), no i18n.

## When you're stuck

If a spec is genuinely ambiguous, **stop and ask the owner** rather than guessing. Don't paper over a gap with reasonable-looking content — that just hides the question.

## Done definition

The verification checklist in `11-verification.md` passes:
- Site renders correctly when served by `python3 -m http.server 8000` from the repo root.
- Lighthouse scores ≥ 95 across Performance, Accessibility, Best Practices, SEO.
- HTML validates at https://validator.w3.org with zero errors.
- All `[FILL IN]` markers are visibly preserved (not silently filled).
- Both light and dark themes render correctly; theme toggle persists across reloads.
- `resume.html` Cmd+P print preview is clean (no nav, no buttons, single-column).
