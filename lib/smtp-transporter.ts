import nodemailer from "nodemailer"

export function smtpConfigured(): boolean {
  return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS)
}

export function createSmtpTransporter() {
  const port = Number(process.env.SMTP_PORT || "465")
  const secure = process.env.SMTP_SECURE === "true" || port === 465
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export function mailFrom(): string {
  return process.env.MAIL_FROM || '"SamariTek" <engine@samaritek.co.zw>'
}

export function mailToEnquiries(): string {
  return process.env.MAIL_TO_ENQUIRIES || "enquiries@samaritek.co.zw"
}
