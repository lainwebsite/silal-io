# Silal IO website

Live: https://silal-io.vercel.app/ (Vercel, auto-deploys from GitHub).

## Workflow
- Push every change straight to `main`. Vercel deploys `main` to production automatically.
- Other branches only get Vercel preview URLs, not the live site.

## Assets
- `assets/photos/<original upload folder>/<original filename>`.
- Keep original filenames. Never rename, resize or recompress originals; they are the ultra-HD source.
- If a web-optimised copy is needed, put it in a separate folder and leave the original untouched.
- `assets/README.md` = manifest (content + suggested pages per photo).
