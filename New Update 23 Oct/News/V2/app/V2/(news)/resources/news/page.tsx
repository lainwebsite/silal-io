import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import n from "./news.module.css";
import { NewsMotion } from "./_components/NewsMotion";
import { Archive } from "./_components/Archive";
import { BASE, footerLinks } from "../../_lib/site";
import { fmtDate, releases } from "../../_lib/news";

export const metadata: Metadata = {
  title: "Press Releases — News & Media · Innovation Oasis",
  description: "Announcements, programmes and research from Innovation Oasis, Silal’s R&D and venture engine.",
};

/*
 * Resources → News & Media → Press releases (v2).
 * Structure after silal.ae/media-center/press-releases (title, section tabs, latest release, filterable
 * archive, media contact), told in the About page's language: kicker with a blue rule, hairline chapter
 * rows, Light headings, framed photos with crop marks and "Fig." captions, arrow links.
 * Entries are SAMPLES until the client supplies releases (see _lib/news.ts).
 */


export default function PressReleases() {
  const sorted = [...releases].sort((x, y) => y.date.localeCompare(x.date));
  const latest = sorted[0];

  return (
    <div className={n.news}>
      <NewsMotion />

      {/* ───────── Head: no visible intro (client: no breadcrumb, heading, text or tabs); the page
           opens on the latest release. The heading stays for screen readers and search. ───────── */}
      <section className={`${n.head} ${n.headBare}`} data-hero="light" aria-labelledby="news-h">
        <h1 id="news-h" className={n.srOnly}>
          Press Releases
        </h1>
      </section>

      {/* ───────── Latest ───────── */}
      <section className={n.sec} aria-labelledby="latest-h">
        <div className={n.wrap}>
          {/* no blue rule above the first label (client feedback) */}
          <p className={`${n.row} ${n.rowPlain}`}>
            <span className={n.rowNum}>01</span>
            <span id="latest-h">Latest release</span>
            <span className={n.rowEnd}>{fmtDate(latest.date)}</span>
          </p>
          <article className={n.feature}>
            <figure className={n.figure}>
              <Link href={`${BASE}/resources/news/${latest.slug}`} className={n.frame} data-clip tabIndex={-1} aria-hidden>
                <div className={n.frameInner} data-parallax>
                  <Image src={latest.src} alt="" fill sizes="(max-width: 900px) 100vw, 58vw" preload />
                </div>
                <span className={n.corners} />
              </Link>
              <figcaption className={n.caption}>
                <span>Fig. 01</span>
                {latest.alt}
              </figcaption>
            </figure>
            <div className={n.featureText}>
              <p className={n.meta} data-fade>
                <time dateTime={latest.date}>{fmtDate(latest.date)}</time>
                <span className={n.metaCat}>{latest.category}</span>
              </p>
              <h2 className={n.featureTitle} data-split>
                <Link href={`${BASE}/resources/news/${latest.slug}`}>{latest.title}</Link>
              </h2>
              <p className={n.featureExcerpt} data-fade>
                {latest.excerpt}
              </p>
              <Link href={`${BASE}/resources/news/${latest.slug}`} className={n.arrowLink} data-fade>
                Read the release
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ───────── Archive ───────── */}
      <section className={n.sec} aria-labelledby="archive-h">
        <div className={n.wrap}>
          <p className={n.row} data-rule>
            <span className={n.rowNum}>02</span>
            <span id="archive-h">All releases</span>
            <span className={n.rowEnd}>{sorted.length} releases</span>
          </p>
          <Archive items={sorted} />
          <p className={n.note}>Sample entries shown for layout. Final releases to be supplied by Innovation Oasis.</p>
        </div>
      </section>

      {/* ───────── Media enquiries ───────── */}
      <section className={n.contact} aria-labelledby="contact-h">
        <div className={n.wrap}>
          <p className={n.row} data-rule data-tone="dark">
            <span className={n.rowNum}>03</span>
            <span>Media enquiries</span>
          </p>
          <div className={n.contactGrid}>
            <h2 id="contact-h" className={n.contactTitle} data-split>
              For interviews, images and information about Innovation Oasis.
            </h2>
            <div className={n.contactSide} data-fade>
              <p>Reach the communications team through our contact page and we will route your request.</p>
              <Link href={footerLinks.contact} className={n.arrowLinkLight}>
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
