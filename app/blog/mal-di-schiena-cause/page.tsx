import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Mal di Schiena: le 5 Cause Più Frequenti | Blog Marco Turchetta',
  description: 'Non tutto il mal di schiena è uguale. Le 5 cause più comuni di lombalgia spiegate da Marco Turchetta, fisioterapista e osteopata a Pontecorvo. Come riconoscerle e come trattarle.',
  keywords: ['mal di schiena cause', 'lombalgia cause', 'fisioterapia mal di schiena', 'lombalgia Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/mal-di-schiena-cause' },
  openGraph: {
    title: 'Mal di Schiena: le 5 Cause Più Frequenti',
    description: 'Non tutto il mal di schiena è uguale. Le 5 cause più comuni di lombalgia spiegate da Marco Turchetta, fisioterapista e osteopata a Pontecorvo.',
    url: 'https://turchettamarco.com/blog/mal-di-schiena-cause',
  },
}

export default function Post() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-red-50 text-red-700 border-red-200">Patologie</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 1 marzo 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            Mal di schiena: le 5 cause più frequenti (e come riconoscerle)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Il mal di schiena è la prima causa di disabilità nel mondo occidentale. In Italia, l&apos;80% delle persone ne soffre almeno una volta nella vita. Eppure spesso viene gestito in modo identico indipendentemente dalla causa — con antidolorifici, riposo e massaggi. Il risultato? Passa, poi torna. Perché la causa non è mai stata trovata.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-10">

          <div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il primo step per risolvere davvero il mal di schiena è capire di che tipo di mal di schiena si tratta. Non è sempre la stessa cosa — e il trattamento cambia radicalmente a seconda della causa. Ecco le cinque cause più frequenti che tratto ogni giorno nel mio studio a Pontecorvo.
            </p>
          </div>

          {[
            {
              n: '1',
              title: 'Lombalgia muscolare da sovraccarico o postura',
              color: 'border-primary bg-primary/5',
              content: `È la forma più comune in assoluto. Ore in posizione seduta, movimento ripetuto scorretto, uno sforzo improvviso — il muscolo para-vertebrale va in spasmo per proteggere la colonna. Il dolore è diffuso, peggiora con i movimenti, migliora con il riposo.

Come si riconosce: dolore muscolare alla schiena senza irradiazione alla gamba, spesso con punto doloroso preciso alla palpazione, peggioramento con la flessione o l'estensione. Nessun sintomo neurologico.

Come si tratta: risponde molto bene alla terapia manuale e alla tecarterapia in poche sedute. L'errore tipico è limitarsi al trattamento del sintomo senza correggere la causa posturale — che porta le recidive.`,
            },
            {
              n: '2',
              title: 'Ernia del disco con o senza sciatalgia',
              color: 'border-orange-400 bg-orange-50/50',
              content: `L'ernia del disco lombare è la causa più temuta — ma spesso meno grave di quanto si pensi. Il nucleo polposo del disco fuoriesce e può comprimere una radice nervosa, generando il classico dolore che scende lungo la gamba (sciatalgia).

Come si riconosce: dolore alla schiena con irradiazione alla gamba, spesso oltre il ginocchio. Può esserci formicolio, bruciore o debolezza nella gamba o nel piede. Peggiora con la tosse, gli starnuti e la posizione seduta prolungata.

Come si tratta: nella maggior parte dei casi risponde bene al trattamento conservativo. Terapia manuale per ridurre la pressione discale, laser Nd:YAG per l'infiammazione radicolare, esercizi di stabilizzazione progressiva. La chirurgia è necessaria solo in una minoranza di casi.`,
            },
            {
              n: '3',
              title: 'Artrosi lombare (spondiloartrosi)',
              color: 'border-blue-400 bg-blue-50/50',
              content: `La degenerazione delle articolazioni della colonna lombare è una delle cause più frequenti di dolore cronico alla schiena negli over 50. Le faccette articolari si infiammano, si formano osteofiti (becchi ossei), lo spazio si riduce.

Come si riconosce: dolore lombare cronico con rigidità mattutina (dura oltre 30 minuti), peggioramento con l'estensione della schiena e con la stazione eretta prolungata, miglioramento con il movimento dopo il riscaldamento.

Come si tratta: l'artrosi non si inverte, ma si gestisce molto bene. Il rinforzo muscolare è il fattore più importante — una muscolatura forte scarica le articolazioni degenerative. Tecarterapia e magnetoterapia riducono l'infiammazione e il dolore. L'obiettivo è mantenere la funzione e la qualità della vita.`,
            },
            {
              n: '4',
              title: 'Sindrome faccettaria',
              color: 'border-purple-400 bg-purple-50/50',
              content: `Le faccette articolari sono le piccole articolazioni posteriori che collegano le vertebre. Quando si infiammano — per artrosi, per un movimento brusco o per una postura scorretta prolungata — generano un dolore specifico che si distingue dalla lombalgia muscolare.

Come si riconosce: dolore lombare che peggiora con l'estensione della schiena (piegarsi all'indietro) e con le rotazioni. Spesso unilaterale o con una componente glutea. Migliora in flessione e in posizione seduta con la schiena dritta.

Come si tratta: le manipolazioni vertebrali e le mobilizzazioni specifiche sono le tecniche più efficaci per la sindrome faccettaria acuta. Il laser Nd:YAG riduce l'infiammazione locale. In fase cronica, il rinforzo del core è fondamentale per prevenire le recidive.`,
            },
            {
              n: '5',
              title: 'Lombalgia posturale da squilibri delle catene muscolari',
              color: 'border-teal-400 bg-teal-50/50',
              content: `È la causa più sottovalutata. Nessuna ernia, nessuna artrosi, nessuna alterazione visibile alla RMN — eppure il dolore c'è, spesso da anni. È il segnale di uno squilibrio nelle catene muscolari: alcuni muscoli troppo corti e retratti, altri troppo deboli. La catena muscolare posteriore — dall'occipite ai talloni — è quella più frequentemente coinvolta.

Come si riconosce: dolore diffuso, che cambia posizione, che migliora e peggiora in modo poco prevedibile. Spesso associato a stress, affaticamento o periodi di sedentarietà. Gli esami strumentali sono negativi o mostrano alterazioni non correlabili con i sintomi.

Come si tratta: è la condizione che risponde meglio al Metodo Mézières e all'osteopatia. Il lavoro sulle catene muscolari globali, con posture mantenute e respirazione specifica, porta spesso a risultati duraturi che anni di massaggi non hanno ottenuto.`,
            },
          ].map(({ n, title, color, content }) => (
            <div key={n} className={`p-6 rounded-2xl border-l-4 ${color}`}>
              <h2 className="font-display text-xl font-semibold text-foreground mb-4">
                {n}. {title}
              </h2>
              {content.split('\n\n').map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-3 last:mb-0">{para}</p>
              ))}
            </div>
          ))}

          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Come faccio la diagnosi nel mio studio</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              La prima seduta dura circa 60 minuti. Racconto la tua storia clinica in dettaglio — quando è iniziato il dolore, cosa lo peggiora e cosa lo migliora, i tuoi precedenti infortuni e interventi, le tue abitudini posturali. Poi eseguo una valutazione clinica con test specifici per la colonna lombare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Solo dopo la valutazione so di che tipo di lombalgia si tratta — e posso costruire un percorso che abbia senso. Non esiste un protocollo standard che funziona per tutte le schiena. Esiste il tuo problema specifico, con la sua causa specifica.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/mal-di-schiena-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Approfondisci: mal di schiena a Pontecorvo
            </Link>
          </div>

          <ArticleExtras slug="mal-di-schiena-cause" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Torna al blog
            </Link>
          </div>

        </div>
      </article>
    </main>
  )
}
