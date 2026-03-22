import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://turchettamarco.com'

  return [
    { url: `${base}`,                                    lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/prenota`,                            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/fisioterapia-pontecorvo`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/osteopatia-pontecorvo`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/mal-di-schiena-pontecorvo`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cervicale-pontecorvo`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/laser-yag-pontecorvo`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/laser-terapia-pontecorvo`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tecar-terapia-pontecorvo`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tens-pontecorvo`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/onde-d-urto-pontecorvo`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/magnetoterapia-noleggio-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
  ]
}
