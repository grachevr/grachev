import Link from 'next/link'

export const metadata = {
  title: 'Главная — Единый стиль',
  description: 'Адаптивная, аккуратная верстка. Админка и ЛК оформлены в таком же стиле.',
  openGraph: {
    title: 'Главная — Единый стиль',
    description: 'Адаптивная, аккуратная верстка. Админка и ЛК оформлены в таком же стиле.',
    url: process.env.SITE_URL || 'http://localhost:3000',
    type: 'website'
  },
  alternates: { canonical: '/' }
}

export default function Home(){
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000'
  const ld = {'@context':'https://schema.org','@type':'Organization',name:'BrandName',url:siteUrl,logo:siteUrl+'/icon.png',sameAs:[]}

  return (
    <main>
      {/* HERO */}
      <section className="section text-center bg-gradient-to-b from-[#151515] to-transparent">
        <div className="container-max grid gap-6 place-items-center">
          <span className="inline-flex gap-2 items-center text-xs muted border border-border rounded-full px-3 py-1 bg-white/5">★ Качественный старт для SEO</span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">Главная страница в едином стиле</h1>
          <p className="m-0 max-w-3xl muted">Адаптивная, аккуратная верстка. Админка и ЛК оформлены в таком же стиле.</p>
          <div className="flex gap-3 flex-wrap justify-center">
            <a className="btn btn-primary" href="#pricing">Купить</a>
            <Link className="btn btn-ghost" href="/blog">Читать блог</Link>
          </div>
          <div className="w-full"><div className="h-[360px] md:h-[440px] panel" /></div>
        </div>
      </section>

      {/* ЛОГОТИПЫ */}
      <section className="section scroll-offset">
        <div className="container-max flex gap-4 md:gap-6 flex-wrap justify-center items-center">
          {['Логотип 1','Логотип 2','Логотип 3','Логотип 4','Логотип 5'].map((t,i)=>(
            <div key={i} className="h-10 w-28 border border-dashed border-border rounded-lg grid place-items-center text-zinc-400">{t}</div>
          ))}
        </div>
      </section>

      {/* ФИЧИ */}
      <section id="features" className="section scroll-offset">
        <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {['Фича №1','Фича №2','Фича №3'].map((t,i)=>(
            <article key={i} className="panel p-6">
              <div className="w-9 h-9 rounded-lg mb-3 bg-gradient-to-br from-accent to-[#3a2db7]" />
              <h3 className="m-0 mb-2">{t}</h3>
              <p className="muted m-0">Короткое описание преимущества и почему это важно.</p>
            </article>
          ))}
        </div>
      </section>

      {/* КАК ЭТО РАБОТАЕТ */}
      <section id="how" className="section scroll-offset">
        <div className="container-max grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          <div className="panel min-h-[320px] md:col-span-7" />
          <div className="md:col-span-5 p-2">
            <h2>Как это работает</h2>
            <p className="muted">Опишите пошаговый сценарий: 1) подключение 2) настройка 3) результат.</p>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="text-center border border-border rounded-xl p-3"><strong>+120%</strong><br/><span className="muted text-sm">Метрика А</span></div>
              <div className="text-center border border-border rounded-xl p-3"><strong>−35%</strong><br/><span className="muted text-sm">Метрика B</span></div>
              <div className="text-center border border-border rounded-xl p-3"><strong>24/7</strong><br/><span className="muted text-sm">Поддержка</span></div>
            </div>
            <div className="mt-4"><a className="btn btn-primary" href="#pricing">Начать сейчас</a></div>
          </div>
        </div>
      </section>

      {/* ТАРИФЫ */}
      <section id="pricing" className="section scroll-offset">
        <div className="container-max">
          <h2 className="text-center m-0 mb-1">Тарифы</h2>
          <p className="muted text-center m-0 mb-5">Ежемесячно или ежегодно — выберите то, что удобнее.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {['Старт','Про','Бизнес'].map((p,i)=>(
              <article key={i} className={`panel p-6 ${i===1?'ring-2 ring-accent':''}`}>
                <h4>{p}</h4>
                <div className="text-4xl font-extrabold">₽{[990,2990,7990][i]} <span className="text-sm muted">/мес</span></div>
                <ul className="mt-4 grid gap-2 text-zinc-300">
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent2 inline-block" /> Особенность 1</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent2 inline-block" /> Особенность 2</li>
                  <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent2 inline-block" /> Особенность 3</li>
                </ul>
                <div className="mt-4"><a className={`btn ${i===1?'btn-primary':'btn-ghost'}`} href="#">Выбрать</a></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section className="section">
        <div className="container-max grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {Array.from({length:3}).map((_,i)=>(
            <article key={i} className="panel p-6">
              <p className="m-0 mb-2">«Очень понравился продукт. Быстрая интеграция и измеримый рост метрик.»</p>
              <div className="muted">Имя Фамилия, Компания</div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-max grid gap-3 place-items-center text-center p-6 rounded-2xl border border-border bg-gradient-to-br from-[rgba(124,92,255,.2)] to-[rgba(85,214,170,.1)]">
          <h3 className="m-0">Готовы начать?</h3>
          <p className="muted m-0">Замените тексты и изображения своими — и публикуйте.</p>
          <div className="flex gap-3">
            <a className="btn btn-primary" href="#pricing">Перейти к покупке</a>
            <Link className="btn btn-ghost" href="/blog">Читать блог</Link>
          </div>
        </div>
      </section>

      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </main>
  )
}
