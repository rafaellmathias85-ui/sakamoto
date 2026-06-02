'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { FadeIn, SlideIn } from '@/components/ui/animate'
import { Phone, MapPin, Clock, Calendar, Send, CheckCircle, Facebook } from 'lucide-react'
import { toast } from 'sonner'

const serviceOptions = [
  'Implantes Dentários',
  'Ortodontia',
  'Clareamento Dental',
  'Limpeza e Prevenção',
  'Restaurações',
  'Próteses Dentárias',
  'Endodontia',
  'Periodontia',
  'Odontopediatria',
  'Avaliação Geral',
  'Outro',
]

export function ContatoPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  })

  const updateField = (field: string, value: string) => {
    setForm((prev: any) => ({ ...(prev ?? {}), [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.()
    if (!form?.name || !form?.phone || !form?.email || !form?.service) {
      toast?.error?.('Por favor, preencha todos os campos obrigatórios.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res?.json?.()
      if (data?.success) {
        setSuccess(true)
        toast?.success?.('Agendamento enviado com sucesso!')
        setForm({ name: '', phone: '', email: '', service: '', preferredDate: '', preferredTime: '', message: '' })
      } else {
        toast?.error?.(data?.message ?? 'Erro ao enviar agendamento.')
      }
    } catch (err: any) {
      console.error('Submit error:', err)
      toast?.error?.('Erro ao enviar. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 text-center">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-[hsl(43,60%,60%)]">
              Contato
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
              Agende sua Consulta
            </h1>
            <p className="mt-4 mx-auto max-w-2xl text-white/70">
              Preencha o formulário abaixo ou entre em contato por telefone. Estamos prontos para atender você.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <SlideIn from="left" className="lg:col-span-3">
              <div className="rounded-lg bg-card p-6 md:p-8 shadow-sm">
                <h2 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-gold" />
                  Formulário de Agendamento
                </h2>

                {success ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-bold mb-2">Agendamento Enviado!</h3>
                    <p className="text-muted-foreground mb-6">
                      Recebemos seu pedido de agendamento. Entraremos em contato em breve para confirmar.
                    </p>
                    <Button onClick={() => setSuccess(false)} variant="outline">
                      Fazer novo agendamento
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <Label htmlFor="name">Nome completo *</Label>
                        <Input
                          id="name"
                          value={form?.name ?? ''}
                          onChange={(e: any) => updateField('name', e?.target?.value ?? '')}
                          placeholder="Seu nome"
                          className="mt-1.5"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input
                          id="phone"
                          value={form?.phone ?? ''}
                          onChange={(e: any) => updateField('phone', e?.target?.value ?? '')}
                          placeholder="(11) 99999-9999"
                          className="mt-1.5"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form?.email ?? ''}
                        onChange={(e: any) => updateField('email', e?.target?.value ?? '')}
                        placeholder="seu@email.com"
                        className="mt-1.5"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="service">Serviço de interesse *</Label>
                      <select
                        id="service"
                        value={form?.service ?? ''}
                        onChange={(e: any) => updateField('service', e?.target?.value ?? '')}
                        className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        required
                      >
                        <option value="">Selecione um serviço</option>
                        {serviceOptions?.map((s: any) => (
                          <option key={s} value={s ?? ''}>{s ?? ''}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <Label htmlFor="date">Data preferida</Label>
                        <Input
                          id="date"
                          type="date"
                          value={form?.preferredDate ?? ''}
                          onChange={(e: any) => updateField('preferredDate', e?.target?.value ?? '')}
                          className="mt-1.5"
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Horário preferido</Label>
                        <Input
                          id="time"
                          type="time"
                          value={form?.preferredTime ?? ''}
                          onChange={(e: any) => updateField('preferredTime', e?.target?.value ?? '')}
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem (opcional)</Label>
                      <Textarea
                        id="message"
                        value={form?.message ?? ''}
                        onChange={(e: any) => updateField('message', e?.target?.value ?? '')}
                        placeholder="Observações ou informações adicionais..."
                        className="mt-1.5"
                        rows={4}
                      />
                    </div>

                    <p className="text-xs text-muted-foreground">
                      Seus dados serão utilizados exclusivamente para o agendamento de consultas.
                    </p>

                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gold text-white hover:bg-gold/90 gap-2 font-semibold"
                      size="lg"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Enviando...
                        </span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Enviar Agendamento
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </SlideIn>

            {/* Info */}
            <SlideIn from="right" className="lg:col-span-2">
              <div className="space-y-6">
                <div className="rounded-lg bg-card p-6 shadow-sm">
                  <h3 className="font-display font-semibold text-lg mb-4">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-gold/10 p-2">
                        <Phone className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Telefone</p>
                        <a href="tel:+551141237168" className="text-sm text-muted-foreground hover:text-foreground">
                          (11) 4123-7168
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-gold/10 p-2">
                        <MapPin className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Endereço</p>
                        <p className="text-sm text-muted-foreground">
                          Rua Bom Jesus de Pirapora, 127<br />
                          São Bernardo do Campo, SP
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-gold/10 p-2">
                        <Clock className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Horário</p>
                        <p className="text-sm text-muted-foreground">
                          Seg-Sex: 8h às 18h<br />
                          Sáb: 8h às 12h
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="rounded-full bg-gold/10 p-2">
                        <Facebook className="h-5 w-5 text-gold" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">Facebook</p>
                        <a href="https://www.facebook.com/odontossakamoto/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
                          /odontossakamoto
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <iframe
                    src="https://lh3.googleusercontent.com/8AsJWVqURuMdTU9RjCxfK4L_4skGjHEfmWtZOJxfFzIurbnTzjgEANikr8zc0ussmoZv=w895"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Odontologia Sakamoto"
                  />
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>
    </>
  )
}
