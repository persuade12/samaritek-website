import Link from "next/link"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const phases = [
  {
    title: "Discover",
    description:
      "We align on goals, constraints, and success metrics—so what we build maps directly to your outcomes.",
  },
  {
    title: "Design & build",
    description:
      "Iterative delivery with clear checkpoints. You stay in the loop without drowning in noise.",
  },
  {
    title: "Launch & evolve",
    description:
      "Ship confidently, then improve with data and feedback—not guesswork.",
  },
]

const focusAreas = [
  "Custom web & cloud applications",
  "APIs, integrations, and secure backends",
  "Performance, reliability, and maintainability",
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight text-balance">
              Our <span className="text-[#FEA02F]">Work</span>
            </h1>
            <p className="text-lg md:text-xl text-[#EBD9C8]/80 max-w-3xl mx-auto leading-relaxed text-pretty">
              The best work happens when your domain expertise meets disciplined engineering. We collaborate with teams
              across Africa—from clarity at kickoff to systems you can grow—so you know what partnering with us feels
              like before we talk specifics.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-20 md:mb-24">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 md:p-10">
              <h2 className="text-xl font-semibold text-white mb-4">How we engage</h2>
              <p className="text-[#EBD9C8]/85 leading-relaxed mb-6">
                Every engagement is different. We tailor scope, stack, and cadence to your team—whether you need a
                focused build, ongoing partnership, or help untangling legacy systems.
              </p>
              <ul className="space-y-3">
                {focusAreas.map((item) => (
                  <li key={item} className="flex gap-3 text-[#EBD9C8]/90">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FEA02F]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-20 md:mb-24">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-10 md:mb-12">
              How we <span className="text-[#FEA02F]">deliver</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {phases.map((phase, i) => (
                <div
                  key={phase.title}
                  className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8"
                >
                  <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FEA02F]/15 text-sm font-bold text-[#FEA02F]">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-3">{phase.title}</h3>
                  <p className="text-[#EBD9C8]/75 leading-relaxed text-sm md:text-base">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-2xl mx-auto text-center pb-8">
            <p className="text-[#657786] text-sm mb-6">
              Tell us what you’re building—we’ll answer with a straight take on fit, timeline, and next steps.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FEA02F] to-[#DE6600] hover:from-[#DE6600] hover:to-[#FEA02F] text-white px-10 py-6 text-base font-semibold rounded-full shadow-lg shadow-[#FEA02F]/25 hover:shadow-[#FEA02F]/40 transition-all duration-300"
            >
              <Link href="/contact">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
