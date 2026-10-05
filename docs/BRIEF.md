# Silal IO website — project brief

Single source of truth for every Claude chat working on this repo. Update this file when a decision is made; don't keep decisions only in chat.

## ⚠ Read these before designing (mandatory for every designer)
| File | What |
|---|---|
| `docs/brand.md` | **Brand rules**: logo files + usage, colours (hex), typography (29LT Bukra), tagline, visual language. Not optional. |
| `docs/sitemap.md` | **Navigation + page names**, mapped to our 21 templates. Use the 6 menu labels exactly. |
| `content/about.md` | **Final About IO copy** (client-supplied, use verbatim). |
| `content/team.md` | **Team status**: who has photos, which files to use, what's missing. |
| `public/brand/*.svg` | Real logo: `io-lockup.svg`, `io-lockup-reversed.svg`, `io-mark.svg`. Replace any placeholder logo. |
| `docs/source/` | Original client PDFs (guidelines, About copy, sitemap). |

## Project
- Client: **Innovation Oasis (IO), part of Silal**: Silal's R&D and venture engine. 34-hectare agri-food innovation campus beside Al Foah Farm, Al Ain, UAE. Inaugurated 2024. CEO: Dr. Shamal Mohammed.
- Tagline: **Advancing Agri-food Systems** / نحو أنظمة زراعة وغذاء متطورة
- Core line: "If it works here, it can work anywhere."
- Live site: https://silal-io.vercel.app/ (Vercel auto-deploys `main`).
- Stack: **Next.js** (App Router, TypeScript) on Vercel. Root `/` = index of designers.

## Chats and who owns what
| Chat | Role | Owns (only writes here) | Live URL |
|---|---|---|---|
| BRAIN (content alignment) | Content, copy, assets, sitemap, decisions, shared shell | `docs/`, `assets/`, `content/`, `public/photos/`, `public/brand/`, root `app/layout.tsx` + `app/page.tsx`, `package.json` | https://silal-io.vercel.app/ |
| DESIGNER 1 | Own design direction(s), full site in Next.js | `app/designer1/**`, `public/designer1/**`, `docs/designer1.md` | https://silal-io.vercel.app/designer1 |
| DESIGNER 2 | Own design direction(s), full site in Next.js | `app/designer2/**`, `public/designer2/**`, `docs/designer2.md` | https://silal-io.vercel.app/designer2 |
| BRAIN (client presentation) | Polished client-facing copies of chosen designs. **Designers: don't edit these.** | `app/V1/**`, `app/V2/**`, `app/V3/**`, `public/V1..V3/**`, `proxy.ts` | /V1 · /V2 · /V3 |

### Client presentation links (/V1, /V2, /V3)
Snapshots of chosen About pages, given to the client without the designer URLs. Self-contained copies (code, styles, assets); they do not change when the designer folders change.

| Client link | Copied from | Copied at |
|---|---|---|
| https://silal-io.vercel.app/V1 | `/designer1/v1/about-d` | `e0ddf4a` |
| https://silal-io.vercel.app/V2 | `/designer2/v2/about` | `e0ddf4a` |
| https://silal-io.vercel.app/V3 | `/designer2/v6/about` | `e0ddf4a` |

- Only polish allowed on these, never layout or design changes; the originals stay untouched.
- Only the About page exists in each copy. Links to unbuilt pages point at `SOON` ("#") in each copy's `_lib/site.ts` and are made inert by `LinkGuard` (no 404s, no designer URLs).
- Lowercase `/v1`–`/v3` redirect to `/V1`–`/V3` (`proxy.ts`).
- Pages are `noindex` and have share previews (`public/Vn/og.jpg`).

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
Full sitemap and which real pages use each template: `docs/sitemap.md`.

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
- Photos: `assets/photos/` (169 originals + 196 team headshots). Manifest with suggested page usage: `assets/README.md`. Visual index: `assets/contact-sheets/`.
- Logo: `public/brand/` (vector SVG extracted from the guidelines PDF, see `docs/brand.md`).
- Sitemap image: `docs/sitemap.png`.

## Open inputs (from client)
- [x] Brand guidelines (logo, colours, type): `docs/brand.md`
- [x] Sitemap: `docs/sitemap.md`
- [x] About IO copy: `content/about.md`
- [ ] Official logo master files (SVG/AI). Current SVGs are extracted from the guidelines PDF; fine for design, confirm before launch.
- [ ] **29LT Bukra webfont files (WOFF2) + web licence.** Until then use the stand-in described in `docs/brand.md`.
- [~] Team headshots: **all 9 received** (CEO Shamal + Ahmed, Ali, Nadia, Sagar, Caitlin, Francisco, Jude, Mohsin), plus Talabi (not in About list: confirm whether to show) and an `Unknown Name/` folder (4 photos, unidentified man, files misnamed `Sagar-4…7`: client to identify). See `content/team.md`. **Still missing: all bios + role titles.** Filename prefixes don't match people; folder = person.
- [ ] Copy for all other pages (Home, category hubs, details…). Until supplied, use placeholder copy that follows the About page's tone.
- [ ] Partners: how to display partners & manage partnership enquiries (open question on sitemap).
- [ ] Confirm contact details (phone in stationery template may be placeholder).
- [ ] Decide: IO Academy Training (internal page vs external link), Silal Careers Centre (in/out of scope).

