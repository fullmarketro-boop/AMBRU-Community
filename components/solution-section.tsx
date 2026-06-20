import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Search, BookOpen, HeartHandshake } from "lucide-react"

const solutions = [
  {
    icon: Search,
    title: "Discover Tools",
    description:
      "Find useful AI tools for marketing, productivity, research, content creation, automation and business projects.",
    bgLight: "bg-secondary",
    border: "border-border",
  },
  {
    icon: BookOpen,
    title: "Learn Better Methods",
    description:
      "Explore practical workflows, prompts, use cases and habits that help you get better results from AI.",
    bgLight: "bg-secondary",
    border: "border-border",
  },
  {
    icon: HeartHandshake,
    title: "Get Support",
    description:
      "Ask questions, share experiments and learn from other members who use AI in different real-world projects.",
    bgLight: "bg-secondary",
    border: "border-border",
  },
]

export function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 sm:py-28 bg-muted/40"
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
            social and easier to apply.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {solutions.map(({ icon: Icon, title, description, bgLight, border }) => (
            <Card
              key={title}
              className={`group border ${border} bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 overflow-hidden`}
            >
              <CardHeader className="pb-3">
                <div
                  className={`flex size-12 items-center justify-center rounded-2xl ${bgLight} text-primary mb-3`}
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
              <div
                className="h-0.5 w-full bg-border group-hover:bg-primary transition-colors duration-200"
                aria-hidden="true"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
