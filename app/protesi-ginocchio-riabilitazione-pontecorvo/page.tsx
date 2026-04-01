import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Riabilitazione Protesi Ginocchio a Pontecorvo | Marco Turchetta',
  description: 'Riabilitazione post-protesi di ginocchio a Pontecorvo. Marco Turchetta fisioterapista. Percorso strutturato dalla fase post-operatoria al ritorno alla vita quotidiana. Prenota.',
  keywords: ['riabilitazione protesi ginocchio Pontecorvo','fisioterapia post protesi ginocchio Pontecorvo','protesi ginocchio recupero Pontecorvo','artroprotesi ginocchio fisioterapia'],
  alternates: { canonical: 'https://turchettamarco.com/protesi-ginocchio-riabilitazione-pontecorvo' },
}

export default function ProtesiGinocchio() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Cluster Ginocchio · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Riabilitazione protesi di ginocchio<br />
            <span className="text-primary">a Pontecorvo — torna alla vita normale</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Hai appena fatto l&apos;operazione — o la stai per fare. Sai che l&apos;intervento
            è solo la metà del percorso. La fisioterapia post-operatoria è quella che determina
            il risultato finale: quanto velocemente torni a camminare bene, quanto recuperi
            la mobilità completa, quanto dolore avrai nei mesi successivi.
            Il recupero dipende quasi interamente dalla qualità della riabilitazione.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              👉 Prenota la valutazione <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Perché la riabilitazione fa la differenza</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una protesi di ginocchio ben posizionata chirurgicamente può dare risultati
              deludenti se la fisioterapia post-operatoria è inadeguata — e risultati
              eccellenti se la riabilitazione è strutturata, progressiva e seguita da vicino.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le problematiche più comuni che vedo nei pazienti post-protesi arrivati tardi
              alla fisioterapia: rigidità articolare (la mobilità non recuperata entro le prime
              settimane diventa molto difficile da recuperare in seguito), atrofia del quadricipite,
              dolore residuo per mancato controllo dell&apos;infiammazione, alterazioni del passo
              che diventano abitudini difficili da modificare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Iniziare presto, con il giusto carico progressivo e la giusta progressione degli esercizi,
              è la variabile che distingue un recupero buono da uno eccellente.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Il percorso riabilitativo — fase per fase</h2>
            <div className="space-y-4">
              {[
                { fase: 'Fase 1 — Settimane 1-4', t: 'Controllo del dolore e del gonfiore', d: 'Priorità: ridurre l\'edema, controllare il dolore, mantenere la mobilità conquistata in ospedale. Tecniche: linfodrenaggio manuale, mobilizzazioni passive gentili, elettroterapia antalgica (TENS), crioterapia. Esercizi isometrici del quadricipite per prevenire l\'atrofia senza caricare l\'articolazione.' },
                { fase: 'Fase 2 — Settimane 4-8', t: 'Recupero della mobilità e rinforzo iniziale', d: 'Obiettivo: 90° di flessione minima, estensione completa, deambulazione senza ausili. Esercizi attivi assistiti, rinforzo progressivo quadricipite e ischio-crurali, cyclette a bassa resistenza, lavoro propriocettivo iniziale.' },
                { fase: 'Fase 3 — Settimane 8-16', t: 'Rinforzo funzionale e gait training', d: 'Recupero del passo normale, rinforzo completo degli arti inferiori, miglioramento dell\'equilibrio e della propriocezione. Esercizi in carico progressivo, salita/discesa scale, superfici instabili, attività funzionali quotidiane.' },
                { fase: 'Fase 4 — Mese 4+', t: 'Ritorno alle attività quotidiane e sportive leggere', d: 'Camminata prolungata, nuoto, cyclette, attività a basso impatto. Valutazione della possibilità di ritorno allo sport specifico. Programma di mantenimento domiciliare a lungo termine.' },
              ].map(({ fase, t, d }) => (
                <div key={fase} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{fase}</span>
                    <h3 className="font-semibold text-foreground">{t}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Quando iniziare la fisioterapia</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Idealmente, <strong className="text-foreground">prima dell&apos;operazione</strong> — la fisioterapia pre-operatoria
              (prehabilitation) riduce l&apos;atrofia muscolare e migliora i risultati post-chirurgici.
              Se non hai fatto fisioterapia prima, inizia entro 2-3 settimane dall&apos;intervento,
              non appena il chirurgo lo autorizza.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se sei già passato qualche mese dall&apos;operazione e non sei soddisfatto del recupero,
              vale comunque la pena valutare: in molti casi si può ancora migliorare significativamente,
              anche a distanza di tempo dall&apos;intervento.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Tecnologie utilizzate nel percorso</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { t: 'Laser Nd:YAG Zaira', d: 'Riduce l\'infiammazione articolare profonda e accelera la cicatrizzazione.' },
                { t: 'Tecarterapia Globus Diacare', d: 'Anti-infiammatoria e drenante. Fondamentale nella gestione dell\'edema post-chirurgico.' },
                { t: 'TENS', d: 'Controllo del dolore post-operatorio per ridurre la dipendenza dagli antidolorifici.' },
                { t: 'Esercizio terapeutico progressivo', d: 'Protocollo personalizzato con progressione del carico settimana per settimana.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-4 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground text-sm mb-1">{t}</p>
                  <p className="text-xs text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Vedi anche nel cluster ginocchio</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { href: '/dolore-ginocchio-pontecorvo', label: 'Dolore al ginocchio' },
                { href: '/riabilitazione-anca-pontecorvo', label: 'Riabilitazione anca' },
                { href: '/blog/dolore-ginocchio-cosa-fare', label: 'Cosa fare subito' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm px-3 py-1.5 bg-card border border-border rounded-lg hover:border-primary/40 hover:text-primary transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Inizia la riabilitazione subito — ogni settimana conta.</h2>
          <p className="text-muted-foreground mb-6">Il percorso riabilitativo determina il risultato finale della tua protesi.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              👉 Prenota ora <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20fatto%20la%20protesi%20di%20ginocchio%20e%20vorrei%20iniziare%20la%20riabilitazione." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
