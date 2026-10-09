# Silal IO – Concept 1 "Built by the Desert" – Extracted Figma Spec

Source: Figma file `85J2hDmYtlUNY2GbDkFxZi` (Silal IO – LAIN INTERNAL), page "Home Page", Concept 1 "Design" column (x=5726).
Extracted through the Figma Plugin API in the browser pane (the MCP connector has View-only seat → blocked).
Every frame = **1440 × 870** (footer 1440 × 844). Coordinates below are frame-relative (x,y,w) in px.

## Tokens
- Font: **Inter** only. Weights used: Regular 400, Medium 500, Semi Bold 600.
- Colors: white `#FFFFFF`; ink `#0F0F0F` (frames) / `#101010` (03.01, footer); black `#000`; green `#015825` (04.03 fallback bg).
- Text opacity steps on dark: 100 / 70 (body) / 50 (secondary, eyebrow) / 40 (nav inactive, footer).
- Glass effect (menu, cards, tiles): Figma GLASS radius 60, depth 61, light 225°, intensity .1, dispersion .47, refraction 0.
  Fill on top: white 4% (cards), white 6% (tiles), white 10% (menu), `#0F0F0F` 8% (engagement cards, radius 80).
- Hairline: 0.5px, white 20% (solid) or gradient `#fff@.1 → #fff@1 (50%) → #fff@.1` at overall 20% opacity (card separators).
- Radii: pill 34/1000, glass card 34, focus ring 38 (1px, white 40%, 4px outside the card), big image 40 → 60, tile 24, thumb 16, engagement card 28.
- Button: white pill, text `#0F0F0F` 12 Medium, padding 20 22, radius 34, h 49.
- Cursor icon: 24×27 black arrow w/ white stroke + drop shadow (0 4 4 .25) – see assets/svg/cursor.svg. Logo: assets/svg/logo.svg (33×24).

## Type styles (size / line-height / letter-spacing)
| use | spec |
|---|---|
| Stat numerals "34 ha", "04" | 105 / 120% / -3% Regular |
| Hero "Step into the Oasis" | 60 / auto / -2% Medium (01.05: -1%) center |
| Section titles | 42 / 120% / -1% Medium center |
| Footer links | 34 / auto / 0 Medium |
| Statement (03.01) | 24 / 155% / 0 Regular center |
| Card title (engage) | 21 / 150% / -1% Medium center ; footer sub-links 21 Medium 40% |
| List title | 18 / 150% Medium |
| Body | 16 / 155% Regular white 70% ; lead-in 16 Semi Bold white |
| Caption | 14 / 150% Medium (title) + Regular 50% (desc) |
| Small / nav / header | 12 / 155% / -1% (Semi Bold 100% for header title, Regular 50% sub) |
| Eyebrow | 12 Medium UPPERCASE +4% white 50% ; numbers 10 Medium UPPER +4% |

## Persistent chrome (every scene)
- Left nav at x=60, y=30,55,80,105,130,155,180 (pitch 25): 12 / -1%. Inactive Regular white 40%; active Semi Bold 100%.
  Items: Innovation Oasis · The location · What you'll pass on the way · What we're growing · We come to you · Who you'll meet · Find your door
  Active: 01.x Innovation Oasis · 02.x The location · 03.x What you'll pass… · 04.x What we're growing · 05.x We come to you · 06–07 Who you'll meet · (08–10: no active in file → assume "Find your door")
  01.05 = transition (first two items Medium 70%).
- Rail: vertical hairline x=40, 0→870, 0.5px white 20%; active marker x=40, 15px tall (white 1px) aligned to active item (y=30 for item 1).
- Top-right: glass pill 80×52 at x=1264,y=30 (radius 1000, contains logo 33×24) + glass circle 52×52 at x=1348 (menu, 3 lines 20×2 r100 gap 6).
- Bottom centre "Scroll" 12 Regular white 50% at x≈704,y=825.
- Bottom-right depth ladder at x=1386,y=776: 7 lines 14×1.5 pitch 10, opacity 1, .8, .6, .4, .2, .1, .1 (rotated 180 → brightest at bottom).

