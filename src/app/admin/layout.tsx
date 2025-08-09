import React from 'react'
import Link from 'next/link'
export default function AdminLayout({ children }:{ children:React.ReactNode }){
  return (<section className="section">
    <div className="container-max">
      <div className="panel p-5 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-[#3a2db7]" />
          <div><div className="font-bold">Админка</div><div className="text-sm text-zinc-400">Управление сайтом</div></div>
        </div>
        <div className="flex gap-2">
          <Link className="btn btn-ghost" href="/admin">Статьи</Link>
          <Link className="btn btn-ghost" href="/blog">Блог</Link>
          <form action="/api/auth/logout" method="post"><button className="btn btn-ghost">Выйти</button></form>
        </div>
      </div>
      {children}
    </div>
  </section>)
}
