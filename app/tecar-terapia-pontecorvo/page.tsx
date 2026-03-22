import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tecar Terapia a Pontecorvo | Globus Diacare 5000 — Marco Turchetta',
  description: 'Tecar terapia a Pontecorvo (FR) con Globus Diacare 5000. Diatermia capacitiva e resistiva per tendinopatie, artrosi, lombalgia, ernie. Studio fisioterapia Marco Turchetta.',
  keywords: ['tecar Pontecorvo', 'tecarterapia Pontecorvo', 'tecar terapia Pontecorvo', 'diatermia Pontecorvo', 'Globus Diacare Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/tecar-terapia-pontecorvo' },
}

export default function TecarPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Tecar Terapia · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">Tecar Terapia a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Nel mio studio di fisioterapia a Pontecorvo utilizzo il Globus Diacare 5000 per la tecarterapia — uno dei dispositivi professionali più avanzati per la diatermia con trasferimento di energia Capacitivo e Resistivo. Frequenze da 400 a 1000 kHz, 200W di potenza, risultati spesso visibili già dalla prima seduta.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una seduta <ArrowRight className="h-4 w-4" />
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Cos'è la tecar terapia e come agisce</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La tecarterapia — o diatermia con trasferimento di energia Capacitivo e Resistivo — è una delle tecniche strumentali più usate in fisioterapia moderna. Utilizza radiofrequenze per generare calore in profondità all'interno dei tessuti biologici, stimolando i processi naturali di riparazione e riducendo l'infiammazione.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A differenza di altri strumenti che agiscono solo in superficie, la tecarterapia raggiunge in profondità strutture difficili da trattare con altri mezzi — tendini, legamenti, cartilagine, muscolatura profonda — senza surriscaldare eccessivamente i tessuti superficiali.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il Globus Diacare 5000 che utilizzo nel mio studio a Pontecorvo lavora in due modalità distinte: la modalità <strong className="text-foreground">Capacitiva</strong>, indicata per i tessuti molli (muscoli, fasce, sistema circolatorio e linfatico), e la modalità <strong className="text-foreground">Resistiva</strong>, indicata per i tessuti duri ad alta resistenza come tendini, legamenti e cartilagine. Per le fasi acute è disponibile anche la modalità <strong className="text-foreground">Atermia</strong> che biostimola i tessuti senza generare calore.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Quando la tecar terapia è indicata</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">La tecarterapia è efficace in un'ampia gamma di condizioni, sia acute che croniche:</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {['Artrosi di ginocchio, anca, spalla', 'Tendinopatie acute e croniche', 'Lombalgia e cervicalgia', 'Ernia discale con irradiazione', 'Capsulite adesiva di spalla', 'Contratture muscolari', 'Recupero post-chirurgico', 'Distorsioni e traumi articolari', 'Sciatalgia e nevralgie', 'Edemi e gonfiori'].map(item => (
                <div key={item} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Come si svolge una seduta di tecar a Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La seduta dura in genere 20–30 minuti sulla zona da trattare. Il paziente avverte una piacevole sensazione di calore che penetra in profondità. Non è dolorosa. Durante la seduta posso integrare il trattamento con tecniche manuali — il dispositivo Globus Diacare 5000 ha la funzione "mani libere" che permette di applicare la tecar mentre lavoro manualmente sui tessuti.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La tecar terapia a Pontecorvo non è mai proposta come trattamento unico. Nel mio studio fa parte di un percorso clinico integrato: valutazione approfondita, terapia manuale, tecarterapia dove indicata, esercizio terapeutico. Questo approccio combinato porta a risultati significativamente migliori rispetto all'utilizzo isolato di un singolo strumento.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Tecar o laser? Quando usarli</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nel mio studio utilizzo sia la tecarterapia che la laserterapia Nd:YAG — due strumenti diversi, con meccanismi d'azione diversi e indicazioni che si complementano.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In generale, la tecar è più indicata quando si vuole agire su ampie zone muscolari o articolari con effetto antinfiammatorio e riscaldante. Il laser Nd:YAG è più preciso, penetra in profondità su zone circoscritte ed è particolarmente efficace nelle tendinopatie croniche, nelle calcificazioni e nelle nevralgie. Spesso li utilizzo in combinazione nello stesso percorso di trattamento.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Cerchi la tecar terapia a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Capiamo insieme se la tecarterapia è indicata per il tuo problema.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
