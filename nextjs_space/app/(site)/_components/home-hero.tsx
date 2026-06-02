'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Calendar, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://cdn.abacus.ai/images/bf610942-91c6-45d7-86b7-345673a5a221.png"
          alt="Interior moderno da clínica Odontologia Sakamoto"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(210,70%,25%)] via-[hsl(210,70%,25%/0.95)] to-[hsl(210,70%,25%/0.7)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 py-20 md:px-6 md:py-28 lg:py-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-[hsl(43,60%,70%)] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[hsl(43,70%,50%)]" />
            Qualidade Assegurada
          </div>

          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Seu sorriso merece o{' '}
            <span className="text-[hsl(43,70%,55%)]">melhor cuidado</span>
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-white/80 md:text-xl">
            Há anos cuidando da saúde bucal com excelência em São Bernardo do Campo.
            Tecnologia de ponta e atendimento humanizado para toda a família.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link href="/contato">
              <Button size="lg" className="w-full sm:w-auto bg-[hsl(43,70%,50%)] text-white hover:bg-[hsl(43,70%,45%)] gap-2 font-semibold">
                <Calendar className="h-5 w-5" />
                Agendar Consulta
              </Button>
            </Link>
            <Link href="/servicos">
              <Button size="lg" className="w-full sm:w-auto bg-white/15 text-white hover:bg-white/25 gap-2 border border-white/30">
                Nossos Serviços
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[hsl(43,70%,55%)]" />
              <span>(11) 4125-6639</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span>Ter-Sex 8h às 21h · Sáb 9h às 13h</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
