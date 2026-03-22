import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sciatalgia a Pontecorvo | Lombalgia e Dolore Lombare — Marco Turchetta',
  description: 'Sciatalgia, lombalgia e dolore lombare a Pontecorvo (FR). Marco Turchetta fisioterapista e osteopata tratta la sciatalgia con fisioterapia, osteopatia e laser terapia. Prenota.',
  keywords: ['sciatalgia Pontecorvo', 'lombalgia Pontecorvo', 'dolore lombare Pontecorvo', 'dolore dorsale Pontecorvo', 'nervo sciatico Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/sciatalgia-pontecorvo' },
}

export default function SciatalgiaPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Sciatalgia · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Sciatalgia a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            La sciatalgia è uno dei problemi più invalidanti che tratto nel mio studio a Pontecorvo. Dolore che parte dalla schiena e scende lungo la gamba fino al piede, formicolio, debolezza — nella maggior parte dei casi si risolve senza chirurgia con il percorso giusto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Cos'è la sciatalgia e perché fa così male</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il nervo sciatico è il nervo più lungo del corpo umano — nasce dalla colonna lombare, attraversa il gluteo, scende lungo la coscia e arriva fino al piede. Quando viene compresso o irritato, genera il dolore tipico della sciatalgia: una fiammata che segue il percorso del nervo, spesso accompagnata da formicolio, bruciore o debolezza nella gamba.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La causa più frequente è una ernia discale lombare che comprime la radice nervosa — in genere a livello L4-L5 o L5-S1. Ma la sciatalgia può essere causata anche da una protrusione discale, da artrosi lombare con restringimento del forame vertebrale, da una contrattura del muscolo piriforme (sindrome del piriforme), o da una stenosi del canale lombare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La buona notizia: nella grande maggioranza dei casi la sciatalgia risponde bene al trattamento conservativo. La fisioterapia, l'osteopatia e la laserterapia, combinate nel modo giusto, permettono di ridurre significativamente il dolore e recuperare la funzione senza ricorrere all'intervento chirurgico.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Sciatalgia vs lombalgia: la differenza</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Molti pazienti confondono la lombalgia semplice con la sciatalgia. La differenza clinica è importante perché il trattamento cambia.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: 'Lombalgia', d: 'Dolore localizzato nella zona lombare, senza irradiazione significativa alla gamba. Può essere acuta o cronica. Causa: muscolare, discale, articolare. Risponde rapidamente alla terapia manuale.' },
                { t: 'Sciatalgia', d: 'Dolore che parte dalla schiena e si irradia lungo la gamba, spesso oltre il ginocchio. Può includere formicolio, intorpidimento o debolezza. Causa: compressione del nervo sciatico.' },
              ].map(e => (
                <div key={e.t} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come tratto la sciatalgia nel mio studio a Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il primo passo è sempre la valutazione clinica. Eseguo test specifici per identificare quale radice nervosa è coinvolta, a che livello è la compressione e qual è la causa. Se hai già una RMN o TAC, la leggo e la integro nella valutazione.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il trattamento che propongo combina diversi approcci in base alla fase e alla gravità del problema:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Terapia manuale per ridurre la pressione discale',
                'Osteopatia strutturale sulla colonna lombare',
                'Laser Nd:YAG Zaira per l\'infiammazione del nervo',
                'Tecarterapia per la muscolatura para-vertebrale',
                'TENS per il controllo del dolore acuto',
                'Esercizi di neurodynamic mobilization',
                'Rinforzo della muscolatura stabilizzatrice lombare',
                'Educazione posturale e gestione del carico',
              ].map(i => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Quando è necessario l'intervento chirurgico</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'intervento chirurgico per la sciatalgia è indicato in una minoranza di casi: sindrome della cauda equina (perdita del controllo di vescica o intestino), deficit motori gravi e progressivi, o sciatalgia che non risponde ad almeno 6-8 settimane di trattamento conservativo adeguato.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se hai già una diagnosi chirurgica ma vuoi esplorare prima le opzioni conservative, prenota una valutazione. Valutiamo insieme la situazione e ti dico onestamente se c'è spazio per il trattamento non chirurgico o se l'intervento è effettivamente necessario.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Dolore lombare e dorsale: le altre forme</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nel mio studio a Pontecorvo tratto anche tutte le forme di dolore alla schiena senza irradiazione nervosa: lombalgia acuta e cronica, dolore dorsale da tensione muscolare o disfunzione costale, lombosciatalgia con irradiazione parziale, dolore da artrosi vertebrale e da alterazioni posturali.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il dolore alla schiena è la prima causa di assenza dal lavoro in Italia. Non è una condizione con cui si deve convivere — nella maggior parte dei casi ha una causa identificabile e trattabile.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai sciatalgia o dolore lombare a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. In 60 minuti capisco la causa e costruiamo il percorso più adatto.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
