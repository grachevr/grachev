import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
export async function GET(_:NextRequest,{params}:{params:{id:string}}){ const a=await prisma.article.findUnique({ where:{ id:Number(params.id) } }); if(!a) return NextResponse.json({error:'Not found'},{status:404}); return NextResponse.json(a) }
export async function PUT(req:NextRequest,{params}:{params:{id:string}}){ const {title,slug,excerpt,content,coverUrl}=await req.json(); const a=await prisma.article.update({ where:{ id:Number(params.id) }, data:{ title, slug, excerpt, content, coverUrl } }); return NextResponse.json(a) }
export async function DELETE(_:NextRequest,{params}:{params:{id:string}}){ await prisma.article.delete({ where:{ id:Number(params.id) } }); return NextResponse.json({ok:true}) }
