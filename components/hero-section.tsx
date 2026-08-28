"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AFRICA_SECTORS, getHeroSectors } from "@/lib/africa-sectors"
import { cn } from "@/lib/utils"

const SLIDE_MS = 6500
const slides = getHeroSectors()

export function HeroSection() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)

  const slide = slides[active]

  const goTo = useCallback((index: number) => {
    setActive((index + slides.length) % slides.length)
    setProgress(0)
  }, [])

  const goPrev = useCallback(() => {
    goTo(active - 1)
  }, [active, goTo])

  const goNext = useCallback(() => {
    goTo(active + 1)
  }, [active, goTo])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault()
        goPrev()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goNext()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [goPrev, goNext])

  useEffect(() => {
    if (paused) return

    let frame = 0
    const started = performance.now() - progress * SLIDE_MS

    const tick = (now: number) => {
      const elapsed = now - started
      const next = Math.min(elapsed / SLIDE_MS, 1)
      setProgress(next)

      if (next >= 1) {
        setActive((current) => (current + 1) % slides.length)
        setProgress(0)
        return
      }

      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, paused])

  return (
    <section
      className="relative overflow-hidden bg-background pt-20 pb-10 md:pt-24 md:pb-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Solutions for Africa"
    >
      {/* Warm African / tech atmosphere */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(254,160,47,0.18),transparent_55%),radial-gradient(ellipse_50%_40%_at_100%_20%,rgba(222,102,0,0.12),transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2]"
        style={{
          backgroundImage: `linear-gradient(color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px),
            linear-gradient(90deg, color-mix(in srgb, var(--foreground) 5%, transparent) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 60% at 30% 40%, black, transparent)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        {/* Copy */}
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:py-4">
          <div key={slide.id} className="animate-in fade-in slide-in-from-left-2 duration-500 fill-mode-both">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#FEA02F]/30 bg-[#FEA02F]/10 px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FEA02F]" aria-hidden />
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#FEA02F]">
                {slide.shortTitle} · Africa
              </span>
            </div>

            <h1 className="mb-3 max-w-xl text-balance text-2xl font-bold leading-[1.15] tracking-tight text-foreground sm:text-3xl md:text-4xl">
              {slide.id === "tech" ? (
                <>
                  Engineering the
                  <br />
                  <span className="bg-gradient-to-r from-[#FEA02F] via-[#DE6600] to-[#FEA02F] bg-clip-text text-transparent animate-gradient">
                    future of digital
                  </span>
                </>
              ) : (
                slide.heroTitle
              )}
            </h1>

            <p className="mb-6 max-w-lg text-pretty text-sm leading-relaxed text-muted-foreground sm:text-base">
              {slide.heroDescription}
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="group h-auto rounded-full bg-gradient-to-r from-[#FEA02F] to-[#DE6600] px-7 py-5 text-sm font-semibold text-white shadow-lg shadow-[#FEA02F]/25 transition-all duration-300 hover:scale-[1.02] hover:from-[#DE6600] hover:to-[#FEA02F]"
              >
                <Link href={slide.ctaHref} className="inline-flex items-center gap-2">
                  {slide.ctaLabel}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-auto rounded-full border border-border px-7 py-5 text-sm font-semibold text-foreground hover:border-[#FEA02F]/40 hover:bg-[#FEA02F]/10"
              >
                <Link href={slide.secondaryHref}>{slide.secondaryLabel}</Link>
              </Button>
            </div>
          </div>

          <div className="mt-7 flex items-center gap-2" role="tablist" aria-label="Sector slides">
            {slides.map((item, index) => {
              const isActive = index === active
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={item.title}
                  onClick={() => goTo(index)}
                  className={cn(
                    "relative h-1 overflow-hidden rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA02F]/60",
                    isActive ? "w-10 bg-foreground/15" : "w-5 bg-foreground/10 hover:bg-foreground/20",
                  )}
                >
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#FEA02F] to-[#DE6600]"
                    style={{
                      width: isActive ? `${progress * 100}%` : "0%",
                      transition: isActive ? "none" : "width 200ms ease",
                    }}
                  />
                </button>
              )
            })}
          </div>
        </div>

        {/* Compact side image */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto aspect-[16/11] w-full max-w-xl overflow-hidden rounded-2xl shadow-xl shadow-foreground/10 ring-1 ring-black/5 dark:ring-white/10 sm:max-w-none lg:aspect-[5/4]">
            {slides.map((item, index) => {
              const isActive = index === active
              return (
                <div
                  key={item.id}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-700 ease-out",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                  aria-hidden={!isActive}
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 90vw, 42vw"
                    className={cn("object-cover", isActive && "animate-hero-kenburns")}
                  />
                </div>
              )
            })}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={goPrev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md hover:bg-black/55 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={goNext}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 h-9 w-9 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md hover:bg-black/55 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Button>

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
              <span
                key={slide.id}
                className="rounded-lg bg-black/50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur-md animate-in fade-in duration-500"
              >
                {slide.shortTitle}
              </span>
              <span className="rounded-lg bg-white/90 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-black dark:bg-black/55 dark:text-white">
                {active + 1}/{slides.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