## Scenes (keyframes) in scroll order
**01.01 Earth Overview** – bg img `2c9732cc` (crop scale .9 off .05,0) + black 20%. Chrome only.
**01.02 Earth Close-Up** – bg `f502e814` fill + black 20%.
**01.03 Step into the Oasis – Aerial** – bg `e95e0b67` fill + black 20%; title (459,399,w522) "Step into the Oasis".
**01.04 – Desert Landscape** – bg `0ba94745` (735×420 source!) fill + black 20%; same title.
**01.05 Transition to Al Foah** – bg = `0ba94745` fill + `b1788c81` crop (scale .73, y-off .21) + black 40% + gradient `#0f0f0f` 60% (opaque→transparent); a blurred (200) oversized copy 1888×1560 behind; title gradient-fill white 60%→0 with 14px blur (dissolving).
**02.01 Why Al Foah** – same composite bg; "Why Al Foah?" 16 SemiBold (285,610); body (285,645,w593): "A living research ground in the heart of the desert. Explore the farms, laboratories and people turning Al Foah's harshest conditions into the UAE's food future – the same way you would if you walked in."
**02.02 Site & Environmental Challenges** – same bg; intro block moves up to y=285/320; stats row:
  - (285,522) label: "**Site**" (semibold 100%) / "Al Foah Farms ⋅ Al Ain" (regular 70%) 12/150%; hairline (285,576,w372); "**34 ha**" 105px (285,594).
  - (784,522) "**Environmental fronts**" / "Heat ⋅ Water ⋅ Soil ⋅ Energy"; hairline (784,576,w371); "**04**" 105px (784,594).
**03.01 Answers to the Desert** – bg `#101010` + composite image blurred 650 (ambient glow); statement (388,417,w663) 24 center: "Every structure here answers a question the desert asked."
**03.02 Laboratories & Facilities Overview** – bg `#0f0f0f` + blurred composite; caption (557,28,w325) 12 50% center = the statement. Glass card (506,203,427×464,r34) rows (pitch 116): thumb 80×80 r16 at x=524 (card+18), eyebrow+title at x=628:
  1 heat / Growth Chambers (thumb `8e44e3b2`) · 2 water / Soil & Water Lab (`0c5a04bd` crop) · 3 soil / Crop Health Lab (`3e723371`) · 4 energy / Mobile Crop-Health Lab (`bed5d79a`). Thumb overlay #0f0f0f 40%. Separators between rows.
