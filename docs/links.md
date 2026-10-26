# Team links (internal, never send to the client)

Design routes live under random folder names so they cannot be guessed. There is no index page on the site: `/`, `/4fe86354b2` and `/390b3d94a5` show nothing useful on purpose. This file replaces the old index pages; designers add their new pages here.

- Designer 1 folder: `app/4fe86354b2` (assets `public/4fe86354b2`)
- Designer 2 folder: `app/390b3d94a5` (assets `public/390b3d94a5`)

## Client links, "Silal Links Tidy Up" (2026-10-23) — the ones to send
- https://silal-io.vercel.app/Homepage-concept-1 (= `/homepage-concept-1`, the V3 static page)
- https://silal-io.vercel.app/Homepage-concept-3
- https://silal-io.vercel.app/New-Homepage/V1 (new homepage, `public/new-homepage/`; team alias `/new-homepage`)
- https://silal-io.vercel.app/About/V1 (= `/V3/about`)
- https://silal-io.vercel.app/News/V1 (= `/V3/resources/news`)
- https://silal-io.vercel.app/News-Detail (= the V3 press release; any article: `/News-Detail/<slug>`)
- `/Team/V1`: not built yet, not published.

Rewrites live in `next.config.ts`. The older `/V1`, `/V2`, `/V3` links below keep working.

## Client links, earlier (still live)
- https://silal-io.vercel.app/V1
- https://silal-io.vercel.app/V2 (new homepage + unified shell) · About: https://silal-io.vercel.app/V2/about · news: https://silal-io.vercel.app/V2/resources/news
- https://silal-io.vercel.app/V3 (same homepage, V1-style directory menu) · About: https://silal-io.vercel.app/V3/about (the former /V3, designer 2 v6) · news: https://silal-io.vercel.app/V3/resources/news
- https://silal-io.vercel.app/V3 · news: https://silal-io.vercel.app/V3/resources/news · feed: https://silal-io.vercel.app/V3/resources/newsroom

## Designer 1

### v1 — Clear Field
- Home: https://silal-io.vercel.app/4fe86354b2/v1
- About (A — immersive): https://silal-io.vercel.app/4fe86354b2/v1/about
- About (B — branded): https://silal-io.vercel.app/4fe86354b2/v1/about-b
- About (C — corporate premium, 3D site model): https://silal-io.vercel.app/4fe86354b2/v1/about-c
- About (D — C + 3D model matched to the aerial photos) ★ latest: https://silal-io.vercel.app/4fe86354b2/v1/about-d
- Design system: https://silal-io.vercel.app/4fe86354b2/v1/system

## Designer 2

### v10 — IO Academy in the new-homepage shell (2026-10-26, sample content)
- IO Academy library: https://silal-io.vercel.app/390b3d94a5/v10/training/io-academy-training
- Training detail: https://silal-io.vercel.app/390b3d94a5/v10/training/io-academy-training/controlled-environment-agriculture-hightech-greenhouse

### v9 — v2 About, polished (current)
- About IO: https://silal-io.vercel.app/390b3d94a5/v9/about

### v8 — About IO, one continuous page
- About IO: https://silal-io.vercel.app/390b3d94a5/v8/about

### v7 — About IO, simple and professional
- About IO: https://silal-io.vercel.app/390b3d94a5/v7/about

### v6 — About IO, compact and clean
- About IO: https://silal-io.vercel.app/390b3d94a5/v6/about
- News & Media · Feed (after Hut 8): https://silal-io.vercel.app/390b3d94a5/v6/resources/newsroom
- News & Media · Press releases: https://silal-io.vercel.app/390b3d94a5/v6/resources/news
- Press release (detail): https://silal-io.vercel.app/390b3d94a5/v6/resources/news/innovation-oasis-officially-opens

### v5 — About IO in the Silal / IO guideline language
- About IO: https://silal-io.vercel.app/390b3d94a5/v5/about

### v4 — About IO, Hut 8 × Anthem
- About IO: https://silal-io.vercel.app/390b3d94a5/v4/about

### v3 — About IO, one living world (current)
- About IO: https://silal-io.vercel.app/390b3d94a5/v3/about

### v1 — Proving Ground
- Home: https://silal-io.vercel.app/390b3d94a5/v1
- Design system: https://silal-io.vercel.app/390b3d94a5/v1/system

### v2 — About IO (storytelling)
- About IO: https://silal-io.vercel.app/390b3d94a5/v2/about
- News & Media · Press releases: https://silal-io.vercel.app/390b3d94a5/v2/resources/news
- Press release (detail): https://silal-io.vercel.app/390b3d94a5/v2/resources/news/innovation-oasis-officially-opens

## Homepage prototype (LAIN, static)

### Concept 1 — Built by the Desert
- Home: https://silal-io.vercel.app/homepage-concept-1  (= the V3 page, since 2026-10-13; static page in `public/homepage-concept-1/v3/`; the older version stays at /homepage-concept-1/v2 and /V2; notes in `prototypes/silal-homepage/README.md`)

### Concept 3 — From Desert to Discovery
- Home: https://silal-io.vercel.app/homepage-concept-3  (static page in `public/homepage-concept-3/`, notes in `prototypes/silal-homepage/README.md`, spec in `DESIGN-SPEC-CONCEPT-3.md`)

### Concept 3 — V1 (client footer design)
- Home: https://silal-io.vercel.app/homepage-concept-3/V1  (copy of Concept 3 with the footer replaced by the client's footer design; `public/homepage-concept-3/v1/`, rewrite in `next.config.ts`; `/homepage-concept-3` is unchanged)

### Concept 3 — main link = client submission (2026-10-13)
- Home: https://silal-io.vercel.app/homepage-concept-3  (now the latest version: journey panel, smoother numbers, curved masks, new footer; `public/homepage-concept-3/index.html`). The temporary `/homepage-concept-3/V3` link was removed. `/homepage-concept-3/V1` (client footer variant) is unchanged. Previous revision 5 of the main page is in git history (commit before this change).
