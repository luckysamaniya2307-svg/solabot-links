/* =====================================================================
   Solabot Technologies Pvt. Ltd. — "Connect with Solabot" link hub
   script.js
   =====================================================================

   ┌───────────────────────────────────────────────────────────────────┐
   │                   ✏️  EDIT YOUR LINKS HERE  ✏️                      │
   │                                                                     │
   │  Replace every "REPLACE_WITH_..." value below with the REAL        │
   │  official Solabot link/handle. Keep the quotes.                    │
   │                                                                     │
   │  • url      → full address starting with https:// (for web/social) │
   │  • WhatsApp → use a wa.me link, e.g.  https://wa.me/919999999999    │
   │               (country code + number, NO "+", spaces or dashes)    │
   │  • Email    → use a mailto: link,  e.g.  mailto:hello@solabot.com   │
   │                                                                     │
   │  Any value left as "REPLACE_WITH_..." will show as "Coming soon"   │
   │  and will NOT be clickable — so the site never links anywhere fake. │
   └───────────────────────────────────────────────────────────────────┘
*/

const SOLABOT_LINKS = [
  {
    key: "website",
    title: "Official Website",
    sub: "solabot.in",                     // display label only (optional)
    url: "https://solabot.in/",            // Official Solabot website
    accent: "#1577c2",
    newTab: true,
  },
  {
    key: "youtube",
    title: "YouTube",
    sub: "Watch our videos",
    url: "https://youtube.com/@solabottechnologies5642?si=23e_f42Cc59OVGED",
    accent: "#ff0000",
    newTab: true,
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    sub: "Follow our company page",
    url: "https://www.linkedin.com/in/amit-aggarwal-543170136?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    accent: "#0a66c2",
    newTab: true,
  },
  {
    key: "instagram",
    title: "Instagram",
    sub: "See our latest posts",
    url: "https://instagram.com/solabot_?rpxt=MWh4bmU0MHFnOXFlbw%3D%3D",
    accent: "#e1306c",
    newTab: true,
  },
  {
    key: "facebook",
    title: "Facebook",
    sub: "Like our page",
    url: "https://www.facebook.com/share/p/19YVoYLfT4/",
    accent: "#1877f2",
    newTab: true,
  },
  {
    key: "whatsapp",
    title: "WhatsApp / Contact Us",
    sub: "Chat with us",
    // wa.me link: https://wa.me/<countrycode><number>  (digits only)
    url: "https://wa.me/919990128871",     // WhatsApp: +91 99901 28871
    accent: "#25d366",
    newTab: true,
  },
];

/* =====================================================================
   ⬇️  No need to edit below this line to update links.  ⬇️
   ===================================================================== */

/* Recognizable brand icons (inline SVG paths). */
const ICONS = {
  website:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.93 6h-2.95a15.6 15.6 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8ZM12 4c.83 1.2 1.48 2.53 1.91 4h-3.82c.43-1.47 1.08-2.8 1.91-4ZM4.26 14a7.96 7.96 0 0 1 0-4h3.38a16.6 16.6 0 0 0 0 4H4.26Zm.81 2h2.95c.35 1.26.82 2.47 1.38 3.56A8.03 8.03 0 0 1 5.07 16Zm2.95-8H5.07a8.03 8.03 0 0 1 4.33-3.56A15.6 15.6 0 0 0 8.02 8ZM12 20c-.83-1.2-1.48-2.53-1.91-4h3.82c-.43 1.47-1.08 2.8-1.91 4Zm2.34-6H9.66a14.7 14.7 0 0 1 0-4h4.68a14.7 14.7 0 0 1 0 4Zm.26 5.56c.56-1.09 1.03-2.3 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14a16.6 16.6 0 0 0 0-4h3.38a7.96 7.96 0 0 1 0 4h-3.38Z"/></svg>',
  youtube:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.39.52A3 3 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.89.52 9.39.52 9.39.52s7.5 0 9.39-.52a3 3 0 0 0 2.11-2.12A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .78 0 1.73v20.53C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .78 23.2 0 22.22 0Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38A5.86 5.86 0 0 0 .63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.08 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z"/></svg>',
  facebook:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.69 4.54-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M.06 24l1.68-6.15a11.86 11.86 0 0 1-1.59-5.94C.16 5.34 5.5 0 12.06 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.56-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.68-1.45L.06 24ZM6.6 20.2c1.68 1 3.28 1.59 5.46 1.59 5.45 0 9.89-4.43 9.89-9.88a9.82 9.82 0 0 0-2.9-6.99 9.82 9.82 0 0 0-6.98-2.9c-5.46 0-9.89 4.43-9.89 9.89 0 2.11.55 3.69 1.47 5.21l-.99 3.62 3.71-.97.23.43Zm12.08-5.6c-.07-.12-.27-.2-.56-.34-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.29.17-1.42Z"/></svg>',
};

const ARROW_ICON =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

/** A URL is considered "not yet configured" if left as a placeholder. */
function isPlaceholder(url) {
  return !url || url.trim() === "" || url.trim().startsWith("REPLACE_WITH");
}

/** Build and inject the cards. */
function renderCards() {
  const container = document.getElementById("cards");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  SOLABOT_LINKS.forEach((item, index) => {
    const placeholder = isPlaceholder(item.url);
    const el = document.createElement(placeholder ? "div" : "a");

    el.className = "card" + (placeholder ? " is-placeholder" : "");
    el.style.setProperty("--card-accent", item.accent);
    el.style.animationDelay = index * 0.06 + "s";

    if (!placeholder) {
      el.href = item.url;
      el.setAttribute("aria-label", item.title);
      // Open external links safely in a new tab; keep mailto in same context.
      if (item.newTab) {
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
    } else {
      el.setAttribute("role", "listitem");
      el.setAttribute("aria-disabled", "true");
      el.title = "Link not configured yet";
    }

    const sub = placeholder ? "Coming soon" : item.sub || "";
    const badge = placeholder
      ? '<span class="card-badge">Setup</span>'
      : "";

    el.innerHTML =
      badge +
      '<span class="card-icon">' +
      (ICONS[item.key] || ICONS.website) +
      "</span>" +
      '<span class="card-body">' +
      '<span class="card-title">' +
      item.title +
      "</span>" +
      '<span class="card-sub">' +
      sub +
      "</span>" +
      "</span>" +
      '<span class="card-arrow">' +
      ARROW_ICON +
      "</span>";

    fragment.appendChild(el);
  });

  container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderCards);
