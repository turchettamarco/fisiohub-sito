import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Noleggio Magnetoterapia Pontecorvo | Marco Turchetta',
  description: 'Noleggio magnetoterapia a Pontecorvo (FR). Apparecchio medicale per uso domiciliare. Artrosi, fratture, tendinopatie, osteoporosi. Studio fisioterapia Marco Turchetta.',
  keywords: ['magnetoterapia Pontecorvo', 'noleggio magnetoterapia Pontecorvo', 'magnetoterapia domiciliare Pontecorvo', 'artrosi Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/magnetoterapia-noleggio-pontecorvo' },
}

export default function MagnetoterapiaPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Magnetoterapia · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">Noleggio Magnetoterapia a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Offro il noleggio di apparecchi per magnetoterapia a bassa frequenza per uso domiciliare a Pontecorvo e dintorni. Per le condizioni che beneficiano di cicli prolungati, puoi continuare il trattamento comodamente a casa — con istruzioni personalizzate su tempi, intensità e modalità d'uso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/393209631792?text=Ciao Marco, vorrei informazioni sul noleggio della magnetoterapia." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Chiedi informazioni <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Cos'è la magnetoterapia e come agisce</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La magnetoterapia utilizza campi magnetici a bassa frequenza (ELF — Extremely Low Frequency) per interagire con i tessuti biologici. I campi magnetici inducono correnti elettriche nei tessuti che stimolano processi biologici specifici: modulazione dell'infiammazione, accelerazione della riparazione ossea, effetto analgesico e miglioramento della microcircolazione.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A differenza di altri strumenti fisioterapici, la magnetoterapia non produce calore né stimolazione elettrica percepibile. Il paziente non avverte nulla durante il trattamento. Questa caratteristica la rende particolarmente adatta all'uso domiciliare autonomo, anche per pazienti anziani o con difficoltà di mobilità.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Quando il noleggio della magnetoterapia ha senso</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La magnetoterapia è più efficace quando i cicli di trattamento sono prolungati — tipicamente 30–90 giorni di applicazione quotidiana. Venire in studio ogni giorno per una seduta non è pratico né necessario. Il noleggio dell'apparecchio permette di seguire il protocollo terapeutico con costanza, comodamente a casa.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">Le condizioni per cui il noleggio è più indicato:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {['Artrosi di ginocchio, anca e colonna', 'Fratture recenti o consolidazione lenta', 'Osteoporosi', 'Tendinopatie croniche resistenti', 'Recupero post-chirurgico osseo', 'Epifisiti e morbo di Osgood-Schlatter', 'Algodistrofia', 'Dolore cronico articolare'].map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Come funziona il noleggio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il servizio è semplice. Prima di noleggiare l'apparecchio, effettuiamo una valutazione per verificare che la magnetoterapia sia indicata per la tua condizione e per escludere le controindicazioni (pace-maker, gravidanza, zone con metallo attivo, neoplasie attive).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una volta deciso di procedere, ti consegno l'apparecchio con istruzioni dettagliate e personalizzate: durata delle sedute, frequenza, intensità e posizionamento del solenoide in base alla tua patologia specifica. Non ti lascio con un foglietto generico — il protocollo viene costruito sulla tua situazione.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il noleggio è disponibile per chi risiede a Pontecorvo e nei comuni limitrofi: Ceprano, Arce, Aquino, San Giorgio a Liri, Sant'Elia Fiumerapido, Cassino e zone vicine.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">La magnetoterapia da sola non basta</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Come per tutte le terapie strumentali, la magnetoterapia è più efficace quando è integrata in un percorso clinico più ampio. Per l'artrosi, per esempio: la magneto riduce l'infiammazione e il dolore, ma senza un lavoro specifico sulla muscolatura di supporto all'articolazione e sulla gestione del carico, i benefici si esauriscono con la fine del ciclo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Per questo, quando noleggio l'apparecchio, propongo sempre almeno alcune sedute di fisioterapia in parallelo — per massimizzare i risultati e lavorare sulla causa del problema, non solo sul dolore.
            </p>
          </div>

          <div className="p-5 bg-muted/40 rounded-xl border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Controindicazioni principali:</strong> pace-maker e altri dispositivi elettronici impiantati, gravidanza, zone con protesi metalliche attive, neoplasie in fase attiva, epilessia non controllata. La valutazione preliminare serve proprio a verificare questi aspetti prima del noleggio.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Cerchi il noleggio della magnetoterapia a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Scrivimi o chiamami. Valutiamo insieme se è indicata per il tuo caso e organizziamo il noleggio.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/393209631792?text=Ciao Marco, mi interessa il noleggio della magnetoterapia." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              Scrivimi su WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/prenota" className="inline-flex items-center gap-2 border border-border px-7 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Prenota una valutazione
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
