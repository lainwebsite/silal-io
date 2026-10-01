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

## Next
- About IO (client copy verbatim, team grid per `content/team.md`), then Section Hub template, Research Area detail, Contact, Enquiry form.
