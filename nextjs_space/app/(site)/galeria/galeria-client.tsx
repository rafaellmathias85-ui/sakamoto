'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { X, ZoomIn } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const galleryItems = [
  { src: 'https://cdn.abacus.ai/images/55aa8562-1c5b-449f-8484-86c1d6b8c6bb.png', alt: 'Sala de tratamento moderna', category: 'Estrutura' },
  { src: 'https://cdn.abacus.ai/images/c19016dd-3da8-4026-ae66-39ca2a005f5a.png', alt: 'Recepção da clínica', category: 'Estrutura' },
  { src: 'https://cdn.abacus.ai/images/bf610942-91c6-45d7-86b7-345673a5a221.png', alt: 'Ambiente moderno da clínica', category: 'Estrutura' },
  { src: 'https://cdn.abacus.ai/images/b8b656a0-25c4-462b-ba2e-8fefdd673f94.png', alt: 'Procedimento de implante', category: 'Tratamentos' },
  { src: 'https://cdn.abacus.ai/images/3d50c3a2-791a-4fe5-a793-43d756483725.png', alt: 'Clareamento dental', category: 'Tratamentos' },
  { src: 'https://cdn.abacus.ai/images/70489db1-b7fd-4519-8734-edb88b22b420.png', alt: 'Tratamento ortodôntico', category: 'Tratamentos' },
  { src: 'https://cdn.abacus.ai/images/41c41108-c310-40d9-849f-2d5f19b60e7a.png', alt: 'Limpeza profissional', category: 'Tratamentos' },
  { src: 'https://cdn.abacus.ai/images/119df8f7-a24f-4477-a01d-96dcd26cf848.png', alt: 'Atendimento infantil', category: 'Tratamentos' },
]

const categories = ['Todos', 'Estrutura', 'Tratamentos']

export function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)

  const filtered = selectedCategory === 'Todos'
    ? galleryItems
    : galleryItems?.filter((item: any) => item?.category === selectedCategory)

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(43,60%,60%)]">
              Galeria
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Nossa Estrutura e Casos
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/70">
              Conheça nossa clínica e veja alguns dos nossos tratamentos realizados.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="flex justify-center gap-2 mb-10">
            {categories?.map((cat: any) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat ?? 'Todos')}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {cat ?? ''}
              </button>
            ))}
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {(filtered ?? [])?.map((item: any, i: number) => (
              <StaggerItem key={i}>
                <button
                  onClick={() => setLightboxImg(item?.src ?? null)}
                  className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted"
                >
                  <Image
                    src={item?.src ?? ''}
                    alt={item?.alt ?? 'Galeria'}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
            onClick={() => setLightboxImg(null)}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full aspect-video"
              onClick={(e: any) => e?.stopPropagation?.()}
            >
              <Image
                src={lightboxImg ?? ''}
                alt="Imagem ampliada"
                fill
                className="object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
