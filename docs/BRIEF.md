# Silal IO website — project brief

Single source of truth for every Claude chat working on this repo. Update this file when a decision is made; don't keep decisions only in chat.

## ⚠ Read these before designing (mandatory for every designer)
| File | What |
|---|---|
| `docs/brand.md` | **Brand rules**: logo files + usage, colours (hex), typography (29LT Bukra), tagline, visual language. Not optional. |
| `docs/sitemap.md` | **Navigation + page names**, mapped to our 23 templates (sitemap v2, 2026-10-28). Use the 6 menu labels exactly. |
| `content/about.md` | **Final About IO copy** (client-supplied, use verbatim). |
| `content/team.md` | **Team status**: who has photos, which files to use, what's missing. |
| `content/innovation-venture-platforms.md` | **Innovation & Venture Platforms**: everything about the 4 platforms (Farm Innovation Fund, Incubation, Accelerator = Unbreakable Harvest, Agricultural Challenges = Al Miyah) + the plan for the new hub/detail pages in the Silal style. |
| `public/brand/*.svg` | Real logo: `io-lockup.svg`, `io-lockup-reversed.svg`, `io-mark.svg`. Replace any placeholder logo. |
| `docs/source/` | Original client PDFs (guidelines, About copy, sitemap). |

## Project
- Client: **Innovation Oasis (IO), part of Silal**: Silal's R&D and venture engine. 34-hectare agri-food innovation campus beside Al Foah Farm, Al Ain, UAE. Inaugurated 2024. CEO: Dr. Shamal Mohammed.
- Tagline: **Advancing Agri-food Systems** / نحو أنظمة زراعة وغذاء متطورة
- Core line: "If it works here, it can work anywhere."
- Live site: https://silal-io.vercel.app/ (Vercel auto-deploys `main`).
- Stack: **Next.js** (App Router, TypeScript) on Vercel. Root `/` = neutral page (logo only, no links). There is no index page of designs anywhere on the site; the team link list is `docs/links.md`.

## Chats and who owns what
| Chat | Role | Owns (only writes here) | Live URL |
|---|---|---|---|
| BRAIN (content alignment) | Content, copy, assets, sitemap, decisions, shared shell | `docs/`, `assets/`, `content/`, `public/photos/`, `public/brand/`, root `app/layout.tsx` + `app/page.tsx`, `package.json` | https://silal-io.vercel.app/ |
| DESIGNER 1 | Own design direction(s), full site in Next.js | `app/4fe86354b2/**`, `public/4fe86354b2/**`, `docs/designer1.md`, your section of `docs/links.md` | pages under `/4fe86354b2/...` (the bare `/4fe86354b2` is a 404 on purpose) |
| DESIGNER 2 | Own design direction(s), full site in Next.js | `app/390b3d94a5/**`, `public/390b3d94a5/**`, `docs/designer2.md`, your section of `docs/links.md` | pages under `/390b3d94a5/...` (the bare `/390b3d94a5` is a 404 on purpose) |
| BRAIN (client presentation) | Polished client-facing copies of chosen designs. **Designers: don't edit these.** | `app/V1/**`, `app/V2/**`, `app/V3/**`, `public/V1..V3/**`, `proxy.ts` | /V1 · /V2 · /V3 |

### Client presentation links (/V1, /V2, /V3)
Snapshots of chosen About pages, given to the client without the designer URLs. Self-contained copies (code, styles, assets); they do not change when the designer folders change.

| Client link | Copied from | Copied at |
|---|---|---|
| https://silal-io.vercel.app/V1 | `/4fe86354b2/v1/about-d` | `e0ddf4a` |
| https://silal-io.vercel.app/V2 | **homepage (LAIN Concept 1, static HTML in `public/homepage-concept-1/v2/`, rewrite in `next.config.ts`)** — inner pages: `/V2/about` (was `/V2`, from `/390b3d94a5/v2/about`), `/V2/resources/news` | 2026-10-13 |
| https://silal-io.vercel.app/V3 | **homepage, LAIN Concept 1 with the V1-style directory menu** (static HTML in `public/homepage-concept-1/v3/`, rewrite in `next.config.ts`); inner pages: `/V3/about` (was `/V3`, `/390b3d94a5/v6/about`, `e0ddf4a`) | 2026-10-13 |
| https://silal-io.vercel.app/V2/resources/news (+ articles) | `/390b3d94a5/v2/resources/news` | `404bb07` |
| https://silal-io.vercel.app/V3/resources/news (+ articles) | `/390b3d94a5/v6/resources/news` | `404bb07` |
| https://silal-io.vercel.app/V3/resources/newsroom | `/390b3d94a5/v6/resources/newsroom` | `404bb07` |

