import { MetadataRoute } from 'next'
import { headers } from 'next/headers'
import { prisma } from '@/lib/db'

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = headers()
  const host = headersList?.get?.('x-forwarded-host') ?? process.env.NEXTAUTH_URL ?? 'http://localhost:3000'
  const siteUrl = host?.startsWith?.('http') ? host : `https://${host}`

  const staticPages = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${siteUrl}/sobre`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/servicos`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${siteUrl}/galeria`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${siteUrl}/contato`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
    })
    blogPages = (posts ?? [])?.map((p: any) => ({
      url: `${siteUrl}/blog/${p?.slug ?? ''}`,
      lastModified: p?.updatedAt ?? new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (e: any) {
    console.error('Sitemap error:', e)
  }

  return [...staticPages, ...blogPages]
}
