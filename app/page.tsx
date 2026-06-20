import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TrustStrip } from "@/components/trust-strip"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { BentoSection } from "@/components/bento-section"
import { PlatformSection } from "@/components/platform-section"
import { AudienceSection } from "@/components/audience-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustStrip />
        <ProblemSection />
        <SolutionSection />
        <BentoSection />
        <PlatformSection />
        <AudienceSection />
        <BenefitsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