- Only polish allowed on these, never layout or design changes; the originals stay untouched.
- /V2 and /V3 use route groups so each snapshot keeps the chrome it was copied with: `app/Vn/(about)/` = the About snapshot (URL `/Vn`), `app/Vn/(news)/` = the News snapshot (URL `/Vn/resources/...`). Each group is self-contained (own layout, components, `_lib`). The About footers' "News & Media" link points to `/Vn/resources/news`.
- Short aliases `/V2/news` and `/V3/news` redirect to `/Vn/resources/news` (`proxy.ts`).
- News entries are samples until the client sends real press releases.
- Only the pages listed above exist in each copy. Links to unbuilt pages point at `SOON` ("#") in each copy's `_lib/site.ts` and are made inert by `LinkGuard` (no 404s, no designer URLs).
- Lowercase `/v1`–`/v3` redirect to `/V1`–`/V3` (`proxy.ts`).
- Pages are `noindex` and have share previews (`public/Vn/og.jpg`).

### URL structure (read this, every chat)
Three kinds of links. Never mix them up.

| Kind | Pattern | Who sees it | Who edits |
|---|---|---|---|
| **Client links** | Since 2026-10-23 the tidy links `/Homepage-concept-1`, `/Homepage-concept-3`, `/New-Homepage/V1`, `/About/V1`, `/News/V1`, `/News-Detail` (list in `docs/links.md`); the older `/V1`, `/V2`, `/V3`, `/V2/resources/news`, `/V3/resources/news`, `/V3/resources/newsroom` still work | The client. The only links ever sent to the client. | BRAIN only (frozen, polished snapshots) |
| **Design routes (internal)** | Designer 1: `/4fe86354b2/<design>/<page>` (e.g. `/4fe86354b2/v1/about-d`). Designer 2: `/390b3d94a5/<design>/<page>` (e.g. `/390b3d94a5/v6/about`). | Team only. Never send to the client, never link to them from client pages or from `/`. | The owning designer |
| **Root** | `/` | Anyone | BRAIN. Logo only, no links. |

