# Training Detail Page

## Latest design: `index.html` (2026-10-26)
Open `index.html` in a browser (single file, photos embedded; needs internet for the Readex Pro font and Lenis from jsDelivr). It holds **both pages** and links them: the IO Academy library (Content / Media Centre layout) and the **training detail** (Delphy structure), for all 7 sample courses. Click any course card or "View course" to open its detail page.
- Library: sticky featured carousel hero (dark overlay, masked title swap), feed panel that slides over it, sticky track sidebar with a blue marker that follows the courses while you scroll, filters, 2 · 3 · 1 rows.
- Detail: breadcrumb, title, lead, facts bar, photo, sticky "Request information" card, Overview + quote, What do you learn?, Planning, Content, How does it work?, The result, Your trainers, Questions, previous/next, more courses.
- Header and footer = the new homepage. Lenis smooth scroll with the homepage settings. Light only.
- `source/`: generator for `index.html` (`gen.py` builds it from `gen.css`, `gen.js`, `courses.json` + the shell CSS in `../IO-Academy/app/390b3d94a5/v10/shell.module.css`; paths in `gen.py` assume the repo root and the `public/` photos). `academy.ts` = the course copy (sample).
- Trainers: only Dr. Shamal Mohammed (CEO, from `content/about.md`) is a real person; his course role is "proposed". Other team members' job titles have not been supplied, so none are assigned. Needed: name, job title, course for each.
- All course data (dates, fees, quotes) is sample content.

## Earlier draft (Next.js source, below)

Training programme detail (sitemap template 11), after https://delphy.nl/en/trainings/greenhouse-management-hightech-cultivation/. Copy of branch `23-oct/training-detail-page`. This is a **starting draft**: the next chat refines it.

- Route: `/390b3d94a5/v10/training/io-academy-training/[slug]`, e.g. `…/controlled-environment-agriculture-hightech-greenhouse` (team link, noindex).
- Source: `app/390b3d94a5/v10/training/io-academy-training/[slug]/page.tsx`, `_c/RequestForm.tsx`, `academy.module.css`; the shell and data are the same as the library (`../IO-Academy/`).
- **Brief for a fresh chat: `docs/io-academy/DETAIL-BRIEF.md`** (client brief, Delphy → our sections table, layout, definition of done). Style rules: `docs/io-academy/GUIDE.md`.
- Draft has: breadcrumb, title + lead + Request information, facts bar, photo, sticky section index + facts card, Overview + quote, What do you learn?, Planning, Content, How does it work?, The result + concepts, Your trainers (role only), Questions, request form (front end only), previous/next, more courses.
- Sample content only.
