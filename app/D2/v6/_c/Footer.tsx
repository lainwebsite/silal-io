import Link from "next/link";
import s from "../shell.module.css";
import { BASE, footerLinks, nav } from "../_lib/site";
import { Clock } from "./Clock";

/*
 * Footer: calm and compact. Tagline (EN + AR), sitemap, contact, then the wordmark with the
 * "Part of Silal" endorsement on the guideline hairline. No big mark (the mark lives in the header).
 */
export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footIn}>
        <div className={s.footTop}>
          <div className={s.footLead}>
            <p className={s.footTag}>Advancing Agri-food Systems</p>
            <p className={s.footAr} lang="ar" dir="rtl">
              نحو أنظمة زراعة وغذاء متطورة
            </p>
          </div>
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
              <span lang="ar" dir="rtl">
                واحة الابتكار – سلال، العين، الإمارات العربية المتحدة
              </span>
            </address>
            <ul>
              <li>
                <a href="tel:+97126144444">+971 261 44444</a>
              </li>
              <li>
                <Link href={footerLinks.contact}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={s.footBase}>
          <Link href={BASE} aria-label="Innovation Oasis, part of Silal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/D2/brand/io-wordmark-endorsed.svg" alt="" width={326} height={148} className={s.footWord} />
          </Link>
          <p>© {new Date().getFullYear()} Innovation Oasis. Part of Silal.</p>
          <p className={s.footClock}>
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
