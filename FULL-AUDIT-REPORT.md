# hexsel.io — Full SEO Audit Report
**Date:** 2026-05-09  
**Pages crawled:** 3 (index.html, resume.html, 404.html)  
**Business type:** Personal portfolio / Professional services — Senior Cloud & Platform Architect

---

## SEO Health Score: 68 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 74% | 16.3 |
| Content Quality | 23% | 70% | 16.1 |
| On-Page SEO | 20% | 88% | 17.6 |
| Schema / Structured Data | 10% | 35% | 3.5 |
| Performance (CWV) | 10% | 78% | 7.8 |
| AI Search Readiness | 10% | 20% | 2.0 |
| Images | 5% | 55% | 2.75 |
| **Total** | | | **66 / 100** |

---

## Executive Summary

hexsel.io is a lean, well-structured two-page portfolio with strong on-page fundamentals (correct titles, canonicals, heading hierarchy, OG tags). The site's biggest risk is not in its code — it's in **Cloudflare's Bot Fight Mode silently overriding the local robots.txt**, blocking Google AI Overviews, ChatGPT, and Claude citations entirely. The second-largest gap is schema depth: the Person schema exists but lacks critical properties (image, worksFor, credential) needed for Google's Knowledge Panel. Both are fixable in under an hour.

### Top 5 Critical Issues
1. 🔴 Cloudflare-managed robots.txt blocks Google-Extended, GPTBot, ClaudeBot, CCBot
2. 🔴 CNAME = `www.hexsel.io` but all canonicals = `https://hexsel.io/` — URL authority split
3. 🟠 `og:image` is a placeholder file — social shares show a broken/blank card
4. 🟠 Person schema missing: image, worksFor, address, credential, knowsAbout
5. 🟠 `resume.html` title is generic (`Anderson Hexsel — Resume`) — keyword opportunity wasted

### Top 5 Quick Wins
1. Fix Cloudflare Bot Fight Mode → restore AI crawler access (5 min, Cloudflare dashboard)
2. Update CNAME to `hexsel.io` (apex, matches canonicals) — already done in this audit
3. Add `<lastmod>` to sitemap.xml — already done in this audit
4. Enhance JSON-LD with 6 missing Person properties — already done in this audit
5. Create `llms.txt` for AI discovery — already done in this audit

---

## 1. Technical SEO

### Crawlability — ⚠️ CONFLICT

**Local robots.txt (correct):**
```
User-agent: *
Allow: /
Sitemap: https://hexsel.io/sitemap.xml
```

**Live robots.txt served by Cloudflare (overriding your file):**
```
User-agent: Google-Extended
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Amazonbot
Disallow: /
... (plus 3 more AI bots)
```

Cloudflare's **Bot Fight Mode** is injecting these rules on top of your file. Standard Googlebot (for regular search) is unaffected — `Allow: /` still applies. But every AI-powered search feature is cut off.

**Fix:** Cloudflare Dashboard → Security → Bots → disable "Block AI Scrapers" or manage the content signal settings. Or add an exception per bot-agent in Cloudflare's WAF rules.

### Sitemap — ✅ Exists / ⚠️ Missing lastmod
- `/sitemap.xml` exists with both URLs ✓
- Referenced in robots.txt ✓
- Missing `<lastmod>` on both entries — fixed in this audit

### Canonicals — ✅ Correct in HTML / ⚠️ CNAME Mismatch
- index.html canonical: `https://hexsel.io/` ✓
- resume.html canonical: `https://hexsel.io/resume.html` ✓
- **Issue:** CNAME file contained `www.hexsel.io` while canonicals reference the bare apex. GitHub Pages would serve from www and redirect apex → www, reversing the expected flow. Fixed: CNAME updated to `hexsel.io` in this audit.

### Mobile — ✅ Pass
- `<meta name="viewport" content="width=device-width, initial-scale=1">` ✓
- `theme-color` meta (dark + light) ✓
- Responsive CSS with 639px and 1023px breakpoints ✓
- Touch targets ≥ 44×44px on buttons ✓

### HTTPS
- Cloudflare proxy active
- GitHub Pages "Enforce HTTPS" should be enabled once DNS-only mode is set

### Custom 404 — ✅
- `404.html` exists with correct theme, link home ✓
- No `<meta name="robots" content="noindex">` (acceptable; Google ignores most 404s)

---

## 2. On-Page SEO

### Title Tags

| Page | Title | Length | Score |
|---|---|---|---|
| index.html | Anderson Hexsel — Senior Cloud & Platform Architect | 51 chars | ✅ Excellent |
| resume.html | Anderson Hexsel — Resume | 25 chars | ⚠️ Underutilized |
| 404.html | 404 — Not found · hexsel.io | 27 chars | ✅ OK |

**Resume title fix (implemented):** `Anderson Hexsel — Cloud Architect Resume · Azure · Toronto`

### Meta Descriptions

| Page | Length | Score |
|---|---|---|
| index.html | 163 chars | ✅ Good |
| resume.html | 148 chars | ✅ Good |

