"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Stethoscope, Dumbbell, Home, Zap, CircleDot,
  Waves, Magnet, Check, ArrowLeft, ArrowRight,
  Phone, Clock, Info, ChevronLeft, CalendarDays, User,
} from "lucide-react"

const SERVIZI = [
  { n: "Prima visita fisioterapica",  sub: "Valutazione clinica + piano terapeutico", icon: Stethoscope, duration: 60 },
  { n: "Seduta fisioterapica",        sub: "Trattamento individuale",                 icon: Dumbbell,    duration: 60 },
  { n: "Visita domiciliare",          sub: "Trattamento a domicilio",                 icon: Home,        duration: 60 },
  { n: "TECAR terapia",               sub: "Diatermia strumentale",                   icon: Zap,         duration: 60 },
  { n: "Laser terapia",               sub: "Laserterapia Nd:YAG",                     icon: CircleDot,   duration: 60 },
  { n: "Ultrasuoni",                  sub: "Terapia con ultrasuoni",                  icon: Waves,       duration: 60 },
  { n: "Noleggio magnetoterapia",     sub: "Apparecchio per uso domiciliare",         icon: Magnet,      duration: 0,  info: true },
]

function isoDate(y: number, m: number, d: number) {
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`
}

function fmtDateLong(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", {
    weekday: "long", day: "2-digit", month: "long", year: "numeric",
  })
}

function fmtDateShort(iso: string) {
  return new Date(iso).toLocaleDateString("it-IT", { day: "2-digit", month: "short" })
}

const STEP_LABELS = ["Servizio", "Data e ora", "Dati", "Conferma"]

export function BookingClient() {
  const today = new Date()
  const [step,    setStep]    = useState(1)
  const [curServ, setCurServ] = useState(0)
  const [year,    setYear]    = useState(today.getFullYear())
  const [month,   setMonth]   = useState(today.getMonth() + 1)
  const [selDay,  setSelDay]  = useState<string | null>(null)
  const [slots,        setSlots]        = useState<string[]>([])
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [slotsError,   setSlotsError]   = useState("")
  const [selSlot,      setSelSlot]      = useState<string | null>(null)
  const [nome,    setNome]    = useState("")
  const [tel,     setTel]     = useState("")
  const [email,   setEmail]   = useState("")
  const [note,    setNote]    = useState("")
  const [privacy, setPrivacy] = useState(false)
  const [errNome,    setErrNome]    = useState("")
  const [errTel,     setErrTel]     = useState("")
  const [errPrivacy, setErrPrivacy] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitErr,  setSubmitErr]  = useState("")
  const [bookingId,  setBookingId]  = useState("")

  const fetchSlots = useCallback(async (date: string) => {
    setSlotsLoading(true); setSlotsError(""); setSlots([]); setSelSlot(null)
    try {
      const res  = await fetch(`/api/booking/slots?date=${date}&duration=${SERVIZI[curServ].duration}`)
      const data = await res.json()
      if (data.closed) { setSlotsError("Studio chiuso in questa data."); return }
      if (!res.ok)     { setSlotsError(data.error ?? "Errore caricamento orari."); return }
      setSlots(data.slots ?? [])
      if ((data.slots ?? []).length === 0) setSlotsError("Nessun orario disponibile. Prova un'altra data.")
    } catch { setSlotsError("Errore di rete. Riprova.") }
    finally { setSlotsLoading(false) }
  }, [curServ])

  useEffect(() => { if (selDay) fetchSlots(selDay) }, [selDay, fetchSlots])

  function prevMonth() { if (month === 1) { setMonth(12); setYear(y => y-1) } else setMonth(m => m-1); setSelDay(null) }
  function nextMonth() { if (month === 12) { setMonth(1); setYear(y => y+1) } else setMonth(m => m+1); setSelDay(null) }

  const daysInMonth = new Date(year, month, 0).getDate()
  const firstDow    = (new Date(year, month-1, 1).getDay() + 6) % 7
  const monthName   = new Date(year, month-1).toLocaleDateString("it-IT", { month: "long", year: "numeric" })

  async function submitBooking() {
    setSubmitting(true); setSubmitErr("")
    try {
      const serv = SERVIZI[curServ]
      const res  = await fetch("/api/booking", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ service_name: serv.n, service_duration: serv.duration,
          requested_date: selDay, requested_time: selSlot,
          patient_name: nome, patient_phone: tel,
          patient_email: email || undefined, notes: note || undefined }),
      })
      const data = await res.json()
      if (!res.ok) { setSubmitErr(data.error ?? "Errore. Riprova."); return }
      setBookingId(data.booking_id); setStep(5)
    } catch { setSubmitErr("Errore di rete. Riprova.") }
    finally { setSubmitting(false) }
  }

  function validateStep3() {
    let ok = true
    if (!nome.trim()) { setErrNome("Inserisci nome e cognome"); ok = false } else setErrNome("")
    if (!tel.trim())  { setErrTel("Inserisci il numero di telefono"); ok = false } else setErrTel("")
    if (!privacy)     { setErrPrivacy("Devi accettare la privacy"); ok = false } else setErrPrivacy("")
    if (ok) setStep(4)
  }

  return (
    <div className="min-h-screen bg-background pb-20">

      {/* Header */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0a6e68 0%, #1a4db5 100%)" }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative px-5 pt-5 pb-8 max-w-xl mx-auto">
          <div className="flex items-center justify-between mb-5">
            <Link href="/" className="inline-flex items-center gap-1.5 text-white/80 hover:text-white transition-colors text-sm font-semibold">
              <ChevronLeft className="h-4 w-4" /> Home
            </Link>
            <Link href="/">
              <Image src="/images/progetto-20senza-20titolo.png" alt="Marco Turchetta Fisioterapista Pontecorvo" width={320} height={100} className="h-20 w-auto brightness-0 invert drop-shadow-lg" />
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1" style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}>Prenota una visita</h1>
          <p className="text-sm text-white/85" style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>Marco Turchetta · Fisioterapista e Osteopata · Pontecorvo (FR)</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 text-xs font-semibold text-white">
              <Clock className="h-3.5 w-3.5" /> Disponibilità in tempo reale
            </div>
            <a href="tel:+393209631792" className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 text-xs font-semibold text-white hover:bg-white/30 transition-colors">
              <Phone className="h-3.5 w-3.5" /> 320 963 1792
            </a>
          </div>
        </div>
      </div>

      {/* Avviso conferma */}
      <div className="px-5 pt-4 max-w-xl mx-auto">
        <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <Info className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-relaxed">
            Scegli data e orario preferiti. Marco <strong>confermerà via SMS o WhatsApp</strong> entro poche ore.
            L'appuntamento è valido <strong>solo dopo la conferma</strong>.
          </p>
        </div>
      </div>

      {/* Step bar + mini riepilogo */}
      {step < 5 && (
        <div className="px-5 max-w-xl mx-auto mt-4">
          <div className="flex border-b border-border">
            {STEP_LABELS.map((l, i) => (
              <div key={l} className={`flex-1 text-center pb-2.5 text-xs font-bold border-b-2 transition-colors ${
                step > i+1 ? "text-green-600 border-green-500" : step === i+1 ? "text-primary border-primary" : "text-muted-foreground/40 border-transparent"
              }`}>
                {step > i+1 ? "✓" : `${i+1}·`} {l}
              </div>
            ))}
          </div>
          {step > 1 && (
            <div className="flex flex-wrap gap-2 mt-3">
              <div className="flex items-center gap-1.5 bg-primary/8 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold text-primary">
                <Stethoscope className="h-3 w-3" />
                <span className="truncate max-w-[140px]">{SERVIZI[curServ].n}</span>
              </div>
              {step > 2 && selDay && (
                <div className="flex items-center gap-1.5 bg-primary/8 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold text-primary">
                  <CalendarDays className="h-3 w-3" />
                  {fmtDateShort(selDay)}{selSlot ? ` · ${selSlot}` : ""}
                </div>
              )}
              {step > 3 && nome && (
                <div className="flex items-center gap-1.5 bg-primary/8 border border-primary/20 rounded-full px-3 py-1 text-xs font-semibold text-primary">
                  <User className="h-3 w-3" />
                  {nome}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <div className="px-5 py-5 max-w-xl mx-auto">

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <div className="bg-card rounded-xl border border-border p-4 mb-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3">Scegli il tipo di visita</p>
              <div className="space-y-2">
                {SERVIZI.map((s, i) => {
                  const Icon = s.icon
                  const sel  = curServ === i && !s.info
                  return (
                    <div key={i} onClick={() => !s.info && setCurServ(i)}
                      className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all ${
                        s.info ? "border-border opacity-70 cursor-default"
                        : sel  ? "border-primary bg-primary/5 cursor-pointer"
                        : "border-border hover:border-primary/40 cursor-pointer"
                      }`}>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${sel ? "bg-primary/15" : "bg-muted"}`}>
                        <Icon className={`h-4 w-4 ${sel ? "text-primary" : "text-muted-foreground"}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-semibold ${sel ? "text-primary" : "text-foreground"}`}>{s.n}</p>
                        <p className="text-xs text-muted-foreground">{s.sub}</p>
                      </div>
                      {sel  && <Check className="h-4 w-4 text-primary flex-shrink-0" />}
                      {s.info && <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-2.5 py-1 border border-primary/20">Info</span>}
                    </div>
                  )
                })}
              </div>
            </div>
            {SERVIZI[curServ].info ? (
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <a href="https://wa.me/393209631792?text=Ciao Marco, vorrei informazioni sul noleggio della magnetoterapia." target="_blank" rel="noopener noreferrer">Chiedi info su WhatsApp</a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+393209631792" className="flex items-center justify-center gap-2"><Phone className="h-4 w-4" /> Chiama 320 963 1792</a>
                </Button>
              </div>
            ) : (
              <Button onClick={() => setStep(2)} className="w-full">Continua <ArrowRight className="h-4 w-4 ml-2" /></Button>
            )}
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <div className="bg-card rounded-xl border border-border p-4 mb-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-bold text-foreground capitalize">{monthName}</p>
                <div className="flex gap-1.5">
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={prevMonth}>‹</Button>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={nextMonth}>›</Button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-1">
                {["Lu","Ma","Me","Gi","Ve","Sa","Do"].map(d => (
                  <div key={d} className="text-center text-[11px] font-bold text-muted-foreground py-1">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDow }).map((_,i) => <div key={`e${i}`} />)}
                {Array.from({ length: daysInMonth }, (_,i) => i+1).map(d => {
                  const iso  = isoDate(year, month, d)
                  const dow  = (firstDow + d - 1) % 7
                  const past = new Date(iso) < new Date(today.toDateString())
                  const ok   = !past && dow < 5
                  const sel  = selDay === iso
                  return (
                    <div key={d} onClick={() => ok && setSelDay(iso)}
                      className={`text-center py-2 rounded-lg text-sm font-semibold transition-all ${
                        sel ? "bg-primary text-primary-foreground shadow-sm"
                        : ok ? "text-foreground hover:bg-primary/10 cursor-pointer"
                        : "text-muted-foreground/25"
                      }`}>
                      {d}
                    </div>
                  )
                })}
              </div>
            </div>

            {!selDay && <p className="text-xs text-center text-muted-foreground mb-4">Seleziona una data per vedere gli orari disponibili</p>}

            {selDay && (
              <div className="bg-card rounded-xl border border-border p-4 mb-4">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-3 capitalize">
                  Orario preferito — {fmtDateLong(selDay)}
                </p>
                {slotsLoading && (
                  <div className="flex items-center justify-center gap-2 py-6 text-sm text-muted-foreground">
                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" /> Caricamento…
                  </div>
                )}
                {slotsError && <p className="text-sm text-destructive font-semibold py-2">⚠ {slotsError}</p>}
                {!slotsLoading && !slotsError && (
                  <div className="grid grid-cols-4 gap-2">
                    {slots.map(t => (
                      <div key={t} onClick={() => setSelSlot(t)}
                        className={`py-2.5 px-1 border-2 rounded-xl text-center text-sm font-bold cursor-pointer transition-all ${
                          selSlot === t ? "border-primary bg-primary text-primary-foreground shadow-sm" : "border-border hover:border-primary/60 hover:bg-primary/5"
                        }`}>
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex gap-2">
              <Button onClick={() => setStep(1)} variant="outline" className="flex-1"><ArrowLeft className="h-4 w-4 mr-1.5" /> Indietro</Button>
              <Button onClick={() => selSlot && setStep(3)} className="flex-1" disabled={!selSlot}>Continua <ArrowRight className="h-4 w-4 ml-1.5" /></Button>
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <div className="bg-card rounded-xl border border-border p-4 mb-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4">I tuoi dati</p>
              <div className="space-y-3">
                <div>
                  <Input type="text" placeholder="Nome e cognome *" value={nome}
                    onChange={e => { setNome(e.target.value); setErrNome("") }}
                    className={errNome ? "border-destructive" : ""} />
                  {errNome && <p className="text-xs text-destructive mt-1">{errNome}</p>}
                </div>
                <div>
                  <Input type="tel" placeholder="Numero di telefono *" value={tel}
                    onChange={e => { setTel(e.target.value); setErrTel("") }}
                    className={errTel ? "border-destructive" : ""} />
                  {errTel && <p className="text-xs text-destructive mt-1">{errTel}</p>}
                </div>
                <Input type="email" placeholder="Email (facoltativo)" value={email} onChange={e => setEmail(e.target.value)} />
                <Textarea placeholder="Note per Marco — patologia, urgenza, domande…" value={note} onChange={e => setNote(e.target.value)} rows={3} />
                <div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="privacy" checked={privacy} onCheckedChange={c => { setPrivacy(c as boolean); setErrPrivacy("") }} className="mt-1" />
                    <label htmlFor="privacy" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
                      Acconsento al trattamento dei dati personali ai sensi del GDPR (Art. 13 Reg. UE 2016/679) *
                    </label>
                  </div>
                  {errPrivacy && <p className="text-xs text-destructive mt-1.5">{errPrivacy}</p>}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={() => setStep(2)} variant="outline" className="flex-1"><ArrowLeft className="h-4 w-4 mr-1.5" /> Indietro</Button>
              <Button onClick={validateStep3} className="flex-1">Continua <ArrowRight className="h-4 w-4 ml-1.5" /></Button>
            </div>
          </>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <>
            <div className="bg-primary/5 border-2 border-primary/25 rounded-xl p-4 mb-4">
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Riepilogo richiesta</p>
              {[["Servizio", SERVIZI[curServ].n], ["Data", selDay ? fmtDateLong(selDay) : ""], ["Ora", selSlot ?? ""],
                ["Studio", "Via XXIV Maggio 6, Pontecorvo (FR)"], ["Paziente", nome], ["Telefono", tel]
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-start gap-4 py-2.5 border-b border-primary/10 last:border-0">
                  <span className="text-xs text-muted-foreground shrink-0">{label}</span>
                  <span className="text-sm font-semibold text-foreground text-right capitalize">{value}</span>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="font-bold text-amber-900 mb-2 flex items-center gap-1.5 text-sm"><Info className="h-4 w-4" /> Prima di inviare</p>
              <ul className="space-y-1.5 text-xs text-amber-800 leading-relaxed">
                <li className="flex gap-2"><span className="font-bold flex-shrink-0">1.</span>Questa è una <strong>richiesta</strong>, non una prenotazione definitiva.</li>
                <li className="flex gap-2"><span className="font-bold flex-shrink-0">2.</span>Marco ti <strong>confermerà via SMS o WhatsApp</strong> entro poche ore.</li>
                <li className="flex gap-2"><span className="font-bold flex-shrink-0">3.</span>L'appuntamento è valido <strong>solo dopo la conferma</strong>.</li>
              </ul>
            </div>
            {submitErr && (
              <div className="text-sm text-destructive font-semibold mb-3 p-3 bg-destructive/10 rounded-xl border border-destructive/20">⚠ {submitErr}</div>
            )}
            <div className="flex gap-2">
              <Button onClick={() => setStep(3)} variant="outline" className="flex-1"><ArrowLeft className="h-4 w-4 mr-1.5" /> Indietro</Button>
              <Button onClick={submitBooking} disabled={submitting} className="flex-1">
                {submitting ? <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />Invio…</> : <>Invia richiesta <ArrowRight className="h-4 w-4 ml-1.5" /></>}
              </Button>
            </div>
          </>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Richiesta inviata!</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Marco ha ricevuto la tua richiesta.<br />
              <strong className="text-foreground">Ti contatterà entro poche ore</strong> per confermare via SMS o WhatsApp.
            </p>
            <div className="bg-primary/5 border border-primary/25 rounded-xl p-4 text-left mb-4">
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Riepilogo</p>
              <p className="text-sm text-foreground leading-relaxed">
                <strong>{SERVIZI[curServ].n}</strong><br />
                {selDay && fmtDateLong(selDay)} · ore {selSlot}<br />
                Via XXIV Maggio 6 · Pontecorvo (FR)<br />
                {nome} · {tel}
              </p>
              {bookingId && <p className="text-xs text-primary/50 mt-2">Ref. #{bookingId.slice(0,8).toUpperCase()}</p>}
            </div>
            <div className="bg-card border border-border rounded-xl p-4 mb-6 text-left">
              <p className="text-sm font-bold text-foreground mb-3">Assistenza</p>
              <div className="space-y-2">
                <a href="https://wa.me/393209631792" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-green-600" />
                  </span>
                  WhatsApp — risposta rapida
                </a>
                <a href="tel:+393209631792" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                  </span>
                  320 963 1792
                </a>
              </div>
            </div>
            <Button asChild className="w-full"><Link href="/">Torna alla home</Link></Button>
          </div>
        )}

      </div>

      {/* Footer fisso WhatsApp */}
      {step < 5 && (
        <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur border-t border-border px-5 py-3 z-50">
          <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">Preferisci scrivere direttamente?</p>
            <a href="https://wa.me/393209631792?text=Ciao Marco, vorrei prenotare una visita."
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#1ebe5d] transition-colors flex-shrink-0">
              <Phone className="h-3.5 w-3.5" /> WhatsApp
            </a>
          </div>
        </div>
      )}

    </div>
  )
}
