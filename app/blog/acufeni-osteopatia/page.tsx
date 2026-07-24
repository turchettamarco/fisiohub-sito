import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Acufeni e Osteopatia Cranica: quando il ronzio ha una spiegazione meccanica | Marco Turchetta',
  description: 'Quel fischio o ronzio nell\'orecchio che non se ne va. In molti casi gli acufeni hanno una causa meccanica trattabile con l\'osteopatia. Marco Turchetta osteopata a Pontecorvo (FR).',
  keywords: [
    'acufeni osteopatia', 'fischio orecchio osteopata', 'ronzio orecchio trattamento',
    'acufeni causa meccanica', 'osteopatia cranica Pontecorvo', 'acufeni Pontecorvo',
    'osteopata acufeni', 'tinnitus osteopatia',
  ],
  alternates: { canonical: 'https://turchettamarco.com/blog/acufeni-osteopatia' },
  openGraph: {
    title: 'Acufeni e Osteopatia: quando quel ronzio ha una spiegazione meccanica',
    description: 'In molti casi gli acufeni hanno una causa meccanica — cervicale, mandibola, cranio. L\'osteopatia può fare la differenza.',
    url: 'https://turchettamarco.com/blog/acufeni-osteopatia',
  },
}

export default function Post() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-teal-50 text-teal-700 border-teal-200">Osteopatia</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" /> 26 marzo 2026
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <User className="h-3 w-3" /> Marco Turchetta — Osteopata a Pontecorvo
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Acufeni e osteopatia cranica: quando quel ronzio ha una spiegazione meccanica
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Quel fischio o ronzio nell&apos;orecchio che non se ne va. Lo senti la sera quando tutto è
            silenzio, oppure ti accompagna tutto il giorno. Magari ti hanno detto che &quot;devi conviverci&quot;
            o che &quot;non c&apos;è niente da fare&quot;. Eppure, in molti casi, una valutazione osteopatica
            può fare la differenza — perché spesso gli acufeni hanno una componente meccanica
            che può essere trattata.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-10">

          {/* Cosa sono */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa sono gli acufeni</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              L&apos;acufene è la percezione di un suono — fischio, ronzio, sibilo, pulsazione —
              in assenza di una fonte sonora esterna. Non è un&apos;invenzione: il cervello riceve
              davvero un segnale, solo che quel segnale non viene dall&apos;esterno.
              Colpisce tra il 10 e il 15% della popolazione, con un picco intorno ai 50 anni.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2">Acufeni non pulsatili</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Suono continuo — fischio costante o ronzio di sottofondo che può variare
                  di intensità durante la giornata. Spesso peggiora con lo stress.
                </p>
              </div>
              <div className="p-4 bg-card rounded-xl border border-border">
                <h3 className="font-semibold text-foreground text-sm mb-2">Acufeni pulsatili</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Suono intermittente, spesso &quot;a battito&quot;. Possono essere legati a questioni
                  vascolari, alla pressione arteriosa o a un problema di drenaggio venoso.
                </p>
              </div>
            </div>
          </div>

          {/* Cause */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Le cause meccaniche degli acufeni — quelle che spesso nessuno cerca
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              La prima cosa da fare è sempre una visita otorinolaringoiatrica per escludere
              cause che richiedono un intervento medico. In molti casi, però, gli esami
              risultano nella norma — e il paziente resta senza risposte. È qui che vale
              la pena guardare più in là.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: '🦴',
                  t: 'Il rachide cervicale',
                  d: 'Le prime vertebre cervicali — in particolare la zona tra la base del cranio e la seconda cervicale — sono in stretta relazione con la vascolarizzazione dell\'orecchio interno. Una disfunzione a questo livello può alterare il flusso di sangue verso l\'orecchio e contribuire alla comparsa o al mantenimento dell\'acufene.',
                },
                {
                  icon: '🦷',
                  t: 'L\'articolazione della mandibola (ATM)',
                  d: 'Il legame tra mandibola e acufeni è documentato: i pazienti con disturbi dell\'articolazione temporo-mandibolare hanno una probabilità fino a 8 volte maggiore di soffrire di acufeni. L\'ATM si trova a pochi millimetri dall\'orecchio, e le tensioni in quella zona possono influenzare direttamente le strutture uditive.',
                },
                {
                  icon: '💀',
                  t: 'Le ossa del cranio',
                  d: 'L\'osso temporale — quello che contiene l\'orecchio — si articola con l\'occipite, lo sfenoide e il parietale attraverso suture che mantengono una certa mobilità per tutta la vita. Una riduzione di questa mobilità, magari dopo un trauma, può influire sul funzionamento dell\'orecchio e sul drenaggio dei liquidi nella zona. La tromba di Eustachio può trovarsi in condizione di scarso drenaggio se le strutture ossee circostanti sono in restrizione.',
                },
                {
                  icon: '🔥',
                  t: 'Il reflusso gastroesofageo',
                  d: 'Può sembrare strano, ma il reflusso è una causa riconosciuta di acufeni. Gli acidi gastrici possono irritare la mucosa della tromba di Eustachio e dell\'orecchio medio, causando infiammazione locale che si traduce in ronzii e sensazione di orecchio chiuso.',
                },
              ].map(({ icon, t, d }) => (
                <div key={t} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                  <span className="text-2xl flex-shrink-0">{icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Come lavora l'osteopata */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Come lavoro sugli acufeni con l&apos;osteopatia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              L&apos;approccio osteopatico non si concentra sull&apos;orecchio in sé,
              ma sulle strutture che possono influenzare il suo funzionamento.
              Il ragionamento è semplice: se qualcosa comprime, traziona o limita
              il movimento di un&apos;area vicina all&apos;orecchio, quell&apos;area va liberata.
            </p>
            <div className="space-y-3">
              {[
                { t: 'Rachide cervicale e dorsale', d: 'Ristabilisce una buona mobilità vertebrale e un corretto funzionamento del sistema nervoso e vascolare della zona. Le prime cervicali sono particolarmente importanti per il loro rapporto con l\'arteria vertebrale e il sistema nervoso autonomo.' },
                { t: 'Cranio — tecniche sulle ossa temporali e lo sfenoide', d: 'Lavoro sulla mobilità delle suture craniche, sulla tromba di Eustachio (con una tecnica di pompaggio dedicata) e sulle membrane che rivestono l\'interno del cranio. Obiettivo: migliorare il drenaggio e ridurre le tensioni che irritano le strutture nervose dell\'orecchio.' },
                { t: 'Sistema stomatognatico', d: 'Mandibola, muscoli masticatori, osso ioide, lingua e faringe. Se l\'acufene ha una componente legata all\'ATM, lavorare su queste strutture è fondamentale.' },
                { t: 'Diaframma e visceri', d: 'Se si sospetta una componente da reflusso, il trattamento delle barriere anti-reflusso e del diaframma contribuisce a ridurre l\'irritazione della tromba di Eustachio.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">→ {t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cosa aspettarsi */}
          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              Cosa aspettarsi — onestamente
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Non tutti gli acufeni rispondono allo stesso modo. Quelli legati a una
              componente meccanica — cervicale, mandibolare o cranica — sono quelli
              che ottengono i risultati migliori con l&apos;osteopatia.
            </p>
            <p className="text-muted-foreground leading-relaxed font-medium text-foreground">
              Un buon indicatore: se il tuo acufene cambia di intensità con i movimenti
              del collo, stringendo i denti, premendo su certi punti del viso o della mandibola
              — è molto probabile che ci sia una componente meccanica su cui si può lavorare.
            </p>
          </div>

          {/* Quando venire */}
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">
              Quando vale la pena prenotare una valutazione osteopatica
            </h2>
            <div className="space-y-2">
              {[
                'Il tuo acufene è comparso dopo un trauma, un colpo di frusta o un intervento dentale',
                'Soffri anche di dolore cervicale, mal di testa o tensione alla mandibola',
                'Gli esami ORL sono risultati nella norma ma il problema persiste',
                'L\'acufene cambia intensità durante la giornata o in base alla posizione',
                'Hai problemi di reflusso gastroesofageo associati',
                'Hai già provato altre strade senza risultato',
              ].map(s => (
                <div key={s} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                  <span className="text-primary font-bold flex-shrink-0">→</span>
                  <span className="text-sm text-muted-foreground">{s}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              L&apos;osteopatia non si sostituisce alla visita medica specialistica, ma la integra —
              cercando e trattando quelle cause meccaniche che spesso sfuggono agli esami strumentali.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione osteopatica <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/osteopatia-pontecorvo"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Osteopatia a Pontecorvo →
            </Link>
          </div>

          <ArticleExtras slug="acufeni-osteopatia" />

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
