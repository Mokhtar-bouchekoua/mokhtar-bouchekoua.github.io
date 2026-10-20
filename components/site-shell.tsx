import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { links, type Project } from "@/lib/projects"
import { categoryLabel } from "@/lib/project-translations"
import { BackToTop } from "@/features/navigation/ui/back-to-top"
import { ProjectArtwork } from "@/features/projects/ui/project-artwork"
import { CountUp } from "@/features/metrics/ui/count-up"

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
  return <Image src="/mokhtar-bouchekoua-avatar.jpg" alt={locale === "fr" ? "Portrait de Mokhtar Bouchekoua" : "Portrait of Mokhtar Bouchekoua"} width={size} height={size} className="avatar" />
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

export function FeatureStats({ label, foot, stats }: { label: string; foot: string; stats: { value: string; label: string }[] }) {
  return (
    <div className="feature-number feature-stats">
      <span className="feature-label">{label}</span>
      <dl>{stats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}</dl>
      <span className="feature-foot">{foot}</span>
    </div>
  )
}

export function MetricStrip({ stats, locale = "en" }: { stats: { value: string; label: string }[]; locale?: "en" | "fr" }) {
  return <div className="metric-strip">{stats.map((stat) => <div key={stat.label}><CountUp value={stat.value} locale={locale} /><span>{stat.label}</span></div>)}</div>
}

export function ScrollCue({ locale = "en" }: { locale?: "en" | "fr" }) {
  return <a href="#selected-work" className="scroll-cue">{locale === "fr" ? "DÉCOUVRIR MES PROJETS" : "EXPLORE WORK"} <ArrowDown size={14} aria-hidden="true" /></a>
}

export function ContactLink({ locale = "en" }: { locale?: "en" | "fr" }) {
  return <a className="contact-text-link" href={links.email}>{locale === "fr" ? "Échangeons" : "Start a conversation"} <ArrowUpRight size={18} aria-hidden="true" /></a>
}
