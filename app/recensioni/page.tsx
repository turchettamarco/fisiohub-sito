import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MessageCircle, Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Recensioni | Marco Turchetta — Fisioterapista e Osteopata a Pontecorvo',
  description: 'Le recensioni dei pazienti dello studio di fisioterapia e osteopatia di Marco Turchetta a Pontecorvo (FR). Valutazione 5 stelle su Google.',
  keywords: ['recensioni fisioterapista Pontecorvo', 'opinioni fisioterapista Pontecorvo', 'Marco Turchetta recensioni', 'migliore fisioterapista Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/recensioni' },
  openGraph: {
    type: 'website',
    title: 'Recensioni | Marco Turchetta — Fisioterapista e Osteopata a Pontecorvo',
    description: 'Le recensioni dei pazienti dello studio di fisioterapia e osteopatia di Marco Turchetta a Pontecorvo (FR).',
    url: 'https://turchettamarco.com/recensioni',
    siteName: 'Marco Turchetta Fisioterapia e Osteopatia',
    locale: 'it_IT',
  },
}

const GOOGLE_REVIEWS = 'https://share.google/jJD2b5LPGadgOOZD1'
const GOOGLE_LEAVE_REVIEW = 'https://g.page/r/Cb8BmfZRugb3EBM/review'

const testimonianze = [
  {
    iniziali: 'R.M.',
    condizione: 'Sciatalgia da ernia L4-L5',
    tag: 'Lombare',
    testo: 'Dopo mesi di dolore alla schiena che mi scendeva fino al piede, ho finalmente trovato qualcuno che ha capito il problema. Marco ha fatto una valutazione molto più approfondita di tutti gli altri fisioterapisti che avevo già visto. In sei settimane il dolore era quasi scomparso — e per la prima volta qualcuno mi ha spiegato davvero cosa stava succedendo.',
  },
  {
    iniziali: 'L.F.',
    condizione: 'Calcificazione del sovraspinato',
    tag: 'Spalla',
    testo: 'L\'ortopedico mi aveva già proposto l\'intervento alla spalla. Con Marco abbiamo usato laser Nd:YAG e lavoro manuale. Dopo 12 sedute il dolore era quasi zero e all\'ecografia di controllo la calcificazione si era ridotta. Ho evitato l\'operazione.',
  },
  {
    iniziali: 'G.B.',
    condizione: 'Cervicale cronica e cefalea tensiva',
    tag: 'Cervicale',
    testo: 'Cervicale cronica da anni, mal di testa ogni mattina. In tre settimane con osteopatia, laser ed esercizi ho ottenuto più risultati che in anni di massaggi. Mi ha anche insegnato cosa fare a casa per non ricadere.',
  },
  {
    iniziali: 'F.D.',
    condizione: 'Riabilitazione post-meniscectomia',
    tag: 'Ginocchio',
    testo: 'Dopo l\'operazione al menisco ero convinta di non tornare più a correre. Marco mi ha seguita passo dopo passo, con molta attenzione all\'esercizio progressivo. Dopo quattro mesi sono tornata ad allenarmi. Professionalità e pazienza fuori dal comune.',
  },
  {
    iniziali: 'M.B.',
    condizione: 'Fascite plantare cronica',
    tag: 'Sportivo',
    testo: 'Fascite plantare recidivante da due anni. Con Marco abbiamo lavorato non solo sul piede ma su tutta la catena posteriore. Per la prima volta il trattamento ha risolto il problema alla radice. Sono tornato a correre dopo 6 settimane.',
  },
]

export default function RecensioniPage() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Recensioni</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Cosa dicono i pazienti
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
            Storie vere, patologie precise, nomi abbreviati per la privacy. Le recensioni
            complete e verificate sono su Google, dove chiunque può leggerle e lasciarne una.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href={GOOGLE_REVIEWS} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              <Star className="h-4 w-4" /> Leggi le recensioni su Google
            </a>
            <a href={GOOGLE_LEAVE_REVIEW} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Lascia una recensione <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-5">
            {testimonianze.map(t => (
              <div key={t.iniziali} className="p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-primary/10 text-primary border-primary/20">{t.tag}</span>
                  <span className="flex items-center gap-0.5 text-primary" aria-label="Cinque stelle su cinque">
                    {[0, 1, 2, 3, 4].map(i => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                  </span>
                </div>
                <blockquote className="text-muted-foreground leading-relaxed mb-4">{t.testo}</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{t.iniziali.replace(/\./g, '')}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.iniziali}</p>
                    <p className="text-xs text-muted-foreground">{t.condizione}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed mt-6">
            Iniziali e dettaglio clinico pubblicati con il consenso dei pazienti. Dati anagrafici
            anonimizzati ai sensi del GDPR. I risultati descritti si riferiscono a singoli casi e
            non costituiscono una previsione dell&apos;esito per altre persone: ogni percorso
            dipende dalla condizione clinica individuale.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card border-t border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Sei stato in studio da me?</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Una recensione su Google aiuta chi sta cercando un fisioterapista e non sa da dove
            cominciare. Bastano due minuti.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a href={GOOGLE_LEAVE_REVIEW} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              <Star className="h-4 w-4" /> Lascia una recensione
            </a>
            <Link href="/prenota"
              className="inline-flex items-center justify-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+393209631792"
              className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
            <a href="https://wa.me/393209631792" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-4 w-4" /> Scrivimi su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
