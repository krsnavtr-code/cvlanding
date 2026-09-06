import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const hostname = host.split(":")[0].toLowerCase();

  const rootDomain =
    process.env.ROOT_DOMAIN ||
    process.env.NEXT_PUBLIC_ROOT_DOMAIN ||
    "collegevihar.com";

  // Skip bare IPs, main domain and www
  const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (
    ipRegex.test(hostname) ||
    hostname === rootDomain ||
    hostname === `www.${rootDomain}` ||
    hostname === "localhost"
  ) {
    return NextResponse.next();
  }

  // Only rewrite hosts that are subdomains of the configured root domain,
  // or *.localhost for local development.
  const isSubdomain =
    hostname.endsWith(`.${rootDomain}`) || hostname.endsWith(".localhost");

  if (!isSubdomain) {
    return NextResponse.next();
  }

  // Remove the root domain (or .localhost) and take the leftmost label
  const suffix = hostname.endsWith(".localhost")
    ? ".localhost"
    : `.${rootDomain}`;
  const subdomain = hostname.replace(suffix, "").split(".").pop() || "";

  const url = request.nextUrl.clone();
  url.pathname = `/${subdomain}${url.pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|\\.well-known|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
