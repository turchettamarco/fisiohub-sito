import Image from "next/image"
import { MapPin, Car, Clock, Phone } from "lucide-react"

const infos = [
  {
    icon: MapPin,
    title: "Dove siamo",
    content: "Via Galileo Galilei 5, Pontecorvo (FR)\npresso Studi Galileo",
    highlight: "Studi Galileo",
  },
  {
    icon: Car,
    title: "Parcheggio",
    content: "Parcheggio libero nelle immediate vicinanze dello studio. Facilmente raggiungibile anche dai comuni limitrofi (Cassino, Frosinone, Sora).",
  },
  {
    icon: Clock,
    title: "Orari e prenotazioni",
    content: "Su appuntamento, dal lunedì al sabato. Prenota online in pochi clic o chiamami direttamente.",
  },
  {
    icon: Phone,
    title: "Contatto rapido",
    content: "320 963 1792\nturchettamarco@gmail.com",
  },
]

export function Location() {
  return (
    <section id="studio" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            Lo Studio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground leading-tight">
            Dove trovarmi
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Uno spazio professionale, riservato e attrezzato a Pontecorvo —
            al centro del territorio tra Cassino, Frosinone e Sora.
          </p>
        </div>

        {/* Studio photos */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/img-7468.jpeg"
              alt="Studio di fisioterapia Marco Turchetta — Pontecorvo"
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/img-8594.jpeg"
              alt="Lettino professionale per trattamenti di fisioterapia e osteopatia — Pontecorvo"
              fill
              className="object-cover hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Info cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {infos.map((info, i) => (
              <div key={i} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <info.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{info.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed whitespace-pre-line">
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1500!2d13.669597!3d41.459731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDI3JzM1LjAiTiAxM8KwNDAnMTAuNSJF!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Marco Turchetta — Via Galileo Galilei 5, Pontecorvo (FR)"
              className="absolute inset-0"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
