import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-16 px-6 border-t border-[#657786]/20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/samaritek-logo.png"
                alt="SamariTek"
                width={200}
                height={72}
                className="h-14 w-auto max-w-[240px] object-contain object-left"
              />
            </div>
            <p className="text-[#657786] leading-relaxed mb-6 max-w-md">
              SamariTek builds software and cloud systems for organisations across Africa—technology that serves your
              mission, not the other way around.
            </p>
            <p className="text-sm text-[#657786]/90 mb-6">
              <a href="mailto:info@samaritek.co.zw" className="text-[#FEA02F] hover:underline">
                info@samaritek.co.zw
              </a>
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-lg bg-[#FEA02F]/10 hover:bg-[#FEA02F]/20 flex items-center justify-center text-[#FEA02F] hover:scale-110 transition-all duration-300"
                  aria-label={social}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" opacity="0.3" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
                  Packages &amp; quotes
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
                  Get started
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
                  Work
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#657786]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#657786] text-sm">© {new Date().getFullYear()} SamariTek. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
