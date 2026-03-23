import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AlertCircle, CheckCircle, Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mal di Schiena: Quando Preoccuparsi Davvero | Marco Turchetta Pontecorvo',
  description: 'I segnali di allarme del mal di schiena che richiedono attenzione medica urgente e quelli che non sono pericolosi. Guida pratica di Marco Turchetta, fisioterapista a Pontecorvo.',
  keywords: ['mal di schiena quando preoccuparsi', 'segnali allarme mal di schiena', 'lombalgia grave sintomi', 'mal di schiena fisioterapista Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/mal-di-schiena-quando-preoccuparsi' },
}

export default function Post() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-red-50 text-red-700 border-red-200">Patologie</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 15 marzo 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Fisioterapista a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Mal di schiena: quando preoccuparsi davvero
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Il mal di schiena fa paura. Soprattutto quando arriva all&apos;improvviso, quando è forte,
            quando non passa. La mente va subito alle ipotesi peggiori: ernia, protrusione, danno permanente.
            Nella maggior parte dei casi, la realtà è meno drammatica di così.
            Ma esistono segnali precisi che richiedono attenzione urgente — e ignorarli è un errore grave.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              La verità che nessuno ti dice: il 90% del mal di schiena non è pericoloso
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Circa il 90% del mal di schiena è definito clinicamente come "aspecifico" —
              non ha una causa strutturale grave identificabile.
              Muscoli in spasmo, faccette articolari irritate, legamenti sovraccaricati,
              postura scorretta accumulata per anni: cause reali, concrete, ma non pericolose per la vita.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Questo non significa che il dolore sia "nella testa". Significa che la struttura portante
              della colonna vertebrale è integra. Il problema è reale e merita trattamento —
              ma non è un&apos;emergenza.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il problema vero del mal di schiena aspecifico non è la gravità — è la tendenza a cronicizzarsi
              quando non viene trattato correttamente. Ogni episodio non risolto lascia una disfunzione residua.
              Ogni disfunzione residua predispone al prossimo episodio, spesso più intenso.
            </p>
          </div>

          {/* Segnali rossi */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              I segnali di allarme: vai al Pronto Soccorso subito
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Questi sono i cosiddetti "red flags" — segnali di allarme che indicano possibili cause gravi
              che richiedono valutazione medica urgente, non fisioterapia.
            </p>
            <div className="p-5 bg-red-50 rounded-xl border border-red-200 mb-4">
              <p className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" /> Non aspettare — vai al PS
              </p>
              <ul className="space-y-2">
                {[
                  "Perdita del controllo di vescica o intestino (incontinenza o ritenzione improvvisa) — segnale di emergenza neurologica",
                  "Debolezza progressiva alle gambe — difficoltà a camminare o a mantenere l'equilibrio",
                  "Intorpidimento nella zona perineale (genitali, interno coscia) — la zona a sella",
                  "Dolore notturno intenso che non si calma in nessuna posizione e ti sveglia ogni notte",
                  "Mal di schiena dopo un trauma importante — caduta da altezza, incidente stradale",
                  "Febbre alta (38.5°+) associata al dolore alla schiena",
                  "Dimagrimento rapido e non voluto associato al dolore alla schiena",
                  "Storia personale di tumori — mal di schiena nuovo o che cambia carattere",
                  "Uso di droghe per via endovenosa — rischio di ascesso epidurale",
                ].map(s => (
                  <li key={s} className="flex items-start gap-2 text-sm text-red-800">
                    <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />{s}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Se hai uno di questi segnali, non aspettare la visita dal fisioterapista o dal medico di base.
              Il Pronto Soccorso è la risposta giusta.
            </p>
          </div>

          {/* Segnali gialli */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              I segnali gialli: consulta presto un professionista
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Non sono emergenze, ma richiedono valutazione fisioterapica entro pochi giorni — non settimane.
            </p>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200 mb-4">
              <p className="font-semibold text-amber-800 mb-3">Non aspettare troppo con questi segnali</p>
              <ul className="space-y-2">
                {[
                  "Dolore che scende lungo la gamba oltre il ginocchio (sciatalgia) — indica irritazione radicolare",
                  "Formicolio o bruciore persistente alla gamba o al piede",
                  "Dolore che non migliora dopo 3 settimane di riposo relativo",
                  "Episodi ricorrenti ogni 2-3 mesi — il corpo ti sta dicendo qualcosa",
                  "Dolore che peggiora progressivamente invece di migliorare",
                  "Limitazione importante nei movimenti quotidiani: vestirsi, guidare, lavorare",
                ].map(s => (
                  <li key={s} className="flex items-start gap-2 text-sm text-amber-800">
                    <CheckCircle className="h-4 w-4 flex-shrink-0 mt-0.5 text-amber-600" />{s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cosa fare prime 48 ore */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Cosa fare nelle prime 48-72 ore (guida pratica)
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-green-800 mb-2">✅ Fai questo</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  {[
                    "Continua a muoverti — il riposo totale a letto peggiora la situazione",
                    "Ghiaccio nelle prime 24-48h se c'è infiammazione acuta: 15 minuti ogni 2 ore",
                    "Cammina lentamente — il movimento aiuta il recupero",
                    "Dormi in posizione fetale con un cuscino tra le ginocchia",
                    "Antidolorifici se necessari — ma sono un palliativo, non una cura",
                    "Contatta un fisioterapista per una valutazione il prima possibile",
                  ].map(i => <li key={i}>→ {i}</li>)}
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h3 className="font-semibold text-red-800 mb-2">❌ Evita questo</h3>
                <ul className="space-y-2 text-sm text-red-700">
                  {[
                    "Riposo a letto per più di 1-2 giorni — indebolisce i muscoli e prolunga il dolore",
                    "Massaggi intensi in fase acuta — possono peggiorare l'infiammazione",
                    "Calore nelle prime 48 ore se c'è infiammazione acuta",
                    "Automedicazione con antidolorifici per settimane senza valutazione",
                    "Aspettare 'che passi da solo' — ogni settimana che passa radica il problema",
                    "Fare esercizi pesanti senza sapere cosa sta succedendo",
                  ].map(i => <li key={i}>→ {i}</li>)}
                </ul>
              </div>
            </div>
          </div>

          {/* Il vero problema: cronicizzazione */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Il rischio reale che pochi spiegano: la cronicizzazione
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il mal di schiena non trattato correttamente ha una tendenza precisa: cronicizzarsi.
              Non per magia — per una sequenza logica di eventi biologici.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Primo episodio acuto: dolore forte, poi passa. Secondo episodio: arriva prima, è un po&apos; più forte.
              Terzo episodio: ancora prima, ancora più forte. Quarto episodio: è quasi sempre presente,
              a livelli diversi. Questo non è "sfortuna" — è il sistema nervoso che impara il dolore.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La sensibilizzazione centrale è il processo per cui il sistema nervoso diventa progressivamente
              più sensibile al dolore. Bastano meno stimoli per generare più dolore.
              Una volta che il mal di schiena è cronico da anni, trattarlo diventa significativamente più complesso.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Questo è il motivo per cui la fisioterapia precoce non è una spesa inutile —
              è il miglior investimento che puoi fare per la tua schiena.
            </p>
          </div>

          {/* Quando il dolore NON corrisponde alla RMN */}
          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">
              &quot;Ho fatto la RMN e c&apos;è un&apos;ernia — devo operarmi?&quot;
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Probabilmente no. Studi su popolazioni senza dolore alla schiena mostrano che ernie discali
              e protrusioni sono presenti in una percentuale significativa di persone completamente asintomatiche.
              L&apos;ernia visibile alla RMN non è necessariamente la causa del tuo dolore.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              La chirurgia è necessaria solo in una minoranza di casi — principalmente quando ci sono deficit
              neurologici progressivi (debolezza agli arti, perdita di sensibilità importante, problemi sfinterici).
              In tutti gli altri casi, il trattamento conservativo — fisioterapia + osteopatia + esercizio —
              risolve la maggior parte delle ernie senza bisogno dell&apos;intervento.
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
          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
