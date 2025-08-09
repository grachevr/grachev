import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'
import { signToken } from '@/lib/auth'

export async function POST(req: NextRequest){
  const { email, password } = await req.json()
  if(!email || !password) return NextResponse.json({error:'Email и пароль обязательны'},{status:400})
  const user = await prisma.user.findUnique({ where:{ email } })
  if(!user) return NextResponse.json({error:'Неверные данные'},{status:400})
  const ok = await bcrypt.compare(password, user.password)
  if(!ok) return NextResponse.json({error:'Неверные данные'},{status:400})
  const token = signToken({ id:user.id, email:user.email, role:user.role })
  const res = NextResponse.json({ ok:true, role: user.role })
  res.cookies.set('token', token, { httpOnly:true, sameSite:'lax', path:'/', maxAge:60*60*24*7 })
  return res
}
