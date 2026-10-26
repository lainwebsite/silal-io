export const BASE = "/390b3d94a5/v10";
export const ACADEMY = `${BASE}/training/io-academy-training`;
export const SOON = "#"; // pages not built yet; LinkGuard keeps them inert

export type Group = { label: string; blurb: string; subs: { label: string; href: string; ext?: boolean }[] };

const s = (label: string) => ({ label, href: SOON });

// Labels + structure: docs/sitemap.md. Blurbs = the new homepage's header dropdowns (prototypes/new-homepage/v2/header.html).
export const nav: Group[] = [
  { label: "About IO", blurb: "Silal's R&D and venture engine.", subs: [s("Our Story"), s("Team & CEO Message"), { label: "Virtual Tour", href: SOON, ext: true }] },
  { label: "Research & Science", blurb: "Plant science, soil, water and food technology, tested in real arid conditions.", subs: ["Precision Breeding & Plant Health", "Crop Diversification Research", "Soil & Water Research", "Food Technology", "R&D Trialing"].map(s) },
  { label: "Innovation & Venture Platforms", blurb: "Funding, incubation and acceleration for agri-food startups.", subs: ["Farm Innovation Fund", "Incubation", "Accelerator", "Agricultural Challenges"].map(s) },
  { label: "Technology & Services", blurb: "Sensing, desalination, analytics, trials and facilities for partners.", subs: ["iO Sense", "Solar Desalination", "Analytical Services", "Paid Trials", "Program Management as a Service", "Facilities as a Service"].map(s) },
  { label: "Centres of Excellence", blurb: "Specialist hubs for robotics, crop genomics and controlled-environment agriculture.", subs: ["Agri Robotics & AI", "Abiotic Resilience & Crop Genomics (ARC-GEN)", "Advanced Controlled Environment Ag (CEA)"].map(s) },
  {
    label: "Talent & Training",
    blurb: "Building the next generation of agri-food talent in the UAE.",
    subs: [s("Advanced Agritech Academy"), s("Student Sponsorship"), s("Mustadeem / School Programs"), { label: "IO Academy Training", href: ACADEMY }],
  },
];
export const footerLinks = { contact: SOON };
