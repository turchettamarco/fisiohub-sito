import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Phone, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Marco Turchetta — Fisioterapista e Osteopata a Pontecorvo (FR)',
  description: 'Marco Turchetta fisioterapista e osteopata a Pontecorvo (FR). Ex staff Frosinone Calcio. Laurea Sapienza/IRCCS Neuromed, Master Osteopatia EOM-Verona. Specializzato in mal di schiena, cervicale e dolori articolari.',
  keywords: ['Marco Turchetta fisioterapista', 'Marco Turchetta Pontecorvo', 'Marco Turchetta osteopata', 'fisioterapista Pontecorvo chi sono', 'Marco Turchetta Frosinone Calcio'],
  alternates: { canonical: 'https://turchettamarco.com/chi-sono' },
}

const faqs = [
  { q: 'Marco Turchetta è un fisioterapista abilitato?', a: 'Sì. Sono laureato in Fisioterapia presso la Sapienza Università di Roma (polo IRCCS Neuromed di Pozzilli) e iscritto all\'Albo dei Fisioterapisti TSRM-PSTRP. Esercito la professione in modo autonomo e regolare.' },
  { q: 'Quanti anni di esperienza ha Marco Turchetta?', a: 'Oltre 10 anni di esperienza clinica. Ho lavorato come fisioterapista nel calcio professionistico (Frosinone Calcio), ho collaborato con il Centro Medico Ruo di Cassino dell\'ortopedico Dott. Pasquale Ruo, e gestisco il mio studio a Pontecorvo dal quale seguo centinaia di pazienti ogni anno.' },
  { q: 'Posso venire da Marco Turchetta senza prescrizione medica?', a: 'Sì. Non hai bisogno di nessuna ricetta. Puoi contattarmi direttamente — anche solo con un messaggio WhatsApp. Se dopo la valutazione capisco che non sono la figura più adatta per il tuo problema, te lo dico chiaramente e ti indico dove andare.' },
  { q: 'Quanto costa una visita da Marco Turchetta?', a: 'Il costo varia in base al tipo di trattamento. Te lo comunico prima di iniziare qualsiasi percorso — nessuna sorpresa. La trasparenza sui costi fa parte del mio modo di lavorare.' },
  { q: 'Marco Turchetta fa anche osteopatia viscerale?', a: 'Sì. Ho una formazione specifica in osteopatia strutturale, viscerale e cranio-sacrale attraverso il percorso EOM (Master universitario + Diploma D.O. in completamento). Tratto anche lombalgie di origine viscerale e sequele di cicatrici chirurgiche addominali.' },
  { q: 'Devo spostarmida lontano per venire a Pontecorvo?', a: 'Lo studio è a Pontecorvo (FR), in Via Galileo Galilei 5 — posizione centrale rispetto a tutta la Valle del Liri. Da Cassino sono 15 km, da Aquino 8 km, da Ceprano 10 km, da Arce 12 km. Parcheggio libero nelle immediate vicinanze.' },
]

