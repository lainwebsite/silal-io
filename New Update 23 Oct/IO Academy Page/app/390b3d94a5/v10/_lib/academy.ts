import { P } from "./photo";

/*
 * IO Academy Training: library + training detail copy (Talent & Training → IO Academy Training).
 * SAMPLE CONTENT for structure and tone: course titles, dates, prices, session plans and trainer roles are
 * placeholders written around real Innovation Oasis subjects (docs/sitemap.md, content/about.md). No trainer
 * names or photos are invented; cards show the role only. Replace with the Academy's real catalogue.
 * Detail structure follows delphy.nl/en/trainings/…: facts bar → request information → intro + quote →
 * what you learn → planning → content → how it works → the result → information → trainers → question.
 */

export type Mode = "Online" | "On campus" | "Blended";
export type Track = "Controlled Environment" | "Water & Soil" | "Crops & Breeding" | "Robotics & Data" | "Venture & Business";

export const tracks: Track[] = ["Controlled Environment", "Water & Soil", "Crops & Breeding", "Robotics & Data", "Venture & Business"];
export const modes: Mode[] = ["Online", "On campus", "Blended"];

export type Course = {
  slug: string;
  title: string;
  track: Track;
  mode: Mode;
  level: "Foundation" | "Advanced";
  /** short card line, e.g. "8 sessions · 1.5 h" */
  length: string;
  excerpt: string;
  src: string;
  alt: string;
  facts: { audience: string; prior: string; language: string; duration: string; investment: string; certificate: string };
  intro: string[];
  quote: { text: string; by: string };
  learn: string[];
  planning: { intake: string; sessions: string[]; time: string; place: string };
  content: string[];
  how: string[];
  result: string[];
  concepts: string[];
  trainers: { role: string; focus: string }[];
  faq: { q: string; a: string }[];
};

/** false until the training detail page (branch 23-oct/training-detail-page) is merged: library cards stay inert instead of 404ing. */
export const DETAIL_LIVE = false;

export const SAMPLE_NOTE = "Sample course shown for structure and tone. Dates, fees and session plans to be supplied by the IO Academy.";

const ENGLISH = "English (Arabic on request)";

