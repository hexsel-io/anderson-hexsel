# hexsel.io

Personal portfolio website for Anderson Hexsel — IT consultant & software engineer.

## Building & editing

This is a static site: plain HTML, CSS, and vanilla JS. No build step needed.

### Local development

Start a local development server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` in your browser.

### Editing content

All content is in the HTML files themselves:

- **`index.html`** — main site (hero, about, services, resume preview, contact)
- **`resume.html`** — standalone resume page
- Look for `[FILL IN]` markers — these are placeholders from LinkedIn that you'll replace with actual content.

## Styling

CSS is in `assets/css/`:

- **`main.css`** — shared styles for both pages
- **`resume.css`** — resume-specific styles + print stylesheet

Design tokens (colors, spacing, typography) are at the top of `main.css` as CSS variables. The site supports light and dark themes via the theme toggle button in the header.

### Fonts

Web fonts are self-hosted in `assets/fonts/`:

- `Inter-Variable.woff2` — UI font
- `JetBrainsMono-Variable.woff2` — monospace (accents, code)

If fonts are missing, the site falls back to system fonts.

## JavaScript

`assets/js/main.js` handles:

- **Theme toggle** — switches dark/light mode, persists to localStorage
- **Mobile nav** — hamburger menu on small screens
- **Scroll reveal** — fade-in animation as sections enter the viewport
- **Footer year** — auto-updates the copyright year

Total size: ~2 KB, zero dependencies.

## GitHub Pages deployment

This site is hosted on **GitHub Pages** with a custom domain (`hexsel.io`).

### Prerequisites

1. A GitHub account
2. The domain `hexsel.io` registered and under your control
3. Access to your domain registrar's DNS settings

### Deploy steps

1. **Create a GitHub repo** — any name; recommend `hexsel.io` for clarity
2. **Push this code** — `git push -u origin main`
3. **Enable GitHub Pages** — Repo Settings → Pages → Deploy from `main` branch, root folder
4. **Configure custom domain** — Settings → Pages → Custom domain → `hexsel.io`
5. **Add DNS records** — at your registrar:
   - Four **A records** for apex (`hexsel.io`):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - One **CNAME** for `www` → `<your-github-username>.github.io`
6. **Enforce HTTPS** — wait 5–30 min for cert, then check Enforce HTTPS in Pages settings

For detailed steps, see `specs/09-github-pages-setup.md`.

## Filling in the placeholders

Search the HTML files for `[FILL IN]` to find all the content blanks. Each one is tagged with its source:

- `[FILL IN — from https://www.linkedin.com/in/hexsel/]` — pull from your LinkedIn
- `[FILL IN — github username/url]` — add your GitHub profile
- etc.

For resume content (experience, education, skills), you can export your LinkedIn profile as a PDF or use your CV directly.

## Files & structure

```
hexsel.io/
├── index.html                # Main site
├── resume.html               # Resume page
├── 404.html                  # 404 error page
├── CNAME                     # GitHub Pages custom domain
├── .nojekyll                 # Disable Jekyll
├── robots.txt                # SEO crawl rules
├── sitemap.xml               # SEO sitemap
├── README.md                 # This file
├── assets/
│   ├── css/main.css          # Shared styles
│   ├── css/resume.css        # Resume-specific styles
│   ├── js/main.js            # JavaScript
│   ├── img/
│   │   ├── favicon.svg       # Browser tab icon
│   │   ├── og-cover.png      # Social preview image (placeholder)
│   │   └── profile.jpg       # Optional headshot
│   ├── fonts/
│   │   ├── Inter-Variable.woff2
│   │   └── JetBrainsMono-Variable.woff2
│   └── docs/
│       └── anderson-hexsel-resume.pdf  # Resume PDF (placeholder)
└── specs/                    # Implementation specs (reference)
```

## Browser support

- Chrome, Firefox, Safari, Edge (latest 2 versions)
- No IE support
- No graceful degradation for older browsers

## Performance

- Page weight: < 200 KB gzipped (excluding fonts)
- LCP: < 1.5s on Moto G4 throttled connection
- Lighthouse scores: ≥95 on all audits (Performance, Accessibility, Best Practices, SEO)

## License

Personal portfolio — use as you like for your own domain.

---

Built with HTML, CSS & a little JS. [View source on GitHub](https://github.com/[FILL IN]).
