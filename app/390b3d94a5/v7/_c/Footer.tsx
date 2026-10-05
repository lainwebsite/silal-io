import Link from "next/link";
import s from "../shell.module.css";
import { BASE, footerLinks, nav } from "../_lib/site";
import { Clock } from "./Clock";

/* Footer: logo + tagline (EN/AR), sitemap, resources, contact; legal bar. */
export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footIn}>
        <div className={s.footTop}>
          <div className={s.footLead}>
            <Link href={BASE} aria-label="Innovation Oasis, part of Silal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/390b3d94a5/brand/io-wordmark-endorsed.svg" alt="" width={326} height={148} />
            </Link>
            <p>Advancing Agri-food Systems</p>
            <p lang="ar" dir="rtl">
              نحو أنظمة زراعة وغذاء متطورة
            </p>
          </div>
          <div className={s.footCols}>
            <nav className={s.footCol} aria-label="Explore">
              <p>Explore</p>
              <ul>
                {nav.map((n) => (
                  <li key={n.key}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className={s.footCol} aria-label="About">
              <p>About IO</p>
              <ul>
                {nav[0].subs.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className={s.footCol} aria-label="Resources">
              <p>Resources</p>
              <ul>
                {footerLinks.resources.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
                <li>
                  <a href={footerLinks.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn ↗
                  </a>
                </li>
              </ul>
            </nav>
            <div className={s.footCol}>
              <p>Contact</p>
              {/* From the stationery templates; confirm with client (docs/brand.md). */}
              <address>
                Innovation Oasis – Silal
                <br />
                Al Ain, United Arab Emirates
              </address>
              <ul>
                <li>
                  <a href="tel:+97126144444">+971 261 44444</a>
                </li>
                <li>
                  <Link href={footerLinks.contact}>Contact &amp; enquiries</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.footBase}>
          <p>© {new Date().getFullYear()} Innovation Oasis. Part of Silal.</p>
          <p>
            Al Ain <Clock /> GST
          </p>
          <ul>
            {footerLinks.legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
