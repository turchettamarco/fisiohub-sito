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
  Phone, Clock, Info,
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

const STEP_LABELS = ["Servizio", "Data e ora", "Dati", "Conferma"]

export function BookingClient() {
  const today = new Date()
  const [step,    setStep]    = useState(1)
  const [curServ, setCurServ] = useState(0)

  const [year,   setYear]   = useState(today.getFullYear())
  const [month,  setMonth]  = useState(today.getMonth() + 1)
  const [selDay, setSelDay] = useState<string | null>(null)

  const [slots,        setSlots]        = useState<string[]>([])
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [slotsError,   setSlotsError]   = useState("")
  const [selSlot,      setSelSlot]      = useState<string | null>(null)

  const [nome,    setNome]    = useState("")
  const [tel,     setTel]     = useState("")
  const [email,   setEmail]   = useState("")
  const [note,    setNote]    = useState("")
  const [privacy, setPrivacy] = useState(false)

  const [submitting, setSubmitting] = useState(false)
  const [submitErr,  setSubmitErr]  = useState("")
  const [bookingId,  setBookingId]  = useState("")

  const fetchSlots = useCallback(async (date: string) => {
    setSlotsLoading(true)
    setSlotsError("")
    setSlots([])
    setSelSlot(null)
    try {
      const duration = SERVIZI[curServ].duration
      const res  = await fetch(`/api/booking/slots?date=${date}&duration=${duration}`)
      const data = await res.json()
      if (data.closed)  { setSlotsError("Studio chiuso in questa data."); return }
      if (!res.ok)      { setSlotsError(data.error ?? "Errore nel caricamento degli orari."); return }
      setSlots(data.slots ?? [])
      if ((data.slots ?? []).length === 0) setSlotsError("Nessun orario disponibile in questa data.")
    } catch {
      setSlotsError("Errore di rete. Riprova.")
    } finally {
      setSlotsLoading(false)
    }
  }, [curServ])

  useEffect(() => {
    if (selDay) fetchSlots(selDay)
  }, [selDay, fetchSlots])

  function prevMonth() {
    if (month === 1) { setMonth(12); setYear(y => y - 1) }
    else setMonth(m => m - 1)
    setSelDay(null)
  }
  function nextMonth() {
    if (month === 12) { setMonth(1); setYear(y => y + 1) }
    else setMonth(m => m + 1)
    setSelDay(null)
  }

  const daysInMonth = new Date(year, month, 0).getDate()
  const firstDow    = (new Date(year, month - 1, 1).getDay() + 6) % 7
  const monthName   = new Date(year, month - 1).toLocaleDateString("it-IT", { month: "long", year: "numeric" })

  async function submitBooking() {
    setSubmitting(true)
    setSubmitErr("")
    try {
      const serv = SERVIZI[curServ]
      const res  = await fetch("/api/booking", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_name:     serv.n,
          service_duration: serv.duration,
          requested_date:   selDay,
          requested_time:   selSlot,
          patient_name:     nome,
          patient_phone:    tel,
          patient_email:    email || undefined,
          notes:            note  || undefined,
        }),
      })
      const data = await res.json()
      if (!res.ok) { setSubmitErr(data.error ?? "Errore. Riprova."); return }
      setBookingId(data.booking_id)
      setStep(5)
    } catch {
      setSubmitErr("Errore di rete. Riprova.")
    } finally {
      setSubmitting(false)
    }
  }

  function validateStep3() {
    if (!nome.trim() || !tel.trim() || !privacy) {
      alert("Compila nome, telefono e accetta la privacy per continuare.")
      return
    }
    setStep(4)
  }

  return (
    <div className="min-h-screen bg-background">

      {/* ── Header teal gradient ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a6e68 0%, #1a4db5 100%)" }}
      >
        {/* dot pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* dark vignette overlay for readability */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative px-6 pt-8 pb-10 max-w-xl mx-auto">
          <Link href="/" className="inline-block mb-5">
            <Image
              src="/images/progetto-20senza-20titolo.png"
              alt="Marco Turchetta Fisioterapista Pontecorvo"
              width={320} height={100}
              className="h-20 w-auto brightness-0 invert drop-shadow-lg"
            />
          </Link>
          <h1
            className="text-2xl sm:text-3xl font-bold text-white mb-2"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.4)" }}
          >
            Prenota una visita
          </h1>
          <p
            className="text-sm text-white/90"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}
          >
            Marco Turchetta · Fisioterapista e Osteopata · Pontecorvo (FR)
          </p>

          {/* Info bar */}
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 text-xs font-semibold text-white">
              <Clock className="h-3.5 w-3.5" />
              Disponibilità in tempo reale
            </div>

          </div>
        </div>
      </div>

      {/* ── Avviso conferma ── */}
      <div className="px-6 pt-5 max-w-xl mx-auto">
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <Info className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Come funziona:</strong> scegli data e orario preferiti.
            La tua richiesta verrà valutata e <strong>confermata da Marco</strong> via SMS o WhatsApp
            entro poche ore. L'appuntamento è confermato solo dopo il riscontro dello studio.
          </p>
        </div>
      </div>

      {/* ── Step bar ── */}
      {step < 5 && (
        <div className="flex border-b border-border mx-6 mt-5 max-w-xl mx-auto">
          {STEP_LABELS.map((l, i) => (
            <div key={l} className={`flex-1 text-center pb-3 text-xs font-bold border-b-2 transition-colors ${
              step > i + 1  ? "text-green-600 border-green-600"
              : step === i + 1 ? "text-primary border-primary"
              : "text-muted-foreground border-transparent"
            }`}>
              {i + 1} · {l}
            </div>
          ))}
        </div>
      )}

      <div className="px-6 py-6 max-w-xl mx-auto">

        {/* ── STEP 1: Servizio ── */}
        {step === 1 && (
          <>
            <div className="bg-card rounded-xl border border-border p-5 mb-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4">
                Scegli il tipo di visita
              </p>
              <div className="space-y-2">
                {SERVIZI.map((s, i) => {
                  const Icon = s.icon
                  const isSelected = curServ === i && !s.info
                  return (
                    <div
                      key={i}
                      onClick={() => !s.info && setCurServ(i)}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                        s.info
                          ? "opacity-80 cursor-default border-border"
                          : isSelected
                          ? "border-primary bg-primary/5 cursor-pointer"
                          : "border-border hover:border-primary/50 cursor-pointer"
                      }`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-foreground">{s.n}</p>
                        <p className="text-xs text-muted-foreground">{s.sub}</p>
                      </div>
                      {s.info && (
                        <span className="text-xs font-bold text-primary bg-primary/10 rounded-full px-3 py-1 border border-primary/20 whitespace-nowrap">
                          Info
                        </span>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            {SERVIZI[curServ].info ? (
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <a href="https://wa.me/393209631792?text=Ciao Marco, vorrei informazioni sul noleggio della magnetoterapia." target="_blank" rel="noopener noreferrer">
                    Chiedi info su WhatsApp
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href="tel:+393209631792" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" /> Chiama 320 963 1792
                  </a>
                </Button>
              </div>
            ) : (
              <Button onClick={() => setStep(2)} className="w-full">
                Continua <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </>
        )}

        {/* ── STEP 2: Data e ora ── */}
        {step === 2 && (
          <>
            {/* Promemoria orari preferiti */}
            <div className="bg-muted/50 rounded-xl border border-border p-4 mb-4 text-sm text-muted-foreground leading-relaxed">
              Seleziona la data e l'orario che preferisci. Marco verificherà la disponibilità reale
              e ti confermerà l'appuntamento via SMS o WhatsApp.
            </div>

            <div className="bg-card rounded-xl border border-border p-5 mb-4">
              <div className="flex justify-between items-center mb-4">
                <p className="text-sm font-bold text-foreground capitalize">{monthName}</p>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={prevMonth}>‹</Button>
                  <Button variant="outline" size="icon" className="h-8 w-8" onClick={nextMonth}>›</Button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Lu","Ma","Me","Gi","Ve","Sa","Do"].map(d => (
                  <div key={d} className="text-center text-xs font-bold text-muted-foreground py-2">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDow }).map((_, i) => <div key={`e${i}`} />)}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(d => {
                  const iso  = isoDate(year, month, d)
                  const dow  = (firstDow + d - 1) % 7
                  const past = new Date(iso) < new Date(today.toDateString())
                  const ok   = !past && dow < 5
                  const sel  = selDay === iso
                  return (
                    <div
                      key={d}
                      onClick={() => ok && setSelDay(iso)}
                      className={`text-center py-2 rounded-lg text-sm font-semibold transition-all ${
                        sel ? "bg-primary text-primary-foreground"
                        : ok ? "text-foreground hover:bg-muted cursor-pointer"
                        : "text-muted-foreground/30"
                      }`}
                    >
                      {d}
                    </div>
                  )
                })}
              </div>
            </div>

            {selDay && (
              <div className="bg-card rounded-xl border border-border p-5 mb-4">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4 capitalize">
                  Orario preferito — {fmtDateLong(selDay)}
                </p>
                {slotsLoading && <p className="text-sm text-muted-foreground text-center py-4">Caricamento orari…</p>}
                {slotsError   && <p className="text-sm text-destructive font-semibold py-2">⚠ {slotsError}</p>}
                {!slotsLoading && !slotsError && (
                  <div className="grid grid-cols-4 gap-2">
                    {slots.map(t => (
                      <div
                        key={t}
                        onClick={() => setSelSlot(t)}
                        className={`py-2 px-1 border-2 rounded-lg text-center text-sm font-bold cursor-pointer transition-all ${
                          selSlot === t
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary"
                        }`}
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            <Button onClick={() => setStep(1)} variant="outline" className="w-full mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" /> Indietro
            </Button>
            <Button onClick={() => selSlot && setStep(3)} className="w-full" disabled={!selSlot}>
              Continua <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </>
        )}

        {/* ── STEP 3: Dati ── */}
        {step === 3 && (
          <>
            <div className="bg-card rounded-xl border border-border p-5 mb-4">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4">I tuoi dati</p>
              <div className="space-y-3">
                <Input type="text"  placeholder="Nome e cognome *"        value={nome}  onChange={e => setNome(e.target.value)} />
                <Input type="tel"   placeholder="Numero di telefono *"    value={tel}   onChange={e => setTel(e.target.value)} />
                <Input type="email" placeholder="Email (facoltativo)"     value={email} onChange={e => setEmail(e.target.value)} />
                <Textarea placeholder="Note per Marco — opzionale"        value={note}  onChange={e => setNote(e.target.value)} rows={3} />
                <div className="flex items-start gap-3">
                  <Checkbox id="privacy" checked={privacy} onCheckedChange={c => setPrivacy(c as boolean)} className="mt-1" />
                  <label htmlFor="privacy" className="text-xs text-muted-foreground cursor-pointer">
                    Acconsento al trattamento dei dati personali ai sensi del GDPR (Art. 13 Reg. UE 2016/679) *
                  </label>
                </div>
              </div>
            </div>
            <Button onClick={() => setStep(2)} variant="outline" className="w-full mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" /> Indietro
            </Button>
            <Button onClick={validateStep3} className="w-full">
              Continua <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </>
        )}

        {/* ── STEP 4: Conferma ── */}
        {step === 4 && (
          <>
            <div className="bg-primary/5 border-2 border-primary/30 rounded-xl p-5 mb-4">
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-4">
                Riepilogo richiesta
              </p>
              <div className="space-y-0">
                {[
                  ["Servizio",  SERVIZI[curServ].n],
                  ["Data",      selDay ? fmtDateLong(selDay) : ""],
                  ["Ora",       selSlot ?? ""],
                  ["Studio",    "Via Galileo Galilei 5, Pontecorvo (FR)"],
                  ["Paziente",  nome],
                  ["Telefono",  tel],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between items-start gap-4 py-2.5 border-b border-primary/10 last:border-0"
                  >
                    <span className="text-sm text-muted-foreground shrink-0">{label}</span>
                    <span className="text-sm font-bold text-foreground text-right capitalize">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Box come funziona */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-4">
              <p className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                <Info className="h-4 w-4" /> Prima di inviare
              </p>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">1.</span>
                  Questa è una <strong>richiesta di appuntamento</strong>, non una prenotazione definitiva.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">2.</span>
                  Marco verificherà la disponibilità e ti <strong>confermerà via SMS o WhatsApp</strong> entro poche ore.
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold flex-shrink-0">3.</span>
                  L'appuntamento è valido <strong>solo dopo la conferma</strong> da parte dello studio.
                </li>
              </ul>
            </div>

            {submitErr && (
              <div className="text-sm text-destructive font-semibold mb-3 p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                ⚠ {submitErr}
              </div>
            )}
            <Button onClick={() => setStep(3)} variant="outline" className="w-full mb-2">
              <ArrowLeft className="h-4 w-4 mr-2" /> Indietro
            </Button>
            <Button onClick={submitBooking} disabled={submitting} className="w-full">
              {submitting ? "Invio in corso…" : "Invia richiesta"}
            </Button>
          </>
        )}

        {/* ── STEP 5: Successo ── */}
        {step === 5 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Richiesta inviata!</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Marco ha ricevuto la tua richiesta.<br />
              <strong className="text-foreground">Ti contatterà entro poche ore</strong> per confermare l'appuntamento via SMS o WhatsApp.
            </p>

            <div className="bg-primary/5 border border-primary/30 rounded-xl p-5 text-left mb-4">
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-3">Riepilogo richiesta</p>
              <p className="text-sm text-foreground leading-relaxed">
                <strong>{SERVIZI[curServ].n}</strong><br />
                {selDay && fmtDateLong(selDay)} · ore {selSlot}<br />
                Studio Marco Turchetta · Via Galileo Galilei 5, Pontecorvo<br />
                {nome} · {tel}
              </p>
              {bookingId && (
                <p className="text-xs text-primary/60 mt-2">Ref. #{bookingId.slice(0, 8).toUpperCase()}</p>
              )}
            </div>

            {/* Assistenza */}
            <div className="bg-card border border-border rounded-xl p-4 mb-6 text-left">
              <p className="text-sm font-bold text-foreground mb-3">Hai bisogno di assistenza?</p>
              <div className="space-y-2">
                <a
                  href="https://wa.me/393209631792"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-green-50 border border-green-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-green-600" />
                  </span>
                  WhatsApp — risposta rapida
                </a>
                <a
                  href="tel:+393209631792"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                  </span>
                  320 963 1792
                </a>
              </div>
            </div>

            <Button asChild className="w-full">
              <Link href="/">Torna alla home</Link>
            </Button>
          </div>
        )}

      </div>
    </div>
  )
}
