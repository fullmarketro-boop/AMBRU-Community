import { Card, CardContent } from "@/components/ui/card"
import {
  Lightbulb,
  TrendingUp,
  Briefcase,
  GraduationCap,
  PenTool,
  Store,
  BotMessageSquare,
  Search,
} from "lucide-react"

const audience = [
  { icon: Lightbulb, label: "Entrepreneurs", desc: "Building products and businesses with AI." },
  { icon: TrendingUp, label: "Marketers", desc: "Creating content and campaigns smarter." },
  { icon: Briefcase, label: "Freelancers", desc: "Delivering faster, higher-quality work." },
  { icon: GraduationCap, label: "Students", desc: "Learning AI for school and future careers." },
  { icon: PenTool, label: "Creators", desc: "Writing, designing and making with AI tools." },
  { icon: Store, label: "Small Business Owners", desc: "Automating tasks and growing efficiently." },
  { icon: BotMessageSquare, label: "Professionals", desc: "Automating daily work and boosting output." },
  { icon: Search, label: "Beginners", desc: "Learning AI tools from scratch in a safe space." },
]

const avatarColors = [
  "bg-primary",
  "bg-primary/85",
  "bg-primary/70",
  "bg-primary/60",
  "bg-primary/50",
  "bg-primary/40",
  "bg-primary/30",
  "bg-primary/20",
]

export function AudienceSection() {
  return (
    <section
      id="who"
      className="py-20 sm:py-28"
      aria-labelledby="audience-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="audience-heading"
            className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            Built for people who want to use AI better,{" "}
            <span className="text-primary">not just talk about it.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {audience.map(({ icon: Icon, label, desc }, i) => (
            <Card
              key={label}
              className="group border border-border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40"
            >
              <CardContent className="flex flex-col items-center text-center gap-3 p-5">
                <div
                  className={`flex size-12 items-center justify-center rounded-full ${avatarColors[i]} text-primary-foreground transition-transform group-hover:scale-110`}
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{label}</h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
