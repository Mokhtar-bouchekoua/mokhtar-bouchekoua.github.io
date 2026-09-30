import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { links, type Project } from "@/lib/projects"
import { categoryLabel } from "@/lib/project-translations"
import { BackToTop } from "@/features/navigation/ui/back-to-top"
import { ProjectArtwork } from "@/features/projects/ui/project-artwork"

export { ProjectArtwork } from "@/features/projects/ui/project-artwork"

export function SiteFooter({ locale = "en" }: { locale?: "en" | "fr" }) {
  const copy = locale === "fr"
    ? { eyebrow: "LA SUITE", headline: "Parlons de", accent: "votre projet.", contact: "Me contacter", links: "Liens de bas de page", role: "Ingénieur IA et Full Stack · Sfax, Tunisie" }
    : { eyebrow: "NEXT CHAPTER", headline: "Let's talk about", accent: "what you're building.", contact: "Get in touch", links: "Footer links", role: "AI & Full Stack Engineer · Sfax, Tunisia" }
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div>
          <span className="eyebrow light">{copy.eyebrow}</span>
          <h2>{copy.headline}<br /><em>{copy.accent}</em></h2>
        </div>
        <Link href={locale === "fr" ? "/fr/contact" : "/contact"} className="footer-cta">{copy.contact} <ArrowUpRight size={24} aria-hidden="true" /></Link>
      </div>
      <div className="container footer-bottom">
        <div><strong>Mokhtar Bouchekoua</strong><span>{copy.role}</span></div>
        <nav aria-label={copy.links}>
          <a href={links.email}>Email</a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}

export function PageFrame({ children, locale = "en" }: { children: React.ReactNode; locale?: "en" | "fr" }) {
  return <div lang={locale}><SiteHeader /><main id="main-content">{children}</main><SiteFooter locale={locale} /><BackToTop locale={locale} /></div>
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

export function Avatar({ size = 48, locale = "en" }: { size?: number; locale?: "en" | "fr" }) {
  return <Image src="/mokhtar-bouchekoua.jpg" alt={locale === "fr" ? "Portrait de Mokhtar Bouchekoua" : "Portrait of Mokhtar Bouchekoua"} width={size} height={size} className="avatar" />
}

export function HeroVisual({ locale = "en" }: { locale?: "en" | "fr" }) {
  const french = locale === "fr"
  return (
    <div className="hero-visual" aria-label={french ? "Architecture du jumeau numérique : ingestion HTTP et MQTT avec FastAPI, stockage PostgreSQL et TimescaleDB, services IA LightGBM et LangGraph, interface Next.js et Three.js" : "Digital twin architecture: HTTP and MQTT ingestion through FastAPI, PostgreSQL and TimescaleDB storage, LightGBM and LangGraph AI services, and a Next.js with Three.js interface"} role="img">
      <div className="hero-visual-top"><span>{french ? "PROJET 01 / JUMEAU NUMÉRIQUE" : "CASE 01 / DIGITAL TWIN"}</span><span>I-WAY · 2026</span></div>
      <div className="hero-visual-body">
        <div className="architecture-list">
          <div className="architecture-row"><span>01</span><div><strong>{french ? "Ingérer" : "Ingest"}</strong><small>HTTP · MQTT · FastAPI</small></div><i /></div>
          <div className="architecture-row"><span>02</span><div><strong>{french ? "Stocker" : "Store"}</strong><small>PostgreSQL · TimescaleDB</small></div><i /></div>
          <div className="architecture-row"><span>03</span><div><strong>{french ? "Prédire et rechercher" : "Model & retrieve"}</strong><small>LightGBM · LangGraph</small></div><i /></div>
          <div className="architecture-row"><span>04</span><div><strong>{french ? "Visualiser" : "Present"}</strong><small>Next.js · Three.js</small></div><i /></div>
        </div>
        <div className="architecture-stat"><span>{french ? "DONNÉES OBSERVÉES" : "OBSERVED DATA"}</span><strong>470,857</strong><small>{french ? "mesures IoT recueillies sur environ 14,6 mois" : "IoT measurements across approximately 14.6 months"}</small></div>
      </div>
      <div className="hero-visual-bottom"><span>{french ? "DES SIGNAUX AUX DÉCISIONS" : "BUILDING SIGNALS → USABLE DECISIONS"}</span><span>↗</span></div>
    </div>
  )
}

export function ProjectCard({ project, featured = false, locale = "en" }: { project: Project; featured?: boolean; locale?: "en" | "fr" }) {
  const href = locale === "fr" ? `/fr/projects/${project.slug}` : `/projects/${project.slug}`
  return (
    <Link href={href} className={`project-card${featured ? " featured" : ""}`}>
      <ProjectArtwork visual={project.visual} compact locale={locale} />
      <div className="project-card-content">
        <div className="card-meta"><span>{project.number} / {categoryLabel(project.category, locale)}</span>{project.timeframe && <span>{project.timeframe}</span>}</div>
        <div><h3>{project.shortTitle}</h3><p>{project.summary}</p></div>
        <div className="card-proof"><strong>{project.results[0].value}</strong><span>{project.results[0].label}<small>{project.results[0].context}</small></span></div>
        <div className="card-bottom"><span>{locale === "fr" ? "Voir l’étude de cas" : "View case study"}</span><ArrowUpRight size={18} aria-hidden="true" /></div>
      </div>
    </Link>
  )
}

export function Diagram({ project, locale = "en" }: { project: Project; locale?: "en" | "fr" }) {
  const steps: Record<Project["visual"], string[]> = locale === "fr" ? {
    twin: ["Sources IoT", "FastAPI + MQTT", "TimescaleDB + IA", "Interface 3D"],
    bi: ["Exports ERP", "Validation des données", "Indicateurs financiers", "Assistant LLM"],
    edge: ["Flux IoT", "TCN causal", "Modèle multitâche", "Cause racine"],
    alpr: ["Image de plaque", "YOLOv11", "LPRNet + RTL", "RAG avec FAISS"],
  } : {
    twin: ["IoT sources", "FastAPI + MQTT", "TimescaleDB + AI", "3D interface"],
    bi: ["ERP exports", "Data validation", "Financial KPIs", "LLM assistant"],
    edge: ["IoT stream", "Causal TCN", "Multi-task model", "Root cause"],
    alpr: ["Plate image", "YOLOv11", "LPRNet + RTL", "FAISS RAG"],
  }

  return (
    <div className="process-diagram" aria-label={`Conceptual workflow: ${steps[project.visual].join(" to ")}`}>
      {steps[project.visual].map((step, index) => (
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

export function ScrollCue({ locale = "en" }: { locale?: "en" | "fr" }) {
  return <a href="#selected-work" className="scroll-cue">{locale === "fr" ? "DÉCOUVRIR MES PROJETS" : "EXPLORE WORK"} <ArrowDown size={14} aria-hidden="true" /></a>
}

export function ContactLink({ locale = "en" }: { locale?: "en" | "fr" }) {
  return <a className="contact-text-link" href={links.email}>{locale === "fr" ? "Échangeons" : "Start a conversation"} <ArrowUpRight size={18} aria-hidden="true" /></a>
}
