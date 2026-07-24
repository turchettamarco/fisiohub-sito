import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Cervicale: 5 Errori che Peggiorano il Dolore | Marco Turchetta Pontecorvo',
  description: 'I 5 errori più comuni con il dolore cervicale. Cosa evitare e cosa fare invece, spiegato da Marco Turchetta fisioterapista e osteopata a Pontecorvo (FR).',
  keywords: ['cervicale errori', 'cervicalgia peggiora', 'dolore cervicale cosa non fare', 'cervicale fisioterapista Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/cervicale-errori' },
  openGraph: {
    type: 'article',
    title: 'Cervicale: 5 Errori che Peggiorano il Dolore | Marco Turchetta Pontecorvo',
    description: 'I 5 errori più comuni con il dolore cervicale. Cosa evitare e cosa fare invece, spiegato da Marco Turchetta fisioterapista e osteopata a Pontecorvo (FR).',
    url: 'https://turchettamarco.com/blog/cervicale-errori',
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
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 19 marzo 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Fisioterapista a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Cervicale: 5 errori che peggiorano il dolore (e come evitarli)
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quasi tutti i pazienti che arrivano da me con dolore cervicale cronico
            stanno facendo almeno uno di questi errori — in totale buona fede,
            spesso su consiglio di qualcuno.
            Il risultato è che il dolore continua, o peggiora, o scompare per qualche giorno
            e poi torna puntuale come un vecchio nemico.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <p className="text-muted-foreground leading-relaxed">
              Prima di entrare negli errori, un&apos;osservazione importante:
              il dolore cervicale cronico non è normale. Non è una condanna permanente.
              Non è qualcosa con cui devi "imparare a convivere".
              Nella maggior parte dei casi ha una causa specifica — e una causa specifica
              ha un trattamento specifico. Il problema è che molte persone non arrivano mai a trovarla
              perché nel frattempo stanno facendo cose che mantengono il problema.
            </p>
          </div>

          {[
            {
              n: '1',
              title: 'Tenere lo smartphone basso e il collo piegato',
              problema: 'Quando inclini la testa di 60° per guardare lo schermo — la posizione più comune — la tua colonna cervicale sopporta l\'equivalente di 27 kg invece di 5. Per 3-4 ore al giorno. Ogni giorno. Per anni. I muscoli sub-occipitali si accorciano progressivamente. La curva cervicale si riduce. I dischi vengono compressi in modo asimmetrico. Il risultato lo senti ogni mattina.',
              soluzione: 'Alza il telefono all\'altezza degli occhi — usa un supporto se necessario. Fai pause attive ogni 20-30 minuti: ritrai il mento verso la nuca (chin tuck) per 10 secondi, 5 volte. Sembra banale. Fa la differenza.',
            },
            {
              n: '2',
              title: 'Usare massaggi come unico trattamento',
              problema: 'Il massaggio al collo può dare sollievo per ore o qualche giorno — ma non risolve la causa sottostante. Se il problema è una disfunzione articolare cervicale, un muscolo scaleno iperattivo che comprime il plesso brachiale, o una disfunzione osteopatica dell\'occipite, il massaggio superficiale non arriva lì. Il dolore torna, spesso nel giro di 24-48 ore.',
              soluzione: 'Il massaggio può essere parte di un percorso terapeutico, ma non può essere l\'intero percorso. La terapia manuale fisioterapica, le mobilizzazioni articolari specifiche e l\'osteopatia lavorano sulla struttura — non solo sul sintomo muscolare superficiale.',
            },
            {
              n: '3',
              title: 'Fare stretching aggressivo durante le crisi acute',
              problema: 'Quando il collo è in crisi acuta, fare rotazioni forzate o tirare la testa con le mani può irritare ulteriormente le strutture infiammate. Le capsule articolari sono già sotto stress — ulteriori forze di trazione possono aumentare l\'infiammazione, non ridurla. Ho visto pazienti che si sono bloccati definitivamente cercando di "sciogliersi" da soli.',
              soluzione: 'In fase acuta: riposo relativo, non movimenti forzati. Ghiaccio sulle zone infiammate (15 minuti ogni 2 ore). Movimenti gentili nei limiti del non-dolore. Lo stretching specifico per la cervicale va fatto nella fase giusta del trattamento — e con la tecnica corretta, non improvvisata.',
            },
            {
              n: '4',
              title: 'Aspettare che passi da solo',
              problema: 'La cervicalgia cronica si "costruisce" nel tempo attraverso compensazioni progressive. Ogni episodio non risolto lascia una disfunzione residua. La mobilità si riduce un po\'. I muscoli si irrigidiscono un po\'. Il sistema nervoso diventa un po\' più sensibile. Tre anni dopo, quello che sembrava un problema temporaneo è diventato una condizione cronica radicata.',
              soluzione: 'La regola empirica: se il dolore cervicale non migliora in modo evidente entro 2-3 settimane, è il momento di una valutazione fisioterapica. Prima si interviene, meno percorso serve per risolvere. Un problema recente di 3 settimane richiede spesso la metà del percorso rispetto a uno di 3 anni.',
            },
            {
              n: '5',
              title: 'Trattare solo il collo ignorando il resto del corpo',
              problema: 'La cervicale non è un\'isola. È connessa alla postura globale, alla zona dorsale, alle spalle, al diaframma. Una persona con le spalle proiettate in avanti e la zona dorsale cifosica terrà la cervicale in iperlordosi compensatoria — qualunque trattamento locale faccia sulla cervicale, il problema ritornerà perché la causa è nella postura globale.',
              soluzione: 'Un buon fisioterapista guarda tutto il corpo, non solo la zona che fa male. Il Metodo Mézières e l\'osteopatia lavorano sulle catene muscolari globali — non sul singolo muscolo contratto. Spesso correggere la postura dorsale risolve la cervicale senza nemmeno toccarla direttamente.',
            },
          ].map(({ n, title, problema, soluzione }) => (
            <div key={n} className="p-5 bg-card rounded-xl border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-red-700">{n}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mt-1">{title}</h2>
              </div>
              <div className="space-y-3 pl-14">
                <div>
                  <p className="text-xs font-bold text-red-700 uppercase tracking-wide mb-1">❌ Il problema</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{problema}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">✅ La soluzione</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{soluzione}</p>
                </div>
              </div>
            </div>
          ))}

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Il punto di partenza che cambia tutto</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Evitare questi errori aiuta — ma non sostituisce una valutazione clinica che identifichi
              la causa specifica del tuo dolore cervicale. Ci sono dozzine di possibili cause diverse,
              e ognuna richiede un approccio diverso. Ciò che funziona per una cervicalgia posturale
              è diverso da ciò che funziona per un&apos;ernia cervicale C5-C6 o per una cefalea cervicogenica.
              Nel mio studio a Pontecorvo la prima seduta serve esattamente a capirlo.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/cervicale-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Cervicale a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="cervicale-errori" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
