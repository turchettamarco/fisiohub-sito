import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Mal di Testa che Parte dal Collo: la Cefalea Cervicogenica | Marco Turchetta Pontecorvo',
  description: 'Mal di testa che nasce dalla nuca e sale dietro l\'occhio, sempre dallo stesso lato. Come riconoscere la cefalea cervicogenica e come si tratta. Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
  keywords: ['cefalea cervicogenica', 'mal di testa cervicale Pontecorvo', 'cefalea tensiva fisioterapia', 'mal di testa nuca', 'emicrania o cervicale'],
  alternates: { canonical: 'https://turchettamarco.com/blog/cefalea-cervicogenica' },
  openGraph: {
    type: 'article',
    title: 'Mal di Testa che Parte dal Collo: la Cefalea Cervicogenica | Marco Turchetta Pontecorvo',
    description: 'Mal di testa che nasce dalla nuca e sale dietro l\'occhio, sempre dallo stesso lato. Come riconoscere la cefalea cervicogenica e come si tratta. Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
    url: 'https://turchettamarco.com/blog/cefalea-cervicogenica',
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
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 21 luglio 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Fisioterapista a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Mal di testa che parte dal collo: la cefalea cervicogenica
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un dolore che nasce dalla nuca e sale dietro l&apos;occhio, quasi sempre dallo stesso
            lato, spesso preceduto da giorni di collo rigido. Non è emicrania, e non è &quot;stress&quot;:
            è il collo che genera il mal di testa. Ed è una delle forme che risponde meglio al
            trattamento manuale.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Perché il collo può far male alla testa</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le prime tre vertebre cervicali condividono la stessa stazione di smistamento nervoso
              del viso e del cuoio capelluto: le fibre sensitive del collo alto e quelle del nervo
              trigemino convergono sugli stessi neuroni nel tronco encefalico. Il cervello, che
              riceve i segnali lungo la stessa via, non sempre riesce a distinguere da dove
              arrivano.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il risultato è un dolore che <strong className="text-foreground">nasce nel collo ma
              viene percepito nella testa</strong>. Non è una teoria alternativa: è la stessa
              anatomia che spiega perché un infarto può far male al braccio sinistro.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Come la riconosci</h2>
            <div className="space-y-3">
              {[
                { t: 'Parte dalla nuca', d: 'Nasce alla base del cranio e sale verso la tempia o dietro l\'occhio, con un percorso che il paziente riesce a disegnare con un dito.' },
                { t: 'Sempre dallo stesso lato', d: 'Crisi dopo crisi, il lato è quello. Questa unilateralità fissa è uno dei segni più caratteristici.' },
                { t: 'Si accende con il collo', d: 'Peggiora con certi movimenti o dopo ore nella stessa posizione. Spesso mantenendo a lungo una postura si può innescare la crisi.' },
                { t: 'Rigidità che la precede', d: 'Nei giorni prima il collo era già teso, e spesso c\'è dolore alla spalla dello stesso lato.' },
                { t: 'Poca nausea, poca fotofobia', d: 'Nausea intensa e fastidio estremo alla luce sono invece tipici dell\'emicrania. Qui in genere sono assenti o lievi.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Una precisazione onesta</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Emicrania e cefalea cervicogenica possono convivere nella stessa persona, e in quel
              caso il lavoro sul collo riduce la frequenza e l&apos;intensità delle crisi ma non le
              elimina. Se hai una diagnosi neurologica, il trattamento manuale si affianca alla
              terapia medica — non la sostituisce. Chi ti promette di farti smettere i farmaci non
              ti sta facendo un favore.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa trovo, di solito, quando valuto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il quadro tipico non è mai una sola cosa. In genere convivono più elementi:
            </p>
            <div className="space-y-3">
              {[
                { org: 'Disfunzione delle prime vertebre cervicali', desc: 'Una perdita di mobilità tra occipite, atlante ed epistrofeo. Spesso il livello bloccato è silente e a far male è quello vicino, costretto a compensare — motivo per cui massaggiare il punto dolente dà sollievo per poche ore.' },
                { org: 'Muscoli sub-occipitali contratti', desc: 'Quei quattro muscoletti profondi alla base del cranio, densi di recettori. Quando restano contratti cronicamente sono una delle fonti più dirette del dolore riferito alla testa.' },
                { org: 'Torace rigido e spalle chiuse', desc: 'Il collo raramente si ammala da solo. Un torace che non si muove costringe la cervicale a lavorare per due, tutto il giorno.' },
                { org: 'Mandibola in tensione', desc: 'Chi digrigna i denti la notte scarica sui muscoli masticatori una tensione che si trasmette al cranio e alla cervicale alta. In questi casi trattare solo il collo non basta.' },
              ].map(({ org, desc }) => (
                <div key={org} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il trattamento</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Combino tecniche manuali dolci per restituire mobilità ai primi livelli cervicali,
              lavoro sui muscoli profondi in spasmo, tecniche osteopatiche su torace, prime coste e
              base del cranio, e — appena il dolore lo consente — esercizi di controllo e forza per
              la muscolatura profonda del collo, che è quasi sempre debole in chi ha cefalee
              ricorrenti. Se emerge una componente mandibolare, si lavora anche lì.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Sui tempi:</strong> per una cefalea cervicogenica
              si ragiona su un ciclo di cinque-sei sedute, con una rivalutazione dopo le prime tre.
              Il parametro da guardare non è tanto l&apos;intensità del singolo attacco quanto la
              <em> frequenza</em>: se da quattro episodi a settimana si passa a uno, la direzione è
              giusta anche se il mal di testa non è sparito del tutto.
            </p>
          </div>

          <div className="p-5 bg-card rounded-xl border-l-4 border-l-amber-500 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Segnali che richiedono il medico, non il fisioterapista</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Mal di testa improvviso e violentissimo, diverso da qualsiasi altro avuto prima</li>
              <li>Comparsa di disturbi della vista, della parola, della deglutizione o dell&apos;equilibrio</li>
              <li>Debolezza o intorpidimento di un lato del corpo</li>
              <li>Febbre con rigidità del collo</li>
              <li>Mal di testa comparso dopo un trauma cranico</li>
              <li>Cefalea che peggiora progressivamente da settimane, sempre più intensa</li>
            </ul>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Tre cose utili da subito</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Non è la postura perfetta che ti salva, è
              cambiarla spesso:</strong> alzarsi ogni 40-50 minuti vale più di qualsiasi supporto.
              <strong className="text-foreground"> Alza lo schermo</strong> con il bordo superiore
              all&apos;altezza degli occhi — il portatile appoggiato sul tavolo è la posizione
              peggiore possibile. <strong className="text-foreground">Controlla il cuscino:</strong> deve
              riempire lo spazio tra spalla e testa mantenendo il collo in linea. Troppo alto o
              troppo basso significa otto ore di tensione a notte.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/cefalea-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Cefalea a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="cefalea-cervicogenica" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
