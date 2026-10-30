# About, Team, News, News Detail (2026-10-30)

Built from the client PDFs (About Us Page, Team Page Revision, News Page Revision, News Detail Page). Nothing is designed from scratch: each page is existing sections inside the latest homepage shell.

| Page | Sections and where they come from |
|---|---|
| About | Our Story, Our Mission, Principles: `/V1` (About-D, `app/V1/_about/AboutD.tsx`), labels without numbers |
| Team | 02 Our People (Leadership + Our Team): `/V1` About-D, team text in two columns as in the PDF · Media enquiries: `/V3/resources/news` |
| News | All releases (category chips, year, search, Load more): `/V2/resources/news` (`Archive.tsx`, ported to plain JS), its 9 releases · Media enquiries: V3 |
| News Detail | Press release + related releases: `/V3/resources/news/<slug>` (all 19) · Media enquiries: V3 |

Header, menu and footer: `public/new-homepage-v2/index.html` (identical to the newest homepage, artifact version 34 from the "Silal.io New Homepage" session), as the Innovation & Venture pages do.

## Rebuild
1. Set `images: { unoptimized: true }` in `next.config.ts` (local only, do not commit), `npm run build`, `npx next start -p 3100`.
2. `python3 capture.py` writes `parts/` (section markup with CSS-module names renamed to `c_`/`s_` for About-D/V1, which the homepage CSS already carries; `n2_`/`c2_` for V2; `n3_`/`s3_` for V3).
3. `python3 build.py` writes `out/` (one HTML file per page plus the photos it uses; brand files come from `public/new-homepage-v2/brand/`).

`out/` is not committed. Not live on the site yet: no rewrites in `next.config.ts`.
