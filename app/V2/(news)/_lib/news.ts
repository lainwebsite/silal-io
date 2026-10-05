import { P } from "./photo";

/*
 * News & Media — press releases.
 * SAMPLE ENTRIES for layout only: titles, dates, excerpts and bodies are placeholders written in the
 * page's voice around real Innovation Oasis subjects (photos from the client library). Replace with
 * releases supplied by the client (see docs/designer2.md and the BRIEF request). The closing
 * "About Innovation Oasis" boilerplate is the client's own copy (content/about.md), verbatim.
 */

export type Category = "Announcements" | "Programmes" | "Research" | "Events" | "Training";

export type Release = {
  slug: string;
  date: string; // ISO, sample
  category: Category;
  title: string;
  excerpt: string;
  body: string[];
  src: string;
  alt: string;
};

export const categories: Category[] = ["Announcements", "Programmes", "Research", "Events", "Training"];

export const releases: Release[] = [
  {
    slug: "innovation-oasis-officially-opens",
    date: "2024-04-18",
    category: "Announcements",
    title: "Innovation Oasis officially opens as Silal’s R&D and venture engine",
    excerpt:
      "A state-of-the-art center for agricultural research, innovation, validation and commercialization opens on 34 hectares beside Al Foah Farm, Al Ain.",
    body: [
      "Innovation Oasis has officially opened as a state-of-the-art center for agricultural research, innovation, validation, and commercialization, on a 34-hectare site on the opposite side of Al Foah Farm.",
      "Laboratories, controlled-environment facilities, field-testing areas, greenhouses and collaboration spaces now sit together on one campus, designed around a single goal: accelerating innovation.",
      "Global partners will use the facility as a launchpad for collaboration and growth, testing technologies directly within the UAE’s agricultural environment.",
    ],
    src: P.inaugurationCeremony,
    alt: "Guests at the official inauguration of Innovation Oasis",
  },
  {
    slug: "foodtech-challenge-winners",
    date: "2025-11-26",
    category: "Programmes",
    title: "FoodTech Challenge winners recognised at Innovation Oasis",
    excerpt:
      "Startups developing technologies for arid-climate agriculture were recognised after a final round of pitches to partners and investors.",
    body: [
      "Startups developing technologies for arid-climate agriculture were recognised after a final round of pitches to a panel of partners and investors.",
      "The programme connects founders with the testbeds, research teams and farmer networks they need to validate their solutions under real conditions.",
    ],
    src: P.awardsWinners,
    alt: "FoodTech Challenge winners on stage",
  },
  {
    slug: "finalists-pitch-arid-farming-technologies",
    date: "2025-11-25",
    category: "Events",
    title: "Finalists pitch technologies built for the desert",
    excerpt:
      "From water efficiency to protected cultivation, finalists presented solutions designed to work under the pressures that define tomorrow’s food system.",
    body: [
      "From water efficiency to protected cultivation, finalists presented solutions designed to work under the pressures that define tomorrow’s food system.",
      "Each pitch was followed by questions from researchers and industry partners on how the technology would be validated in the field.",
    ],
    src: P.pitchRoom,
    alt: "A founder pitching to an audience during the final round",
  },
  {
    slug: "advanced-agritech-academy-first-cohort",
    date: "2025-09-14",
    category: "Training",
    title: "Advanced Agritech Academy welcomes its first cohort",
    excerpt:
      "A new generation of agri-food talent begins hands-on training in laboratories, greenhouses and the field.",
    body: [
      "A new generation of agri-food talent has begun hands-on training across the laboratories, greenhouses and field-testing areas of Innovation Oasis.",
      "The programme pairs classroom learning with work alongside research teams, so that skills are built for the real world.",
    ],
    src: P.academy,
    alt: "A trainee at the Advanced Agritech Academy",
  },
  {
    slug: "growth-chambers-online",
    date: "2025-06-03",
    category: "Research",
    title: "New growth chambers come online for controlled-environment trials",
    excerpt: "Precisely controlled light, temperature and humidity let teams test crops against the conditions of tomorrow.",
    body: [
      "New growth chambers have come online, allowing research teams to precisely control light, temperature and humidity.",
      "The chambers let partners test how crops respond to heat, water scarcity and salinity before moving into greenhouse and field trials.",
    ],
    src: P.growthChamber,
    alt: "A researcher inspecting plants inside a growth chamber",
  },
  {
    slug: "soil-sensing-field-trials",
    date: "2025-03-11",
    category: "Research",
    title: "Soil-sensing trials begin in the field-testing areas",
    excerpt: "Sensors tested in real conditions help growers use every drop of water where it matters.",
    body: [
      "Soil-sensing technologies are being tested in the field-testing areas, measuring moisture and soil health in real desert conditions.",
      "The trials help growers understand where and when water matters most.",
    ],
    src: P.soilProbe,
    alt: "A soil sensor probe being tested at the base of a tree",
  },
  {
    slug: "drone-crop-monitoring",
    date: "2024-12-02",
    category: "Research",
    title: "Drone-based crop monitoring tested across the trial plots",
    excerpt: "Aerial data gives researchers and farmers a shared view of every plot, every week.",
    body: [
      "Drone-based monitoring is being tested across the trial plots, giving researchers and farmers a shared view of crop health.",
      "The data feeds directly into trial design, so decisions are made on evidence gathered in the field.",
    ],
    src: P.droneSky,
    alt: "An agricultural drone in flight over the site",
  },
  {
    slug: "hydroponic-tomato-trials",
    date: "2024-09-23",
    category: "Research",
    title: "Hydroponic tomato trials begin in the greenhouses",
    excerpt: "Soilless systems are tested for yield and water use under the UAE’s toughest growing conditions.",
    body: [
      "Hydroponic tomato trials have begun in the greenhouses of Innovation Oasis, testing soilless systems for yield and water use.",
      "Results will be shared with partners and growers to support adoption across the region.",
    ],
    src: P.hydroTomato,
    alt: "A tomato seedling growing in a hydroponic system",
  },
  {
    slug: "partners-tour-the-site",
    date: "2024-06-10",
    category: "Events",
    title: "Partners tour the 34-hectare site",
    excerpt: "Researchers, farmers and industry partners walked the greenhouses and trial fields side-by-side.",
    body: [
      "Researchers, farmers and industry partners toured the greenhouses and trial fields of Innovation Oasis.",
      "The visit focused on how commercial partners can help scale solutions validated on site.",
    ],
    src: P.tour,
    alt: "Visitors touring a tomato greenhouse",
  },
];

/** The client's own copy (content/about.md), used verbatim as the press-release boilerplate. */
export const boilerplate = [
  "Innovation Oasis was created on a simple belief: the conditions challenging agriculture in the UAE today will define agriculture for much of the world tomorrow.",
  "In one of the planet’s most demanding growing environments, we bring together researchers, farmers, startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies needed for a more resilient food system.",
  "Today, Innovation Oasis serves as Silal’s R&D and venture engine, helping bridge the gap between breakthrough ideas and meaningful impact across agriculture and food systems.",
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export const fmtDate = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d} ${MONTHS[Number(m) - 1]} ${y}`;
};

export const year = (iso: string) => iso.slice(0, 4);
