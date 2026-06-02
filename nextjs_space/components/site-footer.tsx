import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Facebook } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-[1200px] px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10">
                <Image src="/logo.png" alt="Odontologia Sakamoto" fill className="object-contain" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight">
                Odontologia <span className="text-gold">Sakamoto</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Clínica Odontológica com qualidade assegurada. Cuidando do seu sorriso com excelência e dedicação há anos em São Bernardo do Campo.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>(11) 99292-5353</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>Rua Bom Jesus de Pirapora, 127<br />São Bernardo do Campo, SP</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" />
                <span>Seg-Sex: 8h às 18h<br />Sáb: 8h às 12h</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-display font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/servicos" className="hover:text-foreground transition-colors">Nossos Serviços</Link>
              <Link href="/sobre" className="hover:text-foreground transition-colors">Sobre a Clínica</Link>
              <Link href="/contato" className="hover:text-foreground transition-colors">Agendar Consulta</Link>
              <Link href="https://www.facebook.com/odontossakamoto/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Facebook className="h-4 w-4" />
                Facebook
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Odontologia Sakamoto. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
