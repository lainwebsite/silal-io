# Webflow: The Site (homepage)

Everything visible is native Webflow, edited in the Designer and the CMS:
- Section `The site` → `io-site-curtain` [data-site] → `io-site-panel` (sticky) with `io-site-stage` [data-site-stage] (3D canvas), `io-site-head`, `io-site-cards` (Collection List of **Site Places**, one **Site Place Card** component per item), `io-site-tabs` [data-site-tabs] and `io-site-note`.
- Edit places in CMS → Site Places: Name, Order, Model key (overview, collab, labs, cea, fields, greenhouses, masterplan), Tab label, Text, Facts / Related (one per line), CTA label, Photo 1-4 (uploaded images).

`io-site.js` (live page only): mounts the 3D model (`window.mountSite` from `../helix/three-helix.js`), pins the panel for one screen per place, shows the active card, adds the photo slideshow, the 01-07 tabs and the full-screen gallery. `io-site.css` styles only what the script adds.
In the Designer the script does not run: all cards show as a list.
