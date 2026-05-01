import { z } from "zod"
import { PAYMENT_GATEWAY_OPTIONS, buildAnswersSchemaForQuestions, type QuestionField } from "@/lib/get-started-services"

export type OfferPackage = {
  slug: string
  title: string
  /** Short line for cards */
  tagline: string
  /** Who this is for */
  idealFor: string
  /** Bullet list of what the bundle typically covers */
  inclusions: string[]
  intro: string[]
  questions: QuestionField[]
}

export const OFFER_PACKAGES: OfferPackage[] = [
  {
    slug: "business-online-presence",
    title: "Business Online Presence",
    tagline: "Email, brand, site, and marketing—one coordinated bundle for new companies.",
    idealFor:
      "Newly registered businesses, sole traders going formal, and small teams that need a credible digital footprint without juggling five vendors.",
    inclusions: [
      "Corporate email on your domain (setup and handover)",
      "Graphic design — logo, basic brand assets, and social-ready visuals",
      "Digital marketing foundations — profiles, templates, and a simple launch plan",
      "Website — professional brochure or starter site you can grow from",
    ],
    intro: [
      "You have registered the company and now need to look legitimate online: a proper email address, a clear website, visuals that match, and a sensible first step into digital marketing.",
      "This is a bundled quote—not a fixed shopping cart. We scope what you need (e.g. number of mailboxes, pages, and channels), then propose a single path and timeline.",
    ],
    questions: [
      {
        id: "company_stage",
        label: "Where is the business today?",
        type: "select",
        required: true,
        options: [
          { value: "registered", label: "Company just registered — starting from a blank slate" },
          { value: "trading", label: "Already trading — upgrading from personal email / informal presence" },
          { value: "expanding", label: "Established — adding a new brand or subsidiary online" },
        ],
      },
      {
        id: "domain_status",
        label: "Do you already have a domain name (e.g. yourcompany.co.zw)?",
        type: "select",
        required: true,
        options: [
          { value: "have_domain", label: "Yes, we own the domain" },
          { value: "need_domain", label: "No — we need help choosing and registering" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
      {
        id: "priorities",
        label: "What should we prioritise first in the bundle?",
        type: "textarea",
        required: true,
        placeholder: "e.g. email for 5 staff first, then website, then social…",
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
      {
        id: "budget_band",
        label: "Rough budget band (helps us scope honestly)",
        type: "select",
        required: true,
        options: [
          { value: "under_2k", label: "Starter / tight (under ~USD 2k equivalent)" },
          { value: "2k_8k", label: "Mid (~USD 2k–8k equivalent)" },
          { value: "8k_plus", label: "Higher — we want a fuller rollout" },
          { value: "discuss", label: "Prefer to discuss after you see a proposal" },
        ],
      },
    ],
  },
  {
    slug: "ecommerce-online-payments",
    title: "E‑Commerce & Online Payments",
    tagline: "Sell products online with checkout and payments your customers already use.",
    idealFor:
      "Shops, wholesalers, and makers who want a catalogue, cart, and online payments—not only a brochure site.",
    inclusions: [
      "Online store — products, categories, and checkout flow",
      "Payment integration aligned to your market (e.g. mobile money, cards, gateways you choose)",
      "Order and customer notifications; basic admin training",
      "Optional: shipping rules, pickup, or delivery partner handoff (scoped in quote)",
    ],
    intro: [
      "You want customers to browse products, pay online, and receive confirmation—whether you ship nationwide or offer pickup.",
      "We quote based on catalogue size, payment methods, and any integrations (stock, accounting). Nothing is one-size-fits-all; we keep the stack appropriate for your volume.",
    ],
    questions: [
      {
        id: "catalog_size",
        label: "Roughly how many products (SKUs) will go online at launch?",
        type: "select",
        required: true,
        options: [
          { value: "under_50", label: "Under 50" },
          { value: "50_200", label: "50–200" },
          { value: "200_plus", label: "200+" },
          { value: "unsure", label: "Not sure yet" },
        ],
      },
      {
        id: "fulfilment",
        label: "How do customers get the product?",
        type: "select",
        required: true,
        options: [
          { value: "shipping", label: "Shipping / courier" },
          { value: "pickup", label: "In-store or warehouse pickup" },
          { value: "digital", label: "Digital goods only" },
          { value: "mixed", label: "Mix of the above" },
        ],
      },
      {
        id: "payments",
        label: "Which payment methods matter most at checkout?",
        type: "select",
        required: true,
        options: PAYMENT_GATEWAY_OPTIONS,
      },
      {
        id: "existing_channel",
        label: "Do you already sell offline or on social/WhatsApp?",
        type: "textarea",
        required: true,
        placeholder: "e.g. walk-in shop in Harare, Instagram orders, WhatsApp catalogue…",
      },
      {
        id: "timeline",
        label: "When would you like to take the first live order?",
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
    slug: "digital-growth-bundle",
    title: "Digital Growth Bundle",
    tagline: "For businesses with a site already—double down on campaigns, content, and conversion.",
    idealFor:
      "Teams that already have a website or store but need structured marketing, refreshed creative, and measurement—not starting from zero.",
    inclusions: [
      "Campaign planning and channel mix (social, search, email where relevant)",
      "Creative refresh — ads, banners, and landing page improvements",
      "Analytics and reporting setup so you can see what works",
      "Optional development tweaks to support campaigns (quoted as needed)",
    ],
    intro: [
      "You are past the “first website” stage and need marketing and creative work that ties back to business goals—not random posts.",
      "We quote after understanding your audience, current assets, and what you want to achieve in the next quarter.",
    ],
    questions: [
      {
        id: "current_presence",
        label: "What do you have in place today?",
        type: "select",
        required: true,
        options: [
          { value: "site_only", label: "Website only — limited marketing" },
          { value: "site_social", label: "Website + active social" },
          { value: "store", label: "E‑commerce or bookings already live" },
          { value: "minimal", label: "Very little — but we are not a brand-new registration" },
        ],
      },
      {
        id: "goals",
        label: "What does success look like in the next 3–6 months?",
        type: "textarea",
        required: true,
        placeholder: "e.g. more qualified leads, higher online sales, launch in a new city…",
      },
      {
        id: "channels",
        label: "Which channels are you open to investing in?",
        type: "textarea",
        required: true,
        placeholder: "e.g. Meta, Google, email newsletters, influencers…",
      },
      {
        id: "timeline",
        label: "When would you like campaigns to start?",
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
]

export function getOfferPackageBySlug(slug: string | null | undefined): OfferPackage | undefined {
  if (!slug) return undefined
  const key = slug.trim().toLowerCase()
  return OFFER_PACKAGES.find((p) => p.slug === key)
}

export function buildPackageEnquiryBodySchema(pkg: OfferPackage) {
  return z
    .object({
      packageSlug: z.literal(pkg.slug),
      answers: buildAnswersSchemaForQuestions(pkg.questions),
      name: z.string().trim().min(1, "Name is required").max(120),
      email: z.string().email().max(254),
      company: z.union([z.string().max(200), z.literal("")]).optional(),
      message: z.union([z.string().max(4000), z.literal("")]).optional(),
      _trap: z.string().optional(),
    })
    .strict()
    .refine((d) => !d._trap?.trim(), {
      message: "Leave the hidden field empty (autofill may have triggered—try clearing it or use another browser).",
      path: ["_trap"],
    })
}
