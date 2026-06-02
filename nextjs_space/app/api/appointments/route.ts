export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const data = await request?.json()
    const name = data?.name ?? ''
    const phone = data?.phone ?? ''
    const email = data?.email ?? ''
    const service = data?.service ?? ''
    const preferredDate = data?.preferredDate ?? ''
    const preferredTime = data?.preferredTime ?? ''
    const message = data?.message ?? ''

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { success: false, message: 'Campos obrigatórios não preenchidos.' },
        { status: 400 }
      )
    }

    const appointment = await prisma.appointment.create({
      data: {
        name,
        phone,
        email,
        service,
        preferredDate,
        preferredTime,
        message,
      },
    })

    // Send email notification
    try {
      const appUrl = process.env.NEXTAUTH_URL || ''
      let appName = 'Odontologia Sakamoto'
      try {
        appName = appUrl ? new URL(appUrl).hostname?.split?.('.')?.[0] ?? 'Odontologia Sakamoto' : 'Odontologia Sakamoto'
      } catch { /* ignore */ }

      const htmlBody = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a3a5c; border-bottom: 3px solid #c8a850; padding-bottom: 10px;">
            Novo Agendamento de Consulta
          </h2>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 8px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Telefone:</strong> ${phone}</p>
            <p style="margin: 8px 0;"><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Serviço:</strong> ${service}</p>
            <p style="margin: 8px 0;"><strong>Data Preferida:</strong> ${preferredDate || 'Não informada'}</p>
            <p style="margin: 8px 0;"><strong>Horário Preferido:</strong> ${preferredTime || 'Não informado'}</p>
            ${message ? `<p style="margin: 8px 0;"><strong>Mensagem:</strong></p><div style="background: white; padding: 12px; border-radius: 4px; border-left: 4px solid #c8a850;">${message}</div>` : ''}
          </div>
          <p style="color: #666; font-size: 12px;">
            Enviado em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
          </p>
        </div>
      `

      let senderEmail = 'noreply@mail.abacusai.app'
      try {
        if (appUrl) {
          senderEmail = `noreply@${new URL(appUrl).hostname}`
        }
      } catch { /* ignore */ }

      await fetch('https://apps.abacus.ai/api/sendNotificationEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deployment_token: process.env.ABACUSAI_API_KEY,
          app_id: process.env.WEB_APP_ID,
          notification_id: process.env.NOTIF_ID_AGENDAMENTO_DE_CONSULTA,
          subject: `Novo Agendamento: ${name} - ${service}`,
          body: htmlBody,
          is_html: true,
          recipient_email: 'rafael@wticorp.com.br',
          reply_to: email,
          sender_email: senderEmail,
          sender_alias: 'Odontologia Sakamoto',
        }),
      })
    } catch (emailErr: any) {
      console.error('Email notification error:', emailErr)
      // Don't fail the appointment creation if email fails
    }

    return NextResponse.json({ success: true, appointment: { id: appointment?.id } })
  } catch (error: any) {
    console.error('Appointment creation error:', error)
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor.' },
      { status: 500 }
    )
  }
}
