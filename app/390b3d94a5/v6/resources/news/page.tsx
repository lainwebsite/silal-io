import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import n from "./news.module.css";
import { NewsMotion } from "./_c/NewsMotion";
import { Feed } from "../newsroom/_c/Feed";
import { MorphArea, MorphFrame } from "./_c/Morph";
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

export default function PressReleases() {
  const sorted = [...releases].sort((x, y) => y.date.localeCompare(x.date));
  const latest = sorted[0];

  return (
    <div className={n.page}>
      <NewsMotion />

      {/* ═══ HEAD: no visible intro (client, Roundable RB-3.05: no label, heading, text or tabs); the page
           opens on the latest release. The heading stays for screen readers and search. ═══ */}
      <section className={`${n.head} ${n.headBare}`} aria-labelledby="news-h">
        <h1 id="news-h" className={n.srOnly}>
          Press Releases
        </h1>
      </section>

      {/* ═══ 01 LATEST: a large image card, text on the photo ═══ */}
      <section className={n.sec} aria-labelledby="latest-h">
        <div className={n.wrap}>
          <Label n="01">Latest release</Label>
          <MorphArea scope="latest">
            <MorphFrame slug={latest.slug} scope="latest">
              <article className={n.feature} data-wipe data-morph-slug={latest.slug}>
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
            </MorphFrame>
          </MorphArea>
        </div>
      </section>

      {/* ═══ 02 ALL RELEASES: the newsroom feed (client video): sticky sidebar, type / topic / search
           filters, an even grid three across (client) that keeps loading as you scroll ═══ */}
      <Feed
        items={sorted}
        current="Press releases"
        embedded
        uniform
        title="All releases"
        lead={<Label n="02">All releases</Label>}
        note="Sample entries shown for layout. Final releases to be supplied by Innovation Oasis."
      />

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
