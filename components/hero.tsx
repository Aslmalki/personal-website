import Image from "next/image"
import { assetPath } from "@/lib/asset-path"
import { site } from "@/lib/site-data"

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <Image
        src={assetPath("/images/orbit.png")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/70 to-background/30"
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 pb-20 pt-28 md:pb-28 md:pt-44">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {site.university} /{" "}
          <span className="tabular-nums text-muted-foreground">{site.coordinates}</span>
        </p>
        <h1
          id="hero-title"
          className="max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
        >
          {site.tagline}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
          <span className="font-medium text-foreground">{site.fullName}</span> · {site.title}, with emphasis
          in <span className="text-primary">{site.emphasis}</span>
        </p>
      </div>
    </section>
  )
}
