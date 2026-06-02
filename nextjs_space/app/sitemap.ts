import { MetadataRoute } from 'next'
import { staticBlogPosts } from '@/lib/static-blog'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXTAUTH_URL ?? 'https://odontosakamoto.com.br'

  const staticPages = [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${siteUrl}/sobre`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${siteUrl}/servicos`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${siteUrl}/galeria`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${siteUrl}/contato`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.9 },
  ]

  const blogPages: MetadataRoute.Sitemap = staticBlogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...blogPages]
}
