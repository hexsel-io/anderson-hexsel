# 02 — Design system

All values below are contracts — match exactly. Defined as CSS custom properties in `:root` (dark, default) and overridden under `[data-theme="light"]`.

## Color tokens

### Dark theme (default — applied via no attribute or `data-theme="dark"`)

```
--bg:          #0b0d10   /* Page background */
--surface:    #14171c   /* Card / elevated surface */
--surface-2:  #1c2027   /* Hovered card / nested surface */
--text:        #e6e8eb   /* Primary text */
--muted:       #9aa3ad   /* Secondary text, captions */
--border:     #262b33   /* Subtle dividers */
--accent:      #6ee7b7   /* Primary accent (mint/green) — links, CTA */
--accent-2:    #93c5fd   /* Secondary accent (soft blue) — highlights */
--danger:      #f87171   /* Reserved for error states */
--focus-ring:  #6ee7b7
```

### Light theme (`data-theme="light"`)

```
--bg:          #ffffff
--surface:     #f7f8fa
--surface-2:   #eef0f4
--text:        #0f1216
--muted:       #5b636e
--border:      #e2e6ec
--accent:      #047857   /* Darker mint for AA contrast on light bg */
--accent-2:    #1d4ed8
--danger:      #b91c1c
--focus-ring:  #047857
```

Contrast: `--text` on `--bg` and `--accent` on `--bg` must each meet **WCAG AA (4.5:1)** in both themes. The values above were chosen with this in mind.

## Typography

```
--font-sans:  "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
--font-mono:  "JetBrains Mono", ui-monospace, "SF Mono", Menlo, monospace
```

### Type scale (modular, 1.25 ratio)

```
--fs-xs:    0.75rem    /* 12 px — captions */
--fs-sm:    0.875rem   /* 14 px — small body */
--fs-base:  1rem       /* 16 px — body */
--fs-md:    1.125rem   /* 18 px — large body */
--fs-lg:    1.5rem     /* 24 px — h3 */
--fs-xl:    2rem       /* 32 px — h2 */
--fs-2xl:   2.75rem    /* 44 px — h1 / hero */
--fs-3xl:   3.75rem    /* 60 px — hero on desktop */
```

Line heights:
```
--lh-tight: 1.15   /* headings */
--lh-base:  1.55   /* body */
```

Headings use `--font-sans` weight 600. Body uses `--font-sans` weight 400. Code/accent text uses `--font-mono` weight 400.

## Spacing scale (8 px grid)

```
--space-1:  0.25rem   /* 4 px  */
--space-2:  0.5rem    /* 8 px  */
--space-3:  0.75rem   /* 12 px */
--space-4:  1rem      /* 16 px */
--space-6:  1.5rem    /* 24 px */
--space-8:  2rem      /* 32 px */
--space-12: 3rem      /* 48 px */
--space-16: 4rem      /* 64 px */
--space-24: 6rem      /* 96 px */
```

## Layout

- Container max-width: `1100px`. Class `.container { max-width: 1100px; margin-inline: auto; padding-inline: var(--space-6); }`.
- Section vertical padding: `--space-24` desktop, `--space-16` mobile.

## Breakpoints

```
--bp-sm:   640px     /* phone landscape */
--bp-md:  1024px     /* tablet landscape / small desktop */
```

Mobile-first. Use `@media (min-width: 640px) { ... }` and `@media (min-width: 1024px) { ... }`.

## Radii / elevation

```
--radius-sm:  6px
--radius-md:  10px
--radius-lg:  16px

--shadow-sm:  0 1px 2px rgba(0,0,0,0.20)
--shadow-md:  0 8px 24px rgba(0,0,0,0.28)
```

In light theme, soften shadow opacities (`0.06` and `0.10` respectively) by overriding `--shadow-sm` and `--shadow-md` under `[data-theme="light"]`.

## Components

### Button

- `.btn` — base. Padding: `--space-3` `--space-6`. Radius: `--radius-md`. Font weight 600. Transition: `background-color 150ms`.
- `.btn--primary` — `background: var(--accent); color: var(--bg);`
- `.btn--ghost` — `background: transparent; color: var(--text); border: 1px solid var(--border);` Hover: `background: var(--surface);`

### Card (service cards, experience entries)

```
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-lg);
padding: var(--space-6);
transition: transform 200ms, background-color 200ms;
```
Hover: `background: var(--surface-2); transform: translateY(-2px);`

### Tag chip (skills, tech stack)

```
display: inline-block;
font-family: var(--font-mono);
font-size: var(--fs-xs);
padding: var(--space-1) var(--space-3);
border: 1px solid var(--border);
border-radius: 999px;
color: var(--muted);
```

### Focus ring

`:focus-visible { outline: 2px solid var(--focus-ring); outline-offset: 2px; }` — applied universally.

## Motion

- All transitions ≤ 250 ms.
- Wrap animations in `@media (prefers-reduced-motion: no-preference) { ... }`. With reduced motion, no transforms, no fades — instant state changes.

## Iconography

Use inline SVG (no icon font, no SVG sprite library). Stroke icons: 1.5 px, current color. Heroicons outline set is a fine reference for shapes — re-draw inline rather than linking external files.
