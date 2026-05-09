# hexsel.io — Full SEO Audit Report (v3 — Final)
**Date:** 2026-05-09 · Post all-fixes audit  
**Pages crawled:** 3 (index.html, resume.html, 404.html)  
**Business type:** Personal portfolio / Professional services — Senior Cloud & Platform Architect

---

## SEO Health Score: 81 / 100 ✅

| Category | Weight | Score | Weighted | vs. Start |
|---|---|---|---|---|
| Technical SEO | 22% | 90% | 19.8 | +5.5 ↑ |
| Content Quality | 23% | 70% | 16.1 | — |
| On-Page SEO | 20% | 89% | 17.8 | +0.2 ↑ |
| Schema / Structured Data | 10% | 75% | 7.5 | +4.0 ↑ |
| Performance (CWV) | 10% | 78% | 7.8 | — |
| AI Search Readiness | 10% | 85% | 8.5 | **+6.5 ↑↑** |
| Images | 5% | 85% | 4.25 | +1.5 ↑ |
| **Total** | | | **81 / 100** | **+13 ↑** |

**Session progress: 68 → 75 → 81**

---

## Executive Summary

All critical and high-priority issues resolved. hexsel.io is now correctly configured for standard search indexing, AI search readiness, social sharing, and structured data. The site went from 68 to 81 in one session — a +13 point improvement. Remaining opportunities are content depth and social proof (testimonials, articles) which take more time but have good long-term ROI.

### All issues resolved this session
| Fix | Category | Impact |
|---|---|---|
| Cloudflare Bot Fight Mode disabled | AI Readiness | +6.5 pts |
| CNAME apex fix (`www` → `hexsel.io`) | Technical | +1.5 pts |
| Person schema: +6 properties | Schema | +4.0 pts |
| ProfilePage schema on resume.html | Schema | included |
| resume.html keyword-rich title | On-Page | +0.2 pts |
| sitemap.xml `<lastmod>` added | Technical | +0.5 pts |
| `llms.txt` created | AI Readiness | included |
| `og-cover.png` real image | Images | +1.5 pts |
| `anderson-hexsel-resume.pdf` exists | UX | — |
| Mobile hamburger nav fixed | Technical | — |
| Mobile container overflow fixed | Technical | — |

---

## 1. Technical SEO — 90% ✅

### Crawlability ✅ Fully resolved

**Live robots.txt (confirmed):**
```
User-agent: *
Allow: /

Sitemap: https://hexsel.io/sitemap.xml
```

All crawlers allowed. Cloudflare AI bot blocks removed. Google-Extended, GPTBot, ClaudeBot, and CCBot can now access the site.

### Sitemap ✅ Confirmed live
```xml
<url>
  <loc>https://hexsel.io/</loc>
  <lastmod>2026-05-09</lastmod>
  <changefreq>monthly</changefreq>
  <priority>1.0</priority>
</url>
<url>
  <loc>https://hexsel.io/resume.html</loc>
  <lastmod>2026-05-09</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

### Canonicals ✅
- `hexsel.io/` — canonical matches CNAME and served domain
- `hexsel.io/resume.html` — correct

### Mobile ✅
- Viewport, theme-color, responsive breakpoints, 44px touch targets
- Hamburger nav visible and functional on all viewports

### Core Web Vitals (estimated)
| Metric | Estimate |
|---|---|
| LCP | 🟢 < 2.0s |
| INP | 🟢 < 100ms |
| CLS | 🟢 ~0 |

---

## 2. On-Page SEO — 89% ✅

### Title Tags
| Page | Title | Score |
|---|---|---|
| index.html | Anderson Hexsel — Senior Cloud & Platform Architect (51 chars) | ✅ |
| resume.html | Anderson Hexsel — Cloud Architect Resume · Azure · PwC Canada · Toronto (71 chars) | ✅ |

### Meta Descriptions ✅
Both pages have descriptive, keyword-rich meta descriptions under 165 chars.

### Heading Hierarchy ✅
Clean H1→H2→H3 on both pages. One H1 per page.

### Keyword Gaps (Medium priority)
- "Azure consultant Toronto" — phrase not used
- "Enterprise cloud architect Canada" — phrase not used
- "FinOps consultant" — not targeted as phrase

---

## 3. Schema / Structured Data — 75%

### index.html — Person ✅
Full Person schema with: name, url, email, jobTitle, image, address (Toronto, ON, CA), worksFor (PwC Canada), alumniOf (FIAP), hasCredential (Azure Expert), knowsAbout (14 technologies), sameAs (LinkedIn + GitHub).

### resume.html — ProfilePage ✅
ProfilePage wrapping a Person entity with job, address, credential.

### Remaining opportunity (Low)
- `image` field references og-cover.png — could be a portrait headshot for better Knowledge Panel
- Individual `Service` schema on each service card

---

## 4. Content Quality — 70%

### E-E-A-T
| Signal | Status |
|---|---|
| 18+ years experience | ✅ Stated |
| PwC Canada affiliation | ✅ Verifiable |
| Azure Expert certification | ✅ Listed |
| Quantified results (1,200+ servers) | ✅ Present |
| Technical code example (Bicep) | ✅ Demonstrates depth |
| Profile photo on page | ⚠️ Missing |
| Testimonials | ❌ None yet |
| Publications / blog | ❌ None yet |

### Content Depth
Service cards and timeline entries are intentionally brief (30–45 words). Full detail lives in `resume.html`. This is acceptable for a portfolio but limits topical authority.

---

## 5. Performance — 78% ✅

| Item | Status |
|---|---|
| `font-display: swap` on Google Fonts | ✅ |
| JS deferred, single IIFE | ✅ |
| No render-blocking resources | ✅ |
| No large raster images on page | ✅ |
| FOUC prevention inline script | ✅ |
| Font preconnect headers | ✅ |

---

## 6. AI Search Readiness — 85% ✅

| Signal | Status |
|---|---|
| Google-Extended | ✅ Now allowed |
| GPTBot | ✅ Now allowed |
| ClaudeBot | ✅ Now allowed |
| Regular Googlebot | ✅ Allowed |
| `llms.txt` | ✅ Present |
| Structured contact info | ✅ |
| Quantified achievements | ✅ |
| JSON-LD Person schema | ✅ |
| External citations pointing to site | ⚠️ New site — will grow over time |

---

## 7. Images — 85% ✅

| Asset | Status |
|---|---|
| `og-cover.png` (1200×630) | ✅ Real image |
| `anderson-hexsel-resume.pdf` (347KB) | ✅ Exists |
| `favicon.svg` | ✅ SVG |
| Profile photo on page | ⚠️ Not yet added |

---

## What's left (no urgency)

| Item | Priority | Effort |
|---|---|---|
| Add profile photo to hero + schema | Medium | 30 min |
| Expand service card copy (80–120 words each) | Medium | 2 hrs |
| Add 2–3 testimonials | Medium | depends on contacts |
| Submit sitemap to Google Search Console | Medium | 10 min |
| Write 1–2 short technical articles | Low | ongoing |
| `Service` schema on cards | Low | 30 min |
