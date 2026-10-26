import Link from "next/link";
import s from "../shell.module.css";
import p from "../pages.module.css";

/* Page primitives in the new homepage's language: numbered label on a thin IO-blue rule, text link with the sliding arrow. */
export function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className={p.label}>
      <span className={p.labelN}>{n}</span>
      <span>{children}</span>
      <i className={p.labelRule} data-rule aria-hidden />
    </p>
  );
}

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Go({ href, children, dark }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <Link href={href} className={`${s.textLink} ${dark ? p.goDark : ""}`}>
      {children}
      <Arrow />
    </Link>
  );
}

export function Pill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className={`${s.btn} ${s.btnPrimary}`}>
      {children}
      <Arrow />
    </a>
  );
}
