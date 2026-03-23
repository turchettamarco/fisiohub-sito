import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, AlertCircle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cervicale a Pontecorvo | Fisioterapia e Osteopatia — Marco Turchetta',
  description: 'Dolore cervicale a Pontecorvo? Marco Turchetta fisioterapista e osteopata tratta cervicalgia cronica, cefalea, ernia cervicale, torcicollo, vertigini. Trova la causa. Prenota online.',
  keywords: ['cervicale Pontecorvo', 'cervicalgia Pontecorvo', 'dolore collo Pontecorvo', 'fisioterapia cervicale Pontecorvo', 'osteopata cervicale Pontecorvo', 'cefalea tensiva Pontecorvo', 'torcicollo Pontecorvo', 'ernia cervicale Pontecorvo', 'mal di testa cervicale Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/cervicale-pontecorvo' },
}

export default function CervicalePontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Cervicale · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Cervicale a Pontecorvo:<br />
            <span className="text-primary">smettila di convivere con il dolore al collo</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Collo rigido ogni mattina. Mal di testa che parte dalla nuca.
            Non riesci a girare la testa mentre guidi. Formicolio alle braccia.
            Hai preso antidolorifici, fatto massaggi, cambiato cuscino.
            Il dolore torna perché nessuno ha ancora trovato la causa.
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

          {/* Il problema reale */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">
              Perché il dolore cervicale è diventato così comune
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nel 2007 è uscito il primo iPhone. Da allora, la cervicalgia cronica è diventata
              uno dei problemi più frequenti che i fisioterapisti trattano — in fasce d&apos;età sempre più giovani.
              Non è una coincidenza.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quando inclini la testa di 60° per guardare lo smartphone — la posizione tipica —
              la tua colonna cervicale sopporta l&apos;equivalente di <strong className="text-foreground">27 kg</strong> invece di 5.
              Per ore. Ogni giorno. Per anni. I muscoli sub-occipitali si accorciano,
              la lordosi cervicale si riduce, i dischi sono sotto pressione costante.
              Il risultato è prevedibile.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ma non è solo lo smartphone. Lavoro da seduto, postura alla guida, stress cronico,
              traumi pregressi non risolti — tutto contribuisce. E una cervicale lasciata senza trattamento
              tende a peggiorare con il tempo, non a migliorare.
            </p>
          </div>

          {/* Sintomi */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Sintomi che potresti avere</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Collo rigido appena ti alzi — migliora solo dopo 20-30 minuti di caldo",
                "Mal di testa che parte dalla nuca e sale verso la fronte o le tempie",
                "Formicolio, bruciore o debolezza che scendono verso le braccia o le mani",
                "Non riesci a girare completamente la testa da un lato",
                "Dolore che peggiora guardando lo schermo del computer per più di un'ora",
                "Sensazione di 'pietra' nella zona tra le scapole",
                "Vertigini o instabilità che compaiono con certi movimenti del collo",
                "Dolore che si irradia alla spalla o al braccio",
                "Difficoltà a trovare una posizione comoda per dormire",
                "Stanchezza muscolare al collo già a metà mattinata",
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Le forme di dolore cervicale che tratto a Pontecorvo</h2>
            <div className="space-y-4">
              {[
                { t: 'Cervicalgia posturale cronica', urgency: 'La più comune', d: 'Dolore al collo che peggiora con lo schermo, la guida o la lettura prolungata. Risponde bene alla terapia manuale + rinforzo dei flessori profondi + correzione posturale. Ma senza cambiare le abitudini, ritorna.' },
                { t: 'Cefalea cervicogenica (mal di testa da cervicale)', urgency: 'Spesso ignorata', d: 'Mal di testa che in realtà parte dalla cervicale alta (C1-C2-C3) e sale verso la fronte. Spesso confuso con emicrania. Le manipolazioni cervicali e l\'osteopatia cranio-sacrale danno risultati molto buoni in questi casi.' },
                { t: 'Ernia cervicale con irradiazione al braccio', urgency: 'Richiede valutazione', d: 'Dolore, formicolio o debolezza che scendono dal collo al braccio fino alle dita. Nella maggior parte dei casi si risolve senza chirurgia con terapia manuale, laser Nd:YAG e esercizi specifici.' },
                { t: 'Torcicollo acuto', urgency: 'Blocco improvviso', d: 'Collo bloccato da un momento all\'altro — impossibile girare la testa. Con la terapia manuale si sblocca in 1-3 sedute. Ma bisogna capire perché continua a tornare — altrimenti si ripresenta.' },
                { t: 'Artrosi cervicale e spondiloartrosi', urgency: 'Condizione cronica', d: 'Rigidità e dolore negli over 50. Non si inverte, ma si gestisce molto bene. Il rinforzo muscolare è fondamentale — una muscolatura forte scarica le articolazioni degenerative e riduce il dolore.' },
                { t: 'Colpo di frusta post-incidente', urgency: 'Trattare subito', d: 'Il trauma da incidente stradale, anche a bassa velocità. La fisioterapia precoce è fondamentale — più si aspetta, più si rischia la cronicizzazione. Non aspettare che "passi da solo".' },
              ].map(({ t, urgency, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                    <h3 className="font-semibold text-foreground">{t}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold flex-shrink-0">{urgency}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cosa succede se non curi */}
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h2 className="font-display text-xl font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" /> Se ignori la cervicale, peggiora
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              La cervicalgia cronica non trattata tende ad aggravarsi nel tempo.
              I muscoli si irrigidiscono sempre di più, la mobilità si riduce,
              i nervi vengono irritati sempre più frequentemente.
            </p>
            <ul className="space-y-1.5 text-sm text-amber-800">
              {[
                "La muscolatura sub-occipitale continua ad accorciarsi — la cefalea diventa quotidiana",
                "La lordosi cervicale si riduce fino ad invertirsi — il carico sui dischi aumenta",
                "L'irritazione radicolare può diventare permanente con formicolio cronico alle braccia",
                "Le compensazioni posturali generano dolore alle spalle, alla zona dorsale e al basso schiena",
                "La qualità del sonno peggiora — il dolore notturno diventa frequente",
              ].map(s => <li key={s}>→ {s}</li>)}
            </ul>
          </div>

          {/* Come risolvo */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Come tratto la cervicale nel mio studio a Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              La prima seduta dura 60 minuti. Valuto la mobilità segmentaria cervicale,
              la forza dei flessori profondi, la postura globale, la presenza di disfunzioni osteopatiche associate.
              Poi costruisco il percorso specifico per la tua condizione.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Terapia manuale cervicale e mobilizzazioni segmentarie',
                'Osteopatia cranio-sacrale per cefalea cervicogenica',
                'Laser Nd:YAG per infiammazione articolare profonda',
                'Tecarterapia para-vertebrale cervicale',
                'TENS per nevralgie e formicolio cronico',
                'Rinforzo flessori profondi del collo',
                'Rieducazione posturale Metodo Mézières',
                'Taping neuromuscolare e bendaggio funzionale',
              ].map(i => (
                <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">&quot;Ho la cervicale cronica da anni — si può ancora risolvere?&quot;</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Spesso sì. La cervicalgia cronica persiste quando non viene mai trattata la causa reale.
              Molti pazienti che mi dicono &quot;ho la cervicale da vent&apos;anni&quot; ottengono risultati
              significativi in 6-10 sedute perché per la prima volta viene affrontata la causa,
              non solo il sintomo. Non è garantito per tutti — ma vale la pena scoprirlo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai dolore alla cervicale a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Capisco la causa e costruisco il percorso giusto per la tua cervicale.</p>
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
