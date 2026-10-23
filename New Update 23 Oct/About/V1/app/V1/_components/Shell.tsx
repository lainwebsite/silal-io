"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import s from "../v1.module.css";

// Pages listed here use the wide container: 1920px of content + side padding (nav + footer included).
const WIDE = ["/V1"];

export function Shell({ className, children }: { className: string; children: ReactNode }) {
  const pathname = usePathname();
  const wide = WIDE.some((p) => pathname.startsWith(p));
  // pages whose hero is an IO Blue field (header switches to the white single-colour logo)
  const blue = false;
  return (
    <div className={`${s.root} ${className}`} data-wide={wide} data-blue={blue}>
      {children}
    </div>
  );
}
