import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const tokenCookie = request.cookies.get("token");
  const userIdCookie = request.cookies.get("userId");

  const token = tokenCookie ? tokenCookie.value : "";
  const userId = userIdCookie ? userIdCookie.value : "";

  // Verifica que el token y userId no sean strings vacíos
  const isValidToken = token !== "";
  const isValidUserId = userId !== "";

  if (
    request.nextUrl.pathname.startsWith("/home") &&
    (!isValidToken || !isValidUserId)
  ) {
    console.log("Faltan las cookies o son strings vacíos");
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (request.nextUrl.pathname === "/" && isValidToken && isValidUserId) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*", "/"],
};
