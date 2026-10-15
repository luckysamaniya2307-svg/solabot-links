# Connect with Solabot — Social Links Hub

A premium, corporate-grade single-page "link hub" for **Solabot Technologies Pvt. Ltd.**
It gives visitors one central place to reach every official Solabot channel:
Website, YouTube, LinkedIn, Instagram, Facebook, X (Twitter), WhatsApp/Contact, and Email.

Built with **plain HTML, CSS, and vanilla JavaScript** — no backend, no database,
no paid APIs, and no paid dependencies. It runs by simply opening `index.html`
and is ready for **free GitHub Pages** hosting.

---

## 📁 Project structure

```
solabot-links/
├── index.html            # Page markup + SEO metadata
├── style.css             # Styling, responsive layout, animations
├── script.js             # ← EDIT YOUR LINKS HERE (configuration section)
├── README.md             # This file
└── assets/
    ├── solabot-logo-clean.png     # The official Solabot logo (displayed on the page)
    ├── solabot-logo-original.jpg  # Untouched original backup of the supplied logo
    └── favicon.svg                # Brand-colored favicon (abstract arc mark)
```

---

## 🖼️ The logo

The site uses your supplied Solabot logo with its original colors, proportions, and
appearance preserved. The supplied JPG contained a thin stray horizontal line across
the top; that single line was painted out (nothing else was altered), and the cleaned
logo is what the page displays:

```
assets/solabot-logo-clean.png     ← shown on the page
assets/solabot-logo-original.jpg  ← untouched original, kept as a backup
```

**If you ever need to replace it** (e.g. with a higher-resolution or transparent
PNG version), copy your file into the `assets` folder and either:

- name it `solabot-logo-clean.png` (overwrites the current one, no code change needed), **or**
- give it a new name and update the references in `index.html`
  (the `<img class="logo">` tag, the `apple-touch-icon` link, and the two social-preview `og:image`/`twitter:image` tags).

> A transparent **PNG** or **SVG** logo will look crisper than the current small image,
> especially on high-resolution screens. The layout already sits the logo on a
> clean white card, so either works.

### How to copy a logo into the project (Windows PowerShell)

```powershell
Copy-Item "C:\path\to\your\logo.png" "C:\Users\hp\solabot-links\assets\solabot-logo-clean.png" -Force
```

(Use the real source path of your logo file in place of `C:\path\to\your\logo.png`.)

---

## 👀 1. Preview the site locally

**Easiest:** double-click `index.html` — it opens in your default browser and works offline.

**Optional (recommended) local server** — avoids any browser restrictions and mirrors
how GitHub Pages serves the site. From inside the project folder:

```powershell
# Python 3 (already on most systems)
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser.

---

## 🔗 2. Replace the placeholder links

**All links live in one place:** the `SOLABOT_LINKS` array at the top of **`script.js`**.

Open `script.js` and replace each `REPLACE_WITH_...` value with the real official link.
Keep the surrounding quotes.

| Channel      | What to put in `url`                                             |
| ------------ | --------------------------------------------------------------- |
| Website      | Full address, e.g. `"https://www.solabot.com"`                  |
| YouTube      | Channel URL, e.g. `"https://youtube.com/@solabot"`              |
| LinkedIn     | Company page, e.g. `"https://linkedin.com/company/solabot"`     |
| Instagram    | Profile URL, e.g. `"https://instagram.com/solabot"`             |
| Facebook     | Page URL, e.g. `"https://facebook.com/solabot"`                 |
| X (Twitter)  | Profile URL, e.g. `"https://x.com/solabot"`                     |
| WhatsApp     | `wa.me` link, e.g. `"https://wa.me/919999999999"` (country code + number, digits only — no `+`, spaces, or dashes) |
| Email        | `mailto:` link, e.g. `"mailto:info@solabot.com"`                |

Example — before and after:

```js
// BEFORE (placeholder — shows "Coming soon", not clickable)
url: "REPLACE_WITH_WEBSITE_URL",

// AFTER (your real link)
url: "https://www.solabot.com",
```

> **Safety by design:** any value still left as `REPLACE_WITH_...` automatically
> renders as a greyed-out **“Coming soon”** card that is *not* clickable.
> The site will never link to a fake or invented address.

You can also tweak the small subtitle under each title via the `sub:` field
(purely cosmetic) and the card color via `accent:`.

Save the file and refresh the browser to see your changes.

---

## 🚀 3. Publish for free with GitHub Pages

1. **Create a GitHub account** (if you don't have one) at <https://github.com>.

2. **Create a new repository**
   - Click **New repository**.
   - Name it (e.g. `solabot-links`).
   - Set it to **Public**.
   - Click **Create repository**.

3. **Upload the project files**
   - On the new repo page, click **“uploading an existing file”**.
   - Drag in `index.html`, `style.css`, `script.js`, `README.md`, **and the `assets` folder**
     (keep `assets` as a folder so the logo and favicon paths still work).
   - Click **Commit changes**.

   *(Prefer the command line? From inside the project folder:)*
   ```powershell
   git init
   git add .
   git commit -m "Solabot social links hub"
   git branch -M main
   git remote add origin https://github.com/<your-username>/solabot-links.git
   git push -u origin main
   ```

4. **Turn on GitHub Pages**
   - In the repo, go to **Settings → Pages**.
   - Under **Build and deployment → Source**, choose **Deploy from a branch**.
   - Select branch **`main`** and folder **`/ (root)`**, then **Save**.

5. **Visit your live site**
   - After a minute, your site is published at:
     ```
     https://<your-username>.github.io/solabot-links/
     ```
   - GitHub shows the exact URL at the top of the **Settings → Pages** screen.

> **Updating later:** edit `script.js` (or any file), commit/upload the change,
> and GitHub Pages redeploys automatically within a minute.

---

## ✅ Features

- Responsive layout for desktop, tablet, and mobile.
- Solabot logo on a clean white card at the top.
- Headline **“Connect with Solabot”** + supporting subtext.
- Eight social cards with recognizable icons, hover lift, accent bar, and smooth transitions.
- Animated gradient background blobs (respects `prefers-reduced-motion`).
- Accessible: keyboard focus styles, `aria-label`s, good color contrast.
- SEO metadata (description, Open Graph, Twitter card) and an SVG favicon.
- No fake testimonials, statistics, or unverified claims — only what you provide.

---

## 🛠️ Tech

HTML5 · CSS3 (custom properties, grid, keyframe animations) · Vanilla JavaScript.
Fonts load from Google Fonts (free). Everything else is self-contained.

---

© Solabot Technologies Pvt. Ltd. All rights reserved.
