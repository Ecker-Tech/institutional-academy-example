import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { ValuePropositions } from "@/components/landing/value-propositions"
import { TrainingModalities } from "@/components/landing/training-modalities"
import { Schedule } from "@/components/landing/schedule"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValuePropositions />
        <TrainingModalities />
        <Schedule />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
