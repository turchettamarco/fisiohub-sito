import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, AlertCircle, CheckCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cervicale a Pontecorvo | Dolore al Collo — Marco Turchetta Fisioterapista',
  description: 'Dolore cervicale a Pontecorvo? Marco Turchetta trova e risolve la causa vera. Cervicalgia, cefalea, ernia cervicale, torcicollo, formicolio braccia. Prenota la valutazione.',
  keywords: [
    'cervicale Pontecorvo','cervicalgia Pontecorvo','dolore collo Pontecorvo',
    'fisioterapia cervicale Pontecorvo','osteopata cervicale Pontecorvo',
    'cefalea tensiva Pontecorvo','torcicollo Pontecorvo',
    'ernia cervicale Pontecorvo','formicolio braccia Pontecorvo',
  ],
  alternates: { canonical: 'https://turchettamarco.com/cervicale-pontecorvo' },
}

const relatedLinks = [
  { href: '/torcicollo-pontecorvo', label: 'Torcicollo a Pontecorvo' },
  { href: '/cefalea-pontecorvo', label: 'Cefalea cervicogenica' },
  { href: '/ernia-del-disco-pontecorvo', label: 'Ernia cervicale' },
  { href: '/postura-pontecorvo', label: 'Rieducazione posturale' },
  { href: '/blog/cervicale-smartphone', label: 'Smartphone e cervicale' },
  { href: '/blog/cervicale-errori', label: '5 errori che peggiorano la cervicale' },
]

