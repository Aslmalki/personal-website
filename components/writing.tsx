import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { posts } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"
import { formatDate } from "@/lib/format-date"
import { EmptyState } from "@/components/empty-state"

export function Writing() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="writing" aria-labelledby="writing-title" className="border-y border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionHeading label="Writing" title="Notes and essays" id="writing-title" />
          <p className="text-muted-foreground">
            Longer thoughts on research, data science, and academic life, written for students and curious readers.
          </p>
        </div>
        {sorted.length === 0 ? (
          <EmptyState />
        ) : (
        <ul className="grid gap-6 md:grid-cols-2">
          {sorted.map((post) => (
            <li key={post.slug}>
              <article className="group relative flex h-full flex-col gap-3 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
                </p>
                <h3 className="font-heading text-xl font-semibold group-hover:text-primary">
                  <Link href={`/writing/${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground">{post.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm text-primary" aria-hidden="true">
                  Read post <ArrowRight className="size-4" />
                </span>
              </article>
            </li>
          ))}
        </ul>
        )}
      </div>
    </section>
  )
}
