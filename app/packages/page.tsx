import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { JsonLd, webPageJsonLd } from "@/components/json-ld"
import { OFFER_PACKAGES } from "@/lib/offer-packages"
import { BRAND_IMAGES } from "@/lib/brand-images"
import { createMetadata } from "@/lib/seo"

export const metadata: Metadata = createMetadata({
  title: "Packages & quotes",
  description:
    "Bundled digital packages for new businesses and retailers—website, e-commerce, branding, and growth. Request a tailored quote from SamariTek.",
  path: "/packages",
  keywords: [
    "business website packages",
    "e-commerce packages Zimbabwe",
    "digital marketing packages",
    "startup website quote",
  ],
  ogImage: BRAND_IMAGES.shopFacade,
  ogImageAlt: "SamariTek retail shop facade branding mockup",
})

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
      <JsonLd
        data={webPageJsonLd({
          path: "/packages",
          title: "Packages & quotes | SamariTek",
          description:
            "Bundled digital packages for new businesses and retailers—website, e-commerce, branding, and growth. Request a tailored quote from SamariTek.",
        })}
      />
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
              Packages & <span className="text-[#FEA02F]">quotes</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Fixed bundles do not fit every business—so these are <strong className="text-foreground font-semibold">scoped packages</strong>{" "}
              we quote after a short questionnaire. Ideal if you have just registered a company, run a shop, or
              already have a site and need structured growth work.
            </p>
            <p className="mt-4 text-sm text-[#657786]">
              Need something else?{" "}
              <Link href="/get-started" className="text-[#FEA02F] hover:underline">
                Get started
              </Link>{" "}
              for individual services, or{" "}
              <Link href="/contact" className="text-[#FEA02F] hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>

          <div className="relative mb-16 h-[min(40vh,22rem)] w-full overflow-hidden rounded-3xl ring-1 ring-black/5 dark:ring-white/10">
            <Image
              src={BRAND_IMAGES.shopFacade}
              alt="SamariTek logo on a modern retail shop facade"
              fill
              sizes="100vw"
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#FEA02F]">Retail &amp; new business</p>
              <p className="mt-2 text-lg font-semibold text-white md:text-xl">
                From storefront presence to online sales—we package what shops and new companies need.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {OFFER_PACKAGES.map((pkg) => (
              <article
                key={pkg.slug}
                className="flex flex-col rounded-3xl border border-surface-border bg-surface p-8 hover:border-[#FEA02F]/35 hover:bg-surface-hover transition-all duration-300"
              >
                <div className="mb-5">
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#FEA02F]/90 mb-2">
                    Bundle
                  </span>
                  <h2 className="text-2xl font-bold text-foreground leading-tight">{pkg.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{pkg.tagline}</p>
                </div>

                <p className="text-xs text-[#657786] uppercase tracking-wide font-medium mb-2">Ideal for</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{pkg.idealFor}</p>

                <p className="text-xs text-[#657786] uppercase tracking-wide font-medium mb-2">Typically includes</p>
                <ul className="space-y-2.5 mb-8 text-sm text-muted-foreground">
                  {pkg.inclusions.map((line) => (
                    <li key={line} className="flex gap-2">
                      <span className="text-[#FEA02F] shrink-0 mt-0.5" aria-hidden>
                        ✓
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full mt-auto bg-gradient-to-r from-[#FEA02F] to-[#DE6600] hover:from-[#DE6600] hover:to-[#FEA02F] text-white rounded-xl py-6 font-semibold shadow-lg shadow-[#FEA02F]/25"
                >
                  <Link href={`/get-started?package=${encodeURIComponent(pkg.slug)}`}>Request a quote</Link>
                </Button>
              </article>
            ))}
          </div>

          <div className="max-w-3xl mx-auto rounded-3xl border border-surface-border bg-surface p-10 text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">Custom scope</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mix packages, add integrations, or start from a blank brief—we will still give you a clear written quote
              before work begins.
            </p>
            <Button asChild variant="outline" className="border-border text-foreground rounded-xl">
              <Link href="/get-started">Browse all services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
