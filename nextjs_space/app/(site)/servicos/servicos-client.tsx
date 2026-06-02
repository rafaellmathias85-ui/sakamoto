'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Calendar, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'implantes-dentarios',
    title: 'Implantes Dentários',
    img: 'https://cdn.abacus.ai/images/b8b656a0-25c4-462b-ba2e-8fefdd673f94.png',
    desc: 'Os implantes dentários são a solução mais moderna e eficaz para a substituição de dentes perdidos. Utilizamos implantes de titânio de alta qualidade que se integram naturalmente ao osso, proporcionando estética e funcionalidade semelhantes aos dentes naturais.',
    benefits: ['Substituição permanente de dentes', 'Estética natural', 'Preservação do osso', 'Conforto e segurança'],
  },
  {
    id: 'ortodontia',
    title: 'Ortodontia',
    img: 'https://cdn.abacus.ai/images/70489db1-b7fd-4519-8734-edb88b22b420.png',
    desc: 'Tratamento ortodôntico para correção do alinhamento dos dentes e da mordida. Oferecemos diversas opções, desde aparelhos metálicos tradicionais até alinhadores transparentes, adaptando o tratamento às necessidades de cada paciente.',
    benefits: ['Alinhamento dos dentes', 'Correção da mordida', 'Melhora da estética', 'Opções discretas'],
  },
  {
    id: 'clareamento-dental',
    title: 'Clareamento Dental',
    img: 'https://cdn.abacus.ai/images/3d50c3a2-791a-4fe5-a793-43d756483725.png',
    desc: 'Procedimentos de clareamento profissional que removem manchas e devolvem a brancura natural dos dentes. Realizamos clareamento em consultório com luz LED e também oferecemos kits de clareamento caseiro supervisionado.',
    benefits: ['Resultados rápidos', 'Tratamento seguro', 'Sorriso mais branco', 'Acompanhamento profissional'],
  },
  {
    id: 'limpeza-e-prevencao',
    title: 'Limpeza e Prevenção',
    img: 'https://cdn.abacus.ai/images/41c41108-c310-40d9-849f-2d5f19b60e7a.png',
    desc: 'A profilaxia profissional é essencial para manter a saúde bucal. Além da limpeza, realizamos avaliação completa, aplicação de flúor e orientações personalizadas de higiene para prevenir problemas futuros.',
    benefits: ['Remoção de tártaro', 'Prevenção de cáries', 'Diagnóstico precoce', 'Orientação personalizada'],
  },
  {
    id: 'restauracoes',
    title: 'Restaurações',
    img: 'https://cdn.abacus.ai/images/2c8812a7-cbf5-4682-b45e-01941152f253.png',
    desc: 'Restaurações estéticas em resina composta para reparar dentes danificados por cáries, fraturas ou desgastes. Utilizamos materiais de última geração que reproduzem a cor e a transparência natural dos dentes.',
    benefits: ['Material estético', 'Resultados imediatos', 'Preservação do dente', 'Durabilidade'],
  },
  {
    id: 'proteses-dentarias',
    title: 'Próteses Dentárias',
    img: 'https://cdn.abacus.ai/images/334cf61c-6cf9-49a6-a5ce-73e1021cbcb5.png',
    desc: 'Reabilitação oral com próteses fixas e removíveis de alta qualidade. Trabalhamos com materiais de ponta para devolver a função mastigatória e a estética do sorriso.',
    benefits: ['Próteses fixas e removíveis', 'Materiais de qualidade', 'Adaptação personalizada', 'Melhora na qualidade de vida'],
  },
  {
    id: 'endodontia',
    title: 'Endodontia',
    img: 'https://cdn.abacus.ai/images/adec9e8a-b8ec-4586-b17e-f5067e517845.png',
    desc: 'Tratamento de canal realizado com técnicas modernas e instrumentação rotatória para maior conforto e precisão. O objetivo é eliminar a infecção e preservar o dente natural.',
    benefits: ['Técnicas modernas', 'Menor desconforto', 'Preservação do dente', 'Resultado duradouro'],
  },
  {
    id: 'periodontia',
    title: 'Periodontia',
    img: 'https://cdn.abacus.ai/images/a2a4fcca-1707-49f9-91fd-b8d3b8abf835.png',
    desc: 'Tratamento das doenças que afetam as gengivas e os tecidos de suporte dos dentes. A periodontia é fundamental para prevenir a perda dentária e manter a saúde bucal em dia.',
    benefits: ['Tratamento da gengivite', 'Prevenção da perda dentária', 'Saúde gengival', 'Raspagem e alisamento'],
  },
  {
    id: 'odontopediatria',
    title: 'Odontopediatria',
    img: 'https://cdn.abacus.ai/images/119df8f7-a24f-4477-a01d-96dcd26cf848.png',
    desc: 'Cuidado odontológico especializado para crianças, desde bebês até adolescentes. Com uma abordagem lúdica e acolhedora, tornamos a visita ao dentista uma experiência positiva para os pequenos.',
    benefits: ['Atendimento infantil especializado', 'Abordagem lúdica', 'Prevenção desde cedo', 'Orientação aos pais'],
  },
]

export function ServicosPage() {
  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 text-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(43,60%,60%)]">
              Tratamentos
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Nossos Serviços
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/70">
              Oferecemos uma ampla gama de tratamentos odontológicos com qualidade e tecnologia de ponta.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 space-y-16">
          {services?.map((s: any, i: number) => (
            <div key={s?.id ?? i} id={s?.id ?? ''} className="scroll-mt-24">
              <div className={`grid gap-8 lg:grid-cols-2 items-center ${i % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <FadeIn className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <Image
                      src={s?.img ?? ''}
                      alt={s?.title ?? 'Serviço'}
                      fill
                      className="object-cover"
                    />
                  </div>
                </FadeIn>
                <SlideIn from={i % 2 === 1 ? 'left' : 'right'}>
                  <div>
                    <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{s?.title ?? ''}</h2>
                    <p className="mt-4 text-muted-foreground leading-relaxed">{s?.desc ?? ''}</p>
                    <ul className="mt-6 space-y-2">
                      {(s?.benefits ?? [])?.map((b: any, j: number) => (
                        <li key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                          <span>{b ?? ''}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contato" className="inline-block mt-6">
                      <Button className="bg-gold text-white hover:bg-gold/90 gap-2">
                        <Calendar className="h-4 w-4" />
                        Agendar Consulta
                      </Button>
                    </Link>
                  </div>
                </SlideIn>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
