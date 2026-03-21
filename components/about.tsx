import Image from "next/image"
import { GraduationCap, Award, BookOpen, Stethoscope, Clock } from "lucide-react"

const credentials = [
  {
    icon: GraduationCap,
    title: "Laurea in Fisioterapia",
    detail: "IRCCS Neuromed di Pozzilli — Sapienza Università di Roma",
    note: "Abilitazione professionale",
    status: "done",
  },
  {
    icon: Award,
    title: "Master Universitario in Osteopatia",
    detail: "Disfunzioni Neuro-Muscolo-Scheletriche — EOM Italia / Università di Verona",
    note: "Primo biennio del percorso EOM",
    status: "done",
  },
  {
    icon: Stethoscope,
    title: "Diploma in Osteopatia (D.O.) — EOM Madrid",
    detail: "Escuela Osteopática de Madrid — percorso quinquennale da 174 ECTS",
    note: "In completamento",
    status: "progress",
  },
  {
    icon: BookOpen,
    title: "Formazione specialistica",
    detail: "Bendaggio (Dott. L. Stella), Fibrolisi diacutanea, Cicatrici, Taping, La Spalla (Dott. F. Inglese)",
    note: "Attestati ECM conseguiti",
    status: "done",
  },
  {
    icon: Stethoscope,
    title: "Iscritto Albo TSRM-PSTRP",
    detail: "Professionista sanitario regolarmente abilitato all'esercizio della professione in Italia",
    note: "Obbligo di legge",
    status: "done",
  },
]

export function About() {
  return (
    <section id="chi-sono" className="py-16 sm:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── Left: photo + credentials ── */}
          <div className="lg:col-span-2">
            {/* Photo */}
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/img-2314.jpeg"
                  alt="Marco Turchetta — Fisioterapista e Osteopata a Pontecorvo"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-2xl bg-primary/8 -z-10" />
            </div>

            {/* Credentials */}
            <div className="mt-8 space-y-2.5">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-4">
                Formazione e titoli
              </p>
              {credentials.map((c, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 p-3.5 rounded-xl border ${
                    c.status === "progress"
                      ? "bg-amber-50/60 border-amber-200"
                      : "bg-background border-border"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      c.status === "progress" ? "bg-amber-100" : "bg-primary/10"
                    }`}
                  >
                    <c.icon className={`h-4 w-4 ${c.status === "progress" ? "text-amber-600" : "text-primary"}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-foreground text-xs leading-snug">{c.title}</p>
                      {c.status === "progress" && (
                        <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-500/15 text-amber-600 flex-shrink-0">
                          <span className="w-1 h-1 rounded-full bg-amber-500 animate-pulse" />
                          In corso
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">{c.detail}</p>
                    <p
                      className="text-[9px] font-semibold mt-1 uppercase tracking-wide"
                      style={{ color: c.status === "progress" ? "#d97706" : "oklch(0.46 0.13 175)" }}
                    >
                      {c.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: bio ── */}
          <div className="lg:col-span-3">
            <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Chi sono</p>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight">
              Ciao, sono Marco Turchetta.
              <br />
              <span className="text-primary">Fisioterapista e osteopata</span> a Pontecorvo.
            </h2>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Ho scelto questa professione molto prima di laurearmi. Lo sport, il movimento,
                la curiosità per il corpo umano mi hanno portato alla Sapienza di Roma —
                e da lì a non smettere mai di formarmi.
              </p>

              <p>
                Dopo la laurea ho iniziato il percorso in osteopatia con{" "}
                <span className="text-foreground font-medium">EOM — Escuela Osteopática de Madrid</span>,
                una delle scuole di osteopatia più autorevoli al mondo: fondata nel 1989, oltre 75 sedi
                internazionali, più di 15.000 diplomati. Un percorso quinquennale da 174 ECTS — riservato
                esclusivamente a fisioterapisti e medici — che affronta osteopatia strutturale,
                viscerale e craniale. Sto completando il{" "}
                <span className="text-foreground font-medium">Diploma in Osteopatia (D.O.)</span>.
              </p>

              <p>
                Parallelamente ho costruito competenze tecniche specifiche: bendaggio funzionale
                con il Dott.{" "}
                <span className="text-foreground font-medium">Loris Stella</span> (autore dei testi
                universitari italiani, docente a Bologna e Ferrara), specializzazione sulla spalla
                con il Dott.{" "}
                <span className="text-foreground font-medium">Francesco Inglese</span>{" "}
                (fisioterapista, osteopata, membro della SICSeG, docente universitario a Bologna e Pisa,
                autore del libro &quot;La spalla. Riabilitazione ortopedica&quot;), fibrolisi
                diacutanea, taping neuromuscolare.
              </p>

              <p>
                Ho aperto il mio studio a Pontecorvo perché voglio dedicare a ogni paziente
                il tempo che merita.{" "}
                <span className="text-foreground font-medium">
                  Non ho fretta. Non ho turni. Ho il paziente davanti a me.
                </span>
              </p>
            </div>

            {/* EOM box */}
            <div className="mt-8 p-4 sm:p-5 bg-background rounded-2xl border border-border">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <p className="font-semibold text-foreground text-sm">Percorso D.O. — EOM Madrid</p>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600">
                      In completamento
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Dopo il Master Universitario (Univ. Verona), sto completando i 3 anni successivi
                    con EOM Internazionale — osteopatia viscerale, craniale e pediatrica.
                    Il D.O. è il titolo più completo nel panorama osteopatico europeo.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-8 relative pl-5 border-l-[3px] border-primary">
              <p className="text-foreground text-base sm:text-lg italic leading-relaxed font-display">
                &quot;Il dolore cronico ti cambia. Il mio obiettivo non è solo
                toglierti il dolore — è restituirti la libertà di vivere come vuoi.&quot;
              </p>
              <p className="mt-2 text-sm font-semibold text-primary">
                — Marco Turchetta
              </p>
            </div>

            {/* Mini CTA */}
            <div className="mt-8 p-4 sm:p-5 bg-primary/5 rounded-2xl border border-primary/20 flex flex-col sm:flex-row sm:items-center gap-4">
              <div>
                <p className="font-semibold text-foreground text-sm">Vuoi sapere se posso aiutarti?</p>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  Scrivimi senza impegno — rispondo entro poche ore.
                </p>
              </div>
              <a
                href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20una%20domanda."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
              >
                Scrivimi su WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
