# 00 — Overview

## Goal

A fast, professional, low-maintenance personal portfolio for Anderson Hexsel that:

1. Showcases his IT services so prospective clients can size him up in 30 seconds.
2. Presents his resume in both an HTML page (recruiter-friendly, searchable) and a downloadable PDF.
3. Loads instantly on mobile and desktop.
4. Deploys with `git push` — no build, no CI required.

## Tech stack

| Layer | Choice | Reason |
|------|--------|--------|
| Markup | HTML5 | Static, semantic |
| Styles | Plain CSS with CSS variables | No preprocessor; theme switching via `data-theme` |
| Scripts | Vanilla JS (ES2020+, no transpiler) | Tiny: nav toggle + theme toggle + scroll-reveal |
| Fonts | Self-hosted (Inter + JetBrains Mono) | Privacy + speed; avoids Google Fonts CDN |
| Hosting | GitHub Pages (apex domain) | Free, HTTPS, custom domain support |
| DNS | User's registrar → GitHub Pages IPs | See `09-github-pages-setup.md` |

## Non-goals

- No backend, no API, no database.
- No authentication (it's a brochure site).
- No CMS — content is hand-edited HTML.
- No JS framework, no bundler, no `node_modules`.
- No analytics, no cookie banner (no cookies set besides `localStorage` for theme).
- No i18n (English only for v1).
- No blog. (Owner can add later under `/posts/<slug>.html`.)

## Audience

1. **Prospective clients** scanning the services section to decide whether to reach out.
2. **Recruiters / hiring managers** opening the site from a LinkedIn message — they want the resume fast.
3. **Peers / collaborators** who already know Anderson and want a link to share.

## Success criteria

- Page weight under 200 KB on initial load (gzipped HTML + CSS + JS, excluding fonts).
- LCP < 1.5s on a Moto G4 throttled connection.
- Lighthouse ≥ 95 on Performance, Accessibility, Best Practices, SEO.
- Site is fully usable with JS disabled (theme toggle and mobile nav are progressive enhancements).
- `resume.html` prints to a single, well-laid-out PDF via Cmd+P with no manual tweaking.

## Browser support

Last 2 versions of Chrome, Firefox, Safari, Edge. No IE. No graceful degradation for browsers older than 2 years.

## Source-of-truth notes

- LinkedIn (https://www.linkedin.com/in/hexsel/) is canonical for: bio summary, work experience, education, skills, certifications.
- The repo is canonical for everything else.
- When LinkedIn and the site disagree, LinkedIn wins (the owner edits the site to match).
