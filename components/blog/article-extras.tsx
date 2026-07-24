import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { getPost, getRelatedPosts, formatDate } from '@/lib/blog-posts'

const SITE = 'https://turchettamarco.com'

/**
 * Dati strutturati (Article + BreadcrumbList) e blocco "Continua a leggere"
 * da inserire in fondo a ogni articolo del blog.
 */
export function ArticleExtras({ slug }: { slug: string }) {
  const post = getPost(slug)
  if (!post) return null

  const related = getRelatedPosts(slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: 'it-IT',
        articleSection: post.category,
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE}/blog/${post.slug}` },
        author: {
          '@type': 'Person',
          name: 'Marco Turchetta',
          jobTitle: 'Fisioterapista e Osteopata',
          url: `${SITE}/chi-sono`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Marco Turchetta — Fisioterapia e Osteopatia',
          url: SITE,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE}/blog/${post.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {related.length > 0 && (
        <div className="pt-8 border-t border-border">
          <h2 className="font-display text-xl font-semibold text-foreground mb-5">Continua a leggere</h2>
          <div className="space-y-3">
            {related.map(item => (
              <Link key={item.slug} href={`/blog/${item.slug}`}
                className="group flex items-start justify-between gap-5 p-5 bg-card rounded-xl border border-border hover:border-primary/40 transition-colors">
                <div>
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${item.color}`}>{item.category}</span>
                    <span className="text-xs text-muted-foreground">{formatDate(item.date)}</span>
                  </div>
                  <p className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">{item.title}</p>
                </div>
                <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
