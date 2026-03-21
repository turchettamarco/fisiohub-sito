"use client"

import {
  Activity,
  PersonStanding,
  Dumbbell,
  HeartPulse,
  Bone,
  Scissors,
  Bandage,
  Layers,
  Zap,
  Magnet,
  Radio,
  Volume2,
  ArrowRight,
  Check,
} from "lucide-react"
import Link from "next/link"

// ─── Terapia manuale ─────────────────────────────────────────
const manualCards = [
  {
    icon: Activity,
    title: "Osteopatia",
    tag: "Approccio globale",
    desc: "Tecnica manuale per riequilibrare il corpo nella sua interezza. Agisce su muscoli, fasce, articolazioni e visceri per rimuovere la causa del dolore, non solo il sintomo.",
  },
  {
    icon: PersonStanding,
    title: "Rieducazione Posturale Mézières",
    tag: "Catene muscolari",
    desc: "Lavora sulle catene muscolari posteriori che causano dolori cronici a schiena, collo e articolazioni. Ideale per chi ha provato tutto senza risultati duraturi.",
  },
  {
    icon: HeartPulse,
    title: "Riabilitazione Ortopedica e Neurologica",
    tag: "Post-trauma e chirurgia",
    desc: "Recupero completo dopo fratture, distorsioni, interventi chirurgici. Dalla gestione del dolore iniziale al ritorno pieno alla funzione.",
  },
  {
    icon: Dumbbell,
    title: "Esercizio Terapeutico",
    tag: "Autonomia e prevenzione",
    desc: "Esercizi calibrati sulla tua condizione per consolidare i risultati, rinforzare le aree vulnerabili e prevenire le recidive. L'obiettivo è la tua autonomia.",
  },
  {
    icon: Bone,
    title: "Fibrolisi Diacutanea",
    tag: "Attestato specifico",
    desc: "Tecnica con ganci per sciogliere aderenze fibrose e retrazioni cicatriziali nei tessuti molli. Efficace nelle tendinopatie croniche e nei dolori resistenti.",
  },
  {
    icon: Scissors,
    title: "Trattamento Cicatrici",
    tag: "Attestato specifico",
    desc: "Cicatrici chirurgiche o traumatiche possono creare tensioni fasciali lontane dalla sede. Tecnica manuale per ripristinare la mobilità e ridurre il dolore riferito.",
  },
  {
    icon: HeartPulse,
    title: "La Spalla: Valutazione e Riabilitazione",
    tag: "Specializzazione spalla",
    desc: "Formazione avanzata con il Dott. Francesco Inglese — fisioterapista, osteopata, membro della SICSeG (Società Italiana di Chirurgia Spalla e Gomito), docente universitario a Bologna e Pisa, autore del libro di riferimento \"La spalla. Riabilitazione ortopedica\". Valuto e tratto instabilità, cuffia dei rotatori, capsulite adesiva, discinesie scapolari e patologie post-chirurgiche.",
    highlight: true,
  },
]

// ─── Bendaggio & taping ──────────────────────────────────────
const tapingCards = [
  {
    icon: Bandage,
    title: "Bendaggio Funzionale Adesivo",
    tag: "Dott. Loris Stella",
    desc: "Tecnica adesiva per stabilizzare articolazioni, ridurre il carico e proteggere dalla recidiva. Formazione con il Dott. Loris Stella — autore dei testi italiani di riferimento (Edi.Ermes), docente all'Università di Bologna e Ferrara.",
    tags: ["Caviglia", "Ginocchio", "Spalla", "Colonna"],
  },
  {
    icon: Layers,
    title: "Taping Neuromuscolare",
    tag: "Kinesio tape",
    desc: "Il nastro elastico colorato che vedi sugli atleti non è estetico — è terapeutico. Agisce su sistema nervoso, circolazione linfatica e tessuto connettivo per ridurre dolore ed edema.",
    tags: ["Edema", "Dolore muscolare", "Supporto articolare", "Drenaggio linfatico"],
  },
]

