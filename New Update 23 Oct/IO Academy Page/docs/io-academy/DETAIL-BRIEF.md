# Training Detail Page: brief (for a fresh chat)

Branch `23-oct/training-detail-page`. Read `docs/io-academy/GUIDE.md` first (shell, tokens, rules). This file is the brief so you do not start from zero.

## Client brief (verbatim)
IO Academy & Training Pages
- **IO Academy Landing Page:** replicate the general Content/Media Centre layout to serve specifically as the IO Academy library. (Done on branch `23-oct/io-academy-page`.)
- **Training Detail Page:** design a dedicated module page based on the structure of the Delphy training page: https://delphy.nl/en/trainings/greenhouse-management-hightech-cultivation/
- Create a structure and the copywriting for Silal based on the brief and the inspiration. Keep the website flow like Silal IO. Style must match the homepage (navbar + footer from `/new-homepage`).

## Sitemap
Template 11 "Training Programme Detail": Advanced Agritech Academy, Student Sponsorship, Mustadeem / School Programs, **IO Academy Training**. Route: `/390b3d94a5/v10/training/io-academy-training/[slug]`.

## Delphy structure → our sections (in this order)
| # | Delphy | Ours |
|---|---|---|
| 1 | Breadcrumb | Talent & Training / IO Academy / track |
| 2 | H1 (title only) | H1 + lead sentence + "Request information" pill + "All courses" link |
| 3 | Facts bar (type, duration, audience, prior education, language, investment) | Same six facts in a paper panel under the title |
| 4 | Request-information form (long) | Short form at the bottom (`#request`), button jumps to it. Name, email, phone, organisation, how can we help, consent. Confirmation state in place (sitemap: Enquiry Form → Form Confirmation) |
| 5 | Introduction + bold participant quote | Overview (2–3 short paragraphs) + pull quote |
| 6 | What do you learn? | Same heading |
| 7 | Planning (dates, time, online) | Planning: intake label, session chips, time (GST), place |
| 8 | Content (bullets) | Numbered list (`01…`) |
| 9 | How does it work? | Same heading |
| 10 | The result + key concepts | Outcome list + concept tags |
| 11 | Information (email, customisation) | Questions (FAQ accordion) + private cohort / in-house line |
| 12 | Your trainers | Trainer cards: role + focus, mark in a blue circle, "name to be confirmed" |
| 13 | "Do you have a question?" | Closing request band |
| – | no related content | Add: previous/next course, "More from the Academy" cards |

Copy patterns taken from Delphy: second person ("you learn"), short plain headings, benefit-led sentences, simple CTAs, time with zone. Silal tone from `content/about.md`: direct, concrete, desert/real-world framing, no hype.

## Layout (as built in the draft)
Press-release layout from News & Media: sticky left column (section index + level/track/certificate card), copy right (7/12). Photo band 21:9 under the facts. Mobile: index hidden, facts 1 column.

## Not in scope
Payment, real registration back end, LMS, Arabic version, external platform link. List them as open inputs.

## Definition of done
Matches homepage shell · sample notice visible · works at 390 px · `npm run build` passes · link added to `docs/links.md` · decision in `docs/BRIEF.md`.
