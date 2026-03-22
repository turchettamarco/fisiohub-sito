import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Onde d\'Urto a Pontecorvo | ESWT — Marco Turchetta (Prossimamente)',
  description: 'Onde d\'urto extracorporee (ESWT) a Pontecorvo (FR). Presto disponibili nello studio di fisioterapia di Marco Turchetta. Indicazioni: tendinite calcifica, fascite plantare, epicondilite.',
  keywords: ['onde d\'urto Pontecorvo', 'ESWT Pontecorvo', 'onde d\'urto fisioterapia Pontecorvo', 'tendinite calcifica Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/onde-d-urto-pontecorvo' },
}

export default function OndeDUrto() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Prossimamente</span>
          </div>
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Onde d'Urto · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">Onde d'Urto a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Sto completando la dotazione del mio studio di fisioterapia a Pontecorvo con un apparecchio per onde d'urto extracorporee (ESWT). Presto disponibili — iscriviti alla lista d'attesa su WhatsApp per essere tra i primi.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="https://wa.me/393209631792?text=Ciao Marco, sono interessato alle onde d'urto. Quando saranno disponibili?" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Lista d'attesa WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Cosa sono le onde d'urto extracorporee</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le onde d'urto extracorporee (ESWT — Extracorporeal Shock Wave Therapy) sono onde di pressione meccanica generate all'esterno del corpo e focalizzate sulla zona da trattare. Non sono elettricità, non sono laser, non sono ultrasuoni: sono onde acustiche ad alta energia con caratteristiche fisiche specifiche.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quello che le rende straordinarie è la base scientifica: le onde d'urto hanno il più alto livello di evidenza nella letteratura fisioterapica per le tendinopatie croniche resistenti ad altri trattamenti. Non è una terapia alternativa — è una terapia clinicamente validata con decenni di ricerca alle spalle.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Come agiscono le onde d'urto sui tessuti</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L'impulso meccanico delle onde d'urto stimola i meccanorecettori cellulari, scatenando una cascata biologica di grande valore terapeutico. Tra gli effetti principali:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li><strong className="text-foreground">Neovascolarizzazione</strong> — le onde d'urto stimolano la formazione di nuovi vasi sanguigni (VEGF, TGF-β) nella zona trattata, migliorando l'apporto di ossigeno e nutrienti ai tendini cronicamente degenerati.</li>
              <li><strong className="text-foreground">Dissoluzione delle calcificazioni</strong> — l'energia meccanica frammenta i depositi calcifici nei tendini, permettendone il riassorbimento naturale.</li>
              <li><strong className="text-foreground">Modulazione del dolore</strong> — riducono la concentrazione di sostanza P (mediatore del dolore) e desensibilizzano le terminazioni nervose nella zona trattata.</li>
              <li><strong className="text-foreground">Rimodellamento del collagene</strong> — stimolano la produzione di collagene di tipo I, migliorando la struttura del tendine degenerato.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Per quali patologie sono indicate le onde d'urto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Le onde d'urto sono la terapia di elezione (o una delle prime scelte) per:</p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Tendinite calcifica di spalla</strong> — la calcificazione del sovraspinato è l'indicazione principe. In molti casi le onde d'urto evitano l'intervento chirurgico.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Fascite plantare cronica</strong> — dolore al tallone che non cede ad altri trattamenti. Le onde d'urto hanno un tasso di successo molto alto in questa condizione.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Epicondilite laterale (gomito del tennista)</strong> — particolarmente nelle forme croniche resistenti alla fisioterapia convenzionale.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Tendinopatia achillea</strong> — sia nel corpo del tendine che nell'inserzione calcaneare.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Tendinopatia rotulea</strong> — il "ginocchio del saltatore", frequente negli sportivi.</span></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibond text-foreground mb-4">Quando saranno disponibili le onde d'urto a Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sto finalizzando l'acquisizione dell'apparecchio. Se stai aspettando questo trattamento, scrivimi su WhatsApp per essere inserito nella lista d'attesa: sarai tra i primi ad essere contattato quando il servizio sarà disponibile.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nel frattempo, posso già aiutarti con le altre tecnologie disponibili nello studio — laser Nd:YAG Zaira, tecarterapia Globus Diacare 5000, terapia manuale e osteopatia. Spesso anche senza le onde d'urto è possibile ottenere risultati significativi sulle tendinopatie croniche.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Vuoi essere avvisato quando le onde d'urto saranno disponibili?</h2>
          <p className="text-muted-foreground mb-6">Scrivimi su WhatsApp. Nel frattempo possiamo già valutare il tuo problema e capire come aiutarti adesso.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/393209631792?text=Ciao Marco, mi interessa sapere quando le onde d'urto saranno disponibili." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              Iscriviti alla lista <ArrowRight className="h-4 w-4" />
            </a>
            <Link href="/prenota" className="inline-flex items-center gap-2 border border-border px-7 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Prenota una valutazione
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
