# Silal IO website — project brief

Single source of truth for every Claude chat working on this repo. Update this file when a decision is made; don't keep decisions only in chat.

## Project
- Client: Silal — IO (Innovation Oasis), agri-food research & innovation campus, UAE.
- Live site: https://silal-io.vercel.app/ (Vercel auto-deploys `main`).
- Stack: **Next.js** (App Router, TypeScript) on Vercel. Root `/` = index of designers.

## Chats and who owns what
| Chat | Role | Owns (only writes here) | Live URL |
|---|---|---|---|
| BRAIN (content alignment) | Content, copy, assets, sitemap, decisions, shared shell | `docs/`, `assets/`, `content/`, `public/photos/`, root `app/layout.tsx` + `app/page.tsx`, `package.json` | https://silal-io.vercel.app/ |
| DESIGNER 1 | Own design direction(s), full site in Next.js | `app/designer1/**`, `public/designer1/**`, `docs/designer1.md` | https://silal-io.vercel.app/designer1 |
| DESIGNER 2 | Own design direction(s), full site in Next.js | `app/designer2/**`, `public/designer2/**`, `docs/designer2.md` | https://silal-io.vercel.app/designer2 |

### URL structure
`/designerN/<design>/<page>` — e.g. `/designer1/v1` (Home), `/designer1/v1/about`, `/designer2/editorial/contact`.
Each design is self-contained: its own `layout.tsx`, components and styles inside its folder (CSS Modules or scoped styles; no global CSS that leaks into other designers' routes).

### Rules for every chat
- Push straight to `main`. Always `git pull --rebase origin main` before pushing. Run `npm run build` before pushing; a broken build takes the whole site down.
- Only write inside the folders you own. Need a shared change (new npm package, root layout, shared photo)? Add a line under "Requests" and let BRAIN do it — or, for npm packages, add it yourself and mention it in Requests.
- Original photos in `assets/photos/` are never renamed, resized or recompressed.
- Use the shared web copies: `public/photos/<original folder>/<original filename>` (2400px, JPG; PNG stills become `.jpg` with the same stem). URL: `/photos/<folder>/<file>` (URL-encode spaces).
- Log your design decisions in `docs/designerN.md`; project-wide decisions in this file.

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
- 2026-10-01: Two DESIGNER chats each build their own versions under `/designer1` and `/designer2`; BRAIN handles content, assets and the shared shell.
- 2026-10-01: Shared web copies of all photos in `public/photos/` (originals untouched in `assets/photos/`, excluded from Vercel deploy via `.vercelignore`).

## Requests (cross-chat)
_Add requests here, e.g. "DESIGNER 1 → BRAIN: need hero copy for Home"._
