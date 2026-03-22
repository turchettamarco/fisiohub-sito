import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Contrattura Muscolare a Pontecorvo | Strappo, Stiramento — Marco Turchetta',
  description: 'Contrattura muscolare, strappo e stiramento a Pontecorvo (FR). Marco Turchetta fisioterapista. Trattamento rapido con terapia manuale, laser e tecarterapia. Prenota.',
  keywords: ['contrattura muscolare Pontecorvo', 'strappo muscolare Pontecorvo', 'stiramento muscolare Pontecorvo', 'dolore muscolare Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/contrattura-muscolare-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Muscoli · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Contrattura Muscolare a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">Contratture, stiramenti e strappi muscolari sono tra i problemi più frequenti, sia negli sportivi che nelle persone sedentarie. Nel mio studio a Pontecorvo li tratto con terapia manuale, laser Nd:YAG e tecarterapia per accelerare i tempi di guarigione e prevenire le recidive.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Contrattura, stiramento e strappo: le differenze</h2>
            <div className="space-y-3">
              {[
                { t: 'Contrattura muscolare', d: 'Contrazione involontaria e persistente di un muscolo o di un gruppo muscolare. Causa dolore e rigidità. Spesso conseguenza di sovraccarico, stress o posture scorrette. Risponde rapidamente alla terapia manuale e alla tecarterapia.' },
                { t: 'Stiramento (elongazione)', d: 'Allungamento eccessivo delle fibre muscolari senza lesione vera e propria. Dolore immediato durante l\'attività fisica, tensione locale. Recupero in 1-2 settimane con il trattamento adeguato.' },
                { t: 'Strappo muscolare (distrazione)', d: 'Lesione parziale o totale delle fibre muscolari. Dolore acuto e improvviso, gonfiore, a volte ematoma. I tempi di recupero variano da 2-3 settimane (lesioni lievi) a 6-8 settimane (lesioni severe). Il laser Nd:YAG accelera significativamente la riparazione tissutale.' },
              ].map(e => (
                <div key={e.t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Perché le recidive muscolari sono frequenti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Il muscolo guarisce con del tessuto cicatriziale che, se non trattato correttamente, è meno elastico e resistente del muscolo originale. Questo predispone alle recidive. Per questo il trattamento non termina quando il dolore scompare: il ciclo si completa solo quando la forza, la flessibilità e il coordinamento motorio sono completamente recuperati.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai una contrattura o uno strappo muscolare a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Il prima inizi il trattamento, più veloce e completo sarà il recupero.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
