# 08 — SEO & meta

## `<head>` contract

The exact `<meta>` and `<link>` tags are listed in `04-index-html.md` and `05-resume-html.md`. Don't deviate. Both pages must include:

- `<title>`
- `<meta name="description">` — keep under 160 chars
- `<meta name="viewport">`
- `<link rel="canonical">` — full URL of the page
- `<link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg">`
- Open Graph tags: `og:type`, `og:url`, `og:title`, `og:description`, `og:image`
- Twitter Card tags: `twitter:card="summary_large_image"`, `twitter:title`, `twitter:description`, `twitter:image`
- Two `theme-color` tags — one per `prefers-color-scheme`

## File: `robots.txt` (repo root)

```
User-agent: *
Allow: /

Sitemap: https://hexsel.io/sitemap.xml
```

## File: `sitemap.xml` (repo root)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://hexsel.io/</loc>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://hexsel.io/resume.html</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

Do not include `<lastmod>` — it goes stale and the value is hard to keep accurate.

## Favicon

Inline SVG, monogram-style "AH". Save at `/assets/img/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#0b0d10"/>
  <text x="50%" y="58%" text-anchor="middle"
        font-family="ui-monospace, monospace" font-size="16" font-weight="700"
        fill="#6ee7b7">AH</text>
</svg>
```

## Open Graph cover image

`/assets/img/og-cover.png`, 1200×630, < 200 KB. Placeholder if not provided by owner: a 1200×630 PNG with dark bg `#0b0d10`, the wordmark `hexsel` in mint `#6ee7b7` at 120pt centered, and below it in `#9aa3ad` at 36pt: `IT Consultant & Software Engineer`. The implementing agent may generate this with any tool the user has handy (e.g. an SVG converted to PNG via `rsvg-convert` if available, or commit a 1×1 transparent placeholder PNG with a `[FILL IN]` note in `assets-manifest.md`).

## Schema.org JSON-LD (optional but recommended)

Inside `index.html` `<head>`, add a single JSON-LD block describing the person:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Anderson Hexsel",
  "url": "https://hexsel.io/",
  "email": "mailto:anderson.hexsel@gmail.com",
  "jobTitle": "IT Consultant & Software Engineer",
  "sameAs": [
    "https://www.linkedin.com/in/hexsel/"
  ]
}
</script>
```

If owner provides GitHub URL, add it to `sameAs`.

## Crawler hygiene

- No `noindex` anywhere — the owner wants this site found.
- No login walls.
- All internal links are relative (root-relative), so search engines see consistent URLs.
- `https://hexsel.io/` is canonical; `www.hexsel.io` (if used) should 301 to apex (configured at the registrar / GitHub Pages settings — see `09-github-pages-setup.md`).

## Page-specific descriptions

- **`index.html`**: `Anderson Hexsel — IT consulting, web development, cloud & DevOps. Portfolio and contact.`
- **`resume.html`**: `Resume of Anderson Hexsel — experience, education, skills, and certifications.`
- **`404.html`**: `404 — page not found at hexsel.io.`
