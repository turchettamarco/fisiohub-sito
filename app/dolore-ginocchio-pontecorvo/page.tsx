import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, AlertCircle, MessageCircle } from 'lucide-react'
import { BlogLinks } from '@/components/blog/blog-links'

export const metadata: Metadata = {
  title: 'Dolore al Ginocchio a Pontecorvo | Fisioterapia — Marco Turchetta',
  description: 'Hai dolore al ginocchio a Pontecorvo? Marco Turchetta fisioterapista tratta artrosi, menisco, LCA, tendinite rotulea, riabilitazione post-protesi. Prenota la valutazione.',
  keywords: ['dolore ginocchio Pontecorvo','fisioterapia ginocchio Pontecorvo','artrosi ginocchio Pontecorvo','riabilitazione ginocchio Pontecorvo','menisco Pontecorvo','protesi ginocchio riabilitazione Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/dolore-ginocchio-pontecorvo' },
}

const clusterLinks = [
  { href: '/protesi-ginocchio-riabilitazione-pontecorvo', label: 'Riabilitazione protesi ginocchio' },
  { href: '/riabilitazione-anca-pontecorvo', label: 'Riabilitazione anca' },
  { href: '/epicondilite-pontecorvo', label: 'Epicondilite' },
  { href: '/blog/dolore-ginocchio-cosa-fare', label: 'Dolore al ginocchio: cosa fare subito' },
]

export default function DoloreGinocchioPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Dolore al Ginocchio · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Dolore al ginocchio a Pontecorvo:<br />
            <span className="text-primary">torna a camminare, salire le scale, fare sport</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Il ginocchio fa male salendo le scale. Scatta quando ti alzi dalla sedia.
            È gonfio dopo una camminata. Ti impedisce di fare quello che ami —
            correre, giocare con i figli, lavorare in piedi tutto il giorno.
            Ogni tipo di dolore al ginocchio ha una causa precisa — e una causa precisa
            ha un trattamento preciso.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-base">
              👉 Prenota la valutazione <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-12">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Le cause di dolore al ginocchio che tratto</h2>
            <div className="space-y-4">
              {[
                { t: 'Artrosi del ginocchio (gonartrosi)', badge: 'Molto comune', d: 'La cartilagine si consuma — il dolore aumenta progressivamente con il movimento. Non si inverte l\'artrosi, ma si gestisce molto bene: rinforzo muscolare progressivo, tecarterapia antinfiammatoria e laser Nd:YAG riducono il dolore in modo significativo. Molti pazienti rimandano la protesi di anni con la giusta fisioterapia.', link: '/protesi-ginocchio-riabilitazione-pontecorvo' },
                { t: 'Lesione del menisco', badge: 'Trauma o usura', d: 'Dolore laterale o mediale, spesso con sensazione di blocco o scatto. Può essere acuta da trauma o degenerativa da usura progressiva. Non tutte le lesioni richiedono chirurgia — molte si gestiscono benissimo con fisioterapia.' },
                { t: 'Lesione del legamento crociato (LCA)', badge: 'Post-trauma', d: 'Il "crack" durante lo sport — instabilità, gonfiore rapido. Richiede valutazione immediata. La riabilitazione è fondamentale sia prima che dopo l\'eventuale chirurgia — i risultati dipendono quasi interamente dalla qualità del percorso fisioterapico.' },
                { t: 'Sindrome femoro-rotulea', badge: 'Dolore anteriore', d: 'Dolore sotto o attorno alla rotula, tipicamente dopo la corsa o con le scale. Causa principale: squilibrio muscolare tra vasto mediale e laterale. Risponde molto bene a fisioterapia specifica + esercizi di rinforzo VMO.' },
                { t: 'Tendinopatia rotulea', badge: 'Sportivi', d: 'Dolore sotto la rotula, peggiora saltando o correndo. Il riposo assoluto non risolve nulla — l\'esercizio eccentrico specifico + laser Nd:YAG è il trattamento con la più alta evidenza scientifica per questa condizione.' },
                { t: 'Riabilitazione post-protesi di ginocchio', badge: 'Post-chirurgico', d: 'Dopo la sostituzione protesica, la fisioterapia determina il risultato finale. Un\'artroprotesi senza riabilitazione adeguata porta spesso a risultati deludenti. Il percorso riabilitativo va iniziato presto e progredito con attenzione.', link: '/protesi-ginocchio-riabilitazione-pontecorvo' },
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

          <div className="flex items-start gap-3 p-5 bg-red-50 rounded-xl border border-red-200">
            <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-800 mb-1">Quando andare subito al Pronto Soccorso</p>
              <p className="text-sm text-red-700">Dolore intensissimo con impossibilità di caricare il peso, deformità visibile, gonfiore rapido entro un'ora dal trauma, blocco completo del ginocchio, sospetta frattura dopo caduta o incidente. Questi segnali richiedono valutazione medica urgente.</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come tratto il dolore al ginocchio</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Valutazione clinica completa: stabilità, mobilità, forza muscolare, gait analysis',
                'Terapia manuale articolare e miotensiva',
                'Laser Nd:YAG per infiammazione articolare profonda',
                'Tecarterapia Globus per artrosi e tendinopatie',
                'Rinforzo progressivo quadricipite e ischio-crurali',
                'Esercizi propriocettivi per stabilità funzionale',
                'Taping neuromuscolare e bendaggio funzionale',
                'Progressione al gesto sportivo (per atleti)',
              ].map(i => (
                <div key={i} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Problemi correlati — stesso cluster</h3>
            <div className="flex flex-wrap gap-2">
              {clusterLinks.map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm px-3 py-1.5 bg-card border border-border rounded-lg hover:border-primary/40 hover:text-primary transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BlogLinks slugs={['dolore-ginocchio-cosa-fare']} />

      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Il ginocchio non migliora aspettando.</h2>
          <p className="text-muted-foreground mb-6">60 minuti di valutazione. Capisco cosa sta succedendo e costruiamo il percorso.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              👉 Prenota ora <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20dolore%20al%20ginocchio%20e%20vorrei%20una%20valutazione." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
