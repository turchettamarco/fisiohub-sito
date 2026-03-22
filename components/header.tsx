"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#chi-sono", label: "Chi Sono" },
  { href: "/#servizi", label: "Servizi" },
  { href: "/#metodo", label: "Come Lavoro" },
  { href: "/#studio", label: "Studio" },
  { href: "/#contatti", label: "Contatti" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/97 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/progetto-20senza-20titolo.png"
                alt="Logo Marco Turchetta Fisioterapista"
                width={200}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-3">
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
              <a href="tel:+393209631792" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                320 963 1792
              </a>
            </Button>
            <Button asChild size="sm" className="font-medium">
              <Link href="/prenota">Prenota ora</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <Button asChild size="sm" className="text-xs">
              <Link href="/prenota">Prenota</Link>
            </Button>
            <button
              type="button"
              className="text-foreground p-1"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Chiudi menu" : "Apri menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 bg-background">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted px-3 py-2.5 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-border">
                <a
                  href="tel:+393209631792"
                  className="flex items-center gap-2 text-sm text-muted-foreground px-3 py-2.5"
                >
                  <Phone className="h-4 w-4" />
                  320 963 1792
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
