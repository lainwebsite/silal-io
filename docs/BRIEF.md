# Silal IO website — project brief

Single source of truth for every Claude chat working on this repo. Update this file when a decision is made; don't keep decisions only in chat.

## Project
- Client: Silal — IO (Innovation Oasis), agri-food research & innovation campus, UAE.
- Live site: https://silal-io.vercel.app/ (Vercel auto-deploys `main`).
- Stack: **Next.js** on Vercel.

## Chats and who owns what
| Chat | Role | Writes to |
|---|---|---|
| BRAIN (content alignment) | Content, copy, assets, sitemap, decisions log | `docs/`, `assets/`, `content/` |
| DESIGN | Visual design + building the Next.js site | app code (`app/`, `components/`, `public/`, styles), `docs/DESIGN.md` |

Rules for both:
- Push straight to `main`. Always `git pull --rebase origin main` before pushing.
- Stay in your own folders. Need something outside them? Write it in "Requests" below.
- Original photos in `assets/photos/` are never renamed, resized or recompressed. Web copies for the site go in `public/` (or a separate folder), named `<original filename stem>.<ext>`, so they trace back.

## Pages (21)
1. Home
2. About IO
3. Team & CEO Message
4. Team Member Detail
5. Section Hub (template shared by all 5 categories)
6. Research Area Detail
7. Venture Programme Detail
8. Agricultural Challenges
9. Centre of Excellence Detail
10. Service Detail
11. Training Programme Detail
12. Enquiry Form
13. Form Confirmation
14. Resources Hub
15. News / Media Detail
16. Publication Detail
17. Project / Case Study Detail
18. FAQs
19. Legal (Terms + Privacy)
20. Contact
21. 404

## Assets
- Photos: `assets/photos/` (169 originals). Manifest with suggested page usage: `assets/README.md`. Visual index: `assets/contact-sheets/`.
- Logo: the blue "io" mark (seen in the photos). **Missing: SVG file.**

## Open inputs (from client)
- [ ] Logo SVG
- [ ] Brand colours
- [ ] Fonts
- [ ] Page copy (otherwise BRAIN writes placeholder copy into `content/`)

## Decisions log
- 2026-10-01: Assets kept as untouched originals with original filenames.
- 2026-10-01: Build as Next.js on Vercel; `main` = production.
- 2026-10-01: Design + build happens in the DESIGN chat; BRAIN handles content and assets.

## Requests (cross-chat)
_Add requests here, e.g. "DESIGN → BRAIN: need hero copy for Home"._
