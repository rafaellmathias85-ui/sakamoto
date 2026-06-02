import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

const blogImageMap: Record<string, string> = {
  'cuidados-diarios-essenciais-para-uma-saude-bucal-impecavel': 'https://cdn.abacus.ai/images/41c41108-c310-40d9-849f-2d5f19b60e7a.png',
  'a-importancia-da-consulta-odontologica-regular-prevencao-e-o-melhor-remedio': 'https://cdn.abacus.ai/images/55aa8562-1c5b-449f-8484-86c1d6b8c6bb.png',
  'tipos-de-clareamento-dental-qual-e-o-melhor-para-voce': 'https://cdn.abacus.ai/images/3d50c3a2-791a-4fe5-a793-43d756483725.png',
  'implante-dentario-a-solucao-definitiva-para-a-perda-de-dentes': 'https://cdn.abacus.ai/images/b8b656a0-25c4-462b-ba2e-8fefdd673f94.png',
  'ortodontia-na-idade-adulta-nunca-e-tarde-para-conquistar-o-sorriso-dos-sonhos': 'https://cdn.abacus.ai/images/70489db1-b7fd-4519-8734-edb88b22b420.png',
  'saude-bucal-infantil-dicas-essenciais-para-os-pais': 'https://cdn.abacus.ai/images/119df8f7-a24f-4477-a01d-96dcd26cf848.png',
}

async function main() {
  console.log('Seeding blog posts...')

  const blogContentPath = path.resolve(__dirname, '../../blog_content.json')
  const blogContent = JSON.parse(fs.readFileSync(blogContentPath, 'utf-8'))

  for (const article of blogContent) {
    const slug = article.slug || ''
    const imageUrl = blogImageMap[slug] || 'https://cdn.abacus.ai/images/41c41108-c310-40d9-849f-2d5f19b60e7a.png'

    await prisma.blogPost.upsert({
      where: { slug },
      update: {
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        category: article.category,
        imageUrl,
      },
      create: {
        title: article.title,
        slug,
        excerpt: article.excerpt,
        content: article.content,
        category: article.category,
        imageUrl,
        published: true,
      },
    })
    console.log(`  Upserted: ${article.title}`)
  }

  console.log('Seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
