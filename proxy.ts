import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  // 로직 처리..
  console.log(request.nextUrl.pathname)
  return NextResponse.next()
}
