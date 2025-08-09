import { prisma } from '@/lib/prisma'
import Link from 'next/link'
export const metadata = { title: 'Блог' }
export default async function BlogPage(){
  const items = await prisma.article.findMany({ orderBy:{ createdAt:'desc' } })
  return (<main className="container-max section">
    <h1 className="text-3xl font-bold mb-6">Блог</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
      {items.map(a=>(<article key={a.id} className="panel p-5">
        <div className="text-sm text-zinc-400">{new Date(a.createdAt).toLocaleDateString('ru-RU')}</div>
        <h2 className="text-xl font-semibold mt-1"><Link href={`/blog/${a.slug}`}>{a.title}</Link></h2>
        {a.excerpt && <p className="muted">{a.excerpt}</p>}
        <Link className="btn btn-ghost mt-3" href={`/blog/${a.slug}`}>Читать</Link>
      </article>))}
    </div>
  </main>)
}
