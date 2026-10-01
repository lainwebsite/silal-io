export const BASE = "/designer1/v1";

// Main nav labels are fixed by docs/sitemap.md — use exactly.
export const mainNav = [
  { href: `${BASE}/about`, label: "About IO" },
  { href: `${BASE}/research`, label: "Research & Science" },
  { href: `${BASE}/ventures`, label: "Innovation & Venture Platforms" },
  { href: `${BASE}/centres`, label: "Centres of Excellence" },
  { href: `${BASE}/services`, label: "Technology & Services" },
  { href: `${BASE}/training`, label: "Talent & Training" },
];

export const footerNav = [
  {
    title: "Explore",
    links: mainNav,
  },
  {
    title: "Resources",
    links: [
      { href: `${BASE}/resources`, label: "News & Media" },
      { href: `${BASE}/resources`, label: "Publications" },
      { href: `${BASE}/resources`, label: "Projects & Case Studies" },
      { href: `${BASE}/faqs`, label: "FAQs" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: `${BASE}/contact`, label: "Contact" },
      { href: `${BASE}/enquire`, label: "Enquire" },
      { href: "#", label: "LinkedIn ↗" }, // URL TBC
      { href: "https://io-silal.ae", label: "io-silal.ae ↗" },
    ],
  },
];
