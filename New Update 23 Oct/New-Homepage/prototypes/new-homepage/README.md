# New homepage (2026-10-23)

Static page `public/new-homepage/index.html`, served at `/new-homepage` (one rewrite in `next.config.ts`). Team link only (noindex).
Built from the revised About page (V1 About D look), updated to the client's `new_homepage.pdf` and the 5 helix flows (`helix_section.zip`).

## Sections (top to bottom)
Header (utility strip, six categories, Enquire) · Hero (4 crossfading slides) · Intro + stats · **The Site** (3D model, scroll tour) · **Arid-regions world map** ·
Why Here (The Arid Advantage) · Principles · **Helix: "Where do you want to look first?"** · Our Journey (pinned, odometer) · **Press feature (Latest release)** · Footer.
Smooth scroll = Lenis (same settings as `app/V1/_components/SmoothScroll.tsx`), off for reduced motion.

### Helix section (client `helix_3d.gltf`)
- The client's model (`src/helix.glb`, the gltf welded from 12 MB to 1.6 MB, with a `_TIER` attribute for the 9 levels) is embedded in the page (base64) and drawn by `src/helix3d.ts` (three.js).
- Intro: Silal blue `#3DA7CF` background, white helix, no card; the helix grows in and its 9 levels spin in one after another. Then a circle mask opens the first place.
- Scroll turns every level with the SAME curve, each level starting a little after the one above (`STAGGER`). Active level = `#3DA7CF`, fading out here and in there (never travelling); the others are soft white.
- Each step = one layer (blurred photo of the card + tint + the card). The next layer opens as a circle from the centre, so it covers the previous card. Cards rise + scale in. No timed fades.
- Phones (<760px): card centred below a smaller helix.

### Text reveal (Codegrid "Copy")
GSAP 3.13 SplitText (CDN): lines in an overflow mask, y 100% -> 0, stagger .1, power3.out, once at `top 75%`. Every text except numbering (stat numbers, odometer, counters, 01-05). Pinned panels play a text the first time its step/card/place is shown, never again. Off for reduced motion.

## What was reused (nothing rebuilt from scratch)
| Piece | From |
|---|---|
| Page shell, header, footer, hero, intro, Why Here, Principles, Our Journey, CSS | the revised About page = `app/V1` (About D) CSS (`v1.module.css`, `about-d.module.css`) + Journey from `app/V2/(about)/_about/_components/Journey.tsx` |
| The Site (3D) | `app/V1/_about/SiteModel.tsx` + `tour-d.ts`, ported to a vanilla module (`src/site3d.ts`, React/GSAP removed, same scene and camera path), bundled with esbuild into one inline script |
| Press feature | `app/V2/(news)/resources/news` "Latest release" (its CSS rules, prefixed `n_`) |
| Helix photos | embedded images of the client's helix PDFs (full resolution); blurred backgrounds are made from them |

New: world dot map (`src/mapdots.json`, from Natural Earth land via `world-atlas`; arid regions are an illustrative selection), helix SVG (geometry measured from the PDFs).

## Rebuild
`src/build_about.py` (About page) → `src/build_home.py` (homepage). Paths inside the scripts point at the author's scratch folder; adjust before re-running.

**Optimised site build:** `python3 build_home.py --dist <out dir> <url base>` (e.g. `/new-homepage-v2`) writes the page that is deployed: webp images (q84), minified CSS/JS, `index.html` ~220 KB (was 3.2 MB with the 3D model embedded), the three.js bundle and the helix model as separate hashed files in `assets/` (loaded when idle / when a 3D section gets near), scripts `defer`, hero image preloaded. Same markup and animations as the preview.
3D bundle: `npx esbuild entry.ts --bundle --minify --format=iife --outfile=site3d.bundle.js` (needs `three@0.186`; `entry.ts` imports `site3d.ts` and `helix3d.ts`).

## Open items
- Section labels have no numbers (client comments); stat numbers and counters stay.
- Intro sentence reads "The conditions … tomorrow." (client copy in `content/about.md` says "will define agriculture for much of the world tomorrow").
- 3D facility texts are draft (see `app/V1/_about/tour.ts`); layout indicative until the masterplan arrives.
- Talent helix photo comes from the PDF (original not in the repo).
