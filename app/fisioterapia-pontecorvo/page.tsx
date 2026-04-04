import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Star, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fisioterapia a Pontecorvo | Marco Turchetta — Fisioterapista e Osteopata',
  description: 'Fisioterapia a Pontecorvo (FR). Marco Turchetta fisioterapista e osteopata. Mal di schiena, cervicale, dolori articolari. Laser Nd:YAG, tecar, osteopatia. Prima valutazione 60 minuti. Prenota.',
  keywords: [
    'fisioterapia Pontecorvo','fisioterapista Pontecorvo','Marco Turchetta fisioterapia',
    'studio fisioterapia Pontecorvo','fisioterapia mal di schiena Pontecorvo',
    'fisioterapia cervicale Pontecorvo','fisioterapista osteopata Pontecorvo',
  ],
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
            <span className="text-primary">che risolve davvero — non che tampona</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Hai già fatto fisioterapia. Forse anche più di una volta.
            Ha aiutato per qualche settimana — poi il dolore è tornato.
            Non è colpa tua, e non è sfortuna. È che molti trattamenti
            lavorano sul sintomo senza mai cercare la causa.
            Nel mio studio a Pontecorvo funziona in modo diverso.
          </p>
          <div className="flex items-center gap-3 mb-7 flex-wrap">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}</div>
            <span className="text-sm text-muted-foreground">5/5 su Google · Pontecorvo (FR)</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-base">
              👉 Prenota ora la prima valutazione <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-12">

          {/* DIFFERENZIAZIONE */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">La differenza tra fisioterapia e fisioterapia</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In molti studi entri, ti mettono sotto una macchina per 15-20 minuti, ti danno
              qualche massaggio veloce, e via — il paziente successivo è già in sala d&apos;attesa.
              Sei uno dei dieci che vedranno quel fisioterapista in giornata.
              Hai esattamente 20 minuti di attenzione. Non è fisioterapia — è produzione.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nel mio studio a Pontecorvo ho scelto di lavorare in modo fondamentalmente diverso.
              Vedo un paziente alla volta. La prima seduta dura 60 minuti — interamente tuoi.
              Non c&apos;è nessun altro in sala d&apos;attesa che aspetta. Non c&apos;è fretta.
              C&apos;è solo il tempo necessario per capire davvero cosa sta succedendo al tuo corpo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La prima cosa che faccio è ascoltarti: quando è iniziato il dolore, cosa lo peggiora,
              cosa hai già provato, i tuoi precedenti infortuni, le operazioni, il tuo lavoro,
              le tue abitudini. Poi eseguo test clinici specifici. Poi ti dico cosa ho trovato
              — in linguaggio umano — e cosa propongo. Decidi tu se procedere.
            </p>
          </div>

          {/* COSA TRATTO */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Cosa tratto a Pontecorvo</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { t: 'Mal di schiena e lombalgia', href: '/mal-di-schiena-pontecorvo', d: 'Acuto, cronico, con o senza sciatalgia' },
                { t: 'Cervicale e dolore al collo', href: '/cervicale-pontecorvo', d: 'Cervicalgia, cefalea, torcicollo, ernia cervicale' },
                { t: 'Sciatalgia', href: '/sciatalgia-pontecorvo', d: 'Dolore che scende lungo la gamba' },
                { t: 'Dolore alla spalla', href: '/dolore-spalla-pontecorvo', d: 'Cuffia dei rotatori, capsulite, impingement' },
                { t: 'Dolore al ginocchio', href: '/dolore-ginocchio-pontecorvo', d: 'Artrosi, menisco, LCA, riabilitazione post-op' },
                { t: 'Dolore all\'anca', href: '/dolore-anca-pontecorvo', d: 'Artrosi, borsite, post-protesi' },
                { t: 'Postura e dolori cronici', href: '/postura-pontecorvo', d: 'Metodo Mézières, catene muscolari' },
                { t: 'Osteopatia viscerale', href: '/osteopatia-viscerale-pontecorvo', d: 'Quando la causa è nei visceri o nelle cicatrici' },
                { t: 'Fisioterapia sportiva', href: '/fisioterapia-sportiva-pontecorvo', d: 'Infortuni, recupero, prevenzione recidive' },
                { t: 'Riabilitazione post-chirurgica', href: '/fisioterapia-pontecorvo', d: 'Protesi, artroscopia, fratture' },
              ].map(({ t, href, d }) => (
                <Link key={t} href={href}
                  className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors group">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{t}</p>
                    <p className="text-xs text-muted-foreground">{d}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* INTEGRAZIONE FT + OSTEOPATIA */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Fisioterapia + osteopatia: perché fa la differenza</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ho la laurea in fisioterapia (Sapienza / IRCCS Neuromed di Pozzilli),
              il Master universitario in osteopatia (EOM / Università di Verona)
              e sto completando il Diploma D.O. presso la Escuela Osteopática de Madrid.
              Non è una collezione di titoli — è una visione clinica integrata.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La fisioterapia tratta il problema specifico: riduce il dolore, ripristina
              la funzione, rinforza le strutture deboli, riabilita dopo un trauma o un&apos;operazione.
              L&apos;osteopatia cerca la causa a monte: gli squilibri posturali globali,
              le tensioni viscerali, le disfunzioni che nessun massaggio locale può risolvere.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Un mal di schiena cronico che non migliora può avere la sua origine in una cicatrice
              chirurgica addominale. Una cervicalgia resistente può essere alimentata da tensioni gastriche.
              Un dolore alla spalla può dipendere dalla postura dorsale. Trovare queste connessioni
              è quello che distingue la fisioterapia che risolve da quella che tampona.
            </p>
          </div>

          {/* TECNOLOGIE */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Le tecnologie nello studio</h2>
            <ul className="space-y-3">
              {[
                { t: 'Laser Nd:YAG Zaira — Garda Laser (Made in Italy)', d: '1064 nm, penetra fino a 5–6 cm. Non è il laser di un centro estetico — è tecnologia medicale certificata. Raggiunge tendini, capsule articolari e strutture profonde inaccessibili ad altri trattamenti.', href: '/laser-yag-pontecorvo' },
                { t: 'Tecarterapia Globus Diacare 5000', d: 'Diatermia capacitiva e resistiva. Anti-infiammatoria in profondità. Efficace su artrosi, lombalgia cronica, recupero post-chirurgico.', href: '/tecar-terapia-pontecorvo' },
                { t: 'TENS Globus', d: 'Elettroterapia antalgica. Blocca il segnale del dolore, stimola le endorfine. Indicata per dolore cronico e nevralgie.', href: '/tens-pontecorvo' },
                { t: 'Magnetoterapia — noleggio domiciliare', d: 'Per cicli terapeutici a casa. Artrosi, fratture in fase di consolidamento, tendinopatie croniche.', href: '/magnetoterapia-noleggio-pontecorvo' },
                { t: 'Onde d\'urto ESWT (prossimamente)', d: 'Il trattamento con la più alta evidenza per tendinopatie croniche resistenti. In arrivo.', href: '/onde-d-urto-pontecorvo' },
              ].map(({ t, d, href }) => (
                <li key={t} className="flex gap-3 p-4 bg-card rounded-xl border border-border">
                  <span className="text-primary font-bold flex-shrink-0 mt-0.5">→</span>
                  <span>
                    <Link href={href} className="font-semibold text-foreground hover:text-primary transition-colors">{t}</Link>
                    <span className="block text-sm text-muted-foreground mt-0.5">{d}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* PERCHÉ SCEGLIERE */}
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h2 className="font-display text-2xl font-semibold mb-5">5 motivi per scegliere il mio studio a Pontecorvo</h2>
            <div className="space-y-4">
              {[
                { n: '01', t: 'Trovo la causa — non nascondo il sintomo', d: 'La prima domanda è sempre "perché fa male", non "dove fa male". Sono la stessa domanda? No. E la risposta cambia tutto.' },
                { n: '02', t: 'Un paziente alla volta — nessuna fretta', d: '60 minuti di attenzione esclusiva. Non c\'è un altro paziente che aspetta. Non c\'è un timer.' },
                { n: '03', t: 'Fisioterapia e osteopatia integrate', d: 'Due approcci in un unico professionista. Non devi girare tra più studi. Il percorso è uno, coerente.' },
                { n: '04', t: 'Tecnologia medicale professionale', d: 'Laser Nd:YAG Zaira, tecarterapia Globus. Non attrezzatura da centro estetico — dispositivi medicali certificati.' },
                { n: '05', t: 'Progressi misurabili — onestà sui risultati', d: 'A ogni seduta rivaluto. Se la strategia non funziona, la cambio. E se un problema è fuori dalla mia competenza, te lo dico e ti indico dove andare.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 font-bold text-primary text-sm">{n}</div>
                  <div>
                    <p className="font-semibold text-foreground mb-0.5">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GEOGRAFICO */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Servo tutta la Valle del Liri — non solo Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lo studio è in Via Galileo Galilei 5, Pontecorvo (FR) — posizione centrale
              rispetto a tutta la Valle del Liri e alla Ciociaria meridionale.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Cassino (15 km)','Aquino (8 km)','Ceprano (10 km)','Arce (12 km)','San Giorgio a Liri','Esperia','Pico','San Giovanni Incarico','Pignataro Interamna','Monticelli'].map(c => (
                <span key={c} className="text-sm px-3 py-1.5 bg-card border border-border rounded-lg text-muted-foreground">{c}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card border-t border-border">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Inizia oggi. Non la settimana prossima.</h2>
          <p className="text-muted-foreground mb-7 text-lg">Prima valutazione: 60 minuti. Nessun obbligo, nessuna sorpresa sui costi.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-3">
            <Link href="/prenota" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base">
              👉 Prenota ora <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+393209631792" className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
            <a href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20vorrei%20prenotare%20una%20valutazione." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
