# Silal IO website

**Read `docs/BRIEF.md` first.** It is the shared brain: roles per chat, pages, assets, open inputs, decisions log, cross-chat requests.

Live: https://silal-io.vercel.app/ (Vercel, auto-deploys from GitHub).

## Workflow
- Push every change straight to `main`. Vercel deploys `main` to production automatically.
- `git pull --rebase origin main` before every push. Other chats push to `main` too.
- Other branches only get Vercel preview URLs, not the live site.
- Record decisions in `docs/BRIEF.md`, not only in chat.

## Assets
- `assets/photos/<original upload folder>/<original filename>`.
- Keep original filenames. Never rename, resize or recompress originals; they are the ultra-HD source.
- Web-optimised copies go in a separate folder (e.g. `public/`), keeping the original filename stem.
- `assets/README.md` = manifest (content + suggested pages per photo).
