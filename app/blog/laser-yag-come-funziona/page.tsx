import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Laser Nd:YAG: Come Funziona e Quando È Indicato | Marco Turchetta',
  description: 'Come funziona davvero il laser Nd:YAG in fisioterapia. Effetti biologici, indicazioni cliniche e differenze rispetto ad altri laser. Marco Turchetta fisioterapista Pontecorvo.',
  keywords: ['laser Nd:YAG fisioterapia', 'laser terapia come funziona', 'laser Zaira', 'laserterapia indicazioni', 'laser terapia Pontecorvo'],
  alternates: { canonical: 'https://turchettamarco.com/blog/laser-yag-come-funziona' },
}

export default function Post() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-purple-50 text-purple-700 border-purple-200">Tecnologie</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 12 marzo 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            Laser Nd:YAG: come funziona davvero e quando è indicato
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            "Ho fatto il laser" — lo dicono in tanti, ma spesso si riferiscono a cose molto diverse. Il laser Nd:YAG che utilizzo nel mio studio è tecnologia medicale ad alta potenza, non ha nulla a che vedere con i laser estetici o con i dispositivi di classe bassa. Spiego la differenza.
          </p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa significa Nd:YAG</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Nd:YAG sta per Neodimio:Ittrio-Alluminio-Granato — il cristallo che genera il fascio laser. La lunghezza d&apos;onda prodotta è di <strong className="text-foreground">1064 nanometri</strong>, nel vicino infrarosso. Questa lunghezza d&apos;onda specifica ha una proprietà unica: penetra i tessuti biologici in profondità senza essere assorbita dalla melanina superficiale (che invece blocca i laser a lunghezze d&apos;onda più corte).</p>
            <p className="text-muted-foreground leading-relaxed">Risultato pratico: il laser Nd:YAG raggiunge strutture che altri laser non possono trattare — tendini profondi, capsule articolari, strutture muscolari a 5–6 cm di profondità. È la differenza tra trattare la superficie e trattare la causa.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">I tre effetti biologici del laser Nd:YAG</h2>
            <div className="space-y-4">
              {[
                { icon: '⚗️', t: 'Effetto Fotochimico (Biostimolazione)', d: 'I fotoni del laser vengono assorbiti dai citocromi mitocondriali delle cellule danneggiate. Questo attiva la catena respiratoria cellulare e aumenta la produzione di ATP — il carburante cellulare. Le cellule con più energia riparano i tessuti più velocemente. È l\'effetto più importante per tendinopatie croniche e lesioni muscolari.' },
                { icon: '🌡️', t: 'Effetto Fototermico', d: 'L\'energia laser genera un aumento controllato della temperatura locale (ipertermia terapeutica). Questo stimola la microcircolazione, accelera la clearance dei mediatori dell\'infiammazione e produce un effetto analgesico diretto. La temperatura non supera mai soglie dannose — il dispositivo Zaira ha sistemi di controllo precisi.' },
                { icon: '💫', t: 'Effetto Fotomeccanico', d: 'In modalità pulsata, i picchi di potenza (fino a 30W nel Zaira) generano onde di pressione che drenano edemi e ematomi in profondità, con un\'azione simile alle onde d\'urto ma di intensità minore. Particolarmente efficace nella fase acuta di traumi e in presenza di gonfiori articolari.' },
              ].map(({ icon, t, d }) => (
                <div key={t} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><span className="text-xl">{icon}</span>{t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Il Zaira di Garda Laser: perché questo dispositivo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">Non tutti i laser Nd:YAG sono uguali. La differenza sta nella potenza, nella qualità del fascio e nella affidabilità del sistema di controllo. Il Zaira di Garda Laser è un dispositivo Made in Italy, certificato CE come dispositivo medicale di classe IIb, prodotto da un&apos;azienda con oltre 20 anni di esperienza esclusiva nella produzione di laser medicali.</p>
            <div className="grid grid-cols-3 gap-3">
              {[['1064 nm', "Lunghezza d'onda"], ['5–6 cm', 'Penetrazione'], ['30 W', 'Potenza di picco']].map(([v, l]) => (
                <div key={l} className="text-center p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <p className="font-display text-xl font-semibold text-primary">{v}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{l}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Quando è indicato — e quando no</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                <h3 className="font-semibold text-green-800 mb-3">✅ Indicazioni principali</h3>
                <ul className="space-y-1.5 text-sm text-green-700">
                  {['Tendiniti e tendinopatie croniche', 'Calcificazioni tendinee (spalla)', 'Epicondilite laterale', 'Fascite plantare', 'Borsiti e sinoviti', 'Lombalgia e cervicalgia', 'Artrosi e condropatie', 'Edemi post-traumatici', 'Cicatrici e aderenze'].map(i => <li key={i}>→ {i}</li>)}
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-xl border border-red-200">
                <h3 className="font-semibold text-red-800 mb-3">❌ Controindicazioni</h3>
                <ul className="space-y-1.5 text-sm text-red-700">
                  {['Gravidanza', 'Zone con neoplasie attive', 'Pacemaker nella zona trattata', 'Infezioni cutanee attive', 'Fotosensibilità da farmaci', 'Epilessia non controllata'].map(i => <li key={i}>→ {i}</li>)}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Come si svolge una seduta</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">La seduta dura 15–20 minuti sulla zona da trattare. Si indossano occhiali protettivi (obbligatori per sicurezza — anche per chi è in stanza). La sensazione è di un leggero calore nella zona trattata — nessun dolore. Il trattamento è completamente non invasivo.</p>
            <p className="text-muted-foreground leading-relaxed">Nel mio studio il laser non viene mai proposto come trattamento isolato. Fa parte di un percorso integrato con terapia manuale e, dove indicato, esercizio terapeutico. I risultati sono significativamente migliori quando le tecniche lavorano insieme.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una seduta laser <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/laser-yag-pontecorvo" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              Laser YAG a Pontecorvo →
            </Link>
          </div>

          <div className="pt-8 border-t border-border">
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Torna al blog</Link>
          </div>
        </div>
      </article>
    </main>
  )
}
