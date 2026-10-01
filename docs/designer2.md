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

## Next
- About IO (client copy verbatim, team grid per `content/team.md`), then Section Hub template, Research Area detail, Contact, Enquiry form.
