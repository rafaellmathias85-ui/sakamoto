'use client'

import Image from 'next/image'
import { FadeIn, Stagger, StaggerItem, SlideIn } from '@/components/ui/animate'
import { Heart, Target, Eye, Users, GraduationCap, Stethoscope } from 'lucide-react'

const team = [
  {
    name: 'Dr. Luis Sakamoto',
    role: 'Cirurgião-Dentista | Implantodontia e Prótese',
    img: 'https://cdn.abacus.ai/images/268ea16d-9dae-44fe-838b-2e4b8c750099.png',
    bio: 'Fundador da clínica, o Dr. Luis Sakamoto é especialista em implantodontia e prótese dentária. Com décadas de experiência, dedica-se a reabilitar sorrisos com excelência e humanização.',
  },
  {
    name: 'Dra. Tania Sakamoto',
    role: 'Cirurgiã-Dentista | Estética e Clínica Geral',
    img: 'https://cdn.abacus.ai/images/f46bde4f-c5b8-4fba-8cba-92b48adbc06e.png',
    bio: 'Especialista em estética dental e clínica geral, a Dra. Tania é reconhecida pelo atendimento cuidadoso e resultados que transformam a autoestima dos pacientes.',
  },
  {
    name: 'Dra. Claudia',
    role: 'Cirurgiã-Dentista | Ortodontia e Odontopediatria',
    img: 'https://cdn.abacus.ai/images/4d1223ae-0f71-4f7e-b96c-9f9c490e26ac.png',
    bio: 'A Dra. Claudia é apaixonada pelo cuidado infantil e pela ortodontia. Com abordagem lúdica e acolhedora, transforma a experiência no dentista em algo positivo para crianças e adultos.',
  },
]

const values = [
  { icon: Heart, title: 'Humanização', desc: 'Cada paciente é único. Oferecemos atendimento personalizado e acolhedor.' },
  { icon: Target, title: 'Excelência', desc: 'Buscamos sempre os melhores resultados com técnicas atualizadas.' },
  { icon: Eye, title: 'Transparência', desc: 'Comunicamos de forma clara todos os procedimentos e valores.' },
  { icon: Users, title: 'Família', desc: 'Cuidamos de todas as idades, de crianças a idosos.' },
]

export function SobrePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy text-white py-16 md:py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://cdn.abacus.ai/images/55aa8562-1c5b-449f-8484-86c1d6b8c6bb.png"
            alt="Interior da clínica"
            fill
            className="object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,70%,25%)] to-[hsl(210,70%,25%/0.9)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 text-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(43,60%,60%)]">
              Sobre Nós
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Conheça a Odontologia Sakamoto
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/70">
              Somos uma clínica odontológica dedicada a oferecer tratamentos de excelência
              com atendimento humanizado em São Bernardo do Campo.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* História */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://cdn.abacus.ai/images/c19016dd-3da8-4026-ae66-39ca2a005f5a.png"
                  alt="História da clínica Sakamoto"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <SlideIn from="right">
              <div>
                <span className="text-sm font-semibold uppercase tracking-wider text-gold">Nossa História</span>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
                  Tradição em cuidar de sorrisos
                </h2>
                <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Fundada pelo Dr. Luis Sakamoto, a Odontologia Sakamoto nasceu da paixão por transformar
                    sorrisos e proporcionar saúde bucal de qualidade para a comunidade de São Bernardo do Campo
                    e região do ABC Paulista.
                  </p>
                  <p>
                    Ao longo dos anos, a clínica cresceu e se modernizou, mas manteve seus valores
                    fundamentais: o cuidado com cada paciente, a busca pela excelência técnica e o
                    compromisso com resultados que fazem a diferença na vida das pessoas.
                  </p>
                  <p>
                    Hoje, com uma equipe formada por profissionais especializados e infraestrutura
                    completa, continuamos nossa missão de oferecer o melhor da odontologia moderna
                    com o calor humano que nos diferencia.
                  </p>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">Nossos Valores</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
              O que nos move
            </h2>
          </FadeIn>
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {values?.map((v: any, i: number) => {
              const Icon = v?.icon
              return (
                <StaggerItem key={i}>
                  <div className="rounded-lg bg-card p-6 text-center shadow-sm hover:shadow-md transition-shadow h-full">
                    {Icon && <Icon className="h-10 w-10 text-gold mx-auto mb-4" />}
                    <h3 className="font-display font-semibold">{v?.title ?? ''}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{v?.desc ?? ''}</p>
                  </div>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold">Equipe</span>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">
              Nossos Profissionais
            </h2>
            <p className="mt-3 mx-auto max-w-2xl text-muted-foreground">
              Conheça os dentistas que cuidarão do seu sorriso com dedicação e competência.
            </p>
          </FadeIn>

          <Stagger className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {team?.map((member: any, i: number) => (
              <StaggerItem key={i}>
                <div className="rounded-lg bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative aspect-[3/4] bg-muted">
                    <Image
                      src={member?.img ?? ''}
                      alt={member?.name ?? 'Dentista'}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-1">
                      <Stethoscope className="h-4 w-4 text-gold" />
                      <h3 className="font-display font-semibold text-lg">{member?.name ?? ''}</h3>
                    </div>
                    <p className="text-sm text-gold font-medium">{member?.role ?? ''}</p>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{member?.bio ?? ''}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  )
}
