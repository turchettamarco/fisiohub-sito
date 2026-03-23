import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog Fisioterapia | Consigli e Approfondimenti — Marco Turchetta Pontecorvo',
  description: 'Articoli pratici su mal di schiena, cervicale, dolori articolari, laser terapia e osteopatia. Scritti da Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
  alternates: { canonical: 'https://turchettamarco.com/blog' },
}

const posts = [
  { slug: 'mal-di-schiena-quando-preoccuparsi', title: 'Mal di schiena: quando preoccuparsi davvero', excerpt: 'Come distinguere il mal di schiena normale da quello che richiede attenzione urgente. I segnali di allarme che devi conoscere.', category: 'Patologie', date: '2026-03-15', color: 'bg-red-50 text-red-700 border-red-200' },
  { slug: 'cervicale-errori', title: 'Cervicale: 5 errori che peggiorano il dolore (e come evitarli)', excerpt: 'Molte persone con dolore cervicale fanno cose che, in buona fede, mantengono il problema. Ecco i 5 errori più comuni.', category: 'Consigli', date: '2026-03-19', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'dolore-ginocchio-cosa-fare', title: 'Dolore al ginocchio: cosa fare subito (e cosa evitare)', excerpt: 'Ginocchio gonfio, dolore sulle scale, scatto quando ti alzi. Cosa fare nelle prime 48 ore e quando andare dal fisioterapista.', category: 'Consigli', date: '2026-03-22', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'mal-di-schiena-cause', title: 'Mal di schiena: le 5 cause più frequenti (e come riconoscerle)', excerpt: 'Non tutto il mal di schiena è uguale. Capire la causa cambia radicalmente il trattamento — e i risultati.', category: 'Patologie', date: '2026-03-01', color: 'bg-red-50 text-red-700 border-red-200' },
  { slug: 'cervicale-smartphone', title: 'Cervicale e smartphone: perché il dolore al collo è esploso negli ultimi 10 anni', excerpt: 'Il "text neck" non è un mito. Come il telefono sta danneggiando la tua cervicale e 5 cose concrete che puoi fare oggi.', category: 'Consigli', date: '2026-03-08', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'laser-yag-come-funziona', title: 'Laser Nd:YAG: come funziona davvero e quando è indicato', excerpt: 'Non è il laser di un centro estetico. Spiegazione scientifica degli effetti biologici e delle indicazioni cliniche del laser Nd:YAG.', category: 'Tecnologie', date: '2026-03-12', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { slug: 'prima-visita-fisioterapista', title: 'Prima visita dal fisioterapista: cosa aspettarsi e come prepararsi', excerpt: 'Tutto quello che devi sapere prima della prima visita. Come prepararsi, cosa succede, cosa portare — senza sorprese.', category: 'Consigli', date: '2026-03-17', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'osteopatia-viscerale-intestino', title: "Quando l'intestino fa male alla schiena: osteopatia viscerale spiegata", excerpt: "Il collegamento tra visceri e colonna vertebrale è reale. Come un colon irritato può causare lombalgia.", category: 'Osteopatia', date: '2026-03-22', color: 'bg-teal-50 text-teal-700 border-teal-200' },
]

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default function BlogIndex() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Blog · Fisioterapia Pontecorvo</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-5">Fisioterapia — Consigli pratici</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Articoli scritti per i pazienti — non per i colleghi. Linguaggio semplice, informazioni utili, senza banalizzare la scienza.
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-5">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${post.color}`}>{post.category}</span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" />{formatDate(post.date)}</span>
                </div>
                <h2 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{post.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">Leggi <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
