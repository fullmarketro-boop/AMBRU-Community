import { Separator } from "@/components/ui/separator"
import { Zap } from "lucide-react"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "What You'll Learn", href: "#learn" },
  { label: "Skool", href: "https://skool.com/humble-community", external: true },
  { label: "Facebook", href: "https://facebook.com/groups/humblecommunity", external: true },
  { label: "FAQ", href: "#faq" },
]

export function Footer() {
  return (
    <footer
      className="bg-card border-t border-border py-10"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <a
              href="#"
              className="flex items-center gap-2 font-bold text-foreground text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md justify-center sm:justify-start"
              aria-label="Ambru Community home"
            >
              <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-3.5" aria-hidden="true" />
              </span>
              AMBRU Community
            </a>
            <p className="text-xs text-muted-foreground max-w-xs">
              Free AI learning and support community.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 list-none">
              {footerLinks.map(({ label, href, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="my-6" />

        <p className="text-center text-xs text-muted-foreground">
          &copy; 2026 AMBRU Community. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
