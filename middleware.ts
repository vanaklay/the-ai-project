import { NextRequest, NextResponse } from "next/server";
import { isValidAdminCookie } from "@/src/lib/adminAuth";

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get("admin_session")?.value;
  if (!(await isValidAdminCookie(cookie))) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
