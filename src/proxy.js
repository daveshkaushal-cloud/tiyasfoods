import { NextResponse } from 'next/server';

const protectedRoutes = ['/My-Profile', '/profile'];
const publicRoutes = ['/login', '/signup'];

export function proxy(request) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('accessToken')?.value || request.cookies.get('token')?.value || null;

    const isProtectedRoute = protectedRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
    const isPublicRoute = publicRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`));

    if (isProtectedRoute && !token) {
        const loginUrl = new URL('/login', request.url);
        loginUrl.searchParams.set('redirect', pathname);
        return NextResponse.redirect(loginUrl);
    }

    if (isPublicRoute && token) {
        const redirect = request.nextUrl.searchParams.get('redirect') || '/';
        return NextResponse.redirect(new URL(redirect, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/My-Profile/:path*', '/profile/:path*', '/login', '/signup'],
};
