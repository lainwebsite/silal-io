import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import n from "../news.module.css";
import { NewsMotion } from "../_c/NewsMotion";
import { MorphArea, MorphFrame, MorphStandIn, MorphStyles, MorphTarget } from "../_c/Morph";
import { Face } from "../../newsroom/_c/Face";
import { Go, Label } from "../../../_c/Brand";
import { BASE, SOON, footerLinks } from "../../../_lib/site";
import { boilerplate, fmtDate, releases } from "../../../_lib/news";

/*
 * News / Media detail (sitemap template 15), v6: label + title + lead, the soft-cornered frame the
 * clicked card grows into (Morph.tsx), body beside a sticky meta card (date, category, location, share
 * capsules), the client's "About Innovation Oasis" boilerplate as an IO-Blue-ruled block, media
 * enquiries, previous / next, related releases.
 */

// The three share glyphs (client design: icon buttons, no text), drawn in the text colour.
function ShareIcon({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden fill="currentColor">
      {kind === "LinkedIn" ? (
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm6.5 0h3.8v1.6h.06c.53-1 1.82-2.06 3.75-2.06 4.01 0 4.75 2.64 4.75 6.07v6.39h-4v-5.67c0-1.35-.02-3.09-1.88-3.09-1.89 0-2.18 1.47-2.18 3v5.76h-4v-11z" />
      ) : kind === "X" ? (
        <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3zm-1.08 16.16h1.7L7.4 4.74H5.58l11.09 14.42z" />
      ) : (
        <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v.2l-9 6.1-9-6.1v-.2zM3 8.1V18.5A1.5 1.5 0 0 0 4.5 20h15a1.5 1.5 0 0 0 1.5-1.5V8.1l-8.56 5.8a.8.8 0 0 1-.88 0L3 8.1z" />
      )}
    </svg>
  );
}

export function generateStaticParams() {
  return releases.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = releases.find((x) => x.slug === slug);
  return r
    ? {
        title: `${r.title} — News & Media · Innovation Oasis`,
        description: r.excerpt,
      }
    : {};
}

export default async function Release({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sorted = [...releases].sort((x, y) => y.date.localeCompare(x.date));
  const i = sorted.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const r = sorted[i];
  const prev = sorted[i + 1];
  const next = sorted[i - 1];
  const others = sorted.filter((x) => x.slug !== r.slug);
  const related = [...others.filter((x) => x.category === r.category), ...others.filter((x) => x.category !== r.category)].slice(0, 3);
  const url = `https://silal-io.vercel.app${BASE}/resources/news/${r.slug}`;
  const share = [
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "X",
      href: `https://x.com/intent/post?url=${encodeURIComponent(url)}&text=${encodeURIComponent(r.title)}`,
    },
    {
      label: "Email",
      href: `mailto:?subject=${encodeURIComponent(r.title)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className={n.page}>
      <NewsMotion />
      <MorphStyles />

      <article>
        <header className={n.head}>
          <div className={n.wrap}>
            <Label n="PR">Press release</Label>
            <nav className={n.crumbs} aria-label="Breadcrumb" data-up>
              <Link href={SOON}>Resources</Link>
              <span aria-hidden>/</span>
              <Link href={`${BASE}/resources/news`}>Press Releases</Link>
              <span aria-hidden>/</span>
              <span aria-current="page">{r.category}</span>
            </nav>
            <h1 className={n.articleTitle} data-lines>
              {r.title}
            </h1>
            <p className={n.articleLead} data-up>
              {r.excerpt}
            </p>
          </div>
        </header>

        <div className={n.wrap}>
          {/* the frame the clicked card grows into (Morph.tsx): same content as that card (photo or colour
               field); no wipe / drift of its own so the morph lands still */}
          <MorphTarget
            slug={r.slug}
            face={
              r.card ? (
                <figure className={n.articleFig}>
                  <Face it={r} vt={`rel-${r.slug}`} lg drift={false} sizes="(max-width: 1440px) 100vw, 1440px" />
                </figure>
              ) : undefined
            }
          >
            <figure className={n.articleFig}>
              <div className={n.articleImg}>
                <MorphStandIn slug={r.slug} className={n.standIn} />
                <Image src={r.src} alt={r.alt} fill sizes="(max-width: 1440px) 100vw, 1440px" preload />
              </div>
            </figure>
          </MorphTarget>

          <div className={n.articleGrid}>
            <aside className={n.aside}>
              <dl className={n.metaCard}>
                <div>
                  <dt>Date</dt>
                  <dd>{fmtDate(r.date)}</dd>
                </div>
                <div>
                  <dt>Category</dt>
                  <dd>{r.category}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>Al Ain, UAE</dd>
                </div>
              </dl>
              <p className={n.shareLabel}>Share</p>
              <ul className={n.share}>
                {share.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target={s.label === "Email" ? undefined : "_blank"} rel="noreferrer" aria-label={`Share on ${s.label}`} title={s.label}>
                      <ShareIcon kind={s.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            <div className={n.article}>
              {r.body.map((p, k) => (
                <p key={k} data-up>
                  {k === 0 ? <span className={n.dateline}>Al Ain, UAE — </span> : null}
                  {p}
                </p>
              ))}
              <div className={n.boiler} data-up>
                <p className={n.boilerH}>About Innovation Oasis</p>
                {boilerplate.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <div className={n.enquiry} data-up>
                <p>Media enquiries</p>
                <Go href={footerLinks.contact}>Contact the communications team</Go>
              </div>
              <p className={n.note}>Sample release shown for layout. Final copy to be supplied by Innovation Oasis.</p>
            </div>
          </div>

          <nav className={n.pager} aria-label="More releases">
            {prev ? (
              <Link href={`${BASE}/resources/news/${prev.slug}`} className={n.pagerLink}>
                <small>Previous release</small>
                {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`${BASE}/resources/news/${next.slug}`} className={`${n.pagerLink} ${n.pagerNext}`}>
                <small>Next release</small>
                {next.title}
              </Link>
            ) : null}
          </nav>
        </div>
      </article>

      <section className={n.sec} aria-labelledby="rel-h">
        <div className={n.wrap}>
          <Label n="+">Related releases</Label>
          <div className={n.relHead}>
            <h2 id="rel-h" className={n.h2} data-lines>
              More from Innovation Oasis
            </h2>
            <Go href={`${BASE}/resources/news`}>All press releases</Go>
          </div>
          <MorphArea scope="related">
            <ul className={n.grid}>
              {related.map((x) => (
                <li key={x.slug} data-up data-morph-slug={x.slug}>
                  <Link href={`${BASE}/resources/news/${x.slug}`} className={n.card}>
                    <MorphFrame slug={x.slug} scope="related">
                      <div className={n.cardImg}>
                        {x.card ? (
                          <Face it={x} sizes="(max-width: 700px) 100vw, 30vw" drift={false} />
                        ) : (
                          <Image src={x.src} alt={x.alt} fill sizes="(max-width: 700px) 100vw, 30vw" />
                        )}
                        <span className={n.cardTag}>{x.category}</span>
                      </div>
                    </MorphFrame>
                    <time className={n.cardDate} dateTime={x.date}>
                      {fmtDate(x.date)}
                    </time>
                    <h3 className={n.cardTitle}>{x.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </MorphArea>
        </div>
      </section>
    </div>
  );
}