### Heading Hierarchy

**index.html:**
- H1: "Anderson Hexsel" ✓
- H2: About, AI Integration, Services, Experience, Contact ✓
- H3: Service titles, timeline roles ✓

**resume.html:**
- H1: "Anderson Hexsel" ✓
- H2: Summary, Experience, Education, Skills, Certifications, Languages ✓
- H3: Job titles, education ✓

### Keyword Coverage

| Keyword | Title | H1 | Body | Notes |
|---|---|---|---|---|
| Senior Cloud Platform Architect | ✅ | ✅ | ✅ | Well covered |
| Azure | ✅ | ✅ | ✅✅ | Excellent density |
| PwC Canada | ✅ | — | ✅ | Good |
| Toronto | — | — | ✅ | Only in eyebrow/contact |
| Cloud Migration | — | — | ✅ | In services only |
| Azure consultant Toronto | — | — | — | **Gap** |
| Enterprise cloud architect | — | — | — | **Gap** |
| Azure landing zone | — | — | ✅ | In services card |

### Internal Linking
- 2 pages, both cross-linked ✓
- Hero → Contact CTA ✓
- Experience section → resume.html CTA ✓
- resume.html → back to hexsel.io ✓
- No orphaned pages ✓

---

## 3. Schema / Structured Data

### Current State (index.html)
```json
{
  "@type": "Person",
  "name": "Anderson Hexsel",
  "url": "https://hexsel.io/",
  "email": "mailto:anderson@hexsel.io",
  "jobTitle": "Senior Manager — Cloud & Platform Architect",
  "sameAs": ["https://www.linkedin.com/in/hexsel/"]
}
```

**Missing properties (all HIGH impact):**
- `image` — required for Google Knowledge Panel consideration
- `worksFor` — Organization (PwC Canada) with sameAs
- `address` — addressLocality, addressCountry
- `hasCredential` — Azure Solutions Architect Expert
- `knowsAbout` — technology array
- `alumniOf` — FIAP

### resume.html
No schema markup at all. Opportunity: add `ProfilePage` schema.

**All schema enhancements implemented in this audit.**

---

## 4. Content Quality (E-E-A-T)

### Expertise ✅ Good
- 18+ years stated and repeated ✓
- Quantified results (1,200+ servers, 99.5% success rate) ✓
- Bicep code example demonstrates real technical depth ✓
- 12 specific technologies in chip cluster ✓

### Experience ✅ Good
- Current role at PwC Canada (Fortune-recognised firm) ✓
- 4 positions across 18+ years detailed ✓
- Certifications listed ✓

### Authoritativeness ⚠️ Needs Work
- LinkedIn ✓
- GitHub ✓
- No external publications, articles, or thought-leadership content ✗
- No testimonials or client endorsements ✗
- No mentions/links from third-party sites (expected for a new site)

### Trustworthiness ✅ Good
- Real email ✓
- Real location ✓
- Verifiable company affiliation ✓
- Open-source site code on GitHub ✓

### Content Depth ⚠️ Thin in places
- Service cards: 30–45 words each (informational, not persuasive)
- Experience timeline: 1-sentence summaries (full detail is in resume.html)
- No blog, case studies, or articles

---

## 5. Performance (Estimated CWV)

| Metric | Estimate | Notes |
|---|---|---|
| LCP | 🟢 < 2.5s | No hero images; fonts via preconnect |
| INP | 🟢 < 100ms | Minimal JS, all deferred |
| CLS | 🟢 0 | No images without dimensions; stable layout |
| TTFB | 🟡 depends | GitHub Pages CDN + Cloudflare |

**Google Fonts** — `display=swap` already set in URL ✓ (no FOUT layout shift)  
**JS** — single IIFE, deferred, no dependencies ✓  
**CSS** — no unused imports, no large framework ✓

---

## 6. Images

| Item | Status |
|---|---|
| Inline SVG icons | ✅ `aria-hidden` set correctly |
| `og-cover.png` | 🔴 Placeholder — social shares broken |
| Profile photo | ⚠️ None — missed E-E-A-T signal |
| Favicon | ✅ SVG, modern format |

---

## 7. AI Search Readiness (GEO)

| Signal | Status |
|---|---|
| Google-Extended access | 🔴 Blocked by Cloudflare |
| GPTBot access | 🔴 Blocked by Cloudflare |
| ClaudeBot access | 🔴 Blocked by Cloudflare |
| Regular Googlebot | ✅ Allowed |
| `llms.txt` | ⚠️ Missing — created in this audit |
| Structured contact info | ✅ Present |
| Citability signals | ⚠️ Weak — no external references |

---

## 8. Page Inventory

| URL | Title | Canonical | Indexed? |
|---|---|---|---|
| `hexsel.io/` | Anderson Hexsel — Senior Cloud & Platform Architect | ✅ Correct | Yes |
| `hexsel.io/resume.html` | Anderson Hexsel — Resume | ✅ Correct | Yes |
| `hexsel.io/404.html` | 404 — Not found | No canonical | 404 — not indexed |
