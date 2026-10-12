# Silal IO – homepage prototype, Concept 1 "Built by the Desert"

Live at `/homepage-concept-1/v2` (team link, `noindex`; not linked from anywhere on the site).
A standalone scroll-driven HTML page (GSAP + Lenis from CDN) built from the Figma file "Silal IO – LAIN INTERNAL" (`85J2hDmYtlUNY2GbDkFxZi`, page "Home Page", Concept 1).

- Served file: `public/homepage-concept-1/v2/index.html`, images in `.../media/img/`, hero video `.../media/intro-smooth.mp4`.
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
- Hero video re-encoded for scrubbing: black bars cropped (1192x672), motion-interpolated to 60 fps, a keyframe every 4 frames (`media/intro-smooth.mp4`, ~16 MB). The page eases the shown time toward the scroll target and only seeks when the previous seek has landed.
- Dead scroll removed with `CUTS` in `index.html`; lab card, trio and venture tiles are hover, with short holds.
- "Where innovation takes root." is one element that scrolls up and docks into the header slot. The drone is one continuous move to full screen (radius kept; corners leave the screen). Left nav stays through "Find your door" and fades with the footer.

## 2026-10-12 round 6
- Trio → drone is a shared-element move: card 1's own box opens to full screen. Venture / engagement photos wipe in like a curtain. Venture + engagement titles dock into the header like "Where innovation takes root.".
- Glass blocks never sit under an element with opacity < 1 (that switches `backdrop-filter` off while it fades); photo zoom/pan uses a transform instead of re-painting `background-position`.
- Bottom-right ladder = chapter map: click to jump, hover for the name, the active line fills with progress. Menu overlay lives inside `.chrome` (X is above it) and opens as a circular reveal from the button.

## 2026-10-12 round 7
- Preloader: the official IO mark (paths copied unchanged from `/brand/io-mark.svg`, exact colours) fills from the bottom with the real load progress (fonts + hero video buffer + first photos), counter rolls 0 → 100, wordmark from the brand lockup. Exit: mark ignites, the cover lifts like a curtain with a curved lip, the hero video scales into place. Skipped with `?t=` or `?preload=0` (QA) and with reduced motion. Page is built underneath after the entrance has settled.
- Location numbers roll up like an odometer. Venture / engagement photos: crop moves are back to `background-position` (the transform version produced giant layers that could render blank on a real GPU); the curtain is now a pure transform; glass tiles/cards wait until the photo has stopped moving.
