import React from "react"
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
  title: 'Marco Turchetta | Fisioterapia e Osteopatia a Pontecorvo (FR)',
  description: 'Fisioterapia e Osteopatia a Pontecorvo (FR) con approccio clinico personalizzato. Trattamento cervicalgia, lombalgia, sciatalgia, dolori alla spalla e al ginocchio. Terapia manuale ed esercizio terapeutico.',
  keywords: 'fisioterapista Pontecorvo, osteopata Pontecorvo, fisioterapia Pontecorvo FR, dolore cervicale Pontecorvo, lombalgia Pontecorvo, spalla Pontecorvo, ginocchio Pontecorvo',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`${dmSans.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
