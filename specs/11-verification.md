# 11 — Verification

The implementing agent runs all of these before declaring the task complete. If any check fails, fix and re-run.

## 1. Local serve & visual check

```bash
cd /Users/anderson/repo/hexsel.io
python3 -m http.server 8000
```

Open `http://localhost:8000/` in a browser.

- [ ] Site loads without console errors.
- [ ] Hero renders, both CTAs are clickable.
- [ ] All four nav anchors scroll to their sections smoothly.
- [ ] Services section shows 4 cards in a 1 / 2 / 4 column grid at 320 px / 720 px / 1280 px widths.
- [ ] Resume preview shows 3 timeline items.
- [ ] Theme toggle flips the palette and persists after reload.
- [ ] `[FILL IN]` markers are visible (dashed border, ✎ prefix).
- [ ] Open `http://localhost:8000/resume.html`. Long single-column resume renders.
- [ ] Cmd+P preview on `resume.html`: clean print layout, no nav buttons, light colors regardless of UI theme.
- [ ] Open `http://localhost:8000/this-does-not-exist`. The 404 page is served (or whatever GH Pages would serve — locally Python will 404 with directory listing; that's fine).

## 2. HTML validation

Upload `index.html`, `resume.html`, `404.html` to https://validator.w3.org/#validate_by_upload — **zero errors** allowed. Warnings about HTML5 polyglot are fine; otherwise fix.

## 3. Lighthouse (Chrome DevTools)

Run on `http://localhost:8000/` in DevTools → Lighthouse → Mobile + Desktop. Required scores:

| Category | Threshold |
|----------|-----------|
| Performance | ≥ 95 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 95 |
| SEO | ≥ 95 |

Common failures and fixes:
- "Image elements do not have explicit width and height" → add `width` and `height` attributes to `<img>` (helps CLS too).
- "Links do not have a discernible name" → add `aria-label` or visible text inside icon-only links.
- "Document does not have a meta description" → check `<head>`.

## 4. Accessibility audit

Run https://wave.webaim.org/ against `http://localhost:8000/` (or a deployed staging URL):

- [ ] **0 errors**
- [ ] ≤ 2 alerts (alerts about contrast on the placeholder `.fillin` chips are acceptable since they're temporary)

## 5. Theme behavior

- [ ] First load with no localStorage: dark theme applies (page background near-black).
- [ ] Toggle to light: page becomes white. Reload — still light. Toggle back: dark, then reload — still dark.
- [ ] Open in private browsing window: theme defaults to dark again (proving localStorage isolation).
- [ ] No flash of wrong theme on reload (FOUC). If you see a flash, the inline bootstrap script in `<head>` is probably misplaced — it must come **before** the stylesheet `<link>`.

## 6. Mobile / responsive

In DevTools device emulation:
- [ ] iPhone SE (375 px): nav collapses to hamburger; opens on tap; closes on link tap.
- [ ] iPhone 14 Pro Max (430 px): same behavior.
- [ ] iPad (768 px): cards in 2 columns.
- [ ] Desktop (1280 px+): cards in 4 columns; sticky header visible.

## 7. JS-disabled check

In DevTools → Settings → Debugger → "Disable JavaScript", reload:
- [ ] Site renders fully (no broken layout).
- [ ] Dark theme is shown (default).
- [ ] All anchor nav links work (smooth scroll fails silently — that's fine).
- [ ] Theme toggle is visible but inert (acceptable progressive enhancement).
- [ ] Footer year shows hardcoded `2026`.

## 8. Page weight budget

```bash
# from the repo root
du -sh assets/css/main.css assets/css/resume.css assets/js/main.js index.html resume.html
```

Expect (uncompressed):
- `index.html` < 12 KB
- `resume.html` < 10 KB
- `main.css` < 18 KB
- `resume.css` < 6 KB
- `main.js` < 4 KB

## 9. Final pre-commit checklist

- [ ] `[FILL IN]` markers are present and **not silently filled**.
- [ ] No `console.log`, no `debugger;`, no `TODO:` outside specs/.
- [ ] No tracking pixels, no third-party scripts, no Google Fonts CDN links.
- [ ] `CNAME` file contains exactly `hexsel.io`.
- [ ] `.nojekyll` exists and is empty.
- [ ] `robots.txt` and `sitemap.xml` exist with correct hostnames.
- [ ] `README.md` (repo) explains how to edit and how to deploy.

## 10. Post-deploy (optional, for the owner)

After pushing and DNS resolves:
- [ ] `curl -I https://hexsel.io` → `200 OK`
- [ ] OG preview check: https://www.opengraph.xyz/url/https%3A%2F%2Fhexsel.io
- [ ] Mobile-friendly test: https://search.google.com/test/mobile-friendly?url=https%3A%2F%2Fhexsel.io