// ─── Terapia strumentale ─────────────────────────────────────
const instrumentalCards = [
  {
    icon: Zap,
    title: "Tecarterapia — Globus Diacare 5000",
    tag: "Diatermia",
    bullets: [
      "Modalità Capacitiva (tessuti molli) + Resistiva (tendini, cartilagine)",
      "Frequenze 400–1000 kHz · 200W · raggiunge strutture profonde",
      "Modalità Atermia: biostimolazione senza calore — ideale in fase acuta",
      "Risultati spesso già dalla prima seduta",
    ],
    indications: ["Artrosi", "Tendinopatie", "Lombalgia", "Ernie", "Post-chirurgico", "Contratture"],
  },
  {
    icon: Radio,
    title: "TENS — Globus",
    tag: "Elettroterapia antalgica",
    bullets: [
      "Blocca il segnale doloroso a livello midollare (Gate Control Theory)",
      "Stimola la produzione endogena di endorfine",
      "Indicata per dolore cronico, nevralgie, dolore post-chirurgico",
      "Non invasiva, indolore, senza effetti collaterali",
    ],
    indications: ["Dolore cronico", "Nevralgie", "Artralgie", "Post-operatorio", "Cervicalgia", "Lombalgia"],
  },
  {
    icon: Volume2,
    title: "Ultrasuoni Terapeutici",
    tag: "Terapia fisica",
    bullets: [
      "Modalità continua: effetto termico antinfiammatorio in profondità",
      "Modalità pulsata: biostimolazione senza calore (lesioni acute)",
      "Agisce su tendini e capsule articolari irraggiungibili con altri mezzi",
    ],
    indications: ["Calcificazioni", "Tendiniti", "Fibrosi", "Borsite", "Tunnel carpale", "Cicatrici"],
  },
  {
    icon: Magnet,
    title: "Magnetoterapia — Noleggio Domiciliare",
    tag: "A casa tua",
    bullets: [
      "Campi magnetici a bassa frequenza per cicli prolungati a domicilio",
      "Effetti anti-infiammatori, analgesici e rigenerativi documentati",
      "Fornisco il dispositivo con istruzioni personalizzate",
    ],
    indications: ["Artrosi", "Fratture", "Tendinopatie", "Osteoporosi", "Post-chirurgico", "Edemi"],
  },
]

export function Services() {
  return (
    <section id="servizi" className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">

        {/* ── Header ── */}
        <div className="text-center max-w-xl mx-auto">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Trattamenti
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
            Cosa faccio nel mio studio
          </h2>
          <p className="mt-3 text-muted-foreground">
            Ogni tecnica viene scelta dopo la valutazione — non applicata a tutti.
          </p>
        </div>

        {/* ── TERAPIA MANUALE ── */}
        <Block label="Terapia manuale e riabilitazione">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {manualCards.map((c) => (
              <div
                key={c.title}
                className={`group p-5 sm:p-6 rounded-2xl border transition-all hover:shadow-md ${
                  c.highlight
                    ? "bg-primary/5 border-primary/30 hover:border-primary/50"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base leading-snug">
                    {c.title}
                  </h3>
                  {c.highlight && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary">
                      Specializzazione
                    </span>
                  )}
                </div>
                <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary/70 mb-2">
                  {c.tag}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </Block>

        {/* ── BENDAGGIO & TAPING ── */}
        <Block label="Bendaggio funzionale e taping">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tapingCards.map((c) => (
              <div
                key={c.title}
                className="group p-5 sm:p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/70">
                      {c.tag}
                    </span>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base leading-snug mt-0.5">
                      {c.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{c.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/8 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* ── TERAPIA STRUMENTALE ── */}
        <Block label="Terapia strumentale">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {instrumentalCards.map((c) => (
              <div
                key={c.title}
                className="group p-5 sm:p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary/70">
                      {c.tag}
                    </span>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base leading-snug mt-0.5">
                      {c.title}
                    </h3>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 mb-5">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Indication pills */}
                <div className="flex flex-wrap gap-1.5">
                  {c.indications.map((ind) => (
                    <span
                      key={ind}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Block>

        {/* ── ONDE D'URTO coming soon ── */}
        <div className="rounded-2xl border border-dashed border-amber-400/40 bg-amber-50/30 p-6 sm:p-8">
          <div className="flex items-start gap-4 mb-5">
            <div className="text-4xl">💥</div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground">
                  Onde d'Urto Extracorporee
                </h3>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 text-amber-600 border border-amber-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                  In arrivo
                </span>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Sto completando la dotazione dello studio con un apparecchio ESWT. Le onde d'urto
                sono la tecnica con il più alto livello di evidenza scientifica per le tendinopatie
                croniche resistenti ad altri trattamenti — calcificazioni di spalla, fascite plantare,
                epicondilite, tendinopatia achillea.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20sono%20interessato%20alle%20onde%20d'urto."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-700 hover:underline"
          >
            Scrivimi per sapere quando sarà disponibile
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        {/* ── CTA ── */}
        <div className="text-center pt-4">
          <p className="text-muted-foreground mb-5">
            Non sai quale trattamento fa per te?
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            Prenota una valutazione
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}

// ─── Helper ──────────────────────────────────────────────────
function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-4 mb-7">
        <div className="h-px flex-1 bg-border" />
        <span className="inline-flex items-center text-sm font-semibold text-foreground px-4 py-1.5 rounded-full bg-card border border-border whitespace-nowrap shadow-sm">
          {label}
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>
      {children}
    </div>
  )
}
