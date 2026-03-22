import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Terapia Manuale a Pontecorvo | Manipolazioni — Marco Turchetta',
  description: 'Terapia manuale a Pontecorvo (FR). Tecniche di mobilizzazione e manipolazione vertebrale per dolori muscoloscheletrici. Marco Turchetta fisioterapista e osteopata. Prenota.',
  keywords: ['terapia manuale Pontecorvo', 'manipolazione vertebrale Pontecorvo', 'mobilizzazione articolare Pontecorvo', 'fisioterapia manuale Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/terapia-manuale-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Terapia Manuale · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Terapia Manuale a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">La terapia manuale è il cuore del mio lavoro nel studio di fisioterapia a Pontecorvo. Tecniche di mobilizzazione articolare, manipolazioni vertebrali, tecniche sui tessuti molli e tecniche mio-fasciali — applicate in modo specifico e mirato sulla base della valutazione clinica.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Cosa comprende la terapia manuale</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La terapia manuale muscoloscheletrica comprende un insieme di tecniche hands-on applicate sulle articolazioni, sui muscoli e sui tessuti molli. Le principali sono: mobilizzazioni articolari (movimenti passivi e attivi assistiti nell'arco di movimento), manipolazioni vertebrali (thrust ad alta velocità e bassa ampiezza), tecniche sui tessuti molli (massaggio trasverso profondo, frizione, rilascio mio-fasciale), tecniche miotensive (contrarre-rilasciare per ridurre lo spasmo muscolare) e tecniche di neuroscienza del dolore.</p>
            <p className="text-muted-foreground leading-relaxed">La terapia manuale non è il massaggio rilassante di una SPA. È una disciplina clinica con una solida base scientifica, indicazioni specifiche e tecniche precise che richiedono anni di formazione per essere applicate in modo efficace e sicuro.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Quando è indicata la terapia manuale</h2>
            <p className="text-muted-foreground leading-relaxed">La terapia manuale è indicata per la maggior parte dei problemi muscoloscheletrici: lombalgia, cervicalgia, sciatalgia, problemi alla spalla, al ginocchio, alla caviglia, torcicollo, cefalea cervicogenica, post-chirurgico. Ha controindicazioni specifiche che valuto sempre durante la prima visita.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Cerchi la terapia manuale a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione nel mio studio. Costruiamo insieme il percorso più adatto al tuo problema.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
