import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'
export const runtime = 'nodejs'
export async function POST(req: NextRequest){
  const form = await req.formData()
  const file = form.get('file') as File | null
  if(!file) return NextResponse.json({error:'Нет файла'},{status:400})
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  const ext = (file.type.split('/')[1] || 'dat').replace('jpeg','jpg')
  const name = `${Date.now()}-${Math.random().toString(36).slice(2,6)}.${ext}`
  const filePath = path.join(process.cwd(), 'public', 'uploads', name)
  await writeFile(filePath, buffer)
  return NextResponse.json({ url: `/uploads/${name}` })
}
