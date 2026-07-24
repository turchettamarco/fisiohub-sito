import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User, AlertCircle } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Dolore al Ginocchio: Cosa Fare Subito (e Cosa Evitare) | Marco Turchetta',
  description: 'Ginocchio gonfio, dolore sulle scale, scatto quando ti alzi. Cosa fare nelle prime 48 ore, quando andare dal fisioterapista e cosa assolutamente evitare. Marco Turchetta Pontecorvo.',
  keywords: ['dolore ginocchio cosa fare', 'ginocchio gonfio rimedi', 'dolore ginocchio fisioterapista', 'dolore ginocchio Pontecorvo', 'riabilitazione ginocchio Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/dolore-ginocchio-cosa-fare' },
  openGraph: {
    type: 'article',
    title: 'Dolore al Ginocchio: Cosa Fare Subito (e Cosa Evitare) | Marco Turchetta',
    description: 'Ginocchio gonfio, dolore sulle scale, scatto quando ti alzi. Cosa fare nelle prime 48 ore, quando andare dal fisioterapista e cosa assolutamente evitare. Marco Turchetta Pontecorvo.',
    url: 'https://turchettamarco.com/blog/dolore-ginocchio-cosa-fare',
    siteName: 'Marco Turchetta Fisioterapia e Osteopatia',
    locale: 'it_IT',
  },
}

