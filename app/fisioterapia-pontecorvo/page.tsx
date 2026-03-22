import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fisioterapia a Pontecorvo | Marco Turchetta Fisioterapista',
  description: 'Fisioterapia a Pontecorvo (FR). Marco Turchetta fisioterapista tratta mal di schiena, cervicale, sciatalgia, spalla, ginocchio. Valutazione clinica approfondita e percorso personalizzato. Prenota online.',
  keywords: ['fisioterapia Pontecorvo', 'fisioterapista Pontecorvo', 'Marco Turchetta fisioterapia', 'fisioterapia Pontecorvo FR'],
  alternates: { canonical: 'https://turchettamarco.com/fisioterapia-pontecorvo' },
  openGraph: {
    title: 'Fisioterapia a Pontecorvo | Marco Turchetta',
    description: 'Fisioterapia a Pontecorvo (FR) con approccio clinico personalizzato. Trattamento del dolore muscolo-scheletrico.',
    url: 'https://turchettamarco.com/fisioterapia-pontecorvo',
  },
}

export default function FisioterapiaPontecorvo() {
  return (
    <main className="bg-background text-foreground">

      {/* Hero */}
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Fisioterapia · Pontecorvo (FR)
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
            Fisioterapia a Pontecorvo
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Sono Marco Turchetta, fisioterapista a Pontecorvo. Il mio studio si trova in Via Galileo Galilei 5,
            presso gli Studi Galileo. Mi occupo di valutazione clinica e trattamento del dolore
            muscolo-scheletrico con un approccio personalizzato: ogni paziente ha una storia diversa,
            e ogni percorso viene costruito su misura.
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

      {/* Contenuto principale */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 prose prose-neutral max-w-none">

          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
            Cosa significa fare fisioterapia nel mio studio
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            La fisioterapia non è mettere qualcuno sotto la macchina degli ultrasuoni per venti minuti.
            È una disciplina clinica che parte dall'ascolto, procede con una valutazione strutturata
            e porta a un trattamento specifico per quel paziente, quel problema, in quel momento.
            Nel mio studio a Pontecorvo lavoro così da anni, e questo è il motivo per cui i pazienti
            ottengono risultati duraturi invece di tornare ogni sei mesi con lo stesso dolore.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            La prima seduta dura circa 60 minuti. Racconto la tua storia clinica, eseguo test
            ortopedici e neurologici specifici, e ti spiego quello che trovo. Poi ti propongo un piano:
            quante sedute, con quale frequenza, quali tecniche. Decidi tu se procedere — nessun obbligo.
          </p>

          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
            Cosa tratto
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Nel mio studio di fisioterapia a Pontecorvo tratto le condizioni più frequenti
            dell'apparato muscolo-scheletrico:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8 not-prose">
            {[
              'Mal di schiena e lombalgia acuta e cronica',
              'Cervicalgia e dolore al collo',
              'Sciatalgia e dolore irradiato alla gamba',
              'Dolore alla spalla (cuffia dei rotatori, capsulite)',
              'Problemi al ginocchio (menisco, legamenti, protesi)',
              'Riabilitazione post-chirurgica',
              'Distorsioni e lesioni muscolari',
              'Ernia discale con irradiazione',
              'Tendiniti e tendinopatie croniche',
              'Dolori posturali e scoliosi',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
            Fisioterapia integrata con osteopatia
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Oltre alla laurea in fisioterapia, ho completato un Master universitario in osteopatia
            presso EOM – Università di Verona, e sto completando il Diploma in Osteopatia (D.O.)
            presso la Escuela Osteopática de Madrid. Questa doppia formazione mi permette di combinare
            la riabilitazione funzionale — propria della fisioterapia — con la visione globale del corpo
            tipica dell'osteopatia.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            In pratica: non mi fermo dove fa male. Cerco la causa. Una lombalgia cronica può avere
            origine da una vecchia distorsione alla caviglia mai trattata bene, da una cicatrice
            addominale post-chirurgica, o da un pattern posturale che si è instaurato negli anni.
            Trovare questa connessione cambia tutto.
          </p>

          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
            La tecnologia al servizio della fisioterapia
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Nel mio studio utilizzo strumenti strumentali di qualità clinica, non commerciale:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-8 list-none pl-0 not-prose">
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Laser Nd:YAG Zaira</strong> (Garda Laser, Made in Italy) — penetra fino a 5–6 cm, efficace su tendinopatie, artrosi, dolore cronico</span></li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Tecarterapia Globus Diacare 5000</strong> — diatermia profonda capacitiva e resistiva per infiammazione e recupero tissutale</span></li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">TENS Globus</strong> — controllo elettrico del dolore per condizioni croniche e nevralgie</span></li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Ultrasuoni terapeutici</strong> — per calcificazioni, fibrosi e patologie tendinee profonde</span></li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Magnetoterapia a noleggio</strong> — per cicli domiciliari su artrosi, fratture e tendinopatie croniche</span></li>
          </ul>

          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
            Perché scegliere un fisioterapista a Pontecorvo invece di andare lontano
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Molti pazienti della zona si spostano a Cassino, Frosinone o Roma per la fisioterapia,
            convinti che "lontano" significhi "migliore". Non è necessariamente così.
            Quello che conta è la qualità della valutazione, la competenza del professionista
            e la continuità del percorso.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5">
            Il mio studio a Pontecorvo è facilmente raggiungibile dai comuni limitrofi —
            Ceprano, Arce, Aquino, San Giorgio a Liri, Cassino, Sant'Elia Fiumerapido —
            con parcheggio disponibile nelle vicinanze. Offro sedute dedicate, senza altri
            pazienti in contemporanea, con il tempo necessario per ogni visita.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Se stai cercando fisioterapia a Pontecorvo o in provincia di Frosinone,
            ti invito a prenotare una prima valutazione. Capiamo insieme se posso aiutarti —
            e come.
          </p>

          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-5">
            Come prenotare
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            Puoi prenotare la prima valutazione in tre modi:
          </p>
          <ul className="text-muted-foreground space-y-2 mb-8 list-none pl-0 not-prose">
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span>Online tramite il <Link href="/prenota" className="text-primary hover:underline">form di prenotazione</Link></span></li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span>Chiamando al <a href="tel:+393209631792" className="text-primary hover:underline">320 963 1792</a></span></li>
            <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span>Su <a href="https://wa.me/393209631792" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a> — rispondo entro poche ore</span></li>
          </ul>

        </div>
      </section>

      {/* CTA finale */}
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Hai un problema muscolare o articolare?
          </h2>
          <p className="text-muted-foreground mb-6">
            Prenota una valutazione nel mio studio di fisioterapia a Pontecorvo.
            La prima seduta dura circa 60 minuti — nessun impegno.
          </p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}
