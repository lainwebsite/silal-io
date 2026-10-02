import { P } from "./photo";

export const BASE = "/V1";

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

type Sub = { label: string; href: string; external?: boolean };
export type Category = { key: string; label: string; href: string; img: string; blurb: string; subs: Sub[] };

const subs = (base: string, labels: string[]): Sub[] => labels.map((label) => ({ label, href: `${base}/${slug(label)}` }));

// Names + structure from docs/sitemap.md. Blurbs are PLACEHOLDER one-liners.
export const about: Category = {
  key: "about",
  label: "About IO",
  href: `${BASE}/about`,
  img: P.atrium,
  blurb: "Silal's R&D and venture engine.",
  subs: [
    { label: "Our Story", href: `${BASE}/about` },
    { label: "Team & CEO Message", href: `${BASE}/about/team` },
    { label: "Virtual Tour", href: "#", external: true },
  ],
};

export const categories: Category[] = [
  {
    key: "research",
    label: "Research & Science",
    href: `${BASE}/research`,
    img: P.microscope,
    blurb: "Plant science, soil, water and food technology, tested in real arid conditions.",
    subs: subs(`${BASE}/research`, [
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
    href: `${BASE}/ventures`,
    img: P.awardsStage,
    blurb: "Funding, incubation and acceleration for agri-food startups.",
    subs: subs(`${BASE}/ventures`, ["Farm Innovation Fund", "Incubation", "Accelerator", "Agricultural Challenges"]),
  },
  {
    key: "centres",
    label: "Centres of Excellence",
    href: `${BASE}/centres`,
    img: P.phenotyping,
    blurb: "Specialist hubs for robotics, crop genomics and controlled-environment agriculture.",
    subs: subs(`${BASE}/centres`, [
      "Agri Robotics & AI",
      "Abiotic Resilience & Crop Genomics (ARC-GEN)",
      "Advanced Controlled Environment Ag (CEA)",
    ]),
  },
  {
    key: "services",
    label: "Technology & Services",
    href: `${BASE}/services`,
    img: P.labWorking,
    blurb: "Sensing, desalination, analytics, trials and facilities for partners.",
    subs: subs(`${BASE}/services`, [
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
    href: `${BASE}/training`,
    img: P.academy,
    blurb: "Building the next generation of agri-food talent in the UAE.",
    subs: subs(`${BASE}/training`, [
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
    { label: "News & Media", href: `${BASE}/resources` },
    { label: "Publications", href: `${BASE}/resources` },
    { label: "Projects & Case Studies", href: `${BASE}/resources` },
    { label: "FAQs", href: `${BASE}/faqs` },
  ],
  connect: [
    { label: "Contact", href: `${BASE}/contact` },
    { label: "Enquire", href: `${BASE}/enquire` },
    { label: "LinkedIn ↗", href: "#" }, // URL TBC
  ],
};
