# hexsel.io — SEO Action Plan
**Generated:** 2026-05-09

---

## 🔴 CRITICAL — Fix immediately

### 1. Restore AI crawler access in Cloudflare
**Impact:** AI Search Readiness +50 pts | Time: 5 min

Cloudflare's Bot Fight Mode is injecting rules that block Google AI Overviews, ChatGPT, and Claude citations — ON TOP of your clean local robots.txt.

**Steps:**
1. Log into Cloudflare Dashboard → your hexsel.io zone
2. Go to **Security → Bots**
3. Find "Block AI Scrapers" or "Managed Rules for AI bots" → **Disable** or customize
4. Alternatively, go to **Security → WAF → Managed Rules** and disable the "Cloudflare Managed — AI Bot" ruleset
5. Verify: `curl -s https://hexsel.io/robots.txt | grep -i google` — should NOT show `Google-Extended` disallow

If you want to allow AI citation but still block AI training (reasonable choice):
```
# Add to Cloudflare custom rules or manage via Content Signals
Content-Signal: search=yes, ai-input=yes, ai-train=no
```

---

## 🟠 HIGH — Fix within 1 week

### 2. Create a real og:image (1200×630px)
**Impact:** Social sharing, CTR from social links  
**File needed:** `assets/img/og-cover.png` (1200 × 630px)

Suggested design: Dark background (#0F0E0C), name in Fragment Mono large, role subtitle, accent colour bar. Can be created in Figma, Canva, or generated via a tool.

Currently the og:image placeholder returns 404 on social previews.

### 3. Create a real resume PDF
**File needed:** `assets/docs/anderson-hexsel-resume.pdf`

Open `hexsel.io/resume.html` in Chrome → Print → Save as PDF. Then place the file at the path above.

### 4. Add a profile photo
**Impact:** E-E-A-T trust signal, Google Knowledge Panel  
**File:** `assets/img/anderson-hexsel.jpg` (square, ≥ 400×400px)

Add to hero section in index.html and reference in Person schema `image` property.

---

## 🟡 MEDIUM — Fix within 1 month

### 5. Expand service descriptions
Each service card is 30–45 words. Expand to 80–120 words with:
- Who this service is for (regulated enterprises, FSI, public sector)
- Typical outcomes / deliverables
- One concrete differentiator

### 6. Add testimonials or social proof
Even 2–3 quotes from colleagues / former clients significantly strengthen E-E-A-T.

### 7. Consider a short articles/notes section
Even 3–4 technical notes (e.g., "How I structure Azure landing zones for Canadian data residency") would:
- Create topical authority
- Target long-tail queries like "Azure landing zone Canada compliance"
- Give AI models something to cite

---

## ✅ Already fixed in this audit

| Fix | File |
|---|---|
| CNAME updated to `hexsel.io` (apex matches canonicals) | `CNAME` |
| sitemap.xml — added `<lastmod>` to both URLs | `sitemap.xml` |
| Person schema — added image, worksFor, address, credential, knowsAbout, alumniOf | `index.html` |
| resume.html — improved title with keyword targets | `resume.html` |
| ProfilePage schema added to resume.html | `resume.html` |
| `llms.txt` created for AI discovery | `llms.txt` |
