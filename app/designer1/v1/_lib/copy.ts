// Verbatim client copy from content/about.md. Do not rewrite.
const teamPhoto = (folder: string, file: string) =>
  `/photos/${encodeURIComponent("iO Team Headshot & Bios")}/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

export const hero = {
  kicker: "Accelerating the Future of Food Security",
  title: "The future of food security is being built in the desert.",
  paras: [
    "Innovation Oasis was created on a simple belief: the conditions challenging agriculture in the UAE today will define agriculture for much of the world tomorrow.",
    "In one of the planet's most demanding growing environments, we bring together researchers, farmers, startups, industry leaders, investors, and policymakers to develop, validate, and scale the technologies needed for a more resilient food system.",
    "If solutions can succeed here, they can succeed almost anywhere.",
  ],
};

export const story = {
  kicker: "Our Story",
  title: "An Oasis Built for What's Next",
  lead: ["Innovation Oasis did not begin with a building.", "It began with a question."],
  paras: [
    "When Silal was established in 2020, food security and agricultural development were at the heart of its mission. Yet one important piece of the puzzle was missing: a place where research, technology, entrepreneurship, and real-world farming could come together to solve practical challenges facing agriculture.",
    "When Dr. Shamal Mohammed joined Silal in 2021, he spent months meeting farmers, universities, government entities, researchers, and technology companies across the UAE. A pattern quickly emerged. Research existed. Commercial technologies existed. Farmers faced urgent challenges. But there was no ecosystem connecting them together.",
  ],
  turn: ["The world had innovation.", "What it lacked was implementation."],
  paras2: [
    "The answer was found in an unexpected place: a 34-hectare parcel of undeveloped land on the opposite side of Al Foah Farm, largely overlooked and unused. Where others saw empty desert, the team saw an opportunity to create a living ecosystem designed around collaboration, experimentation, and impact.",
    "What followed was not the creation of another research center.",
    "It was the creation of Innovation Oasis.",
    "A place where startups can test technologies in real-world conditions. Where researchers and farmers collaborate side-by-side. Where commercial partners help scale solutions. And where the UAE's toughest growing conditions become the ultimate proving ground for the future of food.",
  ],
  close:
    "Today, Innovation Oasis serves as Silal's R&D and venture engine, helping bridge the gap between breakthrough ideas and meaningful impact across agriculture and food systems.",
};

export const leadership = {
  title: "Leadership",
  text: "Innovation Oasis is led by Dr. Shamal Mohammed, CEO. Dr. Mohammed joined Silal in 2021 to build its innovation and R&D function from the ground up, bringing more than two decades of experience running agricultural research facilities in the UK. It was the months he spent meeting farmers, universities, government entities and technology companies across the UAE — described above — that surfaced the gap Innovation Oasis was built to close, and led him to the overlooked plot of land beside Al Foah Farm where it now stands.",
  quote: "If it works here, it can work anywhere.",
  by: "Dr. Shamal Mohammed, CEO, Innovation Oasis",
};

export const team = {
  title: "Our Team",
  intro:
    "Behind every laboratory, trial and partnership at Innovation Oasis is a small, hands-on team that has grown alongside the ecosystem itself",
  text: "Coming from different disciplines and different corners of the world, the team shares one mandate: build for the real world, learn by doing, and prove that solutions tested here can succeed almost anywhere.",
  // Order from content/about.md. Photos per content/team.md: labelled by FOLDER name; missing people get initials.
  members: [
    { name: "Ahmed" },
    { name: "Ali" },
    { name: "Nadia", photo: teamPhoto("Nadia", "Nadia-10.jpg") },
    { name: "Sagar", photo: teamPhoto("Sagar", "Sagar-2.jpg") },
    { name: "Caitlin" },
    { name: "Francisco", photo: teamPhoto("Francisco", "Francisco-7.jpg") },
    { name: "Jude", photo: teamPhoto("Jude", "Jude-1.jpg") },
    { name: "Mohsin", photo: teamPhoto("Mohsin", "Mohsin-4.jpg") },
  ] as { name: string; photo?: string }[],
};

export const arid = {
  kicker: "Why Here?",
  title: "The Arid Advantage",
  lines: ["Many see the desert as a constraint.", "We see it as the world's most important testbed."],
  paras: [
    "Over the coming decades, climate volatility, water scarcity, land degradation, and rising temperatures will reshape agriculture around the world. Conditions once considered unique to the UAE are becoming increasingly common elsewhere.",
    "That creates a unique opportunity. Innovation Oasis exists to help innovators validate solutions under the pressures that define tomorrow's food system today.",
  ],
  pressures: ["Heat", "Water scarcity", "Salinity", "Resource constraints", "Operational complexity"],
  benchmark: "These are not barriers to innovation. They are the benchmark.",
};

export const different = {
  kicker: "What Makes Innovation Oasis Different?",
  title: ["More Than a Research Center.", "More Than an Accelerator."],
  intro: "Most innovation ecosystems focus on one part of the journey. Innovation Oasis was designed to connect them all. We bring together:",
  items: [
    "World-class research facilities",
    "Commercial testbeds",
    "Venture development programs",
    "Industry partnerships",
    "Farmer networks",
    "Academic collaborators",
    "Investment pathways",
    "Food security stakeholders",
  ],
  outro:
    "Under one ecosystem. This integrated model allows promising ideas to move from concept to validation, from validation to adoption, and from local impact to global relevance. Because food security cannot be solved in silos.",
};

export const mission =
  "To fast-track the future of food security by turning the UAE's agricultural challenges into global opportunities for innovation, resilience, and growth.";

export const principles = [
  { title: "We Build for the Real World", text: "Innovation only matters when it can survive outside the lab." },
  { title: "We Connect Ecosystems", text: "Researchers, farmers, startups, industry, and government all have a role to play." },
  { title: "We Learn by Doing", text: "Progress comes through action, adaptation, and continuous improvement." },
  { title: "We Think Beyond Borders", text: "The UAE is our testbed. The world is our opportunity." },
  { title: "We Build Resilience", text: "Not just for today's food systems, but for tomorrow's." },
];

export const journey = [
  {
    when: "2021",
    title: "The Search Begins",
    text: "Following the creation of Silal, a dedicated innovation function begins taking shape. Extensive engagement across farms, universities, government entities, and industry reveals a clear gap between research, technology, and practical implementation.",
  },
  {
    when: "Late 2021",
    title: "An Opportunity in the Desert",
    text: "An overlooked 34-hectare parcel of land adjacent to Al Foah Farm is identified as a potential home for a new agricultural innovation ecosystem. The vision for Innovation Oasis is born.",
  },
  {
    when: "2022",
    title: "Building the Blueprint",
    text: "A comprehensive masterplan is developed with global research and infrastructure partners. Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces are designed around one goal: accelerating innovation.",
  },
  {
    when: "2022",
    title: "First Innovation Partners Arrive",
    text: "Early collaborations begin with pioneering agritech companies, demonstrating a new model where innovators can validate technologies directly within the UAE's agricultural environment.",
  },
  {
    when: "2023",
    title: "From Vision to Reality",
    text: "Construction, equipment installation, and ecosystem activation advance rapidly. Research capabilities, specialized laboratories, greenhouse infrastructure, and field-testing assets come online.",
  },
  {
    when: "2024",
    title: "Official Inauguration",
    text: "Innovation Oasis officially opens as a state-of-the-art center for agricultural research, innovation, validation, and commercialization. Global partners begin using the facility as a launchpad for collaboration and growth.",
  },
  {
    when: "2025",
    title: "Building the Ecosystem",
    text: "The focus expands from infrastructure to people. Research teams grow, partnerships mature, venture programs launch, and Innovation Oasis strengthens its role as a connector across the regional and global agrifood ecosystem.",
  },
  {
    when: "2030 Vision",
    title: "Global Leadership in Desert Agriculture",
    text: "Innovation Oasis aims to become the global reference point for arid-climate agriculture, food system resilience, and agritech deployment, helping shape research, investment, commercialization, and policy for the future of food security.",
  },
];

export const ahead = {
  title: "Looking Ahead",
  paras: [
    "The next chapter of Innovation Oasis is larger than any single facility.",
    "Our ambition is to become a platform that not only advances technology but helps shape the future of food security itself. A place where research informs policy. Where innovation informs investment. Where today's challenges become tomorrow's exportable solutions.",
    "Because building a resilient food future requires more than innovation.",
  ],
  close: ["It requires an ecosystem.", "And that ecosystem is growing here."],
};
