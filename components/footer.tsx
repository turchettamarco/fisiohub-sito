import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

const navLinks = [
  { href: "#chi-sono", label: "Chi Sono" },
  { href: "#servizi", label: "Servizi" },
  { href: "#metodo", label: "Come Lavoro" },
  { href: "#studio", label: "Studio" },
  { href: "#contatti", label: "Contatti" },
  { href: "/prenota", label: "Prenota Online" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <Image
              src="/images/progetto-20senza-20titolo.png"
              alt="Logo Marco Turchetta Fisioterapista"
              width={160}
              height={60}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/60 text-sm leading-relaxed max-w-xs">
              Fisioterapista e osteopata a Pontecorvo (FR).
              Trattamento del dolore muscolo-scheletrico con approccio
              clinico integrato, personalizzato e basato su evidenze.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-5 text-background/40">
              Navigazione
            </h3>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider mb-5 text-background/40">
              Contatti
            </h3>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-background/35 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-background/60 leading-relaxed">
                  Via Galileo Galilei 5<br />
                  Pontecorvo (FR)<br />
                  <span className="text-background/40 text-xs">presso Studi Galileo</span>
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-background/35 flex-shrink-0" />
                <a
                  href="tel:+393209631792"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  +39 320 963 1792
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-background/35 flex-shrink-0" />
                <a
                  href="mailto:turchettamarco@gmail.com"
                  className="text-sm text-background/60 hover:text-background transition-colors"
                >
                  turchettamarco@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-7 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/30">
            © {new Date().getFullYear()} Marco Turchetta — Fisioterapia e Osteopatia, Pontecorvo (FR)
          </p>
          <p className="text-xs text-background/20">
            Professionista sanitario iscritto all&apos;Albo TSRM PSTRP
          </p>
        </div>
      </div>
    </footer>
  )
}
