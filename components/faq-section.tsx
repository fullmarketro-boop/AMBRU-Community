import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "Is the community free?",
    a: "Yes. Joining the community is free.",
  },
  {
    q: "Do I need AI experience?",
    a: "No. The community is beginner-friendly, but also useful for people already using AI.",
  },
  {
    q: "What topics are discussed?",
    a: "AI tools, prompts, methods, workflows, marketing, automation, productivity, research and real project examples.",
  },
  {
    q: "Where can I join?",
    a: "You can join Humble Community on Skool or on Facebook.",
  },
  {
    q: "Is this only for business owners?",
    a: "No. It is for anyone who wants to use AI better in work, projects, learning or daily tasks.",
  },
]

export function FaqSection() {
  return (
    <section
      id="faq"
      className="py-20 sm:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-white shadow-sm px-5 data-[state=open]:border-blue-200 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="py-4 text-sm font-semibold text-foreground hover:no-underline text-left">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm text-muted-foreground leading-relaxed">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
