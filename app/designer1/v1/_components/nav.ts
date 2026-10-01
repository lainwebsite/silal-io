export const BASE = "/designer1/v1";

export const mainNav = [
  { href: `${BASE}/about`, label: "About IO" },
  { href: `${BASE}/research`, label: "Research" },
  { href: `${BASE}/ventures`, label: "Ventures" },
  { href: `${BASE}/challenges`, label: "Challenges" },
  { href: `${BASE}/centres`, label: "Centres" },
  { href: `${BASE}/services`, label: "Services" },
  { href: `${BASE}/resources`, label: "Resources" },
];

export const footerNav = [
  {
    title: "Explore",
    links: [
      { href: `${BASE}/about`, label: "About IO" },
      { href: `${BASE}/team`, label: "Team & CEO message" },
      { href: `${BASE}/research`, label: "Research areas" },
      { href: `${BASE}/ventures`, label: "Venture programmes" },
      { href: `${BASE}/challenges`, label: "Agricultural challenges" },
    ],
  },
  {
    title: "Work with us",
    links: [
      { href: `${BASE}/centres`, label: "Centres of excellence" },
      { href: `${BASE}/services`, label: "Services" },
      { href: `${BASE}/training`, label: "Training" },
      { href: `${BASE}/enquire`, label: "Enquire" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: `${BASE}/resources`, label: "News & media" },
      { href: `${BASE}/resources`, label: "Publications" },
      { href: `${BASE}/faqs`, label: "FAQs" },
      { href: `${BASE}/contact`, label: "Contact" },
    ],
  },
];
