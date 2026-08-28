import type { Metadata } from "next"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { OFFER_PACKAGES } from "@/lib/offer-packages"

export const metadata: Metadata = {
  title: "Packages & quotes | SamariTek",
  description:
    "Bundled offerings for new businesses and retailers—online presence, e‑commerce, and digital growth. Request a tailored quote.",
}

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-background">
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
