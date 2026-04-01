import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, AlertCircle, CheckCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mal di Schiena a Pontecorvo | Fisioterapia e Osteopatia — Marco Turchetta',
  description: 'Hai mal di schiena a Pontecorvo? Marco Turchetta fisioterapista e osteopata. Lombalgia acuta, ernia, sciatalgia, dolore cronico. 60 minuti di valutazione per trovare la causa vera. Prenota.',
  keywords: [
    'mal di schiena Pontecorvo','lombalgia Pontecorvo','dolore schiena Pontecorvo',
    'ernia disco Pontecorvo','sciatalgia Pontecorvo','fisioterapia mal di schiena Pontecorvo',
    'osteopata mal di schiena Pontecorvo','colpo della strega Pontecorvo','lombalgia cronica Pontecorvo',
  ],
  alternates: { canonical: 'https://turchettamarco.com/mal-di-schiena-pontecorvo' },
}

const relatedLinks = [
  { href: '/sciatalgia-pontecorvo', label: 'Sciatalgia a Pontecorvo' },
  { href: '/ernia-del-disco-pontecorvo', label: 'Ernia del disco' },
  { href: '/postura-pontecorvo', label: 'Rieducazione posturale' },
  { href: '/osteopatia-viscerale-pontecorvo', label: 'Osteopatia viscerale' },
  { href: '/blog/mal-di-schiena-quando-preoccuparsi', label: 'Quando preoccuparsi' },
  { href: '/blog/mal-di-schiena-cause', label: 'Le 5 cause principali' },
]

