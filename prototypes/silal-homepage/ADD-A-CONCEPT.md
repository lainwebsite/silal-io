# Adding a homepage concept (playbook, from how Concept 1 was done)

Written 2026-10-13 from the repo state. The local "Clock chat migration" thread is NOT readable from the cloud session; anything only said in that chat must be pasted into this repo (see "Still missing" at the bottom).

## How Concept 1 is wired (copy this pattern for Concept 3)
| What | Where |
|---|---|
| Page (single static HTML, GSAP + Lenis from CDN) | `public/homepage-concept-1/v2/index.html` |
| Images | `public/homepage-concept-1/v2/media/img/` |
| Video | `public/homepage-concept-1/v2/media/intro-light.mp4` (6 MB) |
| Brand SVG | `public/homepage-concept-1/v2/media/brand/` |
| Clean URL | rewrites in `next.config.ts`: `/homepage-concept-1` and `/homepage-concept-1/v2` → `.../v2/index.html` |
| Notes / spec | `prototypes/silal-homepage/README.md`, `DESIGN-SPEC.md` (not served) |
| Link list | `docs/links.md`, section "Homepage prototype (LAIN, static)" |
| Decision | `docs/BRIEF.md` decisions log (2026-10-12 entry) |

## Rules that bit Concept 1 (follow them)
1. Media folder must be named `media/`, never `assets/`: `.vercelignore` drops every `assets/` folder from deploys.
2. All media paths inside the HTML are absolute (`/homepage-concept-3/media/...`). The URL has no trailing slash, so relative paths break.
3. `<meta name="robots" content="noindex, nofollow">` in the head. Team link only: not linked from `/`, no index page. Add the link to `docs/links.md` only.
4. Touches no designer folder, no `/V*`, no root `app/` files. Only: `public/homepage-concept-3/**`, one rewrite pair in `next.config.ts`, docs.
5. `npm run build` must pass before pushing.
6. Brand rules (`docs/brand.md`) are binding. Concept 1 uses the official IO mark / wordmark SVGs unchanged (`/brand/io-mark.svg`) and the Inter stand-in per the LAIN Figma.
7. Keep original files; web copies only in `public/`. Big raw exports stay out of git (Concept 1 raw Figma exports were 65 MB, not committed).

## Performance lessons from Concept 1 (apply to Concept 3 if it is scroll-driven)
- Scrubbed hero video: re-encode with a keyframe every 4 frames, 60 fps, black bars cropped, ~6 MB. Seek only after the previous seek landed.
- No live CSS blurs on oversized layers: use small pre-blurred JPG copies (`g_<key>.jpg`, 4–9 KB).
- No filter tweens, no scale on `backdrop-filter` elements; glass blocks never under an element with opacity < 1.
- Promote GPU layers only while their scene is near. Decode photos in idle time. Let Lenis drive scroll directly.
- Preloader: real load progress, official mark, skip with `?preload=0` for QA.

## Steps to add Concept 3 once the files are here
1. Put the local file(s) in `public/homepage-concept-3/` (`index.html` + `media/`). Rewrite any relative media paths to `/homepage-concept-3/media/...`. Add the noindex meta.
2. `next.config.ts`: add `{ source: "/homepage-concept-3", destination: "/homepage-concept-3/index.html" }` to the rewrites.
3. `docs/links.md`: new "Concept 3" entry. `docs/BRIEF.md`: decisions-log line. `prototypes/silal-homepage/README.md`: Concept 3 state section.
4. `npm run build`, run locally, check the preloader / hero / scroll end to end, then push.

## Still missing (not in the repo)
- The Concept 3 file(s) from the local machine.
- Anything from the local "Clock chat migration" thread: design intent, client feedback, Figma node ids, decisions, open bugs. Paste it (or export it to a `.md` and drop it in this folder) so it lives here.
