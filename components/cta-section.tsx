import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section
      id="join"
      className="py-20 sm:py-28 bg-foreground"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl flex flex-col items-center text-center gap-6">
          <h2
            id="cta-heading"
            className="text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl lg:text-5xl"
          >
            Start learning AI with people who are building, testing and sharing together.
          </h2>
          <p className="text-base leading-relaxed text-background/70 max-w-lg">
            Join the free Ambru Community and discover better ways to use AI tools in real projects.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-background hover:bg-background/90 text-foreground font-semibold px-7 transition-all hover:-translate-y-0.5"
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
