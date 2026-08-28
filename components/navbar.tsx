"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = prev
    }
  }, [menuOpen])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/packages", label: "Packages" },
    { href: "/work", label: "Work" },
    { href: "/get-started", label: "Get started" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-nav-bg backdrop-blur-2xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 relative z-[70]">
          <Link href="/" className="flex items-center group" onClick={() => setMenuOpen(false)}>
            <Image
              src="/samaritek-logo.png"
              alt="SamariTek"
              width={160}
              height={56}
              className="h-9 w-auto object-contain object-left transition-transform group-hover:scale-105 md:h-10 mix-blend-multiply dark:mix-blend-normal"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  pathname === link.href
                    ? "text-foreground bg-surface"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-[#FEA02F] to-[#DE6600] hover:from-[#DE6600] hover:to-[#FEA02F] text-white px-6 rounded-full font-medium shadow-lg shadow-[#FEA02F]/30 hover:shadow-[#FEA02F]/50 hover:scale-105 transition-all duration-300"
            >
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-lg p-2 text-foreground hover:bg-surface focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEA02F]/60"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-0 top-16 z-[55] bg-overlay md:hidden"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <div
            id="mobile-nav-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="fixed left-0 right-0 top-16 z-[60] max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-border bg-background/98 px-6 py-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-surface text-foreground"
                        : "text-muted-foreground hover:bg-surface hover:text-foreground"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pb-2">
              <Button
                asChild
                className="w-full bg-gradient-to-r from-[#FEA02F] to-[#DE6600] hover:from-[#DE6600] hover:to-[#FEA02F] text-white rounded-xl py-6 font-semibold shadow-lg shadow-[#FEA02F]/25"
              >
                <Link href="/get-started" onClick={() => setMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </>
      ) : null}
    </nav>
  )
}
