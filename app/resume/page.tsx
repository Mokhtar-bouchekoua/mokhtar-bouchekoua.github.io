import type { Metadata } from "next"
import { ButtonLink, PageFrame } from "@/components/site-shell"
import { links, techGroups } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume and experience of Mokhtar Bouchekoua, AI & Full Stack Engineer.",
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
          <div><span className="eyebrow">LANGUAGES</span><p>Arabic · French · English</p></div>
        </aside>

        <div className="resume-main">
          <section className="resume-section"><span className="eyebrow">01 / EXPERIENCE</span>
            <article><time>2026</time><div><h3>AI &amp; Full Stack Engineer</h3><strong>I-Way · Final-year project</strong><p>Built a digital twin platform combining IoT ingestion, forecasting, anomaly detection, Agentic RAG and 3D visualization.</p></div></article>
            <article><time>2025</time><div><h3>Data &amp; AI / BI Intern</h3><strong>MyPartner</strong><p>Improved ERP data quality and developed an AI-enhanced financial analysis application.</p></div></article>
            <article><time>2025</time><div><h3>Edge AI Research Project</h3><strong>IIT Sfax</strong><p>Developed and evaluated a multi-task model for IoT anomaly detection, typing and root cause analysis.</p></div></article>
            <article><time>2024</time><div><h3>Full Stack Developer Intern</h3><strong>Flash Marketing Digital</strong><p>Developed the Allo Fruit e-commerce platform with Laravel, React and MySQL.</p></div></article>
          </section>

          <section className="resume-section"><span className="eyebrow">02 / EDUCATION</span>
            <article><time>2023—2026</time><div><h3>Engineering Degree in Computer Science</h3><strong>International Institute of Technology · Sfax</strong></div></article>
            <article><time>2023</time><div><h3>Bachelor&apos;s Degree in Electronics, Electrical Engineering and Automation</h3><strong>Higher Institute of Industrial Management · Sfax</strong></div></article>
          </section>

          <section className="resume-section"><span className="eyebrow">03 / TECHNICAL FOCUS</span><div className="resume-tech">{techGroups.map((group) => <div key={group.label}><strong>{group.label}</strong><p>{group.items.join(" · ")}</p></div>)}</div></section>
          <section className="resume-section resume-last"><span className="eyebrow">04 / RECOGNITION & CERTIFICATIONS</span><p>Best Final-Year Project Award, 2023 · IEEE member · Arduino (ISGIS) · Python Certificate · CCNA · AWS Badge</p></section>
        </div>
      </div>
    </PageFrame>
  )
}
