import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Intestino e Mal di Schiena: Osteopatia Viscerale Spiegata | Marco Turchetta',
  description: 'Il collegamento tra intestino e lombalgia è reale. Come l\'osteopatia viscerale tratta le disfunzioni viscerali che causano dolore alla schiena. Marco Turchetta osteopata Pontecorvo.',
  keywords: ['osteopatia viscerale intestino', 'mal di schiena intestino', 'colon irritabile lombalgia', 'osteopatia viscerale Pontecorvo', 'disfunzione viscerale'],
  alternates: { canonical: 'https://turchettamarco.com/blog/osteopatia-viscerale-intestino' },
  openGraph: {
    type: 'article',
    title: 'Intestino e Mal di Schiena: Osteopatia Viscerale Spiegata | Marco Turchetta',
    description: 'Il collegamento tra intestino e lombalgia è reale. Come l\'osteopatia viscerale tratta le disfunzioni viscerali che causano dolore alla schiena. Marco Turchetta osteopata Pontecorvo.',
    url: 'https://turchettamarco.com/blog/osteopatia-viscerale-intestino',
    siteName: 'Marco Turchetta Fisioterapia e Osteopatia',
    locale: 'it_IT',
  },
}

export default function Post() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-teal-50 text-teal-700 border-teal-200">Osteopatia</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 22 marzo 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-6">Quando l&apos;intestino fa male alla schiena: osteopatia viscerale spiegata</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "Ho fatto RMN, TAC, ecografie — tutto negativo. Ma il mal di schiena non passa." È uno dei casi più frustranti per i pazienti — e uno dei più interessanti da un punto di vista clinico. Spesso la causa non è nella schiena. È nell&apos;intestino.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">La connessione viscerosomatica: come funziona</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Il sistema nervoso autonomo innerva sia le strutture viscerali (organi interni) che quelle somatiche (muscoli, articolazioni, fascia). Questo significa che un organo in difficoltà può generare segnali nervosi che il cervello interpreta come dolore muscolare o articolare — in zone lontane dall&apos;organo stesso.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Non è una teoria alternativa — è anatomia. La connessione tra colon e colonna lombare, tra stomaco e colonna dorsale, tra fegato e spalla destra, è documentata nei testi di anatomia e fisiologia. Gli osteopati lavorano su queste connessioni da oltre un secolo.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">I collegamenti viscero-somatici più frequenti</h2>
            <div className="space-y-3">
              {[
                { org: '🦠 Colon e intestino crasso', zona: 'Lombalgia sinistra', desc: 'Il sigma (parte finale del colon) si trova sul lato sinistro del bacino. Quando è irritato, teso o in disbiosi, può generare tensioni fasciali che si proiettano sulla zona lombare sinistra e sul gluteo. Molte lombalgìe sinistre croniche che non rispondono alla fisioterapia convenzionale migliorano significativamente con il trattamento osteopatico viscerale del sigma.' },
                { org: '🫁 Diaframma', zona: 'Lombalgia bilaterale e dorsalgia', desc: 'Il diaframma ha inserzioni sulle prime tre vertebre lombari. Quando è rigido — per stress cronico, respirazione superficiale, tensioni gastriche — tira letteralmente la colonna lombare in avanti, aumentando la lordosi e il carico sui dischi. La rieducazione diaframmatica è spesso più efficace di qualsiasi trattamento locale sulla schiena.' },
                { org: '💛 Fegato e cistifellea', zona: 'Dorsalgia destra e spalla destra', desc: 'Fegato e cistifellea si proiettano sulla colonna dorsale destra (T5-T9) e sulla spalla destra attraverso il nervo frenico. Un fegato congestionato o una cistifellea con calcoli può causare dolore cronico alla zona dorsale destra che non risponde ai trattamenti locali.' },
                { org: '🫃 Stomaco e cardias', zona: 'Cervicale e dorsale alta', desc: 'Le tensioni gastriche — reflusso, gastrite, ernia iatale — possono tensionare il nervo vago e i legamenti che connettono lo stomaco al diaframma, generando tensioni che risalgono fino alla cervicale. Molti pazienti con cervicalgia cronica associata a problemi digestivi beneficiano dell&apos;osteopatia viscerale.' },
              ].map(({ org, zona, desc }) => (
                <div key={org} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-semibold text-foreground">{org}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">→ {zona}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Come l&apos;osteopatia viscerale valuta e tratta</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La valutazione osteopatica viscerale inizia sempre con l&apos;anamnesi: abitudini alimentari, transito intestinale, storia di interventi chirurgici addominali, episodi di gastrite o reflusso. Poi eseguo test di mobilità viscerale con le mani — valuto la libertà di movimento di ogni organo nel suo compartimento fasciale.</p>
            <p className="text-muted-foreground leading-relaxed mb-4">Il trattamento usa tecniche manuali gentle e precise — niente di brutale. Si lavora sulla fascia che avvolge l&apos;organo, sulle strutture legamentose che lo sospendono, sulla mobilità diaframmatica. La sessione dura 45–60 minuti e viene spesso integrata con il trattamento strutturale della colonna.</p>
            <p className="text-muted-foreground leading-relaxed">I risultati non sono immediati come nella terapia manuale ortopedica — richiedono qualche seduta. Ma in molti pazienti con lombalgia cronica "inspiegabile" i miglioramenti sono significativi e duraturi.</p>
          </div>

          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-sm text-amber-800 leading-relaxed"><strong>Importante:</strong> l&apos;osteopatia viscerale non sostituisce il medico gastroenterologo. Se hai sintomi digestivi importanti — sangue nelle feci, dimagrimento improvviso, dolore addominale severo — la priorità è la diagnosi medica. L&apos;osteopatia viscerale lavora sulle disfunzioni funzionali, non su patologie organiche che richiedono trattamento medico.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/osteopatia-viscerale-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Osteopatia viscerale a Pontecorvo →
            </Link>
          </div>

          <ArticleExtras slug="osteopatia-viscerale-intestino" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
