import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Fisioterapia Sportiva a Pontecorvo | Infortuni Sport — Marco Turchetta',
  description: 'Fisioterapia sportiva a Pontecorvo (FR). Trattamento e prevenzione degli infortuni sportivi. Distorsioni, strappi, tendiniti, recupero atletico. Marco Turchetta fisioterapista. Prenota.',
  keywords: ['fisioterapia sportiva Pontecorvo', 'infortuni sportivi Pontecorvo', 'recupero atletico Pontecorvo', 'fisioterapista sportivo Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/fisioterapia-sportiva-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Fisioterapia Sportiva · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Fisioterapia Sportiva a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">Gli infortuni sportivi richiedono un approccio specifico — tempi di recupero rapidi, attenzione alla performance e prevenzione delle recidive. Nel mio studio a Pontecorvo tratto gli infortuni degli sportivi — professionisti e amatori — con le tecnologie più efficaci disponibili.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Gli infortuni sportivi più frequenti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Distorsioni di caviglia e ginocchio, strappi e stiramenti muscolari (coscia, polpaccio, adduttori), tendiniti (achillea, rotulea, sovraspinato), pubalgia, lesioni meniscali, fratture da stress — nel mio studio a Pontecorvo le tratto tutte con un protocollo orientato al ritorno all'attività sportiva nel minor tempo possibile, senza compromettere la qualità del recupero.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">La prevenzione degli infortuni sportivi</h2>
            <p className="text-muted-foreground leading-relaxed">La prevenzione vale più della cura. Un'analisi biomeccanica del gesto sportivo, la valutazione degli squilibri muscolari e un programma di rinforzo specifico possono ridurre significativamente il rischio di infortuni — soprattutto nei runner, nei calciatori e in chi fa sport di squadra.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Sei uno sportivo con un infortunio a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Lavoriamo insieme per un recupero rapido e completo.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
