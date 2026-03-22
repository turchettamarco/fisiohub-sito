import Link from "next/link"
import { MessageSquare, Search, Lightbulb, FileText, CalendarCheck, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Ti ascolto — senza fretta",
    desc: "Racconto la tua storia clinica, quando è iniziato il dolore, cosa lo peggiora, cosa hai già provato. Non mi fermo al problema attuale.",
  },
  {
    icon: Search,
    title: "Valutazione clinica obiettiva",
    desc: "Test di mobilità, test ortopedici e neurologici specifici per la tua condizione. Non mi fermo dove fa male: cerco la causa.",
  },
  {
    icon: Lightbulb,
    title: "Ti spiego cosa ho trovato",
    desc: "Capire cosa sta succedendo al tuo corpo non è solo rassicurante — accelera la guarigione. I pazienti informati guariscono più in fretta.",
  },
  {
    icon: FileText,
    title: "Proposta di trattamento",
    desc: "Ti propongo il piano: tecniche, numero di sedute, frequenza. Tutto trasparente. Decidi tu se procedere.",
  },
  {
    icon: CalendarCheck,
    title: "Primo trattamento (se sei d'accordo)",
    desc: "Se utile, iniziamo già nella prima seduta. In molti casi i pazienti escono con meno dolore di quando sono entrati.",
  },
]

export function FirstVisit() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Prima visita</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
            Cosa succede durante la prima seduta?
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Nessuna sorpresa, nessun obbligo, nessun disagio.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-14 items-start">

          {/* Left: info cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <div className="p-5 bg-card rounded-2xl border border-primary/20 bg-primary/5">
              <p className="font-semibold text-foreground text-sm mb-1">⏱ Durata totale</p>
              <p className="text-2xl font-display font-semibold text-primary">circa 60 minuti</p>
            </div>

            <div className="p-5 bg-card rounded-2xl border border-border">
              <p className="font-semibold text-foreground text-sm mb-3">Cosa portare</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary flex-shrink-0">→</span>Referti medici, RMN, TAC, radiografie</li>
                <li className="flex gap-2"><span className="text-primary flex-shrink-0">→</span>Lista di farmaci che stai assumendo</li>
                <li className="flex gap-2"><span className="text-primary flex-shrink-0">→</span>Abbigliamento comodo (shorts o tuta)</li>
                <li className="flex gap-2"><span className="text-primary flex-shrink-0">→</span>Le tue domande</li>
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/prenota"
                className="inline-flex items-center gap-2 font-semibold text-primary hover:underline text-sm"
              >
                Prenota la prima valutazione
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: steps */}
          <div className="space-y-3">
            {steps.map((s, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 sm:p-5 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
              >
                <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mt-0.5">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
