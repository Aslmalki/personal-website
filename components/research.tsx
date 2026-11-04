import { research } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"

export function Research() {
  return (
    <section id="research" aria-labelledby="research-title" className="border-y border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionHeading label="Research" title={research.heading} id="research-title" />
          <p className="text-muted-foreground">{research.intro}</p>
        </div>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {research.areas.map((area) => (
            <li key={area.title} className="flex flex-col gap-2 border-t-2 border-primary pt-5">
              <h3 className="font-heading text-lg font-semibold">{area.title}</h3>
              <p className="text-sm text-muted-foreground">{area.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
