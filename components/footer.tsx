export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-16 px-6 border-t border-[#657786]/20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FEA02F] to-[#DE6600] flex items-center justify-center">
                <span className="text-xl font-bold text-white">S</span>
              </div>
              <h3 className="text-2xl font-bold text-[#FEA02F]">SamariTek</h3>
            </div>
            <p className="text-[#657786] leading-relaxed mb-6 max-w-md">
              Samaritan Technologies - Technology that serves. We're your trusted partner in digital transformation.
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
              {["Software Development", "Cloud Solutions", "Web Development", "Consultancy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#657786]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#657786] text-sm">© 2025 SamariTek. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[#657786] hover:text-[#FEA02F] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
