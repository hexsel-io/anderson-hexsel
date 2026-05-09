# 03 — Content

This file is the **single source of copy**. The implementing agent must use these strings verbatim. Anywhere you see `[FILL IN]`, render the marker visibly in the page (see `README.md` rule #1) — do **not** invent text.

---

## Header / Nav

- Brand: **`hexsel`** (lowercase wordmark).
- Nav links (in order, anchor targets in parentheses):
  - About (`#about`)
  - Services (`#services`)
  - Resume (`#resume`)
  - Contact (`#contact`)
- Theme toggle: button with sun/moon SVG icon, `aria-label="Toggle color theme"`.

## Hero

- H1 (split into two lines on desktop):
  ```
  Anderson Hexsel
  IT Consultant & Software Engineer
  ```
- Subline (`<p>` under H1):
  > [FILL IN — short tagline, ~12 words. Source: https://www.linkedin.com/in/hexsel/ headline]
- CTAs (two buttons, side by side):
  - Primary: **View Services** → `#services`
  - Ghost: **Download Resume** → `/assets/docs/anderson-hexsel-resume.pdf`

## About

- Heading: **About**
- Body:
  > [FILL IN — 2–3 sentence bio. Source: https://www.linkedin.com/in/hexsel/ "About" section]
- Tag chip cluster, label "Tech I work with":
  > [FILL IN — list of 6–12 skills as chips. Source: https://www.linkedin.com/in/hexsel/ "Skills" section. Examples to illustrate format only: `Linux`, `Python`, `AWS`, `Terraform`, `Docker`]

## Services

- Heading: **Services**
- Subheading: *What I help clients with.*
- 4 service cards, in this order (titles are fixed; descriptions can be edited by the owner later):

### Card 1 — Web Development
> Modern, accessible websites and web apps. From single-page portfolios to full-stack applications, built to load fast and stay maintainable.

### Card 2 — Cloud & DevOps
> Cloud infrastructure on AWS, GCP, and Azure. CI/CD pipelines, IaC with Terraform, containerization, and observability that won't wake you up at 2 a.m.

### Card 3 — IT Consulting
> Pragmatic advice on architecture, tooling, and team workflows. Translating business goals into technical roadmaps without the buzzwords.

### Card 4 — Systems & Automation
> Scripting, automation, and systems administration that turn manual toil into reliable pipelines. Linux, Bash, Python, and the right tool for the job.

Each card needs an inline SVG icon at the top — pick simple stroke icons matching the theme (e.g. `</>`, cloud, lightbulb, gear). See `02-design-system.md` for icon conventions.

## Resume (preview section on `index.html`)

- Heading: **Resume**
- Subheading: *Selected highlights — full version on the* [resume page](/resume.html).
- 3 most-recent roles as condensed cards, each:
  - Role title `<h3>` — `[FILL IN]`
  - Company + dates — `[FILL IN]`
  - One-line summary — `[FILL IN]`
- Bottom buttons:
  - **Full resume** (link, primary) → `/resume.html`
  - **Download PDF** (link, ghost) → `/assets/docs/anderson-hexsel-resume.pdf`

## Contact

- Heading: **Contact**
- Body: *Open to consulting work, freelance projects, and full-time roles. The fastest way to reach me is email.*
- Buttons / links (icons + labels):
  - **Email**: `anderson.hexsel@gmail.com` → `mailto:anderson.hexsel@gmail.com`
  - **LinkedIn**: `linkedin.com/in/hexsel` → `https://www.linkedin.com/in/hexsel/`
  - **GitHub**: `[FILL IN — github username/url]` → `[FILL IN]`

## Footer

- Left: `© <current year> Anderson Hexsel`
- Right: `Built with HTML, CSS & a little JS · view source on [GitHub]([FILL IN — repo URL])`

Use `<time>` tag with the current year — implementing agent: hardcode `2026` (current as of authoring) but add a comment reminding the owner to bump it annually, OR set it via JS in `main.js` (allowed exception to "no JS for content"). Prefer the JS approach: less to remember.

## Resume page (`resume.html`)

The page is a long, single-column document. Sections in this order:

1. **Header**: Name (h1), tagline (h2), contact line: email · phone · location · LinkedIn · GitHub.
2. **Summary** — `[FILL IN — 3-sentence professional summary. Source: LinkedIn About]`
3. **Experience** — for each role:
   - Company, dates, location
   - Role title
   - 3–5 bullet achievements
   - All `[FILL IN — from LinkedIn experience entry]`
4. **Education** — `[FILL IN — institution, degree, dates]`
5. **Skills** — categorized:
   - Languages: `[FILL IN]`
   - Cloud / Infra: `[FILL IN]`
   - Tools: `[FILL IN]`
6. **Certifications** — `[FILL IN]`
7. **Languages** (spoken) — `[FILL IN]` (e.g. Portuguese (native), English (fluent), Spanish)

## 404 page

- Heading: **404 — page not found**
- Body: `That URL didn't match anything on hexsel.io. Try the [home page](/).`
- Same global header/footer as `index.html`.

## How to render `[FILL IN]` markers

In HTML, render each marker as:

```html
<!-- TODO: replace with content from https://www.linkedin.com/in/hexsel/ -->
<span class="fillin" role="note" aria-label="Placeholder content">[FILL IN — short tagline, ~12 words]</span>
```

Style `.fillin` with a dashed border and muted color so it's obvious in the rendered page (see `06-styles.md`).
