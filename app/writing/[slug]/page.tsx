import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { posts, site } from "@/lib/site-data"
import { formatDate } from "@/lib/format-date"
import { SiteHeader } from "@/components/site-header"
import { Contact } from "@/components/contact"

export const dynamicParams = false

export function generateStaticParams() {
  // Static export fails on an empty list, so a placeholder slug renders a 404 until posts exist.
  if (posts.length === 0) return [{ slug: "coming-soon" }]
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.summary,
    authors: [{ name: site.displayName }],
    openGraph: { title: post.title, description: post.summary, type: "article", publishedTime: post.date },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-6 py-20">
        <article className="flex flex-col gap-8">
          <Link
            href="/#writing"
            className="inline-flex items-center gap-1 self-start text-sm text-primary underline-offset-4 hover:underline"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            All writing
          </Link>
          <header className="flex flex-col gap-4 border-b border-border pb-8">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              <span aria-hidden="true" className="h-px w-8 bg-accent" />
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.readingTime}
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl">{post.title}</h1>
            <p className="text-lg text-muted-foreground">{post.summary}</p>
            <p className="text-sm text-muted-foreground">
              By <span className="text-foreground">{site.displayName}</span>
            </p>
          </header>
          <div className="flex flex-col gap-5 text-lg leading-relaxed text-foreground/90">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          <ul className="flex flex-wrap gap-2 border-t border-border pt-8" aria-label="Tags">
            {post.tags.map((tag) => (
              <li key={tag} className="rounded-sm border border-border bg-muted px-2 py-0.5 text-xs text-muted-foreground">
                {tag}
              </li>
            ))}
          </ul>
        </article>
      </main>
      <Contact />
    </>
  )
}
