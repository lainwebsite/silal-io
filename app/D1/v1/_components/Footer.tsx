import Link from "next/link";
import s from "../v1.module.css";
import { Arrow, IoMark } from "./Brand";
import { BASE, footerLinks, nav } from "../_lib/site";

/* eslint-disable @next/next/no-img-element */

// Modelled on the guidelines' back cover: IO mark top-right, a thin blue rule dropping from the "i",
// wordmark + bilingual address set against that rule.
export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={`${s.wrap} ${s.footerGrid}`}>
        <div className={s.footerCols}>
          <div className={s.footerNews}>
            <h4>Stay close to the work</h4>
            <p>Research, programmes and calls for innovators, a few times a year.</p>
            <form className={s.newsletter} action="#" aria-label="Newsletter">
              <input type="email" placeholder="Email address" aria-label="Email address" />
              <button type="button" className={`${s.btn} ${s.btnPrimary} ${s.btnSm}`} aria-label="Subscribe">
                <Arrow />
              </button>
            </form>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {nav.map((c) => (
                <li key={c.key}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              {footerLinks.resources.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <h4 style={{ marginTop: 32 }}>Connect</h4>
            <ul>
              {footerLinks.connect.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.footerBrand}>
          <IoMark height={150} className={s.footerMark} alt="" />
          <div className={s.footerRule} aria-hidden="true" />
          <div className={s.footerId}>
            <img src="/D1/brand/io-wordmark-endorsed.svg" alt="Innovation Oasis — Part of Silal" width={240} height={109} />
            <a href="https://io-silal.ae" className={s.footerUrl}>
              io-silal.ae
            </a>
            <address>
              <span lang="ar">واحة الابتكار – سلال، العين، الإمارات العربية المتحدة</span>
              <br />
              Innovation Oasis – Silal, Al Ain, UAE
            </address>
          </div>
        </div>
      </div>
      <div className={`${s.wrap} ${s.footerBottom}`}>
        <span>© {new Date().getFullYear()} Silal. All rights reserved.</span>
        <nav aria-label="Legal">
          <Link href={`${BASE}/legal`}>Terms of Use</Link>
          <Link href={`${BASE}/legal`}>Privacy</Link>
          <Link href={`${BASE}/system`}>Design system</Link>
        </nav>
      </div>
    </footer>
  );
}
