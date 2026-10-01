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

**About page vs client PDF** (`docs/source/Innovation_Oasis_About_Page_Content_v2.docx.pdf`, checked 2026-10-01): section order matches the PDF (Hero → Our Story → Our People → Why Here? → What Makes IO Different → Our Mission → Principles → Our Journey → Looking Ahead); Arid Advantage closes with the "If it works here…" quote as in the PDF; no invented headlines on About. Open: PDF says journey "in a format similar to the Juntos timeline" — reference link needed. Team headshots (BRAIN commits dbbd501 + e496de0, `content/team.md`): CEO = `Shamal/Shamal-2.jpg` (NOT the Shamal-* files in `Sagar/`), Ahmed-1, Ali-4, Nadia-10, Sagar-2, Caitlin-4-2, Francisco-7, Jude-1, Mohsin-4; labelled by folder name. Talabi not shown (not in About list). Roles = "Role title" placeholder until bios arrive.

**Copy:** `content/about.md` verbatim (Home hero, belief, story, arid advantage, ecosystem, quote, mission; full About page). Names from `docs/sitemap.md`.
**Still placeholder:** category blurbs, centre one-liners, Agricultural Challenges paragraph, resource items, LinkedIn URL, team photos/roles, CEO portrait. Sub-page links 404 until built.

**Notes**
- The Feb 2026 MarCom screenshots have a U+202F (narrow no-break space) before "AM" in their filenames; `_lib/photo.ts` handles it.

## Next
- Section Hub template (5 categories), then Research Area detail, Contact, Enquiry form.
