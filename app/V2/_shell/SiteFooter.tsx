import Link from "next/link";
import s from "./shell.module.css";

type Props = {
  /** Target for links to pages that are not built yet ("#", made inert by LinkGuard). */
  soon: string;
  news: string;
  legal: { label: string; href: string }[];
};

/** The homepage's black footer as a normal-flow footer: big rows, blurb, two link columns, bar. */
export function SiteFooter({ soon, news, legal }: Props) {
  return (
    <footer className={s.footer}>
      <div className={s.fin}>
        <nav className={s.fbigs} aria-label="Footer">
          {["Research", "Programmes", "Community", "Contact"].map((label) => (
            <Link key={label} className={s.fbig} href={soon}>
              <span>{label}</span>
              <i className={s.fhr} />
            </Link>
          ))}
        </nav>

        <div className={s.frow}>
          <p className={s.fblurb}>
            A strategic enabler of the UAE’s vision – transforming national priorities into tangible innovation outcomes across
            agriculture and food systems.
          </p>
          <nav className={s.fcol} aria-label="Footer, programmes">
            <Link href={soon}>Research</Link>
            <Link href={soon}>Talent &amp; Training</Link>
            <Link href={soon}>Centres of Excellence</Link>
          </nav>
          <nav className={s.fcol} aria-label="Footer, community">
            <Link href={soon}>Entrepreneurs</Link>
            <Link href={soon}>Companies</Link>
            <Link href={soon}>Investors</Link>
          </nav>
        </div>

        <div className={s.fbar}>
          <i className={s.fhr} />
          <span>Innovation Oasis — Silal, Al Ain, UAE</span>
          <ul className={s.flinks}>
            {legal.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href={news}>News &amp; Media</Link>
            </li>
            <li>
              <span>Part of Silal</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
