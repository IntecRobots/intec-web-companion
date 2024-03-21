// _middleware.ts (o el nombre de archivo que estés usando para el middleware)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token");
    const userId = request.cookies.get("userId");

    // Si estás en /home y falta el token o el userId, redirige a /
    if (request.nextUrl.pathname.startsWith("/home") && (!token || !userId)) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    // Si estás en / y tienes un token y userId, redirige a /home
    if (request.nextUrl.pathname === "/" && token && userId) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/home/:path*", "/"]
};
