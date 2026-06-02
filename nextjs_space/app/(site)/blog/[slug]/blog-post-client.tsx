'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/animate'
import { Calendar, ArrowLeft, Share2 } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { toast } from 'sonner'

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  imageUrl: string
  createdAt: string
  updatedAt: string
}

export function BlogPostClient({ post }: { post: BlogPost }) {
  const safePost = post ?? {} as BlogPost

  const handleShare = async () => {
    try {
      if (navigator?.share) {
        await navigator.share({
          title: safePost?.title ?? '',
          text: safePost?.excerpt ?? '',
          url: window?.location?.href ?? '',
        })
      } else {
        await navigator?.clipboard?.writeText?.(window?.location?.href ?? '')
        toast?.success?.('Link copiado!')
      }
    } catch (e: any) {
      console.error('Share error:', e)
    }
  }

  const paragraphs = (safePost?.content ?? '')?.split?.('\n')?.filter?.((p: string) => p?.trim?.()) ?? []

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="mx-auto max-w-[800px] px-4 md:px-6">
          <FadeIn>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao blog
            </Link>
            <span className="block text-sm font-medium text-[hsl(43,60%,60%)] mb-3">
              {safePost?.category ?? ''}
            </span>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              {safePost?.title ?? ''}
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>
                  {safePost?.createdAt
                    ? format(new Date(safePost.createdAt), "d 'de' MMMM, yyyy", { locale: ptBR })
                    : ''}
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[800px] px-4 md:px-6">
          <FadeIn>
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-muted mb-8">
              <Image
                src={safePost?.imageUrl ?? ''}
                alt={safePost?.title ?? 'Artigo'}
                fill
                className="object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              {paragraphs?.map((p: string, i: number) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                  {p ?? ''}
                </p>
              ))}
            </div>

            <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
              <Link href="/blog">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Mais artigos
                </Button>
              </Link>
              <Button variant="outline" className="gap-2" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
