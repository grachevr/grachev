import { cookies } from 'next/headers'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-me'
export const metadata = { title: 'Личный кабинет' }

export default async function Account(){
  const cookieStore = await cookies()
  const token = cookieStore.get('token')?.value || ''
  let user:any=null
  try{
    const payload = jwt.verify(token, JWT_SECRET) as any
    user = await prisma.user.findUnique({ where:{ id: payload.id }, select:{ id:true, email:true, name:true, role:true, createdAt:true } })
  }catch{}

  return (<section className="section"><div className="container-max grid gap-6">
    <div className="panel p-5"><h1 className="text-2xl font-bold">Личный кабинет</h1><p className="text-zinc-400">Профиль и управление аккаунтом</p></div>
    <div className="grid md:grid-cols-2 gap-6">
      <section className="panel p-6">
        <h2 className="text-xl font-semibold mb-3">Профиль</h2>
        <div className="grid gap-2 text-zinc-300">
          <div><span className="text-zinc-400">Имя:</span> {user?.name || '—'}</div>
          <div><span className="text-zinc-400">Email:</span> {user?.email}</div>
          <div><span className="text-zinc-400">Роль:</span> {user?.role}</div>
          <div><span className="text-zinc-400">С нами с:</span> {user ? new Date(user.createdAt).toLocaleDateString('ru-RU') : '—'}</div>
        </div>
      </section>
      <section className="panel p-6">
        <h2 className="text-xl font-semibold mb-3">Быстрые действия</h2>
        <form action="/api/auth/logout" method="post"><button className="btn btn-ghost">Выйти</button></form>
      </section>
    </div>
    <section className="panel p-6"><h2 className="text-xl font-semibold mb-3">Мои материалы</h2><p className="text-zinc-400">Здесь позже появятся ваши данные.</p></section>
  </div></section>)
}
