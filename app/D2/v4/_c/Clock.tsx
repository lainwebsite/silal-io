"use client";

import { useEffect, useState } from "react";

// Campus time (Gulf Standard Time), ticking. Empty on the server to avoid hydration mismatch.
export function Clock({ seconds = false }: { seconds?: boolean }) {
  const [t, setT] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: seconds ? "2-digit" : undefined,
      timeZone: "Asia/Dubai",
    });
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [seconds]);
  return <span suppressHydrationWarning style={{ fontVariantNumeric: "tabular-nums" }}>{t || "--:--"}</span>;
}
