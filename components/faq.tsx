"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown, ChevronUp, Phone, MessageCircle, ArrowRight } from "lucide-react"

const faqs = [
  { q: "Devo avere una prescrizione medica per venire da te?", a: "No. Il fisioterapista è un professionista sanitario che puoi consultare direttamente, senza ricetta. Se hai referti o RMN, portali pure — aiutano, ma non sono obbligatori. Basta che tu mi chiami o mi scriva su WhatsApp." },
  { q: "Quante sedute mi servono?", a: "Dipende dal problema e dalla risposta del tuo corpo. Un problema acuto risponde spesso in 4–8 sedute. Un dolore cronico di anni richiede un percorso più lungo. Te ne darò una stima concreta e onesta dopo la prima valutazione — non voglio tenerti in fisioterapia più del necessario." },
  { q: "Cosa c'è di diverso tra fisioterapia e osteopatia?", a: "La fisioterapia lavora sulla funzione, sulla riabilitazione, sull'esercizio terapeutico e sulla struttura locale. L'osteopatia ha una visione globale: cerca le connessioni tra strutture distanti del corpo per trovare la causa della disfunzione. Integrarle mi permette di trattare sia il problema specifico che il contesto che lo ha generato — spesso è questo secondo aspetto che fa la differenza." },
  { q: "Tratti solo problemi muscolo-scheletrici?", a: "La mia specializzazione principale è il dolore dell'apparato muscolo-scheletrico: schiena, collo, spalle, ginocchia, anche, piedi. Tratto anche riabilitazione neurologica, problemi posturali globali e disfunzioni viscerali (osteopatia viscerale). Se hai dubbi, scrivimi — ti dico onestamente se posso aiutarti." },
  { q: "Posso portare RMN, TAC o referti medici?", a: "Sì, e te lo chiedo. Attenzione però: il dolore non sempre corrisponde alla patologia visibile su RMN. Molte ernie non danno dolore, e molti dolori importanti non mostrano nulla alle immagini. La valutazione clinica rimane sempre il punto di partenza." },
  { q: "Quanto dura ogni seduta?", a: "Tra 45 e 60 minuti. Non uso timer: la seduta finisce quando abbiamo fatto quello che dovevamo fare. La prima valutazione è tipicamente la più lunga (60–75 minuti)." },
  { q: "Quanto costa una seduta di fisioterapia a Pontecorvo?", a: "Il costo varia in base al tipo di trattamento. Te lo comunico prima di iniziare qualsiasi percorso — nessuna sorpresa, nessun costo nascosto. La trasparenza sui costi fa parte del mio modo di lavorare." },
  { q: "Posso venire senza prescrizione medica?", a: "Sì, assolutamente. Il fisioterapista è una figura sanitaria che puoi consultare direttamente. Molti pazienti mi contattano appena inizia il dolore, senza aspettare. Prima inizi, più è facile risolvere." },
  { q: "Sei il fisioterapista più vicino a Cassino / Aquino / Ceprano?", a: "Il mio studio è a Pontecorvo, in posizione centrale rispetto alla Valle del Liri. Da Cassino sono circa 15 km (20 minuti), da Aquino 8 km, da Ceprano 10 km, da Arce 12 km. Parcheggio libero nelle vicinanze." },
  { q: "Come posso prenotare?", a: "Online tramite il form sul sito, chiamandomi al 320 963 1792, o scrivendomi su WhatsApp. Di solito rispondo entro poche ore." },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-14">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">Domande frequenti</p>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground leading-tight max-w-lg">
            Le domande prima di prenotare
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-start">
          <div className="hidden lg:block">
            <p className="text-muted-foreground leading-relaxed text-sm mb-5">
              Non hai trovato risposta? Scrivimi direttamente — rispondo entro poche ore.
            </p>
            <div className="space-y-3">
              <a href="https://wa.me/393209631792" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                <MessageCircle className="h-4 w-4" /> Scrivimi su WhatsApp →
              </a>
              <a href="tel:+393209631792" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" /> 320 963 1792
              </a>
            </div>
            <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
              <p className="text-sm font-semibold text-foreground mb-2">Pronto a iniziare?</p>
              <Link href="/prenota"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Prenota ora la prima valutazione <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-foreground text-sm sm:text-base">{faq.q}</span>
                  {open === i
                    ? <ChevronUp className="h-4 w-4 text-primary flex-shrink-0" />
                    : <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
                </button>
                {open === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA mobile */}
        <div className="mt-8 text-center lg:hidden">
          <Link href="/prenota"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
            Prenota ora <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
