import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      title: "Web Applications",
      description:
        "Enterprise-grade web applications built with modern frameworks, optimized for performance and scalability.",
      features: ["Custom Web Development", "Progressive Web Apps", "API Development", "Cloud Architecture"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "Mobile Solutions",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.",
      features: ["iOS & Android Development", "React Native Apps", "UI/UX Design", "App Store Optimization"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      ),
    },
    {
      title: "E-Commerce",
      description: "High-converting e-commerce platforms with seamless checkout experiences and powerful admin tools.",
      features: ["Online Store Development", "Payment Integration", "Inventory Management", "Marketing Automation"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      ),
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to power your digital transformation.",
      features: ["Cloud Migration", "DevOps Automation", "Serverless Architecture", "Infrastructure as Code"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      ),
    },
    {
      title: "Digital Consulting",
      description: "Strategic technology consulting to align your digital initiatives with business objectives.",
      features: ["Technology Strategy", "Digital Transformation", "Architecture Design", "Code Reviews"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      ),
    },
    {
      title: "AI & ML Integration",
      description: "Intelligent solutions powered by artificial intelligence and machine learning technologies.",
      features: ["AI Model Development", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
        />
      ),
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-[#FEA02F]">Services</span>
            </h1>
            <p className="text-xl text-[#EBD9C8]/80 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions tailored to your business needs. From concept to deployment, we deliver
              excellence at every stage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-[#FEA02F]/30 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FEA02F]/20 to-[#DE6600]/20 border border-[#FEA02F]/30 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#FEA02F] group-hover:to-[#DE6600] transition-all duration-300">
                  <svg
                    className="w-8 h-8 text-[#FEA02F] group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {service.icon}
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-[#EBD9C8]/70 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[#EBD9C8]/60">
                      <svg className="w-4 h-4 text-[#FEA02F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FEA02F] to-[#DE6600] hover:from-[#DE6600] hover:to-[#FEA02F] text-white px-12 py-7 text-lg font-semibold rounded-full shadow-2xl shadow-[#FEA02F]/30 hover:shadow-[#FEA02F]/50 hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
