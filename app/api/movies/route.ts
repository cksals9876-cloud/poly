import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// http://localhost:3000/api/movies/?max=10
export function GET(request: NextRequest) {
  // 쿼리스트링 알아내기!
  const { searchParams } = request.nextUrl
  const max = searchParams.get('max')
  return NextResponse.json(`max 값은 ${max}이다!`)
}

export async function PUT(request: NextRequest) {
  // 요청 바디 알아내기!
  const { name } = await request.json()
  return NextResponse.json(`내 이름은 ${name}이다!`)
}