export const courses: Course[] = [
  {
    slug: "controlled-environment-agriculture-hightech-greenhouse",
    title: "Controlled Environment Agriculture: High-tech Greenhouse Management",
    track: "Controlled Environment",
    mode: "Online",
    level: "Advanced",
    length: "8 sessions · 1.5 h",
    excerpt: "Climate, light, water and crop balance in a high-tech greenhouse, taught by the team that runs one in the desert.",
    src: P.greenhouseLeafy,
    alt: "Leafy crops growing in a controlled-environment greenhouse at Innovation Oasis",
    facts: {
      audience: "Growers, greenhouse managers and technical staff",
      prior: "Hands-on experience in protected cultivation",
      language: ENGLISH,
      duration: "8 online sessions of 1.5 hours",
      investment: "AED 3,400 per participant, excl. VAT (sample)",
      certificate: "Certificate of participation",
    },
    intro: [
      "A high-tech greenhouse combines skilled growing with serious technology. The sensors, screens, fans and fertigation units only pay off when the person using them understands what the plant is doing.",
      "Take humidity. Open the vents and you lose CO₂ and heat. Close them and you risk disease and a crop that stops transpiring. Every setting is a trade-off, and in a desert climate the trade-offs are sharper.",
      "This course teaches the plant processes behind each decision, so you steer the greenhouse with reasons, not rules of thumb.",
    ],
    quote: {
      text: "Sample participant quote: I stopped chasing the setpoints and started reading the crop.",
      by: "Participant, sample",
    },
    learn: [
      "You learn the core concepts of protected cultivation, then apply them to your own greenhouse the next day.",
      "The training is interactive: short lectures, real data from our own compartments, exercises and open discussion with the trainers and your fellow growers.",
      "Each session builds on the last, from the plant itself to the climate around it. At the end you receive a certificate of participation.",
    ],
    planning: {
      intake: "Autumn 2026 intake (sample)",
      sessions: ["Session 1 · 5 Oct", "Session 2 · 12 Oct", "Session 3 · 19 Oct", "Session 4 · 26 Oct", "Session 5 · 2 Nov", "Session 6 · 9 Nov", "Session 7 · 16 Nov", "Session 8 · 23 Nov"],
      time: "16:00 – 17:30 GST",
      place: "Live online, recordings for 30 days",
    },
    content: [
      "Plant processes: photosynthesis, respiration and transpiration",
      "CO₂ enrichment and the balance with ventilation",
      "Leaf area index and crop steering",
      "Climate control: temperature, humidity and the vapour pressure deficit",
      "Light: intensity, spectrum and shade management in strong sun",
      "Water supply: irrigation strategy and drain",
      "Fertigation: EC, pH and the nutrient recipe",
      "Cooling a greenhouse in 45 °C heat",
    ],
    how: [
      "The course is online and led live by a trainer. You follow each lecture, ask questions as they come up and complete the exercise before the next session.",
      "It is close to a real classroom: you see the same data screens our team uses, and the trainer reacts to what the group needs.",
    ],
    result: [
      "You can explain why the climate computer does what it does, and when to overrule it.",
      "You steer climate, light and water towards a plant balance, not just a setpoint.",
      "You spot early signs of stress and know which lever to pull first.",
    ],
    concepts: ["Photosynthesis", "Transpiration", "Sink / source balance", "Stomata", "LAI", "VPD", "EC and pH", "Drain strategy", "Energy balance", "Crop steering"],
    trainers: [{ role: "Senior Trainer, Controlled Environment Agriculture", focus: "Climate and crop steering" }],
    faq: [
      { q: "Can my team take it together?", a: "Yes. Teams of three or more can request a private cohort, online or on campus." },
      { q: "What if I miss a session?", a: "Every session is recorded and available for 30 days. You can also join the next intake for the session you missed." },
      { q: "Is the course available in Arabic?", a: "On request. Tell us in the form below and we will plan a cohort." },
    ],
  },
  {
    slug: "precision-irrigation-and-fertigation-in-arid-climates",
    title: "Precision Irrigation & Fertigation in Arid Climates",
    track: "Water & Soil",
    mode: "Blended",
    level: "Foundation",
    length: "3 online + 2 days on campus",
    excerpt: "Water every drop with a reason. Irrigation scheduling, salinity and fertigation, learned in the classroom and in our trial fields.",
    src: P.hydroTomato,
    alt: "Hydroponic tomatoes under precision irrigation",
    facts: {
      audience: "Farm managers, agronomists and irrigation technicians",
      prior: "Basic knowledge of crop production",
      language: ENGLISH,
      duration: "3 online sessions plus 2 days at Innovation Oasis",
      investment: "AED 4,200 per participant, excl. VAT (sample)",
      certificate: "Certificate of completion",
    },
    intro: [
      "Water is the first limit on agriculture in the UAE. Saline water, high evaporation and tight allocations leave very little room for guesswork.",
      "This course moves from theory to the field. You learn how soil, crop and weather decide when and how much to irrigate, then see the same decisions play out in our trial plots.",
    ],
    quote: { text: "Sample participant quote: Two days in the field changed how I read my own sensors.", by: "Participant, sample" },
    learn: [
      "You learn how to build an irrigation schedule from crop demand, soil water and weather data.",
      "You work with salinity, leaching and fertigation recipes, and practise on live systems at the Oasis.",
    ],
    planning: {
      intake: "Winter 2026 intake (sample)",
      sessions: ["Online 1 · 11 Nov", "Online 2 · 18 Nov", "Online 3 · 25 Nov", "Campus days · 3 – 4 Dec"],
      time: "Online 16:00 – 17:30 GST · Campus 08:30 – 16:00",
      place: "Online and Innovation Oasis, Al Ain",
    },
    content: [
      "Soil water, crop water use and evapotranspiration",
      "Reading soil moisture and EC sensors",
      "Irrigation scheduling by crop stage",
      "Managing saline water and leaching",
      "Fertigation: recipes, injectors and checks",
      "System audit: uniformity, leaks and maintenance",
    ],
    how: [
      "Three short online sessions give you the principles. Two days on campus put them to work on real systems, with sensors, trial plots and our team beside you.",
    ],
    result: [
      "You can build and adjust an irrigation plan for a crop and a season.",
      "You can audit a system and name the three fixes that save the most water.",
    ],
    concepts: ["Evapotranspiration", "Field capacity", "Leaching fraction", "EC", "Uniformity", "Fertigation"],
    trainers: [{ role: "Lead Trainer, Soil & Water Research", focus: "Irrigation and salinity" }],
    faq: [
      { q: "Do I need to travel to Al Ain?", a: "The campus days are in person. Teams can request a visit to their own farm instead." },
      { q: "Can I bring my own data?", a: "Please do. The campus days work best with your own irrigation records." },
    ],
  },
  {
    slug: "soil-health-and-water-quality-for-desert-farming",
    title: "Soil Health & Water Quality for Desert Farming",
    track: "Water & Soil",
    mode: "On campus",
    level: "Foundation",
    length: "3 days on campus",
    excerpt: "Sample, test and read soil and water the way our laboratories do, then turn results into farm decisions.",
    src: P.soilProbe,
    alt: "A soil probe taking a sample in the field",
    facts: {
      audience: "Agronomists, farm advisers and laboratory technicians",
      prior: "No prior laboratory experience needed",
      language: ENGLISH,
      duration: "3 days on campus",
      investment: "AED 3,900 per participant, excl. VAT (sample)",
      certificate: "Certificate of completion",
    },
    intro: [
      "Healthy soil is the base of every resilient farm, and in arid land it is also the most misread. A test result only helps if it was taken well and read in context.",
      "Over three days in our soil and water laboratories you learn sampling, analysis and interpretation, and leave with a method you can use at home.",
    ],
    quote: { text: "Sample participant quote: We finally know what our numbers mean.", by: "Participant, sample" },
    learn: [
      "You practise field sampling, then run standard soil and water tests in our laboratory.",
      "You learn to read the results against the crop, the water source and the season.",
    ],
    planning: {
      intake: "Spring 2027 intake (sample)",
      sessions: ["Day 1 · Sampling and field tests", "Day 2 · Laboratory analysis", "Day 3 · Interpretation and action plans"],
      time: "08:30 – 16:00 GST",
      place: "Innovation Oasis, Al Ain",
    },
    content: ["Sampling plans and field tools", "Soil texture, organic matter and structure", "Salinity, sodicity and pH", "Water quality for irrigation", "Reading a laboratory report", "Building a soil health card"],
    how: ["All three days are on campus, in the field and in the laboratory, in groups of up to twelve."],
    result: ["You can design a sampling plan and take a clean sample.", "You can turn a laboratory report into three clear actions for the farm."],
    concepts: ["Soil health card", "Salinity", "Sodicity", "Organic matter", "Infiltration", "Water quality"],
    trainers: [{ role: "Senior Scientist, Soil & Water Research", focus: "Soil health and analysis" }],
    faq: [{ q: "Is accommodation included?", a: "No. We can share a list of nearby options with your confirmation." }],
  },
  {
    slug: "agri-robotics-and-ai-in-the-field",
    title: "Agri Robotics & AI in the Field",
    track: "Robotics & Data",
    mode: "On campus",
    level: "Foundation",
    length: "2 days on campus",
    excerpt: "Drones, sensors and machine learning on a working farm: what they do, what they cost and where they fail.",
    src: P.droneTop,
    alt: "A drone flying over crop plots at Innovation Oasis",
    facts: {
      audience: "Farm managers, engineers and technology teams",
      prior: "Interest in technology; no coding required",
      language: ENGLISH,
      duration: "2 days on campus",
      investment: "AED 3,200 per participant, excl. VAT (sample)",
      certificate: "Certificate of completion",
    },
    intro: [
      "Robots and AI promise a lot to farmers. In the desert, dust, heat and connectivity decide what actually works.",
      "In two days with our Agri Robotics & AI centre you see the tools in use, test them on our plots and learn how to judge a technology before you buy it.",
    ],
    quote: { text: "Sample participant quote: The honest list of what fails was worth the trip.", by: "Participant, sample" },
    learn: [
      "You fly, scout and capture data with field platforms, then see how models turn it into decisions.",
      "You learn a simple method to compare technologies on cost, reliability and fit.",
    ],
    planning: { intake: "Spring 2027 intake (sample)", sessions: ["Day 1 · Platforms and sensing", "Day 2 · Data, models and decisions"], time: "08:30 – 16:00 GST", place: "Innovation Oasis, Al Ain" },
    content: ["Aerial and ground platforms", "Multispectral and thermal imaging", "From images to crop insight", "Machine learning in plain language", "Data quality and field connectivity", "Choosing and piloting a technology"],
    how: ["Half of each day is in the field. The rest is hands-on with data, in small groups."],
    result: ["You can read a crop map and ask the right questions of a vendor.", "You can plan a small pilot on your own farm."],
    concepts: ["NDVI", "Thermal imaging", "Phenotyping", "Edge computing", "Pilot design"],
    trainers: [{ role: "Lead Engineer, Agri Robotics & AI", focus: "Field platforms and data" }],
    faq: [{ q: "Do I need to bring a laptop?", a: "Yes, for the data exercises on day two." }],
  },
  {
    slug: "crop-trial-design-and-data-capture",
    title: "Crop Trial Design & Data Capture",
    track: "Crops & Breeding",
    mode: "Blended",
    level: "Advanced",
    length: "4 online + 1 day on campus",
    excerpt: "Plan a trial that gives a clear answer: layout, replication, measurement and analysis, from our R&D trialing team.",
    src: P.aerialPlots,
    alt: "Aerial view of trial plots at Innovation Oasis",
    facts: {
      audience: "Researchers, technology companies and agronomists",
      prior: "Basic statistics",
      language: ENGLISH,
      duration: "4 online sessions plus 1 day on campus",
      investment: "AED 3,600 per participant, excl. VAT (sample)",
      certificate: "Certificate of completion",
    },
    intro: [
      "A good trial answers one question clearly. A weak one costs a season and proves nothing.",
      "Our R&D trialing team runs trials for startups, growers and global partners. This course shares how they design, run and read them.",
    ],
    quote: { text: "Sample participant quote: We redesigned our whole protocol after session two.", by: "Participant, sample" },
    learn: ["You learn to turn a question into a testable design, with the right controls and replication.", "You practise data capture and a first analysis on real trial data."],
    planning: { intake: "Spring 2027 intake (sample)", sessions: ["Online 1 · 10 Feb", "Online 2 · 17 Feb", "Online 3 · 24 Feb", "Online 4 · 3 Mar", "Campus day · 10 Mar"], time: "Online 16:00 – 17:30 GST", place: "Online and Innovation Oasis, Al Ain" },
    content: ["From question to hypothesis", "Plot layout, replication and randomisation", "Measurements and sampling", "Field notes and digital data capture", "Analysis and reporting", "Scaling a result beyond one site"],
    how: ["Four online sessions build your trial plan. The campus day tests it against our field conditions with the trial team."],
    result: ["You leave with a written trial plan ready to run.", "You know what a result can and cannot claim."],
    concepts: ["Replication", "Randomisation", "Control", "Variance", "Protocol", "Data capture"],
    trainers: [{ role: "Head of R&D Trialing", focus: "Trial design and analysis" }],
    faq: [{ q: "Can I bring a real trial question?", a: "Yes. Participants who bring a question work on it during the course." }],
  },
  {
    slug: "quinoa-and-alternative-crops-from-trial-to-value-chain",
    title: "Quinoa & Alternative Crops: From Trial to Value Chain",
    track: "Crops & Breeding",
    mode: "On campus",
    level: "Foundation",
    length: "2 days on campus",
    excerpt: "What it takes to grow and bring a new crop to market in the UAE, using our quinoa programme as the case.",
    src: P.fieldSpecialist,
    alt: "A field specialist inspecting crops in a trial field",
    facts: {
      audience: "Growers, food companies and agri-business teams",
      prior: "None",
      language: ENGLISH,
      duration: "2 days on campus",
      investment: "AED 2,900 per participant, excl. VAT (sample)",
      certificate: "Certificate of completion",
    },
    intro: [
      "Crop diversification makes a food system more resilient, but only when the whole chain works: seed, field, processing and buyer.",
      "Our quinoa value chain programme is the case study. You walk the chain from field to product and leave with a checklist for any new crop.",
    ],
    quote: { text: "Sample participant quote: The value chain view changed which questions we ask first.", by: "Participant, sample" },
    learn: ["You see how variety, sowing date and water decide yield in the desert.", "You follow the crop through harvest, processing and market."],
    planning: { intake: "Winter 2026 intake (sample)", sessions: ["Day 1 · In the field", "Day 2 · Processing and market"], time: "08:30 – 16:00 GST", place: "Innovation Oasis, Al Ain" },
    content: ["Choosing crops and varieties for arid land", "Field practice and water use", "Harvest and post-harvest", "Processing and food technology", "Market and partner mapping", "A go / no-go checklist"],
    how: ["In the field in the morning, around the table in the afternoon, with the researchers who run the programme."],
    result: ["You can judge whether a new crop fits your land, water and market.", "You know which partners to talk to first."],
    concepts: ["Variety trial", "Yield stability", "Value chain", "Post-harvest", "Go / no-go"],
    trainers: [{ role: "Research Lead, Crop Diversification", focus: "Quinoa and alternative crops" }],
    faq: [{ q: "Is this course only about quinoa?", a: "No. Quinoa is the case; the method applies to any new crop." }],
  },
  {
    slug: "agri-food-venture-bootcamp",
    title: "Agri-food Venture Bootcamp",
    track: "Venture & Business",
    mode: "On campus",
    level: "Foundation",
    length: "5 days on campus",
    excerpt: "From idea to first pilot: problem, proof, pitch. For founders and intrapreneurs building for agriculture and food.",
    src: P.pitchRoom,
    alt: "A founder pitching to an audience at Innovation Oasis",
    facts: {
      audience: "Founders, researchers and intrapreneurs",
      prior: "An idea or an early prototype",
      language: ENGLISH,
      duration: "5 days on campus",
      investment: "AED 5,000 per participant, excl. VAT (sample)",
      certificate: "Certificate of completion",
    },
    intro: [
      "Agriculture rewards ideas that survive reality. The best founders prove their idea in the field early, and know who will pay for it.",
      "In five days beside our incubation and accelerator teams, you sharpen the problem, plan a field proof and rehearse the pitch.",
    ],
    quote: { text: "Sample participant quote: We left with a pilot plan and three introductions.", by: "Participant, sample" },
    learn: ["You work on your own venture with mentors, farmers and investors in the room.", "You leave with a pilot plan, a one-page pitch and a map of next steps."],
    planning: { intake: "Spring 2027 intake (sample)", sessions: ["Day 1 · Problem", "Day 2 · Customer and farmer", "Day 3 · Proof in the field", "Day 4 · Business model", "Day 5 · Pitch day"], time: "09:00 – 17:00 GST", place: "Innovation Oasis, Al Ain" },
    content: ["Problem and customer discovery", "Designing a field pilot", "Regulation and market access in the UAE", "Business model and pricing", "Funding routes, including the Farm Innovation Fund", "Pitch craft"],
    how: ["Workshops in the morning, mentor sessions in the afternoon, a public pitch on day five."],
    result: ["You hold a clear pilot plan and the story to back it.", "You know which IO platform fits you next: incubation, accelerator or the fund."],
    concepts: ["Pilot", "Customer discovery", "Unit economics", "Pitch", "Incubation", "Accelerator"],
    trainers: [{ role: "Head of Venture Platforms", focus: "Venture building" }],
    faq: [{ q: "Does the bootcamp lead to funding?", a: "Not by itself. It prepares you to apply to our venture platforms." }],
  },
];

