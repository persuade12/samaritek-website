"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  GET_STARTED_SERVICES,
  buildAnswersSchema,
  buildEnquiryBodySchema,
  getServiceBySlug,
  type GetStartedService,
} from "@/lib/get-started-services"

type Step = "pick" | "intro" | "questions" | "contact" | "done"

function initialAnswers(service: GetStartedService): Record<string, string> {
  return Object.fromEntries(
    service.questions.map((q) => {
      if (q.type === "select" && q.required && q.options?.[0]) {
        return [q.id, q.options[0].value]
      }
      return [q.id, ""]
    }),
  )
}

export function GetStartedWizard() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [step, setStep] = useState<Step>("pick")
  const [service, setService] = useState<GetStartedService | null>(null)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const [clientError, setClientError] = useState<string | null>(null)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const applyServiceFromUrl = useCallback(() => {
    const slug = searchParams.get("service")
    const found = getServiceBySlug(slug)
    if (found) {
      setService(found)
      setStep("intro")
      setAnswers(initialAnswers(found))
      setClientError(null)
    } else if (slug) {
      setService(null)
      setStep("pick")
      setClientError("That service link is not recognised. Choose a service below.")
    } else {
      setService(null)
      setStep("pick")
      setClientError(null)
    }
  }, [searchParams])

  useEffect(() => {
    applyServiceFromUrl()
  }, [applyServiceFromUrl])

  const selectService = (svc: GetStartedService) => {
    setService(svc)
    setAnswers(initialAnswers(svc))
    setClientError(null)
    setSubmitError(null)
    router.push(`/get-started?service=${encodeURIComponent(svc.slug)}`, { scroll: false })
    setStep("intro")
  }

  const changeService = () => {
    setService(null)
    setStep("pick")
    router.push("/get-started", { scroll: false })
  }

  const goToQuestions = () => {
    if (!service) return
    setStep("questions")
  }

  const goToContact = () => {
    if (!service) return
    const parsed = buildAnswersSchema(service).safeParse(answers)
    if (!parsed.success) {
      setClientError("Please complete all required questions.")
      return
    }
    setClientError(null)
    setStep("contact")
  }

  const submit = async () => {
    if (!service) return
    setSubmitError(null)
    const payload = {
      serviceSlug: service.slug,
      answers,
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      message: message.trim(),
      _trap: honeypot,
    }
    const parsed = buildEnquiryBodySchema(service).safeParse(payload)
    if (!parsed.success) {
      const msg =
        parsed.error.issues[0]?.message ||
        "Please check the form and try again."
      setSubmitError(msg)
      return
    }
    setLoading(true)
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      })
      const json = (await res.json().catch(() => ({}))) as { error?: string }
      if (!res.ok) {
        setSubmitError(json.error || "Something went wrong. Please try again.")
        return
      }
      setStep("done")
    } catch {
      setSubmitError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const setAnswer = (id: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <main className="min-h-screen bg-black">
      <section className="relative pt-28 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FEA02F]/5 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
              Get <span className="text-[#FEA02F]">started</span>
            </h1>
            <p className="text-[#EBD9C8]/80">
              {step === "done"
                ? "You are all set."
                : "Pick how we can help, answer a few questions, and we will follow up by email."}
            </p>
          </div>

          {/* Progress: overview → questions → details (hidden on service picker) */}
          {service && step !== "done" && (
            <div className="flex justify-center gap-2 mb-10">
              {(["intro", "questions", "contact"] as const).map((s, i) => {
                const order = ["intro", "questions", "contact"] as const
                const idx = order.indexOf(step as (typeof order)[number])
                const current = step === s
                const past = idx > i
                return (
                  <div
                    key={s}
                    className={`h-1.5 flex-1 max-w-[5rem] rounded-full transition-colors ${
                      current || past ? "bg-[#FEA02F]" : "bg-white/10"
                    }`}
                    title={s}
                  />
                )
              })}
            </div>
          )}

          {clientError && (
            <p className="mb-6 text-center text-sm text-red-400/90 bg-red-400/10 border border-red-400/20 rounded-xl py-3 px-4">
              {clientError}
            </p>
          )}

          {step === "pick" && (
            <div className="space-y-4">
              <p className="text-center text-[#EBD9C8]/70 text-sm mb-6">Choose a service to continue.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {GET_STARTED_SERVICES.map((svc) => (
                  <button
                    key={svc.slug}
                    type="button"
                    onClick={() => selectService(svc)}
                    className="text-left rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-[#FEA02F]/40 p-5 transition-all"
                  >
                    <span className="font-semibold text-white">{svc.title}</span>
                    <span className="block text-xs text-[#657786] mt-1 line-clamp-2">{svc.intro[0]}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === "intro" && service && (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
              <div className="space-y-4 text-[#EBD9C8]/85 leading-relaxed mb-8">
                {service.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="button"
                  onClick={goToQuestions}
                  className="bg-gradient-to-r from-[#FEA02F] to-[#DE6600] hover:from-[#DE6600] hover:to-[#FEA02F] text-white rounded-xl px-8"
                >
                  Continue to questions
                </Button>
                <Button type="button" variant="ghost" onClick={changeService} className="text-[#EBD9C8] hover:text-white">
                  Choose a different service
                </Button>
              </div>
            </div>
          )}

          {step === "questions" && service && (
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 space-y-6">
              <h2 className="text-xl font-bold text-white">A few questions</h2>
              {service.questions.map((q) => (
                <div key={q.id}>
                  <Label className="text-[#EBD9C8]/90 mb-2 block">
                    {q.label}
                    {q.required ? <span className="text-[#FEA02F]"> *</span> : null}
                  </Label>
                  {q.type === "select" && q.options ? (
                    <select
                      value={answers[q.id] ?? ""}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#FEA02F]"
                    >
                      {!q.required && <option value="">Select…</option>}
                      {q.options.map((opt) => (
                        <option key={opt.value} value={opt.value} className="bg-black">
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : q.type === "textarea" ? (
                    <textarea
                      value={answers[q.id] ?? ""}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                      rows={4}
                      placeholder={q.placeholder}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-[#EBD9C8]/40 focus:outline-none focus:border-[#FEA02F] resize-none"
                    />
                  ) : (
                    <input
                      type="text"
                      value={answers[q.id] ?? ""}
                      onChange={(e) => setAnswer(q.id, e.target.value)}
                      placeholder={q.placeholder}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-[#EBD9C8]/40 focus:outline-none focus:border-[#FEA02F]"
                    />
                  )}
                </div>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button type="button" variant="ghost" onClick={() => setStep("intro")} className="text-[#EBD9C8]">
                  Back
                </Button>
                <Button
                  type="button"
                  onClick={goToContact}
                  className="bg-gradient-to-r from-[#FEA02F] to-[#DE6600] text-white rounded-xl"
                >
                  Continue
                </Button>
              </div>
            </div>
          )}

          {step === "contact" && service && (
            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 md:p-10 space-y-5">
              <h2 className="text-xl font-bold text-white">Your details</h2>
              {/* Honeypot: never use name="website" — autofill fills it and fails validation */}
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
                <Label className="text-[#EBD9C8]/80 mb-2 block">Name *</Label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#FEA02F]"
                  required
                />
              </div>
              <div>
                <Label className="text-[#EBD9C8]/80 mb-2 block">Email *</Label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#FEA02F]"
                  required
                />
              </div>
              <div>
                <Label className="text-[#EBD9C8]/80 mb-2 block">Company</Label>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#FEA02F]"
                />
              </div>
              <div>
                <Label className="text-[#EBD9C8]/80 mb-2 block">Anything else?</Label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#FEA02F] resize-none"
                />
              </div>
              {submitError && <p className="text-sm text-red-400">{submitError}</p>}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button type="button" variant="ghost" onClick={() => setStep("questions")} className="text-[#EBD9C8]">
                  Back
                </Button>
                <Button
                  type="button"
                  disabled={loading}
                  onClick={submit}
                  className="bg-gradient-to-r from-[#FEA02F] to-[#DE6600] text-white rounded-xl"
                >
                  {loading ? "Sending…" : "Submit enquiry"}
                </Button>
              </div>
            </div>
          )}

          {step === "done" && (
            <div className="rounded-3xl border border-[#FEA02F]/30 bg-[#FEA02F]/5 p-10 text-center space-y-4">
              <h2 className="text-2xl font-bold text-white">Thank you</h2>
              <p className="text-[#EBD9C8]/90 leading-relaxed">
                We have received your enquiry. A confirmation has been sent to <span className="text-[#FEA02F]">{email}</span>
                . Our team will get back to you soon.
              </p>
              <Button asChild variant="outline" className="border-white/20 text-white mt-4 rounded-xl">
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
