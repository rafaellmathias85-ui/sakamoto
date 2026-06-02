import blogContent from '../../blog_content.json'

const blogImageMap: Record<string, string> = {
  'cuidados-diarios-essenciais-para-uma-saude-bucal-impecavel': 'https://cdn.abacus.ai/images/41c41108-c310-40d9-849f-2d5f19b60e7a.png',
  'a-importancia-da-consulta-odontologica-regular-prevencao-e-o-melhor-remedio': 'https://cdn.abacus.ai/images/55aa8562-1c5b-449f-8484-86c1d6b8c6bb.png',
  'tipos-de-clareamento-dental-qual-e-o-melhor-para-voce': 'https://cdn.abacus.ai/images/3d50c3a2-791a-4fe5-a793-43d756483725.png',
  'implante-dentario-a-solucao-definitiva-para-a-perda-de-dentes': 'https://cdn.abacus.ai/images/b8b656a0-25c4-462b-ba2e-8fefdd673f94.png',
  'ortodontia-na-idade-adulta-nunca-e-tarde-para-conquistar-o-sorriso-dos-sonhos': 'https://cdn.abacus.ai/images/70489db1-b7fd-4519-8734-edb88b22b420.png',
  'saude-bucal-infantil-dicas-essenciais-para-os-pais': 'https://cdn.abacus.ai/images/119df8f7-a24f-4477-a01d-96dcd26cf848.png',
}

export interface StaticBlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  imageUrl: string
  published: boolean
  createdAt: string
  updatedAt: string
}

export const staticBlogPosts: StaticBlogPost[] = (blogContent as any[]).map((post, index) => ({
  id: post.slug,
  title: post.title,
  slug: post.slug,
  excerpt: post.excerpt,
  content: post.content,
  category: post.category,
  imageUrl: blogImageMap[post.slug] ?? blogImageMap['cuidados-diarios-essenciais-para-uma-saude-bucal-impecavel'],
  published: true,
  createdAt: new Date(2026, 4, 18 + index).toISOString(),
  updatedAt: new Date(2026, 4, 18 + index).toISOString(),
}))

export function getStaticBlogPost(slug: string) {
  return staticBlogPosts.find((post) => post.slug === slug)
}
