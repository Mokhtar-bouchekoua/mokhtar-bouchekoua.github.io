import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import {
  Avatar,
  ButtonLink,
  ContactLink,
  FeatureStats,
  MetricStrip,
  PageFrame,
  ProjectCard,
  ScrollCue,
  SectionIntro,
} from "@/components/site-shell"
import { HeroTwin } from "@/features/hero/ui/hero-twin"
import type { Metadata } from "next"
import { availability, projects, proofPoints, skills } from "@/lib/projects"
import { localeAlternates } from "@/lib/site-url"

export const metadata: Metadata = { alternates: localeAlternates("/", "en") }

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
        <HeroTwin />
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
          <SectionIntro eyebrow="SELECTED WORK" title="Projects with measured outcomes." description="Applied AI projects showing the system, my contribution and the evaluation behind each result." />
          <Link href="/projects" className="text-link">All projects <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
        </div>
      </section>

      <section className="feature-story">
        <div className="container feature-grid">
          <div className="feature-copy">
            <span className="eyebrow light">IN FOCUS · COMPUTER VISION</span>
            <h2>From plate<br /><em>to decision.</em></h2>
            <p>An access-control pipeline for Tunisian license plates: YOLOv11 detects and segments the plate, LPRNet reads it with Arabic right-to-left post-processing, and a FAISS-based RAG assistant retrieves the context behind each decision.</p>
            <Link href="/projects/smartalpr-plaqueguard" className="feature-link">Explore the SmartALPR case study <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <FeatureStats
            label="SMARTALPR / EVALUATION"
            foot="AI ACADEMIC PROJECT · COMPUTER VISION"
            stats={[
              { value: "89%", label: "mAP@0.5 · plate detection" },
              { value: "≈22", label: "FPS · detection throughput" },
              { value: "88%", label: "Hit rate · RAG retrieval" },
            ]}
          />
        </div>
      </section>

      <section className="technical-section container">
        <div>
          <span className="eyebrow">TOOLKIT</span>
          <h2>The stack behind <em>the work.</em></h2>
          <p>I work across Python services, real-time data, retrieval systems, and modern web interfaces.</p>
          <Link href="/about" className="text-link">More about me <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="container closing-note">
        <div><span className="eyebrow">OPEN TO NEW OPPORTUNITIES</span><p className="availability-note">{availability.en}</p></div>
        <p>Have a challenge at the intersection of AI and software engineering?</p>
        <ContactLink />
      </section>
    </PageFrame>
  )
}
