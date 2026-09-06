import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
    const host = request.headers.get('host') || '';
    const hostname = host.split(':')[0];

    const rootDomain = process.env.ROOT_DOMAIN || 'collegevihar.com';

    if (
        hostname === rootDomain ||
        hostname === `www.${rootDomain}` ||
        hostname === 'localhost'
    ) {
        return NextResponse.next();
    }

    const parts = hostname.split('.');

    if (parts.length < 2) {
        return NextResponse.next();
    }

    const subdomain = parts[0].toLowerCase();
    const url = request.nextUrl.clone();

    url.pathname = `/${subdomain}${url.pathname}`;

    return NextResponse.rewrite(url);
}

export const config = {
    matcher: [
        '/((?!api|_next|_vercel|\\.well-known|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)',
    ],
};
