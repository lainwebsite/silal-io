# New Homepage

Snapshot of the new homepage (About page rebuilt as the homepage, per the client PDFs). **Copy only**: the live files are `public/new-homepage/` and `prototypes/new-homepage/` and this folder is not built or deployed.

| Folder | What |
|---|---|
| `public/new-homepage/` | the page: `index.html` (single static file, 3D helix model embedded) + `img/` + `brand/`. Absolute paths (`/new-homepage/img/…`) match the live layout. |
| `prototypes/new-homepage/` | sources and rebuild notes (`README.md`): `build_about.py`, `build_home.py`, `helix3d.ts`, `site3d.ts`, `entry.ts`, `helix.glb`, `mapdots.json` |

Sections: hero, intro, 3D site model, world map, helix ("Where do you want to look first?", 3D helix from the client's `helix_3d.gltf`, one row + card + blurred photo per step, rows 3 to 7 in order), Our Journey, Latest release, footer. Smooth scroll (Lenis) and text reveal (GSAP SplitText) throughout.

Live: https://silal-io.vercel.app/New-Homepage/V1 (the version on `main`). This snapshot is the newer version from branch `23-oct/new-homepage`.
