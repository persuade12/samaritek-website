import type { LucideIcon } from "lucide-react"
import {
  Sprout,
  Pickaxe,
  GraduationCap,
  Cpu,
  RefreshCw,
  Landmark,
  BrainCircuit,
  Radio,
  HeartPulse,
  Zap,
  Truck,
} from "lucide-react"

export type AfricaSector = {
  id: string
  title: string
  shortTitle: string
  description: string
  heroTitle: string
  heroDescription: string
  ctaLabel: string
  ctaHref: string
  secondaryLabel: string
  secondaryHref: string
  image: string
  imageAlt: string
  icon: LucideIcon
}

/** Priority sectors for African organisations — used across hero, home, and services. */
export const AFRICA_SECTORS: AfricaSector[] = [
  {
    id: "tech",
    title: "Technology",
    shortTitle: "Tech",
    description:
      "Custom software, cloud, integrations, and product engineering for startups and established enterprises.",
    heroTitle: "Engineering the future of digital",
    heroDescription:
      "Custom software, web, and cloud for teams across Africa—crafted with precision. Built to transform organisations. Designed for real-world scale.",
    ctaLabel: "Start Your Project",
    ctaHref: "/get-started?service=software-development",
    secondaryLabel: "How we work",
    secondaryHref: "/work",
    image: "/images/hero-tech.jpg",
    imageAlt: "African engineers collaborating over code in a modern workspace",
    icon: Cpu,
  },
  {
    id: "ai",
    title: "Artificial Intelligence",
    shortTitle: "AI",
    description:
      "Practical AI and machine learning—automation, insights, and intelligent features grounded in your data and operations.",
    heroTitle: "AI that earns its place",
    heroDescription:
      "From predictive insights to smart workflows—we integrate AI where it cuts cost, risk, or time—not novelty for its own sake.",
    ctaLabel: "Explore AI solutions",
    ctaHref: "/get-started?service=ai-ml",
    secondaryLabel: "See services",
    secondaryHref: "/services#ai-ml",
    image: "/images/hero-ai.jpg",
    imageAlt: "Diverse African and White engineers reviewing AI dashboards together",
    icon: BrainCircuit,
  },
  {
    id: "iot",
    title: "Internet of Things",
    shortTitle: "IoT",
    description:
      "Connected devices, sensors, and edge-to-cloud platforms for monitoring, control, and real-time operations.",
    heroTitle: "Connect the physical world",
    heroDescription:
      "Sensors, gateways, and dashboards that turn equipment, farms, sites, and fleets into data you can act on.",
    ctaLabel: "Start an IoT project",
    ctaHref: "/get-started?service=custom-solutions",
    secondaryLabel: "Talk to us",
    secondaryHref: "/contact",
    image: "/images/hero-iot.jpg",
    imageAlt: "African and White engineers inspecting IoT sensors and connected devices",
    icon: Radio,
  },
  {
    id: "modernisation",
    title: "Modernisation",
    shortTitle: "Modernisation",
    description:
      "Digitise legacy processes, unify systems, and move operations onto platforms your teams can run with confidence.",
    heroTitle: "Modernise how Africa works",
    heroDescription:
      "From paper-heavy workflows to connected platforms—we help organisations modernise without disrupting what already works.",
    ctaLabel: "Start modernising",
    ctaHref: "/get-started?service=digital-consulting",
    secondaryLabel: "See services",
    secondaryHref: "/services",
    image: "/images/hero-modernisation.jpg",
    imageAlt: "Diverse professionals collaborating with hands stacked in unity",
    icon: RefreshCw,
  },
  {
    id: "agriculture",
    title: "Agriculture",
    shortTitle: "Agriculture",
    description:
      "Farm-to-market systems, supply visibility, and tools that help growers, co-ops, and agribusinesses scale.",
    heroTitle: "Tech that grows with the land",
    heroDescription:
      "Digital tools for farms, co-ops, and agribusiness—traceability, logistics, and insights shaped for African agriculture.",
    ctaLabel: "Explore agri tech",
    ctaHref: "/get-started?service=custom-solutions",
    secondaryLabel: "Talk to us",
    secondaryHref: "/contact",
    image: "/images/hero-agriculture.jpg",
    imageAlt: "Agronomists with a tablet reviewing crops in an African maize field",
    icon: Sprout,
  },
  {
    id: "mining",
    title: "Mining",
    shortTitle: "Mining",
    description:
      "Operational systems, reporting, and integrations that support safer, more transparent extractive operations.",
    heroTitle: "Systems for mining operations",
    heroDescription:
      "Software and integrations for sites and head office—compliance-ready reporting, field ops, and reliable data flows.",
    ctaLabel: "Discuss mining systems",
    ctaHref: "/get-started?service=custom-solutions",
    secondaryLabel: "How we work",
    secondaryHref: "/work",
    image: "/images/hero-mining.jpg",
    imageAlt: "African and White mining engineers reviewing data on a tablet at an industrial site",
    icon: Pickaxe,
  },
  {
    id: "education",
    title: "Education",
    shortTitle: "Education",
    description:
      "Learning platforms, school administration, and digital content systems for institutions and training providers.",
    heroTitle: "Learning platforms that scale",
    heroDescription:
      "Portals, LMS, and admin systems for schools, universities, and training organisations across Africa.",
    ctaLabel: "Build for education",
    ctaHref: "/get-started?service=web-applications",
    secondaryLabel: "View packages",
    secondaryHref: "/packages",
    image: "/images/hero-education.jpg",
    imageAlt: "African teacher and mixed African and White students in a modern classroom",
    icon: GraduationCap,
  },
  {
    id: "finance",
    title: "Finance & enterprise",
    shortTitle: "Finance",
    description:
      "Secure portals, payments, and internal systems for banks, insurers, and growing enterprises.",
    heroTitle: "Enterprise systems you can trust",
    heroDescription:
      "Secure portals, payment flows, and operational software for finance and enterprise teams across the continent.",
    ctaLabel: "Request a quote",
    ctaHref: "/get-started",
    secondaryLabel: "Contact us",
    secondaryHref: "/contact",
    image: "/images/hero-team.jpg",
    imageAlt: "African engineers collaborating over code in a modern workspace",
    icon: Landmark,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    shortTitle: "Healthcare",
    description:
      "Clinical and admin systems, patient portals, and integrations that improve care delivery and operations.",
    heroTitle: "Digital health that fits the clinic",
    heroDescription:
      "Systems for hospitals, clinics, and health programmes—records, scheduling, and reporting built for real African care settings.",
    ctaLabel: "Discuss healthcare",
    ctaHref: "/get-started?service=custom-solutions",
    secondaryLabel: "Contact us",
    secondaryHref: "/contact",
    image: "/images/hero-mixed-team.jpg",
    imageAlt: "Diverse team collaborating on digital systems in a modern office",
    icon: HeartPulse,
  },
  {
    id: "energy",
    title: "Energy & utilities",
    shortTitle: "Energy",
    description:
      "Monitoring, billing-adjacent tools, and operational platforms for energy and utility providers.",
    heroTitle: "Power systems with better data",
    heroDescription:
      "Software for utilities and energy players—visibility, field ops, and customer-facing tools that keep networks accountable.",
    ctaLabel: "Explore energy tech",
    ctaHref: "/get-started?service=custom-solutions",
    secondaryLabel: "Talk to us",
    secondaryHref: "/contact",
    image: "/images/hero-mining.jpg",
    imageAlt: "Engineers reviewing operational systems in an industrial energy context",
    icon: Zap,
  },
  {
    id: "logistics",
    title: "Logistics & transport",
    shortTitle: "Logistics",
    description:
      "Fleet, warehouse, and delivery platforms that keep goods moving across challenging routes and last-mile realities.",
    heroTitle: "Move goods with clarity",
    heroDescription:
      "Tracking, dispatch, and warehouse tools designed for African corridors, partners, and last-mile constraints.",
    ctaLabel: "Build logistics tech",
    ctaHref: "/get-started?service=custom-solutions",
    secondaryLabel: "How we work",
    secondaryHref: "/work",
    image: "/images/hero-mixed-team.jpg",
    imageAlt: "Diverse team planning logistics and operations on digital tools",
    icon: Truck,
  },
]

/** Ordered slide set for the home hero carousel. */
export const HERO_SECTOR_IDS = ["tech", "ai", "iot", "modernisation", "agriculture", "mining", "education"] as const

export function getHeroSectors(): AfricaSector[] {
  return HERO_SECTOR_IDS.map((id) => AFRICA_SECTORS.find((s) => s.id === id)!).filter(Boolean)
}
