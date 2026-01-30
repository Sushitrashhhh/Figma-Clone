if (!globalThis.setImmediate) {
  // @ts-ignore
  globalThis.setImmediate = ((fn: any, ...args: any[]) => setTimeout(fn, 0, ...args)) as any;
}

import { match } from "assert";
import { auth } from "./server/auth";

export default auth((req)=> {
    const isAuthenticated = !!req.auth;

    if(!isAuthenticated) {
        const newUrl = new URL("/signin", req.nextUrl.origin);
        return Response.redirect(newUrl);
    }
});

export const config = {
    matcher: ["/dashboard", "/dashboard/:path*"],
};

