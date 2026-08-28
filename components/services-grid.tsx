"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CAPABILITIES } from "@/lib/capabilities"

export function ServicesGrid() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleCards((prev) => new Set([...prev, index]))
            }
          })
        },
        { threshold: 0.1 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="our-solutions" className="scroll-mt-20 relative bg-section-alt px-6 py-24 md:py-28">
      <div className="mx-auto mb-14 max-w-7xl text-center md:mb-16">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#FEA02F]">What we build</p>
        <h2 className="mb-4 text-balance text-4xl font-bold text-foreground md:text-5xl">
          Technical <span className="text-[#FEA02F]">capabilities</span>
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
          The engineering services behind every sector—software, cloud, AI, IoT, and integrations delivered with clarity
          from scoping to handover.
        </p>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CAPABILITIES.map((capability, index) => {
          const Icon = capability.icon
          return (
            <div
              key={capability.id}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`h-full transition-all duration-500 ${
                visibleCards.has(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <Link
                href={`/get-started?service=${encodeURIComponent(capability.getStartedSlug)}`}
                className="group relative flex h-full min-h-[14rem] cursor-pointer flex-col rounded-2xl border border-surface-border bg-card/80 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:bg-surface-hover dark:shadow-none"
              >
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#DE6600]/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative mb-4 shrink-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FEA02F]/10 transition-colors duration-300 group-hover:bg-[#FEA02F]/20">
                    <Icon className="h-5 w-5 text-[#FEA02F] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>

                <h3 className="relative mb-2 shrink-0 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-[#FEA02F]">
                  {capability.title}
                </h3>
                <p className="relative mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {capability.description}
                </p>

                <div className="relative mt-auto flex shrink-0 items-center gap-2 text-sm font-semibold text-[#FEA02F] transition-all duration-300 group-hover:gap-3">
                  <span>Get started</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-12 max-w-7xl text-center">
        <Button asChild variant="outline" className="rounded-full border-border px-6 hover:border-[#FEA02F]/40 hover:bg-[#FEA02F]/10">
          <Link href="/services" className="inline-flex items-center gap-2">
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Button>
      </div>
    </section>
  )
}
