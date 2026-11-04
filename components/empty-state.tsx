export function EmptyState({ text = "Coming soon." }: { text?: string }) {
  return (
    <p className="rounded-lg border border-dashed border-border px-6 py-10 text-center text-sm text-muted-foreground">
      {text}
    </p>
  )
}
