'use client'
import React,{useState} from 'react'
import { useRouter } from 'next/navigation'
export default function NewArticle(){
  const r=useRouter()
  const [title,setTitle]=useState(''); const [slug,setSlug]=useState(''); const [excerpt,setExcerpt]=useState(''); const [content,setContent]=useState(''); const [cover,setCover]=useState('')
  async function uploadFile(f:File){ const form=new FormData(); form.append('file',f); const res=await fetch('/api/upload',{method:'POST',body:form}); const d=await res.json(); if(res.ok) setCover(d.url); else alert(d.error||'Upload error') }
  async function onSubmit(e:React.FormEvent){ e.preventDefault(); const res=await fetch('/api/articles',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({title,slug,excerpt,content,coverUrl:cover})}); if(res.ok) r.push('/admin'); else alert('Ошибка') }
  return (<main className="grid gap-4">
    <h1 className="text-2xl font-bold">Новая статья</h1>
    <form onSubmit={onSubmit} className="grid gap-3 max-w-3xl">
      <input className="bg-[#0c0c0c] border border-border rounded-xl px-4 py-3" placeholder="Заголовок" value={title} onChange={e=>{setTitle(e.target.value); if(!slug) setSlug(e.target.value.toLowerCase().replace(/\s+/g,'-'))}} required />
      <input className="bg-[#0c0c0c] border border-border rounded-xl px-4 py-3" placeholder="slug" value={slug} onChange={e=>setSlug(e.target.value)} required />
      <textarea className="bg-[#0c0c0c] border border-border rounded-xl px-4 py-3" placeholder="Короткое описание" value={excerpt} onChange={e=>setExcerpt(e.target.value)} />
      <textarea className="bg-[#0c0c0c] border border-border rounded-xl px-4 py-3 min-h-[220px]" placeholder="Текст" value={content} onChange={e=>setContent(e.target.value)} />
      <div className="grid gap-2">
        <label className="font-semibold">Обложка</label>
        <div className="flex items-center gap-3">
          <input type="file" accept="image/*" onChange={e=>{ const f=e.target.files?.[0]; if(f) uploadFile(f) }} />
          {cover && <a className="underline" href={cover} target="_blank">Открыть</a>}
        </div>
        {cover && <img src={cover} alt="preview" className="max-h-64 rounded-xl border border-border" />}
      </div>
      <div className="flex gap-3"><button className="btn btn-primary" type="submit">Опубликовать</button><a className="btn btn-ghost" href="/admin">Отмена</a></div>
    </form>
  </main>)
}
