"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "About", href: "#about" },
  { label: "What You'll Learn", href: "#learn" },
  { label: "Community", href: "#community" },
  { label: "Benefits", href: "#benefits" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-bold text-foreground text-lg tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Ambru Community home"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
            <Zap className="size-4" />
          </span>
          <span>
            AMBRU <span className="font-normal text-muted-foreground">Community</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md px-1"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold px-5"
          >
            <a
              href="https://skool.com/humble-community"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join for Free
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white/95 backdrop-blur-md border-b border-border px-4 pb-4"
        >
          <ul className="flex flex-col gap-1 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left py-2 px-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="pt-2">
              <Button
                asChild
                className="w-full rounded-full bg-primary text-white font-semibold"
              >
                <a
                  href="https://skool.com/humble-community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join for Free
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
