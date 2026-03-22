import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cervicale a Pontecorvo | Fisioterapia e Osteopatia — Marco Turchetta',
  description: 'Dolore cervicale a Pontecorvo (FR)? Marco Turchetta fisioterapista e osteopata tratta cervicalgia, cefalea tensiva, ernia cervicale, torcicollo. Valutazione approfondita. Prenota.',
  keywords: [
    'cervicale Pontecorvo',
    'cervicalgia Pontecorvo',
    'fisioterapia cervicale Pontecorvo',
    'osteopata cervicale Pontecorvo',
    'dolore collo Pontecorvo',
    'cefalea tensiva Pontecorvo',
    'torcicollo Pontecorvo',
    'ernia cervicale Pontecorvo',
  ],
  alternates: { canonical: 'https://turchettamarco.com/cervicale-pontecorvo' },
  openGraph: {
    title: 'Cervicale a Pontecorvo | Marco Turchetta Fisioterapista',
    description: 'Trattamento della cervicalgia a Pontecorvo con fisioterapia e osteopatia integrate. Cefalea, rigidità, dolore irradiato al braccio.',
    url: 'https://turchettamarco.com/cervicale-pontecorvo',
  },
}

export default function CervicalePontecorvo() {
  return (
    <main className="bg-background text-foreground">

      {/* Hero */}
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Cervicale · Pontecorvo (FR)
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
            Cervicale a Pontecorvo
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            La cervicalgia — il dolore al collo — è tra i problemi più frequenti che tratto
            nel mio studio a Pontecorvo. Rigidità mattutina, dolore che sale alla testa,
            formicolio alle braccia, difficoltà a ruotare il collo. Sono segnali che qualcosa
            non funziona — e nella maggior parte dei casi si può risolvere.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+393209631792"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium"
            >
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      {/* Contenuto */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              La cervicalgia moderna: perché è così diffusa
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La cervicalgia è diventata una delle condizioni più comuni nella popolazione
              adulta — e il motivo principale è lo stile di vita. Ore passate al computer,
              allo smartphone, in macchina. Posture statiche prolungate che caricano
              le strutture del collo in modo asimmetrico e costante.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ma la postura è solo una parte della storia. La cervicale è anche una zona
              di transizione fondamentale: collega il cranio alla colonna, ospita importanti
              strutture vascolari e nervose, ed è strettamente collegata — tramite catene
              muscolari e fasciali — alla regione dorsale, alle spalle e persino alla
              zona lombare. Un problema alla cervicale può generare sintomi lontani
              dalla sede del dolore — e viceversa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Per questo la valutazione di un dolore cervicale non può limitarsi al collo.
              Nel mio studio a Pontecorvo valuto sempre la regione in modo globale,
              considerando le connessioni con il resto del corpo.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Le forme di cervicalgia che tratto a Pontecorvo
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: 'Cervicalgia posturale e da sovraccarico',
                  desc: 'La forma più comune. Dolore e tensione al collo che compaiono o peggiorano con la posizione seduta prolungata, lo schermo, la guida. Risponde bene a un approccio combinato di terapia manuale, esercizio terapeutico e correzione posturale. Il trattamento non termina in studio: serve un programma da fare a casa.',
                },
                {
                  title: 'Cefalea tensiva di origine cervicale',
                  desc: 'Mal di testa che parte dalla nuca, sale verso la fronte o le tempie. Spesso peggiora con lo stress o la postura. Nella mia esperienza è tra i problemi che più beneficia dell\'osteopatia cranio-sacrale e della terapia manuale alla colonna cervicale alta (C0-C1-C2). Molti pazienti riducono drasticamente la frequenza dei mal di testa già nelle prime settimane.',
                },
                {
                  title: 'Ernia cervicale con irradiazione al braccio (cervicobrachialgia)',
                  desc: 'L\'ernia discale cervicale che comprime una radice nervosa genera dolore, formicolio o debolezza che scendono lungo il braccio fino alla mano. Il trattamento fisioterapico e osteopatico, integrato con laserterapia Nd:YAG, permette nella maggior parte dei casi di evitare l\'intervento chirurgico e recuperare la funzione.',
                },
                {
                  title: 'Torcicollo acuto',
                  desc: 'Blocco improvviso del collo con impossibilità di ruotare o inclinare la testa. È doloroso e invalidante, ma risponde molto bene alla terapia manuale. In genere 1–3 sedute sono sufficienti per sbloccare la situazione. La cosa importante è capire perché si è presentato e prevenire le recidive.',
                },
                {
                  title: 'Artrosi cervicale (spondiloartrosi cervicale)',
                  desc: 'Degenerazione delle articolazioni e dei dischi della colonna cervicale, tipica dell\'età adulta e avanzata. Causa rigidità, dolore e a volte vertigini o acufeni da compressione vascolare. Non si può invertire l\'artrosi, ma si può ridurre significativamente il dolore, mantenere la mobilità e migliorare la qualità della vita.',
                },
                {
                  title: 'Colpo di frusta e traumi da incidente',
                  desc: 'Il trauma cervicale da colpo di frusta (tipico degli incidenti in auto) può generare sintomi che durano mesi se non trattati correttamente fin dall\'inizio. La fisioterapia precoce è fondamentale per evitare che si instaurino pattern di dolore cronico e limitazione funzionale.',
                },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Come tratto la cervicale nel mio studio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il trattamento della cervicalgia nel mio studio a Pontecorvo è sempre multimodale —
              non esiste una tecnica unica che funziona per tutti. In base alla valutazione scelgo
              la combinazione più appropriata tra:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Terapia manuale e mobilizzazioni cervicali',
                'Tecniche osteopatiche strutturali e cranio-sacrali',
                'Laserterapia Nd:YAG per infiammazione e dolore profondo',
                'Tecarterapia per la muscolatura para-vertebrale',
                'TENS per il controllo del dolore cronico e delle nevralgie',
                'Rieducazione posturale metodo Mézières',
                'Esercizi di stabilizzazione cervicale profonda',
                'Bendaggio funzionale o taping neuromuscolare',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Cervicale cronica: quando si può guarire davvero
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Molti pazienti arrivano nel mio studio con una storia di cervicalgia che dura
              da anni — a volte decenni. Hanno fatto massaggi, fisioterapia, osteopatia.
              Il dolore passa, poi torna. E ad un certo punto si convincono che "è il loro
              destino" o che "devono imparare a convivere con il dolore".
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Non è necessariamente così. Nella mia esperienza, la cervicalgia cronica
              tende a persistere quando non è stata trovata e affrontata la causa reale:
              un'alterazione posturale globale, una disfunzione osteopatica non trattata,
              una muscolatura di supporto insufficiente, un pattern di movimento sbagliato
              consolidato negli anni.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il percorso è più lungo rispetto a un episodio acuto — tipicamente 10–15 sedute
              con un programma di esercizi da continuare autonomamente — ma i risultati
              possono essere significativamente più duraturi rispetto ai cicli di massaggi
              ripetuti ogni sei mesi.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Dove trovarmi a Pontecorvo
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lo studio è in Via Galileo Galilei 5, Pontecorvo (FR), presso gli Studi Galileo.
              Raggiungiibile da Cassino, Ceprano, Arce, Aquino, San Giorgio a Liri e
              Sant'Elia Fiumerapido. Parcheggio libero nelle vicinanze.
              Lavoro su appuntamento — prenota online o scrivimi su WhatsApp.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Hai problemi di cervicale a Pontecorvo?
          </h2>
          <p className="text-muted-foreground mb-6">
            Prenota una valutazione nel mio studio. Capisco il problema,
            trovo la causa e costruiamo il percorso giusto per te.
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}
