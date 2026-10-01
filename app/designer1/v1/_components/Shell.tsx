"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import s from "../v1.module.css";

// Pages listed here use the wide 1728px container (nav + footer included).
const WIDE = ["/designer1/v1/about-b", "/designer1/v1/about-c"];

export function Shell({ className, children }: { className: string; children: ReactNode }) {
  const pathname = usePathname();
  const wide = WIDE.some((p) => pathname.startsWith(p));
  // pages whose hero is an IO Blue field (header switches to the white single-colour logo)
  const blue = pathname.startsWith("/designer1/v1/about-b");
  return (
    <div className={`${s.root} ${className}`} data-wide={wide} data-blue={blue}>
      {children}
    </div>
  );
}
