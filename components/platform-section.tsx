import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Users,
  BookOpen,
  MessageSquare,
  ArrowRight,
} from "lucide-react"

export function PlatformSection() {
  return (
    <section
      id="community"
      className="py-20 sm:py-28 bg-slate-50/70"
      aria-labelledby="platform-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="platform-heading"
            className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            Choose where you want to join.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {/* Skool Card */}
          <Card className="group relative overflow-hidden border-2 border-blue-200 bg-white shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
              aria-hidden="true"
            />
            <CardHeader className="pb-3 pt-7">
              <div className="flex items-center justify-between mb-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                  <GraduationCap className="size-6" aria-hidden="true" />
                </div>
                <Badge className="rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs">
                  Recommended
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Humble Community on Skool
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                Structured learning, discussions, resources and community support in one organized place.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="flex flex-col gap-2">
                {[
                  { icon: BookOpen, label: "Organized learning resources" },
                  { icon: MessageSquare, label: "Structured discussions" },
                  { icon: Users, label: "Community challenges" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="size-4 text-blue-500 shrink-0" aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                className="w-full rounded-full bg-primary hover:bg-primary/90 text-white font-semibold shadow-sm shadow-blue-200 transition-all hover:shadow-md"
              >
                <a
                  href="https://skool.com/humble-community"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Humble Community on Skool (opens in new tab)"
                >
                  Join on Skool
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
            </CardFooter>
          </Card>

          {/* Facebook Card */}
          <Card className="group relative overflow-hidden border-2 border-purple-200 bg-white shadow-md transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
            <div
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"
              aria-hidden="true"
            />
            <CardHeader className="pb-3 pt-7">
              <div className="flex items-center justify-between mb-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                  <Users className="size-6" aria-hidden="true" />
                </div>
                <Badge className="rounded-full bg-purple-50 text-purple-700 border border-purple-200 text-xs">
                  Social Group
                </Badge>
              </div>
              <CardTitle className="text-xl font-bold text-foreground">
                Humble Community on Facebook
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                A free social group for quick questions, shared tools, AI news, examples and member discussions.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-4">
              <ul className="flex flex-col gap-2">
                {[
                  { icon: MessageSquare, label: "Quick Q&A and discussions" },
                  { icon: BookOpen, label: "Shared AI tools and news" },
                  { icon: Users, label: "Member experiences" },
                ].map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon className="size-4 text-purple-500 shrink-0" aria-hidden="true" />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full font-semibold border-purple-200 text-purple-700 hover:bg-purple-50 transition-all"
              >
                <a
                  href="https://facebook.com/groups/humblecommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Join Humble Community on Facebook (opens in new tab)"
                >
                  Join on Facebook
                  <ArrowRight data-icon="inline-end" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
