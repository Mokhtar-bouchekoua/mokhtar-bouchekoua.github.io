import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ButtonLink, PageFrame, SectionIntro } from "@/components/site-shell"
import { languages, principles } from "@/lib/profile"
import { localeAlternates } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "About",
  description: "How Mokhtar Bouchekoua, AI & Full Stack Engineer, approaches applied AI: from source data to evaluated models and usable interfaces.",
  alternates: localeAlternates("/about/", "en"),
}

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="container page-hero about-hero">
        <span className="eyebrow">ABOUT / MOKHTAR BOUCHEKOUA</span>
        <h1>AI is one layer. <em>I build the whole system.</em></h1>
        <p>I&apos;m an AI &amp; Full Stack Engineer in Sfax, Tunisia. I work across applied machine learning, real-time data and product engineering.</p>
      </section>

      <section className="container about-intro">
        <div className="portrait-wrap">
          <Image src="/mokhtar-bouchekoua-portrait.jpg" alt="Portrait of Mokhtar Bouchekoua" width={1080} height={1080} className="about-portrait" preload />
        </div>
        <div className="about-intro-copy">
          <span className="eyebrow">THE SHORT VERSION</span>
          <h2>Good AI work reaches beyond the model.</h2>
          <p>My projects have taken me from IoT ingestion and time-series storage to model evaluation, LLM observability and interactive interfaces. I enjoy the engineering decisions that connect those layers.</p>
          <p>I bring a full stack perspective to AI problems: understand the source data, measure model behavior, and make the result clear to the person using it.</p>
          <Link href="/projects" className="text-link">Explore the work <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="about-principles">
        <div className="container principles-grid">
          <SectionIntro eyebrow="HOW I WORK" title="Three habits behind every project." />
          <div className="principles-list">
            {principles.map((item) => <article key={item.title.en}><h3>{item.title.en}</h3><p>{item.body.en}</p></article>)}
          </div>
        </div>
      </section>

      <section className="container about-more">
        <div><span className="eyebrow">LANGUAGES</span><p>{languages.en}</p></div>
        <div><span className="eyebrow">COMMUNITY</span><p>IEEE member (ISGIS &amp; IIT)</p></div>
        <div><span className="eyebrow">BASED IN</span><p>Sfax, Tunisia · open to remote</p></div>
      </section>

      <section className="container about-next">
        <div><span className="eyebrow">NEXT</span><p>Experience, education and skills are on one page.</p></div>
        <div className="hero-actions">
          <ButtonLink href="/resume">View resume</ButtonLink>
          <ButtonLink href="/contact" secondary>Get in touch</ButtonLink>
        </div>
      </section>
    </PageFrame>
  )
}
