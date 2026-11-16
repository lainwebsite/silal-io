# Webflow: The Innovation Oasis Method (3D helix)

Section 3 of the Webflow homepage (site `silal-io`) loads these files from Vercel (`https://silal-io.vercel.app/webflow/helix/`).
Copied from the helix of `public/full-site/index.html` (same CSS values, same scroll logic, same three.js bundle and model).

- `embed.html`: the code inside the Webflow HTML Embed (markup + script tags).
- `io-helix.css`: helix, curtain, button and text-reveal rules, scoped where they could touch Webflow styles.
- `io-helix.js`: pinned curtain, scroll -> helix rotation, circle reveal per step, text reveal (GSAP SplitText from jsDelivr).
- `three-helix.js`: the artifact's three.js bundle (exposes `window.mountHelix`).
- `helix.glb`: the client's helix model (decoded from the artifact's base64).

Photos come from `/full-site/img/` (bg_0-4.jpg, hx_*.jpg). Changing these files changes the live Webflow page after Vercel deploys `main`.
