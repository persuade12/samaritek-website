import { z } from "zod"

export type QuestionType = "text" | "textarea" | "select"

export type QuestionField = {
  id: string
  label: string
  type: QuestionType
  options?: { value: string; label: string }[]
  required?: boolean
  placeholder?: string
}

export type GetStartedService = {
  slug: string
  title: string
  intro: string[]
  questions: QuestionField[]
}

/** How customers should pay — high-level choices (no technical jargon). */
export const PAYMENT_GATEWAY_OPTIONS: { value: string; label: string }[] = [
  { value: "ecocash", label: "EcoCash" },
  { value: "omari", label: "Omari" },
  { value: "paynow", label: "Paynow" },
  { value: "stripe", label: "Stripe" },
  { value: "other", label: "Other" },
  { value: "hybrid", label: "Hybrid (more than one)" },
]

export const GET_STARTED_SERVICES: GetStartedService[] = [
  {
    slug: "web-applications",
    title: "Web applications",
    intro: [
      "We build websites and web-based tools your team or customers use in the browser—think customer portals, internal dashboards, or public sites.",
      "You tell us who it is for and what success looks like; we handle design, build, and getting it live in a way you can grow with.",
    ],
    questions: [
      {
        id: "stage",
        label: "Where are you today?",
        type: "select",
        required: true,
        options: [
          { value: "idea", label: "We are still exploring the idea" },
          { value: "mvp", label: "We have a draft or early version" },
          { value: "live", label: "Something is already live—we want to improve or replace it" },
        ],
      },
      {
        id: "users",
        label: "Who will mainly use this?",
        type: "textarea",
        required: true,
        placeholder: "e.g. our customers, branch staff, partners…",
      },
      {
        id: "timeline",
        label: "When would you like to go live?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out or in phases" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "mobile-solutions",
    title: "Mobile solutions",
    intro: [
      "We help you reach people on their phones—whether that is a customer app or a tool your field team carries every day.",
      "We keep the language simple: what the app should do, who uses it, and how you want to roll it out.",
    ],
    questions: [
      {
        id: "devices",
        label: "What phones do your users mainly have?",
        type: "select",
        required: true,
        options: [
          { value: "iphone", label: "Mostly iPhone (Apple)" },
          { value: "android", label: "Mostly Android" },
          { value: "both", label: "A mix of both" },
          { value: "unsure", label: "Not sure" },
        ],
      },
      {
        id: "reach",
        label: "How do you plan to get the app to users? (optional)",
        type: "textarea",
        required: false,
        placeholder: "e.g. public app stores, link for staff only, pre-installed on company phones…",
      },
      {
        id: "timeline",
        label: "When would you like to go live?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "e-commerce",
    title: "E-commerce",
    intro: [
      "We set up online selling—catalogue, checkout, and the back-office basics—so you can take orders with confidence.",
      "We align early on how you get paid and how you fulfil orders, so launch day is not a surprise for finance or operations.",
    ],
    questions: [
      {
        id: "volume",
        label: "Roughly how busy do you expect the shop to be?",
        type: "select",
        required: true,
        options: [
          { value: "low", label: "Starting small" },
          { value: "medium", label: "Steady orders" },
          { value: "high", label: "High volume or big sale days" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
      {
        id: "payment_gateways",
        label: "How should customers pay online?",
        type: "select",
        required: true,
        options: [...PAYMENT_GATEWAY_OPTIONS],
      },
      {
        id: "payment_notes",
        label: "If you chose Other or Hybrid, add a short note (optional)",
        type: "textarea",
        required: false,
        placeholder: "e.g. mix EcoCash and cards, or a provider not listed…",
      },
      {
        id: "timeline",
        label: "When would you like to go live?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "cloud-solutions",
    title: "Cloud solutions",
    intro: [
      "We help your systems run online reliably—hosting, backups, and day-to-day operations—without you needing to become the IT department.",
      "Whether you are moving off old servers or starting fresh, we speak in outcomes: uptime, cost, and who supports what.",
    ],
    questions: [
      {
        id: "goal",
        label: "What is the main thing you want to achieve?",
        type: "select",
        required: true,
        options: [
          { value: "migrate", label: "Move away from old servers or a current host" },
          { value: "new", label: "Host new systems in the cloud" },
          { value: "optimize", label: "Same systems—more reliability or lower cost" },
          { value: "other", label: "Something else" },
        ],
      },
      {
        id: "current",
        label: "What do you use today? (optional)",
        type: "textarea",
        required: false,
        placeholder: "e.g. company name of current host, spreadsheets, anything that helps us understand…",
      },
      {
        id: "timeline",
        label: "When would you like this in place?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "digital-consulting",
    title: "Digital consulting",
    intro: [
      "We help leaders plan and prioritise—where to invest, what to build first, and how to align teams around realistic delivery.",
      "No jargon required on your side: we translate goals into clear next steps.",
    ],
    questions: [
      {
        id: "focus",
        label: "What kind of help do you need first?",
        type: "select",
        required: true,
        options: [
          { value: "strategy", label: "Big-picture plan and roadmap" },
          { value: "review", label: "Review what we already have and what to fix" },
          { value: "vendor", label: "Choosing suppliers or build-versus-buy" },
          { value: "mixed", label: "A mix / not sure yet" },
        ],
      },
      {
        id: "context",
        label: "In your own words, what is going on?",
        type: "textarea",
        required: true,
        placeholder: "Goals, deadlines, people involved—plain language is perfect.",
      },
      {
        id: "duration",
        label: "How long do you imagine needing support?",
        type: "select",
        required: true,
        options: [
          { value: "short", label: "A short workshop or a few focused sessions" },
          { value: "medium", label: "Several weeks" },
          { value: "ongoing", label: "Ongoing advice over time" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "ai-ml",
    title: "AI & smart automation",
    intro: [
      "We help you use smart features where they genuinely save time—suggestions, sorting, or light automation—without overpromising.",
      "You stay in control: we focus on practical wins your team can trust.",
    ],
    questions: [
      {
        id: "goal",
        label: "What would “better” look like for you?",
        type: "select",
        required: true,
        options: [
          { value: "documents", label: "Less manual work with documents, emails, or reports" },
          { value: "images", label: "Help with images or media" },
          { value: "numbers", label: "Forecasts or insights from numbers / spreadsheets" },
          { value: "other", label: "Something else / we are exploring" },
        ],
      },
      {
        id: "information",
        label: "What information do you already work with today?",
        type: "textarea",
        required: true,
        placeholder: "e.g. customer lists, invoices, stock sheets—no technical detail needed.",
      },
      {
        id: "timeline",
        label: "When would you like to go live?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "software-development",
    title: "Software development",
    intro: [
      "We build custom software around how your organisation actually works—new tools, upgrades to what you have, or joining systems together.",
      "You describe the problem in business terms; we turn that into a product your team can adopt.",
    ],
    questions: [
      {
        id: "situation",
        label: "Which best describes you?",
        type: "select",
        required: true,
        options: [
          { value: "new", label: "We are starting something new from scratch" },
          { value: "improve", label: "We need to improve or replace something already running" },
          { value: "connect", label: "We need our existing tools to work together better" },
          { value: "mixed", label: "A combination" },
        ],
      },
      {
        id: "context",
        label: "Anything we should know about tools or partners you already use? (optional)",
        type: "textarea",
        required: false,
        placeholder: "e.g. accounting package, existing supplier names—only what you are comfortable sharing.",
      },
      {
        id: "timeline",
        label: "When would you like to go live?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "integrations",
    title: "Integrations",
    intro: [
      "We connect the systems you already rely on—so information flows once instead of being retyped or reconciled by hand.",
      "We describe it simply: what should sync, how often, and who cares if something breaks.",
    ],
    questions: [
      {
        id: "systems",
        label: "What needs to share information?",
        type: "textarea",
        required: true,
        placeholder: "e.g. our shop and accounting, HR and payroll—names are enough.",
      },
      {
        id: "direction",
        label: "How should updates work?",
        type: "select",
        required: true,
        options: [
          { value: "one_way", label: "Mostly one system sends updates to another" },
          { value: "two_way", label: "Both systems should stay in sync" },
          { value: "scheduled", label: "Regular imports or exports (e.g. daily)" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
      {
        id: "timeline",
        label: "When would you like this in place?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "payment-integrations",
    title: "Payment integrations",
    intro: [
      "We connect your website or software to the ways you want to get paid—checkout, receipts, and basic reporting for finance.",
      "We keep compliance and reconciliation in mind so customers have a smooth pay experience and your books stay sensible.",
    ],
    questions: [
      {
        id: "payment_gateways",
        label: "Which payment setup do you need?",
        type: "select",
        required: true,
        options: [...PAYMENT_GATEWAY_OPTIONS],
      },
      {
        id: "payment_notes",
        label: "If you chose Other or Hybrid, add a short note (optional)",
        type: "textarea",
        required: false,
        placeholder: "Describe the mix or provider…",
      },
      {
        id: "model",
        label: "How do you mainly take money today or plan to?",
        type: "select",
        required: true,
        options: [
          { value: "oneoff", label: "One-off payments (goods or services)" },
          { value: "subscription", label: "Recurring subscriptions or memberships" },
          { value: "marketplace", label: "Marketplace—money split between parties" },
          { value: "other", label: "Other" },
        ],
      },
      {
        id: "timeline",
        label: "When would you like to go live?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "custom-solutions",
    title: "Custom solutions",
    intro: [
      "When standard products do not fit, we design something around your rules, your industry, or the way your team already works.",
      "We start by understanding the outcome you need, then propose a sensible path—often in small steps.",
    ],
    questions: [
      {
        id: "problem",
        label: "What problem are you trying to solve?",
        type: "textarea",
        required: true,
      },
      {
        id: "constraints",
        label: "Any must-haves or restrictions? (optional)",
        type: "textarea",
        required: false,
        placeholder: "e.g. must work offline, regulator rules, fixed budget band…",
      },
      {
        id: "timeline",
        label: "When would you like to go live?",
        type: "select",
        required: true,
        options: [
          { value: "asap", label: "As soon as possible (under 2 months)" },
          { value: "quarter", label: "In the next 2–4 months" },
          { value: "longer", label: "Further out" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project management",
    intro: [
      "We help keep initiatives on track—clear milestones, regular check-ins, and visibility for stakeholders who are not in the weeds every day.",
      "Good delivery is as much about communication as it is about tasks.",
    ],
    questions: [
      {
        id: "scope",
        label: "What initiative needs coordinating?",
        type: "textarea",
        required: true,
      },
      {
        id: "team_size",
        label: "Roughly how many people are involved?",
        type: "select",
        required: true,
        options: [
          { value: "small", label: "A small group (about 2–5)" },
          { value: "medium", label: "A medium group (about 6–15)" },
          { value: "large", label: "A large group (15+)" },
          { value: "unsure", label: "Not sure" },
        ],
      },
      {
        id: "duration",
        label: "How long do you expect this to run?",
        type: "select",
        required: true,
        options: [
          { value: "weeks", label: "A few weeks" },
          { value: "months", label: "Several months" },
          { value: "ongoing", label: "Ongoing" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
    ],
  },
]

export function getServiceBySlug(slug: string | null | undefined): GetStartedService | undefined {
  if (!slug) return undefined
  return GET_STARTED_SERVICES.find((s) => s.slug === slug.trim().toLowerCase())
}

export function isValidServiceSlug(slug: string): boolean {
  return GET_STARTED_SERVICES.some((s) => s.slug === slug.trim().toLowerCase())
}

/** Build Zod schema for answers from any questionnaire (service or package). */
export function buildAnswersSchemaForQuestions(questions: QuestionField[]) {
  const shape: Record<string, z.ZodTypeAny> = {}
  for (const q of questions) {
    if (q.type === "select" && q.options?.length) {
      const values = q.options.map((o) => o.value) as [string, ...string[]]
      const enumSchema = z.enum(values)
      shape[q.id] = q.required ? enumSchema : z.union([enumSchema, z.literal("")]).optional()
    } else if (q.type === "textarea") {
      shape[q.id] = q.required
        ? z.string().trim().min(1, "Required").max(4000)
        : z.union([z.string().max(4000), z.literal("")]).optional()
    } else {
      shape[q.id] = q.required
        ? z.string().trim().min(1, "Required").max(800)
        : z.union([z.string().max(800), z.literal("")]).optional()
    }
  }
  return z.object(shape).strict()
}

export function buildAnswersSchema(service: GetStartedService) {
  return buildAnswersSchemaForQuestions(service.questions)
}

export function buildEnquiryBodySchema(service: GetStartedService) {
  return z
    .object({
      serviceSlug: z.literal(service.slug),
      answers: buildAnswersSchemaForQuestions(service.questions),
      name: z.string().trim().min(1, "Name is required").max(120),
      email: z.string().email().max(254),
      company: z.union([z.string().max(200), z.literal("")]).optional(),
      message: z.union([z.string().max(4000), z.literal("")]).optional(),
      /** Honeypot — must stay empty. Do not use name "website" or browsers autofill it. */
      _trap: z.string().optional(),
    })
    .strict()
    .refine((d) => !d._trap?.trim(), {
      message: "Leave the hidden field empty (autofill may have triggered—try clearing it or use another browser).",
      path: ["_trap"],
    })
}
