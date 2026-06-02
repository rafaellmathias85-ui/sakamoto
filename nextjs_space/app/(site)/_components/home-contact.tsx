'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/animate'
import { Phone, MapPin, Calendar } from 'lucide-react'

export function HomeContact() {
  return (
    <section className="bg-navy text-white py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <FadeIn className="text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Agende sua <span className="text-[hsl(43,70%,55%)]">consulta</span>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-white/70">
            Entre em contato conosco e dê o primeiro passo para um sorriso mais saudável.
            Estamos prontos para atender você.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contato">
              <Button size="lg" className="bg-[hsl(43,70%,50%)] text-white hover:bg-[hsl(43,70%,45%)] gap-2 font-semibold w-full sm:w-auto">
                <Calendar className="h-5 w-5" />
                Agendar Online
              </Button>
            </Link>
            <a href="tel:+5511992925353">
              <Button size="lg" className="bg-white/15 text-white hover:bg-white/25 gap-2 w-full sm:w-auto border border-white/30">
                <Phone className="h-5 w-5" />
                (11) 99292-5353
              </Button>
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-white/60">
            <MapPin className="h-4 w-4" />
            <span>Rua Bom Jesus de Pirapora, 127 - São Bernardo do Campo, SP</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
