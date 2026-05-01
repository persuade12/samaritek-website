"use client"

import Link from "next/link"
import { BrainCircuit, Cloud, Code2, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"

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
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }> = []

    const colors = ["#FEA02F", "#DE6600", "#657786"]

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.4
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: "radial-gradient(ellipse at top, #1a1a1a 0%, #0a0a0a 100%)" }}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FEA02F]/10 via-transparent to-transparent" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#FEA02F]/5 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-[1.1] text-balance tracking-tight">
          Engineering the
          <br />
          <span className="bg-gradient-to-r from-[#FEA02F] via-[#DE6600] to-[#FEA02F] bg-clip-text text-transparent animate-gradient">
            future of digital
          </span>
        </h2>

        <p className="text-base md:text-lg lg:text-xl text-[#EBD9C8]/90 mb-8 max-w-3xl mx-auto leading-relaxed text-pretty font-light tracking-wide">
          Custom software, web, and cloud for teams across Africa—crafted with precision.
          <br className="hidden md:block" />
          Built to transform organisations. Designed for real-world scale.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-black px-10 py-6 text-base font-semibold rounded-full shadow-2xl shadow-white/20 hover:shadow-white/30 hover:scale-105 transition-all duration-500 group"
          >
            <Link href="/get-started" className="inline-flex items-center">
              Start Your Project
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
            className="text-white hover:text-[#FEA02F] px-10 py-6 text-base font-semibold rounded-full border-2 border-white/20 hover:border-[#FEA02F]/50 hover:bg-[#FEA02F]/5 hover:scale-105 transition-all duration-500"
          >
            <Link href="/work">How we work</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {heroCapabilities.map(({ label, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex flex-col items-center gap-2 group cursor-pointer no-underline"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center group-hover:bg-[#FEA02F]/10 group-hover:border-[#FEA02F]/30 transition-all duration-300">
                <Icon className="h-6 w-6 text-[#FEA02F] transition-transform group-hover:scale-110" aria-hidden />
              </div>
              <span className="text-xs text-[#EBD9C8]/80 font-medium text-center leading-snug">{label}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-xs text-[#657786] font-light tracking-wider">ENGINEERING FOR AFRICAN SCALE</p>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={() =>
              document.getElementById("our-solutions")?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="inline-flex animate-bounce rounded-full p-2 text-[#FEA02F]/60 transition-colors hover:text-[#FEA02F] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA02F]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Scroll to Our Solutions"
          >
            <svg
              className="w-5 h-5"
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
