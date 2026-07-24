export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  color: string
}

export const posts: BlogPost[] = [
  { slug: 'dolore-spalla-riconoscere', title: 'Dolore alla spalla: conflitto, tendinite o spalla congelata?', excerpt: 'Tre problemi diversi che si distinguono da come si muove la spalla, non da dove fa male. Sintomi, differenze e trattamento.', category: 'Patologie', date: '2026-07-24', color: 'bg-red-50 text-red-700 border-red-200' },
  { slug: 'sciatalgia-o-piriforme', title: 'Dolore al gluteo che scende nella gamba: sciatica o sindrome del piriforme?', excerpt: 'Sintomi quasi identici, origini diverse a venti centimetri di distanza. Come distinguerle e perché il bacino c\'entra quasi sempre.', category: 'Patologie', date: '2026-07-23', color: 'bg-red-50 text-red-700 border-red-200' },
  { slug: 'atm-bruxismo-mal-di-testa', title: 'Mandibola che schiocca, bruxismo e mal di testa: i disturbi dell\'ATM', excerpt: 'Click quando apri la bocca, denti serrati la notte, dolore all\'orecchio. Perché un\'articolazione piccolissima crea così tanti sintomi.', category: 'Osteopatia', date: '2026-07-22', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { slug: 'cefalea-cervicogenica', title: 'Mal di testa che parte dal collo: la cefalea cervicogenica', excerpt: 'Nasce dalla nuca e sale dietro l\'occhio, sempre dallo stesso lato. Non è emicrania: è il collo che genera il mal di testa.', category: 'Patologie', date: '2026-07-21', color: 'bg-red-50 text-red-700 border-red-200' },
  { slug: 'colpo-della-strega-72-ore', title: 'Colpo della strega: cosa fare nelle prime 72 ore', excerpt: 'Cosa fare davvero nei tre giorni che contano di più, cosa evitare, e perché il riposo a letto peggiora il recupero.', category: 'Consigli', date: '2026-07-20', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'reflusso-diaframma-dorsalgia', title: 'Reflusso, digestione difficile e dolore tra le scapole: il ruolo del diaframma', excerpt: 'Un dolore dorsale che non passa con i massaggi e peggiora dopo i pasti. Cosa c\'entra il diaframma e cosa può fare l\'osteopatia viscerale.', category: 'Osteopatia', date: '2026-07-19', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { slug: 'stress-sistema-neurovegetativo', title: 'Quando lo stress si scarica sul corpo: il sistema neurovegetativo', excerpt: 'Esami tutti normali ma la sensazione di non funzionare. Cos\'è lo squilibrio neurovegetativo e perché il lavoro manuale può avere un ruolo.', category: 'Osteopatia', date: '2026-07-18', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { slug: 'mal-di-schiena-quando-preoccuparsi', title: 'Mal di schiena: quando preoccuparsi davvero', excerpt: 'Come distinguere il mal di schiena normale da quello che richiede attenzione urgente. I segnali di allarme che devi conoscere.', category: 'Patologie', date: '2026-03-15', color: 'bg-red-50 text-red-700 border-red-200' },
  { slug: 'cervicale-errori', title: 'Cervicale: 5 errori che peggiorano il dolore (e come evitarli)', excerpt: 'Molte persone con dolore cervicale fanno cose che, in buona fede, mantengono il problema. Ecco i 5 errori più comuni.', category: 'Consigli', date: '2026-03-19', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'dolore-ginocchio-cosa-fare', title: 'Dolore al ginocchio: cosa fare subito (e cosa evitare)', excerpt: 'Ginocchio gonfio, dolore sulle scale, scatto quando ti alzi. Cosa fare nelle prime 48 ore e quando andare dal fisioterapista.', category: 'Consigli', date: '2026-03-22', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'mal-di-schiena-cause', title: 'Mal di schiena: le 5 cause più frequenti (e come riconoscerle)', excerpt: 'Non tutto il mal di schiena è uguale. Capire la causa cambia radicalmente il trattamento — e i risultati.', category: 'Patologie', date: '2026-03-01', color: 'bg-red-50 text-red-700 border-red-200' },
  { slug: 'cervicale-smartphone', title: 'Cervicale e smartphone: perché il dolore al collo è esploso negli ultimi 10 anni', excerpt: 'Il "text neck" non è un mito. Come il telefono sta danneggiando la tua cervicale e 5 cose concrete che puoi fare oggi.', category: 'Consigli', date: '2026-03-08', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'laser-yag-come-funziona', title: 'Laser Nd:YAG: come funziona davvero e quando è indicato', excerpt: 'Non è il laser di un centro estetico. Spiegazione scientifica degli effetti biologici e delle indicazioni cliniche del laser Nd:YAG.', category: 'Tecnologie', date: '2026-03-12', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { slug: 'prima-visita-fisioterapista', title: 'Prima visita dal fisioterapista: cosa aspettarsi e come prepararsi', excerpt: 'Tutto quello che devi sapere prima della prima visita. Come prepararsi, cosa succede, cosa portare — senza sorprese.', category: 'Consigli', date: '2026-03-17', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { slug: 'osteopatia-viscerale-intestino', title: "Quando l'intestino fa male alla schiena: osteopatia viscerale spiegata", excerpt: "Il collegamento tra visceri e colonna vertebrale è reale. Come un colon irritato può causare lombalgia.", category: 'Osteopatia', date: '2026-03-22', color: 'bg-teal-50 text-teal-700 border-teal-200' },
  { slug: 'acufeni-osteopatia', title: 'Acufeni e osteopatia cranica: quando quel ronzio ha una spiegazione meccanica', excerpt: 'Fischio o ronzio nell\'orecchio che non passa? In molti casi gli acufeni hanno una causa meccanica — cervicale, mandibola, cranio — che l\'osteopatia può trattare.', category: 'Osteopatia', date: '2026-03-26', color: 'bg-teal-50 text-teal-700 border-teal-200' },
]

/** Post ordinati dal piu recente. */
export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find(p => p.slug === slug)
}

/** Articoli suggeriti: prima quelli della stessa categoria, poi i piu recenti. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPost(slug)
  const others = getSortedPosts().filter(p => p.slug !== slug)
  if (!current) return others.slice(0, limit)
  const same = others.filter(p => p.category === current.category)
  const rest = others.filter(p => p.category !== current.category)
  return [...same, ...rest].slice(0, limit)
}

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('it-IT', { day: '2-digit', month: 'long', year: 'numeric' })
}
