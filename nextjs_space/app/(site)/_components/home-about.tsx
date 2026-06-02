'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/animate'
import { Shield, Heart, Award, ArrowRight } from 'lucide-react'

const features = [
  { icon: Shield, title: 'Segurança', desc: 'Protocolos rigorosos de biossegurança e esterilização' },
  { icon: Heart, title: 'Humanização', desc: 'Atendimento acolhedor focado no conforto do paciente' },
  { icon: Award, title: 'Excelência', desc: 'Equipe qualificada com atualização profissional constante' },
]

export function HomeAbout() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <FadeIn>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/images/fundadores-sakamoto.jpeg"
                alt="Donos e fundadores da Odontologia Sakamoto"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-gold">Sobre a clínica</span>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
                Tradição e modernidade no cuidado com seu sorriso
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A Odontologia Sakamoto é referência em odontologia na região do ABC Paulista.
                Com uma equipe de profissionais altamente qualificados e infraestrutura moderna,
                oferecemos tratamentos completos para toda a família.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Nossa missão é proporcionar saúde bucal com excelência, aliando técnica
                avançada a um atendimento humano e personalizado.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {features?.map((f: any, i: number) => {
                  const Icon = f?.icon
                  return (
                    <div key={i} className="rounded-lg bg-muted/50 p-4">
                      {Icon && <Icon className="h-6 w-6 text-gold mb-2" />}
                      <h3 className="font-semibold text-sm">{f?.title ?? ''}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{f?.desc ?? ''}</p>
                    </div>
                  )
                })}
              </div>

              <Link href="/sobre" className="inline-block mt-6">
                <Button variant="outline" className="gap-2">
                  Conheça nossa história
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
