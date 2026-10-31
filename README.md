# Eastport International Training College — website redesign

A complete redesign of [eastportinternationalcollege.ac.ke](https://eastportinternationalcollege.ac.ke/) built on the
**WebUni** education template supplied in `webuni-gh-pages.zip`. Static HTML/CSS/JS — no build step at deploy time.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Home — hero, stats, faculties, programme finder, practical learning, featured programmes, trainer signup, testimonials, leadership, news, CTA |
| `about.html` | About — who we are, why Eastport, vision/mission, accreditation, all 11 faculties, leadership |
| `courses.html` | Full programme catalogue with live keyword search plus faculty and level filters |
| `single-course.html` | Programme detail (`?p=programme-slug`), units, entry requirements, fees, FAQ, related programmes |
| `blog.html` | News, notices and academic gazette with sidebar |
| `contact.html` | Contact form, admissions hotline, campus location card, social links |
| `apply.html` | Online application form (`?programme=...` pre-selects a programme) and fee guidance |
| `login.html` | **Student / staff / guardian portal login** — split photo-and-form layout, validation, password reveal, demo credentials, forgot-password flow |
| `dashboard.html` | Student portal dashboard: results, fee statement, timetable, announcements, profile (styled to match the login) |
| `404.html` | Not-found page in the same design system |

## Student login demo

* Admission number: `EITC/2026/0148`
* Password: `eastport2026`

Any admission number (5+ characters) or e-mail with a 6+ character password also signs in, for review purposes.
The portal session is stored in `localStorage`; the dashboard redirects to `login.html` when no session exists.

## Local preview

```bash
python3 -m http.server 8000      # then open http://localhost:8000
```

## Editing content

All programmes, faculties, news items and portal demo data live in `js/data.js`.

Portal screens use their own stylesheets layered on the shared theme:

* `css/login.css` — split photo / form login card (template photos `img/page-bg/1.jpg` and `img/bg.jpg`,
  palette-crimson `#d82a4e` on charcoal `#1f1f1f`)
* `css/portal.css` — student dashboard, matched to the login's cards, radii and accents
Page markup is generated from the partials in `tools/` so shared header/footer stay in sync:

```bash
node tools/build.js               # rebuilds the HTML pages in the repo root
```

## Deployment

Deployed on Vercel as a static site (see `vercel.json` — clean URLs, long-lived asset caching).
