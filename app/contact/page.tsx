"use client"

import type React from "react"

import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    // Handle form submission
  }

  return (
    <main className="min-h-screen bg-black">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Let's <span className="text-[#FEA02F]">Connect</span>
            </h1>
            <p className="text-xl text-[#EBD9C8]/80 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with world-class technology? Let's discuss your project and explore how
              we can help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-[#EBD9C8]/80 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-[#EBD9C8]/40 focus:outline-none focus:border-[#FEA02F] transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#EBD9C8]/80 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-[#EBD9C8]/40 focus:outline-none focus:border-[#FEA02F] transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#EBD9C8]/80 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-[#EBD9C8]/40 focus:outline-none focus:border-[#FEA02F] transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#EBD9C8]/80 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-[#EBD9C8]/40 focus:outline-none focus:border-[#FEA02F] transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#FEA02F] to-[#DE6600] hover:from-[#DE6600] hover:to-[#FEA02F] text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-[#FEA02F]/30 hover:shadow-[#FEA02F]/50 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FEA02F] to-[#DE6600] flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-[#EBD9C8]/70">hello@samaritek.com</p>
                <p className="text-[#EBD9C8]/70">support@samaritek.com</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FEA02F] to-[#DE6600] flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-[#EBD9C8]/70">+1 (555) 123-4567</p>
                <p className="text-[#EBD9C8]/70">Mon-Fri, 9am-6pm EST</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FEA02F] to-[#DE6600] flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Office</h3>
                <p className="text-[#EBD9C8]/70">123 Tech Street</p>
                <p className="text-[#EBD9C8]/70">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
