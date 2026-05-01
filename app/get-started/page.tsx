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
    <main className="min-h-screen bg-black flex items-center justify-center pt-24">
      <p className="text-[#EBD9C8]/70 text-sm">Loading…</p>
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
