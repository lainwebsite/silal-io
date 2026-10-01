"use client";

import { useEffect, useState } from "react";

// Live local time on campus (Gulf Standard Time). Empty on the server to avoid a hydration mismatch.
export function LocalTime() {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Dubai" });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15000);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span suppressHydrationWarning>
      <i aria-hidden style={{ display: "inline-block", width: 6, height: 6, borderRadius: "50%", background: "#3CA7D2", marginInlineEnd: 8, verticalAlign: 1 }} />
      {t ? `${t} GST` : "GST"}
    </span>
  );
}
