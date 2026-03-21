import { ClipboardList, Target, BookOpen, Repeat, TrendingUp } from "lucide-react"

const steps = [
  {
    num: "01", icon: ClipboardList,
    title: "Valutazione clinica",
    desc: "Ascolto la tua storia clinica ed eseguo test ortopedici e neurologici specifici per individuare la causa reale del dolore — non solo dove fa male.",
  },
  {
    num: "02", icon: Target,
    title: "Piano di trattamento",
    desc: "Costruisco un piano personalizzato: quali tecniche, quante sedute, con quale frequenza. Tutto trasparente, senza sorprese.",
  },
  {
    num: "03", icon: BookOpen,
    title: "Trattamento e spiegazione",
    desc: "Tratto il problema e ti spiego cosa sta succedendo al tuo corpo. Capire il proprio dolore accelera la guarigione.",
  },
  {
    num: "04", icon: Repeat,
    title: "Esercizi a casa",
    desc: "Ti insegno esercizi specifici per consolidare i risultati e prevenire le ricadute. L'obiettivo è la tua autonomia.",
  },
  {
    num: "05", icon: TrendingUp,
    title: "Monitoraggio e aggiustamenti",
    desc: "Valuto i progressi a ogni seduta e adatto il percorso. Quando raggiungiamo l'obiettivo, ti indico come mantenere i risultati.",
  },
]

export function Process() {
  return (
    <section id="metodo" className="py-16 sm:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Il mio metodo</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
            Come si svolge un percorso con me
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base">
            Sai sempre cosa facciamo, perché lo facciamo e cosa aspettarti alla prossima seduta.
          </p>
        </div>

        {/* Desktop: horizontal row */}
        <div className="hidden md:grid md:grid-cols-5 gap-6">
          {steps.map((s, i) => (
            <div key={s.num} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 w-full h-px bg-border z-0" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-sm">
                    <s.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <span className="text-[8px] font-bold text-primary">{s.num}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-foreground text-sm mb-1.5">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-sm z-10">
                  <s.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-1 mb-1" style={{ minHeight: 32 }} />
                )}
              </div>
              <div className="pb-7 pt-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-primary">{s.num}</span>
                  <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
