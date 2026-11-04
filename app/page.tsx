import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Research } from "@/components/research"
import { Publications } from "@/components/publications"
import { Teaching } from "@/components/teaching"
import { Projects } from "@/components/projects"
import { Lab } from "@/components/lab"
import { Outreach } from "@/components/outreach"
import { ReadingList } from "@/components/reading-list"
import { Writing } from "@/components/writing"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Research />
        <Publications />
        <Projects />
        <Teaching />
        <Lab />
        <Outreach />
        <ReadingList />
        <Writing />
      </main>
      <Contact />
    </>
  )
}
