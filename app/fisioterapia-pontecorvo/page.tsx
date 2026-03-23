import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fisioterapia a Pontecorvo | Marco Turchetta Fisioterapista e Osteopata',
  description: 'Fisioterapia a Pontecorvo (FR) con Marco Turchetta. Valutazione clinica approfondita, trattamento personalizzato. Mal di schiena, cervicale, dolori articolari. Laser Nd:YAG, tecar, osteopatia. Prenota.',
  keywords: ['fisioterapia Pontecorvo', 'fisioterapista Pontecorvo', 'Marco Turchetta fisioterapia', 'studio fisioterapia Pontecorvo', 'fisioterapia mal di schiena Pontecorvo', 'fisioterapia cervicale Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/fisioterapia-pontecorvo' },
}

export default function FisioterapiaPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Fisioterapia · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Fisioterapia a Pontecorvo<br />
            <span className="text-primary">che risolve, non che tampona</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Sono <strong className="text-foreground">Marco Turchetta</strong>, fisioterapista e osteopata con studio a Pontecorvo (FR).
            Probabilmente hai già fatto fisioterapia da qualche altra parte. E forse ha funzionato per un po&apos; — poi il dolore è tornato.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Questo accade quando viene trattato il sintomo senza cercare la causa.
            Nel mio studio a Pontecorvo funziona diversamente:
            <strong className="text-foreground"> 60 minuti di valutazione clinica approfondita</strong>,
            diagnosi precisa, percorso su misura. Non protocolli standard. Non fretta.
          </p>
          <div className="flex items-center gap-3 mb-7 flex-wrap">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}</div>
            <span className="text-sm text-muted-foreground">5/5 su Google · Pontecorvo</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota la prima valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              La fisioterapia a Pontecorvo che non hai ancora provato
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In molti studi di fisioterapia entri, ti mettono sotto gli ultrasuoni o il laser per 15 minuti,
              magari un massaggio veloce, e via. Il paziente successivo è già in sala d&apos;attesa.
              Questo non è fisioterapia — è produzione.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nel mio studio a Pontecorvo ho scelto di lavorare in modo diverso.
              Nessun altro paziente in contemporanea. Nessun timer.
              La prima seduta dura circa 60 minuti e serve per capire davvero cosa sta succedendo:
              ascolto la tua storia clinica, eseguo test specifici, valuto postura e mobilità,
              cerco la connessione tra il dolore e la sua causa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Alla fine ti spiego cosa ho trovato in linguaggio comprensibile — non in medichese —
              e ti propongo un piano di trattamento. Decidi tu se procedere.
              Nessun obbligo, nessuna pressione.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Cosa tratto</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { t: 'Mal di schiena e lombalgia', href: '/mal-di-schiena-pontecorvo' },
                { t: 'Cervicale e dolore al collo', href: '/cervicale-pontecorvo' },
                { t: 'Sciatalgia', href: '/sciatalgia-pontecorvo' },
                { t: 'Ernia del disco cervicale e lombare', href: '/ernia-del-disco-pontecorvo' },
                { t: 'Dolore alla spalla', href: '/dolore-spalla-pontecorvo' },
                { t: 'Dolore al ginocchio', href: '/dolore-ginocchio-pontecorvo' },
                { t: 'Dolore all\'anca', href: '/dolore-anca-pontecorvo' },
                { t: 'Tendiniti e tendinopatie', href: '/laser-yag-pontecorvo' },
                { t: 'Riabilitazione post-chirurgica', href: '/fisioterapia-pontecorvo' },
                { t: 'Postura — Metodo Mézières', href: '/postura-pontecorvo' },
                { t: 'Osteopatia viscerale', href: '/osteopatia-viscerale-pontecorvo' },
                { t: 'Infortuni sportivi e recupero', href: '/fisioterapia-sportiva-pontecorvo' },
              ].map(({ t, href }) => (
                <Link key={t} href={href}
                  className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors group">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{t}</span>
                  <ArrowRight className="h-3 w-3 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Fisioterapia + osteopatia: perché integrarle cambia tutto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Oltre alla laurea in fisioterapia (Sapienza / IRCCS Neuromed di Pozzilli),
              ho completato un Master universitario in osteopatia (EOM / Università di Verona)
              e sto completando il Diploma D.O. presso la Escuela Osteopática de Madrid.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cosa significa per te? Che in un unico professionista hai due approcci integrati.
              La fisioterapia tratta il problema specifico — il dolore, la limitazione funzionale, la debolezza muscolare.
              L&apos;osteopatia cerca la causa a monte — gli squilibri posturali globali, le tensioni viscerali,
              le disfunzioni che nessun massaggio locale può risolvere.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Un lombare cronico che non migliora potrebbe avere la sua origine in una cicatrice chirurgica addominale.
              Una cervicalgia resistente potrebbe essere alimentata da tensioni gastriche.
              Trovare queste connessioni è quello che distingue la fisioterapia che funziona da quella che tampona.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Tecnologie disponibili nello studio</h2>
            <ul className="space-y-3">
              {[
                { t: 'Laser Nd:YAG Zaira (Garda Laser, Made in Italy)', d: '1064 nm, penetra fino a 5–6 cm. Il più efficace per tendinopatie croniche, calcificazioni e infiammazioni profonde.', href: '/laser-yag-pontecorvo' },
                { t: 'Tecarterapia Globus Diacare 5000', d: 'Diatermia capacitiva e resistiva, 200W. Artrosi, lombalgia, recupero post-chirurgico.', href: '/tecar-terapia-pontecorvo' },
                { t: 'TENS Globus', d: 'Elettroterapia antalgica per dolore cronico, nevralgie, artralgie.', href: '/tens-pontecorvo' },
                { t: 'Magnetoterapia a noleggio domiciliare', d: 'Per cicli domiciliari su artrosi, fratture, tendinopatie croniche.', href: '/magnetoterapia-noleggio-pontecorvo' },
                { t: 'Onde d\'urto ESWT (prossimamente)', d: 'La tecnica con la più alta evidenza scientifica per le tendinopatie croniche resistenti.', href: '/onde-d-urto-pontecorvo' },
              ].map(({ t, d, href }) => (
                <li key={t} className="flex gap-3">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">→</span>
                  <span>
                    <Link href={href} className="font-semibold text-foreground hover:text-primary transition-colors">{t}</Link>
                    {' '}<span className="text-sm text-muted-foreground">— {d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              Perché venire a Pontecorvo invece di spostarti a Cassino o Frosinone
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Molti pazienti della Valle del Liri si spostano lontano convinti che la distanza
              sia sinonimo di qualità. Non è così. Quello che conta è la competenza del professionista,
              la qualità della valutazione e la tecnologia disponibile.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Lo studio è in Via Galileo Galilei 5, Pontecorvo (FR) — raggiungibile da Cassino (15 km),
              Aquino (8 km), Ceprano (10 km), Arce (12 km), San Giorgio a Liri.
              Parcheggio libero. Su appuntamento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Prenota la tua fisioterapia a Pontecorvo</h2>
          <p className="text-muted-foreground mb-6">Prima valutazione: 60 minuti. Ti dico cosa sta succedendo e come lo risolviamo. Decidi tu se procedere.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              👉 Prenota ora <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://wa.me/393209631792" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-7 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Scrivimi su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
