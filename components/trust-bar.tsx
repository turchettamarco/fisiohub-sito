import { GraduationCap, Award, Shield, Star } from "lucide-react"

const trustItems = [
  {
    icon: GraduationCap,
    label: "Laurea in Fisioterapia",
    sub: "Sapienza Università di Roma",
  },
  {
    icon: Award,
    label: "Master in Osteopatia",
    sub: "EOM – Univ. di Verona",
  },
  {
    icon: Shield,
    label: "Albo TSRM-PSTRP",
    sub: "Professionista sanitario abilitato",
  },
  {
    icon: Star,
    label: "5 stelle su Google",
    sub: "Recensioni verificate dai pazienti",
  },
]

export function TrustBar() {
  return (
    <section className="bg-background py-8 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm leading-tight">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
