import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Colpo della Strega: Cosa Fare nelle Prime 72 Ore | Marco Turchetta Pontecorvo',
  description: 'Lombalgia acuta e blocco della schiena: cosa fare davvero nelle prime ore, cosa evitare e perché il riposo a letto peggiora il recupero. Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
  keywords: ['colpo della strega', 'lombalgia acuta cosa fare', 'blocco lombare Pontecorvo', 'mal di schiena acuto', 'schiena bloccata rimedi'],
  alternates: { canonical: 'https://turchettamarco.com/blog/colpo-della-strega-72-ore' },
  openGraph: {
    type: 'article',
    title: 'Colpo della Strega: Cosa Fare nelle Prime 72 Ore | Marco Turchetta Pontecorvo',
    description: 'Lombalgia acuta e blocco della schiena: cosa fare davvero nelle prime ore, cosa evitare e perché il riposo a letto peggiora il recupero. Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
    url: 'https://turchettamarco.com/blog/colpo-della-strega-72-ore',
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
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 20 luglio 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Fisioterapista a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Colpo della strega: cosa fare nelle prime 72 ore
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ti sei chinato per raccogliere una penna e la schiena si è bloccata. Non è la penna
            il problema: è l&apos;ultima goccia di qualcosa che stava succedendo da settimane.
            Ecco cosa fare — e soprattutto cosa non fare — nei tre giorni che contano di più.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa è successo davvero</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il colpo della strega è quasi sempre una <strong className="text-foreground">disfunzione
              articolare acuta con spasmo muscolare di protezione</strong>. Una piccola articolazione
              vertebrale perde improvvisamente la sua libertà di scorrimento; il corpo reagisce
              contraendo violentemente la muscolatura profonda per impedire che si muova ancora.
              Quel blocco che senti non è un danno: è una difesa.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ed è per questo che il quadro fa paura molto più di quanto sia grave. Il dolore è
              intenso, spesso impressionante, ma nella grande maggioranza dei casi non c&apos;è
              nessuna lesione strutturale. Il movimento è bloccato in una direzione precisa e quasi
              libero nell&apos;altra — un dettaglio che, da solo, distingue il blocco articolare da
              situazioni più serie.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Le prime 72 ore, ora per ora</h2>
            <div className="space-y-3">
              {[
                {
                  n: '1',
                  title: 'Non metterti a letto per giorni',
                  testo: 'È l\'errore più diffuso e il più dannoso. Il riposo assoluto oltre le 24-48 ore rallenta il recupero, indebolisce la muscolatura e prolunga il dolore. Sdraiati quando il dolore è troppo forte, ma alzati e fai qualche passo ogni ora, anche solo in casa. Il movimento dosato è la medicina, non il nemico.',
                },
                {
                  n: '2',
                  title: 'Trova la posizione che scarica',
                  testo: 'Nelle prime ore serve una posizione che riduca la pressione sulla zona. Le due che funzionano quasi sempre: sdraiato sulla schiena con le gambe piegate e i polpacci appoggiati su una sedia o su dei cuscini, oppure su un fianco in posizione fetale con un cuscino tra le ginocchia. Restaci 15-20 minuti, poi cambia.',
                },
                {
                  n: '3',
                  title: 'Caldo, non ghiaccio',
                  testo: 'Nel colpo della strega la componente dominante è lo spasmo muscolare, non l\'infiammazione acuta di un trauma. Il calore — borsa dell\'acqua calda o fascia termica per 20 minuti, più volte al giorno — rilassa la muscolatura e in genere dà più sollievo del freddo. Se il tuo corpo ti dice il contrario, ascoltalo: usa quello che ti allevia.',
                },
                {
                  n: '4',
                  title: 'Muoviti nei limiti del non-dolore',
                  testo: 'Piccoli movimenti dolci e ripetuti, tante volte al giorno, senza mai entrare nel dolore acuto. Da sdraiato: portare lentamente un ginocchio verso il petto, oscillare le gambe piegate a destra e sinistra di pochi centimetri. Servono a dire al sistema nervoso che muoversi è sicuro, ed è esattamente il messaggio che serve.',
                },
                {
                  n: '5',
                  title: 'Niente manovre fai-da-te',
                  testo: 'Non farti "sbloccare" da chi non ha una formazione sanitaria, non farti scrocchiare la schiena da amici o parenti, non tentare torsioni forzate per sentire il clac. Su una muscolatura in spasmo acuto una manovra sbagliata può peggiorare il quadro anche di parecchio.',
                },
                {
                  n: '6',
                  title: 'Antidolorifici sì, ma con criterio',
                  testo: 'Se il medico te li ha prescritti, prenderli nella fase acuta ha senso: abbassano il dolore quanto basta per permetterti di muoverti, e muoverti è ciò che accelera il recupero. Il problema non è il farmaco in sé — è usarlo per mesi come unica strategia, mascherando un problema che nessuno sta risolvendo.',
                },
              ].map(({ n, title, testo }) => (
                <div key={n} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{n}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mt-1.5">{title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed pl-14">{testo}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-card rounded-xl border-l-4 border-l-amber-500 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Quando invece devi chiamare il medico</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Difficoltà a controllare urina o feci, o perdita di sensibilità nella zona genitale: è un&apos;urgenza vera, non aspettare</li>
              <li>Debolezza della gamba o del piede (il piede &quot;cade&quot; camminando)</li>
              <li>Dolore comparso dopo una caduta o un trauma importante</li>
              <li>Febbre, perdita di peso non spiegata, dolore notturno che non cambia in nessuna posizione</li>
              <li>Storia personale di tumore o osteoporosi severa</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Perché è successo (e perché ricapiterà)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nel corpo vale una regola semplice: quando un&apos;articolazione perde mobilità, quella
              accanto deve muoversi il doppio per compensare. E la zona che si è irrigidita quasi
              non fa male — a far male è quella vicina, costretta a lavorare per due.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              È il motivo per cui il colpo della strega arriva quasi sempre &quot;dal nulla&quot;
              dopo un gesto banale: il terreno era già preparato da mesi. Un bacino che ha perso
              mobilità da un lato — dopo una vecchia distorsione di caviglia, un parto, una
              cicatrice addominale — costringe la zona lombare bassa a compensare a ogni passo.
              Un giorno il sistema non regge più e si blocca.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              La conseguenza pratica è che risolvere l&apos;episodio acuto e fermarsi lì non basta:
              se non si va a cercare <em>dove</em> manca il movimento, l&apos;episodio si ripresenta.
              Ed è per questo che una valutazione seria non guarda solo la schiena, ma anche anche,
              bacino, torace, respirazione e appoggio dei piedi.
            </p>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Quanto ci vuole e quando venire</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un episodio acuto senza coinvolgimento nervoso migliora in modo netto nel giro di
              due o tre settimane. Non serve aspettare quel termine per farsi vedere: intervenire
              nei primi giorni riduce lo spasmo, accorcia i tempi e — soprattutto — permette di
              capire da dove è partito. Se invece il dolore scende sotto il ginocchio con
              formicolii, la valutazione va fatta prima, perché il quadro è diverso e i tempi
              si allungano.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/mal-di-schiena-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Mal di schiena a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="colpo-della-strega-72-ore" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
