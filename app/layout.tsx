import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, Space_Grotesk } from 'next/font/google'
import { site } from '@/lib/site-data'
import { assetPath } from '@/lib/asset-path'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const plex = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex',
  display: 'swap',
})

const title = `${site.displayName} — Computational & Data Science, Space Informatics | ${site.university}`
const description = `${site.displayName}, ${site.title} at ${site.university}. Research in NLP, machine learning, and computational methods for the space sciences.`

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${site.displayName}`,
  },
  description,
  generator: 'v0.app',
  openGraph: {
    title,
    description,
    type: 'website',
    images: [assetPath('/images/orbit.png')],
  },
  icons: {
    icon: [{ url: assetPath('/icon.svg'), type: 'image/svg+xml' }],
    apple: assetPath('/apple-icon.png'),
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0f1424',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plex.variable} bg-background`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GITHUB_PAGES !== 'true' && <Analytics />}
      </body>
    </html>
  )
}
