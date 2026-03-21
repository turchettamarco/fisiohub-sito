import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Star, CheckCircle } from "lucide-react"

const bullets = [
  "Trattamento basato sulla causa, non solo sul sintomo",
  "Fisioterapia e osteopatia integrate in un unico percorso",
  "Sedute dedicate — sei l'unico paziente in trattamento",
]

const stats = [
  { value: "10+", label: "Anni di esperienza" },
  { value: "D.O.", label: "Diploma in Osteopatia (in corso)" },
  { value: "5 ★", label: "Recensioni Google" },
]

export function Hero() {
  return (
    <section
      className="relative flex flex-col"
      style={{ background: "linear-gradient(135deg, #0b2d2a 0%, #0f3d37 50%, #0d3530 100%)" }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Copy ── */}
          <div>
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-5"
              style={{ background: "rgba(94,234,212,0.12)", border: "1px solid rgba(94,234,212,0.25)", color: "#5eead4" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0" style={{ background: "#5eead4" }} />
              Fisioterapista &amp; Osteopata — Pontecorvo (FR)
            </div>

            {/* Headline */}
            <h1
              className="font-display text-[2.2rem] sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] tracking-tight"
              style={{ color: "white" }}
            >
              Hai dolore da settimane?
              <br />
              <span style={{ color: "#5eead4" }}>È ora di risolverlo.</span>
            </h1>

            {/* Sub */}
            <p
              className="mt-4 text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: "rgba(255,255,255,0.68)" }}
            >
              Cervicale, schiena, spalla, ginocchio, sciatica. Trovo la causa
              e costruisco il percorso più efficace per eliminarla — non solo tamponarla.
            </p>

            {/* Bullets */}
            <ul className="mt-5 space-y-2.5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: "#5eead4" }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{b}</span>
                </li>
              ))}
            </ul>

            {/* Stars */}
            <div className="mt-5 flex items-center gap-2.5">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" style={{ color: "#5eead4" }} />
                ))}
              </div>
              <span className="text-xs sm:text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Valutato 5/5 dai pazienti su Google
              </span>
            </div>

            {/* CTAs — stacked on mobile, row on sm+ */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="font-semibold text-sm sm:text-base w-full sm:w-auto"
                style={{ background: "#5eead4", color: "#0b2d2a" }}
              >
                <Link href="/prenota" className="flex items-center justify-center gap-2">
                  Prenota la prima valutazione
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-sm sm:text-base w-full sm:w-auto"
                style={{
                  borderColor: "rgba(255,255,255,0.25)",
                  color: "white",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <a
                  href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20bisogno%20di%20informazioni."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Scrivimi su WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-3 text-xs text-center sm:text-left" style={{ color: "rgba(255,255,255,0.3)" }}>
              Prima visita circa 60 min · Nessun impegno
            </p>
          </div>

          {/* ── Photo — hidden on mobile ── */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
              <Image
                src="/images/img-2314.jpeg"
                alt="Dott. Marco Turchetta — Fisioterapista e Osteopata a Pontecorvo"
                fill
                className="object-cover object-top"
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(11,45,42,0.6) 0%, transparent 50%)" }}
              />
            </div>

            {/* Floating quote */}
            <div
              className="absolute -bottom-6 -left-8 p-5 rounded-xl max-w-[270px]"
              style={{
                background: "rgba(255,255,255,0.09)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <p className="text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.82)" }}>
                "Non mi accontento di toglierti il dolore. Voglio che tu capisca perché ce l'hai — e come non averlo più."
              </p>
              <p className="mt-2 text-sm font-semibold" style={{ color: "#5eead4" }}>
                — Marco Turchetta
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Stats bar */}
      <div
        className="relative w-full"
        style={{ background: "rgba(255,255,255,0.04)", borderTop: "1px solid rgba(255,255,255,0.08)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
          <div className="grid grid-cols-3 gap-2 sm:gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center ${i > 0 ? "border-l" : ""}`}
                style={{ borderColor: "rgba(255,255,255,0.1)" }}
              >
                <p className="font-display text-lg sm:text-2xl font-semibold leading-tight" style={{ color: "#5eead4" }}>
                  {s.value}
                </p>
                <p className="mt-0.5 text-[10px] sm:text-sm leading-tight" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="relative w-full overflow-hidden leading-none" style={{ height: 36 }}>
        <svg viewBox="0 0 1440 36" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
          <path d="M0,0 C360,36 1080,36 1440,0 L1440,36 L0,36 Z" fill="var(--background)" />
        </svg>
      </div>
    </section>
  )
}
