import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Star, CheckCircle, Phone } from "lucide-react"

const bullets = [
  "Prima valutazione completa: 60 minuti, solo per te",
  "Fisioterapia e osteopatia integrate — un percorso, non mille specialisti",
  "Tecnologia laser Nd:YAG che arriva dove altri trattamenti non arrivano",
]

const stats = [
  { value: "10+", label: "Anni di esperienza clinica" },
  { value: "⚽", label: "Ex fisioterapista Frosinone Calcio" },
  { value: "5 ★", label: "Valutazione Google" },
]

export function Hero() {
  return (
    <section
      className="relative flex flex-col"
      style={{ background: "linear-gradient(135deg, #0b2d2a 0%, #0f3d37 50%, #0d3530 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{ background: "rgba(94,234,212,0.12)", border: "1px solid rgba(94,234,212,0.25)", color: "#5eead4" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: "#5eead4" }} />
              Studio a Pontecorvo (FR) — Via Galileo Galilei 5
            </div>

            {/* H1 — esatto come richiesto */}
            <h1
              className="font-display text-[2rem] sm:text-5xl lg:text-[3.1rem] font-semibold leading-[1.1] tracking-tight"
              style={{ color: "white" }}
            >
              Fisioterapista a Pontecorvo
              <span className="block mt-1" style={{ color: "#5eead4" }}>
                Risolvi mal di schiena, cervicale e dolori articolari
              </span>
            </h1>

            {/* Sottotitolo concreto, orientato al risultato */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.78)" }}>
              Hai già provato massaggi, antidolorifici, riposo — e il dolore è ancora lì.
              Il problema è che nessuno ha ancora trovato la causa vera.
              Io parto da lì: <strong style={{ color: "white" }}>60 minuti di valutazione clinica approfondita</strong>,
              diagnosi precisa, piano di trattamento su misura. Non protocolli. Non generalizzazioni.
            </p>

            {/* Bullets */}
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#5eead4" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.78)" }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* Stelle */}
            <div className="mt-5 flex items-center gap-2.5 flex-wrap">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#fbbf24" }} />)}
              </div>
              <a href="https://share.google/jJD2b5LPGadgOOZD1" target="_blank" rel="noopener noreferrer"
                className="text-xs sm:text-sm hover:underline" style={{ color: "rgba(255,255,255,0.5)" }}>
                5/5 su Google · Pontecorvo
              </a>
            </div>

            {/* CTA primaria + WhatsApp */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="font-bold text-sm sm:text-base w-full sm:w-auto"
                style={{ background: "#5eead4", color: "#0b2d2a" }}>
                <Link href="/prenota" className="flex items-center justify-center gap-2">
                  👉 Prenota ora la tua prima valutazione
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm sm:text-base w-full sm:w-auto"
                style={{ borderColor: "rgba(255,255,255,0.25)", color: "white", background: "rgba(255,255,255,0.06)" }}>
                <a href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20bisogno%20di%20informazioni."
                  target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-5 w-5" /> Scrivimi su WhatsApp
                </a>
              </Button>
            </div>

            {/* CTA telefono + recensione */}
            <div className="mt-4 flex flex-wrap gap-3 items-center">
              <a href="tel:+393209631792"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                <Phone className="h-3.5 w-3.5" /> 320 963 1792
              </a>
              <a href="https://g.page/r/Cb8BmfZRugb3EBM/review" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full hover:opacity-80 transition-opacity"
                style={{ background: "rgba(255,215,0,0.12)", border: "1px solid rgba(255,215,0,0.3)", color: "#fde68a" }}>
                ⭐ Lascia una recensione su Google
              </a>
            </div>

            <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.28)" }}>
              Senza prescrizione medica · Prima visita circa 60 min · Nessun impegno
            </p>
          </div>

          {/* Foto */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
              <Image src="/images/img-2314.jpeg"
                alt="Marco Turchetta fisioterapista e osteopata a Pontecorvo — specializzato in mal di schiena, cervicale e dolori articolari"
                fill className="object-cover object-top" priority />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,45,42,0.6) 0%, transparent 50%)" }} />
            </div>
            <div className="absolute -bottom-6 -left-8 p-5 rounded-xl max-w-[270px]"
              style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.15)" }}>
              <p className="text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.85)" }}>
                &quot;Se hai già provato tutto e il dolore è ancora lì, il problema non sei tu. È che la causa non è ancora stata trovata.&quot;
              </p>
              <p className="mt-2 text-sm font-semibold" style={{ color: "#5eead4" }}>— Marco Turchetta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative w-full" style={{ background: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-8">
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${i > 0 ? "border-l" : ""}`} style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <p className="font-display text-base sm:text-2xl font-semibold leading-tight" style={{ color: "#5eead4" }}>{s.value}</p>
                <p className="mt-0.5 text-[10px] sm:text-xs leading-tight" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden leading-none" style={{ height: 36 }}>
        <svg viewBox="0 0 1440 36" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M0,0 C360,36 1080,36 1440,0 L1440,36 L0,36 Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
