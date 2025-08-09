import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
type Props={ params:{ slug:string } }
export async function generateMetadata({ params }:Props): Promise<Metadata>{
  const a=await prisma.article.findUnique({ where:{ slug: params.slug } })
  if(!a) return {}
  const url=process.env.SITE_URL||'http://localhost:3000'
  return { title:a.title, description:a.excerpt||a.title, openGraph:{ title:a.title, description:a.excerpt||a.title, images:a.coverUrl?[{url:url+a.coverUrl}]:[] } }
}
export default async function Article({ params }:Props){
  const a=await prisma.article.findUnique({ where:{ slug: params.slug } })
  if(!a) return notFound()
  return (<main className="container-max section">
    <article className="prose prose-invert max-w-none">
      <h1>{a.title}</h1>
      {a.coverUrl && <img src={a.coverUrl} alt={a.title} className="w-full rounded-xl border border-border" />}
      {a.excerpt && <p className="text-lg text-zinc-300">{a.excerpt}</p>}
      <div className="mt-6 whitespace-pre-wrap leading-7">{a.content}</div>
    </article>
  </main>)
}
