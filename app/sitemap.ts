import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://turchettamarco.com'

  return [
    // ═══ CORE (priorità massima) ═══
    { url: `${base}`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/prenota`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/chi-sono`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // ═══ PAGINE PILASTRO (top keyword) ═══
    { url: `${base}/fisioterapia-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/mal-di-schiena-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/cervicale-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.95 },
    { url: `${base}/osteopatia-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },

    // ═══ CLUSTER GINOCCHIO/ANCA ═══
    { url: `${base}/dolore-ginocchio-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/protesi-ginocchio-riabilitazione-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/riabilitazione-anca-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/epicondilite-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/dolore-anca-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

    // ═══ PATOLOGIE COLONNA ═══
    { url: `${base}/sciatalgia-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ernia-del-disco-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/torcicollo-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/artrosi-vertebrale-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/scoliosi-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },

    // ═══ PATOLOGIE ARTI ═══
    { url: `${base}/dolore-spalla-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/dolore-caviglia-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/contrattura-muscolare-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ═══ NEUROLOGIA E TESTA ═══
    { url: `${base}/cefalea-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/riabilitazione-neurologica-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/disfunzione-atm-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ═══ POSTURA E METODI ═══
    { url: `${base}/postura-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/metodo-mezieres-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/terapia-manuale-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/fisioterapia-sportiva-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/osteopatia-viscerale-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // ═══ TECNOLOGIE ═══
    { url: `${base}/laser-yag-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/laser-terapia-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/tecar-terapia-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/tens-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/onde-d-urto-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/magnetoterapia-noleggio-pontecorvo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ═══ GEOGRAFICHE ═══
    { url: `${base}/fisioterapista-cassino`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/fisioterapista-ceprano`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fisioterapista-frosinone`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/fisioterapista-aquino`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/fisioterapista-arce`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/fisioterapista-san-giorgio-a-liri`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/fisioterapista-pignataro-interamna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fisioterapista-esperia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fisioterapista-pico`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fisioterapista-san-giovanni-incarico`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/fisioterapista-monticelli`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // ═══ BLOG ═══
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/mal-di-schiena-quando-preoccuparsi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/mal-di-schiena-cause`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/cervicale-errori`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/cervicale-smartphone`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/dolore-ginocchio-cosa-fare`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/blog/laser-yag-come-funziona`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/prima-visita-fisioterapista`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/osteopatia-viscerale-intestino`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/blog/acufeni-osteopatia`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.75 },
  ]
}
