import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Torcicollo a Pontecorvo | Colpo di Frusta — Marco Turchetta',
  description: 'Torcicollo acuto e colpo di frusta a Pontecorvo (FR). Sblocco rapido con terapia manuale. Marco Turchetta fisioterapista e osteopata. Prenota.',
  keywords: ['torcicollo Pontecorvo', 'colpo di frusta Pontecorvo', 'blocco cervicale Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/torcicollo-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Torcicollo · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Torcicollo a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">Il torcicollo acuto blocca il collo di colpo e rende impossibile girare la testa senza dolore. Di solito bastano 1-3 sedute di terapia manuale per sbloccare la situazione. Il colpo di frusta richiede invece un percorso più strutturato.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Torcicollo acuto: cosa succede</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Il torcicollo è quasi sempre causato da un blocco delle faccette articolari cervicali — piccole articolazioni tra le vertebre che si incastrano dopo un movimento brusco o una posizione scorretta durante il sonno. La muscolatura va immediatamente in spasmo protettivo.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">La terapia manuale sblocca le faccette e riduce lo spasmo in tempi molto rapidi. In molti casi il miglioramento è già sensibile al termine della prima seduta.</p>
            <p className="text-muted-foreground leading-relaxed">La cosa importante è capire perché si ripresenta — un torcicollo ricorrente è il segnale di una disfunzione cervicale che va affrontata alla radice.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Colpo di frusta: non sottovalutarlo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Il colpo di frusta da incidente — anche a bassa velocità — può causare danni legamentosi e muscolari che, se non trattati, evolvono in dolore cronico. I sintomi possono comparire anche 24-48 ore dopo.</p>
            <p className="text-muted-foreground leading-relaxed">La fisioterapia precoce è fondamentale: iniziare entro le prime settimane riduce significativamente il rischio di cronicizzazione. Il laser Nd:YAG, la terapia manuale e la TENS sono i pilastri del trattamento.</p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai il torcicollo a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Di solito 1-3 sedute sono sufficienti per sbloccare la situazione.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
