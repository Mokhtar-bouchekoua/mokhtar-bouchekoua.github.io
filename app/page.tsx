import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  Avatar,
  ButtonLink,
  ContactLink,
  HeroVisual,
  MetricStrip,
  PageFrame,
  ProjectCard,
  ScrollCue,
  SectionIntro,
} from "@/components/site-shell"
import { projects, proofPoints, skills } from "@/lib/projects"

export default function HomePage() {
  return (
    <PageFrame>
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> AI &amp; FULL STACK ENGINEER · SFAX, TUNISIA</span>
          <h1>Applied AI, <em>engineered end to end.</em></h1>
          <p className="hero-lede">I build the data pipelines, models, services and interfaces that turn complex ideas into working software.</p>
          <div className="hero-actions">
            <ButtonLink href="/projects">Explore my work</ButtonLink>
            <ButtonLink href="/resume" secondary>View resume</ButtonLink>
          </div>
          <div className="hero-person"><Avatar size={44} /><span><strong>Mokhtar Bouchekoua</strong><small>Building across AI, data &amp; software.</small></span></div>
        </div>
        <HeroVisual />
        <ScrollCue />
      </section>

      <section className="proof-band" aria-label="Selected project results">
        <div className="container proof-inner">
          <div className="proof-label">MEASURED<br />OUTCOMES</div>
          <MetricStrip stats={proofPoints} />
        </div>
      </section>

      <section className="section-block container" id="selected-work">
        <div className="section-heading-row">
          <SectionIntro eyebrow="01 / SELECTED WORK" title="Projects with measured outcomes." description="Applied AI projects showing the system, my contribution and the evaluation behind each result." />
          <Link href="/projects" className="text-link">All projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
        </div>
      </section>

      <section className="feature-story">
        <div className="container feature-grid">
          <div className="feature-copy">
            <span className="eyebrow light">02 / IN FOCUS · DIGITAL TWIN</span>
            <h2>Less noise.<br /><em>More signal.</em></h2>
            <p>The anomaly pipeline groups raw events into actionable incidents. It sits inside a wider building platform with live IoT data, energy forecasting, RAG, and a 3D interface.</p>
            <Link href="/projects/digital-twin-platform" className="feature-link">Explore the Digital Twin case study <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <div className="feature-number" aria-label="647 raw anomaly events consolidated into 23 actionable incidents">
            <span className="feature-label">ANOMALY PIPELINE / EVALUATION</span>
            <div><strong>647</strong><span>RAW EVENTS</span></div>
            <div className="feature-arrow">↓</div>
            <div><strong>23</strong><span>ACTIONABLE INCIDENTS</span></div>
            <span className="feature-foot">I-WAY · FINAL-YEAR PROJECT · 2026</span>
          </div>
        </div>
      </section>

      <section className="technical-section container">
        <div>
          <span className="eyebrow">03 / TOOLKIT</span>
          <h2>The stack behind <em>the work.</em></h2>
          <p>I work across Python services, real-time data, retrieval systems, and modern web interfaces.</p>
          <Link href="/about" className="text-link">More about me <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="container closing-note">
        <span className="eyebrow">OPEN TO NEW OPPORTUNITIES</span>
        <p>Have a challenge at the intersection of AI and software engineering?</p>
        <ContactLink />
      </section>
    </PageFrame>
  )
}
