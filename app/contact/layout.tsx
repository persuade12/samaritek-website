import type { Metadata } from "next"
import type { ReactNode } from "react"
import { JsonLd, webPageJsonLd } from "@/components/json-ld"
import { createMetadata } from "@/lib/seo"
import { BRAND_IMAGES } from "@/lib/brand-images"
import { absoluteUrl, SITE } from "@/lib/site"

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact SamariTek for software, cloud, and digital transformation projects across Africa. Email info@samaritek.co.zw—we reply promptly.",
  path: "/contact",
  keywords: ["contact SamariTek", "software development quote", "technology enquiry Zimbabwe"],
  ogImage: BRAND_IMAGES.signboard,
  ogImageAlt: "SamariTek signboard mockup",
})

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            path: "/contact",
            title: "Contact | SamariTek",
            description:
              "Contact SamariTek for software, cloud, and digital transformation projects across Africa. Email info@samaritek.co.zw—we reply promptly.",
          }),
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${absoluteUrl("/contact")}#contactpage`,
            url: absoluteUrl("/contact"),
            name: "Contact SamariTek",
            description:
              "Contact SamariTek for software, cloud, and digital transformation projects across Africa.",
            mainEntity: {
              "@type": "Organization",
              "@id": `${absoluteUrl("/")}#organization`,
              name: SITE.name,
              email: SITE.email,
            },
          },
        ]}
      />
      {children}
    </>
  )
}
