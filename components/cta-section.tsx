import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section
      id="join"
      className="relative overflow-hidden py-20 sm:py-28"
      style={{ backgroundColor: "var(--brand-dark)" }}
      aria-labelledby="cta-heading"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
        <div className="absolute -top-24 -left-24 size-80 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 size-80 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 size-64 rounded-full bg-cyan-700/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl flex flex-col items-center text-center gap-6">
          <h2
            id="cta-heading"
            className="text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl"
          >
            Start learning AI with people who are building, testing and sharing together.
          </h2>
          <p className="text-base leading-relaxed text-slate-300 max-w-lg">
            Join the free Ambru Community and discover better ways to use AI tools in real projects.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-blue-900/40 px-7 transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              <a
                href="https://skool.com/humble-community"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Humble Community on Skool (opens in new tab)"
              >
                Join Humble Community on Skool
                <ArrowRight data-icon="inline-end" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full font-semibold border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-7 transition-all hover:-translate-y-0.5 bg-transparent"
            >
              <a
                href="https://facebook.com/groups/humblecommunity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join Humble Community on Facebook (opens in new tab)"
              >
                Join on Facebook
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
