import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, MapPin, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fisioterapista Aquino | Marco Turchetta — Studio a Pontecorvo (FR)',
  description: 'Fisioterapista vicino a Aquino. Marco Turchetta, studio di fisioterapia e osteopatia a Pontecorvo (FR), 8 km da Aquino. Mal di schiena, cervicale, laser terapia, tecar, osteopatia. Prenota.',
  keywords: ['fisioterapista Aquino', 'fisioterapia Aquino', 'osteopata Aquino', 'fisioterapia vicino Aquino'],
  alternates: { canonical: 'https://turchettamarco.com/fisioterapista-aquino' },
}

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Fisioterapista vicino a Aquino</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Fisioterapista a Aquino</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Cerchi un fisioterapista vicino a Aquino? Il mio studio di fisioterapia e osteopatia si trova a Pontecorvo (FR), a soli 8 km — raggiungibile facilmente, con parcheggio libero nelle vicinanze. Sedute individuali dedicate, nessuna lista d&apos;attesa lunga.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <MapPin className="h-4 w-4 text-primary" />
            Via Galileo Galilei 5, Pontecorvo (FR) — 8 km da Aquino
          </div>
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
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Perché i pazienti di Aquino scelgono il mio studio</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Molti pazienti di Aquino si spostano più lontano per la fisioterapia pensando che la distanza significhi qualità. Non è necessariamente così — quello che conta è la competenza del professionista, la qualità della valutazione e la tecnologia disponibile.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A soli 8 km da Aquino, il mio studio offre fisioterapia e osteopatia integrate in un unico percorso. Laurea in Fisioterapia (Sapienza di Roma), Master universitario in Osteopatia (EOM – Università di Verona), Diploma D.O. in completamento (Escuela Osteopática de Madrid). Tecnologia laser Nd:YAG Zaira e tecarterapia Globus Diacare 5000.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Cosa tratto</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Mal di schiena e lombalgia acuta e cronica',
                'Cervicalgia e dolore al collo',
                'Sciatalgia e dolore irradiato alla gamba',
                'Ernia del disco cervicale e lombare',
                'Dolore alla spalla (cuffia dei rotatori, capsulite)',
                'Dolore al ginocchio (menisco, artrosi)',
                'Tendiniti e tendinopatie croniche',
                'Riabilitazione post-chirurgica',
                'Osteopatia strutturale e viscerale',
                'Postura e Metodo Mézières',
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Tecnologie disponibili</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Laser Nd:YAG Zaira</strong> (Garda Laser, Made in Italy) — penetra fino a 5–6 cm. Tendinopatie, artrosi, dolore cronico.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Tecarterapia Globus Diacare 5000</strong> — diatermia capacitiva e resistiva. Artrosi, lombalgia, post-chirurgico.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">TENS Globus</strong> — elettroterapia antalgica per dolore cronico e nevralgie.</span></li>
              <li className="flex gap-2"><span className="text-primary font-bold flex-shrink-0">→</span><span><strong className="text-foreground">Magnetoterapia a noleggio</strong> — per cicli domiciliari su artrosi, fratture, tendinopatie.</span></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come raggiungermi da Aquino</h2>
            <p className="text-muted-foreground leading-relaxed">Via Galileo Galilei 5, Pontecorvo (FR) — presso gli Studi Galileo. Da Aquino si raggiunge in pochi minuti di auto. Parcheggio libero nelle immediate vicinanze. Lavoro esclusivamente su appuntamento — prenota online o chiamami al 320 963 1792.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Fisioterapista vicino a Aquino — prenota ora</h2>
          <p className="text-muted-foreground mb-6">Prima visita: 60 minuti di ascolto, valutazione e proposta di trattamento personalizzata.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
