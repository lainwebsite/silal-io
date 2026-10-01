import Link from "next/link";
import s from "../v1.module.css";
import { Arrow, IoLockup } from "./Brand";
import { BASE, footerNav } from "./nav";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            {/* Lock-up carries the "Part of Silal" endorsement required on every page. */}
            <IoLockup width={180} reversed />
            <p>
              <b style={{ fontWeight: 500, opacity: 1 }}>Advancing Agri-food Systems</b>
              <br />
              <span lang="ar">نحو أنظمة زراعة وغذاء متطورة</span>
            </p>
            <p>
              Innovation Oasis – Silal
              <br />
              Al Ain, United Arab Emirates
            </p>
            <form className={s.newsletter} action="#" aria-label="Newsletter">
              <input type="email" placeholder="Email for IO updates" aria-label="Email address" />
              <button type="button" className={`${s.btn} ${s.btnPrimary}`}>
                Subscribe <Arrow />
              </button>
            </form>
          </div>
          {footerNav.map((col) => (
            <div key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={s.footerBottom}>
          <span>© {new Date().getFullYear()} Silal. All rights reserved.</span>
          <nav>
            <Link href={`${BASE}/legal`}>Terms of Use</Link>
            <Link href={`${BASE}/legal`}>Privacy</Link>
            <Link href={`${BASE}/system`}>Design system</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
