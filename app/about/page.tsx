import type { Metadata } from "next"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about SamariTek—software and cloud engineering for organisations across Africa, built around your mission.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              About <span className="text-[#FEA02F]">SamariTek</span>
            </h1>
            <p className="text-xl text-[#EBD9C8]/80 max-w-3xl mx-auto leading-relaxed">
              We are engineers and designers focused on exceptional digital experiences for organisations across
              Africa—built for clarity, performance, and lasting business impact.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-32">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FEA02F] to-[#DE6600] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-lg text-[#EBD9C8]/70 leading-relaxed">
                To empower businesses with world-class software solutions that transform ideas into reality, delivered
                with precision, innovation, and unwavering commitment to excellence.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FEA02F] to-[#DE6600] flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-lg text-[#EBD9C8]/70 leading-relaxed">
                To be a trusted technology partner for ambitious organisations across Africa, recognized for our
                exceptional craftsmanship and transformative impact.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="mb-32">
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Excellence", desc: "We obsess over every detail to deliver exceptional quality" },
                { title: "Innovation", desc: "We push boundaries and embrace cutting-edge technologies" },
                { title: "Integrity", desc: "We build trust through transparency and ethical practices" },
                { title: "Collaboration", desc: "We partner with clients to achieve shared success" },
                { title: "Impact", desc: "We measure success by the value we create for businesses" },
                { title: "Growth", desc: "We continuously learn and evolve with the industry" },
              ].map((value, i) => (
                <div key={i} className="text-center p-8">
                  <h3 className="text-2xl font-bold text-[#FEA02F] mb-4">{value.title}</h3>
                  <p className="text-[#EBD9C8]/70 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
