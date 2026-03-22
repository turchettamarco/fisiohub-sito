import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'
export const metadata: Metadata = {
  title: 'Fisioterapista Frosinone | Marco Turchetta — Studio a Pontecorvo (FR)',
  description: 'Fisioterapista vicino a Frosinone. Marco Turchetta, studio di fisioterapia e osteopatia a Pontecorvo (FR), 40 km da Pontecorvo. Mal di schiena, cervicale, laser terapia, tecar. Prenota.',
  keywords: ['fisioterapista Frosinone', 'fisioterapia Frosinone', 'osteopata Frosinone', 'fisioterapia vicino Frosinone'],
  alternates: { canonical: 'https://turchettamarco.com/fisioterapista-frosinone' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Fisioterapista vicino a Frosinone</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Fisioterapista a Frosinone</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Cerchi un fisioterapista vicino a Frosinone? Il mio studio di fisioterapia e osteopatia si trova a Pontecorvo (FR), a soli 40 km da Pontecorvo. Un percorso breve per accedere a un servizio clinico di qualità — valutazione approfondita, terapia manuale, laser Nd:YAG, tecarterapia e osteopatia.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            Via Galileo Galilei 5, Pontecorvo (FR) — 40 km da Pontecorvo
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Perché scegliere il mio studio vicino a Frosinone</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La qualità del trattamento non dipende dalla distanza dalla grande città. Dipende dalla competenza del professionista, dalla qualità della valutazione e dalla tecnologia disponibile. Nel mio studio a Pontecorvo — raggiungibile facilmente da Frosinone — troverai sedute individuali dedicate, nessun paziente in contemporanea, il tempo necessario per ogni visita.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ho una Laurea in Fisioterapia (Sapienza di Roma), un Master universitario in Osteopatia (EOM – Università di Verona) e sto completando il Diploma D.O. presso la Escuela Osteopática de Madrid. Ho seguito corsi ECM avanzati con i principali specialisti italiani in riabilitazione della spalla e bendaggio funzionale.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le tecnologie disponibili nel mio studio includono il laser Nd:YAG Zaira (Garda Laser, Made in Italy), la tecarterapia Globus Diacare 5000, la TENS Globus, ultrasuoni e noleggio magnetoterapia domiciliare.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come raggiungere lo studio da Frosinone</h2>
            <p className="text-muted-foreground leading-relaxed">
              Lo studio è in Via Galileo Galilei 5, Pontecorvo (FR), presso gli Studi Galileo. Parcheggio libero nelle vicinanze. Lavoro su appuntamento — prenota online o chiamami direttamente.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Fisioterapista vicino a Frosinone — prenota ora</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione nel mio studio di Pontecorvo. Prima visita: 60 minuti di ascolto, valutazione e pianificazione.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
