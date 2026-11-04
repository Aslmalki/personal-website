import Link from "next/link"
import { lab } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"

export function Lab() {
  return (
    <section id="lab" aria-labelledby="lab-title" className="mx-auto max-w-6xl px-6 py-20">
      <div className="flex max-w-3xl flex-col items-start gap-6">
        <SectionHeading label="Research lab" title={lab.name} id="lab-title" />
        <p className="text-muted-foreground">{lab.description}</p>
        <Link
          href="/#contact"
          className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}
