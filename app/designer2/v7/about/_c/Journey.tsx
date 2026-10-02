"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import a from "../about.module.css";
import { Label } from "../../_c/Brand";
import { P } from "../../_lib/photo";

/*
 * Our Journey: the one dark band's partner. Eight milestones on a horizontal track that scrolls
 * natively (swipe / trackpad / drag) with snap; arrow buttons step one card; a hairline shows how
 * far along you are. No pinning, no scroll hijack.
 */
const journey = [
  { when: "2021", title: "The Search Begins", src: P.fieldSpecialist, text: "Following the creation of Silal, a dedicated innovation function begins taking shape. Extensive engagement across farms, universities, government entities, and industry reveals a clear gap between research, technology, and practical implementation." },
  { when: "Late 2021", title: "An Opportunity in the Desert", src: P.droneSky, text: "An overlooked 34-hectare parcel of land adjacent to Al Foah Farm is identified as a potential home for a new agricultural innovation ecosystem. The vision for Innovation Oasis is born." },
  { when: "2022", title: "Building the Blueprint", src: P.labWide, text: "A comprehensive masterplan is developed with global research and infrastructure partners. Laboratories, controlled-environment facilities, field-testing areas, greenhouses, and collaboration spaces are designed around one goal: accelerating innovation." },
  { when: "2022", title: "First Innovation Partners Arrive", src: P.hydroTomato, text: "Early collaborations begin with pioneering agritech companies, demonstrating a new model where innovators can validate technologies directly within the UAE’s agricultural environment." },
  { when: "2023", title: "From Vision to Reality", src: P.greenhouseWide, text: "Construction, equipment installation, and ecosystem activation advance rapidly. Research capabilities, specialized laboratories, greenhouse infrastructure, and field-testing assets come online." },
  { when: "2024", title: "Official Inauguration", src: P.inaugurationCeremony, text: "Innovation Oasis officially opens as a state-of-the-art center for agricultural research, innovation, validation, and commercialization. Global partners begin using the facility as a launchpad for collaboration and growth." },
  { when: "2025", title: "Building the Ecosystem", src: P.pitchWinners, text: "The focus expands from infrastructure to people. Research teams grow, partnerships mature, venture programs launch, and Innovation Oasis strengthens its role as a connector across the regional and global agrifood ecosystem." },
  { when: "2030 Vision", title: "Global Leadership in Desert Agriculture", src: P.aerialCampus, text: "Innovation Oasis aims to become the global reference point for arid-climate agriculture, food system resilience, and agritech deployment, helping shape research, investment, commercialization, and policy for the future of food security." },
];

export function Journey() {
  const track = useRef<HTMLOListElement>(null);
  const [p, setP] = useState(0);
  const [ends, setEnds] = useState<[boolean, boolean]>([true, false]);

  useEffect(() => {
    const t = track.current!;
    const on = () => {
      const max = t.scrollWidth - t.clientWidth;
      setP(max > 0 ? t.scrollLeft / max : 0);
      setEnds([t.scrollLeft < 4, t.scrollLeft > max - 4]);
    };
    on();
    t.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    // drag to scroll with a mouse
    let down = false;
    let x0 = 0;
    let s0 = 0;
    const pd = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      x0 = e.clientX;
      s0 = t.scrollLeft;
      t.dataset.drag = "";
    };
    const pm = (e: PointerEvent) => {
      if (!down) return;
      t.scrollLeft = s0 - (e.clientX - x0);
    };
    const pu = () => {
      down = false;
      delete t.dataset.drag;
    };
    t.addEventListener("pointerdown", pd);
    window.addEventListener("pointermove", pm);
    window.addEventListener("pointerup", pu);
    return () => {
      t.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
      t.removeEventListener("pointerdown", pd);
      window.removeEventListener("pointermove", pm);
      window.removeEventListener("pointerup", pu);
    };
  }, []);

  const step = (dir: number) => {
    const t = track.current!;
    const card = t.querySelector("li");
    const w = card ? card.getBoundingClientRect().width + 16 : 380;
    t.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  return (
    <section className={a.journey} aria-labelledby="journey-h">
      <div className={a.wrap}>
        <div className={a.row}>
          <div className={a.side}>
            <Label dark>2021 — 2030</Label>
          </div>
          <div className={`${a.main} ${a.journeyHead}`}>
            <h2 id="journey-h" className={a.h2} data-lines>
              Our Journey
            </h2>
            <div className={a.arrows}>
              <button type="button" onClick={() => step(-1)} disabled={ends[0]} aria-label="Previous milestone">
                <svg viewBox="0 0 16 16" aria-hidden>
                  <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" onClick={() => step(1)} disabled={ends[1]} aria-label="Next milestone">
                <svg viewBox="0 0 16 16" aria-hidden>
                  <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ol ref={track} className={a.jTrack} tabIndex={0} aria-label="Milestones, 2021 to 2030">
        {journey.map((j, i) => (
          <li key={j.title} className={a.jCard} data-up>
            <div className={a.jImg}>
              <Image src={j.src} alt="" fill sizes="(max-width: 900px) 80vw, 380px" draggable={false} />
            </div>
            <p className={a.jWhen}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {j.when}
            </p>
            <h3 className={a.jTitle}>{j.title}</h3>
            <p className={a.jText}>{j.text}</p>
          </li>
        ))}
      </ol>
      <div className={a.wrap}>
        <div className={a.jBar} aria-hidden>
          <i style={{ transform: `scaleX(${0.125 + p * 0.875})` }} />
        </div>
      </div>
    </section>
  );
}
