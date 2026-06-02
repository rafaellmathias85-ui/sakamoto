export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: 'desc' },
    })

    const serialized = (posts ?? [])?.map((p: any) => ({
      ...(p ?? {}),
      createdAt: p?.createdAt?.toISOString?.() ?? '',
      updatedAt: p?.updatedAt?.toISOString?.() ?? '',
    }))

    return NextResponse.json({ success: true, posts: serialized })
  } catch (error: any) {
    console.error('Blog fetch error:', error)
    return NextResponse.json(
      { success: false, message: 'Erro ao buscar artigos.' },
      { status: 500 }
    )
  }
}
