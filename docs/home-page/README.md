# Home Page — Concept 1 "Built by the Desert" (C1 - V2)

New area for the Home Page designs (separate from the About page work in `/V1`–`/V3` and the two designer folders).

- **Live (team link):** https://silal-io.vercel.app/home-page/c1-v2 (noindex; not on a client link yet)
- **Code:** `app/home-page/c1-v2/` — `page.tsx` (server markup, the Figma 1440 × 870 frame), `Story.tsx` (client: one paused GSAP timeline scrubbed by ScrollTrigger + Lenis), `c1.module.css` (every rule scoped under `.root`, nothing leaks to other routes), `Symbols.tsx` (IO mark + cursor sprite), `chapters.ts` (left nav labels), `layout.tsx` (metadata, noindex).
- **Assets:** `public/home-page/c1-v2/img/` (28 web images exported from Figma; hash names = Figma image hashes).
- **Spec:** `docs/home-page/c1-design-spec.md` (extracted from Figma file `85J2hDmYtlUNY2GbDkFxZi`, page "Home Page", Concept 1 "Design" column). Reference frames: `docs/home-page/ref/` (Figma node screenshots).

## How it works
- `.story` is `(55.4 × 70% of viewport height) + 100vh` tall. `.stage` is CSS-sticky inside it, so the page itself never pins or jumps.
- The timeline positions in `Story.tsx` are "scroll units" (1 unit = 70% of the viewport height, 62% on phones), numbered to match the Figma keyframes (01.01 … 09). `CHAPTER_AT` = when each left-nav item takes over, `CHAPTER_GO` = where a nav / menu click scrolls to.
- Desktop: the 1440 × 870 design frame is centred and scaled by `--u = min(vw/1440, vh/870)`. Phones / portrait (`< 820px` or aspect < 0.9) get a re-flowed layout, switched with `data-m` on `.root`.
- Image fills use Figma's crop transforms (`data-crop="scale-x,offset-x,scale-y,offset-y"`).
- QA helpers: `?t=12.4` opens at a timeline position, `?lenis=0` turns smooth scroll off. `prefers-reduced-motion`: no Lenis, scrub snaps to the scroll position.
- The scene order: Earth → close-up → aerial "Step into the Oasis" → desert → Al Foah (stats 34 ha / 04) → laboratories card → three centres → drone (card grows to full bleed) → venture platforms → three ways in → talent → virtual tour → footer.

## Differences from the brand rules (decide before launch)
- Type is **Inter** (as in the Figma file), not Bukra / Readex Pro (`docs/brand.md`). One font variable in `page.tsx` (`--font-c1`).
- The look is dark and glassy (charcoal-black `#0f0f0f`, IO mark in white), not the light brand-book layout.
- The "Part of Silal" endorsement is in the footer bar only; the header pill shows the mark.

## Open items
- Copy is what is in the Figma (placeholder in tone; the client has only supplied the About copy).
- `0ba94745.jpg` (desert landscape) is only 735 × 420 in the Figma export; it is enlarged to full screen, so it looks soft. Needs a higher-resolution source.
- All CTAs / footer links point at `#anchors` (pages not built yet).
- The spec mentions `assets/raw/` and `assets/svg/` from the extraction; they were not part of the hand-over. The logo and cursor are inlined in `Symbols.tsx`.
