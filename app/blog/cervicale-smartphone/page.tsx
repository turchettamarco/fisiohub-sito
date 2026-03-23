import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cervicale e Smartphone: il Text Neck Spiegato | Marco Turchetta',
  description: 'Perché il dolore cervicale è esploso negli ultimi 10 anni. Il "text neck" e le posture scorrette da smartphone spiegati da Marco Turchetta, fisioterapista a Pontecorvo (FR).',
  keywords: ['cervicale smartphone', 'text neck', 'dolore collo smartphone', 'cervicalgia postura', 'cervicale Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/cervicale-smartphone' },
}

export default function Post() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200">Consigli</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 8 marzo 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            Cervicale e smartphone: perché il dolore al collo è esploso negli ultimi 10 anni
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nel 2007 è uscito il primo iPhone. Da allora, la cervicalgia cronica è diventata uno dei problemi più comuni che i fisioterapisti trattano — in fasce d&apos;età sempre più giovani. Non è una coincidenza.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il peso della testa cambia con l&apos;angolo del collo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La testa umana pesa in media 5–6 kg in posizione neutra — cioè con il mento parallelo al pavimento e le orecchie in linea con le spalle. Questo è il peso che la colonna cervicale deve sostenere quando la postura è corretta.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Ma quando incliniamo la testa in avanti per guardare lo smartphone, il peso effettivo percepito dalla colonna cervicale aumenta drasticamente:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              {[['0°', '5–6 kg'], ['15°', '12 kg'], ['30°', '18 kg'], ['60°', '27 kg']].map(([ang, peso]) => (
                <div key={ang} className="text-center p-4 bg-card rounded-xl border border-border">
                  <p className="font-display text-2xl font-semibold text-primary">{ang}</p>
                  <p className="text-sm text-muted-foreground mt-1">{peso}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed">Con un'inclinazione di 60° — quella tipica di chi guarda lo smartphone con il collo piegato — la colonna cervicale sopporta l&apos;equivalente di 27 kg. Per ore. Ogni giorno. Per anni. Il risultato è inevitabile.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cos&apos;è il "text neck" e perché fa male</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Il termine "text neck" descrive la disfunzione cervicale causata dall&apos;uso prolungato di dispositivi digitali in posizione scorretta. Non è una patologia nuova inventata dai fisioterapisti — è una risposta biomeccanica documentata a uno stress meccanico cronico.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Cosa succede nel tempo alla cervicale sottoposta a questo stress:</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Muscolatura sub-occipitale</strong> — i piccoli muscoli alla base del cranio si accorciano e si contraggono cronicamente. Generano cefalea tensiva che parte dalla nuca.</span></li>
              <li className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Muscolatura anteriore del collo</strong> — si indebolisce progressivamente. Riduce la capacità di stabilizzare la colonna cervicale.</span></li>
              <li className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Dischi cervicali</strong> — il carico in flessione aumenta la pressione sul disco in modo asimmetrico, predisponendo alle protrusioni e alle ernie.</span></li>
              <li className="flex gap-3"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Curva cervicale</strong> — la lordosi fisiologica si riduce o si inverte — la colonna cervicale diventa diritta o addirittura cifosica.</span></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">I sintomi che devi riconoscere</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Il text neck non si manifesta sempre con dolore al collo diretto. Spesso i primi sintomi sono:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {['Mal di testa che parte dalla nuca verso la fronte', 'Rigidità cervicale mattutina', 'Tensione tra le scapole', 'Formicolio o pesantezza alle braccia', 'Affaticamento visivo cronico', 'Difficoltà di concentrazione'].map(s => (
                <div key={s} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                  <span className="text-primary text-lg flex-shrink-0">⚠</span>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa puoi fare adesso — 5 correzioni immediate</h2>
            <div className="space-y-4">
              {[
                { n: '1', t: 'Alza lo schermo', d: 'Lo smartphone deve essere all\'altezza degli occhi — non giù verso il grembo. Usa un supporto per il tablet o alza il laptop. Piccola modifica, grande impatto.' },
                { n: '2', t: 'La regola del 20-20-20', d: 'Ogni 20 minuti di schermo, guarda un punto a 6 metri di distanza per 20 secondi. Aggiunge: ritrae il mento verso la nuca per 3 secondi. Ripristina la posizione neutra.' },
                { n: '3', t: 'Stretching sub-occipitale', d: 'Mento verso il petto, mani intrecciate dietro la nuca — non tirare, solo lascia il peso della testa distendere i muscoli sub-occipitali. 30 secondi, 3 volte al giorno.' },
                { n: '4', t: 'Rafforza i flessori profondi del collo', d: 'Esercizio "chin tuck": in posizione eretta, ritraei il mento verso la nuca senza abbassare la testa. Tieni 10 secondi. Ripeti 10 volte. È il movimento opposto al text neck.' },
                { n: '5', t: 'Pausa dallo schermo ogni ora', d: 'Alzati, cammina 5 minuti, guarda lontano. Il corpo non è progettato per la stazione seduta prolungata. Non esiste esercizio che compensi completamente 8 ore seduti — ma le pause aiutano.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-primary">{n}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">Quando serve il fisioterapista</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Gli esercizi sopra aiutano a prevenire e a gestire i sintomi lievi. Ma se hai già dolore cervicale cronico, cefalea frequente, formicolio alle braccia o rigidità che persiste da settimane, gli esercizi da soli non bastano — serve una valutazione clinica per capire esattamente cosa sta succedendo e impostare un trattamento mirato.</p>
            <p className="text-muted-foreground leading-relaxed">Nel mio studio a Pontecorvo valutiamo la postura cervicale, la mobilità segmentaria, la forza dei flessori profondi e la presenza di eventuali disfunzioni osteopatiche associate. Poi costruiamo un percorso specifico per la tua cervicale.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/cervicale-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Cervicale a Pontecorvo →
            </Link>
          </div>

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
