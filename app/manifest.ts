import type { MetadataRoute } from "next"
import { SITE, siteUrl } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.defaultTitle,
    short_name: SITE.name,
    description: SITE.defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: SITE.themeColor,
    lang: SITE.language,
    icons: [
      {
        src: "/samaritek-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  }
}
