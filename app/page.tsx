import { HeroSection } from "@/components/hero-section"
import { ImageShowcase } from "@/components/image-showcase"
import { ServicesGrid } from "@/components/services-grid"
import { WhyChooseUs } from "@/components/why-choose-us"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { JsonLd, webPageJsonLd } from "@/components/json-ld"
import { createMetadata } from "@/lib/seo"
import { SITE } from "@/lib/site"

export const metadata = createMetadata({
  title: "Home",
  absoluteTitle: SITE.defaultTitle,
  description: SITE.defaultDescription,
  path: "/",
  keywords: [
    "software company Zimbabwe",
    "technology partner Africa",
    "enterprise software development",
  ],
})

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <JsonLd
        data={webPageJsonLd({
          path: "/",
          title: SITE.defaultTitle,
          description: SITE.defaultDescription,
        })}
      />
      <HeroSection />
      <ImageShowcase />
      <ServicesGrid />
      <WhyChooseUs />
      <CTASection />
      <Footer />
    </main>
  )
}
