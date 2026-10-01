# Designer 1 — design log

Owned by the DESIGNER 1 chat. Record design directions, tokens (colours, type, spacing) and decisions here.

## Designs

### v1 — "Clear Field"
- Live: `/designer1/v1` (Home), `/designer1/v1/system` (design system page).
- Code: `app/designer1/v1/` — `layout.tsx` (fonts, header, footer), `v1.module.css` (all tokens + components, scoped under `.root`), `_components/`, `_lib/photo.ts` (photo paths).
- Idea: bright clinical whites of the labs, IO blue from the logo and the wave graphics on the lab walls, sand from the land around the campus. Photo-led, big confident type, generous space.

**Tokens**
| Token | Value | Use |
|---|---|---|
| `--ink` | `#0B1F2E` | text, dark bands, footer |
| `--ink-2` / `--ink-3` | `#3A4D5C` / `#6B7C89` | secondary / muted text |
| `--io` | `#1689CF` | the only saturated colour: CTAs, labels, accents |
| `--io-deep` | `#0A5A92` | hover, links |
| `--io-sky` | `#E7F3FB` | tags, tints |
| `--sand` / `--sand-deep` | `#F3EDE3` / `#D9C9AE` | warm section backgrounds |
| `--leaf` | `#3F8F4E` | sparing accent (tags) |
| `--mist` | `#F4F7F9` | cool section backgrounds |

- Type: **Sora** 500 (display, tight tracking), **Inter** (body), **JetBrains Mono** (uppercase labels, captions, data). All via `next/font/google`, fluid sizes with `clamp()`.
- Space: 4-based scale (4 … 144), sections `clamp(72px, 10vw, 144px)`, max width 1360px.
- Shape: 20px radius on cards/images, pill buttons (52px), mono captions on frosted pills.
- Motif: wave lines (from lab wall graphics) — used in the CTA band. Placeholder "io" mark drawn in SVG until the real logo arrives.

**Home sections:** hero (aerial trial plots, stats strip) → About IO split (atrium photo, Research / Development / Growth) → "Five ways to work with IO" hub cards (Research, Ventures, Centres, Services, Training) → Agricultural challenges list (dark band) → "Inside the oasis" tech (drones, sensors, phenotyping) → FoodTech Challenge feature → campus strip (sand band) → news cards → enquiry CTA → footer.

**Placeholders (need BRAIN / client):**
- All copy, stats (5 / 12+ / 40+ / 1) and news dates are placeholders.
- Logo SVG (using a drawn placeholder mark).
- Nav links point to future routes under `/designer1/v1/...` (About, Research, Ventures, Challenges, Centres, Services, Training, Resources, Enquire, Contact, FAQs, Legal, Team) — 404 until built.

**Notes**
- The Feb 2026 MarCom screenshots have a U+202F (narrow no-break space) before "AM" in their filenames; `_lib/photo.ts` handles it.

## Next
- Remaining pages for v1, starting with About IO, Section Hub template, Research Area detail.
