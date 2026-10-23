# New homepage (2026-10-23)

Static page `public/new-homepage/index.html`. Client link: `/New-Homepage/V1` (also `/new-homepage`, team link). Rewrites in `next.config.ts`.

Sections: header · hero (4 wipe slides) · intro + stats (odometer) · The site (3D, scroll tour) · The arid world (dot map, scroll-lit; same scene as `app/390b3d94a5/v6/about/_c/WhyHere.tsx`) · Why Here · Principles · Helix (client's `helix.svg`, one rung lit per step, five cards) · Our Journey · Latest news · footer.

Rules: Readex Pro only (weights 300/400/500), one label style, one easing set. Nothing fades: no opacity transitions or keyframes. Motion = masks, wipes, drawn rules, moving shapes. Reduced motion shows everything at rest.

## Source and rebuild
`v2/` holds the sources (CSS, script, markup parts, 3D bundle, `helix.svg`). `cd prototypes/new-homepage/v2 && python3 build.py` writes `out.html`, identical to `public/new-homepage/index.html` (copy it over to publish a change). `python3 build.py --embed` inlines the images (single-file preview).

## Open items
- 3D site model: the floor highlight under the active building still tweens opacity/colour inside the WebGL scene (bundle is minified; source was `site3d.ts` on branch `23-oct/new-homepage`).
- Section numbers are 01–03 (the PDF still shows 03/06/07).
- Intro copy: client text in `content/about.md` says "will define agriculture for much of the world tomorrow".
- `brand/io-mark-white-on-blue.svg` is referenced by the shell CSS for `data-blue="true"` but the file does not exist; that state is never used.
