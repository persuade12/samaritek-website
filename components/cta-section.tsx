import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  { label: "Discovery to production", sub: "Clear milestones, no black box" },
  { label: "Built for Africa", sub: "Payments, scale, and real constraints" },
  { label: "Engineering you can grow", sub: "Systems that stay maintainable" },
]

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 py-24 md:py-32">
      {/* Ambient light */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[min(100vw,28rem)] w-[min(100vw,28rem)] -translate-x-1/2 rounded-full bg-[#FEA02F]/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-24 right-[-10%] h-72 w-72 rounded-full bg-[#DE6600]/20 blur-[90px]" />
      <div className="pointer-events-none absolute top-1/2 left-[-15%] h-56 w-56 -translate-y-1/2 rounded-full bg-[#FEA02F]/10 blur-[70px]" />

      {/* Soft grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]"
        style={{
          backgroundImage: `linear-gradient(color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--foreground) 6%, transparent) 1px, transparent 1px)`,
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-surface-border bg-card/90 p-10 shadow-xl shadow-foreground/5 backdrop-blur-sm dark:from-white/[0.09] dark:bg-gradient-to-b dark:via-white/[0.03] dark:to-transparent dark:shadow-[0_0_0_1px_rgba(254,160,47,0.08),0_32px_64px_-20px_rgba(0,0,0,0.85)] md:p-14 lg:p-16">
          {/* Top accent line */}
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#FEA02F]/60 to-transparent md:inset-x-12" />

          {/* Corner glints */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FEA02F]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-[#DE6600]/20 blur-3xl" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-flex items-center justify-center rounded-full border border-[#FEA02F]/35 bg-[#FEA02F]/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#FEA02F] md:text-sm">
              Partner with SamariTek
            </span>

            <h2 className="mb-6 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Ready to transform{" "}
              <span className="bg-gradient-to-r from-[#FEA02F] via-[#ffc266] to-[#DE6600] bg-clip-text text-transparent">
                your business?
              </span>
            </h2>

            <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              From first idea to production systems—we help teams across Africa build software that lasts: clear scope,
              honest timelines, and engineering you can extend without starting over.
            </p>

            {/* Mini pillars */}
            <ul className="mx-auto mt-10 grid max-w-2xl gap-3 text-left sm:grid-cols-3 sm:gap-4">
              {highlights.map((h) => (
                <li
                  key={h.label}
                  className="rounded-xl border border-surface-border bg-surface px-4 py-3.5 md:px-3 md:py-4"
                >
                  <p className="text-sm font-semibold text-foreground">{h.label}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{h.sub}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button
                asChild
                size="lg"
                className="group h-auto rounded-2xl bg-gradient-to-r from-[#FEA02F] to-[#DE6600] px-10 py-6 text-base font-bold text-white shadow-lg shadow-[#FEA02F]/25 transition-all duration-300 hover:scale-[1.02] hover:from-[#DE6600] hover:to-[#FEA02F] hover:shadow-[#FEA02F]/40"
              >
                <Link href="/get-started" className="inline-flex items-center justify-center gap-2">
                  Get started today
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto rounded-2xl border-border bg-surface px-8 py-6 text-base font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-[#FEA02F]/40 hover:bg-[#FEA02F]/10 hover:text-foreground"
              >
                <Link href="/packages">View packages &amp; quotes</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-col items-center gap-3 border-t border-border pt-10 sm:flex-row sm:justify-center sm:gap-6">
              <a
                href="mailto:info@samaritek.co.zw"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-[#FEA02F]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FEA02F]/15 text-[#FEA02F]">
                  <Mail className="h-4 w-4" aria-hidden />
                </span>
                info@samaritek.co.zw
              </a>
              <span className="hidden text-muted-foreground sm:inline" aria-hidden>
                |
              </span>
              <Link
                href="/contact"
                className="text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-[#FEA02F] hover:underline"
              >
                Prefer a conversation first? Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
