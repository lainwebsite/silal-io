import Link from "next/link";
import s from "../shell.module.css";

/* v8 primitives: one label, one button. */

export function Label({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={s.label} data-dark={dark ? "" : undefined}>
      {children}
    </p>
  );
}

export function Btn({ href, children, v, ext }: { href: string; children: React.ReactNode; v?: "ghost" | "light"; ext?: boolean }) {
  return (
    <Link href={href} className={s.btn} data-v={v} target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined}>
      {children}
      <svg viewBox="0 0 16 16" aria-hidden>
        <path d={ext ? "M5 11l6-6M6 5h5v5" : "M3 8h10M9 4l4 4-4 4"} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
