import { Clock, Mail, MapPin } from "lucide-react"
import { contact, site } from "@/lib/site-data"

export function Contact() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20">
        <div className="flex max-w-3xl flex-col gap-3">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 id="contact-title" className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
            {contact.heading}
          </h2>
        </div>
        <dl className="grid gap-8 md:grid-cols-3">
          <div className="flex gap-3">
            <Mail aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
            <div className="flex flex-col gap-1">
              <dt className="text-sm text-muted-foreground">Email</dt>
              <dd>
                <a href={`mailto:${site.email}`} className="text-primary underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
          </div>
          {site.office && (
            <div className="flex gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">Office</dt>
                <dd>{site.office}</dd>
              </div>
            </div>
          )}
          {site.officeHours && (
            <div className="flex gap-3">
              <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">Office hours</dt>
                <dd>{site.officeHours}</dd>
              </div>
            </div>
          )}
        </dl>
        <p className="border-t border-border pt-8 text-sm text-muted-foreground">
          {site.department} · {site.university}, {site.city}
        </p>
      </div>
    </footer>
  )
}
