"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { type PublicationType, publications, site } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

const filters: { label: string; value: PublicationType }[] = [
  { label: "Conference", value: "conference" },
  { label: "Journal", value: "journal" },
  { label: "Datasets", value: "dataset" },
  { label: "Code", value: "software" },
]

const INITIAL_COUNT = 5

function AuthorList({ authors }: { authors: string[] }) {
  return (
    <p className="text-sm text-muted-foreground">
      {authors.map((author, i) => (
        <span key={author}>
          {author === site.citationName ? (
            <strong className="font-semibold text-foreground">{author}</strong>
          ) : (
            author
          )}
          {i < authors.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  )
}

export function Publications() {
  const [filter, setFilter] = useState<PublicationType>("conference")
  const [expanded, setExpanded] = useState(false)

  const visible = publications.filter((p) => p.type === filter).sort((a, b) => b.year - a.year)
  const shown = expanded ? visible : visible.slice(0, INITIAL_COUNT)

  const byYear = new Map<number, typeof shown>()
  for (const pub of shown) {
    byYear.set(pub.year, [...(byYear.get(pub.year) ?? []), pub])
  }
  const grouped = [...byYear.entries()]

  return (
    <section id="publications" aria-labelledby="publications-title" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <SectionHeading label="Publications" title="Selected work" id="publications-title" />
        <div role="group" aria-label="Filter publications by type" className="flex flex-wrap gap-2">
          {filters.map((f) => {
            const active = filter === f.value
            const count = publications.filter((p) => p.type === f.value).length
            return (
              <button
                key={f.value}
                type="button"
                aria-pressed={active}
                onClick={() => {
                  setFilter(f.value)
                  setExpanded(false)
                }}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary hover:text-primary",
                )}
              >
                {f.label} ({count})
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-12" aria-live="polite">
        {grouped.length === 0 ? (
          <p className="text-muted-foreground">No publications in this category yet.</p>
        ) : (
          grouped.map(([year, pubs]) => (
            <div key={year} className="grid gap-4 md:grid-cols-12">
              <h3 className="font-heading text-3xl font-semibold tabular-nums text-primary md:col-span-2">
                {year}
              </h3>
              <ol className="flex flex-col divide-y divide-border md:col-span-10">
                {pubs.map((pub) => (
                  <li key={pub.title} className="flex flex-col gap-1.5 py-5 first:pt-0">
                    <AuthorList authors={pub.authors} />
                    <a
                      href={pub.href}
                      className="group inline-flex items-start gap-1 font-heading text-lg font-medium leading-snug hover:text-primary"
                    >
                      <span>{pub.title}</span>
                      <ArrowUpRight aria-hidden="true" className="mt-1 size-4 shrink-0 text-muted-foreground group-hover:text-primary" />
                    </a>
                    <span className="text-sm italic text-muted-foreground">{pub.venue}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))
        )}
        {visible.length > INITIAL_COUNT && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="self-start text-sm text-primary underline-offset-4 hover:underline"
          >
            {expanded ? "Show fewer" : `Show all ${visible.length}`}
          </button>
        )}
      </div>
    </section>
  )
}
