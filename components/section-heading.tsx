type SectionHeadingProps = {
  label: string
  title: string
  id?: string
  as?: "h1" | "h2"
}

export function SectionHeading({ label, title, id, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        <span aria-hidden="true" className="h-px w-8 bg-accent" />
        {label}
      </p>
      <Tag id={id} className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </Tag>
    </div>
  )
}
