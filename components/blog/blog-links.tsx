import Link from 'next/link'
import { ArrowRight, BookOpen } from 'lucide-react'

import { getPost } from '@/lib/blog-posts'

/**
 * Blocco "Approfondimenti dal blog" da inserire nelle landing page.
 * Riceve gli slug degli articoli pertinenti alla pagina.
 */
export function BlogLinks({ slugs, title = 'Approfondimenti dal blog' }: { slugs: string[]; title?: string }) {
  const items = slugs.map(getPost).filter(Boolean)
  if (items.length === 0) return null

  return (
    <section className="py-16 sm:py-20 bg-card border-t border-border">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="flex items-center gap-2 mb-6">
          <BookOpen className="h-4 w-4 text-primary" />
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">{title}</p>
        </div>
        <div className="space-y-3">
          {items.map(post => (
            <Link key={post!.slug} href={`/blog/${post!.slug}`}
              className="group flex items-start justify-between gap-5 p-5 bg-background rounded-xl border border-border hover:border-primary/40 transition-colors">
              <div>
                <p className="font-display font-semibold text-foreground leading-snug mb-1.5 group-hover:text-primary transition-colors">{post!.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{post!.excerpt}</p>
              </div>
              <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