export default function MalDiSchienaPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      {/* HERO */}
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Mal di Schiena · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Mal di schiena a Pontecorvo:<br />
            <span className="text-primary">smettila di sopportarlo</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Stai sopportando da settimane. Forse da anni. Il dolore ti si è installato nella vita
            e hai smesso di credere che possa davvero passare. Hai ragione ad essere stanco
            di trattamenti che funzionano per qualche giorno e poi il dolore torna esattamente uguale.
            Quel ciclo si spezza solo in un modo: <strong className="text-foreground">trovare la causa vera</strong> —
            non trattare il sintomo all&apos;infinito.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Sono Marco Turchetta, fisioterapista e osteopata a Pontecorvo. Nel mio studio
            la prima seduta dura 60 minuti e serve a capire — davvero — cosa sta succedendo alla tua schiena.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-base">
              👉 Prenota ora la valutazione <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Senza prescrizione medica · Rispondo su WhatsApp entro poche ore</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-12">

          {/* SINTOMI */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">Ti riconosci in questo?</h2>
            <p className="text-muted-foreground mb-5">Queste sono le cose che mi dicono i pazienti quando arrivano la prima volta.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Ti svegli ogni mattina rigido — ci vogliono 20 minuti prima di raddrizzarti',
                'Non riesci a stare seduto più di 20 minuti senza alzarti per il dolore',
                'Non riesci a infilarti le scarpe o raccogliere qualcosa da terra',
                'Il dolore scende lungo la gamba fino al piede',
                'Hai avuto il colpo della strega — sei rimasto bloccato a letto per giorni',
                'Il dolore ti sveglia di notte e non trovi una posizione',
                'Hai già fatto fisioterapia — ha aiutato un po\', poi il dolore è tornato',
                'Hai la RMN con un\'ernia — l\'ortopedico ti ha detto di aspettare',
                'Prendi antidolorifici quasi ogni giorno per riuscire a lavorare',
                'Hai paura di fare movimenti bruschi perché temi di bloccarti di nuovo',
                'Il dolore peggiora con la posizione seduta, in auto, alla scrivania',
                'Hai cambiato materasso, cuscino, sedia — niente ha cambiato nulla',
              ].map(s => (
                <div key={s} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PERCHÉ NON PASSA */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Perché il tuo mal di schiena non passa — la risposta vera</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il mal di schiena che ritorna sempre, quello che dura da mesi o anni, quasi mai
              è dovuto a un singolo problema strutturale isolato. È il risultato di un sistema
              che si è adattato male nel tempo — compensazioni su compensazioni, tensioni che
              si sono accumulate strato per strato, abitudini posturali che hanno modellato
              il tuo corpo in un certo modo.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Massaggi e antidolorifici toccano la superficie. Rimuovono il segnale del dolore
              temporaneamente, ma non cambiano nulla nel sistema che lo genera.
              Il dolore torna perché la causa è ancora lì, intatta.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il problema non è che hai "la schiena fragile" o che sei "fatto così".
              Il problema è che nessuno ha ancora cercato <em>perché</em> fa male —
              e senza quella risposta, qualsiasi trattamento è cieco.
            </p>
          </div>

          {/* CAUSE */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Le cause che trovo più spesso</h2>
            <div className="space-y-4">
              {[
                {
                  t: 'Tensione muscolare da postura o sovraccarico',
                  badge: 'La più comune',
                  d: 'Il muscolo para-vertebrale va in spasmo per proteggere la colonna da un carico che non riesce a gestire. Ore da seduto, movimenti ripetuti in modo scorretto, uno sforzo improvviso — il risultato è lo stesso. Risponde bene in poche sedute, ma senza correggere la causa posturale a monte, il ciclo ricomincia.',
                },
                {
                  t: 'Ernia del disco — con o senza sciatalgia',
                  badge: 'Molto gestibile',
                  d: 'La parola "ernia" spaventa sempre. Ma nella grande maggioranza dei casi si risolve senza chirurgia. Il nucleo polposo fuoriesce, può irritare una radice nervosa, genera dolore e formicolio alla gamba. Terapia manuale, laser Nd:YAG e esercizi specifici risolvono la maggior parte dei casi. La chirurgia è necessaria solo quando ci sono deficit neurologici progressivi.',
                },
                {
                  t: 'Artrosi lombare (spondiloartrosi)',
                  badge: 'Si gestisce bene',
                  d: 'Le faccette articolari si infiammano, gli spazi si riducono. Non si inverte l\'artrosi — ma si gestisce molto bene. Una muscolatura forte scarica le articolazioni degenerative. Rinforzo progressivo + tecarterapia antinfiammatoria è il percorso più efficace.',
                },
                {
                  t: 'Squilibrio delle catene muscolari',
                  badge: 'Spesso ignorata',
                  d: 'Esami negativi, RMN normale — eppure il dolore c\'è e persiste da anni. La causa sono gli squilibri delle catene muscolari: alcuni gruppi muscolari troppo corti e retratti, altri troppo deboli, che generano un carico asimmetrico sulla colonna. Il Metodo Mézières e l\'osteopatia strutturale sono la risposta più efficace.',
                },
                {
                  t: 'Origine viscerale — la causa che nessuno cerca',
                  badge: 'Sottovalutata',
                  d: 'Un colon irritato, tensioni gastriche croniche, cicatrici chirurgiche addominali — possono generare dolore alla schiena attraverso le connessioni fasciali e nervose. Se hai mal di schiena che non risponde a nessun trattamento locale, vale la pena valutare questa possibilità con l\'osteopatia viscerale.',
                  link: '/osteopatia-viscerale-pontecorvo',
                },
              ].map(({ t, badge, d, link }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-semibold text-foreground">{t}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{badge}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  {link && <Link href={link} className="text-xs text-primary font-semibold hover:underline mt-2 inline-block">Approfondisci →</Link>}
                </div>
              ))}
            </div>
          </div>

          {/* RISCHI SE NON CURI */}
          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
            <h2 className="font-display text-xl font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" /> Se aspetti ancora, peggiora — ecco come
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed mb-4">
              Il mal di schiena non trattato ha una traiettoria precisa. Non è fatalismo — è biologia.
            </p>
            <div className="space-y-2">
              {[
                { step: '1', t: 'I muscoli si indeboliscono', d: 'Il dolore ti fa muovere meno. Meno movimento = meno forza. Meno forza = meno sostegno alla colonna. Più dolore.' },
                { step: '2', t: 'Le compensazioni aumentano', d: 'Il corpo aggira il dolore modificando il modo in cui cammini, ti siedi, ti muovi. Le compensazioni generano nuovi dolori in zone diverse — spesso spalle, anche, ginocchia.' },
                { step: '3', t: 'Il sistema nervoso impara il dolore', d: 'Dopo mesi di dolore continuo, il sistema nervoso abbassa la soglia: bastano stimoli sempre più piccoli per generare dolore sempre più forte. È la sensibilizzazione centrale — il dolore cronico che diventa quasi autonomo.' },
                { step: '4', t: 'Il trattamento diventa più lungo', d: 'Un problema acuto di 3 settimane richiede spesso 4-6 sedute. Lo stesso problema a 3 anni di età richiede un percorso molto più lungo — e i risultati sono meno prevedibili.' },
              ].map(({ step, t, d }) => (
                <div key={step} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-amber-800">{step}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">{t}</p>
                    <p className="text-sm text-amber-800">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* COME RISOLVO */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come risolvo il mal di schiena — concretamente</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              La prima seduta dura 60 minuti. Non iniziamo a trattare subito —
              prima capisco cosa sta succedendo. Ascolto la tua storia clinica per intero:
              quando è iniziato, cosa lo peggiora, cosa hai già provato, i tuoi precedenti infortuni,
              le operazioni, le abitudini quotidiane. Poi eseguo test clinici specifici.
              Alla fine ti dico cosa ho trovato in linguaggio comprensibile e ti propongo un percorso.
              Tu decidi se procedere.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-5">
              {[
                { t: 'Terapia manuale e mobilizzazioni vertebrali', d: 'Riduce il dolore acuto, ripristina la mobilità segmentaria.' },
                { t: 'Osteopatia strutturale', d: 'Approccio globale — cerca la causa anche lontano dalla zona dolente.' },
                { t: 'Osteopatia viscerale', d: 'Quando la causa è nei visceri o nelle cicatrici addominali.' },
                { t: 'Laser Nd:YAG Zaira', d: 'Penetra 5–6 cm. Riduce infiammazione radicolare e accelera la guarigione.' },
                { t: 'Tecarterapia Globus Diacare 5000', d: 'Anti-infiammatoria in profondità. Efficace su artrosi e lombalgia cronica.' },
                { t: 'TENS Globus', d: 'Controllo del dolore cronico e delle nevralgie associate.' },
                { t: 'Rieducazione Mézières', d: 'Per i dolori cronici da squilibrio delle catene muscolari.' },
                { t: 'Esercizi di stabilizzazione', d: 'Rinforzo progressivo per prevenire le recidive — l\'obiettivo finale.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-4 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground text-sm mb-1">{t}</p>
                  <p className="text-xs text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PERCHÉ SCEGLIERE MARCO */}
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h2 className="font-display text-2xl font-semibold mb-4">Perché scegliere Marco Turchetta per il mal di schiena</h2>
            <div className="space-y-3">
              {[
                { icon: '🎯', t: 'Fisioterapia + osteopatia integrate', d: 'Laurea in Fisioterapia (Sapienza / IRCCS Neuromed) + Master in Osteopatia (EOM / Univ. Verona). Due discipline in un unico professionista — non due studi separati.' },
                { icon: '⚽', t: 'Esperienza nel calcio professionistico', d: 'Ex fisioterapista staff Frosinone Calcio. La gestione del dolore acuto sotto pressione è un\'altra cosa — quella mentalità la porto in ogni valutazione.' },
                { icon: '🏥', t: 'Formazione ortopedica con il Dott. Ruo', d: 'Collaborazione con il Centro Medico Ruo di Cassino (Dott. Pasquale Ruo, ortopedico-traumatologo). Conosco il percorso ortopedico dall\'interno.' },
                { icon: '⏱', t: '60 minuti solo per te', d: 'Nessun altro paziente in contemporanea. La seduta finisce quando abbiamo fatto quello che dovevamo fare.' },
                { icon: '📊', t: 'Progressi misurabili, non promesse', d: 'Rivaluto a ogni seduta. Se la strategia non funziona, la cambio. Il mio obiettivo è che tu guarisca — non che torni da me all\'infinito.' },
              ].map(({ icon, t, d }) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0">{icon}</span>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{t}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* APPROFONDIMENTI */}
          <div>
            <h3 className="font-semibold text-foreground mb-3">Approfondimenti correlati</h3>
            <div className="flex flex-wrap gap-2">
              {relatedLinks.map(({ href, label }) => (
                <Link key={href} href={href}
                  className="text-sm px-3 py-1.5 bg-card border border-border rounded-lg hover:border-primary/40 hover:text-primary transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* RED FLAG */}
          <div className="flex items-start gap-3 p-5 bg-red-50 rounded-xl border border-red-200">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 mb-1">Quando andare subito al Pronto Soccorso</p>
              <p className="text-sm text-red-700">
                Perdita del controllo di vescica o intestino, debolezza progressiva alle gambe,
                intorpidimento perineale, dolore notturno intenso in qualsiasi posizione,
                febbre alta con dolore alla schiena, trauma importante.
                Questi sono segnali di allarme — non fisioterapia, Pronto Soccorso subito.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-16 sm:py-20 bg-card border-t border-border">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">
            Ogni settimana che aspetti, il problema si radica di più.
          </h2>
          <p className="text-muted-foreground mb-7 text-lg">
            La prima valutazione dura 60 minuti. Ti dico cosa sta succedendo e cosa si può fare.
            Se posso aiutarti, ti propongo un percorso. Se non posso, te lo dico e ti indico dove andare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Link href="/prenota"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base">
              👉 Prenota ora la prima valutazione <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+393209631792"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
            <a href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20mal%20di%20schiena%20e%20vorrei%20una%20valutazione."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <MessageCircle className="h-4 w-4" /> Scrivimi su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
