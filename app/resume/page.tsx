import type { Metadata } from "next"
import { ButtonLink, PageFrame } from "@/components/site-shell"
import { links, recognition, techGroups } from "@/lib/projects"
import { education, experience, languages } from "@/lib/profile"
import { localeAlternates } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and experience of Mokhtar Bouchekoua, AI & Full Stack Engineer.",
  alternates: localeAlternates("/resume/", "en"),
}

export default function ResumePage() {
  return (
    <PageFrame>
      <section className="container page-hero resume-hero">
        <span className="eyebrow">RESUME / 2026</span>
        <h1>Experience, skills <em>&amp; credentials.</em></h1>
        <p>A concise view of my experience, education and technical focus. Explore the case studies for the work behind the results.</p>
        <div className="hero-actions">
          <ButtonLink href="/projects">Explore projects</ButtonLink>
          <ButtonLink href="/contact" secondary>Get in touch</ButtonLink>
        </div>
      </section>

      <div className="resume-content container">
        <aside className="resume-aside">
          <div><span className="eyebrow">PROFILE</span><h2>Mokhtar<br />Bouchekoua</h2><p>AI &amp; Full Stack Engineer<br />Sfax, Tunisia</p></div>
          <div><span className="eyebrow">CONTACT</span><a href={links.email}>mokhtarbouchekoua@gmail.com</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          <div><span className="eyebrow">LANGUAGES</span><p>{languages.en}</p></div>
        </aside>

        <div className="resume-main">
          <section className="resume-section"><h2 className="eyebrow">EXPERIENCE</h2>
            {experience.map((item) => <article key={item.title.en}><time>{item.period.en}</time><div><h3>{item.title.en}</h3><strong>{item.place.en}</strong><p>{item.detail.en}</p></div></article>)}
          </section>
          <section className="resume-section"><h2 className="eyebrow">EDUCATION</h2>
            {education.map((item) => <article key={item.title.en}><time>{item.period.en}</time><div><h3>{item.title.en}</h3><strong>{item.place.en}</strong></div></article>)}
          </section>
          <section className="resume-section"><h2 className="eyebrow">TECHNICAL FOCUS</h2><div className="resume-tech">{techGroups.map((group) => <div key={group.label}><strong>{group.label}</strong><p>{group.items.join(" · ")}</p></div>)}</div></section>
          <section className="resume-section resume-last"><h2 className="eyebrow">RECOGNITION &amp; CERTIFICATION</h2><p>{recognition.en.join(" · ")}</p></section>
        </div>
      </div>
    </PageFrame>
  )
}
