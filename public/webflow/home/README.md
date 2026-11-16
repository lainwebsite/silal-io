# Webflow: world map (homepage)

The world map section of the Webflow homepage (site `silal-io`) is native Webflow (heading, legend, filter buttons with `data-layer`); only the dot map is loaded from Vercel (`https://silal-io.vercel.app/webflow/home/`).
Built by `prototypes/about-team-news/build_webflow_home.py` from `public/full-site/index.html`; re-run it after the artifact homepage changes, do not edit by hand.

- `map-dots.html`: the world map's dot SVG, loaded into `#ioMapDots`. Dot colours use the design-system variables `Map / No data, Low, Medium, High, UAE`.
- `io-home.css`: the artifact's stylesheet, every rule scoped under `.io-home`.
- `io-home.js`: loads the dots, then runs the artifact's page script for the map (heat spread, filters), parallax, counters and text reveal.

The Site is native Webflow too: CMS collection **Site Places** → Collection List → component **Site Place Card**. Its script is `/webflow/site/io-site.js` + `io-site.css` (see that folder).
The Arid Advantage, Latest release (component **News Feature**) and the footer are native Webflow elements.
