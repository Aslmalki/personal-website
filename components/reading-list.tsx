import { ArrowUpRight } from "lucide-react"
import { readingList } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { EmptyState } from "@/components/empty-state"

export function ReadingList() {
  return (
    <section id="reading" aria-labelledby="reading-title" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex max-w-3xl flex-col gap-4">
        <SectionHeading label="Reading list" title="Papers worth your time" id="reading-title" />
        <p className="text-muted-foreground">
          Papers I have read, return to often, and recommend to students and collaborators, each with a short note on why.
        </p>
      </div>
      {readingList.length === 0 ? (
        <div className="mt-12">
          <EmptyState />
        </div>
      ) : (
      <ul className="mt-12 flex flex-col divide-y divide-border border-y border-border">
        {readingList.map((paper) => (
          <li key={paper.title} className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
            <div className="flex flex-col gap-1 md:col-span-7">
              <a
                href={paper.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-1 font-heading text-lg font-medium leading-snug hover:text-primary"
              >
                <span>{paper.title}</span>
                <ArrowUpRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
              </a>
              <p className="text-sm text-muted-foreground">
                {paper.authors} · <span className="tabular-nums">{paper.year}</span>
              </p>
              <ul className="mt-1 flex flex-wrap gap-2" aria-label="Topics">
                {paper.tags.map((tag) => (
                  <li key={tag} className="rounded-sm border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <blockquote className="border-l border-accent pl-4 text-sm text-foreground/90 md:col-span-5">
              <p>{paper.note}</p>
            </blockquote>
          </li>
        ))}
      </ul>
      )}
    </section>
  )
}
