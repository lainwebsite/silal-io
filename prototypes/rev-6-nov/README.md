# Revision 6 November 2026 (review artifact)

Client revisions of 6 Nov (38 comments + FIF and IVP Overview docs + Strategy Overview slides), applied to the review site.
**Not live on Vercel**: this lives on a branch only. The review copy is the artifact
https://claude.ai/artifact/K4qEjdh9q1zUF29MA49HEa (a duplicate of the earlier one, 6KnNXfrEb89Phid9grpk1d, left untouched).

- `notes/comments.md`: every comment, numbered as the screenshots (`revision 01..38.png`), and what it asks.
- `notes/*.txt`: text of the docs and slides the comments point to.
- `scripts/`: one script per page, applied to the earlier artifact's HTML (`site_orig/`, read from the old artifact): `home.py`, `about.py` (About + new Our Ecosystem), `team.py`, `academy.py` (IO Academy + Training Detail, iO x Delphy), `hub.py` (IVP overview), `fif.py` + `fif.css`, `inc.py`, `rest.py` (menu patch on the other pages). `build_all.sh` runs them; `mkimg.py` + `imgs.txt` make the web copies in `site/rev/img/` from `public/photos/`.
- `site/`: the built pages as published (index.html is the body only; the artifact adds the skeleton). Shared photos are not duplicated here: they are the same files as in `public/full-site` / `public/photos`.
- `tools/`: local preview server and Playwright screenshot helpers used for checking.

Open points to confirm with the client: team membership of Ahmed, Ali, Nadia, Caitlin, Mohsin (placed tentatively in `scripts/team.py`, `TEAMS`); Shameer's photo; partner logos for Our Ecosystem; Delphy logo and which courses are co-branded (`scripts/academy.py`, `DELPHY`); FIF launch photo with the Minister; real heat-map data sources (map is illustrative).
