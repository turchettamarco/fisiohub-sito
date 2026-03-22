import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Osteopatia Viscerale a Pontecorvo | Reflusso, Colon Irritabile — Marco Turchetta',
  description: 'Osteopatia viscerale a Pontecorvo (FR). Marco Turchetta osteopata. Reflusso gastroesofageo, colon irritabile, gonfiore addominale, digestione lenta, intestino irritabile, aderenze. Prenota.',
  keywords: [
    'osteopatia viscerale Pontecorvo', 'osteopata viscerale Pontecorvo',
    'reflusso gastroesofageo Pontecorvo', 'colon irritabile Pontecorvo',
    'intestino irritabile Pontecorvo', 'gonfiore addominale Pontecorvo',
    'digestione lenta Pontecorvo', 'stipsi Pontecorvo', 'aderenze addominali Pontecorvo',
  ],
  alternates: { canonical: 'https://turchettamarco.com/osteopatia-viscerale-pontecorvo' },
}

export default function OsteopatiaVisceralePontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Osteopatia Viscerale · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Osteopatia Viscerale a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            L'osteopatia viscerale è una branca dell'osteopatia che si occupa della mobilità e della motilità degli organi interni — stomaco, intestino, fegato, reni, utero. Quando gli organi perdono la loro libertà di movimento, possono generare sintomi locali (digestivi, urologici, ginecologici) ma anche dolori a distanza come mal di schiena, cervicalgia o cefalea.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come funziona l'osteopatia viscerale</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Gli organi interni non sono strutture fisse e rigide — hanno una mobilità propria, ritmica, legata ai cicli respiratori e al ritmo cranio-sacrale. Questa mobilità è garantita da legamenti e fasce che li connettono alla colonna vertebrale, alla gabbia toracica, al bacino. Quando queste connessioni si irrigidiscono — per infiammazioni, interventi chirurgici, traumi, stress cronico — l'organo perde mobilità e genera tensioni nelle strutture circostanti.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L'osteopata viscerale valuta questa mobilità con le mani e applica tecniche di mobilizzazione gentle e specifiche per ripristinarla. Non si tratta di massaggio addominale — è un lavoro preciso e delicato sulle tensioni fasciali che limitano la libertà degli organi.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Condizioni digestive e viscerali trattate</h2>
            <div className="space-y-3">
              {[
                { t: 'Reflusso gastroesofageo e ernia iatale', d: 'Il reflusso può essere favorito da tensioni diaframmatiche e da una ridotta mobilità dello stomaco. L\'osteopatia viscerale lavora sul diaframma, sull\'esofago e sullo stomaco per ridurre le tensioni meccaniche che favoriscono il reflusso. Si integra — non sostituisce — il trattamento medico.' },
                { t: 'Colon irritabile e intestino irritabile', d: 'La sindrome del colon irritabile — gonfiore, crampi, alternanza stipsi/diarrea — ha spesso una componente meccanica oltre che funzionale. L\'osteopatia viscerale migliora la mobilità del colon, riduce le tensioni addominali e, attraverso l\'asse intestino-cervello, può modulare la risposta neuroviscera.' },
                { t: 'Gonfiore addominale, meteorismo e digestione lenta', d: 'Le tensioni viscerali rallentano il transito intestinale e favoriscono la fermentazione batterica. Il trattamento osteopatico viscerale migliora la peristalsi e riduce il gonfiore, spesso in modo significativo già dopo poche sedute.' },
                { t: 'Stipsi cronica', d: 'La stipsi funzionale — non legata a patologie organiche — risponde spesso molto bene all\'osteopatia viscerale, che migliora la mobilità del colon e riduce le tensioni che rallentano il transito.' },
                { t: 'Gastrite e tensione addominale', d: 'Lo stress cronico genera tensioni viscerali — lo stomaco si irrigidisce, il diaframma perde mobilità, la respirazione diventa superficiale. L\'osteopatia viscerale rompe questo circolo vizioso lavorando direttamente sui tessuti.' },
              ].map(e => (
                <div key={e.t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-1">{e.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{e.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Le connessioni viscero-somatiche: quando l'intestino fa mal di schiena</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Una delle scoperte più interessanti dell'osteopatia viscerale è la connessione diretta tra organi interni e colonna vertebrale. Il sistema nervoso autonomo innerva sia le strutture viscerali che quelle muscolari — e un organo in difficoltà può generare dolore riferito alla schiena, alla cervicale o alle spalle.
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Mal di schiena e intestino: il colon disturbato può tensionare la zona lombare',
                'Cervicale e stomaco: tensioni gastriche possono risalire alla cervicale tramite il nervo vago',
                'Dolore dorsale e digestione: il fegato e la cistifellea si proiettano sulla zona dorsale destra',
                'Mal di testa e intestino: la disbiosi intestinale può influenzare la neuro-infiammazione',
                'Lombalgia e colon: il sigma tensionato è una causa sottovalutata di lombalgia sinistra',
              ].map(i => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Aderenze addominali e cicatrici chirurgiche</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Le aderenze addominali — conseguenza di interventi chirurgici come appendicectomia, cesareo, colecistectomia, laparoscopia — sono una causa molto frequente di disfunzioni viscerali. La cicatrice in superficie è visibile, ma il tessuto cicatriziale si estende in profondità, creando aderenze tra organi e fasce che alterano la loro mobilità e possono generare dolore cronico, problemi digestivi e persino dolori a distanza.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              L'osteopatia viscerale lavora specificamente su queste aderenze — con tecniche di mobilizzazione del tessuto cicatriziale e delle strutture coinvolte — spesso con risultati molto significativi anche in cicatrici di vecchia data.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il diaframma: il muscolo dimenticato</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il diaframma è il muscolo respiratorio principale — ma è anche un'importante struttura di connessione tra il torace e l'addome. Attraversa il corpo da una parte all'altra e ha rapporti stretti con esofago, stomaco, fegato, reni e colonna vertebrale. Lo stress cronico, la respirazione toracica superficiale e le tensioni viscerali lo irrigidiscono progressivamente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Un diaframma rigido porta a respirazione corta e superficiale, a tensioni nella zona lombare e dorsale, a difficoltà digestive. La rieducazione respiratoria diaframmatica è parte integrante del trattamento osteopatico viscerale.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Stress, ansia e visceri: la connessione intestino-cervello</h2>
            <p className="text-muted-foreground leading-relaxed">
              L'intestino è spesso definito il "secondo cervello" — contiene oltre 200 milioni di neuroni e produce il 90% della serotonina del corpo. Lo stress cronico e l'ansia si manifestano spesso con sintomi digestivi: gonfiore, crampi, alterazioni del transito. L'osteopatia viscerale, attraverso le tecniche sul sistema nervoso autonomo e sugli organi, può contribuire a rompere questo circolo vizioso — integrandosi con il supporto psicologico quando necessario.
            </p>
          </div>

        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Cerchi un osteopata viscerale a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione osteopatica viscerale. Valutiamo insieme la mobilità degli organi e le tensioni fasciali che possono contribuire ai tuoi sintomi.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
