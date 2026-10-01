# Designer 1 — design log

Owned by the DESIGNER 1 chat. Record design directions, tokens (colours, type, spacing) and decisions here.

## Designs

### v1 — "Clear Field" (rebuilt 2026-10-01 from the full brand book)
- Live: `/designer1/v1` (Home), `/designer1/v1/about` (About IO, client copy verbatim), `/designer1/v1/system` (design system).
- Code: `app/designer1/v1/` — `layout.tsx`, `v1.module.css` (all tokens + components, scoped under `.root`), `_components/` (Brand, Header, Footer, Motion, Interactive, Sections), `_lib/` (site.ts = sitemap nav, copy.ts = verbatim `content/about.md`, photo.ts).
- Source re-read: all 35 pages of `docs/source/Innovation_Oasis_Guidelines.pdf`, plus `docs/brand.md`, `docs/sitemap.md`, `content/about.md`.

**Brand-book devices used (with page refs)**
- Light, bright web layout after the homepage mock (p.4, p.27): IO mark as supergraphic top-right, a white title panel whose thin IO-blue rule drops from the left edge of the "i" stem and runs along the panel bottom, photo underneath, two overlapping cards (charcoal + IO-blue tint).
- "io" highlighted inside words, as in the wordmark and the "explorat**io**n" mock: hero word cycles exploration / validation / collaboration / implementation / innovation.
- Letterhead rule into the mark (p.15): quote band ends in the IO mark.
- Back cover (p.31): footer with IO mark top-right, vertical IO-blue rule dropping from the "i", wordmark + bilingual address set against it.
- Wayfinding signage (p.25–26): cards with 4px IO-blue top bar and light numerals (Centres, principles, team).
- Deep-green leaf chapter pages (p.2, p.4, p.14): "Why Here? The Arid Advantage" on a dark-green, luminosity-blended leaf photo.
- Helix rungs of the mark: "We bring together" ecosystem map, 8 items wired into the mark with dot-ended lines; timeline dots.
- Header = logo format three (p.9): wordmark + endorsement left, small mark right. Tagline EN + AR in the utility bar.

**Logo files**
- Official `/brand/*.svg` used unchanged. `/designer1/brand/io-wordmark*.svg` are **cropped views** of `/brand/io-lockup*.svg` (identical paths, only the viewBox changed) to get the wordmark (+ endorsement) for format three and the footer. Replace with client master files when they arrive.

**Tokens**
| Token | Value | Use |
|---|---|---|
| `--io` | `#3CA7D2` | large type accents, rules, marks, dots |
| `--io-ink` | `#1A6F96` | small blue text, links, kickers, primary buttons (AA) |
| `--charcoal` | `#595453` | text, dark panels (mission, journey, cards) |
| `--grey` | `#7F8284` | secondary text, hero word |
| `--light` | `#F1F1F1` | light sections |
| dark green `#014220`–`#015825` | accent | leaf chapter only |
| `--green` `--lime` `--orange` `--pink` | accent | reserved for tags/charts |

- Type: Readex Pro (latin + arabic, 300–600) as 29LT Bukra stand-in, one variable `--font-d1-brand` → `--f-brand`. Display Light 300; hero word 500; emphasis 500.
- Images: square corners (architectural, like the brand book). Buttons: pills.
- Motion: reveal-on-scroll, cycling hero word, scroll-lit belief statement, counters, pillar list with crossfading photo, timeline scroller. All off under `prefers-reduced-motion`.
- Nav: six sitemap labels exactly, each with a dropdown of its sitemap sub-pages; mobile = full-screen charcoal menu with accordions.

