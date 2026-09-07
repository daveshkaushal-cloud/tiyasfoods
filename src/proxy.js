import { NextResponse } from 'next/server';

const protectedRoutes = ['/Cart', '/My-Profile', '/profile', '/cart'];
const publicRoutes = ['/', '/login', '/signup'];

export function proxy(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('accessToken')?.value || null;

    const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
    const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

    if (isProtectedRoute && !token) {
        const loginUrl = new URL('/login', request.url);
        return NextResponse.redirect(loginUrl);
    }

    if (isPublicRoute && token) {
        const homeUrl = new URL('/', request.url);
        return NextResponse.redirect(homeUrl);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/Cart/:path*', '/My-Profile/:path*', '/login', '/signup'],
};