**03.03 Soil & Water Lab highlighted** – composite bg + `0c5a04bd` crop, black 40% + two #0f0f0f gradient scrims; card (506,123,427×624): row 2 expanded to image 391×240 r24 (`0c5a04bd`), "water / Soil & Water Lab" overlaid at (628,354) full white; other rows dim (50%); cursor at (782,426).
**04.01 Where Innovation Takes Root** – bg #0f0f0f + oversized blurred (150) `03a80e12`+`c67af94c`; title (438,410,w565) 42 "Where innovation takes root."; sub (576,727,w287) 12 50%: "Specialised centres developing practical solutions for the future of agriculture."
**04.02 Agri Robotics & AI** – header (637,28) "Where innovation takes root." semibold + sub (578,57,w283). Three cards 353×220 r34 at x=175/544/912, y=325. Focus ring (171,321,361×228,r38) on card 1. Card 1 `c67af94c` (glass); cards 2 (`977c9001`+`132f755b`) and 3 (`80510502`) at 40% opacity + background blur 100. Caption (183,569) 14 Medium "Agri Robotics & AI" + (183,596,w242) 50% "Smarter automation for more efficient farming." Cursor (420,519).
**04.03 Smart Growing Systems** – bg #015825 + `132f755b` blurred 240; focus card 2 (ring at 540), caption x=552 "Smart Growing Systems" / "Optimising greenhouse production in harsh climates." (w238). Cursor (824,472).
**04.04 Crop Resilience** – bg `80510502`(+`977c9001`) blurred 240; focus card 3 (ring at 908), caption x=920 "Crop Resilience" / "Developing crops resilient to heat and drought." (w215). Cursor (1204,447).
**05.01 Agricultural Drone** – bg #0f0f0f + blurred (240) `80510502`/`977c9001`; big image (396,233,647×404,r40) = `e64811eb` crop + `bf471039` crop + black 20%, background blur 100.
**05.02 Drone Close-Up** – same image grows to (199,120,1043×630,r60), black 30%.
**05.03 Technology that starts in the field** – full-bleed `e64811eb`+`bf471039` crops, black 60% + #0f0f0f gradient; "Technology that starts in the field." 16 SemiBold (285,529); body (285,564,w669) 70%: "From smart sensing to advanced analytics, our technologies help growers monitor conditions, improve efficiency and make better decisions in real time."; button (285,650) "Explore Technology & Services".
**06.01 Innovation & Venture Platforms** – bg `90abeb8f` crop (scale .49) + black 50%; title (416,410,w609) 42.
**06.02 Funding, Incubation & Acceleration** – bg `90abeb8f` + black 60%; header (631,28) semibold "Innovation & Venture Platforms"; sub (490,57,w459): "Supporting the next generation of agricultural innovation through funding, incubation, acceleration and challenge-driven programs." Four glass tiles 150×150 r24 at x=313/535/756/977, y=180; labels y=346 (w150 centre): **Farm Innovation Fund** (Medium 100%) · Incubation · Accelerator · Agricultural Challenges (Regular 50%). Tile 1 holds image `1fdb618f` (+ `0f622862`, `1f52355a`…). Button (655.5,701) "Meet the team".
**07.01 One Oasis. Three ways in.** – bg `06f2951c`(png) + `70840e80` crop + black 40%; title (466,410,w509) 42.
**07.02 Farmers, Robotics & Government** – bg `06f2951c` + black 40%; header (646,28) "One Oasis. Three ways in." Cards 353×171 r28 at y=350: x=175 FOR FARMERS / Grow with us / Apply for funding · x=544 FOR GOVERNMENT / Built by the desert / Explore the research · x=912 FOR ROBOTICS / The future is built here / Apply for funding. (eyebrow y+38, title y+57, hairline y+116 inset 18, CTA y+134.)
**08.01 Building Agricultural Talent** – bg black + blurred (240) `0ba94745`; header (643,28) "Building agricultural talent." + sub (495,57,w449): "Supporting future researchers, entrepreneurs and industry leaders through practical learning and development opportunities." Glass card (506,272,427×284): rows pitch 66 from y=300: ○01 Advanced Agritech Academy · ○02 Student Sponsorship (active: white ring + 100% text) · ○03 School Programs · ○04 IO Academy Training. Number ring 30px, 1px, white 30% (active 100%); gap 16; separators at 348/414/480.
**09 Virtual Tour** – bg black + blurred `0ba94745`; focus ring (540,321,360×228,r38) around card (544,325,352×220,r34: `0ba94745` + `4bf8fa0b` crop, sat -6%, highlights +47%, bg-blur 100); button (642,589) "Launch Virtual Tour"; header (599,28) "Walk through the Oasis, wherever you are." ; sub (518,57,w403): "Take the interactive virtual tour of our farms, laboratories, greenhouses and meeting spaces – no visit required."
**10 Footer** (h 844, bg #101010) – links 34 Medium white at x=64: Research y90, Programmes y171, Community y252, Contact y333, hairlines (64,151/232/313,w1312, white 30%). Blurb (64,434,w520) 12/155% 40%: "A strategic enabler of the UAE's vision – transforming national priorities into tangible innovation outcomes across agriculture and food systems." Columns (21 Medium 40%): x=728 Research / Talent & Training / Centres of Excellence (y434/479/524); x=1060 Entrepreneurs / Companies / Investors. Bottom hairline y=759; "Innovation Oasis — Silal, Al Ain, UAE" (64,789) 12 40%; "Part of Silal" right edge x=1376.

## Assets
Raw exports: `assets/raw/fig_<hash8>.*`; web-ready: `assets/img/<hash8>.jpg|png`. Figma image-fill crops are expressed as `[[sx,0,tx],[0,sy,ty]]` (fraction of image shown / offset).
