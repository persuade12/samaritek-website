import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-background py-16 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/samaritek-logo.png"
                alt="SamariTek"
                width={200}
                height={72}
                className="h-14 w-auto max-w-[240px] object-contain object-left mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              SamariTek builds software and cloud systems for organisations across Africa—technology that serves your
              mission, not the other way around.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              <a href="mailto:info@samaritek.co.zw" className="text-[#FEA02F] hover:underline">
                info@samaritek.co.zw
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-[#FEA02F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-muted-foreground hover:text-[#FEA02F] transition-colors">
                  Packages &amp; quotes
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="text-muted-foreground hover:text-[#FEA02F] transition-colors">
                  Get started
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-muted-foreground hover:text-[#FEA02F] transition-colors">
                  Work
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-[#FEA02F] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-[#FEA02F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} SamariTek. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-muted-foreground hover:text-[#FEA02F] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-[#FEA02F] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