export default function Post() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200">Consigli</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 22 marzo 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Fisioterapista a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Dolore al ginocchio: cosa fare subito (e cosa evitare)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Il ginocchio ha smesso di collaborare. Fa male sulle scale, scatta quando ti alzi,
            è gonfio dopo una camminata. Forse è successo da un giorno all&apos;altro,
            forse si è instaurato lentamente nel tempo.
            In entrambi i casi, le prime 48-72 ore sono importanti:
            quello che fai (o non fai) in questo lasso di tempo può fare la differenza
            tra un recupero rapido e un problema che si trascina per mesi.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          {/* PS subito */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Prima di tutto: quando andare subito al Pronto Soccorso</h2>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <p className="font-semibold text-red-800 mb-2 flex items-center gap-2"><AlertCircle className="h-5 w-5" /> Questi segnali richiedono il PS</p>
              <ul className="space-y-1.5 text-sm text-red-800">
                {[
                  "Dolore intensissimo e impossibilità totale di caricare il peso",
                  "Deformità visibile del ginocchio — qualcosa non ha la forma giusta",
                  "Gonfiore molto rapido (entro un'ora) dopo un trauma — emartro",
                  "Blocco del ginocchio — impossibile piegarlo o distenderlo completamente",
                  "Sensazione che il ginocchio 'ceda' o sia completamente instabile dopo un trauma",
                  "Sospetta frattura — trauma ad alta energia (caduta, incidente)",
                ].map(s => <li key={s}>⚠ {s}</li>)}
              </ul>
            </div>
          </div>

          {/* PRICE */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Le prime 48 ore: il protocollo PRICE (spiega ogni lettera)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Per dolore acuto al ginocchio da trauma, distorsione o infiammazione improvvisa,
              il protocollo PRICE è il punto di partenza corretto.
              Non è un protocollo vecchio — è quello che funziona nella fase acuta.
            </p>
            <div className="space-y-3">
              {[
                { l: 'P — Protection', d: 'Proteggi l\'articolazione. Non vuol dire immobilizzarla totalmente — significa evitare movimenti che provocano dolore acuto. Cammina se puoi farlo senza dolore intenso. Usa un bastone se necessario per scaricare il peso.' },
                { l: 'R — Rest', d: 'Riposo relativo, non assoluto. Il ginocchio ha bisogno di ridurre il carico eccessivo, ma l\'immobilità totale rallenta il recupero e indebolisce il quadricipite — il muscolo più importante per la stabilità del ginocchio.' },
                { l: 'I — Ice', d: 'Ghiaccio avvolto in un asciugamano (mai diretto sulla pelle — causa ustioni), 15 minuti ogni 2 ore nelle prime 24-48 ore. Riduce gonfiore, dolore e temperatura locale. Dopo 48-72 ore, si può valutare il calore se il gonfiore si è ridotto.' },
                { l: 'C — Compression', d: 'Una fascia elastica non troppo stretta aiuta a controllare il gonfiore e dà una leggera stabilità percettiva. Toglila la notte e quando non sei in piedi. Se la fascia causa formicolio o diventa molto stretta per il gonfiore, rimuovila.' },
                { l: 'E — Elevation', d: 'Tieni il ginocchio sollevato rispetto al cuore quando sei seduto o sdraiato. Un cuscino sotto il polpaccio è sufficiente. Questo aiuta il ritorno venoso e riduce l\'accumulo di liquido nell\'articolazione.' },
              ].map(({ l, d }) => (
                <div key={l} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-primary">{l.split(' ')[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{l}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cause */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Le cause più frequenti di dolore al ginocchio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Non tutti i dolori al ginocchio sono uguali. Prima di trattare, bisogna capire cosa sta succedendo.
            </p>
            <div className="space-y-3">
              {[
                { t: 'Distorsione del legamento (crociato o collaterale)', d: 'Tipica negli sport che richiedono cambi di direzione. Può essere un semplice stiramento o una lesione completa. Richiede valutazione fisioterapica + eventuale risonanza magnetica per stabilire la gravità.' },
                { t: 'Lesione del menisco', d: 'Dolore laterale o mediale, spesso con sensazione di "blocco" o scatto. Può essere acuta da trauma o degenerativa da usura. Non tutte le lesioni meniscali richiedono chirurgia — molte si gestiscono molto bene con fisioterapia.' },
                { t: 'Sindrome femoro-rotulea', d: 'Dolore anteriore al ginocchio, tipicamente dopo la corsa o con le scale. Causa principale: squilibrio muscolare tra quadricipite interno ed esterno, o retropiede in valgismo. Risponde molto bene alla fisioterapia + esercizi specifici.' },
                { t: 'Artrosi (gonartrosi)', d: 'Degenerazione della cartilagine. Non si inverte, ma si gestisce molto bene. Rinforzo muscolare, controllo del peso e fisioterapia riducono il dolore e possono rimandare o evitare la chirurgia protesica per anni.' },
                { t: 'Tendinopatia rotulea', d: 'Dolore sotto la rotula, tipicamente negli sportivi. Spesso trattato male con riposo assoluto — che non risolve nulla. L\'esercizio eccentrico specifico + laser Nd:YAG è il trattamento con la migliore evidenza scientifica.' },
                { t: 'Borsiti', d: 'Infiammazione delle borse sierose che ammortizzano l\'articolazione. Comune in chi fa lavori in ginocchio o in chi pratica certi sport. Si risolve bene con tecarterapia e laser.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Il mito del riposo */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Il mito del riposo totale: perché fa male quanto il dolore
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              "Stai fermo finché non passa" è il consiglio peggiore che si può dare per il ginocchio.
              Il quadricipite — il muscolo che stabilizza il ginocchio — perde forza a una velocità
              sorprendente con il riposo: studi dimostrano una perdita del 3-5% di forza al giorno
              con l&apos;immobilità completa. In una settimana puoi perdere un quinto della tua forza muscolare.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un ginocchio con quadricipite debole è instabile, vulnerabile e più a rischio di ricadute.
              Il riposo assoluto non guarisce il ginocchio — lo indebolisce.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La fisioterapia moderna non ti mette a riposo — ti aiuta a muoverti nel modo giusto,
              con il carico giusto, nella fase giusta del recupero.
              L&apos;obiettivo è riportarti alla funzione completa, non tenerti fermo indefinitamente.
            </p>
          </div>

          {/* Quando fisioterapista */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Quando andare dal fisioterapista (non aspettare oltre)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Anche senza trauma evidente, il ginocchio vale una valutazione se:</p>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Il dolore non migliora dopo 2 settimane di riposo relativo e protocollo PRICE",
                "Il dolore peggiora salendo le scale o dopo la seduta prolungata",
                "C'è gonfiore persistente senza causa traumatica apparente",
                "Senti scrosci, scatti o sensazione di 'blocco' nell'articolazione",
                "Il dolore ti sveglia di notte o limita significativamente le attività quotidiane",
                "Hai già avuto episodi simili in passato — il problema tende a ripresentarsi e aggravarsi",
                "Stai per iniziare una terapia riabilitativa dopo un intervento chirurgico al ginocchio",
              ].map(s => (
                <li key={s} className="flex gap-2">
                  <span className="text-primary font-bold flex-shrink-0">→</span>{s}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-2">La riabilitazione post-chirurgica al ginocchio</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Se hai avuto un intervento al ginocchio — protesi, LCA, menisco, artroscopia —
              la fisioterapia post-operatoria non è opzionale: è la parte più importante del recupero.
              La chirurgia fa la sua parte, ma è la riabilitazione che determina il risultato finale.
              Nel mio studio a Pontecorvo seguo percorsi post-chirurgici strutturati con progressione
              del carico precisa e obiettivi funzionali misurabili.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/dolore-ginocchio-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Dolore al ginocchio a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="dolore-ginocchio-cosa-fare" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
