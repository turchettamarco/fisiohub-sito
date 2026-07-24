import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { BlogLinks } from '@/components/blog/blog-links'
export const metadata: Metadata = {
  title: 'Disfunzione ATM a Pontecorvo | Dolore Mandibola, Bruxismo — Marco Turchetta',
  description: 'Disfunzione dell\'articolazione temporo-mandibolare a Pontecorvo (FR). Dolore mandibola, click, bruxismo. Marco Turchetta fisioterapista e osteopata. Prenota.',
  keywords: ['disfunzione ATM Pontecorvo', 'dolore mandibola Pontecorvo', 'bruxismo Pontecorvo', 'click mandibolare Pontecorvo', 'articolazione temporo-mandibolare Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/disfunzione-atm-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Disfunzione ATM · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Disfunzione ATM a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">L'articolazione temporo-mandibolare (ATM) è quella che collega la mandibola al cranio. Quando non funziona correttamente, genera dolore alla mascella, click o crepitii all'apertura, difficoltà a masticare, mal di testa e tensione al collo. Nel mio studio a Pontecorvo la tratto con osteopatia cranio-sacrale e terapia manuale.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">I sintomi della disfunzione ATM</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La disfunzione ATM si manifesta in modi molto diversi: dolore alla mandibola, alle tempie o all'orecchio; click o crepitii quando si apre o chiude la bocca; difficoltà ad aprire completamente la bocca; dolore durante la masticazione; mal di testa frequente; tensione cervicale. Molte persone non collegano questi sintomi alla mandibola.</p>
            <p className="text-muted-foreground leading-relaxed">Il bruxismo — digrignare i denti di notte — è spesso associato alle disfunzioni ATM. Lo stress è un fattore scatenante importante.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il trattamento con osteopatia e fisioterapia</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">L'approccio che utilizzo combina tecniche di terapia manuale sull'ATM, tecniche osteopatiche cranio-sacrali per riequilibrare le tensioni del cranio e della dura madre, e lavoro sulla colonna cervicale — strettamente connessa alla mandibola attraverso catene muscolari e fasciali.</p>
            <p className="text-muted-foreground leading-relaxed">Il trattamento fisioterapico si integra idealmente con quello del dentista gnatologico, che può prescrivere un bite notturno. Le due figure lavorano in modo complementare.</p>
          </div>
        </div>
      </section>
      <BlogLinks slugs={['atm-bruxismo-mal-di-testa', 'acufeni-osteopatia']} />

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Hai dolore alla mandibola o disfunzione ATM a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione osteopatica. Spesso bastano poche sedute per ridurre significativamente i sintomi.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