- Folder = URL: `app/4fe86354b2/v1/about-d/page.tsx` → `/4fe86354b2/v1/about-d`. Designer assets: `public/<your folder>/...` → `/<your folder>/...`.
- Inside your designs, build every internal link from your design's `BASE` constant (e.g. `const BASE = "/390b3d94a5/v6"`). Never hard-code another folder name.
- No index/directory pages: no `page.tsx` at `app/4fe86354b2/` or `app/390b3d94a5/`, no lists of designs anywhere on the site. When you add a page, add its link to your section of `docs/links.md` instead.
- Dead names, never use again: `/designer1`, `/designer2`, `/D1`, `/D2` (the client saw the old ones). No folders, links, redirects or mentions in page titles/URLs.
- Getting a design onto a client link: the designer builds it in their own folder, then asks BRAIN under "Requests". BRAIN snapshots it into `/V…`. Designers never edit `app/V*`/`public/V*`; changes in your folder do not reach the client link until BRAIN re-syncs.
- Each design is self-contained: its own `layout.tsx`, components and styles inside its folder (CSS Modules or scoped styles; no global CSS that leaks into other designers' routes).

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
- Sitemap image: `docs/sitemap-2026-10-28.webp` (current); `docs/sitemap.png` (2026-10-01, superseded).

## Open inputs (from client)
- [x] Brand guidelines (logo, colours, type): `docs/brand.md`
- [x] Sitemap: `docs/sitemap.md`
- [x] About IO copy: `content/about.md`
- [ ] Official logo master files (SVG/AI). Current SVGs are extracted from the guidelines PDF; fine for design, confirm before launch.
- [ ] **29LT Bukra webfont files (WOFF2) + web licence.** Until then use the stand-in described in `docs/brand.md`.
- [~] Team headshots: **all 9 received** (CEO Shamal + Ahmed, Ali, Nadia, Sagar, Caitlin, Francisco, Jude, Mohsin), plus Talabi (not in About list: confirm whether to show) and an `Unknown Name/` folder (4 photos, unidentified man, files misnamed `Sagar-4…7`: client to identify). See `content/team.md`. **Still missing: all bios + role titles.** Filename prefixes don't match people; folder = person.
- [~] Innovation & Venture Platforms: source material received 2026-10-28 (zip: Accelerator, Incubation, Farm Innovation Fund, Al Miyah Challenge, inspo). Summarised in `content/innovation-venture-platforms.md`; still missing listed in its §9.7.
- [ ] Copy for all other pages (Home, category hubs, details…). Until supplied, use placeholder copy that follows the About page's tone.
- [ ] Partners: how to display partners & manage partnership enquiries (open question on sitemap).
- [ ] Confirm contact details (phone in stationery template may be placeholder).
- [ ] Decide: IO Academy Training (internal page vs external link), Silal Careers Centre (in/out of scope).

## Decisions log
- 2026-10-01: Assets kept as untouched originals with original filenames.
- 2026-10-01: Build as Next.js on Vercel; `main` = production.
- 2026-10-01: Two DESIGNER chats each build their own versions under `/4fe86354b2` and `/390b3d94a5`; BRAIN handles content, assets and the shared shell.
- 2026-10-01: Shared web copies of all photos in `public/photos/` (originals untouched in `assets/photos/`, excluded from Vercel deploy via `.vercelignore`).

- 2026-10-01: **Brand guidelines are binding for all designers.** Designers explore layout, composition, motion and photo use; logo, colour palette, typography and tagline come from `docs/brand.md`.
- 2026-10-01: Navigation = the 6 sitemap categories (`docs/sitemap.md`), same labels in every design.
- 2026-10-01: Interim web font until Bukra webfont arrives: Readex Pro (Latin + Arabic), held in one CSS variable for an easy swap.
- 2026-10-02: Client presentation links /V1 (Designer 1 About D), /V2 (Designer 2 v2 About), /V3 (Designer 2 v6 About): polished snapshots, owned by BRAIN.
- 2026-10-05: News snapshots added to the client links: /V2/resources/news, /V3/resources/news, /V3/resources/newsroom (from Designer 2 v2/v6, polish only). Owned by BRAIN.
- 2026-10-05: Designer routes renamed `/designer1` → `/4fe86354b2`, `/designer2` → `/390b3d94a5` (incl. `app/` and `public/` folders) because the client had seen the old links. Old URLs return 404 (no redirect, so they don't reveal the new location). Root `/` is now a neutral page with no links. Never recreate `designer*` folders.
- 2026-10-05: `/D1`, `/D2` were still guessable: moved to random `/4fe86354b2` (Designer 1) and `/390b3d94a5` (Designer 2). Their index pages are deleted (parent URLs 404); the link list is `docs/links.md`. Never add a directory page back on the site.
- 2026-10-12: Homepage Concept 1 "Built by the Desert" (static HTML prototype from the LAIN Figma) added at `/homepage-concept-1/v2`: files in `public/homepage-concept-1/v2/`, one rewrite in `next.config.ts`, notes in `prototypes/silal-homepage/`. Team link only (noindex, not linked from `/`). Touches no designer, `/V*` or root files.
- 2026-10-13: Homepage Concept 3 "From Desert to Discovery" (static HTML prototype from the LAIN Figma, Concept 3 column) added at `/homepage-concept-3`: files in `public/homepage-concept-3/` (images in `media/img/`), one more rewrite in `next.config.ts`, spec in `prototypes/silal-homepage/DESIGN-SPEC-CONCEPT-3.md`, how-to in `prototypes/silal-homepage/ADD-A-CONCEPT.md`. Team link only (noindex, not linked from `/`). Touches no designer, `/V*` or root files.
- 2026-10-23: `New Update 23 Oct/` (repo root) = copy-only snapshot of the latest client pages (Homepage-concept-1, Homepage-concept-3, New-Homepage [files to come], About, News, News-Detail, Team [not built]). Not deployed (`.vercelignore`), not built (`tsconfig.json` exclude); editing it changes nothing live.
- 2026-10-23: **Silal Links Tidy Up.** Client links are now `/Homepage-concept-1`, `/Homepage-concept-3`, `/New-Homepage/V1`, `/About/V1` (= V3 About), `/News/V1` (= V3 News), `/News-Detail` (= V3 press release; `/News-Detail/<slug>` for others). `/Team/V1` waits for the Team page. Done with rewrites in `next.config.ts`; the `/V1`, `/V2`, `/V3` links stay as they were. New homepage added at `public/new-homepage/` (sources in `prototypes/new-homepage/v2/`, helix from the client's SVG, no fade animations).
- 2026-10-28: **Sitemap v2** from the client (`docs/sitemap-2026-10-28.webp`, transcribed in `docs/sitemap.md`). New: IO Academy Training → IO Academy Course page (CMS, Delphy-style) → Registration form → Dynamic confirmation (templates #22, #23). Key now marks CMS templates, dynamic forms and footer pages. Rest unchanged.
- 2026-10-28: **Innovation & Venture Platforms source material** (client zip) summarised in `content/innovation-venture-platforms.md`: facts per platform, verbatim Accelerator website copy, conflicts (deadline 3 Jul 2026 used, title CEO, spelling IO), do-not-publish list, and the new-page plan (hub = template 5, 3 × template 7, Agricultural Challenges = template 8) in the homepage style. **The repo is public, so the original zip files are not committed** (Ibex documents are marked proprietary and confidential).
- 2026-10-28: *(superseded the same day by the next entry)* **Innovation & Venture Platforms page built** at `/Innovation-Venture-Platforms` (also lowercase). One hub page: hero (one slide per platform), intro + numbers, "One pathway, four ways in" ladder, then a chapter each for Farm Innovation Fund, Incubation, Accelerator (Unbreakable Harvest, dark band, verbatim client copy) and Agricultural Challenges (Al Miyah + FoodTech Challenge), why IO, focus areas, CEO quote, key dates, enquiry form (preview, sends nothing). Navbar, menu and footer are taken from `/new-homepage-v2` by `prototypes/innovation-venture-platforms/build.py` (run it after the homepage shell changes). Copy beyond the client documents is draft (see `content/innovation-venture-platforms.md` §8–9). New photos: `assets/photos/Farm Innovation Fund Photos/` (68, Innovation Day 26 Jul 2026). The two FoodTech Challenge zips sent with it are lower-resolution copies of `Awards/` and `Final Pitches/` already in the repo, so they were not added again.
- 2026-10-28: **Innovation & Venture Platforms live on `/innovation&venture`** (client request): hub at `/innovation&venture`, sub pages at `/innovation&venture/farm-innovation-fund`, `/incubation`, `/accelerator`, `/agricultural-challenges`, `/enquire`. Rewrites in `next.config.ts` onto `public/innovation-venture-platforms/*.html`; the older `/Innovation-Venture-Platforms/...` links and an encoded `%26` form redirect (307) to the new URLs. Inside the HTML the `&` is written `&amp;` (build.py does it). Merged to `main` from `claude/awesome-fermat-5h3gq0`.
- 2026-10-29: **Innovation & Venture Platforms v2 live on `/innovation&venture-v2`** (client request: "-v2" so it differs from yesterday's link): hub `/innovation&venture-v2`, sub pages `/innovation&venture-v2/farm-innovation-fund`, `/incubation`, `/accelerator`, `/agricultural-challenges`, `/enquire`. Review rounds 3–10 (one type/grid system, two button types, 3D scenes, scroll-driven cohort/funnel/gates, B1 soil profile, homepage helix). `build.py` now writes `public/innovation-venture-platforms-v2/`; the v1 HTML in `public/innovation-venture-platforms/` is kept as it was on 2026-10-28 (only new images added to its `img/`, which both versions use). Rewrites in `next.config.ts`; the encoded `%26` form redirects too.
- 2026-10-28 (later): **Innovation & Venture Platforms rebuilt to follow sitemap v2.** The key says "Sub page = normal content page", so the four sub pages are real pages, not sections of the hub: `/Innovation-Venture-Platforms` (primary category page) + `/Farm-Innovation-Fund`, `/Incubation`, `/Accelerator`, `/Agricultural-Challenges` under it, plus `/Enquire` (form). Agricultural Challenges carries the sitemap's "→ Link to: Program Management as a Service" as a cross-link block (no page of its own; inert until that service page exists); the category bar under the header shows the same structure. At the client's request every page has its own layout and none repeats the homepage/About layouts; only the header, menu and footer are shared (copied from `/new-homepage-v2` by `build.py`). Note: the sitemap groups FIF, Incubation and Accelerator under one template (#7 Venture Programme Detail); here they deliberately differ, so if a CMS template is needed later they share components (category bar, breadcrumb, facts, CTA), not one fixed layout.

## Requests (cross-chat)
_Add requests here, e.g. "DESIGNER 1 → BRAIN: need hero copy for Home"._

- **BRAIN → DESIGNER 1 (2026-10-01):** brand guidelines arrived after v1. Please align v1 (or start v2): replace the placeholder logo with `/brand/*.svg`; switch the palette to the brand colours (IO Blue `#3CA7D2`, Charcoal `#595453`, Grey `#7F8284`, Light grey `#F1F1F1`; greens/orange/pink only as accents. Sand and `#1689CF` are not brand colours); swap Sora/Inter for the brand type stand-in (Bukra → Readex Pro for now); use the sitemap's 6 nav labels; About page copy is final in `content/about.md`. Log what you changed in `docs/designer1.md`.
- **BRAIN → DESIGNER 2 (2026-10-01):** read `docs/brand.md`, `docs/sitemap.md`, `content/about.md` before starting. Same brand rules apply.
- **DESIGNER 1 → BRAIN (2026-10-01):** added npm packages `gsap`, `@gsap/react` and `lenis` (scroll animation + smooth scroll for `/4fe86354b2/v1`). FYI only, nothing needed.
- **DESIGNER 1 → BRAIN (2026-10-01):** added npm package `three` (+ `@types/three`) for the 3D site model on `/4fe86354b2/v1/about-c`. FYI only. Also: a real masterplan/site plan of the 34 ha would let us make the 3D model accurate — please request from client.
- **DESIGNER 2 → BRAIN (2026-10-01):** `/390b3d94a5/v3` also uses `three` (same package Designer 1 added). No other shared files touched.
- **DESIGNER 1 → BRAIN (2026-10-01):** the 3D site tour on `/4fe86354b2/v1/about-c` needs per-facility copy (2–3 lines + 1–3 facts each) for: Laboratories, Controlled-environment facilities, Greenhouses, Field-testing areas, Collaboration spaces. Draft placeholders live in `app/4fe86354b2/v1/about-c/tour.ts`. Also please request from client: masterplan/site plan, dated photos per journey year (2021–2025), team roles + bios, Bukra webfont, Arabic copy, Virtual Tour URL, the "Juntos timeline" reference link.
- **DESIGNER 1 → BRAIN (2026-10-05):** client asked for a 1920px container (content, excluding padding). Done on `/4fe86354b2/v1/about-b|c|d`. `/V1` is your snapshot of about-d — please re-sync it (diff: `v1.module.css` wide `--max`/`.wrap`, and `(100vw - 1728px) / 2 + var(--gutter)` → `(100vw - var(--max)) / 2` in `about-d.module.css`).
- **DESIGNER 1 (2026-10-05, at the client's explicit request in the Designer 1 chat):** re-synced `/V1` with `/4fe86354b2/v1/about-d`: 1920px content container (`app/V1/v1.module.css`, `app/V1/_about/about-d.module.css`, Shell comment) and removed the faint background word ("implementation") behind the "The world had innovation…" pull quote (`app/V1/_about/AboutD.tsx` + css). Nothing else in `/V1` touched; BRAIN polish (LinkGuard, newsletter, titles, og) intact. Request above is done.
- **DESIGNER 2 → BRAIN (2026-10-05):** client asked for a press-releases page in the /V2 look. Built in the source variation: `/390b3d94a5/v2/resources/news` (+ detail `/390b3d94a5/v2/resources/news/[slug]`). /V2 not touched — add it to the snapshot if you want it on the client link. Releases are samples: please request real press releases (title, date, text, photo) from the client.
- **DESIGNER 2 → BRAIN (2026-10-05):** same request for the /V3 look: built in the source variation, `/390b3d94a5/v6/resources/news` (+ detail `/390b3d94a5/v6/resources/news/[slug]`); v6 header capsule now names the current section. /V3 not touched — add to the snapshot if wanted. Same sample releases (need real ones from the client).
- **DESIGNER 2 → BRAIN (2026-10-05):** also for /V3: a News & Media feed page after Hut 8 (client video), `/390b3d94a5/v6/resources/newsroom`. /V3 not touched; add to the snapshot if wanted. Sample entries (now 19) need real news from the client.
- **BRAIN (2026-10-05):** done for all three news requests above: snapshotted into `/V2/resources/news`, `/V3/resources/news`, `/V3/resources/newsroom` (at `404bb07`). Later changes in `/390b3d94a5/...` are not carried over automatically; ask BRAIN to re-sync.
- **DESIGNER 2 (2026-10-06, at the client's explicit request in the Designer 2 chat):** the client sent a release-page design (`news_detail_v2.pdf`) and asked for it on `/V2/resources/news` (no new page). Built in `/390b3d94a5/v2/resources/news/[slug]` and applied to the snapshot: `app/V2/(news)/resources/news/[slug]/page.tsx`, `.../news/news.module.css`, `app/V2/(news)/chrome.module.css` (centred kicker, stepped title/lead, narrower body, share icons, no crop marks on the release page, header bar in the footer's 1440px frame). BRAIN's `SOON` link and everything else in `/V2` untouched. Please keep this when you next re-sync. Update (2026-10-06, `news_detail_v2.2.pdf`): title 54px centred + centred lead, more room above the footer; same two /V2 files again.
- **DESIGNER 2 (2026-10-06, at the client's explicit request in the Designer 2 chat):** `news_detail_v3.pdf`: share buttons on the `/V3/resources/news/[slug]` release page are now icon buttons (LinkedIn, X, mail). Changed in `app/V3/(news)/resources/news/[slug]/page.tsx` and `news.module.css` only (plus the v6 source). Please keep when you next re-sync.
- **DESIGNER 2 (2026-10-06, at the client's explicit request in the Designer 2 chat):** client saw cut-off descenders in the `/V3/resources/news/[slug]` title. Fixed in `app/V3/(news)/resources/news/news.module.css` (`.page :global(.ln-mask)` padding + negative margin), same as the v6 source. Please keep when you next re-sync.

- 2026-10-13: **/V2 is now the full site preview: homepage + inner pages with ONE shell.** Client feedback (WhatsApp, Adam): the inner pages felt disconnected from the front page (only the nav set them apart) and the footer should be consistent (black theme). Decisions: (1) `/V2` = the LAIN homepage (Concept 1, updated); the old About page moved to `/V2/about`, news stays `/V2/resources/news`; `/homepage-concept-1` and `/homepage-concept-1/v2` serve the same page. (2) Inner pages use the homepage's top-right capsule (logo pill + circular menu button) and the same full-screen overlay menu (6 sitemap categories + category panel); the old 6-item top nav + mega menu are gone. (3) Inner pages use the homepage's black footer. (4) Homepage interactions: lab card stays hover; the three centre cards (Agri Robotics & AI, Smart Growing Systems, Crop Resilience) open full screen ON CLICK (scroll / arrows / buttons move between them, Close returns) and the page scroll goes straight on to Innovation & Venture Platforms; venture tiles and talent rows are click-through links to inner pages (inert `#` until those pages exist). Centre 2/3 copy is a placeholder (card captions).
- 2026-10-13 (round 12, client feedback): (1) `/V2` footer: the Enquire circle above the logo is gone (looked tacky); headline balanced. (2) `/V2` menu: the blue rim (blue circle leading the dark one) is thinner (lag .11s → .07s). Both done on the homepage and in the React shell (`app/V2/_shell`). (3) **/V3 = the same homepage with a different menu**, mirroring the /V2 move: homepage at `/V3` (`public/homepage-concept-1/v3/index.html`, rewrite in `next.config.ts`, also `/homepage-concept-1/v3`); the old V3 About page (designer 2 v6) moved to `/V3/about`, news stays `/V3/resources/news`; the v6 chrome of those pages is untouched (only their About links and `ABOUT` const changed). V3 menu: the V1 navigation (utility strip, logo lockup, six categories + their dropdown lists, Enquire) opened up into one full-screen white directory (Readex Pro, IO blue, hairlines): all six categories side by side as columns (photo, number, title, blurb, sub-links, Overview link), hover spotlights one (blue 3px top rule, photo colour + zoom, the rest dim); closed it is a 'Menu' pill + two-line hamburger (V1's toggle). A curved white curtain drops from the top with a thin blue wave on its edge; mobile = accordion like the V1 mobile menu. Esc / ←→ keys / Close button.
- 2026-10-13 (round 13, new Figma flow + NEW ASSET zip, `/V3` homepage only; `/V2` untouched): (1) hero copy is now "Step into the Innovation Oasis". (2) The flight video now STOPS on the dunes (video second 15.6, scroll unit 8.2; no footage after that). From there the picture softens (two pre-blurred stills of that frame, `x_hold1/2`, crossfade in), the title blurs away (the only `filter` in the page, one small text layer), then the new aerial Al Foah photo (`x_farm`) takes over under "Why Al Foah?" and the quinoa field (`x_quinoa`) under the 34 ha / 04 stats. (3) New images (`public/homepage-concept-1/v3/media/img/x_*.jpg`, web copies of the design exports, transparent rounded corners cropped off; `g_x_*` = pre-blurred glows): centre cards + detail views = drone `x_drone` / lab chamber `x_chamber` / greenhouse `x_green`; lab rows: Soil & Water Lab `x_manlab`, Crop Health Lab `x_pipette`; Farm Innovation Fund tile `x_field`; virtual tour `x_tour`. (4) Copy: centre 2/3 now carry their real names (Abiotic Resilience & Crop Genomics (ARC-GEN), Advanced Controlled Environment Ag (CEA)); third engagement card CTA is "Collaborate". Not taken over from the flow: its new footer frame (the V1-style dark footer stays) and the red-ghutra close-up behind "Technology that starts in the field" (photo not in the zip; the drone stays there).

- 2026-10-13 (round 13b, `/V3` only): the "One Oasis. Three ways in." section (nav: Find your door) is rebuilt per the new Figma frame: one tall high-res render (`x_sky`, the NEW ASSET sky/plaza render) starts on the sky under the centred title and the whole picture glides DOWN to the building and plaza while the title docks and the three cards arrive. Pure vertical pan (no zoom), transform only (no per-frame background repaint). The old crop-window zoom is gone.
- 2026-10-13 (round 13c, `/V3`): the hero no longer stops before it blurs, and there are NO stacked blur images: the video element itself is blurred frame by frame by the scrub (blur 0 → 30px and scale 1 → 1.1 over the last stretch of the footage, unit 7.1–8.8, i.e. full blur exactly on the video's last frame, 15.6 s); the title blurs out with it; the Al Foah photo starts at 8.7. Known: the video carries a small "Ai" watermark in its top-left corner (source file).
- 2026-10-13 (round 14, `/V3`, client feedback on smoothness): (1) every background change is now ONE gesture, a gently curved sheet that rises from the bottom with a slight zoom-settle parallax, no cross-fades: location photos (aerial farm, quinoa), location → "what you'll pass" (`glowA`), → "what we're growing" (`glowT`), → venture (`bgB`), → "One Oasis" (`bgR`), → talent (`glowE`). The sheet (`.cw`) is a 1.2×-wide element with elliptical top corners that only moves with a transform (no clip-path, no per-frame re-mask); the layer inside is `CR` taller than the screen so the arc is filled with picture. The old layer stays until covered, then is released. (2) Title dock: Inter is now the variable font (`wght@400..600`) so the 500 → 600 weight tween is continuous (static weights jumped = the bold/regular glitch), plus `text-rendering: geometricPrecision`. (3) Ladder (bottom right): fill is a transform (`scaleX`) instead of a per-frame gradient repaint, hover/active width is a transform too. (4) Venture photo crop move is x/y/scale on a fixed-size element (was a per-frame background repaint). (5) Menu close: the logo + Menu capsule only returns once the white sheet has lifted past it. (6) Smaller: the lab title no longer rises over the fading lab card; location stats no longer overlap the paragraph; Lenis lerp .085. Measured only in headless software rendering (rounded-corner sheets cost more there than on a GPU); please judge smoothness on a real machine.
- 2026-10-13 (round 14b, `/V3`): the title dock (center -> header) is transform only (y + scale, then a short cross-fade to the real 12 px header); no font-size / weight / line-height tweens any more (those re-laid-out and re-rasterised text every frame). The farm sheet now starts rising at unit 7.5 while the video is still blurring (7.1-8.8): blur and rise are one movement.
- 2026-10-13 (round 14c, `/V3`): title dock hands over to the real header instantly on the last frame (no cross-fade, never two texts; they land within 0.5 px); header weight 500 = title weight so the swap has no weight pop. Talent list: rows no longer travel separately over their own separator lines (that was the glitch); the list and its lines now enter after the glowE sheet has landed; hairlines are 1px (half-pixel lines vanished at fractional positions).
- 2026-10-13 (round 15, `/V3`): (1) mega menu: pictures and texts rest at full strength; hovering one column dims the OTHERS (wash on their pictures, lighter text). Columns share rows via CSS subgrid, so titles, blurbs, lists and the Overview links sit on common lines whatever the title length (verified: identical tops in all six columns at 1440 and 1920; mobile accordion unchanged). (2) "Every structure here answers a question the desert asked." now docks to the top like the other section titles (same transform dock, colour tweened to the caption's, instant hand-over); the lab card enters after it has cleared. (3) Docks are slower and softer (sine ease, +0.3 to +0.6 u) so the move reads as one smooth gesture. (4) Less dead scroll: new idle-scroll cuts in CUTS, shorter hover dwells (lab, trio, eng hold 1.6u -> 1.1u), scroll distance per unit 0.70 -> 0.62 of the viewport (mobile 0.62 -> 0.55), Lenis lerp .075. Total journey 44.6 -> 42.2 units.
- 2026-10-13: Concept 3 main link `/homepage-concept-3` now serves the latest version (was built as variant `/homepage-concept-3/V3`, removed after publishing to main; client submission link): fixed journey panel instead of shifting left tab, eased numbers, curved curtain masks, redesigned footer. Details in `prototypes/silal-homepage/README.md`. Does not touch Concept 1's `/V3`.
- 2026-10-13 (round 16, `/V3`): section titles never show over the previous section any more. Each title ("Every structure…", "Where innovation takes root.", "Innovation & Venture Platforms", "One Oasis…") starts below the screen and rides up only after its background sheet has passed that part of the screen (no fade-in); one continuous cubic-Hermite y curve per title (fast entry, slow but never zero speed through the reading position, then up to the header), scale + colour in the second half, instant hand-over to the real header. The description under "Where innovation takes root." rides up the same way and travels to its place with the same second-half curve, so heading and description close the gap monotonically and never touch (measured: gap 239 px -> 13 px, no overlap). Downstream timings moved with it (lab card 16.8, three centres 24.9, venture sub 40.7, trio hover window/cut, nav targets).
- 2026-10-13 (round 17): **/homepage-concept-1 now serves the V3 page** (client link; rewrite in next.config.ts). /V3 and /homepage-concept-1/v3 serve the same file; /V2 and /homepage-concept-1/v2 still serve the previous version. The V3 page title no longer says "(V3)". Verified for four section titles (statement, root, venture, one-oasis) at 1913x962, 1440x870 and 1280x720 with Lenis on: a title is never above its background sheet's edge while that sheet is still rising.
- 2026-10-13 (round 17b): fixed the title that flashed at the centre of the screen over the previous section (client incognito screenshot): the title's y tween starts at its scroll position but its opacity switched on 0.02u earlier, so for ~12 px of scroll the title sat at its resting centre position. Titles (and the description under "Where innovation takes root.") are now parked below the screen from build time. Verified with real wheel scrolling (preloader on, DPR 2, 1946x955), forward and backward, all four titles + description: 0 overlaps (the old build reproduced it).
- 2026-10-26: **IO Academy published at `/io-academy`** (also `/IO-Academy`), at the owner's request. Static single page `public/io-academy/index.html` (library + 7 sample course detail pages, homepage header/footer, Lenis smooth scroll, noindex), two rewrites in `next.config.ts`. Sources and the generator: `New Update 23 Oct/Training-Detail/source/` (detail) and the artifact build. All courses, dates, fees are samples; only Dr. Shamal Mohammed is a real trainer (CEO). Next.js version of the same pages: branches `23-oct/io-academy-page`, `23-oct/training-detail-page`.
- 2026-10-30: **Full review site published at `/full-site`**, at the owner's request: the artifact review site as one website (homepage v34 with the Innovation Oasis Method helix boxes, About IO with Our Journey, Team + 9 profile pages, News archive + 19 releases, IVP pages, IO Academy, Training Detail) linked through its own navbar/footer. Static files `public/full-site/` (noindex), made by `prototypes/about-team-news/publish.py` from the bundle `site.py` builds; Clean addresses (owner, same day): `/full-site` = homepage, `/full-site/<page>` = `<page>.html` via rewrites, old `.html` addresses redirect there; pages link with absolute `/full-site/...` paths. Existing links unchanged.
- **BRAIN → DESIGNERS 1 & 2 (2026-10-28):** sitemap updated (v2). Read the "Changes" section at the bottom of `docs/sitemap.md`. IO Academy now has course pages (one per course, Delphy-style) with a registration form and confirmation; the existing draft is `New Update 23 Oct/Training-Detail/`.
