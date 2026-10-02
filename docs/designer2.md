# Designer 2 — design log

Owned by the DESIGNER 2 chat. Record design directions, tokens (colours, type, spacing) and decisions here.

## Designs

### v1 — "Proving Ground" (2026-10-01)
- Live: `/designer2/v1` (Home), `/designer2/v1/system` (design system). Index: `/designer2`.
- Code: `app/designer2/v1/`: `layout.tsx`, `v1.module.css` (all tokens + components, scoped under `.root`), `_components/` (Brand, Header, Footer, HereAnywhere, Reveal), `_lib/` (`site.ts` = sitemap nav, `photo.ts` = shared web-copy paths).
- Sources: `docs/brand.md`, `docs/sitemap.md`, `content/about.md`, `content/team.md`, guidelines PDF (all 35 pages viewed).

**Idea.** The desert is the world's testbed. Where Designer 1 is light and close to the brand-book homepage mock, v1 here is cinematic and charcoal-led: full-bleed aerial of the trial fields, big Light lowercase type, and one story told down the page: *conditions → belief → "if it works here, it can work anywhere" → five platforms → one ecosystem → mission → test it here.*

**Home sections**
1. Hero (dark): aerial `Archive/…164012`, charcoal shade, IO mark as cropped supergraphic bleeding off the end edge, client hero line, "Test conditions" strip (Heat, Water scarcity, Salinity, Resource constraints, Operational complexity) on a thin IO-blue rule.
2. Belief statement (white): "today / tomorrow" in IO blue; facts row 34 ha · 2021 · 2024 (all from `content/about.md`).
3. **Here → anywhere** (light grey, sticky, scroll-driven): rings spread from one IO-blue dot (the "o" of the mark) as "If it works here," hands over to "it can work anywhere."
4. Five platforms as **expanding panels**: greyscale at rest, colour + blurb + sub-pages when hovered/focused; first one open by default; stacked on mobile.
5. "More Than a Research Center" + marquee of the 8 "we bring together" items + concept → validation → adoption → global relevance path.
6. Campus split: canopy photo + "An Oasis Built for What's Next".
7. Mission on the deep-green leaf chapter (blueberry macro, luminosity-blended over dark green `#015825`; guidelines p.2/4/14).
8. Latest (3 cards) → Resources.
9. CTA "test it here." → Services / Contact.
- Footer = back cover (p.31): mark cropped top corner, reversed lock-up with blue vertical rule, tagline EN + AR, address EN + AR, Resources, Legal, LinkedIn.

**Header.** Logo format three (p.9): wordmark + "Part of Silal" left, mark right. Transparent + reversed over dark heroes (pages flag `data-hero="dark"`), white with IO-blue hairline once scrolled. Six sitemap labels exactly; each opens a mega panel (intro + sub-pages + photo). ≤1280px: full-screen charcoal menu with accordions.

**Logo files.** `/brand/*.svg` used unchanged. `public/designer2/brand/io-wordmark-endorsed(-reversed).svg` = **cropped views** of `/brand/io-lockup*.svg` (identical paths, only viewBox changed to `434 364 326 148`). Replace with client master files when they arrive.

**Tokens**
| Token | Value | Use |
|---|---|---|
| `--io` | `#3CA7D2` | large type accents, rules, rings, dots, marks |
| `--io-ink` | `#1C7299` | **blue tint** for small text, links, kickers, primary buttons (5.4:1 on white) |
| `--io-mist` | `#B8E0F0` | **light blue tint** for small text on charcoal (5.3:1) |
| `--charcoal` | `#595453` | text, dark sections, footer, panels |
| `--grey` | `#7F8284` | large secondary text only |
| `--grey-ink` | `#6E7173` | small secondary text (4.9:1 on white) |
| `--light` | `#F1F1F1` | statement sections, CTA, campus |
| `--green-dark` | `#015825` | mission leaf chapter only |
| other accents | brand hex | reserved for tags/charts |

