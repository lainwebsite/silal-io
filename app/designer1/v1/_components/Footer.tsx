import Link from "next/link";
import s from "../v1.module.css";
import { Arrow, IoMark } from "./Brand";
import { BASE, footerNav } from "./nav";

export function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.wrap}>
        <div className={s.footerTop}>
          <div className={s.footerBrand}>
            <IoMark size={40} color="#ffffff" />
            <p>
              Innovation Oasis is Silal&apos;s agri-food research and innovation campus in the UAE, where science,
              start-ups and growers work on food security for arid climates.
            </p>
            <form className={s.newsletter} action="#" aria-label="Newsletter">
              <input type="email" placeholder="Email for IO updates" aria-label="Email address" />
              <button type="button" className={`${s.btn} ${s.btnLight}`}>
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
            <Link href={`${BASE}/legal`}>Terms</Link>
            <Link href={`${BASE}/legal`}>Privacy</Link>
            <Link href={`${BASE}/system`}>Design system</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
