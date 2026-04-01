import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Riabilitazione Anca a Pontecorvo | Dolore Anca — Marco Turchetta',
  description: 'Dolore all\'anca a Pontecorvo? Riabilitazione post-protesi, artrosi, borsite, sindrome del piriforme. Marco Turchetta fisioterapista. Prenota la valutazione.',
  keywords: ['riabilitazione anca Pontecorvo','dolore anca Pontecorvo','protesi anca riabilitazione Pontecorvo','artrosi anca fisioterapia Pontecorvo','fisioterapia anca Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/riabilitazione-anca-pontecorvo' },
}

export default function RiabilitazioneAnca() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Cluster Ginocchio/Anca · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">
            Dolore all&apos;anca e riabilitazione<br />
            <span className="text-primary">a Pontecorvo — torna a camminare bene</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            L&apos;anca fa male dopo 10 minuti di cammino. Zoppichi senza accorgertene.
            Non riesci più a salire le scale normalmente. Forse hai già fatto la protesi
            e non sei soddisfatto del recupero. Ogni problema all&apos;anca ha
            una causa specifica — e la fisioterapia giusta cambia tutto.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              👉 Prenota la valutazione <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">I problemi all&apos;anca che tratto</h2>
            <div className="space-y-4">
              {[
                { t: 'Artrosi dell\'anca (coxartrosi)', badge: 'Molto comune', d: 'Dolore inguinale, rigidità mattutina, difficoltà a calzare le scarpe, zoppia progressiva. L\'artrosi non si inverte — ma il dolore si riduce significativamente con fisioterapia, rinforzo muscolare e tecnologia antinfiammatoria. Molti pazienti rimandano la protesi di anni.' },
                { t: 'Riabilitazione post-protesi d\'anca', badge: 'Post-chirurgico', d: 'La protesi è l\'inizio, non la fine. Il recupero della funzionalità dipende quasi interamente dalla qualità della fisioterapia post-operatoria. Inizio entro 2-3 settimane dall\'intervento per i migliori risultati.' },
                { t: 'Sindrome del piriforme', badge: 'Spesso confusa', d: 'Dolore profondo al gluteo che simula la sciatalgia. Il muscolo piriforme comprime il nervo sciatico. Frequentemente confusa con l\'ernia lombare — ma risponde a trattamenti completamente diversi.' },
                { t: 'Borsite trocanterica', badge: 'Dolore laterale', d: 'Dolore al lato esterno dell\'anca, peggiora salendo le scale e dormendo sul fianco. La borsa infiammata risponde molto bene a laser Nd:YAG e tecarterapia localizzata.' },
                { t: 'Conflitto femoro-acetabolare (FAI)', badge: 'Giovani attivi', d: 'Dolore inguinale nei movimenti di flessione profonda. Causa frequente di dolore all\'anca negli sportivi e nelle persone attive sotto i 50 anni. Richiede fisioterapia specifica pre e post eventuale intervento artroscopico.' },
              ].map(({ t, badge, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="font-semibold text-foreground">{t}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{badge}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come tratto i problemi all&apos;anca</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Valutazione gait analysis (analisi del passo)',
                'Terapia manuale articolare anca e SI',
                'Laser Nd:YAG per infiammazione profonda',
                'Tecarterapia Globus anti-infiammatoria',
                'Rinforzo glutei e muscoli stabilizzatori',
                'Esercizi funzionali e propriocettivi',
                'Osteopatia strutturale per compensazioni pelvi-lombari',
                'Educazione al movimento e prevenzione recidive',
              ].map(i => (
                <div key={i} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{i}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-5 bg-primary/5 rounded-xl border border-primary/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Nota clinica:</strong> l&apos;anca e il ginocchio sono strettamente connesse.
              Un dolore al ginocchio può originarsi da una disfunzione all&apos;anca, e viceversa.
              Una valutazione completa della catena cinetica degli arti inferiori è fondamentale
              per non trattare il sintomo sbagliato.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-3">Cluster correlato</h3>
            <div className="flex flex-wrap gap-2">
              {[
                { href: '/dolore-ginocchio-pontecorvo', label: 'Dolore al ginocchio' },
                { href: '/protesi-ginocchio-riabilitazione-pontecorvo', label: 'Riabilitazione protesi ginocchio' },
                { href: '/dolore-anca-pontecorvo', label: 'Dolore anca — approfondimento' },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm px-3 py-1.5 bg-card border border-border rounded-lg hover:border-primary/40 hover:text-primary transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Hai dolore all&apos;anca a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">60 minuti di valutazione. Troviamo la causa e costruiamo il percorso.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              👉 Prenota ora <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="https://wa.me/393209631792" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
