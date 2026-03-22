import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TENS a Pontecorvo | Elettroterapia Antalgica — Marco Turchetta',
  description: 'TENS a Pontecorvo (FR). Elettroterapia antalgica per dolore cronico, nevralgie, artralgie e dolore post-operatorio. Studio fisioterapia Marco Turchetta, Via Galileo Galilei 5.',
  keywords: ['TENS Pontecorvo', 'elettroterapia Pontecorvo', 'tens fisioterapia Pontecorvo', 'dolore cronico Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/tens-pontecorvo' },
}

export default function TensPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">TENS · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">TENS a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            La TENS (Transcutaneous Electrical Nerve Stimulation) è l'elettroterapia antalgica più studiata e documentata in fisioterapia. Nel mio studio a Pontecorvo utilizzo un dispositivo Globus professionale per il controllo del dolore cronico, acuto e neuropatico.
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Come funziona la TENS</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La TENS agisce attraverso piccoli impulsi elettrici che vengono applicati sulla pelle tramite elettrodi adesivi. Questi impulsi stimolano le fibre nervose sensitive, attivando due meccanismi principali di controllo del dolore.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In modalità ad alta frequenza, la TENS sfrutta la <strong className="text-foreground">teoria del cancello del dolore</strong> (Gate Control Theory): gli impulsi elettrici "saturano" le fibre nervose di grosso calibro, bloccando la trasmissione del segnale doloroso verso il midollo spinale. L'effetto analgesico è rapido ma cessa quando si interrompe la stimolazione.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In modalità a bassa frequenza (TENS acupuntura), la stimolazione induce la produzione endogena di <strong className="text-foreground">beta-endorfine e encefaline</strong> — i neurotrasmettitori naturali dell'analgesia. L'effetto è più lento da raggiungere ma più duraturo nel tempo.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Quando è indicata la TENS</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La TENS è particolarmente indicata nel dolore cronico muscolo-scheletrico, dove altri approcci hanno effetto limitato. Nel mio studio a Pontecorvo la utilizzo principalmente per:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Dolore cronico lombare e cervicale</strong> — spesso integrata con terapia manuale e laser per un effetto analgesico più completo e duraturo.</li>
              <li><strong className="text-foreground">Nevralgie e dolore neuropatico</strong> — sciatalgia, cruralgia, nevralgia intercostale, dolori da compressione nervosa.</li>
              <li><strong className="text-foreground">Artralgie croniche</strong> — artrosi di anca, ginocchio, spalla. La TENS non cura l'artrosi, ma riduce significativamente il dolore migliorando la qualità della vita.</li>
              <li><strong className="text-foreground">Dolore post-operatorio</strong> — nelle fasi di recupero dopo interventi chirurgici, come supporto analgesico non farmacologico.</li>
              <li><strong className="text-foreground">Fibromialgia e dolore diffuso</strong> — come parte di un approccio multimodale.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Vantaggi della TENS rispetto ai farmaci antidolorifici</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La TENS non sostituisce la terapia farmacologica nelle situazioni in cui è necessaria. Ma in molti casi di dolore cronico può ridurre significativamente la dipendenza da antidolorifici — con indubbi vantaggi per lo stomaco, il fegato e la qualità di vita.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              È completamente non invasiva, indolore (la sensazione è di un leggero formicolio nella zona trattata), priva di effetti collaterali sistemici e può essere ripetuta nel tempo senza problemi. Alcune condizioni permettono anche l'uso domiciliare, con apparecchi specifici che il paziente usa autonomamente a casa.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">La TENS nel contesto del trattamento fisioterapico</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nel mio studio la TENS non viene mai proposta come trattamento isolato. Il dolore cronico quasi sempre ha una causa — posturale, muscolare, articolare, nervosa — che va identificata e trattata. La TENS può essere un ottimo strumento per gestire il dolore nelle fasi acute o per migliorare la qualità della vita durante il percorso riabilitativo, ma non sostituisce la valutazione clinica e il trattamento della causa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La utilizzo spesso in combinazione con la laserterapia Nd:YAG e la terapia manuale per ottenere un effetto analgesico sinergico e più duraturo.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Hai un dolore cronico che non passa?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione nel mio studio di fisioterapia a Pontecorvo. Troviamo la causa e costruiamo un percorso per gestirla davvero.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
