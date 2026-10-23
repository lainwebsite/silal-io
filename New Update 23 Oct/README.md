# New Update 23 Oct

Snapshot of the latest Silal IO client pages, taken 23 Oct 2026 from `main` (`c0ae799`).
**Copies only.** The live site and the files it is built from (`app/`, `public/`, `next.config.ts`) are not changed by this folder, and this folder is not deployed to Vercel (`.vercelignore`) or built (`tsconfig.json` exclude).

Each folder mirrors the repo layout (`app/…`, `public/…`), so every absolute path in the code (`/photos/…`, `/brand/…`, `/V2/…`) still points at a file inside the same folder.

| Folder | Live page | Copied from |
|---|---|---|
| `Homepage-concept-1/` | https://silal-io.vercel.app/homepage-concept-1 (also https://silal-io.vercel.app/V3) · version 2: https://silal-io.vercel.app/V2 | `public/homepage-concept-1/` (static HTML: `v2/`, `v3/`) |
| `Homepage-concept-3/` | https://silal-io.vercel.app/homepage-concept-3 · with the client footer: https://silal-io.vercel.app/homepage-concept-3/V1 | `public/homepage-concept-3/` (static HTML: `index.html`, `v1/`) |
| `New-Homepage/` | not built yet | files to come from the client side |
| `About/V1` · `About/V2` · `About/V3` | https://silal-io.vercel.app/V1 · https://silal-io.vercel.app/V2/about · https://silal-io.vercel.app/V3/about | `app/V1` · `app/V2/(about)` · `app/V3/(about)` |
| `News/V2` · `News/V3` | https://silal-io.vercel.app/V2/resources/news · https://silal-io.vercel.app/V3/resources/news + feed https://silal-io.vercel.app/V3/resources/newsroom | `app/V2/(news)` · `app/V3/(news)` |
| `News-Detail/V2` · `News-Detail/V3` | articles, e.g. https://silal-io.vercel.app/V2/resources/news/innovation-oasis-officially-opens | `…/resources/news/[slug]/page.tsx` |
| `Team/` | not built yet | content status in `content/team.md` |

- News articles are sample content until the client sends real press releases.
- Next.js pages (About, News, News-Detail) need: Next.js 16, React 19, `gsap`, `@gsap/react`, `lenis` (+ `three` for About V1 and V3). Versions: root `package.json`.
- Photos are the shared 2400px web copies (`public/photos/<original folder>/<original filename>`). Ultra-HD originals: `assets/photos/` (same names).
