import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Postura a Pontecorvo | Rieducazione Posturale — Marco Turchetta',
  description: 'Postura scorretta e rieducazione posturale a Pontecorvo (FR). Valutazione posturale globale, Metodo Mézières, esercizi specifici. Marco Turchetta fisioterapista. Prenota.',
  keywords: ['postura Pontecorvo', 'postura scorretta Pontecorvo', 'rieducazione posturale Pontecorvo', 'valutazione posturale Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/postura-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Postura · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Rieducazione Posturale a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">La postura non è solo estetica. Una postura scorretta causa dolori cronici, affaticamento muscolare, mal di testa e riduzione della qualità della vita. Nel mio studio a Pontecorvo eseguo valutazioni posturali globali e percorsi di rieducazione personalizzati, con il Metodo Mézières come strumento principale.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">La valutazione posturale globale</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La valutazione posturale non si limita a guardare come una persona sta in piedi. Analizza l'allineamento dell'intero corpo — dai piedi alla testa — le compensazioni tra i diversi segmenti, le asimmetrie muscolari, le catene di tensione. Solo con questa visione globale si può capire perché un dolore alla spalla è in realtà causato da una disfunzione del piede, o perché un mal di schiena cronico dipende da una tensione al diaframma.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">La ginnastica posturale nel programma di trattamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La ginnastica posturale — esercizi specifici per correggere gli squilibri muscolari e migliorare la consapevolezza del corpo nello spazio — è il complemento fondamentale della terapia manuale. Senza un lavoro attivo da parte del paziente, i risultati della terapia manuale tendono a non durare.</p>
            <p className="text-muted-foreground leading-relaxed">Nel mio studio a Pontecorvo costruisco un programma di esercizi posturali personalizzato da fare a casa — pochi esercizi, mirati, da fare con costanza. La costanza conta più dell'intensità.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Vuoi migliorare la tua postura a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione posturale globale nel mio studio.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
