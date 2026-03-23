import { GraduationCap, Award, Shield, Star, Trophy } from "lucide-react"

const trustItems = [
  { icon: GraduationCap, label: "Laurea in Fisioterapia", sub: "Sapienza / IRCCS Neuromed", href: null },
  { icon: Trophy, label: "Frosinone Calcio", sub: "Ex fisioterapista staff medico", href: null },
  { icon: Shield, label: "Albo TSRM-PSTRP", sub: "Professionista sanitario abilitato", href: null },
  { icon: Star, label: "5 stelle su Google", sub: "Recensioni verificate dai pazienti", href: "https://share.google/jJD2b5LPGadgOOZD1" },
]

export function TrustBar() {
  return (
    <section className="bg-background py-8 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => {
            const inner = (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm leading-tight">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                </div>
              </div>
            )
            return item.href ? (
              <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                {inner}
              </a>
            ) : (
              <div key={i}>{inner}</div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
