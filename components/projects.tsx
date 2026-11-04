import { ArrowUpRight, AudioLines } from "lucide-react"
import { projects } from "@/lib/site-data"
import { assetPath } from "@/lib/asset-path"
import { SectionHeading } from "@/components/section-heading"
import { EmptyState } from "@/components/empty-state"

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-y border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <div className="flex max-w-3xl flex-col gap-4">
          <SectionHeading label="Projects" title="Interactive work" id="projects-title" />
          <p className="text-muted-foreground">
            Tools and learning experiences that turn space data into something you can see, hear, and play with.
          </p>
        </div>
        {projects.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => {
              const href = project.href.startsWith("/") ? assetPath(project.href) : project.href
              return (
                <li key={project.title}>
                  <article className="group relative flex h-full flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center rounded-md bg-accent/15 text-accent">
                        <AudioLines aria-hidden="true" className="size-5" />
                      </span>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{project.kind}</p>
                    </div>
                    <h3 className="font-heading text-2xl font-semibold group-hover:text-primary">
                      <a href={href} className="after:absolute after:inset-0">
                        {project.title}
                      </a>
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary" aria-hidden="true">
                      {project.cta} <ArrowUpRight className="size-4" />
                    </span>
                  </article>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </section>
  )
}
