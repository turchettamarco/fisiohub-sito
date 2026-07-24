import { MetadataRoute } from 'next'

import { posts } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://turchettamarco.com'
  // Data di ultima revisione delle pagine statiche. Aggiornala quando modifichi i contenuti.
  const updated = new Date('2026-07-24')

  return [
    // ═══ CORE (priorità massima) ═══
    { url: `${base}`, lastModified: updated, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/prenota`, lastModified: updated, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/chi-sono`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/recensioni`, lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },

    // ═══ PAGINE PILASTRO (top keyword) ═══
    { url: `${base}/fisioterapia-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/mal-di-schiena-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/cervicale-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/osteopatia-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },

    // ═══ CLUSTER GINOCCHIO/ANCA ═══
    { url: `${base}/dolore-ginocchio-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/protesi-ginocchio-riabilitazione-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/riabilitazione-anca-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/epicondilite-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dolore-anca-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },

    // ═══ PATOLOGIE COLONNA ═══
    { url: `${base}/sciatalgia-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ernia-del-disco-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/torcicollo-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/artrosi-vertebrale-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/scoliosi-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },

    // ═══ PATOLOGIE ARTI ═══
    { url: `${base}/dolore-spalla-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/dolore-caviglia-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/contrattura-muscolare-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },

    // ═══ NEUROLOGIA E TESTA ═══
    { url: `${base}/cefalea-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/riabilitazione-neurologica-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/disfunzione-atm-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },

    // ═══ POSTURA E METODI ═══
    { url: `${base}/postura-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/metodo-mezieres-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/terapia-manuale-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/fisioterapia-sportiva-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/osteopatia-viscerale-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },

    // ═══ TECNOLOGIE ═══
    { url: `${base}/laser-yag-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/laser-terapia-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/tecar-terapia-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tens-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/onde-d-urto-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/magnetoterapia-noleggio-pontecorvo`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },

    // ═══ GEOGRAFICHE ═══
    { url: `${base}/fisioterapista-cassino`, lastModified: updated, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/fisioterapista-ceprano`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fisioterapista-frosinone`, lastModified: updated, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fisioterapista-aquino`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/fisioterapista-arce`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/fisioterapista-san-giorgio-a-liri`, lastModified: updated, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/fisioterapista-pignataro-interamna`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fisioterapista-esperia`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fisioterapista-pico`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fisioterapista-san-giovanni-incarico`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fisioterapista-monticelli`, lastModified: updated, changeFrequency: 'monthly', priority: 0.7 },

    // ═══ BLOG ═══
    { url: `${base}/blog`, lastModified: updated, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map(post => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    })),

  ]
}
