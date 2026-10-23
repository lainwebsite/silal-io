import { P } from "./photo";

/*
 * News & Media — press releases.
 * SAMPLE ENTRIES for layout only: titles, dates, excerpts and bodies are placeholders written in the
 * page's voice around real Innovation Oasis subjects (photos from the client library). Replace with
 * releases supplied by the client (see docs/designer2.md and the BRIEF request). The closing
 * "About Innovation Oasis" boilerplate is the client's own copy (content/about.md), verbatim.
 */

export type Category = "Announcements" | "Programmes" | "Research" | "Events" | "Training";

/** Topics = the sitemap's five areas. */
export type Topic = "Research & Science" | "Innovation & Venture Platforms" | "Centres of Excellence" | "Technology & Services" | "Talent & Training";
export const topics: Topic[] = ["Research & Science", "Innovation & Venture Platforms", "Centres of Excellence", "Technology & Services", "Talent & Training"];

export type Release = {
  slug: string;
  date: string; // ISO, sample
  category: Category;
  topic?: Topic;
  /** Feed card face: the photo (default), the IO mark on a colour field, or a typographic card. */
  card?: { style: "mark" | "type"; tone: "blue" | "charcoal"; text?: string };
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
    topic: "Research & Science",
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
    topic: "Innovation & Venture Platforms",
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
    topic: "Innovation & Venture Platforms",
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
    topic: "Talent & Training",
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
    topic: "Centres of Excellence",
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
    topic: "Technology & Services",
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
    topic: "Centres of Excellence",
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
    topic: "Research & Science",
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
    topic: "Innovation & Venture Platforms",
    title: "Partners tour the 34-hectare site",
    excerpt: "Researchers, farmers and industry partners walked the greenhouses and trial fields side-by-side.",
    body: [
      "Researchers, farmers and industry partners toured the greenhouses and trial fields of Innovation Oasis.",
      "The visit focused on how commercial partners can help scale solutions validated on site.",
    ],
    src: P.tour,
    alt: "Visitors touring a tomato greenhouse",
  },
  {
    slug: "farm-innovation-fund-applications",
    date: "2026-09-15",
    category: "Announcements",
    topic: "Innovation & Venture Platforms",
    card: { style: "type", tone: "charcoal", text: "Farm Innovation Fund" },
    title: "Farm Innovation Fund opens applications for its next cohort",
    excerpt: "Founders building technologies for arid-climate agriculture are invited to apply for funding, testbeds and partners.",
    body: [
      "The Farm Innovation Fund has opened applications for its next cohort, inviting founders building technologies for arid-climate agriculture.",
      "Selected companies gain access to the testbeds, research teams and farmer networks of Innovation Oasis, so promising ideas can move from concept to validation.",
    ],
    src: P.pitchArrival,
    alt: "Founders arriving for the final round of pitches",
  },
  {
    slug: "phenotyping-heat-tolerance-screening",
    date: "2026-07-08",
    category: "Research",
    topic: "Research & Science",
    title: "Phenotyping lab begins heat-tolerance screening",
    excerpt: "Imaging and controlled stress tests help breeders find the varieties that hold up under the conditions of tomorrow.",
    body: [
      "The phenotyping laboratory has begun screening crop varieties for heat tolerance, combining imaging with controlled stress tests.",
      "Results will guide breeding partners towards varieties that perform under heat, water scarcity and salinity.",
    ],
    src: P.phenotyping,
    alt: "Plants on a phenotyping line in the laboratory",
  },
  {
    slug: "school-programme-on-site",
    date: "2026-05-20",
    category: "Training",
    topic: "Talent & Training",
    title: "Students spend a week in the labs and greenhouses",
    excerpt: "The school programme brings the next generation into real research, side-by-side with the team.",
    body: [
      "Students spent a week in the laboratories and greenhouses of Innovation Oasis as part of the school programme.",
      "Working side-by-side with researchers, they learned how solutions are tested in real-world conditions.",
    ],
    src: P.labWorking,
    alt: "A researcher working in a laboratory",
  },
  {
    slug: "accelerator-field-validation",
    date: "2026-03-02",
    category: "Programmes",
    topic: "Innovation & Venture Platforms",
    title: "Accelerator cohort moves into field validation",
    excerpt: "Startups take their technologies from the pitch room to the trial plots, under the pressures that define tomorrow’s food system.",
    body: [
      "Startups in the accelerator have moved into field validation, taking their technologies from the pitch room to the trial plots.",
      "Each company works with researchers and farmers to test its solution under heat, water scarcity and salinity.",
    ],
    src: P.pitchGlobal,
    alt: "An audience at a pitch session",
  },
  {
    slug: "blueberry-controlled-environment-trials",
    date: "2026-01-27",
    category: "Research",
    topic: "Centres of Excellence",
    title: "Blueberries trialled in controlled environments",
    excerpt: "Crop diversification research tests whether high-value fruit can be grown efficiently in the desert.",
    body: [
      "Crop diversification research is testing whether blueberries can be grown efficiently in controlled environments.",
      "The trials measure yield, water use and energy, so growers can judge which crops make sense under arid conditions.",
    ],
    src: P.blueberry,
    alt: "Blueberry plants in a controlled-environment trial",
  },
  {
    slug: "conversation-dr-shamal-mohammed",
    date: "2025-12-10",
    category: "Announcements",
    topic: "Research & Science",
    title: "“If it works here, it can work anywhere”: a conversation with Dr. Shamal Mohammed",
    excerpt: "The CEO of Innovation Oasis on why the desert is the world’s most important testbed.",
    body: [
      "Dr. Shamal Mohammed, CEO of Innovation Oasis, spoke about why the desert is the world’s most important testbed.",
      "“If it works here, it can work anywhere,” he said, describing an ecosystem where research, technology and farming meet.",
    ],
    src: P.ceo,
    alt: "Dr. Shamal Mohammed, CEO of Innovation Oasis",
  },
  {
    slug: "agricultural-challenges-call",
    date: "2025-10-06",
    category: "Programmes",
    topic: "Innovation & Venture Platforms",
    card: { style: "type", tone: "blue", text: "Agricultural Challenges" },
    title: "Agricultural Challenges: a call for solutions to heat, water and salinity",
    excerpt: "Innovators are invited to answer real problems set by farmers, with the testbeds to prove their solutions.",
    body: [
      "Agricultural Challenges invites innovators to answer real problems set by farmers: heat, water scarcity, salinity and resource constraints.",
      "Shortlisted solutions are tested at Innovation Oasis, where the UAE’s toughest conditions become the benchmark.",
    ],
    src: P.greenhouseWide,
    alt: "A greenhouse at Innovation Oasis",
  },
  {
    slug: "solar-desalination-pilot",
    date: "2025-08-18",
    category: "Research",
    topic: "Technology & Services",
    card: { style: "mark", tone: "charcoal" },
    title: "Solar desalination pilot supplies water for trials",
    excerpt: "A pilot tests how solar-powered desalination can support irrigation where fresh water is scarce.",
    body: [
      "A solar desalination pilot is supplying water for trials at Innovation Oasis.",
      "The project tests how renewable energy and desalination can support irrigation where fresh water is scarce.",
    ],
    src: P.greenhouseRoofs,
    alt: "Greenhouse roofs on the desert edge",
  },
  {
    slug: "io-sense-for-partners",
    date: "2024-11-14",
    category: "Announcements",
    topic: "Technology & Services",
    card: { style: "type", tone: "charcoal", text: "iO Sense" },
    title: "iO Sense opens to partners",
    excerpt: "Sensing and data services, proven on site, are now available to growers and partners.",
    body: [
      "iO Sense, the sensing and data service developed and proven on site, is now available to growers and partners.",
      "It helps farmers measure what matters in the field and act on evidence.",
    ],
    src: P.soilSample,
    alt: "Soil samples prepared for analysis",
  },
  {
    slug: "analytical-services-expand",
    date: "2024-07-01",
    category: "Research",
    topic: "Technology & Services",
    title: "Analytical services expand with new laboratory capacity",
    excerpt: "Soil, water and plant analysis for partners, from the laboratories of Innovation Oasis.",
    body: [
      "Analytical services have expanded with new laboratory capacity for soil, water and plant analysis.",
      "Partners can now test samples on site, shortening the time between a trial and a decision.",
    ],
    src: P.labWide,
    alt: "A laboratory at Innovation Oasis",
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
