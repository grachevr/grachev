import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET(){ const items=await prisma.article.findMany({ orderBy:{ createdAt:'desc' } }); return NextResponse.json(items) }
export async function POST(req: NextRequest){
  const { title, slug, excerpt, content, coverUrl } = await req.json()
  if(!title || !slug || !content) return NextResponse.json({error:'Не хватает полей'},{status:400})
  const a = await prisma.article.create({ data: { title, slug, excerpt, content, coverUrl } })
  return NextResponse.json(a)
}
