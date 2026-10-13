# Silal IO – Concept 3 "From Desert to Discovery" – Spec & build notes

Source: Figma `85J2hDmYtlUNY2GbDkFxZi` (Silal IO – LAIN INTERNAL), page "Home Page", Concept 3 **Design** column (frames at x=27495, ids `131:*`).
Extracted with `window.figma` in the browser pane. Frames are 1440×870 (footer 1440×844). Reference exports: `ref/c3ref_01..15.jpg`.

## Frames → scenes
| # | Figma frame | Photo (assets/img) | Scene / transition into it |
|---|---|---|---|
| 01 | Hero | hero.jpg (36937a59) | "A Different Kind of Destination", sub, "Start the Journey". Bottom gradient #101010 60%. |
| 02 | Oasis Introduction | intro.jpg (6ec7599f) | Dolly forward over the dunes, oasis appears. "Enter the Oasis." 42 SemiBold. Left gradient #0f0f0f 40% (720 wide). |
| 03 | Oasis Overview | intro.jpg (same) | Same photo, so the camera keeps moving. Title FLIP-morphs into the 16px caption, plus "Explore the Map". |
| 04 | Interactive Campus Map | map.jpg (f5a52b85) | Push into the oasis and match-cut to the aerial. 5 pins (line grows, pill pops). Hover/click a pin to jump to its stop. |
| 05 | Greenhouses Overview | gh.jpg (5e57f7ce) | Dive to the Greenhouses pin. Dock (wheel 350×143 + card) slides in. "Scroll" hint. |
| 06 | Greenhouses Details | ghin.jpg (3629dea1) | Push through the avenue, match-cut inside. Card 156→544, list + thumb (t-gh). |
| 07 | Research Labs Overview | lab.jpg (0b5b5937) | Travel sideways. Card collapses 544→135, wheel rolls. |
| 08 | Research Labs Details | labin.jpg (c9115f5b) | Through the entrance. Card 135→523, thumb t-lab. |
| 09 | Technology & Innovation Overview | tech.jpg (40dc087e) | Travel. Card 523→156. |
| 10 | Technology & Innovation Details | techin.jpg (db4c215e) | Inside. Card 156→540, thumb t-tech. |
| 11 | Partnerships Overview | part.jpg (7c0a8f92) | Travel. Card 540→135. |
| 12 | Partnerships Details | part.jpg (same) | Same photo, slow push-in. Card 135→523, thumb t-part. |
| 13 | Impact Metrics | impact.jpg (8f6482d3) | Tilt down to the field. Bottom #101010 gradients. Metric dial: 30% / 04 / 10+, ruler slides 372px per step, active number 120px vs 24px. |
| 14 | Virtual Tour CTA | map.jpg (again) | The campus aerial returns full-bleed and shrinks into the 696×420 r60 card (ring 708×432 r64, white 30%). |
| 15 | Footer | – | Last in-stage scene: lines draw, then text. |

Visible image = topmost IMAGE fill. The other fills stacked in the frames are hidden or covered leftovers. The "Background Image Copy" layers next to the column are the same images with alpha, at the same resolution (max 1613×975).

## Tokens
- Inter 400/500/600/700 (variable). Hero 42 SemiBold lh155 −2% · Enter 42 SemiBold −1% · body 16/155 · card 14/150 · list 12/150 · metric 120 Regular −3% (vertical-trimmed: cap top 480, baseline 567) · footer 34 Medium / 21 Medium 40%.
- Glass (pill, wheel, card, pins): GLASS r60, light 225°, no shadow. Fills: pill #101010 20% (01–12) / #fff 10% (13–14); wheel #101010 30% r30; card #101010 20%→30% r30; pin pill #fff 10% r34.
- Every photo gets black 30% on top. Buttons: white pill h41, padding 20, 12 Medium #0f0f0f (tour button h49 / 22).

## Code map (index.html)
- `B` = beat table in timeline units (`?t=<beat or number>`, `?lenis=0` for QA, `window.__story.jump()`).
- `enterStop()` = overview → details (doorway push + card expand). `nextStop()` = details → next stop (sideways travel + wheel roll).
- `pt()` maps a Figma frame point onto the cover-fitted photo on screen (pins and zoom origins). `FX` = mobile focal points.
- Interactivity is gated per scene through `stage.dataset.live` (`LIVE` table).
- Serve (in this repo): `npm run dev`, open `/homepage-concept-3`. (Original local prototype used `node .claude/static.js . 5174`.)

## Interpretations (Figma has static keyframes only)
- Frame 05 shows "Technology and Innovation" under Greenhouses in the wheel, but 07–11 follow the order Greenhouses → Research Labs → Technology and Innovation → Partnerships. The build uses that order everywhere.
- The menu panel behind the pill's dots icon is not drawn in Figma. It lists the journey stops.
- Card list hover moves the active dot. Each stop has only one thumbnail in Figma, so the thumbnail does not change.
- "Farms and Field Trials" pin → Impact scene (there is no separate farms stop).
