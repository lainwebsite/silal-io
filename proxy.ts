import { NextResponse, type NextRequest } from "next/server";

// Client preview links are /V1, /V2, /V3 (+ /V2/news, /V3/news). Send lowercase and short forms there too.
// (Not done with next.config redirects: their matching ignores case, so /V1 would loop. Not done with
// lowercase route folders either: macOS file systems can't hold "V1" and "v1" side by side.)
export function proxy(req: NextRequest) {
  const p = req.nextUrl.pathname.replace(/\/$/, "");
  let to: string | null = null;
  const v = /^\/v([123])$/.exec(p);
  if (v) to = `/V${v[1]}`;
  const n = /^\/[vV]([23])\/news$/.exec(p);
  if (n) to = `/V${n[1]}/resources/news`;
  if (!to) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = to;
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: ["/v1", "/v2", "/v3", "/V2/news", "/V3/news", "/v2/news", "/v3/news"] };
