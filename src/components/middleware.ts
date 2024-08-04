// middleware.ts
import type { NextRequest } from 'next/server'; // Import type for NextRequest
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) { // Add type annotation
  const path = request.nextUrl.pathname;
  const isVisualPage = path === "/";

  const response = NextResponse.next();
  response.headers.set("x-is-visual-page", isVisualPage.toString());
  return response;
}