**About variation D** (`/designer1/v1/about-d`, 2026-10-01) — copy of C (C kept for comparison) with the **3D model matched to the aerial photography** (`assets/photos/Archive` 163505 / 163545 / 163812 / 164012):
- Entrance: low white main building (taller central atrium block = "Collaboration spaces", two lab wings = "Laboratories"), entrance canopy + blue IO sign panel, forecourt with umbrella canopies (perforated), palm-lined drive, gatehouse, totem, roundabout with green island, palm avenue along the main road.
- Fields: teal windbreak-fenced plot blocks (row crops), white shade-net frame grid, IO Blue irrigation. Greenhouse: ridged multi-span block (10 spans) with crops inside. Service area: two white domes, a glass geodesic dome, round tanks, long service building. Al Foah Farm palm grid across the east road.
- Tour order follows a walk through the site (`about-d/tour-d.ts`): parcel → collaboration spaces → laboratories → controlled-environment facilities → field-testing areas → greenhouses → masterplan.
- Honest caveat on the page: "Based on aerial photography · layout indicative". Forms follow the photos; positions are a best guess until the masterplan arrives. Open question for client: whether the large greenhouse blocks in the wide aerial (164012) belong to IO or to Al Foah Farm.

**About variation C — "corporate premium"** (`/designer1/v1/about-c`, 2026-10-01) — answer to feedback "logo-only hero is bad, headings too big, make it Awwwards / akercompanies.com level".
- Hero = full-bleed photo slideshow (4 HQ shots, crossfade + slow push-in, progress bars per slide). No logo-as-hero; the logo stays in the header only.
- **Type scale fixed** (why B looked unprofessional: display at ~10.5rem/0.93 line-height with tight tracking reads as a poster, not a corporate site). C caps display at 4.5rem, section heads 2.9rem, statements 2.1rem, weight 400/300, line-height 1.04–1.3, tracking −0.015 to −0.028em. Hierarchy now comes from grid, whitespace and photography.
- **3D site model** (`about-c/SiteModel.tsx`, three.js): illustrative 34-ha parcel with IO-blue boundary, laboratories + canopies, controlled-environment facilities, greenhouse tunnels, trial plots, collaboration pavilion, Al Foah Farm palm grid across the road. Pinned section; scroll flies the camera through 7 stops whose captions are verbatim PDF phrases (Late 2021 + 2022 journey entries; facility names from "Building the Blueprint"). Buildings rise on entry, mouse parallax, labels via CSS2DRenderer. Marked "Illustrative site model · not to scale" — needs client masterplan to make it accurate. Falls back to the aerial photo if WebGL fails. Renders only while visible.
- Smooth stickies: story uses **CSS sticky** (no JS pin jitter) with a scroll-progress rule; Why Here = sticky photo half + scrolling text; journey = GSAP pin with scrub 0.8 + anticipatePin; 3D model re-sorts/refreshes ScrollTrigger after it mounts so pins below stay aligned.
- Bento photo gallery (7 HQ shots), 12-column grid throughout, 1728px container, stats row (2020 / 34 / 2024 / 2030, labels verbatim from PDF).
- New npm dep: `three` (+ `@types/three`).
- **Round 2 (self-review fixes):** 3D rebuilt as an architect's maquette — matte white model, IO Blue only on the active place, low golden sun that climbs to midday as you scroll (dawn → heat), GTAO ambient occlusion (desktop), desert terrain with contour lines + low dunes, perforated entrance canopies casting dappled shadows, window bands, crops inside translucent greenhouses, row-textured trial plots, animated IO Blue irrigation lines, a drone over the plots, palm fronds at Al Foah Farm, boundary that draws itself. Camera follows one centripetal Catmull-Rom path through all stops, with slow drift + mouse parallax; projection offset keeps the model clear of the card; portrait screens pull back.
- Tour card (`about-c/tour.ts`): real photo per place, step count, description, fact chips, "Related" links into the sitemap (e.g. Laboratories → Analytical Services), Virtual Tour CTA at the masterplan stop; clickable 3D labels + compact place bar jump via Lenis. **Facility descriptions are DRAFT copy** (paraphrase of PDF, no new facts) — flagged in BRIEF for client copy.
- Brand signature restored on C: IO Blue hairline under each section label draws in; lowercase "implementat**io**n" word device drifting behind the pull quote; "Why Here?" as a deep-green chapter with macro-leaf photo; cropped IO mark at the close; Arabic tagline in the hero.
- **Curtain sticky** (replaces GSAP pins on the 3D tour + journey): sticky panel wrapped in `.curtain` (height = travel + 3 × panel height, −1 panel margin top/bottom, `z-index: 0`); neighbouring sections sit on `z-index: 1` with solid backgrounds, so the section above lifts off a panel that's already fixed and the section below slides over it (soft shadow edges). Scroll progress runs only while the panel is fully uncovered. Native `position: sticky` → no pin jump. Journey uses it on ≥1000×700 only (vertical list elsewhere).

