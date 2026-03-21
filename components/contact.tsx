"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, CalendarDays, Clock } from "lucide-react"

export function Contact() {
  return (
    <section
      id="contatti"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0b2d2a 0%, #0f3d37 50%, #0d3530 100%)" }}
    >
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">

          <p className="text-sm font-medium uppercase tracking-wider mb-4" style={{ color: "#5eead4" }}>
            Inizia oggi
          </p>

          <h2
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ color: "white" }}
          >
            Il primo passo
            è la valutazione.
          </h2>

          <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
            Nella prima seduta analizzo il tuo problema, ti spiego cosa trovo
            e ti propongo un percorso. Non sei obbligato a niente: decidi tu
            se continuare.
          </p>

          {/* Time note */}
          <div
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ background: "rgba(94,234,212,0.1)", color: "rgba(255,255,255,0.6)" }}
          >
            <Clock className="h-4 w-4" style={{ color: "#5eead4" }} />
            Prima valutazione: circa 60 minuti
          </div>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="font-semibold text-base"
              style={{ background: "#5eead4", color: "#0b2d2a" }}
            >
              <Link href="/prenota" className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5" />
                Prenota Online
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base"
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "white",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <a href="tel:+393209631792" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                320 963 1792
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-base"
              style={{
                borderColor: "rgba(255,255,255,0.25)",
                color: "white",
                background: "rgba(255,255,255,0.06)",
              }}
            >
              <a
                href="https://wa.me/393209631792?text=Ciao%20Marco%2C%20vorrei%20prenotare%20una%20valutazione."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Email */}
          <div className="mt-7">
            <a
              href="mailto:turchettamarco@gmail.com"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:opacity-80"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <Mail className="h-4 w-4" />
              turchettamarco@gmail.com
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
