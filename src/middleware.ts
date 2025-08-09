import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const needsAuth = pathname.startsWith('/admin') || pathname.startsWith('/account')
  if (!needsAuth) return NextResponse.next()

  const token = req.cookies.get('token')?.value
  if (!token) return NextResponse.redirect(new URL('/auth/login', req.url))

  try {
    const payload = jwt.verify(token, JWT_SECRET) as any
    if (pathname.startsWith('/admin') && payload?.role !== 'admin') {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }
    return NextResponse.next()
  } catch {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }
}
export const config = { matcher: ['/admin/:path*','/account/:path*'] }