- Type: Readex Pro (variable, latin + arabic) as 29LT Bukra stand-in, one variable `--font-d2-brand` → `--f-brand` (swap in `layout.tsx`). Display Light 300, tight tracking, lowercase for section display lines with the second half in IO blue ("five platforms, *one proving ground*").
- Shapes: square corners everywhere (images, buttons, panels).
- Layout: logical CSS properties throughout (`inset-inline`, `margin-inline`, `border-inline-start`) so an Arabic RTL version mirrors cleanly.
- Motion: reveal on scroll, slow hero drift, scroll-driven rings, panel expand, marquee (pauses on hover). All off under `prefers-reduced-motion` (rings shown at end state, marquee becomes a wrapped list).
- Images: `next/image` from shared `public/photos/` web copies.

**Placeholder (to replace when client copy arrives):** platform blurbs (`_lib/site.ts`), the three "Latest" cards, CTA sub-line "Bring a technology, a trial or a partnership…", LinkedIn URL, Virtual Tour link. Sub-page links 404 until built. "Test it here." is a design line, not client copy: confirm.

### v2 — About IO, storytelling (2026-10-01)
- Live: `/designer2/v2/about` (`/designer2/v2` redirects there for now).
- Code: `app/designer2/v2/`: `layout.tsx` (font, motion flag, Lenis), `chrome.module.css` (tokens, header, footer, lifted from v1), `_components/` (Header: hides on scroll down, reading-progress hairline; Footer; SmoothScroll), `about/page.tsx` (server markup + data-* motion hooks), `about/about.module.css`, `about/_components/` (AboutMotion, Journey, Principles, ChapterIndex, LocalTime).
- Brief: Awwwards-level About page that puts information first, tells a story with slow, quiet motion, uses existing photos matched to the copy, and keeps Silal/IO branding obvious.
- Copy: `content/about.md` verbatim, in the client PDF's order (Hero → Story → People → Why Here → Different → Mission → Principles → Journey → Looking Ahead). The only non-client words are labels: "Fig. NN" captions, "Benchmark", "Survey · 34 ha", chapter numbers.

**The story, beat by beat (photo → copy)**
| Beat | Photo | Motion |
|---|---|---|
| Hero "built in the desert." | `Archive/…164012` aerial | lines rise from masks; photo wipes up, then widens to full bleed on scroll; live Al Ain time (GST) in the photo |
| "did not begin with a building / began with a question" | — | words brighten as you read (scrubbed) |
| 2020 Silal · 2021 Dr. Shamal meets farmers, universities… | MarCom greenhouse tour | curtain reveal + drift inside frame |
| "Research existed. Technologies existed. Farmers faced urgent challenges." | microscope · drone · greenhouse rows | three photos rise; the links between them **draw but never meet** (×) |
| "The world had innovation. What it lacked was implementation." | — | "innovation" fades to grey as "implementation" turns IO blue |
| 34-hectare parcel beside Al Foah | `Archive/…163545` aerial plots | aerial opens, survey box draws, hectares count 0 → 34 |
| "not another research center… the creation of Innovation Oasis." | facility canopy `PA__1065` | name lands; building widens to full bleed |
| "A place where startups test / researchers & farmers / partners scale / toughest conditions" | soil probe · growth chamber · final pitches · greenhouses on the desert edge | sticky photo swaps (wipe up) with the sentence you are reading |
| Today: R&D and venture engine | atrium "Research · Development · Growth" | curtain reveal |
| Leadership + quote, Team | `Shamal/Shamal-2`, team picks from `content/team.md` | portrait reveal; team rises in sequence |
| Why Here (charcoal): five conditions | — | benchmark rules fill like gauges |
| What makes IO different: 8 parts | — | ring: orbit draws, 8 nodes connect to one centre, the answer to the broken links earlier |
| Mission (deep-green leaf) | blueberry macro | leaf drifts, words brighten |
| Principles | soil probe · arrival/networking · lab · "12 projects across the globe" slide · hydroponic tomato | photo trails the cursor on desktop; inline photos on touch |
| Journey 2021 → 2030 | field specialist · desert aerial · lab · drone · greenhouse aisle · inauguration · FoodTech winners · campus overlay | sticky **year odometer** (digits roll), photo stack, progress ticks, line fills |
| Looking ahead finale | greenhouse `SMJ_2763` | pinned: three closing lines arrive one by one, IO mark lands |

