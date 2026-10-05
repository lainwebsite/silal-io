import Link from "next/link";
import s from "../shell.module.css";

/*
 * v6 primitives. One type system, one label, one link.
 *  - Label: section label — number · name, IO-Blue hairline. No logo (the guideline page header is a
 *    print device; on the web the mark lives in the header only).
 *  - Go: text link with a small round arrow.
 */

export function Label({ n, children, dark }: { n: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={s.label} data-dark={dark ? "" : undefined}>
      <span className={s.labelN}>{n}</span>
      <span>{children}</span>
      <i className={s.labelRule} data-rule aria-hidden />
    </p>
  );
}

export function Go({ href, children, dark, ext }: { href: string; children: React.ReactNode; dark?: boolean; ext?: boolean }) {
  return (
    <Link href={href} className={s.go} data-dark={dark ? "" : undefined} target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined}>
      <span className={s.goText}>{children}</span>
      <span className={s.goO} aria-hidden>
        <svg viewBox="0 0 16 16">
          <path d={ext ? "M5 11l6-6M6 5h5v5" : "M4 8h8M8.5 4.5L12 8l-3.5 3.5"} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
