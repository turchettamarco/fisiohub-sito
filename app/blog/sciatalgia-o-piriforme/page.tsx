import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Sciatica o Sindrome del Piriforme? Come Distinguerle | Marco Turchetta Pontecorvo',
  description: 'Dolore al gluteo che scende nella gamba: ernia lombare, sindrome del piriforme o sacroiliaca? Sintomi, differenze e trattamento. Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
  keywords: ['sciatica Pontecorvo', 'sindrome del piriforme', 'dolore gluteo gamba', 'sacroiliaca osteopatia', 'sciatalgia trattamento Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/sciatalgia-o-piriforme' },
  openGraph: {
    type: 'article',
    title: 'Sciatica o Sindrome del Piriforme? Come Distinguerle | Marco Turchetta Pontecorvo',
    description: 'Dolore al gluteo che scende nella gamba: ernia lombare, sindrome del piriforme o sacroiliaca? Sintomi, differenze e trattamento. Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
    url: 'https://turchettamarco.com/blog/sciatalgia-o-piriforme',
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
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-red-50 text-red-700 border-red-200">Patologie</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 23 luglio 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Fisioterapista a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Dolore al gluteo che scende nella gamba: sciatica o sindrome del piriforme?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Due problemi che danno sintomi quasi identici ma nascono in punti diversi, a venti
            centimetri di distanza. La domanda giusta non è &quot;cosa prendo&quot;, ma
            &quot;da dove parte&quot;. Perché il trattamento cambia completamente.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <p className="text-muted-foreground leading-relaxed">
              Il nervo sciatico è il più grande del corpo: parte dalla zona lombare bassa,
              attraversa il gluteo e scende lungo tutta la gamba. Lungo questo percorso può
              essere irritato in punti diversi, e il sintomo che ne risulta è talmente simile
              che confondersi è la regola, non l&apos;eccezione. Con una conseguenza pratica:
              chi tratta il punto sbagliato non ottiene risultati, e il paziente conclude che
              &quot;la fisioterapia non funziona&quot;.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il piriforme, questo sconosciuto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il piriforme è un muscolo triangolare profondo che parte dalla faccia anteriore
              dell&apos;osso sacro, attraversa il grande foro ischiatico e si attacca al gran
              trocantere. La sua particolarità è anatomica: <strong className="text-foreground">il
              nervo sciatico gli passa immediatamente sotto</strong>, e in una parte della
              popolazione lo attraversa addirittura all&apos;interno.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Quando questo muscolo è in tensione permanente può comprimere il nervo contro il
              bordo osseo o strozzarlo dentro il proprio ventre. Il risultato imita quasi
              perfettamente la sciatica da ernia discale. La causa più frequente della sua
              tensione cronica, però, non è il muscolo in sé: è un&apos;asimmetria del bacino o
              una differenza di lunghezza degli arti. Il piriforme si irrigidisce per compensare,
              e lo fa a ogni passo, tutto il giorno.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Come si distinguono</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Nessun singolo segno è decisivo da solo, ma messi insieme orientano parecchio.
            </p>
            <div className="space-y-3">
              <div className="p-5 bg-card rounded-xl border border-border">
                <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-2">Depone per un&apos;origine lombare</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Il dolore scende <strong className="text-foreground">sotto il ginocchio</strong>, fino al polpaccio o al piede, in una fascia ben definita</li>
                  <li>Ci sono formicolii o intorpidimento in una zona precisa del piede</li>
                  <li>Tossire, starnutire o spingere aumenta il dolore alla gamba</li>
                  <li>C&apos;è anche dolore o rigidità lombare, spesso comparso prima</li>
                  <li>Peggiora piegandosi in avanti o stando seduti a lungo in auto</li>
                </ul>
              </div>
              <div className="p-5 bg-card rounded-xl border border-border">
                <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">Depone per la sindrome del piriforme</p>
                <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                  <li>Il dolore è <strong className="text-foreground">profondo nel gluteo</strong>, indicabile quasi con un dito, e arriva al massimo a metà coscia</li>
                  <li>Peggiora stando seduti su superfici dure, guidando a lungo, incrociando le gambe</li>
                  <li>Migliora alzandosi e camminando un po&apos;</li>
                  <li>Forza, riflessi e sensibilità sono normali</li>
                  <li>La schiena in sé è poco o per nulla dolente</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">L&apos;errore da evitare</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Un&apos;ernia lombare che irrita le radici basse provoca essa stessa una contrattura
              del piriforme. Quindi trovare un piriforme dolente alla palpazione non basta a
              chiudere la questione: potrebbe essere l&apos;effetto, non la causa. È il motivo per
              cui la valutazione deve sempre partire dalla colonna lombare, anche quando il
              paziente giura che &quot;la schiena non fa male&quot;.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il terzo indiziato: la sacroiliaca</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              C&apos;è una terza possibilità diagnosticata molto meno di quanto sarebbe giusto:
              l&apos;articolazione tra osso sacro e bacino. È poco mobile ma non immobile, e quando
              perde il suo piccolo gioco articolare dà un dolore tipico appena sotto la fossetta
              lombare, che può irradiarsi al gluteo e all&apos;inguine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il meccanismo è a catena e spiega molte recidive: una sacroiliaca bloccata costringe
              la zona lombare a compensare a ogni passo. Il sovraccarico ripetuto irrita i tessuti
              lombari, accelera l&apos;usura discale e finisce, col tempo, per generare proprio
              quella sciatalgia che sembrava avere origine puramente discale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In più, una disfunzione della sacroiliaca genera per via riflessa uno spasmo del
              piriforme dello stesso lato. Ecco chiuso il cerchio: il bacino blocca, il piriforme
              si contrae, il nervo si irrita. Trattare solo il piriforme, in questo caso, significa
              spegnere l&apos;allarme lasciando acceso l&apos;incendio.
            </p>
          </div>

          <div className="p-5 bg-card rounded-xl border-l-4 border-l-amber-500 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Quando serve il medico, subito</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Difficoltà a controllare urina o feci, o perdita di sensibilità nella zona genitale e all&apos;interno delle cosce: è un&apos;urgenza</li>
              <li>Debolezza vera del piede o della gamba, non solo formicolio (il piede cade camminando, non riesci a stare sulle punte)</li>
              <li>Sintomi che compaiono su entrambe le gambe contemporaneamente</li>
              <li>Dolore dopo un trauma importante o una caduta</li>
              <li>Dolore notturno immodificabile, con febbre o perdita di peso</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Come lavoro su questi casi</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La valutazione include l&apos;esame della colonna lombare, i test neurologici per
              capire se una radice è coinvolta, i test specifici per il piriforme e la valutazione
              della mobilità del bacino da entrambi i lati. Controllo anche la lunghezza degli arti
              e l&apos;appoggio dei piedi, perché sono cause frequenti a monte.
            </p>
            <div className="space-y-3">
              {[
                { t: 'Se il problema è lombare', d: 'Mobilità vertebrale, tecniche di decompressione e scorrimento neurale, gestione del carico ed esercizi in direzione preferenziale. La maggior parte delle radicolopatie migliora senza chirurgia, tipicamente in sei-otto settimane, con un andamento a scalini più che lineare.' },
                { t: 'Se il problema è muscolare', d: 'Rilascio del piriforme e degli altri rotatori profondi, fibrolisi diacutanea quando ci sono aderenze, allungamento e poi rinforzo dei glutei — che in questi casi sono quasi sempre deboli. Spesso bastano tre-cinque sedute.' },
                { t: 'In entrambi i casi', d: 'Normalizzazione del bacino e della sacroiliaca, perché è lì che sta spesso la ragione per cui il problema è nato e per cui tornerebbe. Senza questo passaggio il sollievo dura poche settimane.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Cosa puoi fare intanto</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Non stare fermo:</strong> camminare, anche poco
              e spesso, è la cosa più utile — il nervo ha bisogno di scorrere.
              <strong className="text-foreground"> Spezza le sedute lunghe</strong> ogni 30-40
              minuti e togli il portafoglio dalla tasca posteriore: non è una leggenda, comprime
              esattamente quella zona. <strong className="text-foreground">Vai piano con lo
              stretching aggressivo:</strong> tirare violentemente la gamba al petto quando il
              nervo è già irritato spesso peggiora tutto. Meglio movimenti dolci e ripetuti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/sciatalgia-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Sciatalgia a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="sciatalgia-o-piriforme" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
