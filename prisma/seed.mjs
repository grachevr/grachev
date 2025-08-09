import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL || 'admin@site.com'
  const pass  = process.env.ADMIN_PASSWORD || 'admin12345'
  const name  = process.env.ADMIN_NAME || 'Администратор'
  const hash = await bcrypt.hash(pass, 10)

  await prisma.user.upsert({
    where: { email },
    update: { password: hash, name, role: 'admin' },
    create: { email, password: hash, name, role: 'admin' }
  })

  console.log('✔ Admin user is ready:', email)
}

main().finally(()=>prisma.$disconnect())
