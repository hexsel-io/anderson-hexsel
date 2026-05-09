# hexsel.io — Full SEO Audit Report (v2)
**Date:** 2026-05-09 · Re-audit after session improvements  
**Pages crawled:** 3 (index.html, resume.html, 404.html)  
**Business type:** Personal portfolio / Professional services — Senior Cloud & Platform Architect

---

## SEO Health Score: 75 / 100 ↑ (was 68)

| Category | Weight | Score | Weighted | Change |
|---|---|---|---|---|
| Technical SEO | 22% | 87% | 19.1 | +2.8 ↑ |
| Content Quality | 23% | 70% | 16.1 | — |
| On-Page SEO | 20% | 89% | 17.8 | +0.2 ↑ |
| Schema / Structured Data | 10% | 75% | 7.5 | +4.0 ↑ |
| Performance (CWV) | 10% | 78% | 7.8 | — |
| AI Search Readiness | 10% | 25% | 2.5 | +0.5 ↑ |
| Images | 5% | 85% | 4.25 | +1.5 ↑ |
| **Total** | | | **75 / 100** | **+7 ↑** |

> **Projected score after Cloudflare fix:** ~81/100 (AI Search Readiness jumps from 25% → 85%)

---

## Executive Summary

hexsel.io improved from 68 → 75 in this session. All code-level fixes have been deployed. The remaining gap is almost entirely owned by one manual setting: **Cloudflare's Bot Fight Mode blocking Google AI Overviews, ChatGPT, and Claude citations**. That single change in the Cloudflare dashboard would push the score to ~81.

### What was fixed this session
| Fix | Impact |
|---|---|
| CNAME `www.hexsel.io` → `hexsel.io` (matches canonicals) | Eliminates www/apex URL authority split |
| Person schema: +6 properties (worksFor, address, credential, knowsAbout, alumniOf, image) | Knowledge Panel eligibility |
| resume.html title → keyword-rich | On-page SEO +keyword coverage |
| ProfilePage schema on resume.html | Second page now has structured data |
| sitemap.xml `<lastmod>` added | Fresher crawl signals |
| `llms.txt` created | AI discovery baseline |
| `og-cover.png` — real image pushed | Social sharing previews now work |
| `anderson-hexsel-resume.pdf` — file exists | Download CV link no longer broken |
| Mobile hamburger nav fix | UX + crawlability on mobile |
| Mobile container overflow fix (AI section) | Layout integrity |

### Remaining critical issue
🔴 **Cloudflare-managed robots.txt overrides your local file**, adding blocks for Google-Extended, GPTBot, ClaudeBot, CCBot. Your local `robots.txt` is clean — Cloudflare injects these on top.

---

## 1. Technical SEO — 87%

### Crawlability

**Local robots.txt (correct — in repo):**
```
User-agent: *
Allow: /
Sitemap: https://hexsel.io/sitemap.xml
```

**Live robots.txt served by Cloudflare (overriding your file):**
```
User-agent: Google-Extended
Disallow: /          ← blocks Google AI Overviews / SGE

User-agent: GPTBot
Disallow: /          ← blocks ChatGPT web browsing

User-agent: ClaudeBot
Disallow: /          ← blocks Anthropic Claude citations

User-agent: CCBot
Disallow: /          ← blocks Common Crawl
```

Standard Googlebot (regular search) is still allowed. Only AI-powered features are blocked.

**Fix:** Cloudflare Dashboard → Security → Bots → disable "Block AI Scrapers"

### Sitemap ✅
- `/sitemap.xml` exists ✓
- Both URLs listed ✓
- `<lastmod>` now present ✓
- Referenced in robots.txt ✓

### Canonicals ✅
- index.html: `https://hexsel.io/` ✓
- resume.html: `https://hexsel.io/resume.html` ✓
- CNAME now `hexsel.io` — apex matches canonicals ✓

### Mobile ✅
- Viewport meta ✓
- theme-color (dark + light) ✓
- Responsive breakpoints (639px, 1023px) ✓
- Touch targets ≥ 44×44px ✓
- Hamburger nav fixed (was invisible on mobile) ✓

### Core Web Vitals (estimated)
| Metric | Estimate | Reason |
|---|---|---|
| LCP | 🟢 < 2.0s | No large images; `display=swap` on fonts |
| INP | 🟢 < 100ms | Single deferred IIFE, no framework |
| CLS | 🟢 ~0 | No layout shifts; stable grid |

---

## 2. On-Page SEO — 89%

### Title Tags
| Page | Title | Length | Score |
|---|---|---|---|
| index.html | Anderson Hexsel — Senior Cloud & Platform Architect | 51 chars | ✅ |
| resume.html | Anderson Hexsel — Cloud Architect Resume · Azure · PwC Canada · Toronto | 71 chars | ✅ |
| 404.html | 404 — Not found · hexsel.io | 27 chars | ✅ |

### Heading Hierarchy ✅
Both pages have clean H1→H2→H3 hierarchy. One H1 per page. No skipped levels.

