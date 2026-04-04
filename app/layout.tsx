import React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsappFab } from "@/components/whatsapp-fab"
import type { Metadata } from 'next'
import { DM_Sans, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans-var",
  display: "swap",
})
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-var",
  display: "swap",
})
export const metadata: Metadata = {
  title: 'Marco Turchetta | Fisioterapista e Osteopata a Pontecorvo (FR)',
  description: 'Fisioterapista e osteopata a Pontecorvo (FR). Trattamento mal di schiena, cervicale, sciatalgia, spalla e ginocchio. Laser Nd:YAG, tecarterapia, osteopatia. Prenota online. Serve anche Cassino, Frosinone, Sora, Ceprano.',
  keywords: [
    // Keyword primarie — Pontecorvo
    'fisioterapista Pontecorvo',
    'fisioterapia Pontecorvo',
    'osteopata Pontecorvo',
    'osteopatia Pontecorvo',
    'fisioterapista Pontecorvo FR',
    'fisioterapia Pontecorvo FR',
    'fisioterapia osteopatia Pontecorvo',
    'studio fisioterapia Pontecorvo',
    'Marco Turchetta fisioterapista',
    'Marco Turchetta osteopata',
    // Patologie più cercate
    'mal di schiena Pontecorvo',
    'cervicale Pontecorvo',
    'sciatalgia Pontecorvo',
    'ernia disco Pontecorvo',
    'dolore spalla Pontecorvo',
    'dolore ginocchio Pontecorvo',
    'lombalgia Pontecorvo',
    'riabilitazione Pontecorvo',
    'riabilitazione post operatoria Pontecorvo',
    // Tecniche cercate
    'laser terapia Pontecorvo',
    'tecarterapia Pontecorvo',
    'laserterapia Pontecorvo',
    'terapia manuale Pontecorvo',
    // Keyword area vasta — Cassino
    'fisioterapista Cassino',
    'fisioterapia Cassino',
    'osteopata Cassino',
    'mal di schiena Cassino',
    'cervicale Cassino',
    // Keyword area vasta — Frosinone
    'fisioterapista Frosinone',
    'osteopata Frosinone',
    // Keyword area vasta — Sora / Ceprano
    'fisioterapista Sora',
    'fisioterapista Ceprano',
    'fisioterapia provincia Frosinone',
    // Keyword generiche ad alto volume
    'fisioterapista privato vicino a me',
    'osteopata vicino a me',
    'fisioterapia mal di schiena',
    'fisioterapia cervicale',
    'fisioterapia sciatalgia',
  ],
  authors: [{ name: 'Marco Turchetta', url: 'https://turchettamarco.com' }],
  creator: 'Marco Turchetta',
  metadataBase: new URL('https://turchettamarco.com'),
  alternates: {
    canonical: 'https://turchettamarco.com',
  },
  openGraph: {
    title: 'Marco Turchetta | Fisioterapista e Osteopata a Pontecorvo (FR)',
    description: 'Fisioterapista e osteopata a Pontecorvo (FR). Mal di schiena, cervicale, sciatalgia, spalla, ginocchio. Laser Nd:YAG, tecarterapia, osteopatia integrata. Prenota online.',
    url: 'https://turchettamarco.com',
    siteName: 'Marco Turchetta Fisioterapia e Osteopatia',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: '/images/img-2314.jpeg',
        width: 800,
        height: 600,
        alt: 'Marco Turchetta - Fisioterapista e Osteopata a Pontecorvo',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <head>
        {/* Schema.org LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://turchettamarco.com/#person",
                  "name": "Marco Turchetta",
                  "jobTitle": "Fisioterapista e Osteopata",
                  "url": "https://turchettamarco.com",
                  "image": "https://turchettamarco.com/images/img-2314.jpeg",
                  "telephone": "+393209631792",
                  "email": "turchettamarco@gmail.com",
                  "worksFor": { "@id": "https://turchettamarco.com/#business" },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Via Galileo Galilei 5",
                    "addressLocality": "Pontecorvo",
                    "addressRegion": "FR",
                    "postalCode": "03037",
                    "addressCountry": "IT"
                  },
                  "sameAs": [
                    "https://www.facebook.com/profile.php?id=61580145238983",
                    "https://www.instagram.com/fisioterapia_turchetta_marco",
                    "https://www.linkedin.com/in/marcoturchetta-fisioterapista"
                  ]
                },
                {
                  "@type": "MedicalBusiness",
                  "@id": "https://turchettamarco.com/#business",
                  "name": "Marco Turchetta Fisioterapia e Osteopatia",
                  "image": "https://turchettamarco.com/images/img-2314.jpeg",
                  "url": "https://turchettamarco.com",
                  "telephone": "+393209631792",
                  "email": "turchettamarco@gmail.com",
                  "founder": { "@id": "https://turchettamarco.com/#person" },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Via Galileo Galilei 5",
                    "addressLocality": "Pontecorvo",
                    "addressRegion": "FR",
                    "postalCode": "03037",
                    "addressCountry": "IT"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 41.4597,
                    "longitude": 13.6696
                  },
                  "openingHoursSpecification": [
                    {
                      "@type": "OpeningHoursSpecification",
                      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                      "opens": "09:00",
                      "closes": "19:00"
                    }
                  ],
                  "priceRange": "€€",
                  "description": "Fisioterapista e osteopata a Pontecorvo (FR). Trattamento del dolore muscolo-scheletrico con approccio clinico integrato. Laser Nd:YAG Zaira, tecarterapia Globus Diacare 5000, osteopatia, bendaggio funzionale.",
                  "medicalSpecialty": [
                    "Fisioterapia",
                    "Osteopatia",
                    "Riabilitazione Ortopedica",
                    "Terapia Manuale"
                  ],
                  "sameAs": [
                    "https://www.google.com/maps/place/Via+Galileo+Galilei+5,+Pontecorvo"
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`}>
        <Header />
        {children}
        <Footer />
        <WhatsappFab />
        <Analytics />
      </body>
    </html>
  )
}
