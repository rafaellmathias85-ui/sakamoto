import { notFound } from 'next/navigation'
import { BlogPostClient } from './blog-post-client'
import { getStaticBlogPost, staticBlogPosts } from '@/lib/static-blog'

export function generateStaticParams() {
  return staticBlogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params?.slug ?? ''
  const post = getStaticBlogPost(slug)

  if (!post) return { title: 'Artigo não encontrado' }

  return {
    title: post?.title ?? 'Blog',
    description: post?.excerpt ?? '',
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const slug = params?.slug ?? ''
  const post = getStaticBlogPost(slug)

  if (!post) notFound()

  return <BlogPostClient post={post} />
}
