# hexsel.io — SEO Action Plan (v2)
**Updated:** 2026-05-09 · Score: 75/100 (was 68/100)

---

## ✅ DONE — Fixed this session

| Fix | Score impact |
|---|---|
| CNAME apex fix (www → hexsel.io) | Technical +2 |
| Person schema: worksFor, address, credential, knowsAbout, alumniOf, image | Schema +4 |
| resume.html keyword-rich title | On-Page +1 |
| ProfilePage schema on resume.html | Schema +2 |
| sitemap.xml `<lastmod>` | Technical +0.5 |
| `llms.txt` for AI discovery | AI Readiness +0.5 |
| `og-cover.png` real image | Images +1.5 |
| `anderson-hexsel-resume.pdf` PDF exists | UX fix |
| Mobile hamburger nav fix | UX fix |
| Mobile container overflow fix | UX fix |

---

## 🔴 CRITICAL — One manual step remaining

### Fix Cloudflare AI bot blocking
**Score impact: +6 pts → 81/100 total**  
**Time: 5 minutes**

Cloudflare's Bot Fight Mode is injecting rules that block Google AI Overviews, ChatGPT, and Claude — on top of your clean local `robots.txt`.

**Steps:**
1. Log in at **dash.cloudflare.com** → select hexsel.io zone
2. Go to **Security → Bots**
3. Disable **"Block AI Scrapers"** or the managed AI bot ruleset
4. Save — changes take effect immediately (no deploy needed)

**Verify:** open a new incognito tab and go to `https://hexsel.io/robots.txt` — the Cloudflare-injected `Google-Extended: Disallow: /` blocks should be gone.

---

## 🟠 HIGH — Fix within 1 week

### Add a real profile photo
**Score impact: +2 pts (E-E-A-T, schema image)**

1. Add `assets/img/anderson-hexsel.jpg` (square, ≥ 400×400px, professional headshot)
2. Update Person schema `image` field in index.html to point to this file
3. Optionally add photo to hero section

---

## 🟡 MEDIUM — Fix within 1 month

### Expand service card descriptions
Each card is ~35–45 words. Expand to 80–120 words including:
- Target audience (regulated enterprises, FSI, public sector)
- Typical deliverables
- One differentiator

### Add 2–3 testimonials or endorsements
Even short LinkedIn-style quotes from colleagues or former clients strengthen E-E-A-T significantly.

### Submit sitemap to Google Search Console
1. Go to **search.google.com/search-console**
2. Add property for `hexsel.io`
3. Submit `https://hexsel.io/sitemap.xml`
4. Verify indexing status of both pages

---

## 🔵 LOW — Nice to have (backlog)

### Write 1–2 short technical notes
Examples:
- "How I structure Azure landing zones for Canadian data residency"
- "FinOps at scale: what 1,200 servers taught me"

These create topical authority and give AI models something to cite when asked about Azure architecture in Canada.

### Add `Service` schema to each services card
Structured data for each service offering can improve rich result eligibility.

---

## Score projection

| State | Score |
|---|---|
| Before this session | 68/100 |
| After this session (current) | 75/100 |
| After Cloudflare fix | ~81/100 |
| After profile photo + testimonials | ~84/100 |
| After content expansion + GSC submission | ~87/100 |
