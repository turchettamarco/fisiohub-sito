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
  Waves, Magnet, Check, ArrowLeft, ArrowRight, Mail
} from "lucide-react"

const SERVIZI = [
  { n: "Prima visita fisioterapica", p: "Gratuita", sub: "Valutazione + piano terapeutico - 60 min", icon: Stethoscope, duration: 60, free: true },
  { n: "Seduta fisioterapica",        p: "€ 40",     sub: "Trattamento individuale - 60 min",        icon: Dumbbell,    duration: 60 },
  { n: "Visita domiciliare",          p: "€ 45",     sub: "Trattamento a domicilio - 60 min",        icon: Home,        duration: 60 },
  { n: "TECAR terapia",               p: "€ 20",     sub: "Diatermia strumentale - 60 min",          icon: Zap,         duration: 60 },
  { n: "Laser terapia",               p: "€ 20",     sub: "Terapia laser - 60 min",                  icon: CircleDot,   duration: 60 },
  { n: "Ultrasuoni",                  p: "€ 20",     sub: "Terapia con ultrasuoni - 60 min",         icon: Waves,       duration: 60 },
  { n: "Noleggio magnetoterapia",     p: null,        sub: "Apparecchio a domicilio - vari periodi",  icon: Magnet,      duration: 0,  info: true },
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

export default function BookingPage() {
  const today = new Date()
  const [step,     setStep]     = useState(1)
  const [curServ,  setCurServ]  = useState(0)

  // Calendario
  const [year,   setYear]   = useState(today.getFullYear())
  const [month,  setMonth]  = useState(today.getMonth() + 1)
  const [selDay, setSelDay] = useState<string | null>(null)

  // Slot
  const [slots,        setSlots]        = useState<string[]>([])
  const [slotsLoading, setSlotsLoading] = useState(false)
  const [slotsError,   setSlotsError]   = useState("")
  const [selSlot,      setSelSlot]      = useState<string | null>(null)

  // Form
  const [nome,    setNome]    = useState("")
  const [tel,     setTel]     = useState("")
  const [email,   setEmail]   = useState("")
  const [note,    setNote]    = useState("")
  const [privacy, setPrivacy] = useState(false)

  // Submit
  const [submitting, setSubmitting] = useState(false)
  const [submitErr,  setSubmitErr]  = useState("")
  const [bookingId,  setBookingId]  = useState("")

  // ── Fetch slot dall'API ──────────────────────────────────────────────────
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

  // ── Navigazione mese ─────────────────────────────────────────────────────
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
  const firstDow    = (new Date(year, month - 1, 1).getDay() + 6) % 7 // 0=Lun
  const monthName   = new Date(year, month - 1).toLocaleDateString("it-IT", { month: "long", year: "numeric" })

  // ── Submit ────────────────────────────────────────────────────────────────
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
      {/* Header */}
      <div className="bg-foreground px-6 py-7">
        <Link href="/" className="inline-block mb-4">
          <Image
            src="/images/progetto-20senza-20titolo.png"
            alt="Logo Marco Turchetta Fisioterapista"
            width={180} height={60}
            className="h-12 w-auto brightness-0 invert"
          />
        </Link>
        <div className="inline-flex items-center gap-2 bg-background/10 border border-background/20 rounded-full px-3 py-1 text-xs font-semibold text-background mb-3">
          <span className="w-2 h-2 rounded-full bg-green-400" />
          Disponibilità in tempo reale
        </div>
        <h1 className="text-2xl font-bold text-background">Prenota una visita</h1>
        <p className="text-sm text-background/70 mt-1">Marco Turchetta - Fisioterapista e Osteopata - Pontecorvo (FR)</p>
      </div>

      {/* Step bar */}
      {step < 5 && (
        <div className="flex border-b border-border">
          {STEP_LABELS.map((l, i) => (
            <div key={l} className={`flex-1 text-center py-3 text-xs font-bold border-b-2 transition-colors ${
              step > i + 1 ? "text-green-600 border-green-600"
              : step === i + 1 ? "text-primary border-primary"
              : "text-muted-foreground border-transparent"
            }`}>
              {i + 1} - {l}
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
                    <div key={i} onClick={() => !s.info && setCurServ(i)}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 transition-all ${
                        s.info ? "opacity-80 cursor-default border-border"
                        : isSelected ? "border-primary bg-primary/5 cursor-pointer"
                        : "border-border hover:border-primary/50 cursor-pointer"
                      }`}>
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-foreground">{s.n}</p>
                        <p className="text-xs text-muted-foreground">{s.sub}</p>
                      </div>
                      {s.free && <span className="text-xs font-bold text-green-600 bg-green-50 rounded-full px-3 py-1 border border-green-200 whitespace-nowrap">Gratuita</span>}
                      {s.info && <span className="text-xs font-bold text-purple-600 bg-purple-50 rounded-full px-3 py-1 border border-purple-200 whitespace-nowrap">Richiedi info</span>}
                      {!s.free && !s.info && <span className="text-sm font-bold text-primary whitespace-nowrap">{s.p}</span>}
                    </div>
                  )
                })}
              </div>
            </div>
            {SERVIZI[curServ].info ? (
              <Button asChild className="w-full" style={{ backgroundColor: "#7c3aed" }}>
                <a href="mailto:turchettamarco@gmail.com" className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" /> Contattaci per informazioni
                </a>
              </Button>
            ) : (
              <Button onClick={() => setStep(2)} className="w-full">
                Continua <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </>
        )}

        {/* ── STEP 2: Data e ora (calendario dinamico) ── */}
        {step === 2 && (
          <>
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
                    <div key={d} onClick={() => ok && setSelDay(iso)}
                      className={`text-center py-2 rounded-lg text-sm font-semibold transition-all ${
                        sel ? "bg-primary text-primary-foreground"
                        : ok ? "text-foreground hover:bg-muted cursor-pointer"
                        : "text-muted-foreground/30"
                      }`}>
                      {d}
                    </div>
                  )
                })}
              </div>
            </div>

            {selDay && (
              <div className="bg-card rounded-xl border border-border p-5 mb-4">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-wide mb-4 capitalize">
                  Orari — {fmtDateLong(selDay)}
                </p>
                {slotsLoading && <p className="text-sm text-muted-foreground text-center py-4">Caricamento orari…</p>}
                {slotsError   && <p className="text-sm text-destructive font-semibold py-2">⚠ {slotsError}</p>}
                {!slotsLoading && !slotsError && (
                  <div className="grid grid-cols-4 gap-2">
                    {slots.map(t => (
                      <div key={t} onClick={() => setSelSlot(t)}
                        className={`py-2 px-1 border-2 rounded-lg text-center text-sm font-bold cursor-pointer transition-all ${
                          selSlot === t ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary"
                        }`}>
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
                <Input type="email" placeholder="Email (per la conferma)" value={email} onChange={e => setEmail(e.target.value)} />
                <Textarea placeholder="Note per il dottore — opzionale"   value={note}  onChange={e => setNote(e.target.value)} rows={3} />
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
              <p className="text-xs font-bold text-primary uppercase tracking-wide mb-4">Riepilogo prenotazione</p>
              <div className="space-y-2">
                {[
                  ["Servizio",  SERVIZI[curServ].n],
                  ["Data",      selDay ? fmtDateLong(selDay) : ""],
                  ["Ora",       selSlot ?? ""],
                  ["Studio",    "Via Galileo Galilei 5, Pontecorvo (FR)"],
                  ["Paziente",  nome],
                  ["Telefono",  tel],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between items-start gap-4 py-2 border-b border-primary/10 last:border-0">
                    <span className="text-sm text-muted-foreground shrink-0">{label}</span>
                    <span className="text-sm font-bold text-foreground text-right">{value}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-2">
                  <span className="text-sm font-bold text-primary">Costo</span>
                  <span className="text-lg font-bold text-primary">{SERVIZI[curServ].p ?? "Da concordare"}</span>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl border border-border p-5 mb-4">
              <p className="font-bold text-foreground mb-2">Come funziona</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Riceverai una conferma via SMS entro pochi minuti. Per cancellare contatta lo studio almeno 24 ore prima.
              </p>
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
              {submitting ? "Invio in corso…" : "Conferma prenotazione"}
            </Button>
          </>
        )}

        {/* ── STEP 5: Successo ── */}
        {step === 5 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">Prenotazione ricevuta!</h2>
            <p className="text-sm text-muted-foreground mb-6">
              La tua richiesta è stata inviata.<br />Riceverai una conferma via SMS a breve.
            </p>
            <div className="bg-primary/5 border border-primary/30 rounded-xl p-5 text-left mb-6">
              <p className="text-sm text-foreground leading-relaxed">
                <strong>{SERVIZI[curServ].n}</strong><br />
                {selDay && fmtDateLong(selDay)} · ore {selSlot}<br />
                Studio Marco Turchetta · Via Galileo Galilei 5, Pontecorvo<br />
                {nome} · {tel}
              </p>
              {bookingId && <p className="text-xs text-primary/60 mt-2">Ref. #{bookingId.slice(0, 8).toUpperCase()}</p>}
            </div>
            <p className="text-xs text-muted-foreground mb-6">
              Per modificare o cancellare:<br />
              <strong className="text-foreground">turchettamarco@gmail.com</strong>
            </p>
            <Button asChild className="w-full">
              <Link href="/">Torna alla home</Link>
            </Button>
          </div>
        )}

      </div>
    </div>
  )
}
