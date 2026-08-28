"use client"

import type React from "react"
import { useState } from "react"

import { ContactSubjectCombobox } from "@/components/contact-subject-combobox"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { contactFormSchema } from "@/lib/contact-form-schema"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const [honeypot, setHoneypot] = useState("")
  const [subjectError, setSubjectError] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!formData.subject) {
      setSubjectError(true)
      return
    }
    setSubjectError(false)
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      company: formData.company.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
      _trap: honeypot,
    }

    const parsed = contactFormSchema.safeParse(payload)
    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message || "Please check the form and try again."
      setSubmitError(msg)
      return
    }

    setSubmitError(null)
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string; retryAfterSec?: number }
      if (res.status === 429) {
        setSubmitError(
          json.retryAfterSec
            ? `Too many attempts. Please wait about ${json.retryAfterSec} seconds and try again.`
            : json.error || "Too many attempts. Please try again later.",
        )
        return
      }
      if (!res.ok) {
        setSubmitError(json.error || "Something went wrong. Please try again.")
        return
      }
      setSuccess(true)
      setFormData({ name: "", email: "", company: "", subject: "", message: "" })
      setHoneypot("")
    } catch {
      setSubmitError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-black">
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Contact <span className="text-[#FEA02F]">SamariTek</span>
            </h1>
            <p className="text-xl text-[#EBD9C8]/80 max-w-3xl mx-auto leading-relaxed">
              Whether you are scaling a product or modernising operations, we help teams across Africa turn ideas into
              reliable software. Share your requirements or objectives—we will respond on{" "}
              <a href="mailto:info@samaritek.co.zw" className="text-[#FEA02F] hover:underline">
                info@samaritek.co.zw
              </a>
              .
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10">
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>

              {success ? (
                <div className="rounded-2xl border border-[#FEA02F]/30 bg-[#FEA02F]/5 p-8 text-center space-y-4">
                  <p className="text-lg font-semibold text-white">Message sent</p>
                  <p className="text-[#EBD9C8]/90 text-sm leading-relaxed">
                    Thank you. We have emailed you a short confirmation. Our team will read your message and reply as
                    soon as we can.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-white/20 text-white rounded-xl"
                    onClick={() => setSuccess(false)}
                  >
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  <input
                    type="text"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="absolute -left-[9999px] h-px w-px opacity-0"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden
                  />

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
                    <label className="block text-sm font-medium text-[#EBD9C8]/80 mb-2">Subject</label>
                    <ContactSubjectCombobox
                      value={formData.subject}
                      invalid={subjectError}
                      onChange={(subject) => {
                        setSubjectError(false)
                        setFormData({ ...formData, subject })
                      }}
                    />
                    {subjectError ? (
                      <p className="mt-1.5 text-xs text-red-400">Please choose a subject from the list.</p>
                    ) : (
                      <p className="mt-1.5 text-xs text-[#657786]">Pick what this is about, or search by service name.</p>
                    )}
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

                  {submitError ? <p className="text-sm text-red-400">{submitError}</p> : null}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#FEA02F] to-[#DE6600] hover:from-[#DE6600] hover:to-[#FEA02F] text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-[#FEA02F]/30 hover:shadow-[#FEA02F]/50 transition-all duration-300 disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Send Message"}
                  </Button>
                </form>
              )}
            </div>

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
                <a
                  href="mailto:info@samaritek.co.zw"
                  className="text-[#FEA02F] hover:underline block font-medium"
                >
                  info@samaritek.co.zw
                </a>
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
                <h3 className="text-xl font-bold text-white mb-2">Where we work</h3>
                <p className="text-[#EBD9C8]/70 leading-relaxed">
                  Remote-first engineering, partnering with organisations across the continent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
