import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Dolore all\'Anca a Pontecorvo | Coxalgia, Pubalgia — Marco Turchetta',
  description: 'Dolore all\'anca, coxalgia e pubalgia a Pontecorvo (FR). Marco Turchetta fisioterapista e osteopata. Artrosi anca, conflitto femoro-acetabolare, borsite trocanterica. Prenota.',
  keywords: ['dolore anca Pontecorvo', 'coxalgia Pontecorvo', 'pubalgia Pontecorvo', 'artrosi anca Pontecorvo', 'borsite trocanterica Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/dolore-anca-pontecorvo' },
}
export default function DoloreAncaPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Dolore all'Anca · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Dolore all'Anca a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Il dolore all'anca può avere molte cause — artrosi, borsite, conflitto femoro-acetabolare, pubalgia — e spesso viene confuso con altri problemi. Nel mio studio a Pontecorvo eseguo una valutazione clinica specifica per identificare l'origine esatta del dolore e proporre il trattamento più adeguato.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Le patologie dell'anca più frequenti</h2>
            <div className="space-y-3">
              {[
                { t: 'Coxartrosi (artrosi dell\'anca)', d: 'La degenerazione della cartilagine articolare dell\'anca è molto frequente dopo i 60 anni. Causa dolore inguinale, rigidità mattutina e limitazione della rotazione interna. Il trattamento fisioterapico — rinforzo muscolare, tecarterapia, magnetoterapia — riduce il dolore e migliora la funzione, anche in attesa della protesi.' },
                { t: 'Borsite trocanterica', d: 'Infiammazione della borsa sul lato esterno dell\'anca. Dolore al trocantere che peggiora a letto sul fianco o salendo le scale. Il laser Nd:YAG e la terapia manuale sono molto efficaci.' },
                { t: 'Conflitto femoro-acetabolare (FAI)', d: 'Contatto anomalo tra la testa del femore e l\'acetabolo che causa dolore inguinale nei movimenti di flessione. Frequente nei giovani sportivi. La fisioterapia riduce i sintomi e migliora la meccanica articolare.' },
                { t: 'Pubalgia', d: 'Dolore nella regione pubica, tipico degli sportivi — calcio, corsa, nuoto. Spesso correlato a debolezza degli adduttori e degli addominali. Richiede un approccio riabilitativo specifico e progressivo.' },
              ].map(e => (
                <div key={e.t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Riabilitazione dopo protesi d'anca</h2>
            <p className="text-muted-foreground leading-relaxed">Se hai già fatto la protesi d'anca, la riabilitazione è fondamentale per recuperare il cammino normale, la forza e la sicurezza nei movimenti. Seguo protocolli post-protesi specifici, dalla fase acuta al recupero funzionale completo.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai dolore all'anca a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Capisco la causa e costruiamo il percorso giusto.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
