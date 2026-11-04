import Link from "next/link"
import { nav, site } from "@/lib/site-data"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          {site.displayName}
        </Link>
        <nav aria-label="Primary">
          <ul className="hidden items-center gap-5 text-sm lg:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/#contact" className="text-sm font-medium text-primary lg:hidden">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
