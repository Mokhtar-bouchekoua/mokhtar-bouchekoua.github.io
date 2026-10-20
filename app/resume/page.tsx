import type { Metadata } from "next"
import { ButtonLink, PageFrame } from "@/components/site-shell"
import { availability, links, recognition, techGroups } from "@/lib/projects"
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
        <span className="eyebrow">RESUME</span>
        <h1>Experience, skills <em>&amp; recognition.</em></h1>
        <p>The essentials on one page. Each case study shows the work behind the results.</p>
        <div className="hero-actions">
          <ButtonLink href="/projects">Explore projects</ButtonLink>
          <ButtonLink href="/contact" secondary>Get in touch</ButtonLink>
        </div>
      </section>

      <div className="resume-content container">
        <aside className="resume-aside">
          <div><span className="eyebrow">AVAILABILITY</span><p>{availability.en}</p></div>
          <div><span className="eyebrow">CONTACT</span><a href={links.email}>mokhtarbouchekoua@gmail.com</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          <div><span className="eyebrow">LANGUAGES</span><p>{languages.en}</p></div>
        </aside>

        <div className="resume-main">
          <section className="resume-section"><h2 className="resume-heading">Experience</h2>
            {experience.map((item) => <article key={item.title.en}><time>{item.period.en}</time><div><h3>{item.title.en}</h3><strong>{item.place.en}</strong><p>{item.detail.en}</p></div></article>)}
          </section>
          <section className="resume-section"><h2 className="resume-heading">Education</h2>
            {education.map((item) => <article key={item.title.en}><time>{item.period.en}</time><div><h3>{item.title.en}</h3><strong>{item.place.en}</strong></div></article>)}
          </section>
          <section className="resume-section"><h2 className="resume-heading">Technical skills</h2><div className="resume-tech">{techGroups.map((group) => <div key={group.label}><h3>{group.label}</h3><ul className="skill-tags">{group.items.map((item) => <li key={item}>{item}</li>)}</ul></div>)}</div></section>
          <section className="resume-section resume-last"><h2 className="resume-heading">Recognition &amp; certification</h2><p>{recognition.en.join(" · ")}</p></section>
        </div>
      </div>
    </PageFrame>
  )
}
