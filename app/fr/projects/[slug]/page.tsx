import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Diagram, PageFrame, ProjectArtwork } from "@/components/site-shell"
import { getAdjacentProjects, getProject, projects } from "@/lib/projects"
import { categoryLabel, projectForLocale } from "@/lib/project-translations"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  const localized = project ? projectForLocale(project, "fr") : undefined
  return {
    title: localized?.title ?? "Projet introuvable",
    description: localized?.summary,
    alternates: { canonical: `/fr/projects/${slug}/` },
  }
}

export default async function FrenchCaseStudyPage({ params }: Props) {
  const { slug } = await params
  const source = getProject(slug)
  if (!source) notFound()
  const project = projectForLocale(source, "fr")
  const { previous, next } = getAdjacentProjects(slug)
  const t = await getTranslations({ locale: "fr", namespace: "ProjectCase" })

  return (
    <PageFrame locale="fr">
      <article className="case-study">
        <header className="container case-header">
          <Link href="/fr/projects" className="back-link"><ArrowLeft size={17} aria-hidden="true" /> {t("back")}</Link>
          <div className="case-meta"><span>{project.number} / {categoryLabel(project.category, "fr")}</span><span>{project.type}</span>{project.timeframe && <span>{project.timeframe}</span>}</div>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-role"><span>{t("role")}</span><strong>{project.role}</strong></div>
          {project.repositoryUrl && <div className="case-action-links"><a className="case-source-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">{t("publicCode")} <ArrowUpRight size={16} aria-hidden="true" /></a></div>}
        </header>

        <div className="container case-hero-art"><ProjectArtwork kind={project.diagram} locale="fr" /></div>

        <section className="container case-section case-overview">
          <div><span className="eyebrow">{t("overview")}</span><h2>{t("problem")}</h2></div>
          <p>{project.overview}</p>
        </section>

        <section className="container case-section">
          <div className="case-section-heading"><span className="eyebrow">{t("contribution")}</span><h2>{t("where")}</h2></div>
          <div className="contribution-grid">{project.contribution.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div>
        </section>

        <section className="case-process">
          <div className="container"><div className="case-section-heading"><span className="eyebrow">{t("flow")}</span><h2>{t("input")}</h2></div><Diagram project={project} locale="fr" /></div>
        </section>

        <section className="container case-section case-approach">
          <div><span className="eyebrow">{t("implementation")}</span><h2>{t("how")}</h2></div>
          <ol>{project.implementation.map((item) => <li key={item}>{item}</li>)}</ol>
        </section>

        <section className="container case-section">
          <div className="case-section-heading"><span className="eyebrow">{t("results")}</span><h2>{t("measured")}</h2></div>
          <div className="results-grid">{project.results.map((result) => <div className="result-card" key={result.label}><strong>{result.value}</strong><span>{result.label}</span><p>{result.context}</p></div>)}</div>
        </section>

        <section className="container case-section stack-section">
          <div><span className="eyebrow">{t("technology")}</span><h2>{t("stack")}</h2></div>
          <div className="skill-cloud">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        <nav className="container case-nav" aria-label="Navigation entre les projets">
          {previous ? <Link href={`/fr/projects/${previous.slug}`}><ArrowLeft size={19} aria-hidden="true" /><span>{t("previous")}<strong>{projectForLocale(previous, "fr").shortTitle}</strong></span></Link> : <span aria-hidden="true" />}
          <Link href="/fr/projects" className="all-work">{t("all")} <ArrowUpRight size={15} aria-hidden="true" /></Link>
          {next ? <Link href={`/fr/projects/${next.slug}`}><span>{t("next")}<strong>{projectForLocale(next, "fr").shortTitle}</strong></span><ArrowRight size={19} aria-hidden="true" /></Link> : <span aria-hidden="true" />}
        </nav>
      </article>
    </PageFrame>
  )
}
