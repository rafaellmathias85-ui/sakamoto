export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/db'
import { BlogListClient } from './blog-list-client'

export const metadata = {
  title: 'Blog',
  description: 'Dicas e artigos sobre saúde bucal da Odontologia Sakamoto.',
}

export default async function BlogPage() {
  let posts: any[] = []
  try {
    posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    })
  } catch (e: any) {
    console.error('Error fetching posts:', e)
  }

  const serialized = (posts ?? [])?.map((p: any) => ({
    ...(p ?? {}),
    createdAt: p?.createdAt?.toISOString?.() ?? '',
    updatedAt: p?.updatedAt?.toISOString?.() ?? '',
  }))

  return <BlogListClient posts={serialized} />
}
