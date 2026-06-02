'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/galeria', label: 'Galeria' },
  { href: '/blog', label: 'Blog' },
  { href: '/contato', label: 'Contato' },
]

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10">
            <Image src="/logo.png" alt="Odontologia Sakamoto" fill className="object-contain" />
          </div>
          <span className="hidden font-display text-lg font-bold tracking-tight text-foreground sm:block">
            Odontologia <span className="text-gold">Sakamoto</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks?.map((link: any) => (
            <Link
              key={link?.href}
              href={link?.href ?? '/'}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground ${
                pathname === link?.href ? 'text-foreground bg-muted' : 'text-muted-foreground'
              }`}
            >
              {link?.label ?? ''}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contato">
            <Button size="sm" className="bg-gold text-white hover:bg-gold/90 gap-2">
              <Phone className="h-4 w-4" />
              Agendar Consulta
            </Button>
          </Link>
        </div>

        <button
          className="flex items-center justify-center rounded-md p-2 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-border md:hidden overflow-hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4 bg-background">
              {navLinks?.map((link: any) => (
                <Link
                  key={link?.href}
                  href={link?.href ?? '/'}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted ${
                    pathname === link?.href ? 'text-foreground bg-muted' : 'text-muted-foreground'
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link?.label ?? ''}
                </Link>
              ))}
              <Link href="/contato" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="w-full mt-2 bg-gold text-white hover:bg-gold/90 gap-2">
                  <Phone className="h-4 w-4" />
                  Agendar Consulta
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
