import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, BookOpen, HeartHandshake } from "lucide-react"

const solutions = [
  {
    icon: Search,
    title: "Discover Tools",
    description:
      "Find useful AI tools for marketing, productivity, research, content creation, automation and business projects.",
    gradient: "from-blue-500 to-cyan-500",
    bgLight: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: BookOpen,
    title: "Learn Better Methods",
    description:
      "Explore practical workflows, prompts, use cases and habits that help you get better results from AI.",
    gradient: "from-purple-500 to-blue-500",
    bgLight: "bg-purple-50",
    border: "border-purple-100",
  },
  {
    icon: HeartHandshake,
    title: "Get Support",
    description:
      "Ask questions, share experiments and learn from other members who use AI in different real-world projects.",
    gradient: "from-cyan-500 to-green-500",
    bgLight: "bg-cyan-50",
    border: "border-cyan-100",
  },
]

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 sm:py-28 bg-slate-50/70"
      aria-labelledby="solution-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="solution-heading"
            className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            A free community where AI learning becomes{" "}
            <span className="text-primary">practical</span>,{" "}
            <span style={{ color: "var(--brand-purple)" }}>social</span> and easier to apply.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description, gradient, bgLight, border }) => (
            <Card
              key={title}
              className={`group border ${border} bg-white shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1 overflow-hidden`}
            >
              <CardHeader className="pb-3">
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white mb-3`}
                  aria-hidden="true"
                >
                  <Icon className="size-6" />
                </div>
                <CardTitle className="text-lg font-bold text-foreground">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                  {description}
                </CardDescription>
              </CardContent>
              {/* Bottom accent */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                aria-hidden="true"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
