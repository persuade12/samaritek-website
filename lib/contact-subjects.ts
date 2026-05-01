import { GET_STARTED_SERVICES } from "@/lib/get-started-services"

/** Subjects for the contact form (searchable). Values are stable for mail or CRM. */
export const CONTACT_SUBJECT_OPTIONS: { value: string; label: string }[] = [
  { value: "general", label: "General enquiry" },
  ...GET_STARTED_SERVICES.map((s) => ({ value: s.slug, label: s.title })),
  { value: "other", label: "Other — I'll describe below" },
]

export function getContactSubjectLabel(value: string): string {
  return CONTACT_SUBJECT_OPTIONS.find((o) => o.value === value)?.label ?? value
}
