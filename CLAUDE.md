# Silal IO website

**Read `docs/BRIEF.md` first, then `docs/brand.md` (brand rules, binding), `docs/sitemap.md` (nav + pages) and `content/` (final copy).** It is the shared brain: roles per chat (BRAIN, DESIGNER 1, DESIGNER 2), which folders each chat owns, pages, assets, open inputs, decisions log, cross-chat requests.

Next.js app. Designer routes: `/designer1/...`, `/designer2/...`. Only write in the folders your chat owns.

Client presentation links `/V1`, `/V2`, `/V3` (`app/V1..V3`, `public/V1..V3`) are frozen, polished copies owned by BRAIN. Designers never edit them; see "Client presentation links" in `docs/BRIEF.md`.

Live: https://silal-io.vercel.app/ (Vercel, auto-deploys from GitHub).

## Workflow
- Push every change straight to `main`. Vercel deploys `main` to production automatically.
- `git pull --rebase origin main` before every push. Other chats push to `main` too.
- `npm run build` must pass before pushing.
- Other branches only get Vercel preview URLs, not the live site.
- Record decisions in `docs/BRIEF.md`, not only in chat.

## Assets
- `assets/photos/<original upload folder>/<original filename>`.
- Keep original filenames. Never rename, resize or recompress originals; they are the ultra-HD source.
- Web copies for the site: `public/photos/<original folder>/<original filename>` (already generated, shared by all designers).
- `assets/README.md` = manifest (content + suggested pages per photo).
