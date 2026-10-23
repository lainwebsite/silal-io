import { P } from "./photo";

export const BASE = "/V1";

// Client preview: only this About page exists. Links to pages that aren't built yet point at SOON
// and are made inert by LinkGuard (no 404s, no jump to top, no internal URLs).
export const SOON = "#";

type Sub = { label: string; href: string; external?: boolean };
export type Category = { key: string; label: string; href: string; img: string; blurb: string; subs: Sub[] };

const subs = (labels: string[]): Sub[] => labels.map((label) => ({ label, href: SOON }));

// Names + structure from docs/sitemap.md. Blurbs are PLACEHOLDER one-liners.
export const about: Category = {
  key: "about",
  label: "About IO",
  href: BASE,
  img: P.atrium,
  blurb: "Silal's R&D and venture engine.",
  subs: [
    { label: "Our Story", href: BASE },
    { label: "Team & CEO Message", href: SOON },
    { label: "Virtual Tour", href: SOON, external: true },
  ],
};

export const categories: Category[] = [
  {
    key: "research",
    label: "Research & Science",
    href: SOON,
    img: P.microscope,
    blurb: "Plant science, soil, water and food technology, tested in real arid conditions.",
    subs: subs([
      "Precision Breeding & Plant Health",
      "Crop Diversification Research",
      "Soil & Water Research",
      "Food Technology",
      "R&D Trialing",
    ]),
  },
  {
    key: "ventures",
    label: "Innovation & Venture Platforms",
    href: SOON,
    img: P.awardsStage,
    blurb: "Funding, incubation and acceleration for agri-food startups.",
    subs: subs(["Farm Innovation Fund", "Incubation", "Accelerator", "Agricultural Challenges"]),
  },
  {
    key: "centres",
    label: "Centres of Excellence",
    href: SOON,
    img: P.phenotyping,
    blurb: "Specialist hubs for robotics, crop genomics and controlled-environment agriculture.",
    subs: subs([
      "Agri Robotics & AI",
      "Abiotic Resilience & Crop Genomics (ARC-GEN)",
      "Advanced Controlled Environment Ag (CEA)",
    ]),
  },
  {
    key: "services",
    label: "Technology & Services",
    href: SOON,
    img: P.labWorking,
    blurb: "Sensing, desalination, analytics, trials and facilities for partners.",
    subs: subs([
      "iO Sense",
      "Solar Desalination",
      "Analytical Services",
      "Paid Trials",
      "Program Management as a Service",
      "Facilities as a Service",
    ]),
  },
  {
    key: "training",
    label: "Talent & Training",
    href: SOON,
    img: P.academy,
    blurb: "Building the next generation of agri-food talent in the UAE.",
    subs: subs([
      "Advanced Agritech Academy",
      "Student Sponsorship",
      "Mustadeem / School Programs",
      "IO Academy Training",
    ]),
  },
];

export const nav: Category[] = [about, ...categories];

export const footerLinks = {
  resources: [
    { label: "News & Media", href: SOON },
    { label: "Publications", href: SOON },
    { label: "Projects & Case Studies", href: SOON },
    { label: "FAQs", href: SOON },
  ],
  connect: [
    { label: "Contact", href: SOON },
    { label: "Enquire", href: SOON },
    { label: "LinkedIn ↗", href: SOON }, // URL TBC
  ],
};
