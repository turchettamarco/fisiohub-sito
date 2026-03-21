"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Dopo mesi di dolore alla schiena, ho finalmente trovato qualcuno che ha capito il problema. Marco ha fatto una valutazione molto più approfondita degli altri fisioterapisti che avevo già visto. In sei settimane il dolore era quasi scomparso — e per la prima volta qualcuno mi ha spiegato davvero cosa stava succedendo.",
    author: "R.M.", detail: "Sciatalgia da ernia L4-L5", initial: "R", condition: "Lombare",
  },
  {
    quote: "Dopo l'operazione al menisco ero convinta di non tornare più a correre. Marco mi ha seguita passo dopo passo, con molta attenzione all'esercizio progressivo. Dopo quattro mesi sono tornata ad allenarmi. Professionalità e pazienza fuori dal comune.",
    author: "F.D.", detail: "Riabilitazione post-meniscectomia", initial: "F", condition: "Ginocchio",
  },
  {
    quote: "Cervicale cronica da anni, mal di testa ogni mattina. In tre settimane con osteopatia, laser e esercizi ho ottenuto più risultati che in anni di massaggi. Mi ha anche insegnato cosa fare a casa per non ricadere.",
    author: "G.B.", detail: "Cervicale cronica e cefalea tensiva", initial: "G", condition: "Cervicale",
  },
  {
    quote: "Calcificazione al sovraspinato, l'ortopedico mi aveva già proposto l'intervento. Con Marco abbiamo usato laser Nd:YAG e lavoro manuale. Dopo 12 sedute il dolore era quasi zero e all'ecografia di controllo la calcificazione si era ridotta. Ho evitato l'operazione.",
    author: "L.F.", detail: "Calcificazione sovraspinato", initial: "L", condition: "Spalla",
  },
  {
    quote: "Fascite plantare recidivante da due anni. Con Marco abbiamo lavorato non solo sul piede ma su tutta la catena posteriore. Per la prima volta il trattamento ha risolto il problema alla radice. Sono tornato a correre dopo 6 settimane.",
    author: "M.B.", detail: "Fascite plantare cronica", initial: "M", condition: "Sportivo",
  },
]

export function Testimonials() {
  return (
    <section
      className="py-16 sm:py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b2d2a 0%, #0f3d37 60%, #0d3530 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10 sm:mb-14">
          <p className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: "#5eead4" }}>
            Testimonianze
          </p>
          <h2
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight"
            style={{ color: "white" }}
          >
            Cosa dicono i pazienti
          </h2>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Storie reali, patologie precise, risultati misurabili
          </p>
        </div>

        {/* Mobile: 1 col · sm: 2 col · lg: 3 col first row + 2 centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 lg:max-w-2xl lg:mx-auto">
          {testimonials.slice(3).map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "rgba(255,255,255,0.28)" }}>
          * Iniziali e dettaglio clinico pubblicati con consenso. Dati anagrafici anonimizzati (GDPR).
        </p>
      </div>
    </section>
  )
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="p-5 sm:p-6 rounded-2xl flex flex-col"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      <span
        className="self-start text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4"
        style={{ background: "rgba(94,234,212,0.15)", color: "#5eead4" }}
      >
        {t.condition}
      </span>

      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" style={{ color: "#5eead4" }} />
        ))}
      </div>

      <blockquote className="flex-1 text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.78)" }}>
        &ldquo;{t.quote}&rdquo;
      </blockquote>

      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{ background: "rgba(94,234,212,0.18)", color: "#5eead4" }}
        >
          {t.initial}
        </div>
        <div>
          <p className="font-semibold text-xs sm:text-sm" style={{ color: "white" }}>{t.author}</p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.38)" }}>{t.detail}</p>
        </div>
      </div>
    </div>
  )
}
