import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

const effects = [
  { emoji: "⚗️", title: "Fotochimico", desc: "Attiva i mitocondri, aumenta l'ATP cellulare. Accelera riparazione e rigenerazione dei tessuti." },
  { emoji: "🌡️", title: "Fototermico", desc: "Stimola la microcircolazione, rimuove i mediatori dell'infiammazione. Effetto antalgico dalla prima seduta." },
  { emoji: "💫", title: "Fotomeccanico", desc: "Micro-onde di pressione che drenano edemi, ematomi e liquidi in eccesso in profondità." },
]

const indications = [
  "Tendiniti e tendinopatie", "Calcificazioni tendinee", "Epicondilite",
  "Fascite plantare", "Borsiti e sinoviti", "Lombalgia e cervicalgia",
  "Sciatalgia e nevralgie", "Artrosi e condropatie", "Capsulite adesiva",
  "Edemi post-traumatici", "Cicatrici e fibrosi", "Recupero post-chirurgico",
]

export function Laser() {
  return (
    <section id="laser" className="py-16 sm:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Il fiore all'occhiello del mio studio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
            Laser Nd:YAG Zaira
          </h2>
          <p className="mt-3 text-muted-foreground">
            Dispositivo medicale Made in Italy di Garda Laser. Non il laser di un centro estetico — tecnologia clinica ad alta potenza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-12">

          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/5 to-primary/12 border border-primary/15">
              <Image
                src="/images/zaira-laser.jpg"
                alt="Laser Nd:YAG Zaira — Garda Laser"
                fill
                className="object-contain p-10"
                priority
              />
            </div>
            <span className="absolute -top-3 -right-3 text-xs font-bold px-3 py-1.5 rounded-full bg-primary text-primary-foreground shadow">
              Made in Italy
            </span>
            <span className="absolute -bottom-3 -left-3 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-card border border-border shadow">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Dispositivo medicale CE
            </span>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { v: "1064 nm", l: "Lunghezza d'onda" },
                { v: "5–6 cm", l: "Profondità" },
                { v: "30 W", l: "Potenza di picco" },
              ].map((s) => (
                <div key={s.l} className="text-center p-4 bg-background rounded-xl border border-border">
                  <p className="font-display text-xl font-semibold text-primary leading-none">{s.v}</p>
                  <p className="text-[11px] text-muted-foreground mt-1.5 leading-tight">{s.l}</p>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                La lunghezza d&apos;onda di <strong className="text-foreground">1064 nm</strong> penetra i tessuti
                fino a <strong className="text-foreground">5–6 cm</strong> — tendini, capsule articolari e
                muscoli profondi che altri laser non raggiungono.
              </p>
              <p>
                Lavora in <strong className="text-foreground">modalità continua</strong> (antinfiammatoria)
                e <strong className="text-foreground">pulsata</strong> (antidolorifica mirata).
                Scelgo la modalità in base alla tua patologia e alla fase del trattamento.
              </p>
            </div>

            <Link href="/prenota" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              Prenota una seduta <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {effects.map((e) => (
            <div key={e.title} className="p-5 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all">
              <div className="text-2xl mb-3">{e.emoji}</div>
              <h3 className="font-semibold text-sm text-foreground mb-1">Effetto {e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-2xl border border-border p-6">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-5">
            Indicazioni principali
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-2.5 gap-x-6">
            {indications.map((ind) => (
              <div key={ind} className="flex items-center gap-2.5">
                <Check className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{ind}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-5 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Dubbi se il laser può aiutarti? Scrivimi.
            </p>
            <a
              href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20vorrei%20informazioni%20sulla%20laserterapia."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              Chiedimi informazioni <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
