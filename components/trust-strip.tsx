import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"

const badges = [
  "Free to join",
  "Beginner-friendly",
  "Practical AI methods",
  "Tool discovery",
  "Community support",
  "Real project examples",
]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-white py-5" aria-label="Community highlights">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <Badge
              key={badge}
              variant="secondary"
              className="flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium bg-secondary text-foreground border border-border hover:bg-muted transition-colors"
            >
              <CheckCircle2 className="size-3.5 text-primary shrink-0" aria-hidden="true" />
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
