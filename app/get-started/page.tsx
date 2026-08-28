import type { Metadata } from "next"
import { Suspense } from "react"
import { JsonLd, webPageJsonLd } from "@/components/json-ld"
import { createMetadata } from "@/lib/seo"
import { GetStartedWizard } from "./get-started-wizard"

export const metadata: Metadata = createMetadata({
  title: "Get started",
  description:
    "Request a quote for a SamariTek package or service—answer a few questions and our team will follow up by email with next steps.",
  path: "/get-started",
  keywords: ["request software quote", "get started SamariTek", "project enquiry form"],
})

function WizardFallback() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center pt-24">
      <p className="text-muted-foreground text-sm">Loading…</p>
    </main>
  )
}

export default function GetStartedPage() {
  return (
    <>
      <JsonLd
        data={webPageJsonLd({
          path: "/get-started",
          title: "Get started | SamariTek",
          description:
            "Request a quote for a SamariTek package or service—answer a few questions and our team will follow up by email with next steps.",
        })}
      />
      <Suspense fallback={<WizardFallback />}>
        <GetStartedWizard />
      </Suspense>
    </>
  )
}
