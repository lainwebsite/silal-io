import { P } from "./photo";

export const BASE = "/V2";

// Client preview: only the About page and News & Media exist. Links to pages that aren't built yet
// point at SOON and are made inert by LinkGuard (no 404s, no jump to top, no internal URLs).
export const SOON = "#";

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

const subs = (labels: string[]): Sub[] => labels.map((label) => ({ label, href: SOON }));

// Labels + structure: docs/sitemap.md (use exactly).
export const nav: Category[] = [
  {
    key: "about",
    n: "00",
    label: "About IO",
    href: BASE,
    img: P.atrium,
    blurb: "Silal's R&D and venture engine, on 34 hectares beside Al Foah Farm.",
    subs: [
      { label: "Our Story", href: BASE },
      { label: "Team & CEO Message", href: SOON },
      { label: "Virtual Tour", href: SOON, external: true },
    ],
  },
  {
    key: "research",
    n: "01",
    label: "Research & Science",
    href: SOON,
    img: P.microscope,
    blurb: "Breeding, soil, water and food science, proven under arid pressure.",
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
    n: "02",
    label: "Innovation & Venture Platforms",
    href: SOON,
    img: P.pitchRoom,
    blurb: "Funding, incubation and acceleration for agri-food founders.",
    subs: subs(["Farm Innovation Fund", "Incubation", "Accelerator", "Agricultural Challenges"]),
  },
  {
    key: "centres",
    n: "03",
    label: "Centres of Excellence",
    href: SOON,
    img: P.phenotyping,
    blurb: "Specialist hubs for robotics, crop genomics and controlled environments.",
    subs: subs([
      "Agri Robotics & AI",
      "Abiotic Resilience & Crop Genomics (ARC-GEN)",
      "Advanced Controlled Environment Ag (CEA)",
    ]),
  },
  {
    key: "services",
    n: "04",
    label: "Technology & Services",
    href: SOON,
    img: P.soilProbe,
    blurb: "Sensing, desalination, analytics, trials and facilities, on demand.",
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
    n: "05",
    label: "Talent & Training",
    href: SOON,
    img: P.academy,
    blurb: "Growing the next generation of agri-food talent in the UAE.",
    subs: [
      ...subs([
        "Advanced Agritech Academy",
        "Student Sponsorship",
        "Mustadeem / School Programs",
        "IO Academy Training",
      ]),
      { label: "Silal Careers Centre", href: SOON, external: true },
    ],
  },
];

export const platforms = nav.filter((c) => c.key !== "about");

export const footerLinks = {
  resources: [
    { label: "Resources", href: SOON },
    { label: "News & Media", href: `${BASE}/resources/news` },
    { label: "Publications", href: SOON },
    { label: "Projects & Case Studies", href: SOON },
    { label: "FAQs", href: SOON },
  ],
  legal: [
    { label: "Terms of Use", href: SOON },
    { label: "Privacy", href: SOON },
  ],
  contact: SOON,
  linkedin: SOON, // PLACEHOLDER: client LinkedIn URL
};
