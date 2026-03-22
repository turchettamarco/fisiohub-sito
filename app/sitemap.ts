import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://turchettamarco.com'

  return [
    // Core
    { url: `${base}`,                                         lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/prenota`,                                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/chi-sono`,                                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Keyword principali
    { url: `${base}/fisioterapia-pontecorvo`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/osteopatia-pontecorvo`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // Patologie colonna
    { url: `${base}/mal-di-schiena-pontecorvo`,               lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/cervicale-pontecorvo`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/sciatalgia-pontecorvo`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ernia-del-disco-pontecorvo`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/torcicollo-pontecorvo`,                   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/artrosi-vertebrale-pontecorvo`,           lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/scoliosi-pontecorvo`,                     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Patologie arti
    { url: `${base}/dolore-spalla-pontecorvo`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/dolore-ginocchio-pontecorvo`,             lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/dolore-anca-pontecorvo`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dolore-caviglia-pontecorvo`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/contrattura-muscolare-pontecorvo`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },

    // Neurologia e testa
    { url: `${base}/riabilitazione-neurologica-pontecorvo`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cefalea-pontecorvo`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/disfunzione-atm-pontecorvo`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },

    // Postura e metodi
    { url: `${base}/postura-pontecorvo`,                      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/metodo-mezieres-pontecorvo`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/terapia-manuale-pontecorvo`,              lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fisioterapia-sportiva-pontecorvo`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // Osteopatia viscerale
    { url: `${base}/osteopatia-viscerale-pontecorvo`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Tecnologie
    { url: `${base}/laser-yag-pontecorvo`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/laser-terapia-pontecorvo`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tecar-terapia-pontecorvo`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tens-pontecorvo`,                         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/onde-d-urto-pontecorvo`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/magnetoterapia-noleggio-pontecorvo`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },

    // Geografiche
    { url: `${base}/fisioterapista-cassino`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/fisioterapista-ceprano`,                  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fisioterapista-frosinone`,                lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
