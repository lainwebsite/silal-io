# Webflow: world map, The Arid Advantage, The Site (option B)

Section 4 of the Webflow homepage (site `silal-io`) is one HTML Embed that loads these files from Vercel (`https://silal-io.vercel.app/webflow/home/`).
Built by `prototypes/about-team-news/build_webflow_home.py` from `public/full-site/index.html`; re-run it after the artifact homepage changes, do not edit by hand.

- `fragment.html`: the sections' markup (images and photos as absolute Vercel URLs, links to `#`).
- `io-home.css`: the artifact's stylesheet, every rule scoped under `.io-home`.
- `io-home.js`: loads the fragment, then runs the artifact's page scripts for these sections (The Site is fixed to option B; Lenis, header, hero, helix and the A/B/C switch are left out).

Needs `/webflow/helix/three-helix.js` on the page first (it provides `window.mountSite`). Our Journey is in the markup but hidden, as on the artifact.
The Latest release section and the footer are native Webflow elements (classes `io-press*`, `io-footer*`).
