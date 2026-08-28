"use client"

import Image from "next/image"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AFRICA_SECTORS } from "@/lib/africa-sectors"
import { cn } from "@/lib/utils"

export function ImageShowcase() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setCanPrev(el.scrollLeft > 8)
    setCanNext(el.scrollLeft < max - 8)
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener("scroll", updateScrollState, { passive: true })
    window.addEventListener("resize", updateScrollState)
    return () => {
      el.removeEventListener("scroll", updateScrollState)
      window.removeEventListener("resize", updateScrollState)
    }
  }, [updateScrollState])

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-showcase-card]")
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * amount, behavior: "smooth" })
  }

  return (
    <section className="relative border-b border-border bg-background py-1" aria-label="Sectors we serve">
      <p className="px-6 pb-3 pt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        Sectors we serve
      </p>
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-4 pt-2 snap-x snap-mandatory [scrollbar-width:thin] [scrollbar-color:rgba(254,160,47,0.55)_transparent] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#FEA02F]/55 [&::-webkit-scrollbar-track]:bg-transparent"
        >
          {AFRICA_SECTORS.map((frame) => (
            <Link
              key={frame.id}
              href={frame.ctaHref}
              data-showcase-card
              className="group relative block min-h-[14rem] w-[min(78vw,20rem)] shrink-0 snap-start overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10 sm:w-[min(55vw,22rem)] md:min-h-[17rem] md:w-[min(40vw,24rem)] lg:min-h-[18rem] lg:w-[min(28vw,22rem)]"
            >
              <Image
                src={frame.image}
                alt={frame.imageAlt}
                fill
                sizes="(max-width: 768px) 78vw, (max-width: 1024px) 40vw, 22rem"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FEA02F]">{frame.shortTitle}</p>
                <p className="mt-1.5 text-base font-semibold text-white md:text-lg">{frame.title}</p>
                <p className="mt-1 text-sm text-white/80 transition-transform duration-500 group-hover:translate-x-1">
                  Explore →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Scroll sectors left"
          className={cn(
            "absolute left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-md hover:bg-background md:flex",
            !canPrev && "pointer-events-none opacity-0",
          )}
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Scroll sectors right"
          className={cn(
            "absolute right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 rounded-full border border-border bg-background/90 text-foreground shadow-md backdrop-blur-md hover:bg-background md:flex",
            !canNext && "pointer-events-none opacity-0",
          )}
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </Button>
      </div>
    </section>
  )
}