### Keyword Coverage
| Keyword | Covered | Notes |
|---|---|---|
| Senior Cloud Platform Architect | ✅ | Title, H1 role, meta |
| Azure | ✅ | Multiple sections |
| PwC Canada | ✅ | About, timeline, resume |
| Toronto | ✅ | Eyebrow, contact, resume title |
| Cloud Migration | ✅ | Services card |
| Azure Landing Zone | ✅ | Services card |
| FinOps | ✅ | Services card, about meta |
| Azure consultant Toronto | ⚠️ | Phrase not used — opportunity |
| Enterprise cloud architect | ⚠️ | Phrase not used — opportunity |

---

## 3. Schema / Structured Data — 75%

### index.html — Person schema ✅ Enriched
```json
{
  "@type": "Person",
  "name": "Anderson Hexsel",
  "url": "https://hexsel.io/",
  "email": "anderson@hexsel.io",
  "jobTitle": "Senior Manager — Cloud & Platform Architect",
  "image": "https://hexsel.io/assets/img/og-cover.png",
  "address": { "addressLocality": "Toronto", "addressRegion": "ON", "addressCountry": "CA" },
  "worksFor": { "@type": "Organization", "name": "PwC Canada" },
  "alumniOf": { "@type": "CollegeOrUniversity", "name": "FIAP" },
  "hasCredential": { "name": "Microsoft Certified: Azure Solutions Architect Expert" },
  "knowsAbout": ["Microsoft Azure", "Cloud Architecture", "Terraform", ...],
  "sameAs": ["https://www.linkedin.com/in/hexsel/", "https://github.com/hexsell007"]
}
```

### resume.html — ProfilePage schema ✅ Added
Wraps a Person entity with job, address, credential.

### Remaining gaps (Low priority)
- `image` references og-cover.png — ideally a headshot photo URL
- No `Review` or `AggregateRating` (not applicable yet — no testimonials)
- Service offerings could use `Service` schema per card

---

## 4. Content Quality — 70%

### E-E-A-T Assessment
| Signal | Status | Notes |
|---|---|---|
| Years of experience | ✅ | "18+ years" stated repeatedly |
| Current employer | ✅ | PwC Canada (Fortune-recognised) |
| Certification | ✅ | Azure Solutions Architect Expert |
| Quantified results | ✅ | 1,200+ servers, 99.5% success rate |
| Technical depth | ✅ | Bicep code example |
| Profile photo | ⚠️ | Not on page (og-cover is not a portrait) |
| Testimonials | ❌ | None |
| Publications / articles | ❌ | No blog or external writing |
| External mentions | ❌ | New site — expected |
| LinkedIn | ✅ | Linked and in sameAs |

### Content Depth
| Section | Word count | Assessment |
|---|---|---|
| About paragraph | ~75 words | ⚠️ Adequate |
| Each service card | ~35–45 words | ⚠️ Thin |
| Each timeline entry | ~20–25 words | ⚠️ Thin (full detail in resume) |
| AI Integration section | ~120 words | ✅ Good |
| Resume summary | ~75 words | ✅ Good |
| Resume bullets | 4–5 per job | ✅ Good |

---

## 5. Performance — 78%

| Metric | Status |
|---|---|
| Google Fonts `display=swap` | ✅ Already set |
| JS deferred | ✅ |
| No render-blocking resources | ✅ |
| No large images on page | ✅ |
| Inline FOUC prevention script | ✅ |
| Font preconnect headers | ✅ |

---

## 6. AI Search Readiness — 25% 🔴

| Signal | Status |
|---|---|
| Google-Extended | 🔴 Blocked (Cloudflare) |
| GPTBot | 🔴 Blocked (Cloudflare) |
| ClaudeBot | 🔴 Blocked (Cloudflare) |
| Regular Googlebot | ✅ Allowed |
| `llms.txt` | ✅ Created |
| Structured contact info | ✅ |
| Quantified achievements | ✅ |
| External citations pointing to site | ❌ New site |

**After fixing Cloudflare → AI Search Readiness jumps to ~85% → overall score ~81/100**

---

## 7. Images — 85%

| Asset | Status |
|---|---|
| `og-cover.png` (1200×630) | ✅ Real image, pushed |
| `favicon.svg` | ✅ SVG, modern |
| `anderson-hexsel-resume.pdf` | ✅ Exists (347KB) |
| Profile photo on page | ⚠️ None yet |
| Inline SVG icons | ✅ `aria-hidden` correct |

---

## Page Inventory

| URL | Title | Indexed | Schema |
|---|---|---|---|
| `hexsel.io/` | Anderson Hexsel — Senior Cloud & Platform Architect | ✅ | Person ✅ |
| `hexsel.io/resume.html` | Anderson Hexsel — Cloud Architect Resume · Azure · PwC Canada · Toronto | ✅ | ProfilePage ✅ |
| `hexsel.io/404.html` | 404 — Not found | ❌ (404) | None (correct) |
