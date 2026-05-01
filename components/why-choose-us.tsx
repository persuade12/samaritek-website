"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck, Sparkles, UsersRound, BadgeCheck } from "lucide-react"

const features = [
  {
    icon: ShieldCheck,
    title: "Regulation-ready & standards-led",
    description:
      "We factor in applicable regulations, data protection expectations, and international engineering practice—so what we ship can stand up to real governance, security reviews, and audits.",
  },
  {
    icon: Sparkles,
    title: "Innovation that earns its place",
    description:
      "Modern architectures and tools where they reduce risk and time-to-value—not novelty for its own sake. We prototype fast, then harden for production.",
  },
  {
    icon: UsersRound,
    title: "Domain experts on your side",
    description:
      "A team that goes deep on your industry, workflows, and constraints before major build decisions—so requirements reflect how your organisation actually operates.",
  },
  {
    icon: BadgeCheck,
    title: "Quality you can run and extend",
    description:
      "Clear delivery practices, testing discipline, and handover you can own—documentation and observability aimed at systems your people can operate with confidence.",
  },
]

export function WhyChooseUs() {
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
        { threshold: 0.2 },
      )

      observer.observe(card)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section className="py-32 px-6 bg-[#111111] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FEA02F] to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Why Choose <span className="text-[#FEA02F]">SamariTek</span>?
          </h2>
          <p className="text-xl text-[#d1d1d1] max-w-2xl mx-auto leading-relaxed">
            Standards, innovation, and people who understand your domain—so delivery matches both the letter of what
            matters and the reality of how you work.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`group relative p-10 rounded-2xl backdrop-blur-sm transition-all duration-700 ${
                  visibleCards.has(index)
                    ? "opacity-100 translate-x-0"
                    : index % 2 === 0
                      ? "opacity-0 -translate-x-10"
                      : "opacity-0 translate-x-10"
                }`}
                style={{
                  background: "rgba(235, 217, 200, 0.05)",
                  border: "1px solid rgba(235, 217, 200, 0.15)",
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Icon with glow */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-[#FEA02F] rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-full border-2 border-[#FEA02F] flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-[#FEA02F]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#FEA02F] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-lg text-[#d1d1d1] leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
