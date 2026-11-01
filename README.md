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

## Deploying

Vercel project `eastport-school`, production alias <https://eastport-school.vercel.app>.
Build command: `mkdir -p .vercel-out && cp -r *.html css js img fonts icon-fonts v2 .vercel-out/`
