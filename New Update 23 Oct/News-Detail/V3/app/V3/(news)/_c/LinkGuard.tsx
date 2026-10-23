"use client";

import { useEffect } from "react";

// Client preview: only this About page exists, so links to pages that aren't built yet are parked on "#".
// Make them inert — no jump to the top, no empty new tab — and say so to assistive tech.
export function LinkGuard() {
  useEffect(() => {
    const mark = () =>
      document
        .querySelectorAll<HTMLAnchorElement>('a[href="#"]:not([aria-disabled])')
        .forEach((a) => a.setAttribute("aria-disabled", "true"));
    mark();
    const mo = new MutationObserver(mark);
    mo.observe(document.body, { childList: true, subtree: true });
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a");
      if (a && a.getAttribute("href") === "#") e.preventDefault();
    };
    document.addEventListener("click", onClick, true);
    return () => {
      mo.disconnect();
      document.removeEventListener("click", onClick, true);
    };
  }, []);
  return null;
}
