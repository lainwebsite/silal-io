# Silal IO – homepage prototype, Concept 1 "Built by the Desert"

Live at `/homepage-concept-1/v2` (team link, `noindex`; not linked from anywhere on the site).
A standalone scroll-driven HTML page (GSAP + Lenis from CDN) built from the Figma file "Silal IO – LAIN INTERNAL" (`85J2hDmYtlUNY2GbDkFxZi`, page "Home Page", Concept 1).

- Served file: `public/homepage-concept-1/v2/index.html`, images in `.../media/img/`, hero video `.../media/intro-light.mp4`.
  Folder is `media/`, not `assets/`, because `.vercelignore` excludes every folder named `assets/`.
  All media paths in the page are absolute (`/homepage-concept-1/v2/media/...`) because the URL has no trailing slash.
- The bare URL works through one rewrite in `next.config.ts`.
- Figma spec and measurements: `DESIGN-SPEC.md` (this folder; not served).
- Run locally: `npm install && npm run dev`, open http://localhost:3000/homepage-concept-1/v2

## State (2026-10-12)
- Client revisions applied: nav alignment; section 02 and "What we're growing" animate on hover, not scroll; footer turns black instead of scrolling; "We come to you" drone image goes full screen on scroll; 06.01/06.02/07.01 are one zoom-out image.
- Hero video = "homepage 1 video new" (19.6 s), scrubbed by scroll and re-timed to the page timeline with keyframes (`VID_KEYS` in `index.html`, section "01 · INTRODUCTION"). Mapping also in `DESIGN-SPEC.md`.
- Not tested: mobile, real mouse-wheel scrolling with Lenis.
- Raw Figma exports (65 MB) and reference frames are not in git; re-export from Figma if needed.
- Edit the files in this repo from now on; the original local prototype folder is only a copy.

## Continuing in another Claude chat / on another Mac
Clone the repo, tell the chat to read this README and `DESIGN-SPEC.md` first.

## 2026-10-12 round 5
- Hero video re-encoded for scrubbing: black bars cropped (1192x672), motion-interpolated to 60 fps, a keyframe every 4 frames (`media/intro-light.mp4`, ~16 MB). The page eases the shown time toward the scroll target and only seeks when the previous seek has landed.
- Dead scroll removed with `CUTS` in `index.html`; lab card, trio and venture tiles are hover, with short holds.
- "Where innovation takes root." is one element that scrolls up and docks into the header slot. The drone is one continuous move to full screen (radius kept; corners leave the screen). Left nav stays through "Find your door" and fades with the footer.

## 2026-10-12 round 6
- Trio → drone is a shared-element move: card 1's own box opens to full screen. Venture / engagement photos wipe in like a curtain. Venture + engagement titles dock into the header like "Where innovation takes root.".
- Glass blocks never sit under an element with opacity < 1 (that switches `backdrop-filter` off while it fades); photo zoom/pan uses a transform instead of re-painting `background-position`.
- Bottom-right ladder = chapter map: click to jump, hover for the name, the active line fills with progress. Menu overlay lives inside `.chrome` (X is above it) and opens as a circular reveal from the button.

## 2026-10-12 round 7
- Preloader: the official IO mark (paths copied unchanged from `/brand/io-mark.svg`, exact colours) fills from the bottom with the real load progress (fonts + hero video buffer + first photos), counter rolls 0 → 100, wordmark from the brand lockup. Exit: mark ignites, the cover lifts like a curtain with a curved lip, the hero video scales into place. Skipped with `?t=` or `?preload=0` (QA) and with reduced motion. Page is built underneath after the entrance has settled.
- Location numbers roll up like an odometer. Venture / engagement photos: crop moves are back to `background-position` (the transform version produced giant layers that could render blank on a real GPU); the curtain is now a pure transform; glass tiles/cards wait until the photo has stopped moving.

## 2026-10-12 round 8 (weight + smoothness audit)
- Hero video `media/intro-light.mp4`: 60 fps, 1192x672, keyframe every 4 frames, **6 MB** (was 16 MB), visually identical.
- Glow layers use small pre-blurred copies (`media/img/g_<key>.jpg`, 4–9 KB) instead of a live 78 px CSS blur on 24 %-oversized layers.
- No filter tweens, no scale on backdrop-filter elements, no live blur where it cannot be seen (talent list, 3 trio faces, menu); layers are promoted only while their scene is near; the faded video surface is released; photos are decoded in idle time; Lenis drives the scroll directly (no second 0.7 s lag).
- Headless scroll benchmark (software raster, 900 frames through the whole story): frames over 33 ms 51 → ~20, worst frame 217 ms → ~67 ms.
- Preloader mark/wordmark are white (official vector, same artwork as the logo beside the menu button).

