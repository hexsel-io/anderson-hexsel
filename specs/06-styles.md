# 06 — Styles (`main.css`, `resume.css`)

## File: `assets/css/main.css`

### Order of rules (top to bottom)

1. `@font-face` declarations (Inter + JetBrains Mono variable fonts from `assets/fonts/`).
2. `:root` with CSS custom properties (dark theme defaults from `02-design-system.md`).
3. `[data-theme="light"]` override block.
4. CSS reset: minimal — `*, *::before, *::after { box-sizing: border-box; }`, reset `margin`/`padding` on `body`, `h1–h6`, `p`, `ul`, `ol`, `figure`, `dl`, `dd`. Set `html { scroll-behavior: smooth; }` (wrapped in reduced-motion media query). Set `body { background: var(--bg); color: var(--text); font-family: var(--font-sans); line-height: var(--lh-base); }`.
5. Typography: `h1–h6` use `--font-sans` weight 600, `--lh-tight`. Sizes per `02-design-system.md`.
6. Utilities: `.container`, `.visually-hidden`, `.no-print`.
7. Layout & components in this order: `.skip-link`, `.site-header`, `.brand`, `.nav`, `.theme-toggle`, `.hero`, `.section`, `.btn`, `.card`, `.card-grid`, `.chip-cluster`, `.chip`, `.timeline`, `.contact-links`, `.site-footer`, `.fillin`.
8. Scroll-reveal: `[data-reveal]` initial state + `.is-visible` final state, wrapped in `prefers-reduced-motion: no-preference`.

### Font-face

```css
@font-face {
  font-family: "Inter";
  src: url("../fonts/Inter-Variable.woff2") format("woff2-variations");
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}
@font-face {
  font-family: "JetBrains Mono";
  src: url("../fonts/JetBrainsMono-Variable.woff2") format("woff2-variations");
  font-weight: 100 800;
  font-display: swap;
}
```

### Layout specifics

- `.site-header` — `position: sticky; top: 0; z-index: 50; background: color-mix(in srgb, var(--bg) 88%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--border);`
- `.hero` — full-viewport-height-ish: `min-height: 70vh; display: grid; place-items: center; padding-block: var(--space-24);`
- `.section` — `padding-block: var(--space-24);` Mobile: `var(--space-16)`.
- `.section--alt` — `background: var(--surface);`
- `.card-grid` — `display: grid; grid-template-columns: 1fr; gap: var(--space-6);` At ≥640 px: `grid-template-columns: repeat(2, 1fr);`. At ≥1024 px: `repeat(4, 1fr);` (since there are 4 service cards).
- `.timeline` — uses CSS `counter-reset` + `::before` for the index marker, or simple left-border. Either works; keep it simple.
- `.contact-links` — flex, gap `--space-4`, items styled like ghost buttons.

### `.fillin` (placeholder marker)

```css
.fillin {
  border: 1px dashed var(--accent);
  border-radius: var(--radius-sm);
  padding: 0 var(--space-2);
  color: var(--muted);
  font-style: italic;
  background: color-mix(in srgb, var(--accent) 8%, transparent);
}
.fillin::before { content: "✎ "; color: var(--accent); font-style: normal; }
```

This makes the placeholders visible AND scannable so the owner can find them quickly when filling in content. Do not hide them.

### Skip link

```css
.skip-link {
  position: absolute;
  inset-block-start: -40px;
  inset-inline-start: var(--space-4);
  background: var(--accent);
  color: var(--bg);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-sm);
  z-index: 100;
}
.skip-link:focus { inset-block-start: var(--space-2); }
```

### Mobile nav

- Default (mobile): `.nav__list` is hidden; `.nav__toggle` is visible.
- When `.nav__toggle[aria-expanded="true"]`, the list slides down into a panel.
- ≥1024 px: `.nav__toggle` is hidden; `.nav__list` is a horizontal flex.

### Scroll-reveal styles

```css
@media (prefers-reduced-motion: no-preference) {
  [data-reveal] {
    opacity: 0;
    transform: translateY(12px);
    transition: opacity 400ms ease, transform 400ms ease;
  }
  [data-reveal].is-visible {
    opacity: 1;
    transform: none;
  }
}
```

## File: `assets/css/resume.css`

Loaded **after** `main.css` on `resume.html` only.

### Screen rules

- `.resume` — narrower max-width: `820px`. Increased line-height for readability: `1.6`.
- `.resume__name` — `font-size: var(--fs-2xl); margin-bottom: var(--space-2);`
- `.resume__role` — `color: var(--muted); margin-bottom: var(--space-4);`
- `.resume__contact` — flex wrap, gap `--space-4`, font-size `--fs-sm`.
- `.resume__section` — margin-block `--space-12`, with a top border: `border-top: 1px solid var(--border); padding-top: var(--space-6);`.
- `.resume__job` — margin-block `--space-6`.
- `.resume__bullets` — left padding `--space-6`, `list-style: disc;`.
- `.resume__skills` — `display: grid; grid-template-columns: max-content 1fr; gap: var(--space-2) var(--space-6);` `dt { font-weight: 600; }`.

### Print stylesheet

```css
@media print {
  :root,
  [data-theme="dark"],
  [data-theme="light"] {
    /* Force light values regardless of UI theme */
    --bg: #ffffff;
    --surface: #ffffff;
    --text: #111111;
    --muted: #444444;
    --border: #cccccc;
    --accent: #057a55;
    --shadow-sm: none;
    --shadow-md: none;
  }

  body { font-size: 10.5pt; }
  .no-print { display: none !important; }

  .resume { max-width: none; padding: 0; }
  .resume__section { break-inside: auto; }
  .resume__job { break-inside: avoid; }
  h2 { break-after: avoid; }
  h2 + * { break-before: avoid; }

  a { color: inherit; text-decoration: underline; }

  @page { margin: 18mm 14mm; }
}
```

### Visually-hidden utility

```css
.visually-hidden {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
```

### Notes

- Use logical properties (`margin-block`, `padding-inline`) where they don't hurt readability.
- Avoid `!important` except for the print stylesheet's `.no-print` rule.
- No vendor prefixes — autoprefixer isn't in this project. Modern syntax only (last 2 versions of major browsers).
