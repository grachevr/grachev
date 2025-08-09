import { prisma } from '@/lib/prisma'
import Link from 'next/link'
export const dynamic = 'force-dynamic'
export default async function AdminPage(){
  const items = await prisma.article.findMany({ orderBy:{ createdAt:'desc' } })
  return (<main>
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Статьи</h1>
        <Link className="btn btn-primary" href="/admin/new">Новая статья</Link>
      </div>
      <div className="grid gap-3">
        {items.map(a=>(<div key={a.id} className="panel p-4 flex items-center justify-between">
          <div><div className="text-sm text-zinc-400">{new Date(a.createdAt).toLocaleString('ru-RU')}</div><div className="font-semibold">{a.title}</div></div>
          <div className="flex gap-2">
            <Link className="btn btn-ghost" href={`/blog/${a.slug}`}>Открыть</Link>
            <Link className="btn btn-ghost" href={`/admin/edit/${a.id}`}>Редактировать</Link>
          </div>
        </div>))}
      </div>
    </div>
  </main>)
}
