import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Epicondilite a Pontecorvo | Gomito del Tennista — Marco Turchetta',
  description: 'Epicondilite (gomito del tennista) a Pontecorvo. Marco Turchetta fisioterapista: laser Nd:YAG, tecarterapia, esercizio eccentrico. Risolvi il dolore al gomito senza chirurgia. Prenota.',
  keywords: ['epicondilite Pontecorvo','gomito del tennista Pontecorvo','dolore gomito Pontecorvo','fisioterapia epicondilite Pontecorvo','laser epicondilite Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/epicondilite-pontecorvo' },
}

export default function EpicondilitePontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Cluster Gomito · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Epicondilite a Pontecorvo:<br />
            <span className="text-primary">il gomito del tennista si risolve senza chirurgia</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Dolore al gomito quando strevi qualcosa, quando sollevi una tazza,
            quando dai la mano. Peggiora con il mouse del computer, con la vite,
            con qualsiasi presa. Non ce la fai più.
            L&apos;epicondilite è una delle tendinopatie che risponde meglio alla fisioterapia
            — se fatta nel modo giusto. Il riposo assoluto non risolve nulla: spesso peggiora.
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
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Cos&apos;è davvero l&apos;epicondilite — e perché non passa</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L&apos;epicondilite laterale (il cosiddetto "gomito del tennista") non è solo
              un&apos;infiammazione — è una <strong className="text-foreground">tendinopatia degenerativa</strong>.
              Il tendine dei muscoli estensori del polso, nel punto di inserzione sull&apos;epicondilo laterale,
              si degrada progressivamente a causa del sovraccarico ripetuto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il riposo fa calare il dolore temporaneamente — ma non ripara il tendine.
              Appena riprendi l&apos;attività, il dolore torna identico. Questo è il motivo
              per cui molte persone convivono con l&apos;epicondilite per mesi o anni
              senza mai risolverla davvero.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Non è necessaria la chirurgia nella grande maggioranza dei casi.
              L&apos;esercizio eccentrico specifico, il laser Nd:YAG e la tecarterapia
              producono risultati eccellenti anche nelle epicondiliti croniche resistenti.
            </p>
          </div>

          <div className="flex items-start gap-3 p-5 bg-amber-50 rounded-xl border border-amber-200">
            <AlertCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 mb-1">L&apos;errore più comune con l&apos;epicondilite</p>
              <p className="text-sm text-amber-800">Il riposo assoluto e gli antinfiammatori (ibuprofene, ketoprofene) possono ridurre il dolore acuto, ma non riparano il tendine. Molti pazienti passano mesi alternando riposo e farmaci senza mai migliorare. Il tendine degenerato ha bisogno di stimolo meccanico controllato per rigenerarsi — non di immobilità.</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Sintomi tipici dell&apos;epicondilite</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Dolore all\'epicondilo laterale (sporgenza ossea esterna del gomito)',
                'Peggiora stringendo oggetti: borsa, tazza, bottone, chiave',
                'Dolore con estensione del polso contro resistenza',
                'Peggiora con il mouse del computer dopo ore di lavoro',
                'Irradiazione lungo l\'avambraccio fino al polso',
                'Debolezza nella presa degli oggetti',
                'Dura da settimane o mesi con riacutizzazioni frequenti',
              ].map(s => (
                <div key={s} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Come la tratto — il protocollo che funziona</h2>
            <div className="space-y-4">
              {[
                { t: 'Laser Nd:YAG Zaira', d: 'Il laser da 1064 nm penetra in profondità nel tendine, stimola la rigenerazione cellulare (biostimolazione) e riduce l\'infiammazione locale. 6-10 sedute producono risultati significativi anche nelle epicondiliti croniche.' },
                { t: 'Tecarterapia Globus Diacare 5000', d: 'Diatermia resistiva specifica per il tendine. Aumenta la microcircolazione locale, stimola la produzione di collagene, riduce il dolore. Particolarmente efficace nella fase di carico progressivo.' },
                { t: 'Esercizio eccentrico specifico', d: 'Il pilastro del trattamento. Esercizi mirati in eccentrica degli estensori del polso: il tendine viene caricato progressivamente, stimolando la rigenerazione tissutale. Tecnica non dolorosa ma progressiva — l\'obiettivo è che il tendine si rinforzi.' },
                { t: 'Terapia manuale e mobilizzazioni', d: 'Mobilizzazione del gomito, del polso e della colonna cervicale (che contribuisce frequentemente al dolore attraverso la radice C6). Tecniche di neurodynamics per il nervo radiale.' },
                { t: 'Bendaggio funzionale', d: 'Taping neuromuscolare e bendaggio specifico per ridurre il carico sull\'epicondilo durante le attività quotidiane, permettendo di continuare a lavorare durante il percorso.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Correlato — cluster arti superiori</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { href: '/dolore-spalla-pontecorvo', label: 'Dolore alla spalla' },
                { href: '/laser-yag-pontecorvo', label: 'Laser Nd:YAG — come funziona' },
                { href: '/dolore-ginocchio-pontecorvo', label: 'Dolore al ginocchio' },
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
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Basta convivere con il dolore al gomito.</h2>
          <p className="text-muted-foreground mb-6">L&apos;epicondilite si risolve. Il percorso giusto fa la differenza tra mesi e settimane.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              👉 Prenota ora <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20l%27epicondilite%20e%20vorrei%20una%20valutazione." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
