/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import s from "../shell.module.css";

/*
 * IO brand primitives, taken from the guidelines (docs/source/Innovation_Oasis_Guidelines.pdf):
 *  - Io: the wordmark device — the letters "io" inside a word set in IO Blue ("explorat-io-n", p.4/27/30).
 *  - Head: the guideline page header — two-line title (bold charcoal + IO-blue subtitle), page number
 *    right, full-width IO-blue hairline underneath (every page of the book).
 *  - Go: a text link that ends in a small IO-Blue O — the O of the mark as the only "button" shape.
 *  - Mark / Wordmark: the official SVG files, never redrawn.
 */

export function Io({ w }: { w: string }) {
  const i = w.toLowerCase().indexOf("io");
  if (i < 0) return <>{w}</>;
  // one unbreakable unit, so line-splitting animations never break the word at the coloured letters
  return (
    <span className={s.ioWord}>
      {w.slice(0, i)}
      <span className={s.io}>{w.slice(i, i + 2)}</span>
      {w.slice(i + 2)}
    </span>
  );
}

export function Head({ n, title, sub, tone }: { n: string; title: string; sub?: string; tone?: "dark" }) {
  return (
    <header className={s.head} data-tone-h={tone} data-head>
      <span className={s.headDot} aria-hidden />
      <p className={s.headTitle}>
        <b>{title}</b>
        {sub ? <span>{sub}</span> : null}
      </p>
      <span className={s.headNum}>{n}</span>
      <span className={s.headRule} aria-hidden data-head-rule />
    </header>
  );
}

export function Go({ href, children, light, ext }: { href: string; children: React.ReactNode; light?: boolean; ext?: boolean }) {
  return (
    <Link href={href} className={s.go} data-light={light ? "" : undefined} target={ext ? "_blank" : undefined} rel={ext ? "noreferrer" : undefined}>
      <span className={s.goText}>{children}</span>
      <span className={s.goO} aria-hidden>
        <svg viewBox="0 0 16 16">
          <path d={ext ? "M5 11l6-6M6 5h5v5" : "M4 8h8M8.5 4.5L12 8l-3.5 3.5"} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}

export function Mark({ className, white }: { className?: string; white?: boolean }) {
  return <img src="/brand/io-mark.svg" alt="" width={255} height={188} className={className} data-white={white ? "" : undefined} />;
}

export function Wordmark({ reversed, className }: { reversed?: boolean; className?: string }) {
  return (
    <img
      src={reversed ? "/D2/brand/io-wordmark-endorsed-reversed.svg" : "/D2/brand/io-wordmark-endorsed.svg"}
      alt=""
      width={326}
      height={148}
      className={className}
    />
  );
}
