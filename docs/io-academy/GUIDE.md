# IO Academy pages: style guide + hand-off

For every chat that works on the IO Academy pages (library, training detail). Read this first, then `docs/BRIEF.md` (URL structure), `docs/brand.md`, `docs/sitemap.md`. Branches: `23-oct/io-academy-page` (library) and `23-oct/training-detail-page` (detail). Both share one shell and one data file, so the two pages look like one site and like the homepage.

## What to match
**Patokan utama = the new homepage** (`/new-homepage`, sources `prototypes/new-homepage/v2/`, header/footer per branch `23-oct/new-homepage`). The pages do not look like a new design; they look like an inner page of that homepage.

| Part | Source of truth | Where it lives for Academy |
|---|---|---|
| Header (utility strip, white sticky header, 6 menu items + dropdowns, Enquire pill, round mobile menu) | `prototypes/new-homepage/v2/header.html`, `shell.css` | `app/390b3d94a5/v10/_c/Header.tsx`, `v10/shell.module.css` |
| Footer (newsletter, Explore, Resources = Content Library + FAQs, Connect, cropped mark + blue rule, bilingual address) | branch `23-oct/new-homepage`, `shell.css` | `v10/_c/Footer.tsx` |
| Page body grammar (label on blue rule, display title, tab capsule, feature card, filters, 3-across cards, band) | News & Media (`/V3/resources/news`, source `app/390b3d94a5/v6/resources/news`) | `v10/pages.module.css` |
| Copy + sample data | this repo | `v10/_lib/academy.ts` |

Never copy the v6 header/footer (floating capsules) into these pages. Never invent a new header or footer.

## Route + folders (self-contained design `v10`, Designer 2 folder)
- `app/390b3d94a5/v10/layout.tsx` font (Readex Pro 300/400/500, var `--font-d10`), Header, Footer, LinkGuard. Light only.
- `v10/training/io-academy-training/page.tsx` library. `.../[slug]/page.tsx` detail. `.../_c/` components. `.../academy.module.css` Academy-only classes.
- `v10/pages.module.css` shared page classes (import as `n`). `v10/shell.module.css` shell + tokens (import as `s`).
- URL: `/390b3d94a5/v10/training/io-academy-training` and `.../<slug>`. Team link only (noindex). Add every new URL to `docs/links.md`.
- The nav already points "IO Academy Training" to the library. Other menu links are `#`, kept inert by `LinkGuard`.

## Rules
1. **Light mode only.** The site has no dark mode. No `prefers-color-scheme`, no `data-theme`.
2. **Type:** Readex Pro stand-in for 29LT Bukra, weights 300 (display), 400 (text), 500 (labels, buttons). One font variable (`--f-brand`). Display lowercase-friendly, Light.
3. **Colours:** IO Blue `#3ca7d2` for rules/icons/large type, `--io-ink #1a6f96` for small blue text and buttons, Charcoal `#595453`, Grey `#7f8284`, Light `#f1f1f1`, white background. Green/orange/pink only as tiny accents. No other colours.
4. **Shape:** buttons = full pill (`s.btn s.btnPrimary`, height 52px, `s.btnSm` 42px). Images, cards, panels = 6px corners (`--r`). Links = `s.textLink` (blue, sliding arrow, underline).
5. **Rules:** thin IO-blue 1px lines are the signature: label rule, section dividers, footer top.
6. **Smooth scroll is mandatory.** `v10/_c/SmoothScroll.tsx` = Lenis with the homepage settings (duration 1.15, ease-out quart, `touchMultiplier 1.4`) on GSAP's ticker; anchors glide via `lenis.scrollTo`; stop it while the mobile menu is open (`lenis()?.stop()`); off under reduced motion. Every new page under `v10` inherits it from the layout, never add a second scroller.
7. **Motion:** nothing fades in on its own. Lines rise through masks, images wipe up and drift, small items rise (`Motion.tsx`, `data-lines` / `data-up` / `data-wipe` / `data-px` / `data-rule`). Everything off under `prefers-reduced-motion`. No opacity keyframes.
8. **Container:** content max 1920px, side gutter `--gx` (= `--gutter`, 20–64px). Section rhythm `--sp`.
9. **Logical CSS** (`inset-inline`, `margin-inline`, `border-inline-start`) so an Arabic RTL version can mirror later.
10. **Photos:** only `public/photos/<folder>/<file>` web copies via `v10/_lib/photo.ts` (`P.*`). Never rename or recompress originals.
11. **Sample content is marked.** Every course, date, fee, quote is a placeholder and says so on the page (`SAMPLE_NOTE`). No invented people: trainer cards show a role and "name to be confirmed".
11. **Labels:** Primary labels exactly as `docs/sitemap.md`. Page lives under **Talent & Training** (number label `05`).
13. Build with `npm run build` before every push. Do not touch `app/V*`, `public/V*`, `proxy.ts`, root layout/page (BRAIN).

## Page anatomy
**Library (IO Academy):** `Label 05 Talent & Training` + display title "IO Academy" + intro → tab capsule (the 4 Talent & Training pages, "IO Academy Training" current) → `01 Featured course` (feature card, text on photo) → `02 The library` (track chips with counts, format select, search, 3-across cards, empty state) → `03 How the Academy works` (4 steps) → `04 Training for teams` (paper band + text link). Cards link to the detail page by slug (`DETAIL_LIVE` flag in `academy.ts`).

**Detail:** see `docs/io-academy/DETAIL-BRIEF.md`.

## Data model (`v10/_lib/academy.ts`)
`Course` = slug, title, track, mode (Online / On campus / Blended), level, length, excerpt, photo + alt, `facts` (audience, prior, language, duration, investment, certificate), `intro[]`, `quote`, `learn[]`, `planning` (intake, sessions[], time, place), `content[]`, `how[]`, `result[]`, `concepts[]`, `trainers[]` (role + focus only), `faq[]`. Tracks: Controlled Environment · Water & Soil · Crops & Breeding · Robotics & Data · Venture & Business. Add a course = add an object; both pages pick it up.

## Open inputs (client)
Real course catalogue (titles, dates, fees in AED, durations), trainer names + photos, enquiry back end (form is front-end only), Arabic copy, whether "IO Academy Training" stays internal or links to an external platform (BRIEF open input), Contact page URL, 29LT Bukra webfont.

## Check before you push
`npm run build` · open library and a detail page at 1440 and 390 px · header dropdown + mobile menu work · no dark colours · no `#` link jumps · new URL added to `docs/links.md` · decision logged in `docs/BRIEF.md`.
