import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Riabilitazione Neurologica a Pontecorvo | Ictus, Parkinson — Marco Turchetta',
  description: 'Riabilitazione neurologica a Pontecorvo (FR). Fisioterapia per ictus, Parkinson, sclerosi multipla, neuropatia periferica. Marco Turchetta fisioterapista. Prenota.',
  keywords: ['riabilitazione neurologica Pontecorvo', 'ictus riabilitazione Pontecorvo', 'Parkinson fisioterapia Pontecorvo', 'sclerosi multipla fisioterapia Pontecorvo', 'neuropatia periferica Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/riabilitazione-neurologica-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Riabilitazione Neurologica · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Riabilitazione Neurologica a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">La riabilitazione neurologica si occupa del recupero funzionale nelle persone con patologie del sistema nervoso centrale e periferico. Nel mio studio a Pontecorvo seguo pazienti con esiti di ictus, Parkinson, sclerosi multipla e neuropatie periferiche con un approccio orientato al recupero dell'autonomia e della qualità di vita.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Condizioni neurologiche che tratto</h2>
            <div className="space-y-3">
              {[
                { t: 'Esiti di ictus (stroke)', d: 'L\'ictus può causare emiplegia, spasticità, difficoltà nel cammino e nella coordinazione. La riabilitazione precoce e continua è fondamentale per massimizzare il recupero neurologico. Lavoro sul controllo del tono muscolare, sul cammino, sulle attività della vita quotidiana e sulla prevenzione delle complicazioni secondarie.' },
                { t: 'Morbo di Parkinson', d: 'La fisioterapia nel Parkinson migliora la mobilità, la stabilità posturale, il cammino e la qualità della vita. Lavoro su esercizi di ampiezza del movimento, equilibrio e strategie per ridurre il rischio di cadute — uno dei rischi principali nella patologia.' },
                { t: 'Sclerosi multipla', d: 'La SM ha un decorso variabile e richiede un approccio adattabile. La fisioterapia gestisce la fatica, la spasticità, i problemi di equilibrio e le difficoltà motorie, modulando l\'intensità in base alle fasi della malattia.' },
                { t: 'Neuropatia periferica e compressioni nervose', d: 'Formicolio, bruciore, debolezza e perdita di sensibilità agli arti possono avere origine da neuropatie periferiche — diabetiche, post-chemioterapia, da intrappolamento. La fisioterapia lavora sulla mobilizzazione neurale, sul rinforzo muscolare e sulla prevenzione delle complicazioni.' },
              ].map(e => (
                <div key={e.t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Cerchi riabilitazione neurologica a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Valutiamo insieme la situazione e costruiamo un percorso orientato all'autonomia.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