**About variation B — "branded"** (`/designer1/v1/about-b`, `about-b/AboutB.tsx` + `about-b.module.css`, 2026-10-01)
- Same verbatim PDF copy and order as About A (shared `_lib/copy.ts`).
- Brand-forward: IO Blue fields (hero, "34 hectares" panel, Why Here split, finale) with the **single-colour white mark** (`public/designer1/brand/io-mark-white-on-blue.svg` = `/brand/io-mark.svg` with fills swapped: shapes white, helix shows the IO Blue ground — guidelines p.7). Letterhead rules (label → line → small mark) open every section and draw in on scroll; the hero rule ends exactly at the "i" stem. Principles as wayfinding signs (blue top bar, turn IO Blue on hover). Team hover = IO Blue veil with the white mark.
- Layout: **1728px container** for this page incl. nav + footer (`_components/Shell.tsx` sets `data-wide` → `--max: 1728px`); several sections full-bleed (expanding canopy photo, tomato band, gallery, mission, Why Here split, finale).
- Photography: new **image showcase** (3 rows drifting in opposite directions with scroll), parallax inside every framed photo, canopy photo expands from a framed window to full-bleed (pinned).
- Images: hero-grade shots use **3200px copies** in `public/designer1/hq/<original folder>/<original filename>` made from the `assets/photos` originals (sharp, q84 mozjpeg). Originals untouched. The Archive aerials are 1919×1079 video stills, so they're only used at smaller sizes.
- Header over the blue hero uses the white wordmark + white-on-blue mark.

**About page (rebuilt 2026-10-01, "immersive" pass)** — `about/AboutClient.tsx` + `about/about.module.css`.
- Copy: every string checked programmatically against `docs/source/Innovation_Oasis_About_Page_Content_v2.docx.pdf` (all match, typographic apostrophes as in PDF). Hero statement = "Accelerating the Future of Food Security" (H1), "The future of food security is being built in the desert." as sub, paragraphs follow. Section order = PDF. No invented headlines; no role titles (not in PDF).
- Motion: Lenis smooth scroll (`_components/SmoothScroll.tsx`, all v1 routes) + GSAP ScrollTrigger/SplitText. Line-mask headline reveals, curtain image reveals, scroll-lit statements, parallax/zoom full-bleed images, pinned "innovation → implementation" moment, pinned "Why Here?" with pressures lighting up, principles as horizontal scroll, journey with sticky year + image, counters. Pins only on ≥1000px wide and ≥700px tall; everything off under reduced motion.
- Palette: no dark-grey panels anymore (user preference): light grey `#F1F1F1` base with white sections; image sections use a neutral photo shade only. Mobile menu now light. Home mission band + hero card switched to light too.
- Header: transparent with reversed logo over the About hero, solid after scrolling.
- Open: "Juntos timeline" reference link (journey format).

**Copy:** `content/about.md` verbatim (Home hero, belief, story, arid advantage, ecosystem, quote, mission; full About page). Names from `docs/sitemap.md`.
**Still placeholder:** category blurbs, centre one-liners, Agricultural Challenges paragraph, resource items, LinkedIn URL, team photos/roles, CEO portrait. Sub-page links 404 until built.

**Notes**
- The Feb 2026 MarCom screenshots have a U+202F (narrow no-break space) before "AM" in their filenames; `_lib/photo.ts` handles it.

## Next
- Section Hub template (5 categories), then Research Area detail, Contact, Enquiry form.
