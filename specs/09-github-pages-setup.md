# 09 — GitHub Pages & DNS setup

This file has two parts:

1. **Files in the repo** — created by the implementing agent.
2. **Manual steps** — the owner does these (cannot be done by an agent).

## Part 1: Files the implementing agent creates

### `CNAME` (repo root)

Single line, exactly:
```
hexsel.io
```
No trailing whitespace. No comment lines. GitHub Pages reads this and serves the site under that hostname.

### `.nojekyll` (repo root)

Empty file. Tells GitHub Pages **not** to run Jekyll, which would otherwise hide files starting with `_` and re-process Markdown. We're serving plain HTML, so Jekyll is just overhead.

### `404.html` (repo root)

GitHub Pages serves this on any unmatched path. Mirror the global header/footer. Body content per `03-content.md`:

```html
<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404 — Not found · hexsel.io</title>
  <meta name="description" content="404 — page not found at hexsel.io.">
  <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.svg">
  <script>
    (function () {
      try {
        var saved = localStorage.getItem('hexsel-theme');
        if (saved === 'light' || saved === 'dark') {
          document.documentElement.setAttribute('data-theme', saved);
        }
      } catch (e) {}
    })();
  </script>
  <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
  <main class="hero">
    <div class="container hero__inner" style="text-align:center">
      <h1 class="hero__title"><span class="hero__name">404</span><span class="hero__role">Page not found</span></h1>
      <p class="hero__tagline">That URL didn't match anything on hexsel.io.</p>
      <div class="hero__cta">
        <a class="btn btn--primary" href="/">Go home</a>
      </div>
    </div>
  </main>
  <script src="/assets/js/main.js" defer></script>
</body>
</html>
```

## Part 2: Manual steps for the owner (do NOT attempt as the agent)

These require GitHub UI and DNS registrar access and cannot be automated from this CLI session.

### Step 1 — Create GitHub repo

1. Create a new public repo on GitHub. Name doesn't have to be `hexsel.io`, but using the domain name keeps things obvious.
2. Initialize locally: `git init && git add . && git commit -m "Initial site" && git branch -M main`.
3. Add the remote and push: `git remote add origin git@github.com:<github-username>/<repo-name>.git && git push -u origin main`.

### Step 2 — Enable GitHub Pages

In the repo on github.com:
- **Settings → Pages**
- **Source**: Deploy from a branch
- **Branch**: `main`, **Folder**: `/ (root)`
- Save.
- After ~30 seconds, GitHub will show: "Your site is live at `<github-username>.github.io/<repo-name>/`."

### Step 3 — Configure custom domain

Still in **Settings → Pages**:
- **Custom domain**: enter `hexsel.io` (this matches the `CNAME` file).
- Save. GitHub will start a DNS check.

### Step 4 — DNS records at the registrar

Log in wherever `hexsel.io` is registered (Namecheap, Cloudflare, Porkbun, etc.). Add:

**Apex (`hexsel.io`) — four A records:**

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**(Optional) AAAA records** for IPv6:

| Type | Host | Value |
|------|------|-------|
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

**`www` subdomain — CNAME:**

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `<github-username>.github.io.` |

(Note the trailing dot.)

### Step 5 — Enforce HTTPS

Wait 5–30 minutes for the cert to provision (GitHub uses Let's Encrypt). Then in **Settings → Pages**, tick **Enforce HTTPS**. If the checkbox is greyed out, the cert isn't ready yet — wait and retry.

### Step 6 — Verify

- `dig hexsel.io +short` should return one of the four IPs above.
- `curl -I https://hexsel.io` should return `200 OK` with `server: GitHub.com`.
- Visit `https://www.hexsel.io` — should 301-redirect to `https://hexsel.io`.

## Troubleshooting (the owner's reference)

- **Site shows the old GitHub Pages URL**: the `CNAME` file is missing or has wrong content. Verify with `cat CNAME` — should be exactly `hexsel.io`.
- **`Domain's DNS record could not be retrieved`** in GitHub Pages settings: A records haven't propagated. Wait 10–60 minutes.
- **`Both apex domain and www subdomain` warning**: that's fine if both are configured.
- **HTTPS checkbox greyed out**: cert isn't ready. Don't manually re-issue; just wait.
