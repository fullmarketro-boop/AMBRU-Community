import { Card, CardContent } from "@/components/ui/card"
import {
  Wrench,
  FileText,
  Briefcase,
  Megaphone,
  Zap,
  BarChart2,
  MessageSquare,
  GraduationCap,
  FolderKanban,
} from "lucide-react"

const items = [
  {
    icon: Wrench,
    title: "AI Tool Recommendations",
    description: "Curated picks for every use case, updated by the community.",
    span: "sm:col-span-2",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
  {
    icon: FileText,
    title: "Prompt Examples & Workflows",
    description: "Ready-to-use prompts and step-by-step workflows for better results.",
    span: "",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
  {
    icon: Briefcase,
    title: "Practical Use Cases",
    description: "Real examples of how members apply AI in their work and daily life.",
    span: "",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
  {
    icon: Megaphone,
    title: "Marketing & Content Ideas",
    description: "AI-powered strategies for creating content, ads and campaigns faster.",
    span: "",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
  {
    icon: Zap,
    title: "Automation Tips",
    description: "Workflows and tools to reduce repetitive tasks and save hours.",
    span: "",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
  {
    icon: BarChart2,
    title: "Business Productivity Methods",
    description: "How to apply AI to planning, research, reporting and decision-making.",
    span: "sm:col-span-2",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
  {
    icon: MessageSquare,
    title: "Peer Support & Feedback",
    description: "Get answers, share results and give feedback to other members.",
    span: "",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
  {
    icon: GraduationCap,
    title: "Beginner-Friendly Discussions",
    description: "A safe space to ask basic questions without judgment.",
    span: "",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
  {
    icon: FolderKanban,
    title: "Project-Based Learning",
    description: "Apply what you learn to real projects and get community input.",
    span: "",
    accent: "bg-card border-border",
    iconColor: "text-primary bg-secondary",
  },
]

export function BentoSection() {
  return (
    <section
      id="learn"
      className="py-20 sm:py-28"
      aria-labelledby="bento-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="bento-heading"
            className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            What You&apos;ll Find Inside the Community
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, description, span, accent, iconColor }) => (
            <Card
              key={title}
              className={`group border ${accent} bg-white/80 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${span}`}
            >
              <CardContent className="flex flex-col gap-3 p-5">
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${iconColor}`}
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
