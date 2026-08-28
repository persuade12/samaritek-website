import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach SamariTek for software, cloud, and digital transformation projects across Africa. We reply by email.",
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
