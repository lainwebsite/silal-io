# Figma handoff (artifact → Figma)

Shared notes between Claude chats and accounts working on the Silal IO Figma file. **Read this and [`RULES.md`](RULES.md) before starting. Update this file when you stop, then commit and push.**

- Figma file: `LzMPMHjE8ACvMMazS8Qofp`, page **"SILAL IO"** (`6101:11894`)
- Source artifact: https://claude.ai/artifact/RcE4EZFnc5EXYJGShG4i4G (read with the Artifact tool, `path: "<page>.html"`; a copy lives in `public/full-site/`)

## How to hand off
1. Start: `git pull --rebase`, read `RULES.md` and this file, then claim the frame in **In progress** below (commit + push the claim before you touch Figma).
2. Work one section at a time, following `RULES.md`.
3. Stop: move the item to **Done**, write node IDs, open questions and what comes next, then commit and push.
4. Never work on a frame another chat or account has claimed.

## In progress
_(none)_ <!-- e.g. "- ivp-accelerator.html → Figma, account B, started 2026-11-13, frame <id>" -->

## Done
Section **"FIX · aturan baru"** (`6217:4464`), all follow RULES.md:
| Page | Frame | Notes |
|---|---|---|
| Innovation & Venture Platforms (hub) | `6217:4465` | text styles, colours, spacing, radius, pills, 0.5 hairlines applied |
| Farm Innovation Fund | `6217:6215` | same; header (over-hero version) and footer are the ones to clone for new pages |
| Incubation | `6217:7823` | same; number badges fixed 30×30 |
| IO v2 · Design System (documentation) | `6233:4151` | colours (primitives + semantic), typography, spacing and radius |

Section **"FIX"** (`6204:14737`) holds the earlier versions of IVP (`6133:11902`), FIF (`6133:12369`), Incubation (`6133:12370`), Team Section and Section 2. Do not edit them.

## Design system in the file (use it, do not recreate)
- Text styles: folder `IO v2/`, in order Display (Large, Medium, Small), Heading (H1–H4), Label, Body (Lead, Large, Default, Default Medium, Small), Caption (Regular, Medium), Button (Default, Link), Pill (Label, Caption, Caption Medium, Body, Button, Button Large).
- Variables: "IO v2 · Primitives" (`VariableCollectionId:6231:4151`, hidden raw values), "IO v2 · Color" (`VariableCollectionId:6231:4152`, semantic tokens), "IO v2 · Spacing" (`VariableCollectionId:6235:5231`), "IO v2 · Radius" (`VariableCollectionId:6235:5232`).
- Not ours, do not use: collections "2. Radius", "3. Spacing", "4. Widths", Veyre, Thundercat, MONSTER Colors; text styles outside `IO v2/`.

## Next (suggested)
- Remaining IVP pages from the artifact (e.g. `ivp-accelerator.html`, `ivp-agricultural-challenges.html`, `ivp-enquire.html`): build into "FIX · aturan baru", to the right of the documentation frame.
- Frame numbering ("Frame <9 digits>") has not been redone on the three pages in "FIX · aturan baru"; they still carry the numbers copied from the originals (duplicates of the "FIX" pages). Renumber each page when its work is final.

## Open questions for the owner
- Keep "Body/Default Medium" and "Caption/Medium" (not in the original style list) or merge them?
- Should H5/H6 exist as spare styles (e.g. 18 and 16)?

## Log
- 2026-11-12: three pages duplicated into "FIX · aturan baru" and cleaned with the new rules; IO v2 design system (text styles, colour/spacing/radius variables) created and documented; old `IO/…` text styles deleted (texts in the old pages keep their look, unlinked).
