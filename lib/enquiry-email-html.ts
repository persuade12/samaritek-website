import type { OfferPackage } from "@/lib/offer-packages"
import type { GetStartedService, QuestionField } from "@/lib/get-started-services"

/** Safe for HTML body text (not attributes). */
export function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/\r\n|\r|\n/g, "<br>")
}

function displayAnswerValue(questions: QuestionField[], questionId: string, raw: string): string {
  const q = questions.find((x) => x.id === questionId)
  if (!q || !raw) return raw || "—"
  if (q.type === "select" && q.options) {
    const opt = q.options.find((o) => o.value === raw)
    return opt?.label ?? raw
  }
  return raw
}

export function buildAnswerRows(questions: QuestionField[], answers: Record<string, string>) {
  return questions.map((q) => ({
    label: q.label,
    value: displayAnswerValue(questions, q.id, answers[q.id] ?? ""),
  }))
}

const brand = {
  orange: "#FEA02F",
  orangeDeep: "#DE6600",
  cream: "#EBD9C8",
  dark: "#0a0a0a",
}

function emailShell(title: string, innerHtml: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${brand.dark};font-family:Segoe UI,system-ui,-apple-system,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${brand.dark};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px;background:linear-gradient(180deg,#1a1a1a 0%,#111 100%);border-radius:20px;border:1px solid rgba(254,160,47,0.25);overflow:hidden;">
          <tr>
            <td style="padding:28px 28px 8px 28px;text-align:center;">
              <div style="font-size:20px;font-weight:700;color:#fff;letter-spacing:-0.02em;">Samari<span style="color:${brand.orange};">Tek</span></div>
              <div style="height:3px;width:48px;background:linear-gradient(90deg,${brand.orange},${brand.orangeDeep});border-radius:2px;margin:14px auto 0;"></div>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 28px 32px 28px;color:${brand.cream};font-size:15px;line-height:1.6;">
              ${innerHtml}
            </td>
          </tr>
          <tr>
            <td style="padding:0 28px 24px 28px;text-align:center;font-size:12px;color:#657786;">
              Technology that serves your mission.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function buildInternalEnquiryHtml(
  service: GetStartedService,
  data: {
    name: string
    email: string
    company?: string
    message?: string
    answers: Record<string, string>
  },
) {
  const rows = buildAnswerRows(service.questions, data.answers)
  const rowsHtml = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#9ca3af;font-size:13px;width:38%;vertical-align:top;">${escapeHtml(r.label)}</td>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#fff;font-size:14px;vertical-align:top;">${escapeHtml(r.value)}</td>
      </tr>`,
    )
    .join("")

  const inner = `
    <p style="margin:0 0 20px;color:${brand.orange};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">New enquiry</p>
    <h1 style="margin:0 0 8px;color:#fff;font-size:22px;font-weight:700;">${escapeHtml(service.title)}</h1>
    <p style="margin:0 0 20px;color:${brand.cream};opacity:0.85;font-size:14px;">Submitted via the Get started form.</p>

    <div style="background:rgba(255,255,255,0.04);border-radius:14px;padding:18px 20px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08);">
      <p style="margin:0 0 6px;color:#fff;font-weight:600;font-size:15px;">${escapeHtml(data.name)}</p>
      <p style="margin:0;color:${brand.orange};font-size:14px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${brand.orange};text-decoration:none;">${escapeHtml(data.email)}</a></p>
      ${data.company ? `<p style="margin:10px 0 0;color:${brand.cream};font-size:14px;opacity:0.9;">Company: ${escapeHtml(data.company)}</p>` : ""}
    </div>

    <p style="margin:0 0 10px;color:#fff;font-weight:600;font-size:15px;">Their answers</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:20px;">${rowsHtml}</table>

    ${
      data.message
        ? `<div style="background:rgba(254,160,47,0.08);border-radius:12px;padding:16px;border:1px solid rgba(254,160,47,0.2);">
        <p style="margin:0 0 8px;color:${brand.orange};font-size:12px;font-weight:600;text-transform:uppercase;">Additional notes</p>
        <p style="margin:0;color:${brand.cream};font-size:14px;line-height:1.55;">${escapeHtml(data.message)}</p>
      </div>`
        : ""
    }
  `

  return emailShell(`Enquiry: ${service.title}`, inner)
}

export function buildInternalPackageQuoteHtml(
  pkg: OfferPackage,
  data: {
    name: string
    email: string
    company?: string
    message?: string
    answers: Record<string, string>
  },
) {
  const rows = buildAnswerRows(pkg.questions, data.answers)
  const rowsHtml = rows
    .map(
      (r) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#9ca3af;font-size:13px;width:38%;vertical-align:top;">${escapeHtml(r.label)}</td>
        <td style="padding:10px 0;border-bottom:1px solid rgba(255,255,255,0.08);color:#fff;font-size:14px;vertical-align:top;">${escapeHtml(r.value)}</td>
      </tr>`,
    )
    .join("")

  const inner = `
    <p style="margin:0 0 20px;color:${brand.orange};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Package quote request</p>
    <h1 style="margin:0 0 8px;color:#fff;font-size:22px;font-weight:700;">${escapeHtml(pkg.title)}</h1>
    <p style="margin:0 0 24px;color:${brand.cream};opacity:0.85;font-size:14px;">Submitted via the Packages page (Get started flow).</p>

    <div style="background:rgba(255,255,255,0.04);border-radius:14px;padding:18px 20px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08);">
      <p style="margin:0 0 6px;color:#fff;font-weight:600;font-size:15px;">${escapeHtml(data.name)}</p>
      <p style="margin:0;color:${brand.orange};font-size:14px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${brand.orange};text-decoration:none;">${escapeHtml(data.email)}</a></p>
      ${data.company ? `<p style="margin:10px 0 0;color:${brand.cream};font-size:14px;opacity:0.9;">Company: ${escapeHtml(data.company)}</p>` : ""}
    </div>

    <p style="margin:0 0 10px;color:#fff;font-weight:600;font-size:15px;">Their answers</p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:20px;">${rowsHtml}</table>

    ${
      data.message
        ? `<div style="background:rgba(254,160,47,0.08);border-radius:12px;padding:16px;border:1px solid rgba(254,160,47,0.2);">
        <p style="margin:0 0 8px;color:${brand.orange};font-size:12px;font-weight:600;text-transform:uppercase;">Additional notes</p>
        <p style="margin:0;color:${brand.cream};font-size:14px;line-height:1.55;">${escapeHtml(data.message)}</p>
      </div>`
        : ""
    }
  `

  return emailShell(`Quote: ${pkg.title}`, inner)
}

export function buildInternalPackageQuotePlain(pkg: OfferPackage, data: Parameters<typeof buildInternalPackageQuoteHtml>[1]) {
  const rows = buildAnswerRows(pkg.questions, data.answers)
  return [
    `Package quote — ${pkg.title}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    ...(data.company ? [`Company: ${data.company}`] : []),
    ...(data.message ? [`Notes:\n${data.message}`] : []),
    "",
    ...rows.map((r) => `${r.label}: ${r.value}`),
  ].join("\n")
}

export function buildConfirmationHtml(name: string, serviceTitle: string, enquiriesEmail: string) {
  const inner = `
    <p style="margin:0 0 16px;color:#fff;font-size:22px;font-weight:700;">Thank you, ${escapeHtml((name.trim().split(/\s+/)[0] || name).trim())}</p>
    <p style="margin:0 0 20px;color:${brand.cream};font-size:15px;line-height:1.65;">
      We have safely received your enquiry about <strong style="color:#fff;">${escapeHtml(serviceTitle)}</strong>.
      Our team will review it and get back to you as soon as we can.
    </p>
    <div style="background:rgba(254,160,47,0.1);border-radius:14px;padding:18px 20px;border:1px solid rgba(254,160,47,0.25);margin-bottom:20px;">
      <p style="margin:0 0 8px;color:${brand.orange};font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">What happens next</p>
      <p style="margin:0;color:${brand.cream};font-size:14px;line-height:1.6;">
        If anything changes or you want to add detail, simply reply to this email or write to us at
        <a href="mailto:${escapeHtml(enquiriesEmail)}" style="color:${brand.orange};font-weight:600;text-decoration:none;">${escapeHtml(enquiriesEmail)}</a>.
      </p>
    </div>
    <p style="margin:0;color:#657786;font-size:13px;">— SamariTek</p>
  `
  return emailShell("We received your enquiry", inner)
}

export function buildInternalEnquiryPlain(service: GetStartedService, data: Parameters<typeof buildInternalEnquiryHtml>[1]) {
  const rows = buildAnswerRows(service.questions, data.answers)
  return [
    `New enquiry — ${service.title}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    ...(data.company ? [`Company: ${data.company}`] : []),
    ...(data.message ? [`Notes:\n${data.message}`] : []),
    "",
    ...rows.map((r) => `${r.label}: ${r.value}`),
  ].join("\n")
}

export function buildConfirmationPlain(name: string, serviceTitle: string, enquiriesEmail: string) {
  return `Hi ${name},

Thank you for contacting SamariTek. We have received your enquiry about "${serviceTitle}" and will get back to you soon.

If you need to add details, reply to this email or contact us at ${enquiriesEmail}.

— SamariTek`
}

export function buildInternalContactHtml(data: {
  name: string
  email: string
  company?: string
  subjectLabel: string
  message: string
}) {
  const inner = `
    <p style="margin:0 0 20px;color:${brand.orange};font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Contact form</p>
    <h1 style="margin:0 0 8px;color:#fff;font-size:22px;font-weight:700;">${escapeHtml(data.subjectLabel)}</h1>
    <p style="margin:0 0 20px;color:${brand.cream};opacity:0.85;font-size:14px;">Submitted via the Contact page.</p>

    <div style="background:rgba(255,255,255,0.04);border-radius:14px;padding:18px 20px;margin-bottom:22px;border:1px solid rgba(255,255,255,0.08);">
      <p style="margin:0 0 6px;color:#fff;font-weight:600;font-size:15px;">${escapeHtml(data.name)}</p>
      <p style="margin:0;color:${brand.orange};font-size:14px;"><a href="mailto:${escapeHtml(data.email)}" style="color:${brand.orange};text-decoration:none;">${escapeHtml(data.email)}</a></p>
      ${data.company ? `<p style="margin:10px 0 0;color:${brand.cream};font-size:14px;opacity:0.9;">Company: ${escapeHtml(data.company)}</p>` : ""}
    </div>

    <div style="background:rgba(254,160,47,0.08);border-radius:12px;padding:16px;border:1px solid rgba(254,160,47,0.2);">
      <p style="margin:0 0 8px;color:${brand.orange};font-size:12px;font-weight:600;text-transform:uppercase;">Message</p>
      <p style="margin:0;color:${brand.cream};font-size:14px;line-height:1.55;">${escapeHtml(data.message)}</p>
    </div>
  `

  return emailShell(`Contact: ${data.subjectLabel}`, inner)
}

export function buildInternalContactPlain(data: Parameters<typeof buildInternalContactHtml>[0]) {
  return [
    `Contact form — ${data.subjectLabel}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    ...(data.company ? [`Company: ${data.company}`] : []),
    "",
    "Message:",
    data.message,
  ].join("\n")
}
