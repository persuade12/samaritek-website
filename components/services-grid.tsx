"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Code, Cloud, Globe, Link as LinkIcon, CreditCard, Wrench, MessageSquare, ClipboardList } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Software Development",
    description: "Custom applications built for your unique needs, from concept to deployment.",
    getStartedSlug: "software-development",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Hosting",
    description: "Scalable, secure infrastructure that grows with your business.",
    getStartedSlug: "cloud-solutions",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Beautiful, high-performance websites that captivate and convert.",
    getStartedSlug: "web-applications",
  },
  {
    icon: LinkIcon,
    title: "Integrations",
    description: "Seamless system connections that make your tools work together.",
    getStartedSlug: "integrations",
  },
  {
    icon: CreditCard,
    title: "Payment Integrations",
    description: "Secure, smooth transaction experiences your customers will trust.",
    getStartedSlug: "payment-integrations",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Tailored technology for unique challenges and opportunities.",
    getStartedSlug: "custom-solutions",
  },
  {
    icon: MessageSquare,
    title: "Consultancy",
    description: "Expert guidance for your tech journey, every step of the way.",
    getStartedSlug: "digital-consulting",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Professional delivery, every time. Your success is our mission.",
    getStartedSlug: "project-management",
  },
]

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
    <section id="our-solutions" className="scroll-mt-20 py-32 px-6 bg-[#0a0a0a] relative">
      {/* Section header */}
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
          Our <span className="text-[#FEA02F]">Solutions</span>
        </h2>
        <p className="text-xl text-[#d1d1d1] max-w-2xl mx-auto leading-relaxed">
          Technology services for organisations across Africa—from discovery to deployment and beyond.
        </p>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className={`h-full transition-all duration-500 ${visibleCards.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Link
                href={`/get-started?service=${encodeURIComponent(service.getStartedSlug)}`}
                className="group relative flex h-full min-h-[17rem] flex-col rounded-2xl p-8 backdrop-blur-sm transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  background: "rgba(235, 217, 200, 0.03)",
                  border: "1px solid rgba(235, 217, 200, 0.1)",
                }}
              >
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#DE6600]/20 to-transparent pointer-events-none" />

              {/* Icon */}
              <div className="relative mb-6 shrink-0">
                <div className="w-14 h-14 rounded-xl bg-[#FEA02F]/10 flex items-center justify-center group-hover:bg-[#FEA02F]/20 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-[#FEA02F] group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FEA02F] transition-colors duration-300 shrink-0">
                {service.title}
              </h3>
              <p className="flex-1 text-[#d1d1d1] leading-relaxed mb-4">{service.description}</p>

              {/* Learn more link */}
              <div className="mt-auto flex shrink-0 items-center gap-2 text-[#FEA02F] font-semibold group-hover:gap-3 transition-all duration-300">
                <span>Get started</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}
