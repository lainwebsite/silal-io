# IO Academy Page

Library page for Talent & Training → IO Academy Training (sitemap template 11, list view). Copy of branch `23-oct/io-academy-page`.

- Live route (once the branch is deployed): `/390b3d94a5/v10/training/io-academy-training` (team link, noindex).
- Source: `app/390b3d94a5/v10/` (layout, header, footer, shell and page CSS, `training/io-academy-training/page.tsx`, `_c/Library.tsx`, copy in `_lib/academy.ts`).
- Assets: `public/new-homepage/brand/` (logo), `public/brand/io-mark.svg`, `public/photos/…` (only the 7 photos used).
- Shell = the new homepage's header and footer. Body = News & Media layout. **Read `docs/io-academy/GUIDE.md` before changing anything.**
- Detail page: not in this folder, see `../Training Detail Page/`. Library cards stay inert until `DETAIL_LIVE` in `_lib/academy.ts` is `true`.
- Sample content: courses, dates, fees. No trainer names.
