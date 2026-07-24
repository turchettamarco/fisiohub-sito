import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Quando lo Stress si Scarica sul Corpo: il Sistema Neurovegetativo | Marco Turchetta',
  description: 'Tensione permanente, stomaco chiuso, respiro corto, sonno leggero ed esami normali. Cos\'è lo squilibrio neurovegetativo e perché il lavoro manuale può avere un ruolo. Marco Turchetta, osteopata a Pontecorvo (FR).',
  keywords: ['stress e corpo osteopatia', 'sistema neurovegetativo', 'nervo vago osteopatia', 'tensione muscolare da stress', 'disturbi funzionali Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/stress-sistema-neurovegetativo' },
  openGraph: {
    type: 'article',
    title: 'Quando lo Stress si Scarica sul Corpo: il Sistema Neurovegetativo | Marco Turchetta',
    description: 'Tensione permanente, stomaco chiuso, respiro corto, sonno leggero ed esami normali. Cos\'è lo squilibrio neurovegetativo e perché il lavoro manuale può avere un ruolo. Marco Turchetta, osteopata a Pontecorvo (FR).',
    url: 'https://turchettamarco.com/blog/stress-sistema-neurovegetativo',
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
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 18 luglio 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Osteopata a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Quando lo stress si scarica sul corpo: il sistema neurovegetativo
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            &quot;Gli accertamenti sono a posto, è solo stress.&quot; Detta così sembra un modo per
            liquidare la questione. In realtà descrive un meccanismo preciso, con effetti
            misurabili sul corpo — e con qualcosa di concreto da fare.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <p className="text-muted-foreground leading-relaxed">
              C&apos;è una categoria di pazienti che arriva in studio con un elenco di sintomi che
              sembrano non stare insieme: spalle sempre contratte, stomaco chiuso, colon irritabile,
              sonno leggero, respiro che sembra non arrivare mai in fondo, mani fredde, testa
              pesante. Hanno fatto accertamenti, tutti negativi. E la conclusione, spesso
              frettolosa, è &quot;è stress&quot;. Il punto è che quella conclusione è probabilmente
              corretta — ma detta in quel modo non aiuta nessuno.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Due sistemi che si alternano</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il sistema nervoso autonomo — o neurovegetativo — è la parte del sistema nervoso che
              lavora senza che tu debba pensarci. Ha due rami:
            </p>
            <div className="space-y-3">
              <div className="p-5 bg-card rounded-xl border border-border">
                <p className="font-semibold text-foreground mb-1">Il ramo simpatico — l&apos;attivazione</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Accelera il cuore, aumenta la pressione, tende i muscoli, dirotta il sangue verso gli arti, mette in pausa la digestione. Serve per reagire.</p>
              </div>
              <div className="p-5 bg-card rounded-xl border border-border">
                <p className="font-semibold text-foreground mb-1">Il ramo parasimpatico — il recupero</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Il suo protagonista è il nervo vago: rallenta il cuore, riattiva la digestione, favorisce il sonno e la riparazione dei tessuti.</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              In condizioni normali i due rami si alternano nell&apos;arco della giornata. Il
              problema nasce quando l&apos;attivazione non si spegne mai del tutto: si resta in una
              condizione di allerta di fondo, giorno dopo giorno. Il corpo non è progettato per
              stare in allerta permanente — è progettato per attivarsi, risolvere e tornare in
              equilibrio. È il mancato ritorno all&apos;equilibrio che produce i sintomi.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Le quattro fasi</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hans Selye, il fisiologo che ha descritto per primo la risposta allo stress, la
              divideva in fasi. Semplificando:
            </p>
            <div className="space-y-3">
              {[
                { n: '1', t: 'Reazione', d: 'L\'organismo reagisce e torna alla normalità. È fisiologico e utile: senza questa capacità non sopravviveremmo.' },
                { n: '2', t: 'Resistenza', d: 'La reazione dura più del necessario. Compaiono i primi sintomi — tensione muscolare, sonno disturbato, digestione alterata — ma tutto è ancora completamente reversibile.' },
                { n: '3', t: 'Stabilizzazione', d: 'Lo squilibrio si consolida. I sintomi diventano quotidiani e la persona si abitua a conviverci, arrivando a considerarli normali.' },
                { n: '4', t: 'Esaurimento', d: 'Qui il rischio è che una disfunzione cronicamente funzionale finisca per produrre un danno strutturale reale.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-primary">{n}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Il messaggio importante riguarda le prime fasi: <strong className="text-foreground">più
              si interviene presto, più il quadro è reversibile</strong>. Aspettare che passi da
              solo è la strategia peggiore, perché l&apos;organismo si abitua a considerare normale
              uno stato di allerta.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">I sintomi che vedo più spesso</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Chi ha uno squilibrio neurovegetativo cronico raramente presenta un solo sintomo:
              tipicamente ne porta diversi, distribuiti su apparati diversi.
            </p>
            <div className="space-y-3">
              {[
                { org: 'Muscolo-scheletrici', desc: 'Tensione permanente su trapezi, collo e mandibola. Bruxismo notturno. Dolori diffusi che cambiano sede. Contratture che tornano puntualmente dopo ogni trattamento.' },
                { org: 'Respiratori', desc: 'Respiro corto e alto, con la sensazione di dover sospirare spesso. Senso di oppressione al petto con esami cardiologici normali. Difficoltà a fare un respiro "completo".' },
                { org: 'Digestivi', desc: 'Stomaco chiuso, digestione lenta, gonfiore. Alternanza di stitichezza e diarrea tipica del colon irritabile. Nausea nei periodi di maggiore carico.' },
                { org: 'Generali', desc: 'Sonno che arriva tardi o si interrompe alle tre di notte. Stanchezza che non passa col riposo. Mani e piedi freddi. Difficoltà di concentrazione, sensazione di "testa piena".' },
              ].map(({ org, desc }) => (
                <div key={org} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              La caratteristica comune è che <strong className="text-foreground">gli esami sono
              normali</strong>. Non perché il paziente stia inventando, ma perché non c&apos;è
              ancora un danno d&apos;organo: c&apos;è un problema di regolazione. La funzione è
              alterata, la struttura no.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Perché un lavoro sul corpo può avere un effetto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La comunicazione tra corpo e sistema nervoso autonomo va in due direzioni. Non è solo
              il cervello che dà ordini alla periferia: la periferia manda al sistema nervoso una
              quantità enorme di informazioni continue. Una zona costantemente irritata — un&apos;articolazione
              bloccata, una cicatrice tesa, un diaframma rigido — invia un flusso di segnali che
              contribuisce a mantenere il sistema in stato di allerta.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il principio operativo che ne deriva è semplice: <strong className="text-foreground">ridurre
              le fonti di irritazione periferica abbassa il rumore di fondo</strong> che alimenta
              l&apos;attivazione. Non risolve la causa psicologica o ambientale dello stress, ma
              abbassa la soglia da cui parte. Nel concreto significa lavorare sul diaframma e sulla
              gabbia toracica (il respiro diaframmatico profondo stimola direttamente il nervo
              vago), sul tratto cervicale alto e sulla base del cranio, sul tratto dorsale da cui
              parte l&apos;innervazione simpatica diretta agli organi, sulle cicatrici addominali
              post-chirurgiche e sulle disfunzioni articolari croniche, ovunque siano.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le prove scientifiche in quest&apos;area sono ancora parziali. Ci sono studi che
              mostrano effetti misurabili del trattamento manuale su parametri autonomici, come la
              variabilità della frequenza cardiaca, ma siamo lontani dalle certezze che abbiamo su
              altri ambiti della fisioterapia. Preferisco dirlo che venderti una sicurezza che non
              esiste.
            </p>
          </div>

          <div className="p-5 bg-card rounded-xl border-l-4 border-l-amber-500 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Da inquadrare prima con il medico</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Dolore toracico sotto sforzo, palpitazioni frequenti o svenimenti</li>
              <li>Perdita di peso non voluta o febbricola persistente</li>
              <li>Sintomi comparsi improvvisamente e in modo marcato, senza un contesto</li>
              <li>Attacchi di panico ricorrenti o ansia che limita la vita quotidiana: qui serve un supporto psicologico, e non è un ripiego</li>
              <li>Umore stabilmente basso, perdita di interesse, pensieri che ti spaventano: parlane con il medico curante</li>
              <li>Sintomi digestivi importanti mai inquadrati con accertamenti</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa puoi fare tu, che conta più di quanto pensi</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sarei disonesto se ti dicessi che qualche seduta risolve uno squilibrio costruito in
              anni. Il lavoro manuale può abbassare il livello di attivazione e darti sollievo; ciò
              che lo mantiene nel tempo sono le cose che fai tutti i giorni.
            </p>
            <div className="space-y-3">
              {[
                { t: 'Respirazione lenta, cinque minuti al giorno', d: 'Inspira per quattro secondi, espira per sei. L\'espirazione lunga è la parte che attiva il ramo del recupero. È noioso e funziona.' },
                { t: 'Attività aerobica regolare', d: 'Trenta o quaranta minuti, tre volte a settimana, a intensità moderata. È tra gli interventi con il miglior rapporto tra sforzo e beneficio su questi quadri.' },
                { t: 'Orari del sonno stabili', d: 'Andare a letto e alzarsi sempre alla stessa ora vale più di qualsiasi integratore.' },
                { t: 'Attenzione ai cumuli', d: 'Caffeina fino a sera, alcol per dormire, schermi fino a un minuto prima di chiudere gli occhi: sono tre acceleratori che spesso convivono.' },
                { t: 'Se serve, chiedi aiuto psicologico', d: 'Uno psicoterapeuta non è per chi "sta male sul serio": è per chi vuole smettere di gestire da solo un carico che non è gestibile da soli. Nella mia esperienza i risultati migliori arrivano quando le due cose procedono insieme.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">&quot;Quindi i miei sintomi sono immaginari?&quot;</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No, ed è la cosa più importante di tutto l&apos;articolo. Sono sintomi reali, prodotti
              da un&apos;alterazione reale della regolazione nervosa. La differenza è che non c&apos;è
              ancora un danno d&apos;organo — il che, guardandola bene, è una buona notizia:
              significa che è reversibile.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/osteopatia-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Osteopatia a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="stress-sistema-neurovegetativo" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
