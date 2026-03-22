import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Osteopata a Pontecorvo | Marco Turchetta Osteopatia',
  description: 'Osteopata a Pontecorvo (FR). Marco Turchetta offre trattamenti osteopatici per dolori muscolari, articolari e posturali. Approccio globale, sedute dedicate. Prenota online.',
  keywords: ['osteopata Pontecorvo', 'osteopatia Pontecorvo', 'Marco Turchetta osteopata', 'osteopata Pontecorvo FR'],
  alternates: { canonical: 'https://turchettamarco.com/osteopatia-pontecorvo' },
}

export default function OsteopatiaPontecorvo() {
  return (
    <main className="bg-background text-foreground">

      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Osteopatia · Pontecorvo (FR)
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
            Osteopata a Pontecorvo
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Marco Turchetta è fisioterapista e osteopata a Pontecorvo. Con un Master universitario
            in osteopatia (EOM – Università di Verona) e il Diploma D.O. in completamento presso
            la Escuela Osteopática de Madrid, integra la visione globale osteopatica con la
            competenza clinica fisioterapica.
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Cos'è l'osteopatia e come funziona
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'osteopatia è una disciplina manuale che considera il corpo come un sistema
              integrato — dove muscoli, articolazioni, fasce, organi e sistema nervoso sono
              tutti in relazione tra loro. Quando una parte perde la sua mobilità o funzionalità,
              il corpo compensa. Nel tempo, queste compensazioni generano dolore, rigidità,
              limitazioni — spesso lontane dal punto originario del problema.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il lavoro dell'osteopata è trovare queste disfunzioni — che siano strutturali,
              viscerali o craniali — e risolverle con tecniche manuali precise. Non si tratta
              di "scrocchiare" la schiena: l'osteopatia moderna è una disciplina scientifica
              con un corpus di tecniche vasto e differenziato, applicato in base alla valutazione
              del singolo paziente.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              La formazione in osteopatia — perché conta
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In Italia non tutti i professionisti che si presentano come "osteopati" hanno
              la stessa formazione. La differenza è sostanziale. Il percorso che ho completato
              parte dalla Laurea in Fisioterapia (Sapienza di Roma), continua con il Master
              universitario in Osteopatia (EOM – Università di Verona) e si conclude con il
              Diploma in Osteopatia D.O. presso la Escuela Osteopática de Madrid — una delle
              scuole più autorevoli al mondo, fondata nel 1989 con oltre 75 sedi internazionali.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Questo percorso quinquennale da 174 ECTS include osteopatia strutturale,
              viscerale e craniale, ed è riservato esclusivamente a fisioterapisti e medici.
              È il percorso più completo che un fisioterapista possa seguire in campo osteopatico.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Quando rivolgersi all'osteopata a Pontecorvo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'osteopatia è indicata in molte situazioni cliniche. Le più frequenti nel mio
              studio a Pontecorvo:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Dolori ricorrenti senza causa chiara</strong> — mal di schiena che torna, cervicalgia cronica, cefalea tensiva. Spesso la causa è una disfunzione osteopatica che nessun esame strumentale riesce a visualizzare.</li>
              <li><strong className="text-foreground">Dolori che migrano</strong> — il dolore parte dalla schiena e poi si sposta alla spalla, poi alla coscia. L'osteopatia legge queste catene tensionali e le tratta alla radice.</li>
              <li><strong className="text-foreground">Post-chirurgico</strong> — dopo un intervento, le cicatrici possono creare aderenze che alterano la meccanica corporea. L'osteopatia lavora sul tessuto cicatriziale e sulle compensazioni.</li>
              <li><strong className="text-foreground">Gestione dello stress e tensioni croniche</strong> — il sistema nervoso autonomo risponde allo stress con tensioni muscolari croniche. L'approccio osteopatico aiuta a regolarizzare questa risposta.</li>
              <li><strong className="text-foreground">Prevenzione</strong> — non aspettare che il dolore diventi cronico. Una valutazione osteopatica periodica individua le disfunzioni prima che diventino sintomi.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Osteopatia integrata con fisioterapia — la differenza concreta
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Avere un professionista che padroneggia entrambe le discipline significa che
              il tuo percorso non è frammentato tra diversi specialisti. La valutazione è
              unica, il trattamento è integrato.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Se hai una tendinopatia alla spalla, per esempio: la fisioterapia lavora sul
              rinforzo muscolare e sulla progressione del carico; l'osteopatia valuta se
              c'è una disfunzione della colonna cervicale o del cingolo scapolare che
              mantiene la tensione sul tendine. Trattare solo l'uno o solo l'altro porta
              a risultati parziali.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nel mio studio a Pontecorvo le due discipline lavorano insieme — in ogni
              seduta, senza dover prenotare appuntamenti separati con professionisti diversi.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Come si svolge una seduta di osteopatia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La prima visita dura circa 60 minuti. Inizio sempre con l'anamnesi: voglio
              capire la tua storia clinica, le tue abitudini, i tuoi precedenti infortuni
              e interventi. Poi eseguo una valutazione posturale globale e test osteopatici
              specifici per individuare le disfunzioni.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ti spiego quello che trovo — in modo comprensibile, senza tecnicismi
              inutili. Poi iniziamo il trattamento con le tecniche più appropriate
              per la tua condizione: tecniche strutturali, miotensive, fasciali,
              viscerali, a seconda di quello che emerge dalla valutazione.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le sedute successive durano 45–60 minuti. Il numero varia in base al problema:
              alcune condizioni acute si risolvono in 3–5 sedute, condizioni croniche
              richiedono un percorso più lungo. Te lo dico chiaramente fin dalla prima visita.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Dove si trova lo studio
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lo studio è a Pontecorvo, in Via Galileo Galilei 5, presso gli Studi Galileo.
              Facilmente raggiungibile da Ceprano, Arce, Aquino, Cassino, San Giorgio a Liri
              e Sant'Elia Fiumerapido. Parcheggio disponibile nelle immediate vicinanze.
              Lavoro su appuntamento — prenota online o scrivimi su WhatsApp.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Cerchi un osteopata a Pontecorvo?
          </h2>
          <p className="text-muted-foreground mb-6">
            Prenota una prima valutazione. Capisco il tuo problema e costruiamo insieme
            il percorso più adatto.
          </p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}
