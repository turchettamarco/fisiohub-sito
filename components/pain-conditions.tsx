import Link from "next/link"
import { ArrowRight } from "lucide-react"

const conditions = [
  {
    emoji: "🔙",
    title: "Mal di schiena e lombalgia",
    description:
      "Il dolore lombare è la prima causa di disabilità nel mondo. Può essere acuto (da uno sforzo improvviso) o cronico (anni di tensioni accumulate). In entrambi i casi, la causa può essere trovata e trattata.",
    keywords: ["ernia del disco", "colpo della strega", "lombalgia cronica", "sciatica"],
  },
  {
    emoji: "🦴",
    title: "Cervicale e dolore al collo",
    description:
      "Rigidità mattutina, dolore che sale alla testa, formicolio alle braccia. La cervicalgia moderna è spesso alimentata da posture prolungate allo schermo e tensioni fasciali — non è una condanna permanente.",
    keywords: ["cervicalgia", "cefalea tensiva", "ernia cervicale", "torcicollo"],
  },
  {
    emoji: "💫",
    title: "Sciatalgia",
    description:
      "Il dolore che parte dalla schiena e scende lungo la gamba può essere debilitante. Non tutte le sciatiche vengono dall'ernia: il piriforme, le faccette articolari, la muscolatura profonda possono essere responsabili.",
    keywords: ["nervo sciatico", "cruralgia", "dolore all'anca", "formicolio alla gamba"],
  },
  {
    emoji: "💪",
    title: "Spalla: dolore e blocco",
    description:
      "Spalla congelata, lesione della cuffia dei rotatori, tendinite del sovraspinato, impingement: ogni condizione richiede un approccio diverso. Tratto sia la fase acuta che il recupero funzionale completo.",
    keywords: ["capsulite adesiva", "cuffia dei rotatori", "calcificazione", "impingement"],
  },
  {
    emoji: "🦵",
    title: "Ginocchio: infortuni e recupero",
    description:
      "Dal dolore anteriore (sindrome femoro-rotulea) alla riabilitazione post-chirurgica (LCA, menisco, protesi), il ginocchio richiede un lavoro progressivo e misurato per tornare a funzionare bene.",
    keywords: ["LCA", "menisco", "protesi ginocchio", "sindrome femoro-rotulea"],
  },
  {
    emoji: "🏃",
    title: "Infortuni sportivi",
    description:
      "Distorsioni, lesioni muscolari, tendinopatie, fratture da stress. Lavoro con sportivi di ogni livello per tornare all'attività nel minor tempo possibile, con la struttura rafforzata per evitare recidive.",
    keywords: ["distorsione caviglia", "stiramento", "tendinite achillea", "fascite plantare"],
  },
  {
    emoji: "🔧",
    title: "Riabilitazione post-operatoria",
    description:
      "Dopo un intervento chirurgico ogni settimana conta. Un percorso riabilitativo strutturato accelera i tempi, previene le complicanze (fibrosi, atrofia muscolare) e massimizza il risultato dell'operazione.",
    keywords: ["protesi anca", "protesi ginocchio", "riabilitazione spalla", "post-artroscopia"],
  },
  {
    emoji: "🧘",
    title: "Postura e dolori cronici",
    description:
      "Dolori che migrano, che non hanno una causa chiara su RMN o TAC, che cambiano con lo stress. Spesso sono il segnale di squilibri posturali globali che il metodo Mézières e l'osteopatia affrontano in profondità.",
    keywords: ["scoliosi", "iperlordosi", "cifosi", "dolore cronico"],
  },
]

export function PainConditions() {
  return (
    <section className="py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Condizioni trattate
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
            Qual è il tuo problema?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Prima di scegliere un fisioterapista, devi sapere se tratta
            davvero la tua condizione. Ecco cosa affronto ogni giorno nel mio studio.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {conditions.map((cond) => (
            <div
              key={cond.title}
              className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all duration-200"
            >
              {/* Emoji icon */}
              <div className="text-3xl mb-4">{cond.emoji}</div>

              <h3 className="font-semibold text-foreground mb-2 leading-snug">
                {cond.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {cond.description}
              </p>

              {/* Keyword tags */}
              <div className="flex flex-wrap gap-1.5">
                {cond.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/8 text-primary"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-muted-foreground mb-5">
            Non trovi il tuo problema? Quasi sicuramente posso aiutarti lo stesso.
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
          >
            Contattami per parlarne
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
