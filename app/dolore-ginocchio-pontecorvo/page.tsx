import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dolore al Ginocchio a Pontecorvo | Artrosi, Menisco — Marco Turchetta',
  description: 'Dolore al ginocchio a Pontecorvo (FR). Artrosi del ginocchio, menisco, tendinite rotulea, gonalgia. Marco Turchetta fisioterapista. Trattamento conservativo e riabilitazione. Prenota.',
  keywords: ['dolore ginocchio Pontecorvo', 'artrosi ginocchio Pontecorvo', 'menisco Pontecorvo', 'gonalgia Pontecorvo', 'tendinite rotulea Pontecorvo', 'riabilitazione ginocchio Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/dolore-ginocchio-pontecorvo' },
}

export default function DoloreGinocchioPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Dolore al Ginocchio · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Dolore al Ginocchio a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Il ginocchio è l'articolazione più sollecitata del corpo — e una delle più trattate nel mio studio a Pontecorvo. Artrosi, problemi al menisco, tendinite rotulea, gonfiore e instabilità: ogni condizione ha un percorso specifico e, nella maggior parte dei casi, si può fare molto anche senza chirurgia.
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Le patologie del ginocchio che tratto a Pontecorvo</h2>
            <div className="space-y-3">
              {[
                { t: 'Artrosi del ginocchio (gonartrosi)', d: 'L\'artrosi è la degenerazione progressiva della cartilagine articolare. Causa dolore, gonfiore, rigidità mattutina e difficoltà nelle scale. Non si inverte, ma si gestisce efficacemente: il rinforzo muscolare, la tecarterapia e il laser Nd:YAG riducono significativamente il dolore e rallentano la progressione.' },
                { t: 'Problemi al menisco', d: 'Le lesioni meniscali possono essere traumatiche (sportivi, giovani) o degenerative (over 50). Non tutte richiedono la chirurgia. Molte lesioni meniscali degenerative rispondono bene alla fisioterapia — la letteratura scientifica degli ultimi anni è chiara su questo punto.' },
                { t: 'Tendinite rotulea (ginocchio del saltatore)', d: 'Infiammazione del tendine rotuleo, frequente negli sportivi e in chi svolge attività che richiedono salti o cambi di direzione. Il laser Nd:YAG e il rinforzo eccentrico del quadricipite sono i trattamenti più efficaci.' },
                { t: 'Sindrome femoro-rotulea', d: 'Dolore anteriore al ginocchio aggravato dal salire le scale, dall\'accovacciarsi o dalla corsa prolungata. Spesso correlato a debolezza del gluteo medio e a problemi di allineamento dell\'arto inferiore. Risponde molto bene alla fisioterapia.' },
                { t: 'Riabilitazione post-protesi o post-artroscopia', d: 'Il recupero dopo protesi totale o parziale del ginocchio, o dopo artroscopia per menisco o legamenti, richiede un protocollo riabilitativo specifico e progressivo. La qualità della riabilitazione è determinante per il risultato finale.' },
              ].map(e => (
                <div key={e.t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il trattamento del dolore al ginocchio nel mio studio</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Valutazione clinica e test ortopedici specifici',
                'Tecarterapia Globus Diacare per l\'artrosi',
                'Laser Nd:YAG per tendinopatie e infiammazione',
                'Terapia manuale per l\'articolazione e i tessuti molli',
                'Rinforzo progressivo del quadricipite e del gluteo',
                'Propriocezione e controllo neuromuscolare',
                'Noleggio magnetoterapia per cicli domiciliari',
                'Educazione al movimento e gestione del carico',
              ].map(i => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Artrosi al ginocchio: convivere con il dolore non è l'unica opzione</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Molti pazienti con artrosi al ginocchio arrivano al mio studio convinti di "dover aspettare la protesi". Non è necessariamente così. La forza muscolare — in particolare del quadricipite e del gluteo medio — è il fattore più importante per il dolore da artrosi, più ancora della severità radiologica.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Un percorso di rinforzo muscolare progressivo, combinato con tecarterapia e magnetoterapia, può ridurre significativamente il dolore e migliorare la funzione — anche negli stadi avanzati di artrosi. E se la protesi è inevitabile, arrivare all'intervento con una muscolatura forte significa un recupero post-operatorio molto più rapido.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai dolore al ginocchio a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Capisco la causa e costruiamo un percorso che funzioni davvero.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
