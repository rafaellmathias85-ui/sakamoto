export const dynamic = 'force-dynamic'

import { prisma } from '@/lib/db'
import { notFound } from 'next/navigation'
import { BlogPostClient } from './blog-post-client'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params?.slug ?? ''
  let post: any = null
  try {
    post = await prisma.blogPost.findUnique({ where: { slug } })
  } catch (e: any) {
    console.error('Error:', e)
  }

  if (!post) return { title: 'Artigo não encontrado' }

  return {
    title: post?.title ?? 'Blog',
    description: post?.excerpt ?? '',
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug ?? ''
  let post: any = null
  try {
    post = await prisma.blogPost.findUnique({ where: { slug } })
  } catch (e: any) {
    console.error('Error:', e)
  }

  if (!post) notFound()

  const serialized = {
    ...(post ?? {}),
    createdAt: post?.createdAt?.toISOString?.() ?? '',
    updatedAt: post?.updatedAt?.toISOString?.() ?? '',
  }

  return <BlogPostClient post={serialized} />
}
