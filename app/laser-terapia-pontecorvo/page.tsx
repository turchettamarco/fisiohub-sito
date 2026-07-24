import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BlogLinks } from '@/components/blog/blog-links'

export const metadata: Metadata = {
  title: 'Laser Terapia a Pontecorvo | Studio Marco Turchetta',
  description: 'Laser terapia a Pontecorvo (FR). Trattamento con laser Nd:YAG Zaira per tendiniti, artrosi, lombalgia, sciatalgia. Dispositivo medicale certificato CE Made in Italy.',
  keywords: ['laser terapia Pontecorvo', 'laserterapia Pontecorvo', 'laser fisioterapia Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/laser-terapia-pontecorvo' },
}

export default function LaserTerapiaPontecorvo() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Laser Terapia · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">Laser Terapia a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Nel mio studio di fisioterapia a Pontecorvo offro trattamenti di laserterapia con il dispositivo Nd:YAG Zaira di Garda Laser — uno degli strumenti più efficaci disponibili per il trattamento del dolore e dell'infiammazione muscolo-scheletrica.
          </p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Prenota una seduta <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">La laser terapia: come funziona</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La laserterapia utilizza energia luminosa a specifiche lunghezze d'onda per stimolare i processi biologici di riparazione dei tessuti. Nel caso del laser Nd:YAG (1064 nm), questa energia penetra fino a 5–6 cm di profondità — raggiungendo strutture che altri trattamenti non possono toccare.</p>
            <p className="text-muted-foreground leading-relaxed">L'effetto è triplice: fotochimico (biostimolazione cellulare, aumento dell'ATP), fototermico (stimolazione della microcircolazione, riduzione dell'infiammazione), e fotomeccanico (drenaggio linfatico, riassorbimento degli edemi). Il risultato: meno dolore, meno infiammazione, guarigione più rapida.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Per quali patologie è indicata la laser terapia a Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La laser terapia è efficace su un'ampia gamma di condizioni acute e croniche. Nel mio studio a Pontecorvo la utilizzo principalmente per: tendiniti e tendinopatie (achillea, sovraspinato, rotulea), calcificazioni tendinee, epicondilite, fascite plantare, borsiti, lombalgia, cervicalgia, sciatalgia, artrosi, edemi post-traumatici, cicatrici e recupero post-chirurgico.</p>
            <p className="text-muted-foreground leading-relaxed">La laser terapia non è mai proposta come trattamento isolato: fa parte di un percorso clinico integrato con valutazione e terapia manuale.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Vuoi saperne di più sul laser Nd:YAG?</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">Ho dedicato una pagina completa al laser Nd:YAG Zaira con tutte le specifiche tecniche, i meccanismi d'azione e le indicazioni cliniche dettagliate.</p>
            <Link href="/laser-yag-pontecorvo" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
              Vai alla pagina Laser Nd:YAG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      <BlogLinks slugs={['laser-yag-come-funziona']} />

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">Prenota una seduta di laser terapia a Pontecorvo</h2>
          <p className="text-muted-foreground mb-6">Prima valutiamo insieme la tua condizione, poi decidiamo se e come integrare la laser terapia nel percorso.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
