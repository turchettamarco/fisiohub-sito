import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Dolore alla Caviglia a Pontecorvo | Fascite Plantare, Tallonite — Marco Turchetta',
  description: 'Dolore alla caviglia e al piede a Pontecorvo (FR). Distorsione caviglia, fascite plantare, tallonite, sperone calcaneare. Marco Turchetta fisioterapista. Prenota online.',
  keywords: ['dolore caviglia Pontecorvo', 'distorsione caviglia Pontecorvo', 'fascite plantare Pontecorvo', 'tallonite Pontecorvo', 'sperone calcaneare Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/dolore-caviglia-pontecorvo' },
}
export default function DoloreCavigliaPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Caviglia e Piede · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Dolore alla Caviglia a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">Distorsioni, fascite plantare, tallonite e sperone calcaneare sono tra i problemi più frequenti al piede e alla caviglia. Nel mio studio a Pontecorvo li tratto con le tecnologie più efficaci disponibili, incluso il laser Nd:YAG e la tecarterapia.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Patologie della caviglia e del piede</h2>
            <div className="space-y-3">
              {[
                { t: 'Distorsione della caviglia', d: 'La distorsione in inversione è il trauma più frequente dello sport. Una distorsione trattata male predispone a instabilità cronica e a nuove distorsioni. La fisioterapia precoce — riduzione del gonfiore, recupero della mobilità, rinforzo e propriocezione — è fondamentale per un recupero completo.' },
                { t: 'Fascite plantare', d: 'Dolore al tallone o alla pianta del piede, tipicamente al mattino al primo passo. È l\'infiammazione del tessuto che collega il tallone alle dita. Il laser Nd:YAG e la tecarterapia danno risultati molto buoni. Le onde d\'urto (prossimamente) sono la terapia più efficace nelle forme croniche.' },
                { t: 'Tallonite e sperone calcaneare', d: 'Lo sperone calcaneare è un deposito osseo sul tallone, spesso associato alla fascite plantare. Di per sé non è sempre doloroso — il problema è la fascite che lo accompagna. Il trattamento è lo stesso della fascite plantare.' },
                { t: 'Tendinopatia achillea', d: 'Infiammazione o degenerazione del tendine di Achille, frequente nei runner e negli sportivi. Il laser Nd:YAG e il rinforzo eccentrico del polpaccio sono i trattamenti più efficaci.' },
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
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai dolore alla caviglia o al piede a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione nel mio studio di fisioterapia a Pontecorvo.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
