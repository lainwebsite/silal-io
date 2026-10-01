"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import s from "../v1.module.css";

// Pages listed here use the wide 1728px container (nav + footer included).
const WIDE = ["/designer1/v1/about-b"];

export function Shell({ className, children }: { className: string; children: ReactNode }) {
  const pathname = usePathname();
  const wide = WIDE.some((p) => pathname.startsWith(p));
  return (
    <div className={`${s.root} ${className}`} data-wide={wide}>
      {children}
    </div>
  );
}
