import { z } from "zod"
import { CONTACT_SUBJECT_OPTIONS } from "@/lib/contact-subjects"

const subjectValues = CONTACT_SUBJECT_OPTIONS.map((o) => o.value) as [string, ...string[]]

export const contactFormSchema = z
  .object({
    name: z.string().trim().min(1, "Name is required").max(120),
    email: z.string().email().max(254),
    company: z.union([z.string().max(200), z.literal("")]).optional(),
    subject: z.enum(subjectValues),
    message: z.string().trim().min(1, "Message is required").max(8000),
    /** Honeypot — must stay empty. */
    _trap: z.string().optional(),
  })
  .strict()
  .refine((d) => !d._trap?.trim(), {
    message: "Leave the hidden field empty (autofill may have triggered—try clearing it or use another browser).",
    path: ["_trap"],
  })

export type ContactFormInput = z.infer<typeof contactFormSchema>
