import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { links, type Project } from "@/lib/projects"

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <span className="eyebrow light">NEXT CHAPTER</span>
          <h2>Let&apos;s talk about<br /><em>what you&apos;re building.</em></h2>
        </div>
        <Link href="/contact" className="footer-cta">Get in touch <ArrowUpRight size={24} aria-hidden="true" /></Link>
      </div>
      <div className="container footer-bottom">
        <div><strong>Mokhtar Bouchekoua</strong><span>AI &amp; Full Stack Engineer · Sfax, Tunisia</span></div>
        <nav aria-label="Footer links">
          <a href={links.email}>Email</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></>
}

export function ButtonLink({ href, children, secondary = false }: {
  href: string
  children: React.ReactNode
  secondary?: boolean
}) {
  const className = `button-link${secondary ? " button-secondary" : ""}`
  const content = <>{children}<ArrowUpRight size={17} aria-hidden="true" /></>

  return <Link href={href} className={className}>{content}</Link>
}

export function SectionIntro({ eyebrow, title, description }: {
  eyebrow: string
  title: string
  description?: string
}) {
  return <div className="section-intro"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{description && <p>{description}</p>}</div>
}

export function Avatar({ size = 48 }: { size?: number }) {
  return <Image src="/mokhtar-bouchekoua.jpg" alt="Portrait of Mokhtar Bouchekoua" width={size} height={size} className="avatar" />
}

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Digital twin architecture: HTTP and MQTT ingestion through FastAPI, PostgreSQL and TimescaleDB storage, LightGBM and LangGraph AI services, and a Next.js with Three.js interface" role="img">
      <div className="hero-visual-top"><span>CASE 01 / DIGITAL TWIN</span><span>I-WAY · 2026</span></div>
      <div className="hero-visual-body">
        <div className="architecture-list">
          <div className="architecture-row"><span>01</span><div><strong>Ingest</strong><small>HTTP · MQTT · FastAPI</small></div><i /></div>
          <div className="architecture-row"><span>02</span><div><strong>Store</strong><small>PostgreSQL · TimescaleDB</small></div><i /></div>
          <div className="architecture-row"><span>03</span><div><strong>Model &amp; retrieve</strong><small>LightGBM · LangGraph</small></div><i /></div>
          <div className="architecture-row"><span>04</span><div><strong>Present</strong><small>Next.js · Three.js</small></div><i /></div>
        </div>
        <div className="architecture-stat"><span>OBSERVED DATA</span><strong>470,857</strong><small>IoT measurements across approximately 14.6 months</small></div>
      </div>
      <div className="hero-visual-bottom"><span>BUILDING SIGNALS → USABLE DECISIONS</span><span>↗</span></div>
    </div>
  )
}

export function ProjectArtwork({ kind, compact = false }: { kind: Project["diagram"]; compact?: boolean }) {
  return (
    <div className={`project-art art-${kind}${compact ? " art-compact" : ""}`} aria-hidden="true">
      <span className="art-caption">CONCEPTUAL SYSTEM VIEW</span>
      {kind === "twin" && <>
        <div className="twin-grid" />
        <div className="twin-building"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="twin-pulse pulse-one" /><div className="twin-pulse pulse-two" />
        <span className="art-chip chip-left">IoT → Time series</span><span className="art-chip chip-right">3D + AI</span>
      </>}
      {kind === "bi" && <>
        <div className="bi-display"><span>ERP / DATA QUALITY</span><div className="bi-stat"><strong>8,497 <b>→</b> 36</strong><small>detected violations after cleaning</small></div><div className="bi-display-bottom"><b>20 CSV FILES</b><b>22,387 RECORDS</b></div></div>
      </>}
      {kind === "edge" && <>
        <div className="edge-radar"><div /><div /><div /><span>CAT<br />MTL</span></div>
        <span className="edge-point edge-point-a" /><span className="edge-point edge-point-b" /><span className="edge-point edge-point-c" />
        <span className="edge-label">DETECT / TYPE / EXPLAIN</span>
      </>}
      {kind === "alpr" && <>
        <div className="alpr-frame"><div className="alpr-plate"><small>تونس</small><span>12 | 34567</span></div><i className="alpr-line" /><b className="corner tl" /><b className="corner tr" /><b className="corner bl" /><b className="corner br" /></div>
        <span className="alpr-label">DETECTION → OCR → RAG</span>
      </>}
    </div>
  )
}

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <Link href={`/projects/${project.slug}`} className={`project-card${featured ? " featured" : ""}`}>
      <ProjectArtwork kind={project.diagram} compact />
      <div className="project-card-content">
        <div className="card-meta"><span>{project.number} / {project.category}</span>{project.timeframe && <span>{project.timeframe}</span>}</div>
        <div><h3>{project.shortTitle}</h3><p>{project.summary}</p></div>
        <div className="card-proof"><strong>{project.results[0].value}</strong><span>{project.results[0].label}<small>{project.results[0].context}</small></span></div>
        <div className="card-bottom"><span>View case study</span><ArrowUpRight size={18} aria-hidden="true" /></div>
      </div>
    </Link>
  )
}

export function Diagram({ project }: { project: Project }) {
  const steps: Record<Project["diagram"], string[]> = {
    twin: ["IoT sources", "FastAPI + MQTT", "TimescaleDB + AI", "3D interface"],
    bi: ["ERP exports", "Data validation", "Financial KPIs", "LLM assistant"],
    edge: ["IoT stream", "Causal TCN", "Multi-task model", "Root cause"],
    alpr: ["Plate image", "YOLOv11", "LPRNet + RTL", "FAISS RAG"],
  }

  return (
    <div className="process-diagram" aria-label={`Conceptual workflow: ${steps[project.diagram].join(" to ")}`}>
      {steps[project.diagram].map((step, index) => (
        <div className="process-step" key={step}>
          <span>0{index + 1}</span><strong>{step}</strong>
          {index < 3 && <ArrowRight size={18} aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}

export function MetricStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return <div className="metric-strip">{stats.map((stat) => <div key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}</div>
}

export function ScrollCue() {
  return <a href="#selected-work" className="scroll-cue">EXPLORE WORK <ArrowDown size={14} aria-hidden="true" /></a>
}

export function ContactLink() {
  return <a className="contact-text-link" href={links.email}>Start a conversation <ArrowUpRight size={18} aria-hidden="true" /></a>
}
