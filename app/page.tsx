import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  )
}
