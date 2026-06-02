'use client'

import { FadeIn, Stagger, StaggerItem } from '@/components/ui/animate'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  { name: 'Maria Oliveira', text: 'Excelente atendimento! A equipe é muito profissional e atenciosa. Fiz meu implante com o Dr. Luis e o resultado ficou perfeito.', rating: 5 },
  { name: 'Carlos Santos', text: 'Minha família toda se consulta na Sakamoto. Ambiente acolhedor, profissionais competentes e preços justos. Super recomendo!', rating: 5 },
  { name: 'Ana Paula Ferreira', text: 'Fiz clareamento com a Dra. Tania e adorei o resultado. A clínica é moderna e o atendimento é impecável do início ao fim.', rating: 5 },
  { name: 'Roberto Mendes', text: 'Meu filho adora ir ao dentista graças à Dra. Claudia. Ela tem uma paciência incrível e torna tudo muito divertido para as crianças.', rating: 5 },
]

export function HomeTestimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-sm font-semibold uppercase tracking-wider text-gold">Depoimentos</span>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight md:text-4xl">
            O que dizem nossos pacientes
          </h2>
        </FadeIn>

        <Stagger className="grid gap-6 md:grid-cols-2" staggerDelay={0.12}>
          {testimonials?.map((t: any, i: number) => (
            <StaggerItem key={i}>
              <div className="rounded-lg bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                <Quote className="h-8 w-8 text-gold/30 mb-3" />
                <p className="text-muted-foreground leading-relaxed italic">"{t?.text ?? ''}"</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-semibold text-sm">{t?.name ?? ''}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t?.rating ?? 5 })?.map((_: any, j: number) => (
                      <Star key={j} className="h-4 w-4 fill-[hsl(43,70%,50%)] text-[hsl(43,70%,50%)]" />
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
