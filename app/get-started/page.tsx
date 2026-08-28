import type { Metadata } from "next"
import { Suspense } from "react"
import { GetStartedWizard } from "./get-started-wizard"

export const metadata: Metadata = {
  title: "Get started | SamariTek",
  description:
    "Request a quote for a package or tell us which service you need—we follow up by email.",
}

function WizardFallback() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center pt-24">
      <p className="text-muted-foreground text-sm">Loading…</p>
    </main>
  )
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={<WizardFallback />}>
      <GetStartedWizard />
    </Suspense>
  )
}