**Small details:** crop marks inside every photo, "Fig. NN" captions, chapter rows "01 · Our Story · / 08" with rules that draw, fixed chapter index (bottom-start) with section progress and jump list, header progress hairline, live campus clock, tabular numerals, masked line reveals with room for descenders.

**Motion rules:** GSAP 3.15 (ScrollTrigger, SplitText) + Lenis, both already in `package.json`. Expo/power3 easings, 1.2–2.2s durations, nothing loops or bounces. The layout flags `html[data-d2m]` before paint so hooked elements don't flash; 4s failsafe un-hides everything. `prefers-reduced-motion`: no Lenis, no tweens, everything visible.

**Tokens:** same as v1 (`--io`, `--io-ink`, `--io-mist`, `--charcoal`, `--grey-ink`, `--light`, `--green-dark`). Type Readex Pro (Bukra stand-in). Square corners.

**Fix (v1 + v2):** `photo()` now encodes each path segment; team photos (`<Name>/<file>`) were 400ing in `next/image`.

**Open:** team roles/bios (names only for now), Talabi not shown, Virtual Tour link, "Juntos timeline" reference for Our Journey (client PDF) not seen yet. Sub-page links 404 until built.

### v3 — About IO, "one living world" (2026-10-01, rebuilt from scratch)
- Live: `/designer2/v3/about` (`/designer2/v3` redirects). Replaces v2 as Designer 2's current About.
- Brief: start over; main reference Inkwell (scroll-driven narrative, atmospheric gradients, a central motif, WebGL behind the DOM, a pathfinder instead of a classic nav), also Joby, Lightship, Terminal Industries, Breakthrough Energy. Seamless transitions, Awwwards polish, story first.
- Code: `app/designer2/v3/`
  - `_world/` — `World.tsx` (three.js: fixed canvas, sky-gradient shader + particle shader), `formations.ts` (helix, dunes, trial plots, islands, line, the mark's O, orbit, lattice, constellation, globe…), `scenes.ts` (palette + formation per scene; layout constants shared with CSS), `store.ts`.
  - `_components/` — `Nav` (pathfinder), `Menu` (circle reveal), `Loader`, `Cursor`, `Footer`, `SmoothScroll` (Lenis on GSAP's ticker), `Clock`.
  - `about/page.tsx` (markup + `data-*` hooks, client copy verbatim), `about/_components/Story.tsx` (all GSAP), `Principles.tsx`, `about.module.css`.

**How it stays seamless.** No section has a background. A fixed WebGL canvas behind the page draws (1) a sky gradient (noise-flowed, grained) and (2) 6,200 particles (2,600 on phones). Any element with `data-scene="…"` is a scene; as the next one's top travels from 100% → 50% of the viewport, the sky colours, text colour (`--w-fg-rgb`, `--w-accent` on `<html>`) and the particle formation blend into it, with per-particle stagger and an arc so shapes flow, not snap. Long sticky "tracks" carry invisible scene markers so the sky can change mid-sequence.

**The story (scene → formation → what happens)**
| Copy | World | Motion |
|---|---|---|
| Loader | scatter → the O + inner rungs | particles gather into the brandmark's O while assets load (real progress), then hand over to the hero |
| Hero "built in the desert." | sky; double helix inside an O dial (Research · Development · Growth) | masked lines rise; dial turns with scroll; live Al Ain time |
| Belief / "If solutions can succeed here…" | haze; dune field to the horizon | words brighten as read; aerial card curtain + drift |
| "did not begin with a building / began with a question." | mist; dust | words un-blur; "question." rises letter by letter; a pulsing dot |
| 2020 / 2021 | mist | big years, greenhouse-tour card |
| "A pattern quickly emerged" | three particle islands around three O lenses (microscope, drone, greenhouse) | lenses open one by one; links draw from both sides and stop at an ×; "no ecosystem connecting them" |
| "innovation / implementation" | the islands collapse into one line | "innovation" fades, "implementation" turns IO blue |
| 34-hectare parcel | field (green tint); trial plots in perspective | survey photo opens, corner brackets, 0 → 34 ha |
| "not another research center… the creation of Innovation Oasis." | **IO Blue sky; particles form the mark's O + rungs; the official "i" (white) lands beside it** | the O opens into the building photo, full-bleed… |
| "A place where…" (4 lines) | light; particles orbit an O lens | …then closes into a lens on the right; photo swaps per sentence; tick ring turns |
| Today / atrium | light | words + wide card |
| Leadership, quote, team | light → haze (a large particle O around the quote) → light | portrait card; quote words un-blur; team columns drift at different speeds |
| Why here + five pressures | **dusk: charcoal with an orange-red heat glow; particles shimmer** | each pressure takes the light in turn |
| "They are the benchmark." | charcoal; particles snap into an exact lattice | |
| What makes IO different | clear; 8 nodes wired to one centre (labels sit on the nodes) | labels arrive one by one, "Under one ecosystem." |
| Mission | **deep green; a tall helix growing** | words brighten |
| Principles | sprout | an O lens with the row's photo trails the cursor |
| Journey 2021 → 2030 | horizontal helix along the bottom | year odometer, O lens photo wipe, progress ticks |
| Looking ahead | night (charcoal + IO blue glow); a turning globe | |
| Finale | **dawn (light); particles form the O; the official full-colour mark lands on it** | three closing lines, one at a time; links |
| Footer | charcoal | tagline as headline (EN + AR), reversed lock-up, rising mark, live clock, back to the beginning |

**Brand.** Colours are the brand hex values (three.js colour management is off so shaders output exact hex; v3's first build rendered them too dark). Tints: `--io-ink #1C7299` (small blue on light), `--io-mist #B8E0F0` (small blue on charcoal). Greens only for the land and mission chapters; orange-red only as the heat glow. Logo: official SVGs; nav = format three (wordmark crop + mark); creation shows the white single-colour "i" (the O is drawn by particles around the photo); finale uses the full-colour mark unchanged. Type: Readex Pro (Bukra stand-in, `--font-d3`).

**Nav, menu, details.** Pathfinder: one segment per chapter, each fills as you read it, the current chapter name rolls in, segments jump (Lenis). Menu: opens as a circle from the button; 6 sitemap categories large, hover shows sub-pages and the category photo in an O lens with a turning tick ring. Cursor: dot + lagging ring (difference blend), opens on links. Header text roll on hover. Nav veil (soft blur) so text never collides with the bar. Particles drift away from the mouse and stretch with scroll velocity. Captions "Fig. NN".

**Robustness.** Staggered `fromTo` inside scrubbed timelines only pre-render the first target, so every staggered start state is primed with `gsap.set`. Sticky tracks start their timelines at `top 65%` so stages never arrive empty. Reduced motion: no Lenis, no loader, static particles, and every track collapses to plain readable content (CSS). WebGL failure: CSS gradient fallback. Checked: desktop 1440×900 and mobile 390×844 (scroll frames through the whole page), reduced motion, menu, no console errors.

**Open:** team roles/bios; Virtual Tour + LinkedIn URLs; real Bukra webfont; sub-pages (links 404 for now).

### v4 — About IO, "Hut 8 × Anthem" (2026-10-01)
- Live: `/designer2/v4/about` (`/designer2/v4` redirects). Current Designer 2 About.
- Brief: combine the two reference sites from the client's screen recordings (hut8.com, anthem.co.za; studied frame by frame), imitate and adapt their layouts and animations for IO, self-review as an Awwwards judge before presenting.
- Code: `app/designer2/v4/` — `layout.tsx`, `shell.module.css`, `_c/` (Nav, Footer, SmoothScroll, Clock), `about/page.tsx`, `about/about.module.css`, `about/_c/` (Motion = all GSAP, Site3D = three.js isometric world, Terrain = three.js dot terrain).

**Mechanic → source → IO adaptation**
| Section (client copy) | Borrowed from | IO version |
|---|---|---|
| Hero | Anthem: full-bleed photo; panel cuts its bottom corners into a card as you leave | aerial / greenhouses / canopy crossfade; "The future of food security is being built in the desert." |
| About | Anthem: label left, statement right, cut-corner photos drifting at different speeds | belief statement + aerial + canopy |
| Statement | Anthem: words brighten as read | "If solutions can succeed here…" |
| Facts | Anthem: colour stat tiles alternating with photos on a sideways track | 34 ha (IO Blue), 2020 (Charcoal), 2024 (dark green), 2030 (lime) — facts from the copy only |
| Our Story | Hut 8: photo holds while a dark panel slides up over it; notched rules | full story copy on Charcoal; three "existed / faced" cards |
| The site | Hut 8: white matte isometric world, "Layer 1.0" chapters, icon pins, lime service line | illustrative white campus, IO-Blue service lines/pins; 4 layers = the 4 "A place where…" lines (Test / Collaborate / Scale / Prove); camera on a spline |
| Today | Hut 8 "Our Businesses": Charcoal index with notched rule and numbered rows | "Today, IO serves as Silal's R&D and venture engine…" + the 5 sitemap platforms |
| People | Anthem: cut-corner portrait + text; sideways track | CEO + quote; team of 8 on a pinned track |
| Why here | Hut 8 "Our Impact": giant title slides over a dot terrain; labelled spikes; ruler + counter | "The Arid Advantage" over desert dots; 5 spikes = the 5 pressures; counter 00 → 05 |
| Different | Hut 8 "Powering the Future": giant list runs past a guide rule, one line lit | the 8 "We bring together" items |
| Mission | Anthem panel | deep-green leaf panel, corners cut on exit |
| Principles | Anthem "What we do": highlight bar moves through the list with a big number | IO-Blue bar |
| Journey | Anthem "The Anthem Model": sticky steps, arrow index, "02 / 04", the frame folds and reopens per step | 8 milestones 2021 → 2030 |
| Looking ahead | Anthem "Watch" strip | aerial strip with "Virtual Tour ↗" button (URL TBC) |
| Footer | Anthem: full brand-colour footer; Hut 8: striped giant signature | IO Blue; official mark (single-colour white) cut into 18 bands that slide together |

**Brand.** Paper `#F1F1F1` (brand light grey) replaces Anthem's cream; Charcoal replaces Hut 8's black; IO Blue replaces Hut 8's lime / Anthem's blue as the one highlight. Small charcoal text uses `#3D3938` (darker charcoal) for contrast. Cut corners only top-left + bottom-right. On IO Blue the logo is the single-colour white version (the blue "io" would vanish). Hut 8's striped wordmark distorts their logo; ours only slices the untouched mark file.

**Self-review (Awwwards-judge pass) and fixes made before presenting:** reversed logo on IO Blue (fixed: white), nav reading its own tone so the logo stayed reversed on light sections (fixed), 3D camera too close / world too sparse vs Hut 8 (raised to isometric, added fields, equipment, palms, solar rows, buildings), terrain too flat + spike tips stretched (taller dunes, tip no longer scaled), spike easing frame-rate dependent (fixed), principles squeezed on phones (fixed), tracks hiding items under reduced motion (wrap). Checked desktop 1440×900, mobile 390×844, reduced motion.

**Open:** 3D layout is illustrative (masterplan requested by Designer 1 would make it real); team roles; Virtual Tour + LinkedIn URLs; Bukra webfont; real-device frame-rate test of the two WebGL scenes.

### v5 — About IO in the IO guideline language (2026-10-02)
- Live: `/designer2/v5/about`. Current Designer 2 About.
- Client feedback on v4: more professional and polished, keep the scroll-driven sections, **but it is not Silal** — e.g. the chamfered buttons/rectangles (Anthem's shapes), Hut 8's pill, lime/colour tiles, the sliced logo. Brief: re-read everything, info first, clear sections, scroll-driven, polished 3D; check as Silal, then as an Awwwards judge.
- Re-read the guidelines PDF page by page (pp. 4, 13, 21–31 rendered). The IO language used everywhere now:
  - **Light, bright, uncluttered** ("website homepage layout that feels light, bright and cutting-edge", p.27). White pages; light grey panels.
  - **Square corners.** No chamfers, no pills. The only round form is the **O of the mark** — used for link buttons (text + blue O), pins, step dots, the Virtual Tour button.
  - **Thin IO-Blue hairlines**: under the header, under every chapter header, above the footer; in the hero the line **drops from the stem of the "i" and runs back under the title** (website mock p.27).
  - **"io" in IO Blue inside words** ("explorat-io-n"): implementation, Innovation (component `Io`, kept unbreakable so line animations can't split the word).
  - **Guideline page header** on every chapter: mark + bold charcoal title + IO-Blue subtitle + number right + hairline (`Head`).
  - **Square charcoal / IO-Blue cards** with a photo on top overlapping the hero photo (p.27), reused for the facts.
  - **Wayfinding panel** (p.26): white with an IO-Blue top rule — the 3D tour card, terrain copy, pins.
  - **Charcoal pages** (story, the list), **deep-green leaf chapter cover** (mission), **back cover** footer (mark + hairline dropping from the "i" + wordmark + address).
  - Core colours dominate; green only for the mission chapter; no lime/orange/pink.
  - Header after the mock: "Part of Silal · جزء من سلال" in clear space at the top (always visible), wordmark only (cropped view `public/designer2/brand/io-wordmark.svg`, official paths), six sitemap labels in IO Blue, "contact" small above, hairline below; hover = white dropdown with the category's pages + photo; small mark joins the bar after the hero.
- Information first (checked "as Silal"): hero cards answer *where / what / whose* (34 ha beside Al Foah Farm, Al Ain · Silal's R&D and venture engine · inaugurated 2024); facts track (2020, 2021, 34 ha, 2024, 2030 — all from the copy); every paragraph of `content/about.md` present, verbatim, in order; the five platforms list their **real sitemap pages** (v4's invented one-line blurbs removed); 3D labels use the copy's own words (field-testing areas, laboratories and greenhouses, collaboration spaces, "the proving ground"; pins incl. the sitemap's Solar Desalination).
- Kept from v4 (scroll-driven): hero photo growing to full bleed, words that brighten, pinned facts and team tracks, photo-hold under the charcoal story page, white 3D site tour (now with GTAO contact shading on desktop), dot terrain with the five pressure spikes, the list running past the hairline, IO-Blue bar through the principles, sticky journey (square frame wipes; year in an IO-Blue card).
- Self-review fixes before presenting: "Innovat|ion" split by the line animation (fixed), hero cards below the fold at 900px (photo shortened), list scrolling under the chapter header (fade), hero photo trigger starting mid-way (re-anchored), duplicate "Part of Silal" (wordmark-only crop), mobile hero title squeezed by the mark / photo overlapping the title (re-laid), 3D header crowding on phones.
- Open: Virtual Tour URL (button is `#`), team roles/bios, Bukra webfont, masterplan for an accurate 3D site, real-device frame-rate test.

### v6 — About IO, compact and clean (2026-10-02)
- Live: `/designer2/v6/about`. Current Designer 2 About. Client scored v5 5/10; v6 implements the full feedback list.
- **One system** (`v6/shell.module.css`): two weights only (Light 300 display / Regular 400 text), seven type sizes (display max 72px, h2 max 46px), 12-column grid, one section rhythm, 6px soft corners on images and capsules, one easing, three reveals (lines rise · image cards wipe + parallax · items fade up). Every image card has parallax.
- **Mark only in the header** (client decision): header = three floating capsules (menu + page · logo format three · Contact/Enquire), after the Lightship-style inspo. No logo in labels, no big mark in hero or footer, no "io" highlights in words.
- **Hero → At a glance, one scene** (client picked idea 5, after the Lightship video, not copied 1:1): full-bleed aerial, headline split left/right; on scroll the photo closes into a centre card (the 34-ha parcel) between the halves (headline exists twice — charcoal on the page, white inside the photo, clipped with it — so it reads across the closing edge), then the headline lifts and five fact cards rise at different depths into the collage. Facts only from the copy (2020, 2021, 34 ha, 2024, 2030 Vision, R&D and venture engine). Mobile / reduced motion: photo, then a fact grid.
- **Our Story** is one section: one label, sticky photo that changes per beat (wipe), beats on the right.
- **The site (3D)** rebuilt from the aerial footage: long white main building with blue façade panels, perforated canopy trees, palms, roundabout, gatehouse, IO totem, shaded car parks; fenced trial plots, shade-cage rows, sensor masts + drone; three multi-span greenhouse blocks; blue geodesic dome + two water tanks; sheds, solar; Al Foah date palms across the road; dunes beyond; sand grain; GTAO + soft shadows. 5 stops × 130vh, camera holds 60% of each stop then eases; a card (photo + copy) sits beside its point, follows it on screen, leader line + numbered dots. Illustrative, labelled.
- **Today**: statement + the five platforms with their real pages; a photo follows the cursor and overlaps the rows (touch: thumbnails).
- **Our People**: leadership fits one screen (portrait left; title, bio, quote right). Team: copy sticky left, staggered portraits scroll right (no horizontal track), hover zoom + underline + others desaturate.
- **Why Here** (client picked 1 + 2): pinned constraint → testbed wipe (grey desert aerial → trial plots), then a dotted world map — UAE lights first, then arid and semi-arid regions spread outward with the copy "Conditions once considered unique to the UAE are becoming increasingly common elsewhere"; the five pressures light as chips. Regions are broad, labelled "Illustrative" (`_lib/worldDots.json`, generated from Natural Earth 110m land).
- **Different**: title + intro, 4×2 grid with thin line icons, flow line concept → validation → adoption → local impact → global relevance, "cannot be solved in silos".
- **3D finish upgrade** (client: "lebih advance, tidak low poly, tambah shader bayangan seperti contoh"): architectural-visualisation look without heavy texturing — rounded edges on every built form (RoundedBoxGeometry), smooth lumpy date-palm crowns with varied greens (no faceted icosahedra), palms with curved trunks and 13 folded, drooping fronds, perforated canopy trees with real alpha-tested holes (custom depth material, so the sun throws dappled shade), translucent ribbed greenhouse film over green crop floors with glazed walls, crop rows with bump relief, sand grain + ripple bump, marked road, curbs, see-through perimeter mesh on posts, tilted solar, glossy geodesic dome. Lighting: low warm sun behind-right of the camera path (long shadows fall towards the viewer, as in the reference renders), soft Vogel-PCF shadows (4096 map desktop, 2048 phones — now on phones too), image-based fill (RoomEnvironment) kept low so shadows keep their depth, cool sky / warm bounce hemisphere; MSAA render target + GTAO contact shading on desktop.
- **3D performance pass** (client: "terasa berat"): same look, ~6–7× fewer triangles per frame (measured ~80k vs ~555k) — shadow map drawn once (static scene, `shadowMap.autoUpdate = false`), render on demand (nothing is drawn while the camera rests; the drone no longer animates), GTAO at half resolution with 8 samples, date-palm groves split into 48-unit tiles so off-screen tiles are culled and given lighter crowns that don't receive shadows, lighter ground mesh, DPR capped at 1.5 and stepped down automatically (to 1, then AO off) if frames run slow.
- Mission at h2 size; principles (row lights in turn), journey (sticky, frame wipes, year turns, progress rail), looking ahead, closing — all on the same grid/type.
- Self-review before presenting: headline unreadable while the photo edge crossed it (fixed: two-tone copy), card showing a gap at the top while shrinking (scale fixed), arid regions looked like rectangles (soft ellipses), fences too heavy, repeated photos reduced, duplicate "Our Team" label, journey year duplicated, mobile kicker wrap, frame-rate independent fades. Checked 1440×900, 390×844, reduced motion.
- Open: Virtual Tour + LinkedIn URLs, team roles, Bukra webfont, masterplan for an exact 3D layout, real-device frame-rate test.

### v7 — About IO, simple and professional (2026-10-02)
- Live: `/designer2/v7/about`. Current Designer 2 About. Client: "lupakan versi 3d" — a simpler variation, clean / professional / minimal, text not large or heavy, consistent sections; subtle motion only (parallax, scroll-driven, GSAP), nothing heavy (no 3D, no overkill).
- References (patterns, not copied): a solar template (stats row, split text/photo rows, process columns, photo CTA), AUAR (photo hero, icon facts, dark band with image cards), a legal testimonial block (photo + colour quote panel, portrait cards with name bars), terra-tory (horizontal cards on dark, accent card), Veritas (label column left / content right, dark intro with highlighted phrase, numbered rows, card row with one accent).
- **System** (`v7/shell.module.css`): every section = small label (IO-Blue square + uppercase name) in cols 1–3, content in cols 4–12. Light 300 headings (h1 max 60px, h2 max 40px), Regular 400 text. White / paper panels, one deep-charcoal band (intro) + the journey, IO Blue / IO ink as the only accent, green only in the mission band. 4px corners, 1px hairlines.
- **Sections**: hero (label · kicker · h1 · two buttons, wide aerial with parallax, at-a-glance row 2020 / 2021 / 34 ha / 2024) → dark intro (belief statement with the key phrase in IO mist, words brighten on scroll) → Our Story (split rows alternating text/photo with year tags, "The world had innovation. What it lacked was implementation." pull line, the four "A place where…" lines as stepped columns) → Today (statement + platform accordion with real sitemap pages) → Our People (bio, CEO photo + IO-ink quote card, team cards with name bars) → Why Here (two-tone headline, split, 5 pressure cards + accent "benchmark" card, quote) → Different (4×2 icon grid, flow line) → Mission (green photo band) → Principles (numbered rows) → Journey (dark, native horizontal slider with arrows, drag, snap, progress hairline) → Looking Ahead (split) + photo CTA (closing lines, Virtual Tour + Contact).
- **Header**: logo format three, the six sitemap categories with small hover dropdowns of their pages, "Contact us" button; hairline on scroll, hides on scroll down; burger list ≤1280px.
- **Motion**: headings rise by line, items fade up (batched), image frames open once + parallax drift, photo bands drift, flow line draws, accordion via CSS grid rows. No pinning, no WebGL. Reduced motion: static.
- Checked 1440×900 and 390×844.

## Next
- About IO (client copy verbatim, team grid per `content/team.md`), then Section Hub template, Research Area detail, Contact, Enquiry form.
