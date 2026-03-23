import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Calendar, User } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Prima Visita dal Fisioterapista: Cosa Aspettarsi | Marco Turchetta',
  description: 'Tutto quello che devi sapere prima della prima visita fisioterapica. Come prepararsi, cosa succede, cosa portare. Marco Turchetta fisioterapista e osteopata a Pontecorvo (FR).',
  keywords: ['prima visita fisioterapista', 'prima seduta fisioterapia', 'fisioterapista prima volta', 'valutazione fisioterapica'],
  alternates: { canonical: 'https://turchettamarco.com/blog/prima-visita-fisioterapista' },
}

export default function Post() {
  return (
    <main className="bg-background text-foreground">
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full border bg-blue-50 text-blue-700 border-blue-200">Consigli</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3 w-3" /> 17 marzo 2026</span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><User className="h-3 w-3" /> Marco Turchetta</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight mb-6">Prima visita dal fisioterapista: cosa aspettarsi e come prepararsi</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">Molti pazienti arrivano alla prima visita senza sapere cosa succederà — con un misto di aspettativa e preoccupazione. Questo articolo serve a togliere ogni dubbio: ecco cosa succede nel mio studio durante la prima seduta, passo per passo.</p>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 space-y-8">

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Cosa portare alla prima visita</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { t: 'Referti medici', d: 'RMN, TAC, radiografie, ecografie — tutto quello che hai fatto. Non è obbligatorio, ma mi aiuta a contestualizzare.' },
                { t: 'Lista farmaci', d: 'Antidolorifici, antiinfiammatori, altri farmaci che stai assumendo regolarmente.' },
                { t: 'Abbigliamento comodo', d: 'Shorts o tuta — dovrò valutare la zona dolorosa. Evita jeans e abiti non elastici.' },
                { t: 'Le tue domande', d: 'Scrivi tutto quello che vuoi chiedere. La prima visita è anche il momento giusto per chiarire i dubbi.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{t}</h3>
                  <p className="text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">I 5 momenti della prima visita</h2>
            <div className="space-y-4">
              {[
                { n: '01', t: 'Ti ascolto — senza fretta', d: 'La prima parte è l\'anamnesi: racconto la tua storia clinica. Quando è iniziato il dolore, cosa lo peggiora e cosa lo migliora, cosa hai già provato, i tuoi precedenti infortuni e interventi. Non mi fermo solo al problema attuale — spesso la causa è lontana dal sintomo.' },
                { n: '02', t: 'Valutazione clinica obiettiva', d: 'Eseguo test specifici per la tua condizione: test di mobilità, test ortopedici, test neurologici. Valuto la postura, la forza, la sensibilità. Ogni test ha un senso preciso — mi aiuta a capire non solo dove fa male, ma perché fa male.' },
                { n: '03', t: 'Ti spiego cosa ho trovato', d: 'Capire cosa sta succedendo al tuo corpo non è solo rassicurante — accelera concretamente la guarigione. I pazienti che capiscono il loro problema guariscono più velocemente. Ti spiego in modo comprensibile cosa ho trovato, cosa penso stia causando il dolore e qual è la mia ipotesi di lavoro.' },
                { n: '04', t: 'Proposta di trattamento', d: 'Ti propongo un piano: quali tecniche, quante sedute, con quale frequenza, cosa ti chiedo di fare a casa. Tutto trasparente. Decidi tu se procedere — nessun obbligo, nessuna pressione.' },
                { n: '05', t: 'Primo trattamento (se sei d\'accordo)', d: 'Se è utile e se sei d\'accordo, iniziamo già nella prima seduta. Non sempre è opportuno — a volte la valutazione richiede tutto il tempo disponibile. Ma in molti casi i pazienti escono con meno dolore di quando sono entrati.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{n}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{t}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground mb-4">Le domande più frequenti prima della prima visita</h2>
            <div className="space-y-4">
              {[
                { q: 'Ho bisogno di una prescrizione medica?', a: 'No. Il fisioterapista è una figura sanitaria autonoma — puoi prenotare direttamente senza passare dal medico. Ovviamente, se hai una diagnosi medica o esami strumentali, portali: mi aiutano.' },
                { q: 'Farà male?', a: 'La valutazione è in gran parte non invasiva — movimenti guidati, palpazione, test. Alcune manovre possono riprodurre il tuo dolore per un momento (questo è diagnosticamente utile), ma non si supera mai la soglia del tollerabile. Te lo dico sempre prima.' },
                { q: 'Quante sedute mi serviranno?', a: 'Non posso saperlo prima di vederti. Dopo la valutazione ho un\'idea molto più precisa. Un problema acuto può richiedere 4–6 sedute; una condizione cronica di anni può richiedere un percorso più lungo. Te lo dico chiaramente e onestamente.' },
                { q: 'Devo sospendere i farmaci?', a: 'No — continua a prendere quello che ti ha prescritto il medico. Anzi, se stai prendendo antidolorifici, dimmelo: mi aiuta a capire meglio il quadro clinico.' },
              ].map(({ q, a }) => (
                <div key={q} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">❓ {q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota la prima visita <ArrowRight className="h-4 w-4" />
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
