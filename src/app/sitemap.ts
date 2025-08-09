import { prisma } from '@/lib/prisma'
export default async function sitemap(){
  const base = process.env.SITE_URL || 'http://localhost:3000'
  const posts = await prisma.article.findMany({ select:{ slug:true, updatedAt:true } })
  return [{ url: base, lastModified: new Date() }, { url: base+'/blog', lastModified: new Date() }, ...posts.map(p=>({ url:`${base}/blog/${p.slug}`, lastModified:p.updatedAt }))]
}
