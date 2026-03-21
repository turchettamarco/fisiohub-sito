import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { PainConditions } from "@/components/pain-conditions"
import { WhyChoose } from "@/components/why-choose"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Laser } from "@/components/laser"
import { Process } from "@/components/process"
import { FirstVisit } from "@/components/first-visit"
import { Testimonials } from "@/components/testimonials"
import { Faq } from "@/components/faq"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsappFab } from "@/components/whatsapp-fab"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <PainConditions />
        <WhyChoose />
        <About />
        <Laser />
        <Services />
        <Process />
        <FirstVisit />
        <Testimonials />
        <Faq />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  )
}
