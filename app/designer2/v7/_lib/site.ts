import { P } from "./photo";

export const BASE = "/designer2/v7";

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export type Sub = { label: string; href: string; external?: boolean };
export type Category = {
  key: string;
  n: string;
  label: string;
  href: string;
  img: string;
  /** PLACEHOLDER one-liner until the client supplies category copy. */
  blurb: string;
  subs: Sub[];
};

const subs = (base: string, labels: string[]): Sub[] => labels.map((label) => ({ label, href: `${base}/${slug(label)}` }));

// Labels + structure: docs/sitemap.md (use exactly).
export const nav: Category[] = [
  {
    key: "about",
    n: "00",
    label: "About IO",
    href: `${BASE}/about`,
    img: P.atrium,
    blurb: "Silal's R&D and venture engine, on 34 hectares beside Al Foah Farm.",
    subs: [
      { label: "Our Story", href: `${BASE}/about` },
      { label: "Team & CEO Message", href: `${BASE}/about/team` },
      { label: "Virtual Tour", href: "#", external: true },
    ],
  },
  {
    key: "research",
    n: "01",
    label: "Research & Science",
    href: `${BASE}/research`,
    img: P.microscope,
    blurb: "Breeding, soil, water and food science, proven under arid pressure.",
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
    n: "02",
    label: "Innovation & Venture Platforms",
    href: `${BASE}/ventures`,
    img: P.pitchRoom,
    blurb: "Funding, incubation and acceleration for agri-food founders.",
    subs: subs(`${BASE}/ventures`, ["Farm Innovation Fund", "Incubation", "Accelerator", "Agricultural Challenges"]),
  },
  {
    key: "centres",
    n: "03",
    label: "Centres of Excellence",
    href: `${BASE}/centres`,
    img: P.phenotyping,
    blurb: "Specialist hubs for robotics, crop genomics and controlled environments.",
    subs: subs(`${BASE}/centres`, [
      "Agri Robotics & AI",
      "Abiotic Resilience & Crop Genomics (ARC-GEN)",
      "Advanced Controlled Environment Ag (CEA)",
    ]),
  },
  {
    key: "services",
    n: "04",
    label: "Technology & Services",
    href: `${BASE}/services`,
    img: P.soilProbe,
    blurb: "Sensing, desalination, analytics, trials and facilities, on demand.",
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
    n: "05",
    label: "Talent & Training",
    href: `${BASE}/training`,
    img: P.academy,
    blurb: "Growing the next generation of agri-food talent in the UAE.",
    subs: [
      ...subs(`${BASE}/training`, [
        "Advanced Agritech Academy",
        "Student Sponsorship",
        "Mustadeem / School Programs",
        "IO Academy Training",
      ]),
      { label: "Silal Careers Centre", href: "#", external: true },
    ],
  },
];

export const platforms = nav.filter((c) => c.key !== "about");

export const footerLinks = {
  resources: [
    { label: "Resources", href: `${BASE}/resources` },
    { label: "News & Media", href: `${BASE}/resources/news` },
    { label: "Publications", href: `${BASE}/resources/publications` },
    { label: "Projects & Case Studies", href: `${BASE}/resources/projects` },
    { label: "FAQs", href: `${BASE}/faqs` },
  ],
  legal: [
    { label: "Terms of Use", href: `${BASE}/legal/terms` },
    { label: "Privacy", href: `${BASE}/legal/privacy` },
  ],
  contact: `${BASE}/contact`,
  linkedin: "#", // PLACEHOLDER: client LinkedIn URL
};