export const academyCopy = {
  hero: {
    eyebrow: "Innovation Oasis",
    title: "Learn where the future of food is built.",
    sub: ["Practical training from the people who run Innovation Oasis.", "Toward Advanced Agricultural and Food Systems"],
  },
  statement: "The conditions challenging agriculture in the UAE today will be faced by much of the world tomorrow. Our training prepares you for them.",
  introBody:
    "Short courses for growers, technicians, researchers and founders, taught online and on a working 34-hectare campus beside Al Foah Farm. Every lesson is built on real data from our own laboratories, greenhouses and trial fields.",
  introLead: "If it works here, it can work anywhere.",
  stats: [
    { n: "34", l: "hectare campus where you learn" },
    { n: "5", l: "training tracks, from greenhouse to venture" },
    { n: "3", l: "ways to learn: online, on campus, blended" },
    { n: "7", l: "sample courses shown here" },
  ],
  library: { title: "Find your course.", body: "Filter by track and format, or search by topic. Each course lists who it is for and what you need first." },
  chapter: { eyebrow: "How the Academy works", title: "Learn where the research happens.", lead: "No slides about someone else's farm. You learn with our team, on our data, in conditions that match your own." },
  kicker: "Talent & Training",
  title: "IO Academy",
  intro:
    "Practical training from the people who run Innovation Oasis. Short courses for growers, technicians, researchers and founders, taught online and on a working 34-hectare campus.",
  steps: [
    { n: "01", t: "Choose a course", d: "Browse by track and format. Every course lists who it is for and what you need first." },
    { n: "02", t: "Request information", d: "Send a short form. The Academy team replies with dates, fees and the next intake." },
    { n: "03", t: "Learn at the Oasis", d: "Live lectures online, field days on campus, always with real data from our own facilities." },
    { n: "04", t: "Take it home", d: "Leave with a certificate and a plan you can apply on your own farm the next day." },
  ],
  inhouse: {
    title: "Need training for your whole team?",
    body: "We tailor courses for companies, farms and government entities: on campus, at your site or online, in English or Arabic.",
    cta: "Talk to the Academy",
  },
};
