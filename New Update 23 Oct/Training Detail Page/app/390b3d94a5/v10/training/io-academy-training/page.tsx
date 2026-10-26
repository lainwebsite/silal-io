import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import n from "../../pages.module.css";
import s from "../../shell.module.css";
import a from "./academy.module.css";
import { Motion } from "../../_c/Motion";
import { Odometer } from "../../_c/Odometer";
import { ACADEMY, Library } from "./_c/Library";
import { Pill } from "../../_c/Brand";
import { BASE, footerLinks } from "../../_lib/site";
import { P } from "../../_lib/photo";
import { academyCopy as c, courses, SAMPLE_NOTE } from "../../_lib/academy";

export const metadata: Metadata = {
  title: "IO Academy · Talent & Training · Innovation Oasis",
  description: "Practical training from the people who run Innovation Oasis: short courses online and on a working 34-hectare campus.",
};

/*
 * Talent & Training → IO Academy Training (sitemap template 11, library view), in the new homepage's language:
 * full-bleed photo hero under a transparent header · intro statement + odometer stats on light grey · the library on
 * white · a dark photo chapter with hairline rows (the homepage's "Why Here?") · a closing band. Courses are SAMPLES
 * (../../_lib/academy.ts). Smooth scroll: v10/_c/SmoothScroll.tsx (Lenis, homepage settings).
 */
export default function IOAcademy() {
  const tab = (label: string, slug: string) => ({ label, href: `${BASE}/training/${slug}` });
  const tabs = [
    tab("Advanced Agritech Academy", "advanced-agritech-academy"),
    tab("Student Sponsorship", "student-sponsorship"),
    tab("Mustadeem / School Programs", "mustadeem-school-programs"),
    { label: "IO Academy Training", href: ACADEMY },
  ];

  return (
    <div className={n.page}>
      <Motion />

      {/* ═══ HERO ═══ */}
      <section className={a.hero} aria-labelledby="academy-h">
        <div className={a.heroMedia} data-px>
          <Image src={P.greenhouseWide} alt="Greenhouses at Innovation Oasis" fill sizes="100vw" preload />
        </div>
        <div className={a.heroShade} />
        <div className={`${s.wrap} ${a.heroInner}`}>
          <div className={a.heroMain}>
            <span className={`${a.eyebrow} ${a.eyebrowLight}`} data-up>
              {c.hero.eyebrow} · Talent &amp; Training
            </span>
            <h1 id="academy-h" className={a.heroTitle} data-lines>
              {c.hero.title}
            </h1>
            <p className={a.heroSub} data-up>
              {c.hero.sub.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </p>
          </div>
          <nav className={a.heroAside} aria-label="Talent & Training" data-up>
            <div className={a.sideNav}>
              {tabs.map((t, i) => (
                <Link key={t.label} href={t.href} aria-current={t.href === ACADEMY ? "page" : undefined}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  {t.label}
                  <i />
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* ═══ INTRO + STATS ═══ */}
      <section className={`${a.section} ${a.light}`} aria-label="About the Academy">
        <div className={`${s.wrap} ${a.grid12}`}>
          <p className={a.statement} data-lines>
            {c.statement}
          </p>
          <div className={a.introCols}>
            <p data-up>{c.introBody}</p>
            <p data-up>{c.introLead}</p>
          </div>
          <ul className={a.stats}>
            {c.stats.map((x) => (
              <li key={x.l}>
                <span className={a.statNum}>
                  <Odometer value={x.n} />
                </span>
                <span className={a.statLabel} data-up>
                  {x.l}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ LIBRARY ═══ */}
      <section className={`${a.section} ${a.white}`} aria-labelledby="library-h">
        <div className={s.wrap}>
          <div className={a.headRow}>
            <span className={a.eyebrow} data-up>
              The library
            </span>
            <i data-rule aria-hidden />
          </div>
          <div className={a.libHead}>
            <h2 id="library-h" className={a.h2} data-lines>
              {c.library.title}
            </h2>
            <p data-up>{c.library.body}</p>
          </div>
          <Library items={courses} />
          <p className={n.note}>{SAMPLE_NOTE}</p>
        </div>
      </section>

      {/* ═══ HOW IT WORKS: the dark chapter ═══ */}
      <section className={a.chapter} aria-labelledby="how-h">
        <div className={a.chapterImg} data-px>
          <Image src={P.growthChamber} alt="" fill sizes="100vw" />
        </div>
        <div className={a.chapterShade} />
        <div className={s.wrap}>
          <div className={a.chapterIn}>
            <span className={`${a.eyebrow} ${a.eyebrowLight}`} data-up>
              {c.chapter.eyebrow}
            </span>
            <h2 id="how-h" className={a.h2} data-lines>
              {c.chapter.title}
            </h2>
            <p className={a.chapterLead} data-up>
              {c.chapter.lead}
            </p>
            <ol className={a.rows}>
              {c.steps.map((x) => (
                <li key={x.n} data-up>
                  <span>{x.n}</span>
                  <b>{x.t}</b>
                  <p>{x.d}</p>
                </li>
              ))}
            </ol>
            <p className={a.quoteBlue} data-lines>
              “{c.introLead}”
            </p>
          </div>
        </div>
      </section>

      {/* ═══ TRAINING FOR TEAMS ═══ */}
      <section className={`${a.section} ${a.light}`} aria-labelledby="inhouse-h">
        <div className={s.wrap}>
          <div className={a.headRow}>
            <span className={a.eyebrow} data-up>
              Training for teams
            </span>
            <i data-rule aria-hidden />
          </div>
          <div className={a.teamsGrid}>
            <h2 id="inhouse-h" className={a.h2} data-lines>
              {c.inhouse.title}
            </h2>
            <div className={a.teamsSide} data-up>
              <p>{c.inhouse.body}</p>
              <Pill href={footerLinks.contact}>{c.inhouse.cta}</Pill>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
