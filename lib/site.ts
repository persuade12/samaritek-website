/** Central site constants — used for SEO, sitemap, and structured data. */
export const SITE = {
  name: "SamariTek",
  legalName: "SamariTek",
  tagline: "Software & cloud engineering for Africa",
  defaultTitle: "SamariTek — Software & cloud engineering for Africa",
  defaultDescription:
    "SamariTek partners with organisations across Africa on custom software, web platforms, cloud infrastructure, AI, IoT, and digital transformation.",
  locale: "en_ZW",
  language: "en",
  country: "ZW",
  region: "Africa",
  email: "info@samaritek.co.zw",
  enquiriesEmail: "enquiries@samaritek.co.zw",
  ogImage: "/images/samaritek-banner.jpg",
  ogImageAlt: "SamariTek branded workspace banner",
  themeColor: "#FEA02F",
  keywords: [
    "software development Africa",
    "custom software Zimbabwe",
    "cloud engineering Africa",
    "web development Zimbabwe",
    "digital transformation Africa",
    "AI solutions Africa",
    "IoT development",
    "mobile app development Africa",
    "SamariTek",
  ],
} as const

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://samaritek.co.zw").replace(/\/$/, "")
}

export function absoluteUrl(path = "/"): string {
  const base = siteUrl()
  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${base}${normalized}`
}
