import type { MetadataRoute } from "next"

function siteBase(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://samaritek.co.zw").replace(/\/$/, "")
}

export default function robots(): MetadataRoute.Robots {
  const base = siteBase()
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${base}/sitemap.xml`,
  }
}
