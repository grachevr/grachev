'use client'
import React,{useState} from 'react'
export default function LoginPage(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [error,setError]=useState('')
  async function onSubmit(e:React.FormEvent){
    e.preventDefault(); setError('')
    try{
      const res = await fetch('/api/auth/login',{ method:'POST', headers:{'Content-Type':'application/json'}, credentials:'include', body: JSON.stringify({ email, password }) })
      if(res.ok){ const data=await res.json(); window.location.href = data.role==='admin'?'/admin':'/account'; return }
      let msg='Неверный логин или пароль'; try{ const j=await res.json(); msg=j.error||msg }catch{}; setError(msg)
    }catch{ setError('Сетевой сбой, попробуйте ещё раз') }
  }
  return (<main className="container-max section"><div className="max-w-md mx-auto panel p-6">
    <h1 className="text-2xl font-bold mb-4">Вход</h1>
    <div className="text-sm text-zinc-400 mb-4">Доступ к личному кабинету высылается на почту <b>после покупки</b>. Проверьте письмо с логином и паролем.</div>
    <form onSubmit={onSubmit} className="grid gap-3">
      <input className="bg-[#0c0c0c] border border-border rounded-xl px-4 py-3" placeholder="Email" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
      <input className="bg-[#0c0c0c] border border-border rounded-xl px-4 py-3" placeholder="Пароль" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
      {error && <div className="text-red-400 text-sm">{error}</div>}
      <button className="btn btn-primary" type="submit">Войти</button>
    </form>
  </div></main>)
}
