import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

import { getSortedPosts, formatDate } from '@/lib/blog-posts'

export const metadata: Metadata = {
  title: 'Blog Fisioterapia | Consigli e Approfondimenti — Marco Turchetta Pontecorvo',
  description: 'Articoli pratici su mal di schiena, cervicale, dolori articolari, laser terapia e osteopatia. Scritti da Marco Turchetta, fisioterapista e osteopata a Pontecorvo (FR).',
  alternates: { canonical: 'https://turchettamarco.com/blog' },
}

export default function BlogIndex() {
  const posts = getSortedPosts()

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
