# New homepage (2026-10-23)

Static page `public/new-homepage/index.html`, served at `/new-homepage` (one rewrite in `next.config.ts`). Team link only (noindex).
Built from the revised About page (V1 About D look), updated to the client's `new_homepage.pdf` and the 5 helix flows (`helix_section.zip`).

## Sections (top to bottom)
Header (utility strip, six categories, Enquire) · Hero (4 crossfading slides) · Intro + stats · **The Site** (3D model, scroll tour) · **Arid-regions world map** ·
Why Here (The Arid Advantage) · Principles · **Helix: "Where do you want to look first?"** (scroll highlights one rung + card) · Our Journey (pinned, odometer) · **Press feature** · Footer.
Smooth scroll = Lenis (same settings as `app/V1/_components/SmoothScroll.tsx`), off for reduced motion.

## What was reused (nothing rebuilt from scratch)
| Piece | From |
|---|---|
| Page shell, header, footer, hero, intro, Why Here, Principles, Our Journey, CSS | the revised About page = `app/V1` (About D) CSS (`v1.module.css`, `about-d.module.css`) + Journey from `app/V2/(about)/_about/_components/Journey.tsx` |
| The Site (3D) | `app/V1/_about/SiteModel.tsx` + `tour-d.ts`, ported to a vanilla module (`src/site3d.ts`, React/GSAP removed, same scene and camera path), bundled with esbuild into one inline script |
| Press feature | `app/V2/(news)/resources/news` "Latest release" (its CSS rules, prefixed `n_`) |
| Helix photos + background | embedded images of the client's helix PDFs (full resolution) |

New: world dot map (`src/mapdots.json`, from Natural Earth land via `world-atlas`; arid regions are an illustrative selection), helix SVG (geometry measured from the PDFs).

## Rebuild
`src/build_about.py` (About page) → `src/build_home.py` (homepage). Paths inside the scripts point at the author's scratch folder; adjust before re-running.
3D bundle: `npx esbuild site3d.ts --bundle --minify --format=iife --outfile=site3d.bundle.js` (needs `three@0.186`).

## Open items
- Section numbers are 01–03 (the PDF still shows 03/06/07).
- Intro sentence reads "The conditions … tomorrow." (client copy in `content/about.md` says "will define agriculture for much of the world tomorrow").
- 3D facility texts are draft (see `app/V1/_about/tour.ts`); layout indicative until the masterplan arrives.
- Talent helix photo comes from the PDF (original not in the repo).
