'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { ArrowRight } from 'lucide-react'

const services = [
  { title: 'Implantes Dentários', desc: 'Substituição de dentes perdidos com técnicas modernas e resultados naturais.', img: 'https://cdn.abacus.ai/images/b8b656a0-25c4-462b-ba2e-8fefdd673f94.png', slug: 'implantes-dentarios' },
  { title: 'Ortodontia', desc: 'Correção do alinhamento dentário com aparelhos fixos, móveis e alinhadores.', img: 'https://cdn.abacus.ai/images/70489db1-b7fd-4519-8734-edb88b22b420.png', slug: 'ortodontia' },
  { title: 'Clareamento Dental', desc: 'Tratamentos seguros para um sorriso mais branco e radiante.', img: 'https://cdn.abacus.ai/images/3d50c3a2-791a-4fe5-a793-43d756483725.png', slug: 'clareamento-dental' },
  { title: 'Limpeza e Prevenção', desc: 'Profilaxia profissional para manter sua saúde bucal em dia.', img: 'https://cdn.abacus.ai/images/41c41108-c310-40d9-849f-2d5f19b60e7a.png', slug: 'limpeza-e-prevencao' },
  { title: 'Próteses Dentárias', desc: 'Reabilitação oral com próteses fixas e removíveis de alta qualidade.', img: 'https://cdn.abacus.ai/images/334cf61c-6cf9-49a6-a5ce-73e1021cbcb5.png', slug: 'proteses-dentarias' },
  { title: 'Odontopediatria', desc: 'Cuidado especial para a saúde bucal de crianças em ambiente acolhedor.', img: 'https://cdn.abacus.ai/images/119df8f7-a24f-4477-a01d-96dcd26cf848.png', slug: 'odontopediatria' },
]

export function HomeServices() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Tratamentos</span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-3 mx-auto max-w-2xl text-muted-foreground">
            Oferecemos uma gama completa de tratamentos odontológicos para cuidar do seu sorriso em todas as fases da vida.
          </p>
        </FadeIn>

        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {services?.map((s: any, i: number) => (
            <StaggerItem key={i}>
              <Link href={`/servicos#${s?.slug ?? ''}`} className="group block">
                <div className="overflow-hidden rounded-lg bg-card shadow-sm transition-all hover:shadow-md">
                  <div className="relative aspect-[4/3] bg-muted">
                    <Image
                      src={s?.img ?? ''}
                      alt={s?.title ?? 'Serviço odontológico'}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-semibold text-lg">{s?.title ?? ''}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s?.desc ?? ''}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-gold group-hover:gap-2 transition-all">
                      Saiba mais <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="text-center mt-10">
          <Link href="/servicos">
            <Button variant="outline" className="gap-2">
              Ver todos os serviços
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
