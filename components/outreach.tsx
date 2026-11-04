import { ArrowUpRight, Megaphone, Newspaper, Presentation, Radio } from "lucide-react"
import { type OutreachType, outreach } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { EmptyState } from "@/components/empty-state"

const icons: Record<OutreachType, typeof Megaphone> = {
  talk: Presentation,
  article: Newspaper,
  workshop: Megaphone,
  media: Radio,
}

export function Outreach() {
  return (
    <section id="outreach" aria-labelledby="outreach-title" className="border-y border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionHeading label="Science communication" title="Space, explained for everyone" id="outreach-title" />
          <p className="text-muted-foreground">{outreach.intro}</p>
        </div>
        {outreach.items.length === 0 ? (
          <EmptyState />
        ) : (
        <ul className="grid gap-6 sm:grid-cols-2">
          {outreach.items.map((item) => {
            const Icon = icons[item.type]
            return (
              <li key={item.title}>
                <a
                  href={item.href}
                  className="group flex h-full gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary"
                >
                  <Icon aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent" />
                  <div className="flex flex-col gap-1">
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">
                      {item.type} · <span className="tabular-nums">{item.date}</span>
                    </p>
                    <h3 className="inline-flex items-start gap-1 font-heading text-lg font-semibold group-hover:text-primary">
                      {item.title}
                      <ArrowUpRight aria-hidden="true" className="mt-1 size-4 shrink-0" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.venue}</p>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
        )}
      </div>
    </section>
  )
}
