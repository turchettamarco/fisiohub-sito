import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { PainConditions } from "@/components/pain-conditions"
import { Services } from "@/components/services"
import { WhyChoose } from "@/components/why-choose"
import { Testimonials } from "@/components/testimonials"
import { Process } from "@/components/process"
import { FirstVisit } from "@/components/first-visit"
import { Laser } from "@/components/laser"
import { About } from "@/components/about"
import { Faq } from "@/components/faq"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import Link from "next/link"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* SEZIONE PROBLEMI — copy emotivo e concreto */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Il tuo problema</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Stai soffrendo da settimane. O da anni.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hai preso antidolorifici che mascherano il dolore senza risolverlo.
              Hai fatto massaggi che danno sollievo per un giorno e poi il dolore torna.
              Hai aspettato che passasse da solo — e non è passato.
              Il problema non sei tu. È che nessuno ha ancora trovato la causa vera.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Mal di schiena */}
            <Link href="/mal-di-schiena-pontecorvo"
              className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4 text-2xl">🦴</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Mal di schiena a Pontecorvo
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Ti svegli rigido ogni mattina. Fatica a infilarti le scarpe.
                Devi interrompere il lavoro per il dolore. Non riesci a stare seduto più di 20 minuti.
                Il colpo della strega che ti ha bloccato a letto per tre giorni.
                L&apos;ernia che ti fa scendere il dolore lungo la gamba fino al piede.
                Il mal di schiena cronico che è lì da anni e che non ti dà mai pace.
                <strong className="text-foreground"> Nella maggior parte dei casi si risolve — se si trova la causa.</strong>
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Scopri come risolverlo <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Cervicale */}
            <Link href="/cervicale-pontecorvo"
              className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 text-2xl">🦷</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Cervicale a Pontecorvo
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Collo rigido appena ti alzi. Mal di testa che parte dalla nuca ogni mattina.
                Formicolio alle braccia che ti sveglia di notte.
                Non riesci a girare la testa mentre guidi.
                Ore allo schermo che ti hanno distrutto il collo negli ultimi anni.
                Hai fatto massaggi, preso antidolorifici, messo il cuscino cervicale.
                <strong className="text-foreground"> Il dolore torna perché la causa non è mai stata trattata.</strong>
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Scopri come risolverlo <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            {/* Dolori articolari */}
            <Link href="/dolore-ginocchio-pontecorvo"
              className="group block p-6 bg-card rounded-2xl border border-border hover:border-primary/40 hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mb-4 text-2xl">🦵</div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                Dolori articolari a Pontecorvo
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Ginocchio che scatta quando sali le scale. Spalla che non riesci ad alzare oltre l&apos;altezza della testa.
                Anca che ti fa zoppicare dopo 10 minuti di cammino.
                Caviglia che continua a cedere. Dolore che ti impedisce di fare quello che ami.
                Che sia artrosi, un&apos;ernia, un infortunio sportivo o anni di usura:
                <strong className="text-foreground"> la funzione si recupera quasi sempre, se si lavora nel modo giusto.</strong>
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all">
                Scopri come risolverlo <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground mb-4">Non trovi il tuo problema? Quasi certamente posso aiutarti lo stesso.</p>
            <a href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20ho%20un%20dolore%20e%20vorrei%20sapere%20se%20puoi%20aiutarmi."
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-5 py-2.5 rounded-xl hover:border-primary/40 transition-colors font-medium text-sm">
              <MessageCircle className="h-4 w-4" /> Scrivimi e dimmi il tuo problema
            </a>
          </div>
        </div>
      </section>

      <PainConditions />
      <WhyChoose />
      <Laser />
      <Services />

      {/* PROVA SOCIALE */}
      <section className="py-16 sm:py-20 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Risultati reali</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Cosa dicono i pazienti
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Storie vere, patologie precise, nomi abbreviati per la privacy.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { init: "R.M.", cond: "Sciatalgia da ernia L4-L5", text: "Dopo mesi di dolore alla schiena che mi scendeva fino al piede, ho trovato finalmente qualcuno che ha capito il problema. Marco ha fatto una valutazione molto più approfondita di tutti gli altri fisioterapisti che avevo già visto. In sei settimane il dolore era quasi scomparso." },
              { init: "L.F.", cond: "Calcificazione sovraspinato", text: "L'ortopedico mi aveva già proposto l'intervento alla spalla. Con Marco abbiamo usato laser Nd:YAG e lavoro manuale. Dopo 12 sedute il dolore era quasi zero e all'ecografia di controllo la calcificazione si era ridotta. Ho evitato l'operazione." },
              { init: "G.B.", cond: "Cervicale cronica e cefalea tensiva", text: "Cervicale cronica da anni, mal di testa ogni mattina. In tre settimane con osteopatia, laser e esercizi ho ottenuto più risultati che in anni di massaggi. Mi ha anche insegnato cosa fare a casa per non ricadere." },
            ].map(({ init, cond, text }) => (
              <div key={init} className="p-5 bg-background rounded-2xl border border-border">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-yellow-400 text-sm">★</span>)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 italic">&quot;{text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{init[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{init}</p>
                    <p className="text-xs text-muted-foreground">{cond}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://share.google/jJD2b5LPGadgOOZD1" target="_blank" rel="noopener noreferrer"
              className="text-sm font-semibold text-primary hover:underline">
              Leggi tutte le recensioni su Google →
            </a>
          </div>
        </div>
      </section>

      {/* DIFFERENZIAZIONE */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Perché scegliere me</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-5">
                Non tutti i fisioterapisti<br />lavorano allo stesso modo
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In molti studi entri, ti mettono sotto gli ultrasuoni per 15 minuti,
                poi un massaggio veloce e via. Il paziente dopo arriva già.
                Questo non è fisioterapia — è produzione.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nel mio studio a Pontecorvo funziona diversamente.
                Hai 60 minuti interamente tuoi. Nessun altro paziente in contemporanea.
                Valutazione clinica approfondita, spiegazione di quello che trovo,
                piano di trattamento personalizzato. E se la strategia non funziona, la cambiamo.
              </p>
              <div className="space-y-3">
                {[
                  { icon: "🎯", t: "Trovo la causa, non nascondo il sintomo", d: "Massaggi e antidolorifici mascherano il dolore. Io cerco perché c'è." },
                  { icon: "🔬", t: "Fisioterapia + Osteopatia in uno", d: "Due approcci integrati. Non serve girare tra diversi specialisti." },
                  { icon: "⚡", t: "Tecnologia laser Nd:YAG Zaira", d: "Penetra fino a 5–6 cm. Raggiunge dove altri trattamenti non arrivano." },
                  { icon: "📊", t: "Progressi misurabili a ogni seduta", d: "Se non migliori, cambio strategia. Non ti tengo in fisioterapia all'infinito." },
                  { icon: "📞", t: "Risposta rapida su WhatsApp", d: "Rispondo entro poche ore. Puntuale agli appuntamenti. Rispetto il tuo tempo." },
                ].map(({ icon, t, d }) => (
                  <div key={t} className="flex items-start gap-3 p-3 bg-card rounded-xl border border-border">
                    <span className="text-xl flex-shrink-0">{icon}</span>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <p className="text-2xl font-display font-semibold text-foreground mb-2">
                  &quot;Ho già provato tutto.&quot;
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Questo è quello che mi dicono quasi tutti i pazienti alla prima visita.
                  E capisco la frustrazione — anni di dolore, tanti soldi spesi, nessun risultato duraturo.
                  Ma &quot;ho già provato tutto&quot; significa spesso &quot;ho provato tante cose
                  senza che nessuno capisse davvero cosa stava succedendo&quot;.
                  Parto da lì.
                </p>
              </div>
              <div className="p-5 bg-card rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">🏥</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Formazione d&apos;eccellenza</p>
                    <p className="text-xs text-muted-foreground">Non un corso online — anni di studio universitario</p>
                  </div>
                </div>
                <ul className="space-y-1.5 text-xs text-muted-foreground">
                  <li>→ Laurea Fisioterapia — Sapienza / IRCCS Neuromed Pozzilli</li>
                  <li>→ Master Osteopatia — EOM / Università di Verona</li>
                  <li>→ D.O. in completamento — Escuela Osteopática de Madrid</li>
                  <li>→ Ex fisioterapista staff Frosinone Calcio</li>
                  <li>→ Collaborazione Centro Medico Ruo — Cassino</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Process />
      <FirstVisit />
      <Testimonials />
      <Faq />
      <Location />

      {/* CTA FINALE FORTE */}
      <section className="py-20 sm:py-28 bg-card border-t border-border">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Il dolore non passa aspettando.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Ogni settimana che passa senza trattare il problema, i muscoli si indeboliscono,
            le compensazioni aumentano, il dolore si radica più in profondità.
            La prima visita non ti impegna a nulla — ma può cambiarti la vita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/prenota"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity text-base">
              👉 Prenota ora la prima valutazione <ArrowRight className="h-5 w-5" />
            </Link>
            <a href="tel:+393209631792"
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-xl hover:border-primary/40 transition-colors font-semibold text-base">
              <Phone className="h-5 w-5" /> Chiamami al 320 963 1792
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            O scrivimi su{" "}
            <a href="https://wa.me/393209631792" target="_blank" rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline">WhatsApp</a>
            {" "}— rispondo entro poche ore.
          </p>
        </div>
      </section>

      <Contact />
    </>
  )
}
