import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { BlogLinks } from '@/components/blog/blog-links'
export const metadata: Metadata = {
  title: 'Cefalea a Pontecorvo | Mal di Testa, Emicrania, Vertigini — Marco Turchetta',
  description: 'Cefalea tensiva, emicrania e vertigini cervicali a Pontecorvo (FR). Marco Turchetta fisioterapista e osteopata. Trattamento manuale per la cefalea di origine cervicale. Prenota.',
  keywords: ['cefalea Pontecorvo', 'mal di testa Pontecorvo', 'emicrania Pontecorvo', 'cefalea tensiva Pontecorvo', 'vertigini cervicali Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/cefalea-pontecorvo' },
}
export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Cefalea · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-6">Cefalea a Pontecorvo</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">La cefalea tensiva e la cefalea cervicogenica sono due delle forme di mal di testa più diffuse — e due di quelle che rispondono meglio alla fisioterapia e all'osteopatia. Se il tuo mal di testa parte dalla nuca e sale verso la fronte, o se è sempre associato a tensione al collo, la causa potrebbe essere cervicale.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">Prenota <ArrowRight className="h-4 w-4" /></Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl font-medium"><Phone className="h-4 w-4" /> 320 963 1792</a>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-8">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Cefalea tensiva e cervicogenica</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La cefalea tensiva è caratterizzata da un dolore sordo e diffuso, come una "banda" intorno alla testa. Spesso peggiora con lo stress, la postura scorretta e la tensione muscolare al collo e alle spalle. La cefalea cervicogenica origina direttamente dalla colonna cervicale — le prime tre vertebre cervicali (C1-C2-C3) sono innervate dallo stesso percorso nervoso che porta al cranio.</p>
            <p className="text-muted-foreground leading-relaxed">La terapia manuale sulla cervicale alta, l'osteopatia cranio-sacrale e il lavoro sulla muscolatura sub-occipitale danno risultati molto buoni in questi tipi di cefalea. Molti pazienti riducono significativamente la frequenza e l'intensità degli episodi già nelle prime settimane di trattamento.</p>
          </div>
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Vertigini cervicali</h2>
            <p className="text-muted-foreground leading-relaxed">Le vertigini possono avere origine cervicale — tensioni muscolari e disfunzioni articolari della cervicale alta interferiscono con i segnali propriocettivi che il collo invia al cervello per il controllo dell'equilibrio. La terapia manuale e l'osteopatia, in questi casi, possono ridurre significativamente le vertigini.</p>
          </div>
        </div>
      </section>
      <BlogLinks slugs={['cefalea-cervicogenica', 'atm-bruxismo-mal-di-testa', 'acufeni-osteopatia']} />

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Soffri di cefalea a Pontecorvo?</h2>
          <p className="text-muted-foreground mb-6">Prenota una valutazione. Capisco l'origine del tuo mal di testa e costruiamo un percorso per ridurne la frequenza.</p>
          <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">Prenota ora <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  )
}
