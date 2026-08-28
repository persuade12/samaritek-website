import { HeroSection } from "@/components/hero-section"
import { ImageShowcase } from "@/components/image-showcase"
import { ServicesGrid } from "@/components/services-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ImageShowcase />
      <ServicesGrid />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  )
}
