import type { MetadataRoute } from "next"
import { siteUrl } from "@/lib/site"

type Freq = NonNullable<MetadataRoute.Sitemap[0]["changeFrequency"]>

const paths: { path: string; changeFrequency: Freq; priority: number }[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/services", changeFrequency: "monthly", priority: 0.85 },
  { path: "/packages", changeFrequency: "monthly", priority: 0.85 },
  { path: "/work", changeFrequency: "monthly", priority: 0.7 },
  { path: "/get-started", changeFrequency: "monthly", priority: 0.9 },
  { path: "/contact", changeFrequency: "monthly", priority: 0.85 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl()
  const now = new Date()
  return paths.map(({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }))
}
