import { NextResponse } from "next/server"
import {
  buildConfirmationHtml,
  buildConfirmationPlain,
  buildInternalContactHtml,
  buildInternalContactPlain,
} from "@/lib/enquiry-email-html"
import { contactFormSchema } from "@/lib/contact-form-schema"
import { getContactSubjectLabel } from "@/lib/contact-subjects"
import { enforceMailRateLimit } from "@/lib/mail-rate-limit"
import { createSmtpTransporter, mailFrom, mailToEnquiries, smtpConfigured } from "@/lib/smtp-transporter"

export const runtime = "nodejs"

export async function POST(req: Request) {
  const limited = enforceMailRateLimit(req, "contact")
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

  const parsed = contactFormSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed", issues: parsed.error.flatten() }, { status: 400 })
  }

  const data = parsed.data
  const subjectLabel = getContactSubjectLabel(data.subject)
  const transporter = createSmtpTransporter()
  const from = mailFrom()
  const toEnquiries = mailToEnquiries()

  const mailData = {
    name: data.name,
    email: data.email,
    company: data.company || undefined,
    subjectLabel,
    message: data.message,
  }

  const htmlInternal = buildInternalContactHtml(mailData)
  const textInternal = buildInternalContactPlain(mailData)
  const htmlConfirm = buildConfirmationHtml(data.name, subjectLabel, toEnquiries)
  const textConfirm = buildConfirmationPlain(data.name, subjectLabel, toEnquiries)

  try {
    await transporter.sendMail({
      from,
      to: toEnquiries,
      replyTo: data.email,
      subject: `[SamariTek contact] ${subjectLabel}`,
      text: textInternal,
      html: htmlInternal,
    })

    await transporter.sendMail({
      from,
      to: data.email,
      subject: "We received your message — SamariTek",
      text: textConfirm,
      html: htmlConfirm,
    })
  } catch (err) {
    console.error("[api/contact]", err)
    return NextResponse.json({ error: "Could not send email. Please try again later." }, { status: 500 })
  }

  return NextResponse.json({ ok: true })
}
