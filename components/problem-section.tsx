import { Card, CardContent } from "@/components/ui/card"
import {
  Layers,
  HelpCircle,
  Shuffle,
  MessageCircleOff,
  FileQuestion,
} from "lucide-react"

const problems = [
  {
    icon: Layers,
    text: "Too many AI tools to choose from.",
    color: "text-primary bg-secondary",
  },
  {
    icon: HelpCircle,
    text: "Hard to know which methods actually work.",
    color: "text-primary bg-secondary",
  },
  {
    icon: Shuffle,
    text: "Prompts often feel random and inconsistent.",
    color: "text-primary bg-secondary",
  },
  {
    icon: MessageCircleOff,
    text: "People get stuck without feedback.",
    color: "text-primary bg-secondary",
  },
  {
    icon: FileQuestion,
    text: "Most tutorials don't show real use cases.",
    color: "text-primary bg-secondary",
  },
]

export function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-20 sm:py-28"
      aria-labelledby="problem-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="problem-heading"
            className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            AI is powerful, but learning it alone can feel overwhelming.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, text, color }) => (
            <Card
              key={text}
              className="group border border-border bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <CardContent className="flex items-start gap-4 p-5">
                <div
                  className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${color}`}
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
