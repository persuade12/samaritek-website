import { NextResponse } from "next/server"
import {
  buildConfirmationHtml,
  buildConfirmationPlain,
  buildInternalEnquiryHtml,
  buildInternalEnquiryPlain,
  buildInternalPackageQuoteHtml,
  buildInternalPackageQuotePlain,
} from "@/lib/enquiry-email-html"
import { buildEnquiryBodySchema, getServiceBySlug } from "@/lib/get-started-services"
import { enforceMailRateLimit } from "@/lib/mail-rate-limit"
import { buildPackageEnquiryBodySchema, getOfferPackageBySlug } from "@/lib/offer-packages"
import { createSmtpTransporter, mailFrom, mailToEnquiries, smtpConfigured } from "@/lib/smtp-transporter"

export const runtime = "nodejs"

export async function POST(req: Request) {
  const limited = enforceMailRateLimit(req, "enquiry")
  if (limited) return limited

  if (!smtpConfigured()) {
    return NextResponse.json(
      { error: "Email is not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS on the server." },
      { status: 503 },
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 })
  }

  const raw = body as Record<string, unknown>
  const serviceSlug = typeof raw.serviceSlug === "string" ? raw.serviceSlug : ""
  const packageSlug = typeof raw.packageSlug === "string" ? raw.packageSlug : ""

  const service = getServiceBySlug(serviceSlug)
  const pkg = getOfferPackageBySlug(packageSlug)

  if (service && pkg) {
    return NextResponse.json({ error: "Send either serviceSlug or packageSlug, not both" }, { status: 400 })
  }

  const transporter = createSmtpTransporter()
  const from = mailFrom()
  const toEnquiries = mailToEnquiries()

  if (pkg) {
    const payload = { ...raw, packageSlug: pkg.slug }
    const parsed = buildPackageEnquiryBodySchema(pkg).safeParse(payload)
    if (!parsed.success) {
      return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 })
    }

    const data = parsed.data

    const mailData = {
      name: data.name,
      email: data.email,
      company: data.company || undefined,
      message: data.message || undefined,
      answers: data.answers as Record<string, string>,
    }

    const confirmTitle = `${pkg.title} (package quote)`
    const htmlInternal = buildInternalPackageQuoteHtml(pkg, mailData)
    const textInternal = buildInternalPackageQuotePlain(pkg, mailData)
    const htmlConfirm = buildConfirmationHtml(data.name, confirmTitle, toEnquiries)
    const textConfirm = buildConfirmationPlain(data.name, confirmTitle, toEnquiries)

    try {
      await transporter.sendMail({
        from,
        to: toEnquiries,
        replyTo: data.email,
        subject: `[SamariTek quote] ${pkg.title}`,
        text: textInternal,
        html: htmlInternal,
      })

      await transporter.sendMail({
        from,
        to: data.email,
        subject: "We received your quote request — SamariTek",
        text: textConfirm,
        html: htmlConfirm,
      })
    } catch (err) {
      console.error("[api/enquiry]", err)
      return NextResponse.json({ error: "Could not send email. Please try again later." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  }

  if (!service) {
    return NextResponse.json({ error: "Unknown service or package" }, { status: 400 })
  }

  const payload = {
    ...raw,
    serviceSlug: service.slug,
  }

  const parsed = buildEnquiryBodySchema(service).safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 })
  }

  const data = parsed.data

  const mailData = {
    name: data.name,
    email: data.email,
    company: data.company || undefined,
    message: data.message || undefined,
    answers: data.answers as Record<string, string>,
  }

  const htmlInternal = buildInternalEnquiryHtml(service, mailData)
  const textInternal = buildInternalEnquiryPlain(service, mailData)
  const htmlConfirm = buildConfirmationHtml(data.name, service.title, toEnquiries)
  const textConfirm = buildConfirmationPlain(data.name, service.title, toEnquiries)

  try {
    await transporter.sendMail({
      from,
      to: toEnquiries,
      replyTo: data.email,
      subject: `[SamariTek enquiry] ${service.title}`,
      text: textInternal,
      html: htmlInternal,
    })

    await transporter.sendMail({
      from,
      to: data.email,
      subject: "We received your enquiry — SamariTek",
      text: textConfirm,
      html: htmlConfirm,
    })
  } catch (err) {
    console.error("[api/enquiry]", err)
    return NextResponse.json({ error: "Could not send email. Please try again later." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
