import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'
import { BlogLinks } from '@/components/blog/blog-links'

export const metadata: Metadata = {
  title: 'Ernia del Disco a Pontecorvo | Protrusione Discale — Marco Turchetta',
  description: 'Ernia del disco, protrusione discale e discopatia a Pontecorvo (FR). Marco Turchetta fisioterapista e osteopata. Trattamento conservativo per evitare la chirurgia. Prenota.',
  keywords: ['ernia del disco Pontecorvo', 'protrusione discale Pontecorvo', 'discopatia Pontecorvo', 'stenosi lombare Pontecorvo', 'stenosi cervicale Pontecorvo', 'spondilolistesi Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/ernia-del-disco-pontecorvo' },
}

export default function ErniaDiscoPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Ernia del Disco · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Ernia del Disco a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Una diagnosi di ernia del disco non significa necessariamente operazione. Nel mio studio a Pontecorvo tratto ernie cervicali e lombari con un approccio conservativo che, nella grande maggioranza dei casi, permette di ridurre il dolore, recuperare la mobilità e tornare alla vita normale senza chirurgia.
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Ernia, protrusione, discopatia: le differenze</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il disco intervertebrale è una struttura fibrocartilaginea tra due vertebre, con un nucleo gelatinoso al centro e un anello fibroso esterno. Con il tempo o a seguito di traumi, questo anello può cedere parzialmente o completamente.
            </p>
            <div className="space-y-3">
              {[
                { t: 'Protrusione discale', d: 'Il nucleo preme sull\'anello fibroso dall\'interno ma non lo rompe. È lo stadio iniziale. Spesso asintomatica o con dolore locale. Risponde molto bene alla fisioterapia e all\'osteopatia.' },
                { t: 'Ernia del disco', d: 'Il nucleo rompe parzialmente o completamente l\'anello e fuoriesce. Se comprime una radice nervosa genera dolore irradiato (sciatalgia o cervicobrachialgia). Il trattamento conservativo funziona nella maggioranza dei casi.' },
                { t: 'Discopatia degenerativa', d: 'Degenerazione progressiva del disco con perdita di altezza e idratazione. Causa dolore cronico e rigidità. Non si inverte, ma si gestisce efficacemente con fisioterapia e rinforzo muscolare.' },
                { t: 'Stenosi vertebrale', d: 'Restringimento del canale vertebrale o del forame che comprime il midollo o le radici nervose. Più comune negli anziani. Il trattamento fisioterapico riduce i sintomi e migliora la qualità della vita.' },
              ].map(e => (
                <div key={e.t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Ernia cervicale e ernia lombare: dove cambia il trattamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le ernie cervicali generano dolore al collo con irradiazione al braccio (cervicobrachialgia) — formicolio, debolezza, dolore lungo il percorso del nervo fino alle dita. Le ernie lombari, invece, generano lombalgia con irradiazione alla gamba (sciatalgia) — il percorso tipico è dal gluteo fino al piede.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In entrambi i casi, il trattamento parte dalla valutazione della radice nervosa coinvolta, dalla fase clinica (acuta o cronica) e dalla risposta del paziente. L'approccio che utilizzo nel mio studio a Pontecorvo combina terapia manuale, osteopatia, laser Nd:YAG e esercizio terapeutico progressivo.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il percorso di trattamento per l'ernia del disco</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Valutazione neurologica e ortopedica specifica',
                'Terapia manuale per ridurre la pressione discale',
                'Osteopatia strutturale sulla colonna',
                'Laser Nd:YAG per l\'infiammazione radicolare',
                'Tecarterapia per i muscoli para-vertebrali',
                'TENS per il controllo del dolore neuropatico',
                'Esercizi di stabilizzazione progressiva',
                'Educazione posturale per prevenire le recidive',
              ].map(i => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Spondilolistesi: quando una vertebra scivola</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La spondilolistesi è lo scivolamento di una vertebra rispetto all'altra. Causa dolore lombare, rigidità e — nei casi più gravi — compressione nervosa con irradiazione alla gamba. Nei gradi I e II, la fisioterapia è il trattamento di prima scelta: rinforzo dei muscoli stabilizzatori, controllo del movimento e gestione del carico permettono di ridurre significativamente i sintomi.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">La RMN dice ernia — ma ho davvero bisogno di operarmi?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La letteratura scientifica è chiara: la presenza di un'ernia alla RMN non correla necessariamente con il dolore. Molte persone hanno ernie asintomatiche. L'indicazione chirurgica dipende dalla clinica — i sintomi, la risposta al trattamento, la progressione — non solo dalle immagini.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se ti hanno proposto un intervento chirurgico per l'ernia del disco, ha senso esplorare prima le opzioni conservative. Prenota una valutazione: ti dico onestamente se c'è spazio per il trattamento non chirurgico o se la chirurgia è effettivamente l'opzione migliore per il tuo caso.
            </p>
          </div>

        </div>
      </section>

      <BlogLinks slugs={['sciatalgia-o-piriforme', 'mal-di-schiena-quando-preoccuparsi']} />

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai un'ernia del disco a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Valutiamo insieme la tua situazione e le opzioni di trattamento conservativo.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
