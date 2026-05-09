# 10 — Accessibility

Target: **WCAG 2.1 AA**. The implementing agent must verify these as code is written, not after.

## Mandatory rules

### Semantics

- One `<h1>` per page (the hero on `index.html`, the name on `resume.html`).
- `<header>`, `<main id="main">`, `<footer>`, `<nav>`, `<section>`, `<article>` used per their actual role — not as styled `<div>` replacements.
- Every section that has a heading uses `<h2>`; sub-sections use `<h3>`. Don't skip levels.
- Lists of items use `<ul>` / `<ol>` / `<dl>`, not `<div>` stacks.

### Color contrast

- Body text vs background ≥ **4.5:1** in both themes.
- Large text (≥ 18pt or ≥ 14pt bold) ≥ 3:1.
- Interactive element text vs its background ≥ 4.5:1.
- The token values in `02-design-system.md` were chosen to meet this. If you change a value, re-verify with https://webaim.org/resources/contrastchecker/.

### Keyboard

- Every interactive element is reachable via Tab in a logical order.
- Focus indicator is visible (`:focus-visible` outline per `02-design-system.md`).
- The skip link `<a class="skip-link" href="#main">Skip to content</a>` appears on first Tab.
- Mobile nav toggle (`.nav__toggle`) is a `<button>`, not a `<div>`. Activatable with Enter/Space (free with `<button>`).
- Theme toggle is a `<button>` with `aria-pressed`.

### ARIA / labelling

- The mobile nav toggle has `aria-expanded` and `aria-controls="nav-list"`.
- The theme toggle has `aria-label="Toggle color theme"` and `aria-pressed` synced via JS.
- Nav landmarks have `aria-label`: `<nav class="nav" aria-label="Primary">`.
- Decorative SVGs have `aria-hidden="true"` and no `role="img"`. Informative SVGs (rare here) have `<title>` inside.
- Resume `dl` for skills uses proper `<dt>`/`<dd>`.

### Images

- `<img alt="…">` describes the image's purpose. Decorative images use `alt=""`.
- The `og-cover.png` and `favicon.svg` don't appear inline in the page, so no alt needed.
- If owner adds a `profile.jpg`: `<img src="/assets/img/profile.jpg" alt="Anderson Hexsel" width="240" height="240">`.

### Motion

- Wrap any transform/transition in `@media (prefers-reduced-motion: no-preference) { ... }`.
- The scroll-reveal observer in `main.js` checks `prefers-reduced-motion` and immediately reveals everything if set.

### Forms

- None in v1. If owner adds a contact form later, every input needs a visible `<label>` and `aria-describedby` for help text.

### Language

- `<html lang="en">` on every page. (If a future translation lands at `/pt/index.html`, that page declares `lang="pt-BR"`.)

### Touch targets

- Minimum **44×44 px** for buttons and link tap areas. Use `padding` to enlarge tap surface even when text is small.

### Document title

- Each page's `<title>` must be unique and meaningful. See `04-index-html.md` and `05-resume-html.md`.

### Print

- The print stylesheet uses light colors and black text. Don't print background colors / images by default.

## Self-test checklist (agent runs this before declaring done)

- [ ] Tab through `index.html` from the top — landing on every link/button — focus order makes sense.
- [ ] Press Tab once on first load: skip link appears.
- [ ] Activate skip link with Enter: focus jumps to `#main`.
- [ ] Mobile nav toggle is reachable, announces "expanded" state via the aria-expanded attribute.
- [ ] Theme toggle: pressing it changes appearance, persists across reload, `aria-pressed` flips.
- [ ] Resize to 320 px width: nothing overflows, text doesn't get clipped, all content reachable.
- [ ] Run https://wave.webaim.org/ on the deployed site (or local `python3 -m http.server`): no errors, ≤ 2 alerts.
- [ ] Run Chrome DevTools Lighthouse → Accessibility audit: score ≥ 95.