export default function ChiSono() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Marco Turchetta",
    "jobTitle": "Fisioterapista e Osteopata",
    "description": "Fisioterapista e osteopata a Pontecorvo (FR). Laurea Sapienza/IRCCS Neuromed, Master Osteopatia EOM-Verona, D.O. Madrid in completamento. Ex fisioterapista Frosinone Calcio. Collaborazione Centro Medico Ruo Cassino.",
    "url": "https://turchettamarco.com",
    "telephone": "+393209631792",
    "email": "turchettamarco@gmail.com",
    "address": { "@type": "PostalAddress", "streetAddress": "Via Galileo Galilei 5", "addressLocality": "Pontecorvo", "addressRegion": "FR", "postalCode": "03037", "addressCountry": "IT" },
    "alumniOf": [
      { "@type": "CollegeOrUniversity", "name": "Sapienza Università di Roma — polo IRCCS Neuromed di Pozzilli" },
      { "@type": "CollegeOrUniversity", "name": "Università degli Studi di Verona — EOM European Osteopathic Academy" }
    ],
    "knowsAbout": ["Fisioterapia", "Osteopatia", "Terapia Manuale", "Laser Nd:YAG", "Tecarterapia", "Fisioterapia Sportiva", "Rieducazione Posturale Mézières", "Osteopatia Viscerale"]
  }

  return (
    <main className="bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <section className="py-20 sm:py-28 bg-card border-b border-border">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">Chi Sono · Pontecorvo (FR)</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-tight mb-2">Marco Turchetta</h1>
          <p className="text-xl text-primary font-semibold mb-5">Fisioterapista e Osteopata a Pontecorvo (FR)</p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4 max-w-2xl">
            Se sei qui, probabilmente hai dolore da tempo. Hai già provato qualcosa — e non ha funzionato.
            Mi chiami perché vuoi capire se qualcuno può davvero aiutarti.
            La risposta onesta è: dipende. Ma per saperlo ho bisogno di vederti, ascoltarti, valutarti.
            Non di mandarti un preventivo al buio.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-2xl">
            Sono Marco Turchetta, fisioterapista e osteopata con studio a Pontecorvo (FR).
            Lavoro ogni giorno con persone che hanno mal di schiena, dolore cervicale, dolori articolari —
            spesso da mesi o anni, spesso dopo aver già fatto fisioterapia altrove senza risultati duraturi.
          </p>
          <div className="flex items-center gap-3 mb-7 flex-wrap">
            <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />)}</div>
            <span className="text-sm text-muted-foreground">5/5 su Google · Pontecorvo</span>
            <a href="https://g.page/r/Cb8BmfZRugb3EBM/review" target="_blank" rel="noopener noreferrer"
              className="text-xs font-semibold text-primary hover:underline">⭐ Lascia una recensione →</a>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity">
              Prenota una visita <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+393209631792" className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-xl hover:border-primary/40 transition-colors font-medium">
              <Phone className="h-4 w-4" /> 320 963 1792
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 space-y-10">

          {/* Come lavoro */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Come lavoro — e perché è diverso</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La prima domanda che mi faccio con ogni paziente non è "dove fa male" ma "perché fa male".
              Sembra una distinzione sottile — ma cambia tutto.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Un mal di schiena che dura da tre anni non è "normale". Significa che qualcosa non è stato trovato.
              Forse è una disfunzione posturale globale che si trascina da decenni.
              Forse è una tensione viscerale legata a una cicatrice chirurgica addominale.
              Forse è uno squilibrio delle catene muscolari che nessun massaggio locale può risolvere.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              La prima seduta con me dura circa 60 minuti.
              Ascolto la tua storia clinica in dettaglio — non solo "dove fa male", ma quando è iniziato,
              cosa lo peggiora, cosa hai già provato, i tuoi precedenti infortuni e interventi, le tue abitudini.
              Poi eseguo una valutazione clinica con test specifici.
              Alla fine ti spiego cosa ho trovato — in linguaggio umano, non in medichese — e cosa propongo di fare.
              Decidi tu se continuare. Nessun obbligo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Sono iscritto all&apos;Albo dei Fisioterapisti TSRM-PSTRP e lavoro esclusivamente su appuntamento —
              un paziente alla volta, con tutto il tempo necessario. Nessun altro paziente in sala d&apos;attesa.
              Nessuna fretta.
            </p>
          </div>

          {/* Esperienza sportiva e clinica */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Esperienza clinica e sportiva</h2>
            <div className="space-y-4">
              <div className="p-5 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">⚽</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Fisioterapista — Frosinone Calcio</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ho fatto parte dello staff fisioterapico del Frosinone Calcio, occupandomi della prevenzione
                      e del trattamento degli infortuni degli atleti professionisti.
                      Lavorare nel calcio professionistico significa gestire infortuni acuti sotto pressione,
                      con tempi di recupero precisi e un approccio che non può permettersi approssimazioni.
                      Questa esperienza mi ha insegnato a valutare rapidamente, decidere bene e trattare in modo efficace.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">🏥</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Collaborazione — Centro Medico Ruo, Cassino</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ho collaborato con il <strong className="text-foreground">Dott. Pasquale Ruo</strong>,
                      ortopedico-traumatologo specializzato alla Sapienza di Roma (110/110 e lode),
                      con expertise in chirurgia protesica, patologia del piede e ortopedia complessa.
                      Il Centro Medico Ruo si trova in Via Casilina Sud a Cassino (FR).
                      Questa collaborazione mi ha dato una visione clinica approfondita del percorso ortopedico —
                      dalla diagnosi chirurgica alla riabilitazione — che porto ogni giorno nel mio studio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formazione */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Formazione</h2>
            <div className="space-y-4">
              {[
                { emoji: '🎓', title: 'Laurea in Fisioterapia — Sapienza / IRCCS Neuromed di Pozzilli', desc: 'Corso di Laurea in Fisioterapia presso il Polo Didattico dell\'IRCCS Neuromed di Pozzilli (IS), sede distaccata della Sapienza Università di Roma. Il Neuromed è un IRCCS (Istituto di Ricovero e Cura a Carattere Scientifico) di eccellenza internazionale nel campo delle neuroscienze — un contesto clinico e di ricerca di altissimo livello. Formarsi lì significa avere accesso a casi clinici complessi e a una visione della riabilitazione che va oltre la media.' },
                { emoji: '🎓', title: 'Master Universitario in Osteopatia — EOM / Università di Verona', desc: 'Percorso universitario completo in osteopatia strutturale, viscerale e cranio-sacrale, in convenzione con l\'Università degli Studi di Verona attraverso la European Osteopathic Academy (EOM). Un percorso riservato a fisioterapisti e medici — non un corso privato, ma un Master accademico con esami e tesi universitaria.' },
                { emoji: '🏅', title: 'Diploma in Osteopatia D.O. — Escuela Osteopática de Madrid (in completamento)', desc: 'Percorso quinquennale da 174 ECTS presso la Escuela Osteopática de Madrid (EOM), fondata nel 1989, una delle più autorevoli scuole di osteopatia al mondo con oltre 75 sedi internazionali e più di 15.000 diplomati. Osteopatia strutturale, viscerale e craniale avanzata. Riservato a fisioterapisti e medici.' },
              ].map(({ emoji, title, desc }) => (
                <div key={title} className="flex gap-4 p-5 bg-card rounded-xl border border-border">
                  <span className="text-2xl flex-shrink-0 mt-0.5">{emoji}</span>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Specializzazioni */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Specializzazioni ECM</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { t: '"La Spalla" — Dott. Francesco Inglese', d: 'Membro SICSeG, docente universitario a Bologna e Pisa, autore del libro di riferimento "La spalla. Riabilitazione ortopedica" (Edi.Ermes). Valutazione e riabilitazione completa della spalla: cuffia dei rotatori, capsulite, impingement, instabilità.' },
                { t: 'Bendaggio Funzionale — Dott. Loris Stella', d: 'Autore dei testi italiani di riferimento (Edi.Ermes), docente universitario a Bologna e Ferrara. Bendaggio funzionale adesivo e taping neuromuscolare.' },
                { t: 'Fibrolisi Diacutanea', d: 'Tecnica strumentale con ganci per il trattamento delle aderenze fasciali e cicatriziali profonde — efficace nelle tendinopatie croniche resistenti.' },
                { t: 'Trattamento delle Cicatrici', d: 'Mobilizzazione manuale e strumentale del tessuto cicatriziale superficiale e profondo. Le cicatrici chirurgiche possono generare tensioni fasciali lontane dalla sede dell\'operazione.' },
              ].map(({ t, d }) => (
                <div key={t} className="p-4 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground text-sm mb-1">{t}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Studio */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Il mio studio a Pontecorvo</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Via Galileo Galilei 5, Pontecorvo (FR) — presso gli Studi Galileo.
              Uno spazio privato, attrezzato con strumentazione medicale professionale:
              laser Nd:YAG Zaira (Garda Laser, Made in Italy), tecarterapia Globus Diacare 5000,
              TENS Globus, ultrasuoni, magnetoterapia a noleggio domiciliare.
              Onde d&apos;urto ESWT in arrivo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Raggiungibile da Cassino (15 km), Ceprano (10 km), Aquino (8 km), Arce (12 km),
              San Giorgio a Liri, Sant&apos;Elia Fiumerapido, Frosinone.
              Parcheggio libero nelle vicinanze. Su appuntamento, dal lunedì al sabato.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">Domande su Marco Turchetta</h2>
            <div className="space-y-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="p-5 bg-card rounded-xl border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5 border-t border-primary/20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">Prenota una visita con Marco Turchetta</h2>
          <p className="text-muted-foreground mb-6">60 minuti di valutazione. Ti dico cosa sta succedendo e come lo risolviamo. Nessun impegno.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/prenota" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity">
              Prenota ora <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="https://g.page/r/Cb8BmfZRugb3EBM/review" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-7 py-3.5 rounded-xl hover:border-primary/40 transition-colors font-medium">
              ⭐ Lascia una recensione
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
