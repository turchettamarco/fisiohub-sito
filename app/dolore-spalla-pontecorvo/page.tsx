import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { BlogLinks } from '@/components/blog/blog-links'

export const metadata: Metadata = {
  title: 'Dolore alla Spalla a Pontecorvo | Cuffia Rotatori, Capsulite — Marco Turchetta',
  description: 'Dolore alla spalla a Pontecorvo (FR). Tendinite spalla, cuffia dei rotatori, capsulite adesiva, calcificazioni. Marco Turchetta fisioterapista e osteopata. Prenota online.',
  keywords: ['dolore spalla Pontecorvo', 'tendinite spalla Pontecorvo', 'cuffia rotatori Pontecorvo', 'capsulite adesiva Pontecorvo', 'spalla congelata Pontecorvo', 'calcificazione spalla Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/dolore-spalla-pontecorvo' },
}

export default function DoloreSpallaPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Dolore alla Spalla · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Dolore alla Spalla a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            La spalla è l'articolazione più mobile del corpo umano — e proprio per questo è la più vulnerabile. Tendiniti, lesioni della cuffia dei rotatori, capsulite adesiva, calcificazioni: nel mio studio a Pontecorvo tratto tutte le patologie della spalla con un approccio clinico specializzato, integrato con le tecnologie più efficaci.
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Le patologie della spalla che tratto a Pontecorvo</h2>
            <div className="space-y-3">
              {[
                { t: 'Tendinite e tendinopatia della cuffia dei rotatori', d: 'Il sovraspinato, il sottospinato, il piccolo rotondo e il sottoscapolare formano la cuffia dei rotatori — i muscoli che stabilizzano e muovono la spalla. Il sovraspinato è il più colpito. Il dolore è tipicamente laterale, peggiora con il sollevamento del braccio. Il laser Nd:YAG e la terapia manuale sono molto efficaci.' },
                { t: 'Calcificazione tendinea (tendinite calcifica)', d: 'Depositi di calcio nel tendine del sovraspinato. Causa dolore acuto e severo, spesso notturno. Le onde d\'urto (prossimamente) e il laser Nd:YAG sono le terapie più indicate — in molti casi evitano la procedura chirurgica di rimozione.' },
                { t: 'Capsulite adesiva (spalla congelata)', d: 'Infiammazione e retrazione della capsula articolare che causa progressiva limitazione di tutti i movimenti della spalla. Spesso colpisce persone tra i 40 e i 60 anni. Richiede un percorso lungo ma risponde bene alla fisioterapia e all\'osteopatia.' },
                { t: 'Sindrome da conflitto sub-acromiale', d: 'I tendini della cuffia vengono "pizzicati" tra la testa dell\'omero e l\'acromion. Dolore al sollevamento del braccio, soprattutto tra i 60° e i 120°. Risponde bene alla terapia manuale e al rinforzo muscolare specifico.' },
                { t: 'Lesione parziale o totale della cuffia', d: 'Le lesioni parziali rispondono bene alla fisioterapia. Le lesioni totali richiedono spesso la chirurgia, ma la riabilitazione post-operatoria è fondamentale per il recupero completo della funzione.' },
              ].map(e => (
                <div key={e.t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Formazione specialistica sulla spalla</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ho frequentato il corso avanzato "La Spalla" del Dott. Francesco Inglese — specialista riconosciuto in Italia nella riabilitazione della spalla, docente presso le Università di Bologna e Pisa, autore del testo di riferimento "La spalla. Riabilitazione ortopedica" (Edi.Ermes). Questo percorso formativo mi permette di applicare un protocollo clinico basato sulle evidenze più aggiornate per le patologie della spalla.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come tratto il dolore alla spalla</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Valutazione clinica specifica della spalla',
                'Test ortopedici per diagnosi differenziale',
                'Terapia manuale e mobilizzazioni articolari',
                'Laser Nd:YAG per tendinopatie e calcificazioni',
                'Tecarterapia per infiammazione e recupero tissutale',
                'Esercizi di rinforzo della cuffia dei rotatori',
                'Rieducazione del movimento del cingolo scapolare',
                'Bendaggio funzionale e taping neuromuscolare',
              ].map(i => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Riabilitazione post-chirurgica della spalla</h2>
            <p className="text-muted-foreground leading-relaxed">
              Se hai già fatto un intervento alla spalla — riparazione della cuffia, decompressione sub-acromiale, stabilizzazione per instabilità — la riabilitazione post-operatoria è fondamentale per recuperare forza, mobilità e funzione. Nel mio studio a Pontecorvo seguo protocolli post-chirurgici specifici, coordinati con il chirurgo ortopedico quando necessario.
            </p>
          </div>

        </div>
      </section>

      <BlogLinks slugs={['dolore-spalla-riconoscere']} />

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai dolore alla spalla a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Capisco la causa e costruiamo il percorso giusto per la tua spalla.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
