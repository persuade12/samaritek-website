import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#DE6600] via-[#FEA02F] to-[#DE6600] animate-gradient" />

      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10">
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
          Let's build something amazing together. Your journey starts here.
        </p>

        {/* CTA Button */}
        <Button
          size="lg"
          className="bg-white text-[#DE6600] hover:bg-white/95 px-12 py-7 text-xl font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Get Started Today
        </Button>

        {/* Contact info */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-white/90">
          <a href="mailto:hello@samarite.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className="font-semibold">hello@samaritek.com</span>
          </a>
          <div className="hidden sm:block w-px h-6 bg-white/30" />
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span className="font-semibold">+1 (234) 567-890</span>
          </a>
        </div>
      </div>
    </section>
  )
}
