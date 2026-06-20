import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  "It is completely free.",
  "You learn with other people, not alone.",
  "You discover useful AI tools faster.",
  "You get practical examples, not only theory.",
  "You can ask questions when you get stuck.",
  "You can share your own AI experiments.",
  "You can improve your prompts and workflows.",
  "You can apply AI to marketing, business, content and productivity.",
]

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-20 sm:py-28 bg-background"
      aria-labelledby="benefits-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="benefits-heading"
            className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            Why Join Ambru Community?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card
              key={i}
              className="group border border-border bg-card shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 hover:border-primary/40"
            >
              <CardContent className="flex items-start gap-3 p-5">
                <CheckCircle2
                  className="size-5 text-primary shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <p className="text-sm font-medium text-foreground leading-relaxed">{benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
