import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Gallery } from "@/components/landing/gallery"
import { Features } from "@/components/landing/features"
import { Plans } from "@/components/landing/plans"
import { Results } from "@/components/landing/results"
import { Testimonials } from "@/components/landing/testimonials"
import { Location } from "@/components/landing/location"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <Features />
        <Plans />
        <Results />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
