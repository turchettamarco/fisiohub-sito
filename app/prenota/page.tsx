import type { Metadata } from 'next'
import { BookingClient } from './booking-client'

export const metadata: Metadata = {
  title: 'Prenota una Visita | Marco Turchetta Fisioterapista — Pontecorvo (FR)',
  description: 'Prenota la tua visita fisioterapica o osteopatica a Pontecorvo. Prima visita gratuita. Scegli data e orario online — Marco Turchetta confermerà la tua richiesta via SMS o WhatsApp.',
  keywords: [
    'prenota fisioterapista Pontecorvo',
    'prenotazione online fisioterapia Pontecorvo',
    'prima visita fisioterapica Pontecorvo',
    'Marco Turchetta prenotazione',
  ],
  alternates: { canonical: 'https://turchettamarco.com/prenota' },
  openGraph: {
    title: 'Prenota una Visita — Marco Turchetta Fisioterapista Pontecorvo',
    description: 'Prenota online la tua visita di fisioterapia o osteopatia a Pontecorvo. Prima visita gratuita.',
    url: 'https://turchettamarco.com/prenota',
  },
}

export default function BookingPage() {
  return <BookingClient />
}
