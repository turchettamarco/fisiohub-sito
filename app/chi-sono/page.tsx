import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, GraduationCap, Award, BookOpen } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Chi Sono | Marco Turchetta Fisioterapista e Osteopata — Pontecorvo (FR)',
  description: 'Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR). Laurea Sapienza Roma, Master Osteopatia EOM-Verona, D.O. Madrid. Specializzazioni spalla e bendaggio funzionale.',
  keywords: ['Marco Turchetta fisioterapista', 'Marco Turchetta osteopata', 'fisioterapista Pontecorvo chi sono', 'Marco Turchetta Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/chi-sono' },
}

const formazione = [
  { icon: GraduationCap, title: 'Laurea in Fisioterapia', desc: 'Università La Sapienza di Roma — IRCCS Neuromed. Formazione clinica in fisioterapia muscoloscheletrica, neurologica e cardiorespiratoria.' },
  { icon: GraduationCap, title: 'Master in Osteopatia', desc: 'EOM – European Osteopathic Academy, in convenzione con l\'Università degli Studi di Verona. Percorso universitario in osteopatia strutturale, viscerale e cranio-sacrale.' },
  { icon: Award, title: 'Diploma in Osteopatia D.O. — in completamento', desc: 'Escuela Osteopática de Madrid (EOM), fondata nel 1989, oltre 75 sedi internazionali. Percorso quinquennale da 174 ECTS, riservato a fisioterapisti e medici.' },
]

const specializzazioni = [
  { title: '"La Spalla" — Dott. Francesco Inglese', desc: 'Corso avanzato di riabilitazione della spalla con il Dott. Francesco Inglese — membro SICSeG, docente universitario a Bologna e Pisa, autore di "La spalla. Riabilitazione ortopedica" (Edi.Ermes).' },
  { title: 'Bendaggio Funzionale — Dott. Loris Stella', desc: 'Formazione avanzata in bendaggio funzionale e taping neuromuscolare con il Dott. Loris Stella — autore Edi.Ermes, docente universitario a Bologna e Ferrara.' },
  { title: 'Fibrolisi Diacutanea', desc: 'Tecnica strumentale per il trattamento delle aderenze fasciali e cicatriziali profonde.' },
  { title: 'Trattamento delle Cicatrici', desc: 'Protocolli per la mobilizzazione del tessuto cicatriziale superficiale e profondo, con approccio manuale e strumentale.' },
]

export default function ChiSono() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Chi Sono · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Marco Turchetta — Fisioterapista e Osteopata</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Sono Marco Turchetta, fisioterapista e osteopata. Il mio studio si trova a Pontecorvo (FR), in Via Galileo Galilei 5, presso gli Studi Galileo. Lavoro ogni giorno con pazienti che hanno dolori muscoloscheletrici con un approccio che parte dall'ascolto e si basa sulla clinica.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una visita <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">Formazione</h2>
            <div className="space-y-4">
              {formazione.map(f => (
                <div key={f.title} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">Specializzazioni ECM</h2>
            <div className="space-y-4">
              {specializzazioni.map(s => (
                <div key={s.title} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il mio approccio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Non credo nei protocolli standard applicati meccanicamente. Ogni paziente ha una storia diversa — e il percorso di trattamento deve riflettere questa unicità. La prima seduta serve a capire non solo dove fa male, ma perché. La causa, non il sintomo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Combino fisioterapia — orientata alla funzione, al movimento, all'esercizio — con osteopatia — orientata alla mobilità globale del corpo, alle connessioni tra strutture distanti. Le due discipline si completano, e un professionista che le padroneggia entrambe offre al paziente un percorso più integrato ed efficace.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sono iscritto all'Albo dei Fisioterapisti TSRM-PSTRP e lavoro esclusivamente su appuntamento — per garantire il tempo e l'attenzione che ogni paziente merita.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Lo studio</h2>
            <p className="text-muted-foreground leading-relaxed">
              Via Galileo Galilei 5, Pontecorvo (FR) — presso gli Studi Galileo. Raggiungibile da Cassino, Ceprano, Arce, Aquino, San Giorgio a Liri, Sant'Elia Fiumerapido e Frosinone. Parcheggio libero nelle vicinanze.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Vuoi prenotare una visita?</h2>
          <p className="text-muted-foreground mb-6">La prima seduta dura 60 minuti. Ascolto, valutazione e proposta di trattamento — senza impegno.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
