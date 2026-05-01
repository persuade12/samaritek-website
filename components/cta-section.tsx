import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#DE6600] via-[#FEA02F] to-[#DE6600] animate-gradient" />

      {/* Overlay pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Ready to transform your business?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed text-pretty">
          From first idea to production systems—we help teams across Africa ship software that lasts.
        </p>

        {/* CTA Button */}
        <Button
          asChild
          size="lg"
          className="bg-white text-[#DE6600] hover:bg-white/95 px-12 py-7 text-xl font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
        >
          <Link href="/get-started">Get Started Today</Link>
        </Button>

        <div className="mt-12 flex justify-center text-white/90">
          <a
            href="mailto:info@samaritek.co.zw"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className="font-semibold">info@samaritek.co.zw</span>
          </a>
        </div>
      </div>
    </section>
  )
}
