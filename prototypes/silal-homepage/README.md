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

## Concept 3, revision 2 (2026-10-13, client feedback)
- **Impact dial:** the fixed centre line (needle) is gone. The ruler now travels with the scroll for the whole scene (`TRAVEL`, bound to the timeline, painted every frame by a ticker in "details"), every 5th tick is a major one, the ticks passing the active column swell (fisheye) and the swell grows a little with scroll speed. Only ticks near the swell are touched per frame. `#metrics` is `visibility:hidden` outside its scene (this also removed stray tick lines on phones).
- **Dock overlap bug fixed:** a stop's list/thumbnail (`.dt`) is `visibility:hidden` except while its own card is open, and the swap is strictly ordered: old header rises out while the card collapses, old stop hidden, then the next header rolls in once the card is back to its small height (`nextStop`).
- **Hairlines:** wheel top line, the bar next to the active item, the card separators and the footer rules now use `--hl` (= one device pixel inside the scaled frame, so they never drop out like the old 0.5 px ones) and fade at both ends; the active bar is a thin gradient line.
- **Magnet:** buttons follow the pointer a little (`magnet()`); over a card thumbnail the whole image area attracts the button, the picture zooms and drifts against the pointer. Fixed button widths removed (they clipped the label roll).
- **Footer:** big rows with letter-by-letter roll, a fill that sweeps in, index + arrow circle, siblings dim, a photo preview that follows the pointer (tilts with speed), pointer spotlight, column links with drawn underline, live Al Ain clock (Asia/Dubai), "Back to top" magnet pill, staggered clip reveal.


## 2026-10-13 — /V2 = homepage + unified shell (client feedback)
- `/V2` now serves this homepage (rewrite in `next.config.ts`); `/V2/about` and `/V2/resources/news` are the inner pages with the same capsule (logo pill + menu), overlay menu and black footer (`app/V2/_shell/`). `/homepage-concept-1` and `/homepage-concept-1/v2` still work.
- The three centre cards (Agri Robotics & AI, Smart Growing Systems, Crop Resilience) open full screen on click (`#detail`, `.dp` panes; Esc / Close, arrows or scroll move between them, scrolling past the last one carries on to the venture section). The scroll itself skips the old drone scene.
- Venture tiles and talent rows are links (inert `#` until the inner pages exist). Centre 2 and 3 copy is placeholder (their card captions).

## Concept 3, revision 3 (2026-10-13, client feedback)
- **Wheel:** a faint full-height rail (`.rail`, device-pixel hairline, fading ends) runs behind the brighter active bar.
- **Preloader "Desert → Discovery":** a sun climbs out from behind a horizon while the horizon line draws and the count runs (DESERT dims, DISCOVERY lights up). At 100 % the sun ignites and turns into a circular window onto the oasis (`mask` hole, `--r` tweened) that opens to the full hero; the hero text then rises in. Progress = fonts + first photos. Skipped with `?preload=0` / `?t=`.
- **Footer:** the cursor spotlight is gone (row fill, letter roll, arrow circle and the pointer-following photo stay).
- **Logo:** no hover animation; only the dots button reacts (round highlight + dot ripple).
- **Glitch fix (hero text stuck / pill gone):** the entrance animation and the scroll timeline wrote to the same elements, so a quick scroll or menu jump during the first ~2.5 s let the entrance overwrite the scroll state (hero text stayed over later sections). They now own different elements: entrance = `.in2`, `#heroB`, `#pill`; scroll = `.in`, `.btn`, `#pillw`. The web-font stylesheet is no longer render-blocking, `fonts.ready` is raced against 2.5 s, scroll restoration is manual and a 14 s failsafe always removes the preloader (before, a hanging font request could leave the whole UI hidden). Checked with a history test: 21 timeline positions, fresh load vs. random hops, no stale state.
- **Dial:** the ruler is bound to the active number again (slides left/right between numbers, 3 subtle dots stop exactly under their copy and light up when active). The swell is short and soft (`SPAN` 54, `PEAK` 30), ticks are thinner and dimmer.

## Concept 3, revision 4 (2026-10-13, client feedback)
- **Wheel:** the horizontal hairline at the top is removed (the faint vertical rail + active bar stay).
- **Preloader "The oasis rises"** (replaces the sun): the official IO mark (`#ioMarkW`, same artwork as the brand SVG) climbs out from behind a horizon while the line draws; the official wordmark + "Part of Silal" endorsement (`media/brand/io-wordmark-endorsed-reversed.svg`, copy of the Concept 1 file, rendered white) opens beneath it; DESERT dims / DISCOVERY lights up. At 100 % the mark ignites, its circle becomes a window onto the oasis (mask hole centred on the circle, `--r` tweened) and opens to the hero while the "i" fades away.
- **Impact numbers:** odometer reels (digits 0-9 twice, the last digit turns an extra revolution). 30% rolls in with the section; 04 and 10+ roll up while they travel into focus (`setOdo`, driven by the dial position `m`).
- **Footer:** the Al Ain clock text is removed (bottom bar = "Innovation Oasis — Silal, Al Ain, UAE", Back to top, "Part of Silal").

