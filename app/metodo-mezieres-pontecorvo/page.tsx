import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Metodo Mézières a Pontecorvo | Rieducazione Posturale Globale — Marco Turchetta',
  description: 'Metodo Mézières a Pontecorvo (FR). Rieducazione posturale globale per dolori cronici, scoliosi, ipercifosi e postura scorretta. Marco Turchetta fisioterapista. Prenota.',
  keywords: ['metodo Mezieres Pontecorvo', 'Mézières Pontecorvo', 'rieducazione posturale globale Pontecorvo', 'catene muscolari Pontecorvo', 'ginnastica posturale Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/metodo-mezieres-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Metodo Mézières · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Metodo Mézières a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">Il Metodo Mézières è una delle tecniche di rieducazione posturale più efficaci e riconosciute. Sviluppato da Françoise Mézières negli anni '40, lavora sulle catene muscolari — in particolare quella posteriore — per correggere alla radice le alterazioni posturali che causano dolore cronico.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il principio delle catene muscolari</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Mézières per prima osservò che i muscoli del corpo non lavorano in modo isolato, ma in "catene" — sequenze di muscoli connessi da fasce che si comportano come un unico grande muscolo. La catena muscolare posteriore — dall'occipite ai talloni — è quella che tende sistematicamente ad accorciarsi e irrigidirsi, causando le tipiche alterazioni posturali: iperlordosi lombare, ipercifosi dorsale, testa in avanti.</p>
            <p className="text-muted-foreground leading-relaxed">Quando si cerca di correggere un segmento isolato — ad esempio la lordosi lombare — la catena compensa altrove. Il metodo Mézières lavora sull'intera catena contemporaneamente, con posture globali mantenute nel tempo, respirazione e allungamento progressivo.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Per chi è indicato il Metodo Mézières</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Il metodo è particolarmente indicato per: dolori cronici della colonna (lombalgia, cervicalgia, dorsalgia), scoliosi e paramorfismi vertebrali, ipercifosi e iperlordosi, dolori muscolari diffusi, mal di testa di origine posturale, prevenzione delle recidive dopo episodi acuti.</p>
            <p className="text-muted-foreground leading-relaxed">Non è una tecnica passiva: richiede la partecipazione attiva del paziente e una certa costanza. I risultati si vedono nel tempo — ma sono duraturi perché lavorano sulla causa, non sul sintomo.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il Metodo Mézières nel mio studio a Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed">Integro il Metodo Mézières con l'osteopatia e la terapia manuale per un approccio completo. La seduta di Mézières dura tipicamente 45-60 minuti e si svolge in una, due o tre posizioni fondamentali mantenute nel tempo, con attenzione alla respirazione e alle compensazioni che emergono durante il lavoro.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Vuoi provare il Metodo Mézières a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Partiremo da un'analisi posturale globale per capire come il metodo può aiutarti.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
