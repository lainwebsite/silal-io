# Training Detail Page

## Latest design: `index.html` (2026-10-26)
Training detail page only (the IO Academy library is a separate page, in `../IO-Academy/`). Open `index.html` in a browser: one file, photos embedded; needs internet for the Readex Pro font and Lenis from jsDelivr. It shows the detail of the flagship course and lets you step through all 7 sample courses with the previous / next buttons and the "More from the Academy" cards.
- Structure after the Delphy training page: breadcrumb, title, lead, facts bar (type, duration, audience, prior education, language, investment), photo, sticky "Request information" card with a short form, then Overview + quote, What do you learn?, Planning, Content, How does it work?, The result + key concepts, Your trainers, Questions, a closing "Do you have a question?" band, previous / next course, more courses.
- Header and footer = the new homepage. Lenis smooth scroll with the homepage settings. Light only.
- `source/`: generator for `index.html` (`python3 gen.py` from the repo root; it reads `gen.css`, `gen.js`, `courses.json` and the shell CSS in `../IO-Academy/app/390b3d94a5/v10/shell.module.css`, photos from `public/photos`). `academy.ts` is the course copy (sample).
- Trainers: only Dr. Shamal Mohammed (CEO, from `content/about.md`) is a real person; his course role is "proposed". Other team members' job titles have not been supplied, so none are assigned. Needed: name, job title and course for each.
- All course data (dates, fees, quotes) is sample content.

## Earlier draft (Next.js source, below)

Training programme detail (sitemap template 11), after https://delphy.nl/en/trainings/greenhouse-management-hightech-cultivation/. Copy of branch `23-oct/training-detail-page`. This is a **starting draft**: the next chat refines it.

- Route: `/390b3d94a5/v10/training/io-academy-training/[slug]`, e.g. `…/controlled-environment-agriculture-hightech-greenhouse` (team link, noindex).
- Source: `app/390b3d94a5/v10/training/io-academy-training/[slug]/page.tsx`, `_c/RequestForm.tsx`, `academy.module.css`; the shell and data are the same as the library (`../IO-Academy/`).
- **Brief for a fresh chat: `docs/io-academy/DETAIL-BRIEF.md`** (client brief, Delphy → our sections table, layout, definition of done). Style rules: `docs/io-academy/GUIDE.md`.
- Draft has: breadcrumb, title + lead + Request information, facts bar, photo, sticky section index + facts card, Overview + quote, What do you learn?, Planning, Content, How does it work?, The result + concepts, Your trainers (role only), Questions, request form (front end only), previous/next, more courses.
- Sample content only.
