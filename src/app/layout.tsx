import '../styles/globals.css'
import './styles.css'
import Link from 'next/link'

export const metadata = {
  title: { default: 'BrandName', template: '%s — BrandName' },
  description: 'Лендос + Блог + Админка + ЛК',
  metadataBase: new URL(process.env.SITE_URL || 'http://localhost:3000'),
  openGraph: {
    type: 'website',
    siteName: 'BrandName',
    url: process.env.SITE_URL || 'http://localhost:3000'
  },
  alternates: { types: { 'application/rss+xml': '/rss.xml' } },
  twitter: { card: 'summary_large_image' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="sticky top-0 z-50 bg-[rgba(14,14,14,.7)] backdrop-blur border-b border-border">
          <div className="container-max flex items-center justify-between py-3">
            <div className="flex items-center gap-4">
              <Link href="/" className="grid grid-cols-[auto_1fr] gap-3 items-center">
                <div className="w-[34px] h-[34px] rounded-xl bg-gradient-to-br from-accent to-[#3a2db7]" />
                <strong>BrandName</strong>
              </Link>
              <nav className="hidden md:flex gap-5 text-muted font-semibold">
                <a href="/#features" className="hover:text-white">Возможности</a>
                <a href="/#how" className="hover:text-white">Как работает</a>
                <a href="/#pricing" className="hover:text-white">Тарифы</a>
                <Link className="hover:text-white" href="/blog">Блог</Link>
              </nav>
            </div>
            <div className="flex gap-3">
              <Link className="btn btn-primary" href="/auth/login">Войти</Link>
            </div>
          </div>
        </header>

        {children}

        <footer className="border-t border-border">
          <div className="container-max grid gap-5 md:grid-cols-[240px_1fr] py-7">
            <div>
              <div className="grid grid-cols-[auto_1fr] gap-3 items-center mb-2">
                <div className="w-[34px] h-[34px] rounded-xl bg-gradient-to-br from-accent to-[#3a2db7]" />
                <strong>BrandName</strong>
              </div>
              <small className="text-muted">© 2025 BrandName</small>
            </div>
            <div className="grid gap-5 md:grid-cols-4">
              <div><strong>Продукт</strong><div><a href="#">Возможности</a></div><div><a href="#">Интеграции</a></div></div>
              <div><strong>Компания</strong><div><a href="#">О нас</a></div><div><a href="#">Контакты</a></div></div>
              <div><strong>Ресурсы</strong><div><a href="/blog">Блог</a></div><div><a href="#">Поддержка</a></div></div>
              <div><strong>Право</strong><div><a href="#">Условия</a></div><div><a href="#">Конфиденциальность</a></div></div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
