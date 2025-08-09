export default function robots(){const b=process.env.SITE_URL||'http://localhost:3000';return{rules:[{userAgent:'*',allow:'/'}],sitemap:b+'/sitemap.xml'}}
