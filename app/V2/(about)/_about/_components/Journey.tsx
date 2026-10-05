"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import a from "../about.module.css";
import { P } from "../../_lib/photo";

gsap.registerPlugin(ScrollTrigger);

// Copy: content/about.md "Our Journey", verbatim. Photos chosen to match each milestone.
const steps = [
  {
    when: "2021",
    year: 2021,
    title: "The Search Begins",
    text: "Following the creation of Silal, a dedicated innovation function begins taking shape. Extensive engagement across farms, universities, government entities, and industry reveals a clear gap between research, technology, and practical implementation.",
    img: P.fieldSpecialist,
    alt: "A specialist walking through crop rows in the field",
  },
  {
    when: "Late 2021",
    year: 2021,
    tag: "Late",
    title: "An Opportunity in the Desert",
    text: "An overlooked 34-hectare parcel of land adjacent to Al Foah Farm is identified as a potential home for a new agricultural innovation ecosystem. The vision for Innovation Oasis is born.",
    img: P.aerialWideAlt,
    alt: "Aerial view of desert land and farms around Al Foah",
    crop: true,
  },
  {
    when: "2022",
    year: 2022,
    title: "Building the Blueprint",
    text: "A comprehensive masterplan is developed with global research and infrastructure partners. Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces are designed around one goal: accelerating innovation.",
    img: P.labWide,
    alt: "A long laboratory with benches and equipment",
  },
  {
    when: "2022",
    year: 2022,
    title: "First Innovation Partners Arrive",
    text: "Early collaborations begin with pioneering agritech companies, demonstrating a new model where innovators can validate technologies directly within the UAE’s agricultural environment.",
    img: P.droneTop,
    alt: "An agricultural drone flying low over desert soil",
  },
  {
    when: "2023",
    year: 2023,
    title: "From Vision to Reality",
    text: "Construction, equipment installation, and ecosystem activation advance rapidly. Research capabilities, specialized laboratories, greenhouse infrastructure, and field-testing assets come online.",
    img: P.tomatoAisle,
    alt: "A long greenhouse aisle lined with tomato plants",
  },
  {
    when: "2024",
    year: 2024,
    title: "Official Inauguration",
    text: "Innovation Oasis officially opens as a state-of-the-art center for agricultural research, innovation, validation, and commercialization. Global partners begin using the facility as a launchpad for collaboration and growth.",
    img: P.inaugurationCeremony,
    alt: "Guests at the official inauguration of Innovation Oasis",
  },
  {
    when: "2025",
    year: 2025,
    title: "Building the Ecosystem",
    text: "The focus expands from infrastructure to people. Research teams grow, partnerships mature, venture programs launch, and Innovation Oasis strengthens its role as a connector across the regional and global agrifood ecosystem.",
    img: P.pitchWinners,
    alt: "FoodTech Challenge winners on stage",
  },
  {
    when: "2030 Vision",
    year: 2030,
    tag: "Vision",
    title: "Global Leadership in Desert Agriculture",
    text: "Innovation Oasis aims to become the global reference point for arid-climate agriculture, food system resilience, and agritech deployment, helping shape research, investment, commercialization, and policy for the future of food security.",
    img: P.aerialCampus,
    alt: "Aerial view of the Innovation Oasis campus with a digital overlay",
  },
];

const DIGITS = Array.from({ length: 10 }, (_, i) => i);

function Digit({ d }: { d: number }) {
  return (
    <span className={a.odoDigit}>
      <span className={a.odoStrip} style={{ transform: `translateY(${-d * 10}%)` }}>
        {DIGITS.map((n) => (
          <span key={n}>{n}</span>
        ))}
      </span>
    </span>
  );
}

// Sticky year odometer + photo stack on the start side; milestones scroll past on the end side.
export function Journey() {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const cur = steps[active];

  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>("[data-step]");
      items.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 55%",
          end: "bottom 55%",
          onToggle: (self) => self.isActive && setActive(i),
        });
      });
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-journey-line]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: { trigger: "[data-steps]", start: "top 55%", end: "bottom 55%", scrub: true },
          },
        );
      });
    },
    { scope: root },
  );

  const tens = Math.floor((cur.year % 100) / 10);
  const ones = cur.year % 10;

  return (
    <div className={a.jour} ref={root}>
      <div className={a.jourGrid}>
        <div className={a.jourStage}>
          <div className={a.jourStick}>
            <p className={a.jourTag} aria-hidden>
              <span key={cur.when}>{cur.tag ?? "Milestone"}</span>
              <span>
                {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
            </p>
            <p className={a.odo} aria-hidden>
              <span>2</span>
              <span>0</span>
              <Digit d={tens} />
              <Digit d={ones} />
            </p>
            <div className={a.jourFrames}>
              {steps.map((s, i) => (
                <div
                  key={s.title}
                  className={a.jourFrame}
                  style={{ zIndex: i }}
                  data-on={i === active ? "" : undefined}
                  data-past={i < active ? "" : undefined}
                >
                  <Image
                    src={s.img}
                    alt={i === active ? s.alt : ""}
                    fill
                    sizes="(max-width: 900px) 100vw, 45vw"
                    className={s.crop ? a.jourCrop : undefined}
                  />
                </div>
              ))}
              <span className={a.corners} aria-hidden />
            </div>
            <ol className={a.jourTicks} aria-hidden data-index-avoid>
              {steps.map((s, i) => (
                <li key={s.title} data-on={i <= active ? "" : undefined}>
                  <span>{s.when.replace(" Vision", "")}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ol className={a.jourSteps} data-steps>
          <i className={a.jourLine} aria-hidden>
            <i data-journey-line />
          </i>
          {steps.map((s, i) => (
            <li key={s.title} className={a.jourStep} data-step data-on={i === active ? "" : undefined}>
              <p className={a.jourWhen}>{s.when}</p>
              <h3 className={a.jourTitle}>{s.title}</h3>
              <p className={a.jourText}>{s.text}</p>
              <div className={a.jourMobileImg}>
                <Image src={s.img} alt="" fill sizes="100vw" className={s.crop ? a.jourCrop : undefined} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
