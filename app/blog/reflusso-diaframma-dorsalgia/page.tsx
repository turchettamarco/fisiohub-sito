import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Reflusso, Digestione e Dolore tra le Scapole: il Ruolo del Diaframma | Marco Turchetta',
  description: 'Dorsalgia che non passa, reflusso e digestione lenta: come il diaframma collega respirazione, stomaco e colonna dorsale. Osteopatia viscerale a Pontecorvo con Marco Turchetta.',
  keywords: ['osteopatia viscerale Pontecorvo', 'reflusso gastroesofageo osteopatia', 'dolore dorsale digestione', 'diaframma trattamento', 'ernia iatale osteopatia'],
  alternates: { canonical: 'https://turchettamarco.com/blog/reflusso-diaframma-dorsalgia' },
  openGraph: {
    type: 'article',
    title: 'Reflusso, Digestione e Dolore tra le Scapole: il Ruolo del Diaframma | Marco Turchetta',
    description: 'Dorsalgia che non passa, reflusso e digestione lenta: come il diaframma collega respirazione, stomaco e colonna dorsale. Osteopatia viscerale a Pontecorvo con Marco Turchetta.',
    url: 'https://turchettamarco.com/blog/reflusso-diaframma-dorsalgia',
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
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-teal-50 text-teal-700 border-teal-200">Osteopatia</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 19 luglio 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Osteopata a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Reflusso, digestione difficile e dolore tra le scapole: il ruolo del diaframma
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            C&apos;è un muscolo che si contrae ventimila volte al giorno, si attacca alle vertebre
            lombari e lascia passare l&apos;esofago. Quando si irrigidisce, i sintomi arrivano da
            due mondi che sembrano scollegati: la schiena e lo stomaco.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <p className="text-muted-foreground leading-relaxed">
              È una delle situazioni che riconosco più spesso in studio: una persona con dolore
              dorsale, tra le scapole o poco più in basso, che ha già provato massaggi,
              antinfiammatori e ginnastica posturale senza risultati stabili. Durante
              l&apos;anamnesi emerge quasi per caso che soffre anche di bruciore di stomaco,
              digerisce lentamente, ha spesso gonfiore. Nessuno le aveva mai chiesto di collegare
              le due cose.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il diaframma è un incrocio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il diaframma è la cupola muscolare che separa il torace dall&apos;addome. Si contrae
              a ogni respiro — circa ventimila volte al giorno — e alcune sue caratteristiche lo
              rendono un vero crocevia anatomico:
            </p>
            <div className="space-y-3">
              {[
                { org: 'Si inserisce sulla colonna', desc: 'I suoi pilastri posteriori si attaccano alle prime tre vertebre lombari, e le sue fibre alle coste basse. Un diaframma rigido tira direttamente sulla colonna, aumentando la lordosi lombare e il carico sui dischi.' },
                { org: 'L\'esofago lo attraversa', desc: 'Passa attraverso un\'apertura chiamata iato. Le fibre muscolari attorno a quel passaggio contribuiscono a impedire che il contenuto dello stomaco risalga: sono parte del meccanismo anti-reflusso.' },
                { org: 'Lo stomaco gli sta appoggiato sotto', desc: 'Insieme a fegato e milza, ed è legato a lui da connessioni fibrose. Tensioni gastriche e tensioni diaframmatiche si alimentano a vicenda.' },
                { org: 'Il nervo vago lo attraversa', desc: 'Porta allo stomaco i comandi principali della digestione. È la via nervosa che spiega perché stress e digestione viaggiano insieme.' },
              ].map(({ org, desc }) => (
                <div key={org} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              È l&apos;unico muscolo del corpo che partecipa contemporaneamente alla respirazione,
              alla stabilità della colonna e alla meccanica della digestione. Se si irrigidisce,
              tutti e tre i sistemi ne risentono.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Perché lo stomaco può far male alla schiena</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le fibre nervose che raccolgono i segnali dallo stomaco e quelle che raccolgono i
              segnali dai muscoli e dalla pelle della zona dorsale entrano nel midollo spinale agli
              stessi livelli, tra la quinta e la nona vertebra dorsale. Il cervello, che riceve
              tutto lungo la stessa via, non distingue perfettamente l&apos;origine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il risultato è il dolore riferito: un organo che soffre proietta il proprio disagio
              su una zona muscolo-scheletrica precisa. Per lo stomaco, tipicamente la dorsale
              medio-alta, spesso più a sinistra, e la zona sotto la scapola sinistra.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              E funziona anche al contrario: una rigidità persistente delle vertebre dorsali può
              alterare la regolazione nervosa dello stomaco, contribuendo a spasmi e a una
              digestione più lenta. È un circolo che si autoalimenta — ed è il motivo per cui
              trattare un solo lato dell&apos;equazione dà sollievo parziale e temporaneo.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Gli indizi che fanno sospettare una componente viscerale</h2>
            <div className="p-5 bg-card rounded-xl border border-border">
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                <li>Il dolore <strong className="text-foreground">cambia in relazione ai pasti</strong>: peggiora dopo mangiato, o al contrario a stomaco vuoto</li>
                <li>Peggiora sdraiandosi, soprattutto nelle prime ore della notte</li>
                <li>Non si modifica granché con i movimenti della colonna — mentre un dolore puramente meccanico ha di solito almeno una posizione che lo allevia</li>
                <li>Risponde poco e per poco ai trattamenti manuali locali: il sollievo dura uno o due giorni e poi torna identico</li>
                <li>Si accompagna a bruciore retrosternale, peso dopo i pasti, gonfiore alto, eruttazioni frequenti, o tosse secca notturna senza spiegazione respiratoria</li>
                <li>Peggiora nei periodi di stress e migliora in vacanza, a prescindere dall&apos;attività fisica</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il caso dell&apos;ernia iatale</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L&apos;ernia iatale è la risalita di una parte dello stomaco attraverso il passaggio
              diaframmatico. È molto comune e in una buona parte dei casi non dà alcun sintomo.
              Quando i sintomi ci sono — bruciore, risalita acida, digestione lenta, a volte
              alterazioni della voce o tosse notturna — la tensione del diaframma attorno allo iato
              contribuisce spesso all&apos;irritazione.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Va detto chiaramente: <strong className="text-foreground">nessuna tecnica manuale
              &quot;riduce&quot; un&apos;ernia iatale anatomica</strong>. Chi lo promette non è
              onesto. Quello che si può ragionevolmente fare è lavorare sulla mobilità del
              diaframma, sulle tensioni delle strutture attorno e sulla componente dorsale,
              riducendo spesso i sintomi associati e migliorando il comfort. È un lavoro di
              supporto, che si affianca alla terapia prescritta dal medico.
            </p>
          </div>

          <div className="p-5 bg-card rounded-xl border-l-4 border-l-amber-500 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Da valutare sempre prima con il medico</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Difficoltà o dolore a deglutire, sensazione che il cibo si fermi</li>
              <li>Perdita di peso non voluta, vomito ripetuto o vomito con sangue</li>
              <li>Feci nere o catramose</li>
              <li>Dolore toracico che compare sotto sforzo, con affanno o sudorazione: va escluso subito un problema cardiaco</li>
              <li>Anemia riscontrata negli esami del sangue</li>
              <li>Sintomi comparsi per la prima volta dopo i 55 anni, o peggiorati rapidamente</li>
              <li>Dolore dorsale continuo e notturno, che non si modifica con la posizione</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa faccio, concretamente</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La valutazione parte dall&apos;esclusione: se ci sono sintomi che richiedono un
              inquadramento medico, quella è la priorità e lo dico senza giri di parole. Se il
              quadro è già stato inquadrato — gastroscopia fatta, terapia impostata — e restano
              rigidità dorsale e sintomi funzionali, allora c&apos;è spazio per il lavoro manuale.
            </p>
            <div className="space-y-3">
              {[
                { t: 'Liberare il diaframma', d: 'È sempre il primo passo: inserzioni costali, pilastri posteriori, mobilità delle coste basse e rieducazione della respirazione.' },
                { t: 'Normalizzare i livelli vertebrali coinvolti', d: 'Le vertebre dorsali medie, che condividono l\'innervazione con lo stomaco, e il tratto cervicale basso da cui decorre il nervo vago.' },
                { t: 'Lavorare sulle tensioni della regione gastrica', d: 'Con tecniche viscerali dolci: manovre lente di stiramento e ascolto delle tensioni fasciali, mai manovre forti o dolorose.' },
                { t: 'Rivedere la meccanica respiratoria', d: 'Molte persone con questi quadri respirano quasi solo con il torace alto, e il diaframma smette progressivamente di fare il suo lavoro.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Un criterio che applico e che dovresti pretendere da chiunque: <strong className="text-foreground">se
              dopo quattro o cinque sedute non c&apos;è alcun cambiamento, il percorso va interrotto
              o ripensato</strong>, non ripetuto per inerzia.
            </p>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Cosa può e cosa non può l&apos;osteopatia viscerale</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Sono un fisioterapista e un osteopata, non un gastroenterologo, e mi sembra corretto
              essere esplicito. <strong className="text-foreground">Può ragionevolmente aiutare</strong> con
              il dolore dorsale associato a disturbi digestivi funzionali, con la rigidità del
              diaframma e della gabbia toracica, con il senso di costrizione toracica e con la
              componente muscolo-scheletrica che accompagna questi quadri. Le prove scientifiche in
              quest&apos;area sono ancora limitate e in evoluzione: è onesto dirlo.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Non cura</strong> ulcere, gastriti, esofagiti,
              calcoli o qualunque altra patologia organica, e non sostituisce farmaci o esami
              diagnostici. Se ti viene proposto il contrario, cambia professionista.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Quattro abitudini che fanno una differenza reale</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Non sdraiarti nelle tre ore dopo cena:</strong> è
              probabilmente la singola misura più efficace per il reflusso notturno.
              <strong className="text-foreground"> Alza la testata del letto di 10-15 cm</strong> mettendo
              qualcosa sotto le gambe — aggiungere cuscini non funziona, perché piega il tronco e
              peggiora la pressione addominale. <strong className="text-foreground">Pasti più
              piccoli e più frequenti</strong>, mangiati lentamente: uno stomaco molto disteso spinge
              verso l&apos;alto. <strong className="text-foreground">Respira con la pancia due minuti
              al giorno:</strong> sdraiato, una mano sul petto e una sull&apos;addome, deve muoversi
              quella sull&apos;addome. È l&apos;esercizio più semplice e più sottovalutato che esista.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/osteopatia-viscerale-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Osteopatia viscerale a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="reflusso-diaframma-dorsalgia" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
