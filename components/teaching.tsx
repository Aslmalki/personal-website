import { courses } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"

export function Teaching() {
  return (
    <section id="teaching" aria-labelledby="teaching-title" className="border-y border-border bg-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <SectionHeading label="Teaching" title="Courses" id="teaching-title" />
        <ul className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <li key={course.code} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-wider">
                <span className="font-semibold text-primary">{course.code}</span>
                <span className="text-muted-foreground">{course.term}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold">{course.name}</h3>
              <p className="text-sm text-muted-foreground">{course.description}</p>
              <p className="mt-auto pt-2 text-xs uppercase tracking-wider text-muted-foreground">{course.level}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
