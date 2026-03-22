import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mal di Schiena a Pontecorvo | Fisioterapia e Osteopatia — Marco Turchetta',
  description: 'Mal di schiena a Pontecorvo (FR)? Marco Turchetta fisioterapista e osteopata tratta lombalgia acuta e cronica, ernie, sciatalgia. Valutazione clinica approfondita. Prenota online.',
  keywords: [
    'mal di schiena Pontecorvo',
    'lombalgia Pontecorvo',
    'fisioterapia mal di schiena Pontecorvo',
    'osteopata mal di schiena Pontecorvo',
    'dolore schiena Pontecorvo',
    'ernia disco Pontecorvo',
    'sciatalgia Pontecorvo',
  ],
  alternates: { canonical: 'https://turchettamarco.com/mal-di-schiena-pontecorvo' },
  openGraph: {
    title: 'Mal di Schiena a Pontecorvo | Marco Turchetta Fisioterapista',
    description: 'Trattamento del mal di schiena a Pontecorvo con fisioterapia e osteopatia integrate. Valutazione clinica approfondita, percorso personalizzato.',
    url: 'https://turchettamarco.com/mal-di-schiena-pontecorvo',
  },
}

export default function MalDiSchienaPontecorvo() {
  return (
    <main className="bg-background text-foreground">

      {/* Hero */}
      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
            Mal di Schiena · Pontecorvo (FR)
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6">
            Mal di schiena a Pontecorvo
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
            Il mal di schiena è il problema più comune che tratto nel mio studio a Pontecorvo.
            Acuto o cronico, con o senza irradiazione alla gamba, dopo un trauma o comparso
            senza una causa apparente — nella maggior parte dei casi c'è una causa precisa
            che si può trovare e trattare.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/prenota"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
            >
              Prenota una valutazione <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+393209631792"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium"
            >
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      {/* Contenuto */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Perché hai mal di schiena — e perché non passa
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il mal di schiena è la prima causa di disabilità nel mondo occidentale.
              In Italia, si stima che l'80% delle persone ne soffra almeno una volta nella vita.
              Eppure nella maggior parte dei casi viene gestito con antidolorifici, riposo e
              qualche seduta di massaggio — senza mai capire davvero perché è comparso.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il risultato? Il dolore passa, poi torna. Ogni sei mesi, ogni anno, ogni volta
              che si fa uno sforzo. Perché la causa non è mai stata trovata né trattata.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nel mio studio a Pontecorvo lavoro in modo diverso. La prima cosa che faccio
              è una valutazione clinica approfondita: ascolto la storia del tuo dolore,
              eseguo test specifici per la colonna lombare, valuto la postura, la mobilità,
              la forza muscolare e i riflessi. Solo dopo ho un'idea chiara di cosa sta
              succedendo — e posso costruire un percorso che funzioni davvero.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Le forme più comuni di mal di schiena che tratto
            </h2>
            <div className="space-y-5">
              {[
                {
                  title: 'Lombalgia acuta (colpo della strega)',
                  desc: 'Dolore improvviso e invalidante che compare spesso dopo uno sforzo o un movimento brusco. In genere risponde bene alla terapia manuale in poche sedute. L\'obiettivo è non solo risolvere l\'episodio acuto, ma capire cosa l\'ha predisposto per evitare che si ripeta.',
                },
                {
                  title: 'Lombalgia cronica',
                  desc: 'Dolore alla schiena che dura da mesi o anni, spesso con periodi di relativa calma e riacutizzazioni. È la forma più complessa: richiede una valutazione che consideri non solo la colonna, ma le abitudini posturali, la forza muscolare, le eventuali compensazioni da altri distretti.',
                },
                {
                  title: 'Ernia del disco con sciatalgia',
                  desc: 'L\'ernia discale che comprime una radice nervosa genera dolore che dal lombare scende lungo la gamba fino al piede. Non tutte le ernie richiedono l\'intervento: nella maggior parte dei casi la fisioterapia e l\'osteopatia, integrate con laserterapia o tecarterapia, permettono di risolvere il problema conservativamente.',
                },
                {
                  title: 'Protrusione discale',
                  desc: 'Stadio precedente all\'ernia vera e propria. Il disco è deformato ma non rotto. Con un trattamento tempestivo e adeguato, è possibile gestire il dolore e prevenire l\'evoluzione verso l\'ernia conclamata.',
                },
                {
                  title: 'Dolore da artrosi lombare (spondiloartrosi)',
                  desc: 'L\'usura delle articolazioni della colonna genera dolore, rigidità mattutina e limitazione dei movimenti. Non si può invertire l\'artrosi, ma si può ridurre significativamente il dolore e mantenere la mobilità con un approccio fisioterapico mirato.',
                },
                {
                  title: 'Dolore lombare posturale',
                  desc: 'Nessun\'alterazione strutturale visibile su RMN o TAC, ma dolore costante legato a posture scorrette, debolezza muscolare o squilibri delle catene muscolari. Risponde molto bene al metodo Mézières, all\'esercizio terapeutico e al lavoro osteopatico sulle catene tensionali.',
                },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Come tratto il mal di schiena nel mio studio
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Non esiste un protocollo standard per il mal di schiena — o meglio, i protocolli
              standard esistono, ma funzionano male perché ogni persona e ogni dolore sono diversi.
              Nel mio studio a Pontecorvo utilizzo un approccio integrato che combina:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'Terapia manuale e manipolazioni vertebrali',
                'Osteopatia strutturale e viscerale',
                'Laserterapia Nd:YAG (tendinopatie, infiammazione profonda)',
                'Tecarterapia Globus Diacare 5000 (muscoli e articolazioni)',
                'Rieducazione posturale metodo Mézières',
                'Esercizio terapeutico personalizzato',
                'Educazione al movimento e alla postura',
                'TENS per il controllo del dolore cronico',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Cosa aspettarsi dal trattamento
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un episodio acuto di mal di schiena senza complicazioni risponde spesso in
              4–8 sedute. Una lombalgia cronica di anni richiede un percorso più lungo —
              tipicamente 10–15 sedute — con un programma di esercizi da continuare autonomamente.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Il mio obiettivo non è solo che tu stia bene dopo le sedute — è che tu capisca
              cosa ha causato il tuo mal di schiena, come evitare che si ripeta e cosa fare
              se dovesse tornare. La fisioterapia che funziona ti rende autonomo, non dipendente.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se hai già fatto fisioterapia altrove senza risultati duraturi, non significa
              che il tuo problema sia irrisolvibile. Significa che non è stata ancora trovata
              la causa giusta. Iniziamo da lì.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
              Dove si trova lo studio a Pontecorvo
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lo studio è in Via Galileo Galilei 5, a Pontecorvo (FR), presso gli Studi Galileo.
              Raggiungibile facilmente da Cassino, Ceprano, Arce, Aquino, San Giorgio a Liri
              e Sant'Elia Fiumerapido. Parcheggio libero nelle vicinanze. Lavoro su appuntamento.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-4">
            Hai mal di schiena a Pontecorvo?
          </h2>
          <p className="text-muted-foreground mb-6">
            Prenota una valutazione. In 60 minuti capiamo cosa sta succedendo
            e costruiamo il percorso giusto per te.
          </p>
          <Link
            href="/prenota"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity"
          >
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}
