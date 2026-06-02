export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const name = data?.name ?? ''
    const phone = data?.phone ?? ''
    const email = data?.email ?? ''
    const service = data?.service ?? ''
    const preferredDate = data?.preferredDate ?? ''
    const preferredTime = data?.preferredTime ?? ''
    const message = data?.message ?? ''

    if (!name || !phone || !email || !service) {
      return NextResponse.json(
        { success: false, message: 'Campos obrigatorios nao preenchidos.' },
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

    return NextResponse.json({ success: true, appointment: { id: appointment.id } })
  } catch (error: any) {
    console.error('Appointment creation error:', error)
    return NextResponse.json(
      { success: false, message: 'Erro interno do servidor.' },
      { status: 500 }
    )
  }
}
