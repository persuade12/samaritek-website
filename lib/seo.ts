import type { Metadata } from "next"
import { absoluteUrl, SITE, siteUrl } from "@/lib/site"

type CreateMetadataOptions = {
  /** Page title without site name — layout template adds "| SamariTek". Use `absoluteTitle` to override fully. */
  title: string
  description: string
  /** Path starting with /, e.g. "/about" */
  path: string
  keywords?: string[]
  ogImage?: string
  ogImageAlt?: string
  /** Skip title template (for pages that already include the brand name). */
  absoluteTitle?: string
  noIndex?: boolean
}

export function createMetadata({
  title,
  description,
  path,
  keywords = [],
  ogImage = SITE.ogImage,
  ogImageAlt = SITE.ogImageAlt,
  absoluteTitle,
  noIndex = false,
}: CreateMetadataOptions): Metadata {
  const url = absoluteUrl(path)
  const mergedKeywords = [...new Set([...keywords, ...SITE.keywords])]

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale.replace("_", "-"),
      url,
      siteName: SITE.name,
      title: absoluteTitle ?? `${title} | ${SITE.name}`,
      description,
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage),
          width: 1920,
          height: 1440,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ?? `${title} | ${SITE.name}`,
      description,
      images: [ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage)],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  }
}

export function rootMetadata(): Metadata {
  const url = absoluteUrl("/")

  return {
    metadataBase: new URL(siteUrl()),
    title: {
      default: SITE.defaultTitle,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.defaultDescription,
    keywords: [...SITE.keywords],
    applicationName: SITE.name,
    authors: [{ name: SITE.name, url }],
    creator: SITE.name,
    publisher: SITE.name,
    category: "technology",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: SITE.locale.replace("_", "-"),
      url,
      siteName: SITE.name,
      title: SITE.defaultTitle,
      description: SITE.defaultDescription,
      images: [
        {
          url: absoluteUrl(SITE.ogImage),
          width: 1920,
          height: 1440,
          alt: SITE.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.defaultTitle,
      description: SITE.defaultDescription,
      images: [absoluteUrl(SITE.ogImage)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    icons: {
      icon: [{ url: "/samaritek-icon.png", type: "image/png" }],
      apple: [{ url: "/samaritek-icon.png", type: "image/png" }],
    },
    manifest: "/manifest.webmanifest",
  }
}
