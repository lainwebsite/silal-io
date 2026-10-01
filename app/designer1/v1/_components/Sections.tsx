/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import s from "../v1.module.css";
import { Arrow, IoMark } from "./Brand";
import { Reveal } from "./Motion";
import { arid, different, leadership, mission } from "../_lib/copy";
import { BASE } from "../_lib/site";
import { P } from "../_lib/photo";

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <span className={`${s.kicker} ${light ? s.kickerLight : ""}`}>{children}</span>;
}

export function SectionHead({
  kicker,
  title,
  aside,
  light = false,
}: {
  kicker: string;
  title: ReactNode;
  aside?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={s.sectionHead}>
      <Reveal>
        <Kicker light={light}>{kicker}</Kicker>
        <h2 className={s.h2}>{title}</h2>
      </Reveal>
      {aside ? (
        <Reveal delay={1} className={s.sectionHeadAside}>
          {aside}
        </Reveal>
      ) : null}
    </div>
  );
}

// Deep-green macro-leaf "chapter" page, as in the guidelines.
export function AridChapter({ withQuote = false }: { withQuote?: boolean }) {
  return (
    <section className={s.chapter}>
      <div className={s.chapterMedia}>
        <Image src={P.blueberry} alt="" fill sizes="100vw" />
      </div>
      <div className={`${s.wrap} ${s.chapterInner}`}>
        <div className={s.chapterHead}>
          <Reveal>
            <Kicker light>
              {arid.kicker} {arid.title}
            </Kicker>
          </Reveal>
          <Reveal delay={1}>
            <h2 className={s.display}>
              {arid.lines[0]} <span className={s.dim}>{arid.lines[1]}</span>
            </h2>
          </Reveal>
        </div>
        <div className={s.chapterGrid}>
          <Reveal className={s.chapterText}>
            {arid.paras.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <ul className={s.pressures}>
            {arid.pressures.map((x, i) => (
              <Reveal as="li" key={x} delay={i}>
                <span className={s.pressureNum}>{String(i + 1).padStart(2, "0")}</span>
                <span>{x.toLowerCase()}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal>
          <p className={s.benchmark}>{arid.benchmark}</p>
        </Reveal>
        {withQuote ? (
          <Reveal>
            <p className={s.chapterQuote}>“{leadership.quote}”</p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

// "We bring together": eight parts of the ecosystem wired into the IO mark like the helix rungs.
export function Ecosystem({ withHead = true }: { withHead?: boolean }) {
  const left = different.items.slice(0, 4);
  const right = different.items.slice(4);
  return (
    <section className={`${s.section} ${s.sectionLight}`}>
      <div className={s.wrap}>
        {withHead ? (
          <SectionHead
            kicker={different.kicker}
            title={
              <>
                {different.title[0]} <span className={s.accent}>{different.title[1]}</span>
              </>
            }
            aside={<p className={s.lead}>{different.intro}</p>}
          />
        ) : null}
        <div className={s.eco}>
          <ul className={s.ecoCol} data-side="left">
            {left.map((x, i) => (
              <Reveal as="li" key={x} delay={i}>
                <span>{x}</span>
                <i aria-hidden="true" />
              </Reveal>
            ))}
          </ul>
          <Reveal className={s.ecoCore}>
            <IoMark height={220} alt="Innovation Oasis" />
          </Reveal>
          <ul className={s.ecoCol} data-side="right">
            {right.map((x, i) => (
              <Reveal as="li" key={x} delay={i}>
                <i aria-hidden="true" />
                <span>{x}</span>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal>
          <p className={s.ecoOutro}>{different.outro}</p>
        </Reveal>
      </div>
    </section>
  );
}

// Letterhead motif: a thin blue rule that runs into the IO mark.
export function QuoteBand() {
  return (
    <section className={s.section}>
      <div className={s.wrap}>
        <Reveal className={s.quote}>
          <blockquote>
            <span className={s.quoteMarks} aria-hidden="true">
              “
            </span>
            {leadership.quote}
          </blockquote>
          <div className={s.quoteRule}>
            <span />
            <IoMark height={56} alt="" />
          </div>
          <figcaption>{leadership.by}</figcaption>
        </Reveal>
      </div>
    </section>
  );
}

export function MissionBand({ padTop = false }: { padTop?: boolean }) {
  return (
    <section className={s.section} style={padTop ? undefined : { paddingTop: 0 }}>
      <div className={s.wrap}>
        <div className={s.mission}>
          <img src="/brand/io-mark.svg" alt="" className={s.missionMark} />
          <Reveal className={s.missionBody}>
            <Kicker>Our Mission</Kicker>
            <p className={s.missionText}>{mission}</p>
            <div className={s.ctaRow}>
              <Link href={`${BASE}/enquire`} className={`${s.btn} ${s.btnPrimary}`}>
                Partner with IO <Arrow />
              </Link>
              <Link href={`${BASE}/contact`} className={`${s.btn} ${s.btnGhost}`}>
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
