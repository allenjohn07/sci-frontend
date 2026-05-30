import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_PATHS = new Set(["/", "/about", "/team"]);

export function middleware(request: NextRequest) {
  const pathname =
    request.nextUrl.pathname.replace(/\/$/, "") || "/";

  if (ALLOWED_PATHS.has(pathname)) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
