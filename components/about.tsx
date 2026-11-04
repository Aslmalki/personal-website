import Image from "next/image"
import { assetPath } from "@/lib/asset-path"
import { ArrowUpRight } from "lucide-react"
import { bio, news, profileLinks, site } from "@/lib/site-data"
import { SectionHeading } from "@/components/section-heading"

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="flex flex-col gap-6 md:col-span-4">
          <div className="relative aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-lg border border-border">
            <Image
              src={assetPath("/images/ground-station.png")}
              alt="A satellite ground station dish pointing at a star-trailed night sky over the desert"
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
          <ul className="flex flex-col gap-2 text-sm">
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
                >
                  {link.label}
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8 md:col-span-8">
          <div className="flex flex-col gap-3">
            <SectionHeading label="About" title={site.fullName} id="about-title" />
            <p className="text-sm text-muted-foreground">
              {site.title} · Emphasis in {site.emphasis} · {site.university}, {site.city}
            </p>
          </div>
          <div className="flex flex-col gap-4 text-muted-foreground">
            {bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-heading text-lg font-semibold">Recent news</h3>
            {news.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">Updates coming soon.</p>
            ) : (
              <ul className="mt-4 flex flex-col divide-y divide-border">
                {news.map((item) => (
                  <li key={item.date + item.text} className="flex flex-col gap-1 py-3 first:pt-0 last:pb-0 sm:flex-row sm:gap-6">
                    <span className="w-24 shrink-0 text-sm font-medium tabular-nums text-primary">{item.date}</span>
                    <span className="text-sm">{item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
