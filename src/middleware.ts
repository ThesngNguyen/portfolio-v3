import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

import { NextRequest } from 'next/server';


export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const localeMatch = pathname.match(/^\/(vi|en)\/home$/);
  if (localeMatch) {
    const locale = localeMatch[1];
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/', '/(vi|en)/:path*']
};