## Concept 3, revision 5 (2026-10-13, client feedback)
- **Wheel tab hugs its rows:** at the first and last stop only two rows exist, so the tab wraps them (`--wt` = space given up at the top, `--wb` at the bottom, one row pitch = 37 px, set in `setWheel(a)`); it grows back to the normal three-row tab as the wheel moves on. The card below follows the tab's bottom edge (`--wb`). The tab clips its content (`.wi` wrapper shifts by `--wt`), the faint rail stays inside the visible tab.
- **Preloader (from the client's reference frames):** a ring of 40 ticks lights up clockwise around the IO mark, which fills from the bottom with the real load progress; the % below is an odometer; a small fade bar at the bottom grows with the percentage. White while loading, IO blue (`#3CA7D2`) at 100 % (`.prl.done`; the mark symbol `#ioMarkW` now uses `currentColor`). Exit: the ring flies outwards, the circle of the mark becomes a window onto the hero and opens.

## Concept 3 / V1 — client footer (2026-10-13)
Separate page `/homepage-concept-3/V1` (`public/homepage-concept-3/v1/index.html`, rewrite in `next.config.ts`). It is a full copy of `/homepage-concept-3` (shares `media/img/`) whose last scene is the client's footer design instead of the big-row footer; `/homepage-concept-3` itself is untouched.
- Footer: "Stay close to the work" + email pill (front-end only: validates, shake + hint on error, check + thank-you on success), Explore / Resources / Connect link columns (placeholder `#` links, made inert by a click handler), the official IO mark (`/brand/io-mark.svg`) top right with a thin IO-blue line running down to the divider, the official wordmark + "Part of Silal" endorsement (`media/brand/io-wordmark-endorsed.svg`, an unmodified crop of `/brand/io-lockup.svg`, the same way the reversed crop was made), io-silal.ae, Arabic + English address, © line and Terms of Use / Privacy. Same scroll entrance as before (divider and blue line draw, text wipes in).
- Colours: IO blue `#3CA7D2` for headings and the line, the button uses a darker tint of the same hue (`#2B8DB5`).
- Phone layout: brand row on top, newsletter, Explore | Resources + Connect, bottom bar.
- V1 fix (same day): the blue line is anchored to the mark (right-aligned like the mark itself) so it stays beside the "i" on wide screens. The tour → footer scroll is short (beats: tour card goes at 36.55, footer complete at ~37.3, `END` 37.55) and `snapFooter()` finishes the change after one gesture: if the scroll settles inside the transition it completes in the direction of travel (or returns to the tour card).
- V1 footer is now a **section, not scrubbed scroll** (2026-10-13): the story timeline ends at the tour card. When the scroll enters the footer zone (`ZIN` 36.62) a timed sequence `ftl` plays (tour card, ring and title are pushed up and away first, then the pill leaves, the divider and blue line draw and the text wipes in, ~2 s), and the page scrolls itself to the bottom; scrolling back past `ZOUT` (36.45) reverses it. A jump (menu "Contact", deep link) seeks straight to the end state instead of animating. Entrance and exit use different properties/elements than the scrubbed timeline (`yPercent` on the tour card, `y` on ring/title/pill) so they can never fight; link transforms are cleared after the reveal so the CSS hover shifts work. This also fixed footer text appearing on top of the leaving tour card.
- V1 footer, gesture-driven (2026-10-13): the CTA card and the footer are two resting places (`CTA_T` 36.3, `END` 37.0). From the card, one downward gesture (wheel / swipe / key) plays the footer and scrolls to the bottom (Lenis `lock`); one upward gesture from the footer plays it backwards and settles on the card, so it can no longer fall through to the previous section. Wheel momentum is swallowed while it moves (`busy`). Staying on the card never triggers anything; position-based thresholds (`ZIN`/`ZOUT`) only catch scrollbar drags and deep links. The footer is `visibility:hidden` until the card has left (a clipped input border used to show as a stray line on the card).

## Concept 3 — UX + footer pass, now the main link (2026-10-13)
Built as `/homepage-concept-3/V3` (copy of V1), then published to the main `/homepage-concept-3` (`public/homepage-concept-3/index.html`) for client submission; the `/homepage-concept-3/V3` link and folder were removed. `/V1` is untouched; the old revision 5 main page is in git history. Note: `/V3` alone is Concept 1's page.
- **Left navigation**: the old tab (list that shifted + card that resized and moved) is now a fixed-size "Journey" panel: 4 rows with a vertical rail, a fill line and a `01 / 04` counter; only weight/colour/dot change per stop, nothing moves. The card below has a fixed size and position; its text just cross-slides. No layout shift.
- **Resilient future numbers**: 30 % / 04 / 10+ now ease to the new value with an inertial follower (`mTarget`/`mDisp`, 170 ms time constant) and long `sine.inOut` steps (1.8 s); downstream beats were retimed (+1.5 s: `imp` 29.4, `imp2` 32.0, `imp3` 34.3, `tour` 37.4, `END` 38.5, `CTA_T` 37.8).
- **Curved masks**: curtain edges (bottom-up `slideY`, side `slideX`, tour curtain) are arcs (`border-radius` tween via `curve()`/`arcCss()`), flattening as they land; soft shadow along the edge.
- **Footer**: editorial layout: big statement + Arabic tagline, hairline, 4 columns (newsletter, Explore, Resources + Connect, endorsed IO wordmark + address), IO-mark supergraphic at 10 %, legal bar.
- Tested headless (Chromium, local build): no console errors, jump vs. fresh-load state diff only sub-pixel, gesture CTA ⇄ footer works, mobile 390×844 checked. Not tested: real touch devices, live URL (sandbox cannot reach it).
