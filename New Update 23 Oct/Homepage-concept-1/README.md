# Homepage Concept 1

Static HTML (no build needed). Live: https://silal-io.vercel.app/homepage-concept-1

- `public/homepage-concept-1/v3/index.html` — the latest Concept 1, with the V1-style directory menu. Live at https://silal-io.vercel.app/homepage-concept-1 and https://silal-io.vercel.app/V3.
- `public/homepage-concept-1/v2/index.html` — Concept 1 with the pill menu + black footer. Live at https://silal-io.vercel.app/V2.
- `media/` — images and video used by each version. v3 also loads media from `v2/media/`.
- `public/brand/`, `public/V1/brand/` — logo files the pages load.
- `next.config.ts` — copy of the site config; its `rewrites()` map these files to the URLs above.

Open locally: serve this folder's `public/` as the web root (e.g. `npx serve public`) and go to `/homepage-concept-1/v3/`. Paths are absolute, so opening the HTML file directly from disk will miss images.
