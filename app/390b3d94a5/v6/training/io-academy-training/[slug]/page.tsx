import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import n from "../../../resources/news/news.module.css";
import a from "../academy.module.css";
import { NewsMotion } from "../../../resources/news/_c/NewsMotion";
import { ACADEMY } from "../_c/Library";
import { RequestForm } from "../_c/RequestForm";
import { Go, Label } from "../../../_c/Brand";
import { BASE } from "../../../_lib/site";
import { courses, SAMPLE_NOTE } from "../../../_lib/academy";

/*
 * Training Programme Detail (sitemap template 11), after delphy.nl/en/trainings/…: title + facts bar +
 * request information, then the sections in Delphy's order (introduction, what do you learn, planning,
 * content, how does it work, the result, information, your trainers), in the v6 press-release layout:
 * sticky section index and facts card on the left, copy on the right. Sample content (../../../_lib/academy.ts).
 */

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = courses.find((x) => x.slug === slug);
  return c ? { title: `${c.title} · IO Academy · Innovation Oasis`, description: c.excerpt } : {};
}

const num = (i: number) => String(i + 1).padStart(2, "0");

export default async function Course({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = courses.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const c = courses[i];
  const prev = courses[i - 1];
  const next = courses[i + 1];
  const related = [...courses.filter((x) => x.slug !== c.slug && x.track === c.track), ...courses.filter((x) => x.slug !== c.slug && x.track !== c.track)].slice(0, 3);

  const facts: [string, string][] = [
    ["Training type", c.mode],
    ["Duration", c.facts.duration],
    ["Target audience", c.facts.audience],
    ["Prior education", c.facts.prior],
    ["Language", c.facts.language],
    ["Investment", c.facts.investment],
  ];
  const sections = [
    { id: "intro", t: "Overview" },
    { id: "learn", t: "What do you learn?" },
    { id: "planning", t: "Planning" },
    { id: "content", t: "Content" },
    { id: "how", t: "How does it work?" },
    { id: "result", t: "The result" },
    { id: "trainers", t: "Your trainers" },
    { id: "faq", t: "Questions" },
  ];

  return (
    <div className={n.page}>
      <NewsMotion />

      <article>
        <header className={n.head}>
          <div className={n.wrap}>
            <Label n="05">IO Academy training</Label>
            <nav className={n.crumbs} aria-label="Breadcrumb" data-up>
              <Link href={`${BASE}/training`}>Talent & Training</Link>
              <span aria-hidden>/</span>
              <Link href={ACADEMY}>IO Academy</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">{c.track}</span>
            </nav>
            <h1 className={n.articleTitle} data-lines>
              {c.title}
            </h1>
            <p className={n.articleLead} data-up>
              {c.excerpt}
            </p>
            <div className={a.headActions} data-up>
              <a href="#request" className={a.pill}>
                Request information
              </a>
              <Go href={ACADEMY}>All courses</Go>
            </div>
            <dl className={a.facts} data-up>
              {facts.map(([k, v]) => (
                <div key={k} className={a.fact}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className={n.wrap}>
          <figure className={n.articleFig} data-wipe>
            <div className={n.articleImg} data-px>
              <Image src={c.src} alt={c.alt} fill sizes="(max-width: 1440px) 100vw, 1440px" preload />
            </div>
          </figure>

          <div className={n.articleGrid}>
            <aside className={n.aside}>
              <ul className={a.index}>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.t}</a>
                  </li>
                ))}
              </ul>
              <dl className={n.metaCard}>
                <div>
                  <dt>Level</dt>
                  <dd>{c.level}</dd>
                </div>
                <div>
                  <dt>Track</dt>
                  <dd>{c.track}</dd>
                </div>
                <div>
                  <dt>Certificate</dt>
                  <dd>{c.facts.certificate}</dd>
                </div>
              </dl>
            </aside>

            <div className={n.article}>
              <section id="intro" className={a.block} aria-label="Overview">
                {c.intro.map((p, k) => (
                  <p key={k} data-up>
                    {p}
                  </p>
                ))}
                <blockquote className={a.pull} data-up>
                  {c.quote.text}
                  <cite>{c.quote.by}</cite>
                </blockquote>
              </section>

              <section id="learn" className={a.block}>
                <h2 className={a.blockH} data-lines>
                  What do you learn?
                </h2>
                {c.learn.map((p, k) => (
                  <p key={k} data-up>
                    {p}
                  </p>
                ))}
              </section>

              <section id="planning" className={a.block}>
                <h2 className={a.blockH} data-lines>
                  Planning
                </h2>
                <p data-up>{c.planning.intake}</p>
                <ul className={a.sessions} data-up>
                  {c.planning.sessions.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <p className={a.planMeta} data-up>
                  <span>
                    Time <b>{c.planning.time}</b>
                  </span>
                  <span>
                    Place <b>{c.planning.place}</b>
                  </span>
                </p>
              </section>

              <section id="content" className={a.block}>
                <h2 className={a.blockH} data-lines>
                  Content
                </h2>
                <ul className={a.list} data-up>
                  {c.content.map((t, k) => (
                    <li key={t} data-n={num(k)}>
                      {t}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="how" className={a.block}>
                <h2 className={a.blockH} data-lines>
                  How does it work?
                </h2>
                {c.how.map((p, k) => (
                  <p key={k} data-up>
                    {p}
                  </p>
                ))}
              </section>

              <section id="result" className={a.block}>
                <h2 className={a.blockH} data-lines>
                  The result
                </h2>
                <ul className={a.list} data-up>
                  {c.result.map((t, k) => (
                    <li key={t} data-n={num(k)}>
                      {t}
                    </li>
                  ))}
                </ul>
                <p data-up>Key concepts you will master:</p>
                <ul className={a.concepts} data-up>
                  {c.concepts.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </section>

              <section id="trainers" className={a.block}>
                <h2 className={a.blockH} data-lines>
                  Your trainers
                </h2>
                <div className={a.trainers} data-up>
                  {c.trainers.map((t) => (
                    <div key={t.role} className={a.trainer}>
                      <span className={a.trainerMark}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/brand/io-mark.svg" alt="" />
                      </span>
                      <div>
                        <p>{t.role}</p>
                        <p>{t.focus} · name to be confirmed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faq" className={a.block}>
                <h2 className={a.blockH} data-lines>
                  Questions
                </h2>
                <div className={a.faq} data-up>
                  {c.faq.map((f) => (
                    <details key={f.q}>
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
                <p className={n.note}>{SAMPLE_NOTE}</p>
              </section>
            </div>
          </div>

          <nav className={n.pager} aria-label="More courses">
            {prev ? (
              <Link href={`${ACADEMY}/${prev.slug}`} className={n.pagerLink}>
                <small>Previous course</small>
                {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`${ACADEMY}/${next.slug}`} className={`${n.pagerLink} ${n.pagerNext}`}>
                <small>Next course</small>
                {next.title}
              </Link>
            ) : null}
          </nav>
        </div>
      </article>

      {/* request information */}
      <section id="request" className={a.request} aria-labelledby="req-h">
        <div className={n.wrap}>
          <Label n="→">Request information</Label>
          <div className={a.reqGrid}>
            <div className={a.reqIntro}>
              <h2 id="req-h" className={n.h2} data-lines>
                Do you have a question?
              </h2>
              <p className={n.body}>Tell us a little about you. The IO Academy team replies with dates, fees and the next intake, and can plan a private cohort for your team.</p>
            </div>
            <RequestForm course={c.title} />
          </div>
        </div>
      </section>

      <section className={n.sec} aria-labelledby="rel-h">
        <div className={n.wrap}>
          <Label n="+">More from the Academy</Label>
          <div className={n.relHead}>
            <h2 id="rel-h" className={n.h2} data-lines>
              Keep learning with Innovation Oasis
            </h2>
            <Go href={ACADEMY}>All courses</Go>
          </div>
          <ul className={n.grid}>
            {related.map((x) => (
              <li key={x.slug} data-up>
                <Link href={`${ACADEMY}/${x.slug}`} className={n.card}>
                  <div className={n.cardImg}>
                    <Image src={x.src} alt={x.alt} fill sizes="(max-width: 700px) 100vw, 30vw" />
                    <span className={n.cardTag}>{x.mode}</span>
                  </div>
                  <p className={n.cardDate}>{x.track}</p>
                  <h3 className={n.cardTitle}>{x.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
