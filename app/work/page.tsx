import { Footer } from "@/components/footer"

export default function WorkPage() {
  const projects = [
    {
      title: "FinanceFlow",
      category: "Fintech Web App",
      description: "Enterprise financial management platform serving 50,000+ users",
      image: "/modern-fintech-dashboard-with-charts.jpg",
      tags: ["React", "Node.js", "AWS"],
    },
    {
      title: "ShopSphere",
      category: "E-Commerce Platform",
      description: "Multi-vendor marketplace generating $2M+ monthly revenue",
      image: "/modern-ecommerce-interface.png",
      tags: ["Next.js", "Stripe", "PostgreSQL"],
    },
    {
      title: "HealthHub",
      category: "Healthcare Mobile App",
      description: "Telemedicine app connecting patients with healthcare providers",
      image: "/healthcare-mobile-app.png",
      tags: ["React Native", "Firebase", "HIPAA"],
    },
    {
      title: "LogiTrack",
      category: "Logistics Dashboard",
      description: "Real-time fleet tracking system for enterprise logistics",
      image: "/logistics-tracking-dashboard.png",
      tags: ["Vue.js", "Python", "Google Maps"],
    },
    {
      title: "EduPlatform",
      category: "EdTech Solution",
      description: "Interactive learning platform with 100k+ active students",
      image: "/online-learning-platform.png",
      tags: ["Next.js", "WebRTC", "MongoDB"],
    },
    {
      title: "PropConnect",
      category: "Real Estate Platform",
      description: "Property management system streamlining rental operations",
      image: "/real-estate-property-dashboard.jpg",
      tags: ["Angular", "Django", "Redis"],
    },
  ]

  return (
    <main className="min-h-screen bg-black">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-[#FEA02F]">Work</span>
            </h1>
            <p className="text-xl text-[#EBD9C8]/80 max-w-3xl mx-auto leading-relaxed">
              Transformative digital solutions that drive measurable business impact. Here's a glimpse of the innovative
              projects we've delivered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/3]">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <p className="text-[#FEA02F] text-sm font-semibold mb-2 tracking-wide">{project.category}</p>
                    <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-[#EBD9C8]/80 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
