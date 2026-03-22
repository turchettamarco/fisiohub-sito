import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Check } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Laser YAG a Pontecorvo | Laserterapia Nd:YAG Zaira — Marco Turchetta',
  description: 'Laser YAG a Pontecorvo (FR). Laserterapia Nd:YAG con dispositivo Zaira di Garda Laser. 1064 nm, penetrazione fino a 5–6 cm. Tendiniti, artrosi, lombalgia, sciatalgia. Prenota.',
  keywords: ['laser YAG Pontecorvo', 'laserterapia Pontecorvo', 'laser terapia Pontecorvo', 'laser Nd:YAG Pontecorvo', 'Zaira Garda Laser Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/laser-yag-pontecorvo' },
}

const indications = [
  'Tendiniti e tendinopatie croniche', 'Calcificazioni tendinee (spalla)',
  'Epicondilite laterale', 'Fascite plantare', 'Borsiti e sinoviti',
  'Lombalgia e cervicalgia', 'Sciatalgia', 'Artrosi e condropatie',
  'Capsulite adesiva', 'Edemi post-traumatici', 'Cicatrici e aderenze', 'Recupero post-chirurgico',
]

export default function LaserYagPontecorvo() {
  return (
    <main className="bg-background text-foreground">

      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Laser YAG · Pontecorvo (FR)
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
            Laser YAG a Pontecorvo
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Nel mio studio di fisioterapia a Pontecorvo utilizzo il laser Nd:YAG Zaira di
            Garda Laser — un dispositivo medicale certificato CE, Made in Italy, con oltre
            20 anni di esperienza nella produzione di laser medicali professionali.
            Non il laser di un centro estetico: tecnologia clinica ad alta potenza.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una seduta laser <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          {/* Specifiche + immagine */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                Cos'è il laser Nd:YAG e perché è diverso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nd:YAG sta per <em>Neodimio: Ittrio-Alluminio-Granato</em> — il cristallo che genera
                il fascio laser. La lunghezza d'onda di <strong className="text-foreground">1064 nm</strong> è
                quella che penetra i tessuti biologici alla massima profondità senza danneggiarli:
                <strong className="text-foreground"> fino a 5–6 centimetri</strong>. Questo significa
                raggiungere tendini, capsule articolari, muscoli profondi e strutture ossee che
                altri laser — o le comuni macchine da fisioterapia — non possono trattare.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Il laser Zaira lavora in <strong className="text-foreground">modalità continua</strong> (fino
                a 15 W, effetto antinfiammatorio) e <strong className="text-foreground">modalità pulsata</strong> (picchi
                fino a 30 W, effetto antidolorifico mirato). Scelgo la modalità in base alla
                tua patologia e alla fase del trattamento.
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { v: '1064 nm', l: "Lunghezza d'onda" },
                  { v: '5–6 cm', l: 'Profondità' },
                  { v: '30 W', l: 'Potenza di picco' },
                ].map((s) => (
                  <div key={s.l} className="text-center p-3 bg-card rounded-xl border border-border">
                    <p className="font-display text-lg font-semibold text-primary">{s.v}</p>
                    <p className="text-[11px] text-muted-foreground mt-1 leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-primary/5 border border-primary/15">
              <Image src="/images/zaira-laser.jpg" alt="Laser Nd:YAG Zaira Garda Laser — studio fisioterapia Pontecorvo" fill className="object-contain p-10" />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Come agisce il laser YAG sui tessuti
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il laser Nd:YAG produce tre effetti biologici distinti, che lavorano in sinergia:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { t: 'Effetto fotochimico', d: 'Attiva i mitocondri delle cellule danneggiate, aumenta la produzione di ATP. Risultato: accelerazione della riparazione tissutale e della cicatrizzazione.' },
                { t: 'Effetto fototermico', d: 'Genera un aumento controllato della temperatura locale che stimola la microcircolazione, rimuove i mediatori dell\'infiammazione e riduce il dolore.' },
                { t: 'Effetto fotomeccanico', d: 'Le micro-onde di pressione dell\'emissione pulsata drenano edemi, ematomi e versamenti in profondità, con azione linfodrenante.' },
              ].map((e) => (
                <div key={e.t} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-sm text-foreground mb-2">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Quando usare la laserterapia Nd:YAG
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              La laserterapia Nd:YAG è indicata in molte condizioni acute e croniche.
              Nel mio studio a Pontecorvo la utilizzo principalmente come strumento
              complementare al trattamento manuale — non come sostituto. I risultati
              sono significativamente migliori quando le due tecniche lavorano insieme.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {indications.map((ind) => (
                <div key={ind} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{ind}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Come si svolge una seduta di laser terapia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La seduta di laserterapia dura in genere 15–20 minuti sulla zona da trattare,
              ed è completamente indolore. Il paziente può avvertire una lieve sensazione
              di calore nella zona trattata — è normale ed è il segno che la terapia sta lavorando.
              Si indossano occhiali protettivi per sicurezza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il ciclo tipico prevede 8–12 sedute, con frequenza di 2–3 volte a settimana.
              In molti pazienti si osserva una riduzione del dolore già dalla prima o seconda seduta.
              La laserterapia può essere ripetuta nel tempo, soprattutto per patologie croniche.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nel mio studio la laserterapia non viene mai proposta come trattamento isolato.
              Fa parte di un percorso clinico più ampio che include valutazione, terapia manuale
              e, dove indicato, esercizio terapeutico.
            </p>
          </div>

          <div className="p-5 bg-muted/40 rounded-xl border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Controindicazioni:</strong> la laserterapia non è indicata in gravidanza, su zone con neoplasie,
              su pazienti con pacemaker o dispositivi impiantati nella zona da trattare,
              e su zone con infezioni attive. Valuto sempre l'idoneità al trattamento durante la prima visita.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Hai bisogno di laser terapia a Pontecorvo?
          </h2>
          <p className="text-muted-foreground mb-6">
            Prenota una valutazione. Capisco la tua condizione e decidiamo insieme
            se e come integrare la laserterapia nel tuo percorso.
          </p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}
