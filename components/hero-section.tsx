import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Bot,
  MessageSquare,
  Lightbulb,
  Users,
  Wrench,
  ArrowRight,
  Sparkles,
} from "lucide-react"

const floatingCards = [
  { icon: Wrench, label: "AI Tool Cards", color: "bg-secondary text-foreground border-border" },
  { icon: Lightbulb, label: "Prompt Tips", color: "bg-secondary text-foreground border-border" },
  { icon: MessageSquare, label: "Community Chat", color: "bg-secondary text-foreground border-border" },
  { icon: Sparkles, label: "Weekly Practice", color: "bg-secondary text-foreground border-border" },
  { icon: Users, label: "Project Support", color: "bg-secondary text-foreground border-border" },
]

const avatarColors = [
  "bg-primary",
  "bg-primary/80",
  "bg-primary/60",
  "bg-primary/40",
  "bg-primary/20",
]

const avatarInitials = ["A", "M", "S", "J", "K"]

export function HeroSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-center lg:gap-12">
          {/* Left — copy */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:max-w-xl">
            <Badge
              variant="secondary"
              className="mb-4 gap-1.5 rounded-full px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground border border-border"
            >
              <Sparkles className="size-3" />
              Free AI Learning Community
            </Badge>

            <h1
              id="hero-heading"
              className="text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
            >
              Learn AI Tools{" "}
              <span className="text-primary">Together.</span>{" "}
              Build Better Projects With a{" "}
              <span className="text-primary">
                Supportive Community.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-prose">
              Ambru Community is a free AI learning and support community where people
              discover tools, share methods, ask questions and help each other use AI
              in real projects.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-7 transition-all hover:-translate-y-0.5"
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
                className="rounded-full font-semibold border-border hover:bg-muted px-7 transition-all hover:-translate-y-0.5"
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

            {/* Social proof row */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2" aria-label="Community members">
                {avatarColors.map((color, i) => (
                  <div
                    key={i}
                    className={`flex size-8 items-center justify-center rounded-full ${color} text-primary-foreground text-xs font-bold ring-2 ring-background`}
                    aria-hidden="true"
                  >
                    {avatarInitials[i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Join a growing community of AI learners
              </p>
            </div>
          </div>

          {/* Right — visual dashboard */}
          <div className="relative w-full max-w-sm sm:max-w-md lg:flex-1 lg:max-w-none">
            {/* Main card */}
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 p-5 sm:p-6">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                    <Bot className="size-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Ambru Community</p>
                    <p className="text-[10px] text-muted-foreground">AI Learning Hub</p>
                  </div>
                </div>
                <Badge className="text-[10px] rounded-full bg-primary/15 text-primary border-primary/20 border">
                  Active
                </Badge>
              </div>

              {/* Floating feature cards grid */}
              <div className="grid grid-cols-2 gap-2.5">
                {floatingCards.map(({ icon: Icon, label, color }) => (
                  <div
                    key={label}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium transition-transform hover:-translate-y-0.5 ${color}`}
                  >
                    <Icon className="size-3.5 shrink-0" aria-hidden="true" />
                    <span>{label}</span>
                  </div>
                ))}
                {/* Chat bubble card spanning full width */}
                <div className="col-span-2 rounded-xl border border-border bg-muted p-3">
                  <div className="flex items-start gap-2">
                    <div className="size-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-[10px] font-bold shrink-0">
                      M
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-foreground mb-0.5">Maria</p>
                      <p className="text-[10px] text-muted-foreground leading-relaxed">
                        Anyone tried using ChatGPT for research summaries? Sharing my workflow here...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Member avatars */}
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <div className="flex -space-x-1.5">
                  {avatarColors.slice(0, 4).map((color, i) => (
                    <div
                      key={i}
                      className={`size-6 rounded-full ${color} ring-2 ring-card`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-[10px] text-muted-foreground">Members learning together</p>
              </div>
            </div>

            {/* Decorative blobs */}

          </div>
        </div>
      </div>
    </section>
  )
}
