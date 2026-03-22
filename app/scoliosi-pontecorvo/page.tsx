import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Scoliosi a Pontecorvo | Ipercifosi, Iperlordosi — Marco Turchetta',
  description: 'Scoliosi, ipercifosi e iperlordosi a Pontecorvo (FR). Rieducazione posturale e fisioterapia per paramorfismi vertebrali. Marco Turchetta fisioterapista. Prenota.',
  keywords: ['scoliosi Pontecorvo', 'ipercifosi Pontecorvo', 'iperlordosi Pontecorvo', 'paramorfismi Pontecorvo', 'postura colonna Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/scoliosi-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Scoliosi · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Scoliosi a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">Scoliosi, ipercifosi e iperlordosi sono alterazioni della colonna vertebrale che influenzano la postura e possono causare dolore. Nel mio studio a Pontecorvo le tratto con rieducazione posturale — in particolare con il Metodo Mézières — e con esercizi specifici di rinforzo e allungamento.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Scoliosi: non è solo estetica</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La scoliosi è una curvatura laterale della colonna vertebrale, spesso associata a rotazione delle vertebre. Può essere idiopatica (origine sconosciuta, la forma più comune negli adolescenti) o strutturale (da cause specifiche). Nelle forme lievi e moderate, la fisioterapia e la rieducazione posturale possono ridurre il dolore, migliorare la postura e rallentare la progressione della curva.</p>
            <p className="text-muted-foreground leading-relaxed">Nelle forme più severe o in evoluzione, la fisioterapia si integra con il corsetto ortopedico. In ogni caso, l'esercizio fisico specifico è raccomandato come parte del trattamento.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Ipercifosi e iperlordosi</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">L'ipercifosi è l'eccessiva curva in avanti del tratto dorsale — la "gobba". Può essere posturale (abitudini scorrette, debolezza muscolare) o strutturale (morbo di Scheuermann). L'iperlordosi è l'eccessiva curva in avanti del tratto lombare — la "schiena a banana". Entrambe le condizioni rispondono bene alla rieducazione posturale e al rinforzo muscolare mirato.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il Metodo Mézières per la colonna</h2>
            <p className="text-muted-foreground leading-relaxed">Il Metodo Mézières lavora sulle catene muscolari posteriori — la muscolatura che tende a retrarsi e accorciarsi, causando le alterazioni posturali. Attraverso posture globali mantenute nel tempo, allungamento e respirazione, il metodo ripristina l'equilibrio della colonna. È particolarmente indicato per scoliosi, ipercifosi e dolori posturali cronici.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai scoliosi o problemi di postura a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Valutiamo la tua colonna e costruiamo un percorso personalizzato.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
