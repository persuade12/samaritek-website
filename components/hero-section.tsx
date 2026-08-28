"use client"

import Link from "next/link"
import { BrainCircuit, Cloud, Code2, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"

const heroCapabilities = [
  {
    label: "Software Development",
    href: "/get-started?service=software-development",
    Icon: Code2,
  },
  {
    label: "Mobile Development",
    href: "/services#mobile-solutions",
    Icon: Smartphone,
  },
  {
    label: "AI & ML",
    href: "/services#ai-ml",
    Icon: BrainCircuit,
  },
  {
    label: "Cloud Services",
    href: "/services#cloud-solutions",
    Icon: Cloud,
  },
] as const

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-background pt-28 pb-16">
      <div
        className="absolute inset-0 w-full h-full"
        style={{ background: "radial-gradient(ellipse at top, var(--hero-from) 0%, var(--hero-to) 100%)" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FEA02F]/10 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FEA02F]/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        <h2 className="mb-4 text-3xl font-bold leading-[1.15] tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
          Engineering the
          <br />
          <span className="bg-gradient-to-r from-[#FEA02F] via-[#DE6600] to-[#FEA02F] bg-clip-text text-transparent animate-gradient">
            future of digital
          </span>
        </h2>

        <p className="mx-auto mb-8 max-w-3xl text-pretty text-base font-light leading-relaxed tracking-wide text-muted-foreground md:text-lg lg:text-xl">
          Custom software, web, and cloud for teams across Africa—crafted with precision.
          <br className="hidden md:block" />
          Built to transform organisations. Designed for real-world scale.
        </p>

        <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-foreground px-10 py-6 text-base font-semibold text-background shadow-2xl shadow-foreground/15 transition-all duration-500 hover:scale-105 hover:bg-foreground/90 hover:shadow-foreground/25 group"
          >
            <Link href="/get-started" className="inline-flex items-center">
              Start Your Project
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="rounded-full border-2 border-border px-10 py-6 text-base font-semibold text-foreground transition-all duration-500 hover:scale-105 hover:border-[#FEA02F]/50 hover:bg-[#FEA02F]/5 hover:text-[#FEA02F]"
          >
            <Link href="/work">How we work</Link>
          </Button>
        </div>

        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
          {heroCapabilities.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group flex cursor-pointer flex-col items-center gap-2 no-underline"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-surface-border bg-surface backdrop-blur-sm transition-all duration-300 group-hover:border-[#FEA02F]/30 group-hover:bg-[#FEA02F]/10">
                <Icon className="h-6 w-6 text-[#FEA02F] transition-transform group-hover:scale-110" aria-hidden />
              </div>
              <span className="text-center text-xs font-medium leading-snug text-muted-foreground">{label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs font-light tracking-wider text-muted-foreground">ENGINEERING FOR AFRICAN SCALE</p>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() =>
              document.getElementById("our-solutions")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="inline-flex animate-bounce rounded-full p-2 text-[#FEA02F]/60 transition-colors hover:text-[#FEA02F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA02F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Scroll to Our Solutions"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
