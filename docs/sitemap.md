# Sitemap

**Current version: 2026-10-28** (image: `docs/sitemap-2026-10-28.webp`). Transcribed below. **All designers use this navigation and these page names.**
Previous version: `docs/source/Silail_-_IO.pdf` / `docs/sitemap.png` (2026-10-01). Changes are listed at the bottom of this file.

## Key (page types)
| Mark | Type | Meaning for us |
|---|---|---|
| **Bold** | Primary category page | Top-level menu item; landing page of the category |
| *Italic* | Sub category head | Area page with its own sub pages (Research & Science only) |
| plain | Sub page | Normal content page |
| `CMS:` | Unique CMS template/page | One template, many entries filled from the CMS (team members, courses, news, …) |
| `Form:` | Dynamic UI form/UI template | Form or system screen whose content changes with where it was opened from |
| `Footer:` | Footer page | Linked from the footer, not the main menu |
| ↗ | External link | Leaves the site |
| → Link to: X | Cross-link | No page of its own; links to page X elsewhere in the sitemap |
| (note) | Sticky note on the sitemap | Open question / client comment |

## Front page
- **Home**

## Main menu (6 primary categories)

### 1. About IO
(Note: need to think how we will display partners & manage partnership enquiries.)
- Team & CEO Message
  - `CMS:` Team member template
  - ↗ Virtual Tour

### 2. Research & Science
(Note: each Research & Capability area will have a breakdown of the team, partners, relevant projects, and resources.)
- *Precision Breeding & Plant Health*
  - → Link to: Advanced CEA
  - → Link to: ARC-GEN / Limagrain page
- *Crop Diversification Research*
  - Quinoa Value Chain Development
- *Soil & Water Research*
  - Soil health card project (Cranfield)
- *Food Technology*
- → Link to: Analytical Services
- *R&D Trialing*
  - → Link to: Paid Trials

### 3. Innovation & Venture Platforms
- Farm Innovation Fund
- Incubation
- Accelerator
- Agricultural Challenges
  - → Link to: Program Management as a Service

### 4. Centres of Excellence
- Agri Robotics & AI
- Abiotic Resilience & Crop Genomics (ARC-GEN)
- Advanced Controlled Environment Ag (CEA)

### 5. Technology & Services
- iO Sense
- Solar Desalination
- Analytical Services
- Paid Trials
- Program Management as a Service
- Facilities as a Service
- Every service above links to `Form:` Enquiry templates → `Form:` Dynamic confirmation

### 6. Talent & Training
- Advanced Agritech Academy
- Student Sponsorship
- Mustadeem / School Programs
- IO Academy Training
  - `CMS:` IO Academy Course page (one page per course; inspiration: Delphy, https://delphy.nl/en/trainings/greenhouse-management-hightech-cultivation/)
    - `Form:` Registration templates
      - `Form:` Dynamic confirmation
- ↗ Silal Careers Centre (the sitemap shows a screenshot of Silal's job-search page. Note: may link to the Silal job board, but TBC with HR; potentially out of scope.)

## Footer
- Contact Info (sticky note on the sitemap: content to come)
- ↗ LinkedIn
- `Footer:` Resources (Aggregate)
  - `CMS:` News / Media template
  - `CMS:` Publications template
  - `CMS:` Project / case study template
  - `CMS:` FAQs template
- `CMS:` Legal content template
  - `Footer:` Terms of Use
  - `Footer:` Privacy

## Sitemap → our page templates (23)

| # | Template | Used for |
|---|---|---|
| 1 | Home | Front page |
| 2 | About IO | About IO (copy ready: `content/about.md`) |
| 3 | Team & CEO Message | Team & CEO Message |
| 4 | Team Member Detail | `CMS:` Team member template |
| 5 | Section Hub | Landing page of each of the 5 categories: Research & Science, Innovation & Venture Platforms, Centres of Excellence, Technology & Services, Talent & Training |
| 6 | Research Area Detail | Precision Breeding & Plant Health, Crop Diversification Research, Soil & Water Research, Food Technology, R&D Trialing |
| 7 | Venture Programme Detail | Farm Innovation Fund, Incubation, Accelerator |
| 8 | Agricultural Challenges | Agricultural Challenges (unique page) |
| 9 | Centre of Excellence Detail | Agri Robotics & AI, ARC-GEN, CEA |
| 10 | Service Detail | iO Sense, Solar Desalination, Analytical Services, Paid Trials, Program Management as a Service, Facilities as a Service |
| 11 | Training Programme Detail | Advanced Agritech Academy, Student Sponsorship, Mustadeem / School Programs, IO Academy Training (course library) |
| 12 | Enquiry Form | `Form:` Enquiry templates (dynamic, per service) |
| 13 | Form Confirmation | `Form:` Dynamic confirmation (shared by enquiry and registration) |
| 14 | Resources Hub | `Footer:` Resources (Aggregate) |
| 15 | News / Media Detail | `CMS:` News / Media template |
| 16 | Publication Detail | `CMS:` Publications template |
| 17 | Project / Case Study Detail | `CMS:` Project / case study template; also Quinoa Value Chain Development, Soil health card project (Cranfield) |
| 18 | FAQs | `CMS:` FAQs template |
| 19 | Legal | `CMS:` Legal content template → Terms of Use, Privacy |
| 20 | Contact | Contact Info |
| 21 | 404 | — |
| 22 | **IO Academy Course Detail** (new) | `CMS:` IO Academy Course page, one per course (Delphy-style). Draft exists: `New Update 23 Oct/Training-Detail/` |
| 23 | **Course Registration Form** (new) | `Form:` Registration templates (dynamic, per course) → Dynamic confirmation (#13) |

Main nav labels (use exactly): **About IO · Research & Science · Innovation & Venture Platforms · Centres of Excellence · Technology & Services · Talent & Training**

## Changes from the 2026-10-01 version
- **IO Academy Training** is now a real section on our site, not just a possible external link: IO Academy Training (library) → IO Academy Course page (CMS, one per course, Delphy as inspiration) → Registration templates (form) → Dynamic confirmation. Adds templates #22 and #23.
- **The key now separates page types**: CMS templates (team member, course page, news, publications, case studies, FAQs, legal) vs dynamic forms (enquiry, registration, confirmation) vs footer pages (Resources, Terms, Privacy).
- **Silal Careers Centre** stays an external link; the sitemap now shows a screenshot of Silal's job-search page as the target.
- Everything else (6 menu categories, sub pages, cross-links, footer items, notes) is unchanged.