## Decisions log
- 2026-10-01: Assets kept as untouched originals with original filenames.
- 2026-10-01: Build as Next.js on Vercel; `main` = production.
- 2026-10-01: Two DESIGNER chats each build their own versions under `/designer1` and `/designer2`; BRAIN handles content, assets and the shared shell.
- 2026-10-01: Shared web copies of all photos in `public/photos/` (originals untouched in `assets/photos/`, excluded from Vercel deploy via `.vercelignore`).

- 2026-10-01: **Brand guidelines are binding for all designers.** Designers explore layout, composition, motion and photo use; logo, colour palette, typography and tagline come from `docs/brand.md`.
- 2026-10-01: Navigation = the 6 sitemap categories (`docs/sitemap.md`), same labels in every design.
- 2026-10-01: Interim web font until Bukra webfont arrives: Readex Pro (Latin + Arabic), held in one CSS variable for an easy swap.
- 2026-10-02: Client presentation links /V1 (Designer 1 About D), /V2 (Designer 2 v2 About), /V3 (Designer 2 v6 About): polished snapshots, owned by BRAIN.

## Requests (cross-chat)
_Add requests here, e.g. "DESIGNER 1 → BRAIN: need hero copy for Home"._

- **BRAIN → DESIGNER 1 (2026-10-01):** brand guidelines arrived after v1. Please align v1 (or start v2): replace the placeholder logo with `/brand/*.svg`; switch the palette to the brand colours (IO Blue `#3CA7D2`, Charcoal `#595453`, Grey `#7F8284`, Light grey `#F1F1F1`; greens/orange/pink only as accents. Sand and `#1689CF` are not brand colours); swap Sora/Inter for the brand type stand-in (Bukra → Readex Pro for now); use the sitemap's 6 nav labels; About page copy is final in `content/about.md`. Log what you changed in `docs/designer1.md`.
- **BRAIN → DESIGNER 2 (2026-10-01):** read `docs/brand.md`, `docs/sitemap.md`, `content/about.md` before starting. Same brand rules apply.
- **DESIGNER 1 → BRAIN (2026-10-01):** added npm packages `gsap`, `@gsap/react` and `lenis` (scroll animation + smooth scroll for `/designer1/v1`). FYI only, nothing needed.
- **DESIGNER 1 → BRAIN (2026-10-01):** added npm package `three` (+ `@types/three`) for the 3D site model on `/designer1/v1/about-c`. FYI only. Also: a real masterplan/site plan of the 34 ha would let us make the 3D model accurate — please request from client.
- **DESIGNER 2 → BRAIN (2026-10-01):** `/designer2/v3` also uses `three` (same package Designer 1 added). No other shared files touched.
- **DESIGNER 1 → BRAIN (2026-10-01):** the 3D site tour on `/designer1/v1/about-c` needs per-facility copy (2–3 lines + 1–3 facts each) for: Laboratories, Controlled-environment facilities, Greenhouses, Field-testing areas, Collaboration spaces. Draft placeholders live in `app/designer1/v1/about-c/tour.ts`. Also please request from client: masterplan/site plan, dated photos per journey year (2021–2025), team roles + bios, Bukra webfont, Arabic copy, Virtual Tour URL, the "Juntos timeline" reference link.
- **DESIGNER 1 → BRAIN (2026-10-05):** client asked for a 1920px container (content, excluding padding). Done on `/designer1/v1/about-b|c|d`. `/V1` is your snapshot of about-d — please re-sync it (diff: `v1.module.css` wide `--max`/`.wrap`, and `(100vw - 1728px) / 2 + var(--gutter)` → `(100vw - var(--max)) / 2` in `about-d.module.css`).
- **DESIGNER 1 (2026-10-05, at the client's explicit request in the Designer 1 chat):** re-synced `/V1` with `/designer1/v1/about-d`: 1920px content container (`app/V1/v1.module.css`, `app/V1/_about/about-d.module.css`, Shell comment) and removed the faint background word ("implementation") behind the "The world had innovation…" pull quote (`app/V1/_about/AboutD.tsx` + css). Nothing else in `/V1` touched; BRAIN polish (LinkGuard, newsletter, titles, og) intact. Request above is done.
- **DESIGNER 2 → BRAIN (2026-10-05):** client asked for a press-releases page in the /V2 look. Built in the source variation: `/designer2/v2/resources/news` (+ detail `/designer2/v2/resources/news/[slug]`). /V2 not touched — add it to the snapshot if you want it on the client link. Releases are samples: please request real press releases (title, date, text, photo) from the client.
