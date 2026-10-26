import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import n from "../../pages.module.css";
import a from "./academy.module.css";
import { Motion } from "../../_c/Motion";
import { ACADEMY, Library } from "./_c/Library";
import { Go, Label } from "../../_c/Brand";
import { BASE, footerLinks } from "../../_lib/site";
import { academyCopy, courses, SAMPLE_NOTE } from "../../_lib/academy";

export const metadata: Metadata = {
  title: "IO Academy · Talent & Training · Innovation Oasis",
  description: academyCopy.intro,
};

/*
 * Talent & Training → IO Academy Training (sitemap template 11, library view). Built on the News & Media
 * layout (v6 / the /V3 look): display title + intro, section tabs, one feature card with the text on the
 * photo, the filterable three-across archive, a how-it-works strip, and an enquiry band. Courses are
 * SAMPLES (../../_lib/academy.ts).
 */
export default function IOAcademy() {
  const featured = courses[0];
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

      {/* ═══ HEAD ═══ */}
      <section className={n.head} aria-labelledby="academy-h">
        <div className={n.wrap}>
          <Label n="05">{academyCopy.kicker}</Label>
          <div className={n.headGrid}>
            <h1 id="academy-h" className={n.title} data-lines>
              {academyCopy.title}
            </h1>
            <p className={n.intro} data-up>
              {academyCopy.intro}
            </p>
          </div>
          <nav className={n.tabs} aria-label="Talent & Training" data-up>
            {tabs.map((t) => (
              <Link key={t.label} href={t.href} aria-current={t.href === ACADEMY ? "page" : undefined}>
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══ 01 FEATURED ═══ */}
      <section className={n.sec} aria-labelledby="featured-h">
        <div className={n.wrap}>
          <Label n="01">Featured course</Label>
          <article className={n.feature} data-wipe>
            <div className={n.featureImg} data-px>
              <Image src={featured.src} alt={featured.alt} fill sizes="(max-width: 1440px) 100vw, 1440px" preload />
            </div>
            <div className={n.featureShade} />
            <div className={n.featureIn}>
              <p className={n.featureMeta}>
                <span>{featured.mode}</span>
                <span>{featured.length}</span>
                <span>{featured.track}</span>
              </p>
              <h2 id="featured-h" className={n.featureTitle}>
                <Link href={`${ACADEMY}/${featured.slug}`}>{featured.title}</Link>
              </h2>
              <p className={n.featureExcerpt}>{featured.excerpt}</p>
              <Go href={`${ACADEMY}/${featured.slug}`} dark>
                View the course
              </Go>
            </div>
          </article>
        </div>
      </section>

      {/* ═══ 02 LIBRARY ═══ */}
      <section className={n.sec} aria-labelledby="library-h">
        <div className={n.wrap}>
          <Label n="02">The library</Label>
          <h2 id="library-h" className={n.srOnly}>
            All courses
          </h2>
          <Library items={courses} />
          <p className={n.note}>{SAMPLE_NOTE}</p>
        </div>
      </section>

      {/* ═══ 03 HOW IT WORKS ═══ */}
      <section className={n.sec} aria-labelledby="how-h">
        <div className={n.wrap}>
          <Label n="03">How the Academy works</Label>
          <h2 id="how-h" className={n.h2} data-lines>
            Learn where the research happens.
          </h2>
          <ol className={a.steps} style={{ marginTop: "clamp(36px, 6vh, 64px)" }}>
            {academyCopy.steps.map((s) => (
              <li key={s.n} className={a.step} data-up>
                <span className={a.stepN}>{s.n}</span>
                <h3 className={a.stepT}>{s.t}</h3>
                <p className={a.stepD}>{s.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ 04 IN-HOUSE ═══ */}
      <section className={n.media} aria-labelledby="inhouse-h">
        <div className={n.wrap}>
          <Label n="04">Training for teams</Label>
          <div className={n.mediaGrid}>
            <h2 id="inhouse-h" className={n.h2} data-lines>
              {academyCopy.inhouse.title}
            </h2>
            <div className={n.mediaSide} data-up>
              <p className={n.body}>{academyCopy.inhouse.body}</p>
              <Go href={footerLinks.contact}>{academyCopy.inhouse.cta}</Go>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
