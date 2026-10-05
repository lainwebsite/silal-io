import { journey } from "../_lib/copy";
import { BASE, categories } from "../_lib/site";
import { HQ, P } from "../_lib/photo";

// 3D site tour content.
// Titles + the two journey entries are verbatim from the client About PDF.
// `text` on facility stops is DRAFT copy (paraphrasing the PDF; no new facts) — to be replaced by client copy.
// `related` links come from docs/sitemap.md.

const find = (label: string) => {
  for (const c of categories) {
    const s = c.subs.find((x) => x.label === label);
    if (s) return { label, href: s.href };
  }
  return { label, href: BASE };
};

export type TourStop = {
  key: string;
  title: string;
  text: string;
  draft?: boolean;
  img: string;
  facts?: string[];
  related?: { label: string; href: string }[];
  cta?: { label: string; href: string };
};

export const tour: TourStop[] = [
  {
    key: "overview",
    title: journey[1].title,
    text: journey[1].text,
    img: P.aerialPlots,
    facts: ["34 hectares", "Al Foah Farm, Al Ain"],
  },
  {
    key: "labs",
    title: "Laboratories",
    text: "Specialised laboratories where research teams analyse plants, soil, water and food, close to the fields where solutions are tested.",
    draft: true,
    img: HQ.labWorking,
    related: [find("Analytical Services"), find("Food Technology"), find("Precision Breeding & Plant Health")],
  },
  {
    key: "cea",
    title: "Controlled-environment facilities",
    text: "Growth chambers and phenotyping rooms where heat, light and humidity can be set precisely, so crops can be screened before they reach the field.",
    draft: true,
    img: HQ.phenotyping2,
    related: [find("Advanced Controlled Environment Ag (CEA)"), find("Abiotic Resilience & Crop Genomics (ARC-GEN)")],
  },
  {
    key: "greenhouses",
    title: "Greenhouses",
    text: "Greenhouses where crops and growing technologies are validated in real production conditions.",
    draft: true,
    img: HQ.greenhouseWide,
    related: [find("Paid Trials"), find("Crop Diversification Research")],
  },
  {
    key: "fields",
    title: "Field-testing areas",
    text: "Open-field trial plots where solutions face the pressures that define tomorrow’s food system: heat, water scarcity and salinity.",
    draft: true,
    img: P.fieldSpecialist,
    related: [find("R&D Trialing"), find("Soil & Water Research"), find("Agri Robotics & AI")],
  },
  {
    key: "collab",
    title: "Collaboration spaces",
    text: "Shared spaces where researchers, farmers, startups and partners work side-by-side.",
    draft: true,
    img: HQ.atrium,
    related: [find("Incubation"), find("Accelerator"), find("Facilities as a Service")],
  },
  {
    key: "masterplan",
    title: journey[2].title,
    text: journey[2].text,
    img: HQ.canopy,
    cta: { label: "Virtual Tour", href: "#" }, // sitemap: About IO → ↗ Virtual Tour (URL TBC)
  },
];
