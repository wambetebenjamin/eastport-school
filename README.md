# Eastport International Training College

Static website for Eastport International Training College, Chai Plaza 2nd Floor,
Kenyatta Street, Kericho CBD (TVETA Centre 401002 · KNEC 518112 · CDACC 0350007).

Two complete designs share the same content store (`js/data.js`):

| Version | Lives at | Description |
|---|---|---|
| A | `/` | College website: home, about, courses, course detail, news, contact, apply, student login, portal dashboard, 404 |
| B | `/v2/` | University-style website (slider, programme levels, enquiry form, testimonials, news) plus an eLearning portal (login, dashboard, course catalogue) |

`versions.html` shows both side by side.

## Building

```bash
node tools/build.js
```

Writes the ten pages in the repository root and the four pages in `v2/`.
`tools/version.js` fingerprints `css/` + `js/` so browsers never serve stale assets.

## Layout

- `tools/layout.js` — shared shell for version A (header, footer, stats, banner, gallery).
- `tools/v2.js`, `tools/build-v2.js` — shell and pages for version B.
- `css/eastport.css`, `css/login.css`, `css/portal.css` — version A styles.
- `css/version-b.css` — version B styles (marketing site + eLearning portal).
- `js/app.js` — version A rendering; `js/version-b.js` — version B interactions.
- `img/` — brand marks, campus photography, faculty and programme images.

## The 2026 design ("split glass")

Version A, and especially the portal login, follows the approved split / frosted
glass reference (`new design of login.html`): a full-bleed photograph, a clear
copy panel on the left and a frosted glass panel on the right, with underlined
fields and pill actions.

- `css/design.css` — the shared layer loaded last on every version A page. It
  rebuilds the hero, the interior page banners (title left / frosted facts card
  right), pill buttons, form fields, cards, bands, the join banner and the navy
  footer, and switches the typeface to Inter.
- `css/login.html` (`css/login.css`) — the login screen in full: slim photographic
  header, split stage, underlined sign-in fields, pill actions and the compact
  brand footer. The markup lives in `tools/pages/login.js`; behaviour
  (role tabs, demo credentials, password reveal, mobile menu, sign-in hand-off to
  the dashboard) stays in `js/app.js`.
- `tools/layout.js` — `header()`, `footer()` and `pageInfo()` build the new
  header, footer and split page banner; `pageInfo()` accepts
  `{ lead, card: { title, text, items, cta } }` so each page can supply its own
  banner facts, and falls back to an admissions card.
- `tools/pages/home.js` — the home hero is the same split: claim and facts on the
  left, a frosted "Request a place" card on the right.

## Deploying

Vercel project `eastport-school`, production alias <https://eastport-school.vercel.app>.
Build command: `mkdir -p .vercel-out && cp -r *.html css js img fonts icon-fonts v2 .vercel-out/`
