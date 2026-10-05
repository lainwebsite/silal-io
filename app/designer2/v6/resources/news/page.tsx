import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import n from "./news.module.css";
import { NewsMotion } from "./_c/NewsMotion";
import { Archive } from "./_c/Archive";
import { Go, Label } from "../../_c/Brand";
import { BASE, footerLinks } from "../../_lib/site";
import { fmtDate, releases } from "../../_lib/news";

export const metadata: Metadata = {
  title: "Press Releases — News & Media · Innovation Oasis",
  description: "Announcements, programmes and research from Innovation Oasis, Silal’s R&D and venture engine.",
};

/*
 * Resources → News & Media → Press releases (v6, the source of the client link /V3).
 * Structure after silal.ae/media-center/press-releases; told in v6's language: numbered labels with
 * IO-Blue hairlines, Light type, soft-cornered image cards with text on the photo, capsules, the round
 * blue arrow link, the same reveals. Entries are SAMPLES until the client supplies releases.
 */

const res = (label: string) => footerLinks.resources.find((r) => r.label === label)!.href;
const tabs = [
  { label: "Press Releases", href: `${BASE}/resources/news`, current: true },
  { label: "Publications", href: res("Publications") },
  { label: "Projects & Case Studies", href: res("Projects & Case Studies") },
  { label: "FAQs", href: res("FAQs") },
];

export default function PressReleases() {
  const sorted = [...releases].sort((x, y) => y.date.localeCompare(x.date));
  const latest = sorted[0];

  return (
    <div className={n.page}>
      <NewsMotion />

      {/* ═══ HEAD ═══ */}
      <section className={n.head} aria-labelledby="news-h">
        <div className={n.wrap}>
          <Label n="00">News &amp; Media</Label>
          <div className={n.headGrid}>
            <h1 id="news-h" className={n.title} data-lines>
              Press Releases
            </h1>
            <p className={n.intro} data-up>
              Announcements, programmes and research from Innovation Oasis, Silal&rsquo;s R&amp;D and venture engine, where the
              UAE&rsquo;s toughest growing conditions become the ultimate proving ground for the future of food.
            </p>
          </div>
          <nav className={n.tabs} aria-label="News & Media" data-up>
            {tabs.map((t) => (
              <Link key={t.label} href={t.href} aria-current={t.current ? "page" : undefined}>
                {t.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ═══ 01 LATEST: a large image card, text on the photo ═══ */}
      <section className={n.sec} aria-labelledby="latest-h">
        <div className={n.wrap}>
          <Label n="01">Latest release</Label>
          <article className={n.feature} data-wipe>
            <div className={n.featureImg} data-px>
              <Image src={latest.src} alt={latest.alt} fill sizes="(max-width: 1440px) 100vw, 1440px" preload />
            </div>
            <div className={n.featureShade} />
            <div className={n.featureIn}>
              <p className={n.featureMeta}>
                <time dateTime={latest.date}>{fmtDate(latest.date)}</time>
                <span>{latest.category}</span>
              </p>
              <h2 id="latest-h" className={n.featureTitle}>
                <Link href={`${BASE}/resources/news/${latest.slug}`}>{latest.title}</Link>
              </h2>
              <p className={n.featureExcerpt}>{latest.excerpt}</p>
              <Go href={`${BASE}/resources/news/${latest.slug}`} dark>
                Read the release
              </Go>
            </div>
          </article>
        </div>
      </section>

      {/* ═══ 02 ARCHIVE ═══ */}
      <section className={n.sec} aria-labelledby="all-h">
        <div className={n.wrap}>
          <Label n="02">All releases</Label>
          <h2 id="all-h" className={n.srOnly}>
            All releases
          </h2>
          <Archive items={sorted} />
          <p className={n.note}>Sample entries shown for layout. Final releases to be supplied by Innovation Oasis.</p>
        </div>
      </section>

      {/* ═══ 03 MEDIA ENQUIRIES ═══ */}
      <section className={n.media} aria-labelledby="media-h">
        <div className={n.wrap}>
          <Label n="03">Media enquiries</Label>
          <div className={n.mediaGrid}>
            <h2 id="media-h" className={n.h2} data-lines>
              For interviews, images and information about Innovation Oasis.
            </h2>
            <div className={n.mediaSide} data-up>
              <p className={n.body}>Reach the communications team through our contact page and we will route your request.</p>
              <Go href={footerLinks.contact}>Contact us</Go>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
