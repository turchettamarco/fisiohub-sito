import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'
import { ArticleExtras } from '@/components/blog/article-extras'

export const metadata: Metadata = {
  title: 'Dolore alla Spalla: Conflitto, Tendinite o Spalla Congelata? | Marco Turchetta',
  description: 'Come distinguere conflitto subacromiale, tendinopatia della cuffia e capsulite adesiva. Sintomi, valutazione e trattamento spiegati da Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
  keywords: ['dolore spalla Pontecorvo', 'conflitto subacromiale', 'spalla congelata capsulite', 'cuffia dei rotatori', 'tendinite spalla fisioterapia'],
  alternates: { canonical: 'https://turchettamarco.com/blog/dolore-spalla-riconoscere' },
  openGraph: {
    type: 'article',
    title: 'Dolore alla Spalla: Conflitto, Tendinite o Spalla Congelata? | Marco Turchetta',
    description: 'Come distinguere conflitto subacromiale, tendinopatia della cuffia e capsulite adesiva. Sintomi, valutazione e trattamento spiegati da Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
    url: 'https://turchettamarco.com/blog/dolore-spalla-riconoscere',
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
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 24 luglio 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta — Fisioterapista a Pontecorvo</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-5">
            Dolore alla spalla: conflitto, tendinite o spalla congelata?
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Non riesci più a dormire sul fianco, ad allacciarti il reggiseno o a prendere
            il portafoglio dalla tasca posteriore. Sono tre problemi diversi, con meccanismi
            diversi e trattamenti diversi — e si distinguono soprattutto da <em>come</em> si
            muove la spalla, non da dove fa male.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Alzare un braccio non è un movimento solo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La spalla è l&apos;articolazione più mobile del corpo e paga questa libertà con una
              stabilità ridotta. Per alzare il braccio servono almeno quattro articolazioni che
              collaborano: la testa dell&apos;omero nella sua cavità, la scapola che scivola sul torace,
              la clavicola che ruota alle due estremità.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se una smette di fare la sua parte, le altre compensano — e il conto lo paga il
              tendine che passa nello spazio più stretto. In una spalla sana, quando alzi il
              braccio la testa dell&apos;omero ruota automaticamente verso l&apos;esterno e si abbassa
              di qualche millimetro per lasciar passare il tendine. Se quella rotazione automatica
              si perde, il tendine sbatte a ogni movimento. Migliaia di volte al giorno.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Le tre situazioni più frequenti</h2>
            <div className="space-y-3">
              {[
                {
                  nome: 'Conflitto subacromiale',
                  segno: 'Dolore tra 60° e 120°',
                  desc: 'Il tendine del sovraspinato viene compresso nello spazio tra la testa dell\'omero e l\'acromion ogni volta che alzi il braccio. Il segno tipico è il dolore in una fascia intermedia del movimento: sotto non fa male, sopra spesso nemmeno. Fa male prendere qualcosa da uno scaffale alto, pettinarsi, dormire sul lato. Il braccio si alza tutto, ma con fatica. Nella maggior parte dei casi non c\'è nulla di rotto: è un problema di scorrimento e di controllo del movimento. Ed è esattamente per questo che risponde bene al trattamento.',
                },
                {
                  nome: 'Tendinopatia della cuffia dei rotatori',
                  segno: 'Dolore sotto carico',
                  desc: 'La cuffia è il gruppo di quattro muscoli profondi che centrano la testa dell\'omero. Quando un tendine è sofferente il dolore compare soprattutto caricandolo: contro resistenza, sollevando pesi, portando la spesa. Il capo lungo del bicipite dà invece un dolore più anteriore, che il paziente localizza con un dito. Nota importante: dopo i 50 anni le lesioni parziali della cuffia si trovano frequentemente anche in chi non ha alcun dolore. Trovarne una in ecografia non significa automaticamente che sia quella la causa dei sintomi.',
                },
                {
                  nome: 'Capsulite adesiva (spalla congelata)',
                  segno: 'Bloccata anche passivamente',
                  desc: 'Qui è la capsula articolare che si retrae, ed è un problema diverso dagli altri due. Il segno distintivo: la spalla non si muove nemmeno se la muovo io al posto tuo. Negli altri casi, se rilasci il braccio e lo muovo passivamente, il movimento c\'è. Nella capsulite no — c\'è un blocco meccanico vero, particolarmente evidente nella rotazione esterna. Evolve in tre fasi: dolorosa, di rigidità, di recupero, per un totale tipico di 12-18 mesi.',
                },
              ].map(({ nome, segno, desc }) => (
                <div key={nome} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="font-semibold text-foreground">{nome}</span>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">→ {segno}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Il test che puoi fare a casa</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Siediti, lascia il braccio completamente morbido e fattelo alzare da qualcun altro,
              senza che tu partecipi al movimento. Se in questo modo il braccio sale molto più
              in alto di quando lo alzi da solo, il problema è tendineo o muscolare. Se resta
              bloccato comunque, e soprattutto se non riesci a ruotare l&apos;avambraccio verso
              l&apos;esterno tenendo il gomito al fianco, il sospetto si sposta sulla capsulite.
              Non è una diagnosi — è un&apos;indicazione che cambia completamente il piano di lavoro.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il dolore alla spalla che non viene dalla spalla</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              È un punto su cui insisto sempre, perché evita mesi persi. Il dolore percepito
              sulla spalla può arrivare da altrove:
            </p>
            <div className="space-y-3">
              {[
                { org: 'Dal collo', desc: 'Un\'irritazione delle radici cervicali basse proietta dolore esattamente sulla spalla e sul braccio. Indizio utile: il dolore cambia muovendo il collo, non la spalla.' },
                { org: 'Dai visceri', desc: 'Diaframma, fegato e cistifellea proiettano sulla spalla destra attraverso il nervo frenico. Un dolore alla spalla destra che compare dopo pasti grassi merita un approfondimento medico.' },
                { org: 'Dal cuore', desc: 'Un dolore alla spalla o al braccio sinistro che compare sotto sforzo e passa con il riposo, magari con affanno o sudorazione, va valutato con urgenza. Non è materia di fisioterapia.' },
              ].map(({ org, desc }) => (
                <div key={org} className="p-5 bg-card rounded-xl border border-border">
                  <p className="font-semibold text-foreground mb-1">{org}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Come la valuto e come la tratto</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La valutazione parte sempre dal confronto tra movimento attivo e passivo, perché è
              il dato che separa le grandi categorie. Poi verifico come si muove la scapola, testo
              i singoli tendini della cuffia, controllo la cervicale e le prime coste, e osservo
              la postura complessiva: una spalla chiusa in avanti su un torace cifotico ha
              strutturalmente meno spazio a disposizione.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il trattamento combina terapia manuale per recuperare lo scorrimento articolare e
              ricentrare la testa dell&apos;omero, lavoro osteopatico su torace, coste e cervicale
              (che sono la base d&apos;appoggio della spalla), laser Nd:YAG o tecarterapia nelle
              fasi in cui il dolore limita troppo il movimento, ed esercizio progressivo — che è
              la parte che determina il risultato a distanza. Un tendine si rinforza con il carico
              graduale, non con il riposo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Sui tempi:</strong> un conflitto trattato bene
              migliora in genere in quattro-sei settimane. Una tendinopatia richiede più pazienza,
              perché il tendine si adatta lentamente — tipicamente tre mesi di lavoro con esercizi.
              La capsulite ha i suoi tempi biologici e non si scavalcano: quello che si può fare è
              ridurre il dolore, limitare la perdita di movimento nella fase intermedia e accorciare
              il recupero finale. Forzare aggressivamente nella fase dolorosa peggiora il quadro.
            </p>
          </div>

          <div className="p-5 bg-card rounded-xl border-l-4 border-l-amber-500 border border-border">
            <h3 className="font-semibold text-foreground mb-3">Quando serve prima il medico</h3>
            <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed list-disc pl-5">
              <li>Dolore alla spalla sinistra che compare sotto sforzo, con affanno o sudorazione</li>
              <li>Impossibilità totale di sollevare il braccio dopo un trauma o una caduta</li>
              <li>Deformità visibile della spalla dopo un trauma</li>
              <li>Dolore con febbre, rossore e gonfiore importante</li>
              <li>Perdita di forza rapida e progressiva del braccio</li>
            </ul>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <h3 className="font-semibold text-foreground mb-3">Perché fa più male di notte</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Di notte manca il movimento che favorisce la circolazione locale, la posizione
              sdraiata riduce lo spazio subacromiale e la compressione diretta sul fianco irrita
              il tendine. Dormire sul lato sano con un cuscino sotto il braccio dolente, in modo
              che non cada in avanti, aiuta parecchio già dalla prima notte.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/dolore-spalla-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Dolore alla spalla a Pontecorvo →
            </Link>
          </div>
          <ArticleExtras slug="dolore-spalla-riconoscere" />

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
