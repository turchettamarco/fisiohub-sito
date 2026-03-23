import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mal di Schiena a Pontecorvo | Fisioterapia e Osteopatia — Marco Turchetta',
  description: 'Hai mal di schiena a Pontecorvo? Marco Turchetta fisioterapista e osteopata trova la causa vera e la tratta. Lombalgia acuta, ernia, sciatalgia, dolore cronico. Prenota online.',
  keywords: ['mal di schiena Pontecorvo', 'lombalgia Pontecorvo', 'dolore schiena Pontecorvo', 'ernia disco Pontecorvo', 'sciatalgia Pontecorvo', 'fisioterapia mal di schiena Pontecorvo', 'osteopata mal di schiena Pontecorvo', 'colpo della strega Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/mal-di-schiena-pontecorvo' },
  openGraph: { title: 'Mal di Schiena a Pontecorvo | Marco Turchetta', description: 'Fisioterapia e osteopatia per il mal di schiena a Pontecorvo. Trattamento della causa, non solo del sintomo.', url: 'https://turchettamarco.com/mal-di-schiena-pontecorvo' },
}

export default function MalDiSchienaPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Mal di Schiena · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Mal di schiena a Pontecorvo:<br />
            <span className="text-primary">trova la causa e risolvilo davvero</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Se stai leggendo questa pagina, probabilmente hai già provato qualcosa.
            Massaggi, antidolorifici, riposo, forse anche altra fisioterapia.
            Il dolore passa, poi torna. O peggio — non se ne va mai del tutto.
            Il motivo è quasi sempre lo stesso:
            <strong className="text-foreground"> la causa non è mai stata trovata.</strong>
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
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          {/* Sintomi */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Ti riconosci in questi sintomi?</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Ti svegli rigido ogni mattina e ci vogliono 10-20 minuti per raddrizzarti",
                "Non riesci a stare seduto più di 20-30 minuti senza dover alzarti",
                "Fatica a infilarti le scarpe o raccogliere qualcosa da terra",
                "Il dolore scende lungo la gamba fino al piede (sciatalgia)",
                "Hai avuto un 'colpo della strega' che ti ha bloccato a letto",
                "Il dolore peggiora con la tosse, gli starnuti o in posizione seduta prolungata",
                "Ti sveglia di notte e non riesci a trovare una posizione comoda",
                "Hai già fatto la RMN — magari c'è un'ernia, forse no — ma il dolore c'è lo stesso",
                "Hai paura di muoverti perché ogni movimento sbagliato scatena il dolore",
                "Hai provato già fisioterapia ma il dolore è tornato dopo qualche settimana",
              ].map(s => (
                <div key={s} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cause */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Le cause più frequenti del mal di schiena</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Il mal di schiena non è una diagnosi — è un sintomo. La causa può essere molto diversa da caso a caso,
              e trattare il dolore senza capire la causa è come tappare una perdita d&apos;acqua senza trovare il tubo rotto.
            </p>
            <div className="space-y-4">
              {[
                { t: 'Tensione muscolare da sovraccarico o postura', d: 'La causa più comune. Ore da seduto, movimenti ripetitivi scorretti, uno sforzo improvviso — il muscolo para-vertebrale va in spasmo per proteggere la colonna. Risponde molto bene alla terapia manuale e alla tecarterapia in poche sedute. Il problema è che senza correggere la causa posturale, ritorna.' },
                { t: 'Ernia del disco lombare con o senza sciatalgia', d: 'L\'ernia del disco è la causa più temuta — ma spesso meno grave di quanto si pensi. Nella grande maggioranza dei casi risponde bene al trattamento conservativo. La chirurgia è necessaria solo in una minoranza. Terapia manuale, laser Nd:YAG e esercizi specifici risolvono la maggior parte dei casi.' },
                { t: 'Artrosi lombare (spondiloartrosi)', d: 'La degenerazione delle faccette articolari genera infiammazione e dolore cronico. Non si inverte l\'artrosi, ma si gestisce molto bene. Una muscolatura forte scarica le articolazioni degenerative — il rinforzo muscolare progressivo è il trattamento più efficace.' },
                { t: 'Squilibri delle catene muscolari', d: 'La causa più sottovalutata. Esami negativi, RMN negativa — eppure il dolore c\'è. La causa sono gli squilibri delle catene muscolari: alcuni muscoli troppo corti e retratti, altri troppo deboli. Il Metodo Mézières e l\'osteopatia sono la risposta più efficace.' },
                { t: 'Disfunzioni viscerali', d: 'Meno conosciuta ma reale: un colon irritato, tensioni gastriche, cicatrici addominali possono generare dolore alla schiena attraverso le connessioni fasciali. L\'osteopatia viscerale identifica e tratta queste connessioni.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cosa succede se non curi */}
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h2 className="font-display text-xl font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" /> Cosa succede se non curi il mal di schiena
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              Il dolore alla schiena non trattato tende a cronicizzarsi. Ogni episodio non risolto lascia
              una disfunzione residua che predispone al prossimo — spesso più intenso e più difficile da trattare.
            </p>
            <ul className="space-y-1.5 text-sm text-amber-800">
              {[
                "I muscoli di sostegno si indeboliscono progressivamente per la riduzione del movimento",
                "Le compensazioni posturali aumentano, generando nuovi dolori in zone diverse",
                "Il sistema nervoso impara il dolore — la sensibilizzazione centrale rende tutto più difficile",
                "Il rischio di ricadute aumenta a ogni episodio non trattato correttamente",
                "La qualità della vita peggiora: lavoro, sport, relazioni, sonno — tutto ne risente",
              ].map(s => <li key={s}>→ {s}</li>)}
            </ul>
          </div>

          {/* Come risolvo */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Come risolvo il mal di schiena nel mio studio a Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              La prima cosa che faccio è capire di che tipo di mal di schiena si tratta.
              Ascolto la tua storia, eseguo test specifici, valuto la postura, la mobilità segmentaria,
              la forza dei muscoli stabilizzatori. Solo dopo costruisco il percorso.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { t: 'Terapia manuale e mobilizzazioni', d: 'Tecniche manuali vertebrali per ridurre il dolore acuto e ripristinare la mobilità segmentaria.' },
                { t: 'Osteopatia strutturale e viscerale', d: 'Approccio globale che cerca la causa profonda — anche nei visceri e nelle cicatrici.' },
                { t: 'Laser Nd:YAG Zaira', d: 'Penetra fino a 5-6 cm. Riduce l\'infiammazione radicolare e accelera la riparazione tissutale.' },
                { t: 'Tecarterapia Globus Diacare 5000', d: 'Diatermia muscolare e articolare per il dolore cronico e la rigidità para-vertebrale.' },
                { t: 'TENS Globus', d: 'Controllo del dolore cronico e delle nevralgie associate alla sciatalgia.' },
                { t: 'Rieducazione Posturale Mézières', d: 'Lavoro sulle catene muscolari globali per i dolori cronici senza causa evidente agli esami.' },
                { t: 'Esercizi di stabilizzazione', d: 'Programma progressivo per rafforzare i muscoli profondi e prevenire le recidive.' },
                { t: 'Educazione al dolore', d: 'Capisci cosa sta succedendo al tuo corpo — i pazienti informati guariscono più in fretta.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{t}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Segnali allarme */}
          <div className="flex items-start gap-3 p-5 bg-red-50 rounded-xl border border-red-200">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 mb-1">Quando andare al Pronto Soccorso subito</p>
              <p className="text-sm text-red-700 leading-relaxed">
                Mal di schiena con perdita del controllo di vescica o intestino, debolezza progressiva alle gambe,
                intorpidimento nella zona perineale, dolore notturno intenso che non si calma in nessuna posizione,
                febbre alta associata al dolore, trauma importante. Questi sono segnali di allarme che richiedono
                valutazione medica urgente — non fisioterapia.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai mal di schiena a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">60 minuti di valutazione clinica. Ti dico cosa sta succedendo e cosa si può fare. Nessun impegno.</p>
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
