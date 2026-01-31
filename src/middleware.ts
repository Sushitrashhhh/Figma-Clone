import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    // Check for auth token in cookies (NextAuth v5 uses authjs.*)
    const token =
        req.cookies.get("authjs.session-token")?.value ||
        req.cookies.get("__Secure-authjs.session-token")?.value ||
        req.cookies.get("next-auth.session-token")?.value ||
        req.cookies.get("__Secure-next-auth.session-token")?.value;

    if (!token) {
        const newUrl = new URL("/signin", req.nextUrl.origin);
        return NextResponse.redirect(newUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"],
};
