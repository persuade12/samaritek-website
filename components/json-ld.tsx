import { absoluteUrl, SITE } from "@/lib/site"

type JsonLdProps = {
  data: Record<string, unknown> | Record<string, unknown>[]
}

export function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data : [data]
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload.length === 1 ? payload[0] : payload) }}
    />
  )
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: SITE.name,
    legalName: SITE.legalName,
    url: absoluteUrl("/"),
    email: SITE.email,
    logo: absoluteUrl("/samaritek-logo.png"),
    image: absoluteUrl(SITE.ogImage),
    description: SITE.defaultDescription,
    areaServed: {
      "@type": "Place",
      name: SITE.region,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: SITE.email,
      availableLanguage: ["English"],
    },
  }
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: SITE.name,
    url: absoluteUrl("/"),
    description: SITE.defaultDescription,
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
    inLanguage: SITE.language,
  }
}

export function webPageJsonLd({
  path,
  title,
  description,
}: {
  path: string
  title: string
  description: string
}) {
  const url = absoluteUrl(path)
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/")}#organization` },
    inLanguage: SITE.language,
  }
}

export function professionalServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${absoluteUrl("/services")}#service`,
    name: SITE.name,
    url: absoluteUrl("/services"),
    image: absoluteUrl(SITE.ogImage),
    description: SITE.defaultDescription,
    email: SITE.email,
    areaServed: SITE.region,
    serviceType: [
      "Custom software development",
      "Web application development",
      "Mobile app development",
      "Cloud infrastructure",
      "AI and machine learning",
      "IoT solutions",
      "Digital transformation",
    ],
    provider: { "@id": `${absoluteUrl("/")}#organization` },
  }
}
