# About

Next.js source (App Router) + every file each page loads.

| Folder | Live | Source |
|---|---|---|
| `V1/` | https://silal-io.vercel.app/V1 | `app/V1/` (About D, 3D site model; model files in `public/V1/`) |
| `V2/` | https://silal-io.vercel.app/V2/about | `app/V2/(about)/` + shared menu/footer `app/V2/_shell/` |
| `V3/` | https://silal-io.vercel.app/V3/about | `app/V3/(about)/` (3D site model) |

Each `Vn/` holds exactly the page, its layout and everything they import (`app/…`), plus the photos, logos and model files the page loads (`public/…`).
