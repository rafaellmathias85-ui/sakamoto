'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

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

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const safePosts = posts ?? []

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(43,60%,60%)]">
              Blog
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Dicas de Saúde Bucal
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/70">
              Artigos e orientações para cuidar melhor do seu sorriso no dia a dia.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          {safePosts?.length === 0 ? (
            <FadeIn className="text-center py-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Nenhum artigo publicado ainda. Volte em breve!</p>
            </FadeIn>
          ) : (
            <Stagger className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {safePosts?.map((post: any) => (
                <StaggerItem key={post?.id ?? post?.slug}>
                  <Link href={`/blog/${post?.slug ?? ''}`} className="group block">
                    <div className="overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-md transition-all">
                      <div className="relative aspect-[16/10] bg-muted">
                        <Image
                          src={post?.imageUrl ?? ''}
                          alt={post?.title ?? 'Artigo'}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="rounded-full bg-gold/90 px-3 py-1 text-xs font-medium text-white">
                            {post?.category ?? ''}
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3" />
                          <span>
                            {post?.createdAt
                              ? format(new Date(post.createdAt), "d 'de' MMMM, yyyy", { locale: ptBR })
                              : ''}
                          </span>
                        </div>
                        <h2 className="font-display font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                          {post?.title ?? ''}
                        </h2>
                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                          {post?.excerpt ?? ''}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                          Ler artigo <ArrowRight className="h-3.5 w-3.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>
      </section>
    </>
  )
}