export default function CervicalePontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Cervicale · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Cervicale a Pontecorvo:<br />
            <span className="text-primary">togli quel dolore al collo una volta per tutte</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Ti svegli con il collo rigido ogni mattina. Il mal di testa parte dalla nuca
            già prima del caffè. Non riesci a guardare a destra mentre guidi senza girare
            tutto il busto. Hai il formicolio alle mani che ti sveglia di notte.
            Massaggi, cuscino cervicale, antidolorifici — hai già provato tutto.
            Il dolore torna perché <strong className="text-foreground">la causa non è mai stata trovata.</strong>
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Sono Marco Turchetta, fisioterapista e osteopata a Pontecorvo.
            Nel mio studio trovo la causa specifica del tuo dolore cervicale e costruisco
            il percorso per risolverla — non per tenerla sotto controllo all&apos;infinito.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-base">
              👉 Prenota ora la valutazione <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-12">

          {/* SINTOMI */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">Riconosci questi sintomi?</h2>
            <p className="text-muted-foreground mb-5">Se stai annuendo, sei nel posto giusto.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Collo rigido appena ti alzi — non riesci a girare la testa completamente',
                'Mal di testa che inizia sulla nuca e sale verso la fronte ogni mattina',
                'Formicolio, bruciore o pesantezza che scende nel braccio o nelle dita',
                'Dolore tra le scapole che peggiora con le ore di schermo',
                'Non riesci a guidare senza girare tutto il corpo per guardare a destra',
                'Vertigini quando muovi la testa di scatto',
                'Torcicollo improvviso che ti ha bloccato il collo da un giorno all\'altro',
                'Il dolore peggiora nel pomeriggio dopo ore di lavoro al computer',
                'Non trovi una posizione comoda per dormire — ti svegli ogni notte',
                'Hai l\'impressione che il collo "scricchioli" continuamente',
              ].map(s => (
                <div key={s} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* IL PROBLEMA REALE */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il problema che nessuno ti ha ancora spiegato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Quando inclini la testa di 60° per guardare lo smartphone — la posizione in cui
              stai leggendo questa pagina — la tua colonna cervicale sopporta l&apos;equivalente
              di <strong className="text-foreground">27 chilogrammi</strong> invece di 5.
              Non per 10 minuti. Per ore. Ogni giorno. Per anni.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I muscoli sub-occipitali si accorciano cronicamente. La lordosi cervicale si riduce.
              I dischi vengono compressi in modo asimmetrico. Le faccette articolari si infiammano.
              I nervi vengono irritati. Il risultato è quello che senti ogni mattina.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ma lo smartphone è solo uno dei fattori. Postura al lavoro, guida, stress cronico,
              traumi passati mai risolti completamente, squilibri posturali globali — tutto concorre.
              Il punto è che ognuna di queste cause richiede un approccio diverso.
              Trattare la cervicale "in generale" con massaggi non risolve nulla perché
              non sta affrontando la tua causa specifica.
            </p>
          </div>

          {/* FORME */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Le forme che tratto — e come le tratto</h2>
            <div className="space-y-4">
              {[
                { t: 'Cervicalgia posturale cronica', badge: 'Molto comune', d: 'La più diffusa. Dolore al collo che peggiora con schermo, guida o lettura prolungata. La causa è quasi sempre nella postura globale — non solo nel collo. Tratto la cervicale ma lavoro anche sulla zona dorsale, sulle catene muscolari posteriori e sul rinforzo dei flessori profondi. Senza questo lavoro globale, la cervicalgia torna.' },
                { t: 'Cefalea cervicogenica', badge: 'Spesso mal diagnosta', d: 'Mal di testa che non è emicrania, ma viene confuso con essa. Parte dalla cervicale alta (C1-C2-C3) e sale verso la fronte o le tempie. Risponde molto bene alla terapia manuale specifica e all\'osteopatia cranio-sacrale. Molti pazienti con "emicrania" in realtà hanno questa condizione.', link: '/cefalea-pontecorvo' },
                { t: 'Ernia cervicale con formicolio al braccio', badge: 'Gestibile', d: 'Dolore, formicolio o debolezza che scendono dal collo al braccio fino alle dita. L\'ernia comprime una radice nervosa. Nella maggioranza dei casi si risolve con fisioterapia specifica + laser Nd:YAG + esercizi di decompressione. La chirurgia è raramente necessaria.', link: '/ernia-del-disco-pontecorvo' },
                { t: 'Torcicollo acuto', badge: 'Risolto in 1-3 sedute', d: 'Collo bloccato da un momento all\'altro — impossibile girare la testa. Con la terapia manuale si sblocca in 1-3 sedute. Ma il vero problema è capire perché continua a tornare. Quasi sempre c\'è una disfunzione osteopatica sottostante che non è mai stata trattata.', link: '/torcicollo-pontecorvo' },
                { t: 'Artrosi cervicale negli over 50', badge: 'Si gestisce bene', d: 'Rigidità e dolore cronico. Non si inverte l\'artrosi — ma non significa convivere con il dolore. Rinforzo muscolare progressivo, tecarterapia anti-infiammatoria e mobilizzazioni specifiche riducono il dolore in modo significativo e stabile.' },
                { t: 'Colpo di frusta post-incidente', badge: 'Trattare subito', d: 'Trauma cervicale da incidente, anche a bassa velocità. La fisioterapia precoce (entro le prime settimane) è fondamentale per evitare la cronicizzazione. Più aspetti, più il sistema nervoso impara il dolore — e più diventa difficile da trattare.' },
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

          {/* RISCHI */}
          <div className="p-6 bg-amber-50 rounded-2xl border border-amber-200">
            <h2 className="font-display text-xl font-semibold text-amber-900 mb-3 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" /> La cervicale ignorata peggiora — sempre
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed mb-4">
              "Ho la cervicale da vent&apos;anni, ci convivo." Lo sento spesso.
              Ma convivere non è uguale a stare bene — e nel tempo la situazione tende a peggiorare.
            </p>
            <ul className="space-y-2 text-sm text-amber-800">
              {[
                'I muscoli sub-occipitali si accorciano sempre di più — la cefalea diventa quotidiana',
                'La mobilità cervicale si riduce progressivamente — certi movimenti diventano impossibili',
                'L\'irritazione radicolare cronica può portare a formicolio cronico permanente alle braccia',
                'Le compensazioni posturali generano nuovi dolori a spalle, dorsale e lombare',
                'Il sonno peggiora — il dolore notturno diventa ricorrente e disturba il recupero',
              ].map(s => <li key={s}>→ {s}</li>)}
            </ul>
          </div>

          {/* TRATTAMENTO */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come tratto la cervicale nel mio studio</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              La valutazione cervicale nel mio studio include: mobilità segmentaria, test muscolari,
              valutazione della postura globale (non solo il collo), test neurologici se necessario,
              e anamnesi completa. Solo dopo costruisco il percorso.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Terapia manuale cervicale e mobilizzazioni segmentarie',
                'Osteopatia cranio-sacrale (cefalea e cervicale alta)',
                'Laser Nd:YAG per infiammazione articolare e radicolare',
                'Tecarterapia para-vertebrale cervicale',
                'TENS per nevralgie e formicolio cronico',
                'Rinforzo flessori profondi del collo',
                'Rieducazione posturale catene muscolari (Mézières)',
                'Taping neuromuscolare e bendaggio funzionale',
              ].map(i => (
                <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          {/* PERCHÉ SCEGLIERE MARCO */}
          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h2 className="font-display text-xl font-semibold mb-4">Perché scegliere Marco Turchetta per la cervicale</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              La cervicale è una delle condizioni dove la differenza tra "trattamento sintomatico"
              e "trattamento della causa" è più evidente. I massaggi tolgono la tensione per 24 ore.
              La terapia manuale specifica + lavoro sulle catene muscolari + correzione posturale
              producono risultati che durano.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ho una formazione sia fisioterapica che osteopatica — il che mi permette di trattare
              la cervicale su più livelli contemporaneamente: il problema articolare locale,
              le compensazioni posturali globali, e dove necessario le connessioni viscerali
              (stomaco e diaframma influenzano la cervicale più di quanto si pensi).
            </p>
          </div>

          {/* LINK CORRELATI */}
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
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card border-t border-border">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Basta sopportare il collo rigido ogni mattina.</h2>
          <p className="text-muted-foreground mb-7 text-lg">60 minuti di valutazione. Ti dico cosa sta succedendo e costruiamo il percorso per risolverlo.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-3">
            <Link href="/prenota" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base">
              👉 Prenota ora <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+393209631792" className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
            <a href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20dolore%20cervicale%20e%20vorrei%20una%20valutazione."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
