import { Search, Layers, UserCheck, BarChart2, Zap, Clock } from "lucide-react"

const reasons = [
  {
    icon: Search,
    title: "Trovo la causa — non nascondo il sintomo",
    desc: "Parto sempre da una valutazione clinica approfondita per capire perché hai dolore. Solo dopo scelgo come trattare.",
  },
  {
    icon: Layers,
    title: "Fisioterapia e osteopatia in un solo professionista",
    desc: "Laurea in fisioterapia + Master universitario in osteopatia (EOM – Univ. Verona) + D.O. in completamento. Due approcci integrati — un solo percorso.",
  },
  {
    icon: UserCheck,
    title: "Sei l'unico paziente in trattamento",
    desc: "Nessun altro paziente sotto gli ultrasuoni mentre ti tratto. Ogni seduta è interamente tua: ascolto, valutazione, trattamento.",
  },
  {
    icon: BarChart2,
    title: "Progressi reali e misurabili",
    desc: "Rivaluto a ogni seduta con test oggettivi. Se la strategia non funziona, cambiamo. Il mio obiettivo non è tenerti in terapia all'infinito.",
  },
  {
    icon: Zap,
    title: "Tecnologia laser Nd:YAG Zaira",
    desc: "Il laser Nd:YAG di Garda Laser penetra fino a 5–6 cm. Non il laser di un centro estetico — un dispositivo medicale certificato CE.",
  },
  {
    icon: Clock,
    title: "Risposta rapida, puntualità garantita",
    desc: "Rispondo su WhatsApp entro poche ore. Gli appuntamenti iniziano in orario. Rispetto il tuo tempo.",
  },
]

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header — full width on mobile */}
        <div className="mb-10 sm:mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Perché scegliermi
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight max-w-lg">
            Non tutti i fisioterapisti lavorano allo stesso modo
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl text-sm sm:text-base">
            Ho scelto di costruire uno studio diverso da quelli che ho visto durante la mia formazione.
          </p>
        </div>

        {/* Grid: 1 col mobile → 2 col sm → 3 col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="group flex gap-4 p-5 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-sm transition-all"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mt-0.5">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1.5 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10 p-5 bg-muted/40 rounded-2xl border-l-4 border-primary max-w-2xl">
          <p className="text-sm text-muted-foreground italic leading-relaxed">
            "Il mio studio non è grande. È fatto così apposta: per poter essere
            completamente presente con ogni paziente."
          </p>
          <p className="mt-2 text-xs font-semibold text-primary">— Marco T.</p>
        </div>

      </div>
    </section>
  )
}
