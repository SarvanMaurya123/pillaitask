import { NextRequest, NextResponse } from "next/server";
import { verifyJwtEdge } from "./lib/jwt-edge";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value;

  const isLogin = pathname === "/admin/login";
  const isRegister = pathname === "/admin/register";
  const isAuthRoute = isLogin || isRegister;

  const isProtected = pathname.startsWith("/admin") && !isAuthRoute;

  if (isProtected && !token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  if (isAuthRoute && token) {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  if (token) {
    const valid = await verifyJwtEdge(token);
    if (!valid) {
      const res = NextResponse.redirect(new URL("/admin/login", request.url));
      res.cookies.delete("token");
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
