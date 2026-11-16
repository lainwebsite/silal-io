# Webflow: world map and The Site (option B)

The world map section and The Site section of the Webflow homepage (site `silal-io`) are HTML Embeds that load these files from Vercel (`https://silal-io.vercel.app/webflow/home/`).
Built by `prototypes/about-team-news/build_webflow_home.py` from `public/full-site/index.html`; re-run it after the artifact homepage changes, do not edit by hand.

- `fragment-map.html` / `fragment-site.html`: the world map and The Site markup (images as absolute Vercel URLs, links to `#`), loaded into `#ioMap` and `#ioSite`.
- Content: The Site's places come from the Webflow **Site Place** components (`[data-site-place]`, hidden list in The Site section); the helix steps from the **Method Step** components (`[data-method-step]`). Lists and photo URLs in the props are separated by `|`.
- `io-home.css`: the artifact's stylesheet, every rule scoped under `.io-home`.
- `io-home.js`: loads the fragment, then runs the artifact's page scripts for these sections (The Site is fixed to option B; Lenis, header, hero, helix and the A/B/C switch are left out).

Needs `/webflow/helix/three-helix.js` on the page first (it provides `window.mountSite`). Our Journey is in the markup but hidden, as on the artifact.
The Arid Advantage, Latest release (component **News Feature**) and the footer are native Webflow elements (classes `io-why*`, `io-press*`, `io-footer*`).
