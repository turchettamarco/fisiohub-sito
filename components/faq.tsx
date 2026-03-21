"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    q: "Devo avere una prescrizione medica per venire da te?",
    a: "No. Il fisioterapista è un professionista sanitario che puoi consultare direttamente, senza ricetta. Se hai referti o RMN, portali pure — aiutano, ma non sono obbligatori.",
  },
  {
    q: "Quante sedute mi servono?",
    a: "Dipende dal problema e dalla risposta del tuo corpo. Un problema acuto risponde spesso in 4–8 sedute. Un dolore cronico di anni richiede un percorso più lungo. Ti darò una stima concreta dopo la prima valutazione.",
  },
  {
    q: "Cosa c'è di diverso tra fisioterapia e osteopatia?",
    a: "La fisioterapia lavora sulla funzione e sulla riabilitazione dopo un trauma o un'operazione. L'osteopatia ha una visione globale: studia le connessioni tra strutture del corpo per trovare la causa disfunzionale che genera il sintomo. Integrarle mi permette di trattare sia il problema specifico che il contesto che lo ha generato.",
  },
  {
    q: "Tratti solo problemi muscolo-scheletrici?",
    a: "La mia specializzazione principale è il dolore dell'apparato muscolo-scheletrico: schiena, collo, spalle, ginocchia, anche, piedi. Tratto anche riabilitazione neurologica e problemi posturali globali. Se hai dubbi, scrivimi: ti dico onestamente se posso aiutarti.",
  },
  {
    q: "Posso portare RMN, TAC o referti medici?",
    a: "Sì, e ti chiedo di farlo se li hai. Attenzione però: il dolore non sempre corrisponde alla patologia visibile su RMN. Molte ernie non danno dolore, e molti dolori importanti non mostrano nulla sulle immagini. La valutazione clinica rimane sempre il punto di partenza.",
  },
  {
    q: "Quanto dura ogni seduta?",
    a: "Tra 45 e 60 minuti. Non uso timer: la seduta finisce quando abbiamo fatto quello che dovevamo fare. La prima valutazione è tipicamente la più lunga (60–75 minuti).",
  },
  {
    q: "Offri trattamenti a domicilio?",
    a: "In casi selezionati posso valutare trattamenti domiciliari, ad esempio per pazienti con difficoltà motorie importanti nel periodo post-chirurgico acuto. Contattami per discuterne.",
  },
  {
    q: "Hai attrezzatura strumentale?",
    a: "Sì. Utilizzo il laser Nd:YAG Zaira (Garda Laser, Made in Italy), tecarterapia Globus Diacare 5000, TENS Globus, ultrasuoni e offro noleggio magnetoterapia domiciliare. Prossimamente anche onde d'urto extracorporee (ESWT).",
  },
  {
    q: "Come posso prenotare?",
    a: "Online tramite il form sul sito, chiamandomi al 320 963 1792, o scrivendomi su WhatsApp. Di solito rispondo entro poche ore.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Domande frequenti
          </p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight max-w-lg">
            Le domande più comuni prima di prenotare
          </h2>
        </div>

        {/* On mobile: full width. On lg: 2-col with sidebar */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-start">

          {/* Sidebar — visible only lg+ */}
          <div className="hidden lg:block">
            <p className="text-muted-foreground leading-relaxed text-sm">
              Non hai trovato risposta? Scrivimi direttamente — rispondo con piacere
              a qualsiasi domanda sul tuo problema specifico.
            </p>
            <a
              href="https://wa.me/393209631792"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mt-5"
            >
              Scrivimi su WhatsApp →
            </a>
          </div>

          {/* Accordion */}
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-semibold text-foreground text-sm leading-snug">
                    {faq.q}
                  </span>
                  {open === i
                    ? <ChevronUp className="h-4 w-4 text-primary flex-shrink-0" />
                    : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  }
                </button>
                {open === i && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-border">
                    <p className="text-sm text-muted-foreground leading-relaxed pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA under accordion */}
            <div className="lg:hidden pt-4">
              <p className="text-sm text-muted-foreground mb-3">Non hai trovato risposta?</p>
              <a
                href="https://wa.me/393209631792"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Scrivimi su WhatsApp →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
