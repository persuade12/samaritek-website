import type { LucideIcon } from "lucide-react"
import {
  BrainCircuit,
  Cloud,
  Code2,
  CreditCard,
  Globe,
  Link as LinkIcon,
  Radio,
  Smartphone,
} from "lucide-react"

export type Capability = {
  id: string
  title: string
  description: string
  getStartedSlug: string
  icon: LucideIcon
}

/** Technical services — what SamariTek builds (distinct from sector focus). */
export const CAPABILITIES: Capability[] = [
  {
    id: "software-development",
    title: "Custom software",
    description: "Applications shaped around your workflows—from discovery through production systems your team can run.",
    getStartedSlug: "software-development",
    icon: Code2,
  },
  {
    id: "web-applications",
    title: "Web platforms",
    description: "Portals, dashboards, and public sites built for performance, security, and growth across African markets.",
    getStartedSlug: "web-applications",
    icon: Globe,
  },
  {
    id: "mobile-solutions",
    title: "Mobile apps",
    description: "Native and cross-platform apps for iOS and Android—designed for real devices and connectivity constraints.",
    getStartedSlug: "mobile-solutions",
    icon: Smartphone,
  },
  {
    id: "cloud-solutions",
    title: "Cloud & hosting",
    description: "Scalable infrastructure, migration, and DevOps—reliable in production and ready to grow with you.",
    getStartedSlug: "cloud-solutions",
    icon: Cloud,
  },
  {
    id: "ai-ml",
    title: "AI & machine learning",
    description: "Practical intelligence—automation, predictions, and smart features grounded in your data and operations.",
    getStartedSlug: "ai-ml",
    icon: BrainCircuit,
  },
  {
    id: "iot",
    title: "IoT & connected systems",
    description: "Sensors, gateways, and dashboards that connect equipment, sites, and fleets to actionable data.",
    getStartedSlug: "custom-solutions",
    icon: Radio,
  },
  {
    id: "integrations",
    title: "Integrations & APIs",
    description: "Connect ERPs, payments, third-party tools, and legacy systems so your stack works as one.",
    getStartedSlug: "integrations",
    icon: LinkIcon,
  },
  {
    id: "payment-integrations",
    title: "Payment integrations",
    description: "EcoCash, Paynow, Stripe, and hybrid flows—checkout and billing experiences your customers trust.",
    getStartedSlug: "payment-integrations",
    icon: CreditCard,
  },
]
