import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Mandibola che Schiocca, Bruxismo e Mal di Testa: i Disturbi dell\'ATM | Marco Turchetta',
  description: 'Click mandibolare, denti serrati la notte, mal di testa alle tempie, dolore all\'orecchio. Perché nascono e come si trattano. Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
  keywords: ['ATM Pontecorvo', 'dolore mandibola osteopatia', 'bruxismo trattamento', 'click mandibolare', 'disfunzione temporomandibolare Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/atm-bruxismo-mal-di-testa' },
  openGraph: {
    type: 'article',
    title: 'Mandibola che Schiocca, Bruxismo e Mal di Testa: i Disturbi dell\'ATM | Marco Turchetta',
    description: 'Click mandibolare, denti serrati la notte, mal di testa alle tempie, dolore all\'orecchio. Perché nascono e come si trattano. Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
    url: 'https://turchettamarco.com/blog/atm-bruxismo-mal-di-testa',
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
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 22 luglio 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Osteopata a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Mandibola che schiocca, bruxismo e mal di testa: i disturbi dell&apos;ATM
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            È l&apos;articolazione che usi più di tutte: parlare, masticare, deglutire, oltre
            duemila volte al giorno. Quando smette di funzionare bene, i sintomi arrivano da
            direzioni che non ti aspetti — e quasi nessuno li collega alla mandibola.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <p className="text-muted-foreground leading-relaxed">
              L&apos;articolazione temporo-mandibolare — l&apos;ATM — collega la mandibola al cranio,
              appena davanti all&apos;orecchio. È piccolissima e lavora sempre in coppia: le due
              articolazioni si muovono insieme, quindi un problema da un lato si ripercuote
              inevitabilmente sull&apos;altro. Le persone arrivano da me per mal di testa, dolore
              all&apos;orecchio o cervicale rigida, e la mandibola non viene nemmeno nominata.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Perché la mandibola schiocca</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dentro l&apos;articolazione c&apos;è un piccolo disco fibroso che fa da cuscinetto tra
              il condilo della mandibola e l&apos;osso temporale. Quando apri la bocca il condilo
              prima ruota, poi scivola in avanti — e il disco deve accompagnarlo restando sempre
              interposto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il click nasce quando il disco si trova spostato in avanti rispetto al condilo. Il
              condilo lo incontra come un ostacolo, per un attimo si blocca, poi lo supera di
              scatto: quello schiocco che senti (e che a volte sente anche chi ti sta accanto) è
              il momento del recupero.
            </p>
            <div className="space-y-3">
              {[
                { t: 'Click a inizio apertura', d: 'Il disco è particolarmente anteriorizzato e il condilo lo supera quasi subito.' },
                { t: 'Click a fine apertura', d: 'Il condilo resta ostacolato più a lungo e si libera solo ad apertura quasi completa. Spesso si accompagna a una limitazione dell\'apertura.' },
                { t: 'Apertura che devia', d: 'Osservati allo specchio mentre apri lentamente: se la mandibola disegna una C o una S invece di scendere dritta, c\'è uno squilibrio tra le due articolazioni.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Un click isolato, senza dolore e senza limitazione, è molto comune e non richiede
              necessariamente un trattamento. Diventa un problema quando compaiono dolore, blocchi
              o riduzione progressiva dell&apos;apertura.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">I sintomi che non associ alla mandibola</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Qui sta la parte più interessante. I muscoli masticatori si inseriscono sul cranio,
              e la mandibola è meccanicamente collegata all&apos;osso temporale, all&apos;occipite,
              alle prime vertebre cervicali e all&apos;osso ioide. Una tensione persistente si
              trasmette lungo tutte queste connessioni. Il massetere, il muscolo che stringe i
              denti, è tra i più potenti del corpo in rapporto alle sue dimensioni: se lavora per
              ore ogni notte, la tensione che genera non resta confinata alla mascella.
            </p>
            <div className="space-y-3">
              {[
                { org: 'Mal di testa alle tempie', desc: 'Tipicamente al risveglio, come una fascia stretta. È il muscolo temporale, che si inserisce proprio lì.' },
                { org: 'Dolore all\'orecchio', desc: 'Senza infezione, con visite otorinolaringoiatriche ripetutamente negative.' },
                { org: 'Acufeni e orecchio ovattato', desc: 'Esiste una correlazione documentata tra disturbi dell\'ATM e acufeni, per la vicinanza anatomica con le strutture dell\'orecchio medio.' },
                { org: 'Vertigini o instabilità', desc: 'Per il coinvolgimento delle strutture temporali e del tratto cervicale alto.' },
                { org: 'Cervicalgia alta ricorrente', desc: 'Che non risponde ai trattamenti fatti sul solo collo.' },
                { org: 'Nodo alla gola', desc: 'O difficoltà nella deglutizione, per lo squilibrio dei muscoli sopra e sottoioidei.' },
              ].map(({ org, desc }) => (
                <div key={org} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Ognuno di questi sintomi può ovviamente avere altre cause, e vanno escluse. Ma
              quando gli accertamenti tornano negativi e i sintomi restano, la mandibola è una
              pista che vale la pena esplorare.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il bruxismo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Digrignare o serrare i denti durante la notte è la fonte di carico più importante su
              questa articolazione. È un fenomeno prevalentemente centrale, cioè legato al sistema
              nervoso, ed è strettamente correlato a stress, ansia e qualità del sonno.
            </p>
            <div className="p-5 bg-card rounded-xl border border-border">
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-2">Come capire se lo fai</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
                <li>Ti svegli con la mascella stanca, indolenzita o rigida</li>
                <li>Hai mal di testa alle tempie nelle prime ore del mattino</li>
                <li>Il dentista ti ha segnalato usura anomala dei denti</li>
                <li>Senti i muscoli delle guance ipertrofici, &quot;gonfi&quot;</li>
                <li>Il partner ti ha sentito digrignare</li>
              </ul>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Il bite prescritto dal dentista protegge i denti dall&apos;usura ed è importante. Non
              elimina però la tensione muscolare né la causa del problema: per questo il lavoro
              manuale sui muscoli masticatori e sul distretto cranio-cervicale si integra bene con
              la terapia odontoiatrica, senza sostituirla.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa faccio in studio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La valutazione comprende l&apos;osservazione dell&apos;apertura (ampiezza, traiettoria,
              simmetria), la palpazione dei condili durante il movimento, l&apos;esame dei muscoli
              masticatori — massetere, temporale, pterigoidei — anche per via intraorale quando
              serve, e la valutazione delle strutture collegate: cranio, cervicale alta, osso ioide,
              cingolo scapolare.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il trattamento combina tecniche di rilascio dei muscoli masticatori (quelle intraorali
              sono spesso le più efficaci sugli pterigoidei), tecniche articolari dolci per
              recuperare lo scorrimento del condilo e riequilibrare i due lati, lavoro osteopatico
              craniale e sul tratto cervicale alto — praticamente sempre coinvolto — ed esercizi di
              controllo dell&apos;apertura.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              In molti casi il lavoro migliore si fa in squadra con il dentista o lo gnatologo: se
              c&apos;è un problema di occlusione vero, il trattamento manuale da solo dà sollievo
              temporaneo. E viceversa: un bite applicato su una muscolatura molto contratta rende
              l&apos;adattamento più lungo e fastidioso.
            </p>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Tre abitudini che aiutano subito</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Impara dove stanno i denti a riposo:</strong> in
              posizione neutra le arcate non devono toccarsi, la lingua sta appoggiata al palato e
              c&apos;è un piccolo spazio tra i denti. Molte persone serrano tutto il giorno senza
              accorgersene. <strong className="text-foreground">Riduci i carichi inutili:</strong> chewing
              gum per ore, unghie mangiate, penne mordicchiate, cibi molto duri nelle fasi dolorose.
              <strong className="text-foreground"> Occhio a come dormi:</strong> a pancia in giù con
              la testa girata comprimi la mandibola per ore.
            </p>
          </div>

          <div className="p-5 bg-card rounded-xl border-l-4 border-l-amber-500 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Quando serve prima il medico</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Blocco improvviso con impossibilità di aprire o chiudere la bocca</li>
              <li>Gonfiore, rossore o febbre nella zona dell&apos;articolazione</li>
              <li>Cambiamento improvviso di come i denti combaciano, senza motivo apparente</li>
              <li>Intorpidimento o formicolio persistente del viso</li>
              <li>Dolore comparso dopo un trauma diretto al viso o alla mandibola</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/disfunzione-atm-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Disfunzione ATM a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="atm-bruxismo-mal-di-testa" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
