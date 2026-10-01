# Innovation Oasis — brand rules for the website

Source: `docs/source/Innovation_Oasis_Guidelines.pdf` (35 pages). This file is the web summary; when in doubt, check the PDF.

**These rules apply to every designer's version.** Designers explore layout, motion and composition, not the brand itself. Logo, colours and type come from here.

## Logo

Files (vector, extracted from the guidelines PDF, pixel-identical to it):

| File | Use |
|---|---|
| `/brand/io-lockup.svg` | Primary lock-up: IO brandmark, "innovation oasis" + Arabic wordmark, "Part of Silal" endorsement. Light backgrounds. |
| `/brand/io-lockup-reversed.svg` | Reversed: wordmark + endorsement white, the "io" letters stay blue. Dark backgrounds / photos. |
| `/brand/io-mark.svg` | IO brandmark only (the blue "i" + circle with the DNA/helix). Favicon, supergraphic, small spaces. |

These are extracted from the guideline PDF. Ask the client for the official master SVG/AI files before launch.

Rules:
- The brandmark is made of 3 parts: **IO brandmark** (hero element), **Innovation Oasis wordmark** (Latin + Arabic, "io" in "innovation" is blue), **"Part of Silal" endorsement line** (must be visible on all IO communications, so it goes in the header or footer of every page).
- Can be used as a fixed lock-up, or **flexibly**: e.g. the big IO mark as a cropped supergraphic on one side, wordmark on the other, endorsement line in clear space at the top (guidelines p.4, p.30 website mock-up).
- Never redraw, recolour, stretch, or rebuild the logo. Use the files.
- Clear space: at least the size of the dot of the "i" on all sides.
- Minimum size (print): 20mm wide vertical, 30mm horizontal. Web: keep the endorsement line legible (lock-up roughly 120px wide or more; below that use the mark only, with the endorsement elsewhere on the page).
- On colour or photos: only where contrast keeps it clear. Single-colour versions (all white or all blue) are allowed when needed.
- 3 formats: (1) large IO mark, vertical; (2) medium IO mark, vertical; (3) small IO mark, horizontal (wordmark left, mark right), best for headers.

## Tagline
**Advancing Agri-food Systems**. Arabic: **نحو أنظمة زراعة وغذاء متطورة**
Can stand alone or be locked up with the brandmark. Always legible.

## Colours

Core (should dominate: cool, clinical, formal):

| Name | Hex | RGB | Role |
|---|---|---|---|
| IO Blue | `#3CA7D2` | 67 167 210 | Core brand colour, the logo blue |
| Charcoal | `#595453` | 89 84 82 | Dark backgrounds (used across the guidelines' dark pages) |
| Grey | `#7F8284` | 128 130 133 | Wordmark grey, secondary text |
| Light grey | `#F1F1F1` | 241 241 241 | Light backgrounds, panels |

Secondary (**accents only, must not dominate the core**; also for charts, tags, colour-coding):

| Name | Hex | RGB |
|---|---|---|
| Green | `#00A16B` | 0 161 107 |
| Dark green | `#015825` | 0 81 37 |
| Lime | `#70B62B` | 112 182 44 |
| Pink | `#E94492` | 233 69 145 |
| Orange-red | `#EB5D3E` | 235 93 62 |
| Orange | `#F08104` | 240 129 4 |

Greens = growth. Orange/pink = vibrant splashes. Palette may be extended as the brand evolves, but the core stays dominant.

Web contrast note: IO Blue `#3CA7D2` on white is about 2.7:1, which fails WCAG for body text. Use it for large headings, icons, rules, buttons with white bold text at large size, and accents. For blue body links or small text, use a darker tint of the same hue (keep it visibly "IO blue"), and record the tint in your design log.

## Typography

- **Primary: 29LT Bukra** (Latin + Arabic), weights Light, Regular, Bold, Extra Bold. Modern, geometric, wide.
- Substitute in the guidelines: Arial (only where Bukra isn't available).
- **Web status: 29LT Bukra is a commercial font and is not on Google Fonts. We need licensed webfont files (WOFF2) from the client.** Until then:
  - Use a stand-in that is close to Bukra and supports Arabic, loaded via `next/font/google`. Suggested: **Readex Pro** (geometric, wide, Latin + Arabic). Keep the font in one CSS variable so swapping to Bukra later is a one-line change.
  - Don't pick a personality font that fights Bukra (no serif, no condensed, no mono as a main face).
- Character in the guidelines: lowercase-friendly, Light weight for large display words (e.g. a big "exploration" headline), Bold/Extra Bold for emphasis, blue for highlights.

## Visual language (from "Brand in action")
- Lots of white space; clean, open, uncluttered layouts.
- **Thin IO-blue horizontal rules** (header rule, footer rule, section dividers) are a signature element.
- Big single-word lowercase display headlines in Light weight (e.g. "exploration"), with small blue kicker text above.
- Big IO mark used as a supergraphic, often cropped at the page edge.
- Imagery: crops, leaves, lab, people in the field; deep green macro leaf photography for chapter/hero moments.
- Dark charcoal `#595453` backgrounds with white/blue type for contrast sections.
- Bilingual: English + Arabic appear together in brand items. The site will need Arabic (RTL) eventually, so layouts should not break when mirrored.

## Contact details (from the stationery templates; confirm with client)
- Innovation Oasis – Silal, Al Ain, United Arab Emirates
- Arabic: واحة الابتكار – سلال، العين، الإمارات العربية المتحدة
- +971 261 44444 (from template, may be placeholder)
- Website: io-silal.ae
