# Designer 1 — design log

Owned by the DESIGNER 1 chat. Record design directions, tokens (colours, type, spacing) and decisions here.

## Designs

### v1 — "Clear Field" (brand-aligned 2026-10-01)
- Live: `/designer1/v1` (Home), `/designer1/v1/system` (design system page).
- Code: `app/designer1/v1/` — `layout.tsx` (font, header, footer), `v1.module.css` (all tokens + components, scoped under `.root`), `_components/`, `_lib/photo.ts` (photo paths).
- Idea: clinical white space, IO Blue + Charcoal, light-weight lowercase-friendly display type, thin IO-blue rules, IO mark as cropped supergraphic, photography doing the talking.

**Brand alignment (per BRAIN request, docs/brand.md):**
- Logo: placeholder SVG removed. Header = `/brand/io-mark.svg`; footer = `/brand/io-lockup-reversed.svg` at 180px (carries "Part of Silal" on every page); Mission band = io-mark as cropped supergraphic. Files used as-is, never recoloured.
- Palette: core only for surfaces/text (IO Blue `#3CA7D2`, Charcoal `#595453`, Grey `#7F8284`, Light grey `#F1F1F1`, white). Removed `#1689CF`, navy and sand. Secondary colours (greens, orange, pink) exist as tokens and tag variants only.
- **Blue tint for small text/links: `--io-ink: #1A6F96`** (5.6:1 on white, 5.0:1 on `#F1F1F1`). `#3CA7D2` only for large headings, rules, icons, buttons.
- Type: Sora / Inter / JetBrains Mono removed. **Readex Pro** (latin + arabic, 300–600) via `next/font/google` as 29LT Bukra stand-in, in one variable `--font-d1-brand` → `--f-brand` (swap in `layout.tsx` only). Display = Light 300, H3/kickers = Medium 500.
- Nav labels exactly per sitemap: About IO · Research & Science · Innovation & Venture Platforms · Centres of Excellence · Technology & Services · Talent & Training.
- Thin IO-blue rules: solid header bottom border, footer top (2px) + footer bottom rule, quote band.

**Tokens**
| Token | Value | Use |
|---|---|---|
| `--io` | `#3CA7D2` | headings accents, rules, buttons, icons |
| `--io-ink` | `#1A6F96` | small blue text, links, kickers |
| `--charcoal` | `#595453` | body/heading text, dark bands, footer |
| `--grey` | `#7F8284` | meta text (large/secondary only) |
| `--light` | `#F1F1F1` | light section backgrounds |
| `--green` `--green-dark` `--lime` `--orange` `--pink` | brand secondary | accents/tags only |
| `--shade` | `34,32,31` (rgb) | photo overlay tint |

- Space: 4-based scale (4 … 144), sections `clamp(72px, 10vw, 144px)`, max width 1360px.
- Shape: 20px radius on cards/images, pill buttons (52px), captions on frosted pills.

**Home sections:** hero (tagline kicker, About hero headline + intro, facts 34 ha / 2024 / 3 / 6) → Our Story (atrium) → "More than a research center. More than an accelerator." 5 category cards with sitemap sub-pages → Why Here? The Arid Advantage (charcoal, 5 pressures) → CEO quote → Centres of Excellence (3) → Agricultural Challenges feature → campus strip → resources cards → Our Mission band with io supergraphic → footer.

**Copy sources:** `content/about.md` verbatim (hero, story, hub intro, arid advantage, quote, mission); names from `docs/sitemap.md`; tagline from `docs/brand.md`.
**Still placeholder:** centre one-liners, Agricultural Challenges paragraph, news items, LinkedIn URL. Nav links point to future routes (404 until built).

**Notes**
- The Feb 2026 MarCom screenshots have a U+202F (narrow no-break space) before "AM" in their filenames; `_lib/photo.ts` handles it.

## Next
- About IO page (copy final in `content/about.md`), then Section Hub template, Research Area detail.
