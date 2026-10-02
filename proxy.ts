import { NextResponse, type NextRequest } from "next/server";

// Client preview links are /V1, /V2, /V3. Send lowercase /v1, /v2, /v3 there too.
// (Not done with next.config redirects: their matching ignores case, so /V1 would loop. Not done with
// lowercase route folders either: macOS file systems can't hold "V1" and "v1" side by side.)
export function proxy(req: NextRequest) {
  const m = /^\/v([123])\/?$/.exec(req.nextUrl.pathname);
  if (!m) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = `/V${m[1]}`;
  return NextResponse.redirect(url, 307);
}

export const config = { matcher: ["/v1", "/v2", "/v3"] };