## 2026-10-13 fix: venture photo went black after scrolling back
Cause: the curtain tween had `opacity` only in its `from` values. GSAP applies such values once; after the playhead had gone back across that point and forward again the photo's opacity stayed 0 (black scene). Rule for this file: every property in a `from` object must also be in its `to` object. Verified with a history test (fresh load vs forward / backward / random hops at 31 points of the story: 0 differences). Also: `chrome()` now runs from the timeline's own update so the nav and hover windows are right when a smoothed scrub settles.

---

# Concept 3 "From Desert to Discovery" (added 2026-10-13)

Live at `/homepage-concept-3` (team link, `noindex`, not linked anywhere). Same Figma file (`85J2hDmYtlUNY2GbDkFxZi`, page "Home Page", Concept 3 "Design" column, frames `131:*`).
- Served file: `public/homepage-concept-3/index.html` (GSAP + Lenis from CDN), 15 photos in `public/homepage-concept-3/media/img/` (`media/`, not `assets/`: `.vercelignore`). Media paths are absolute.
- Bare URL works through one rewrite in `next.config.ts`.
- Spec + build notes: `DESIGN-SPEC-CONCEPT-3.md` (frame → scene table, tokens, code map, interpretations). Playbook: `ADD-A-CONCEPT.md`.
- Imported from the local prototype folder as-is; only changes: `assets/img/` → `/homepage-concept-3/media/img/`, `noindex` meta, `.btn.rise{display:flex}` (hero button label was stuck at the top of the pill). Behaviour untouched.
- QA flags (from the spec): `?t=<beat or number>` jumps the timeline, `?lenis=0` turns off smooth scroll, `window.__story.jump()`.
- Reference frame exports (`ref/c3ref_01..15.jpg`, 11 MB) are not in git; re-export from Figma if needed.
- Not tested here: mobile, real wheel scrolling on hardware.

## Concept 3, revision 1 (2026-10-13, client feedback)
- **Scene changes have no cross-fades any more.** Layers are `.bg` (window) > `.cn` (how the layer arrives) > `.im` (in-scene camera). Arrivals: *iris* (clip-path circle from the dive point: intro→map, map→greenhouses, and the walk inside each stop), *curtain-up* with a rounded lip (hero→intro, part→impact, impact→tour), *curtain-side* (travel between stops). Old layers are hidden with a `visibility` tween after they are covered. Helpers `iris / slideY / slideX / vis` in `build()`.
- Same-context text never fades: "Enter the Oasis." is still one element that FLIPs into the caption. New headings and paragraphs rise out of a mask (`.mk > .in`), buttons wipe in with clip-path, the card list is revealed by the card growing, the card text rolls like the wheel, footer lines wipe up. The tour card is pushed up and out while the footer rises (no fade).
- **Menu:** dot grid → X (middle dots merge, corners fly out, whole icon turns), hover ripple through the dots, pulse ring on click, magnetic button, panel reveals with a clip, rows slide up from masks, one shared highlight follows the pointer, active chapter dot. Esc / click outside closes, Lenis is stopped while it is open. Panel now lives inside `.frame` so it scales with the pill.
- **Impact dial:** numbers and labels are centred on their column and the needle sits exactly on the active number's centre (`NX = 560`). Ticks are on a fixed 12 px grid (31 per step) so one tick is always under the needle, and they swell/brighten with distance from it (fisheye, `SPAN`). The dial opens from the needle outwards.
- **Smooth scroll:** Lenis drives the scroll directly (`scrub: true`, no second lag), no filter tweens, layers only visible while on screen, photos decoded in idle time.
- **Polish:** official IO mark (`#logo`) in the pill instead of the "iO" text; preloader (mark fills with real load progress, curtain exit, hero settles); button label roll on hover; pin ping rings; footer dims siblings on hover; tour card hover zoom; focus rings; theme-color + favicon.
- QA: `?preload=0` skips the preloader, `?t=<beat|number>` jumps (no entrance), `?lenis=0` turns smooth scroll off.

