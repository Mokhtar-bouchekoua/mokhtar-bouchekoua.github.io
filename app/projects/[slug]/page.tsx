import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { Diagram, PageFrame, ProjectArtwork } from "@/components/site-shell"
import { getAdjacentProjects, getProject, projects } from "@/lib/projects"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  return { title: project?.title ?? "Project not found", description: project?.summary }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { previous, next } = getAdjacentProjects(slug)

  return (
    <PageFrame>
      <article className="case-study">
        <header className="container case-header">
          <Link href="/projects" className="back-link"><ArrowLeft size={17} aria-hidden="true" /> All projects</Link>
          <div className="case-meta"><span>{project.number} / {project.category}</span><span>{project.type}</span>{project.timeframe && <span>{project.timeframe}</span>}</div>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-role"><span>MY ROLE</span><strong>{project.role}</strong></div>
          {project.repositoryUrl && <div className="case-action-links">
            <a className="case-source-link" href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">View public code <ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>}
        </header>

        <div className="container case-hero-art"><ProjectArtwork kind={project.diagram} /></div>

        <section className="container case-section case-overview">
          <div><span className="eyebrow">01 / OVERVIEW</span><h2>The problem and the system.</h2></div>
          <p>{project.overview}</p>
        </section>

        <section className="container case-section">
          <div className="case-section-heading"><span className="eyebrow">02 / MY CONTRIBUTION</span><h2>Where I worked.</h2></div>
          <div className="contribution-grid">
            {project.contribution.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}
          </div>
        </section>

        <section className="case-process">
          <div className="container">
            <div className="case-section-heading"><span className="eyebrow">03 / SYSTEM FLOW</span><h2>From input to outcome.</h2></div>
            <Diagram project={project} />
          </div>
        </section>

        <section className="container case-section case-approach">
          <div><span className="eyebrow">04 / IMPLEMENTATION</span><h2>How it works.</h2></div>
          <ol>{project.implementation.map((item) => <li key={item}>{item}</li>)}</ol>
        </section>

        <section className="container case-section">
          <div className="case-section-heading"><span className="eyebrow">05 / RESULTS</span><h2>Measured in context.</h2></div>
          <div className="results-grid">
            {project.results.map((result) => <div className="result-card" key={result.label}>
              <strong>{result.value}</strong><span>{result.label}</span><p>{result.context}</p>
            </div>)}
          </div>
        </section>

        <section className="container case-section stack-section">
          <div><span className="eyebrow">06 / TECHNOLOGY</span><h2>The tools behind the work.</h2></div>
          <div className="skill-cloud">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </section>

        <nav className="container case-nav" aria-label="Project navigation">
          {previous ? <Link href={`/projects/${previous.slug}`}><ArrowLeft size={19} aria-hidden="true" /><span>Previous project<strong>{previous.shortTitle}</strong></span></Link> : <span aria-hidden="true" />}
          <Link href="/projects" className="all-work">All work <ArrowUpRight size={15} aria-hidden="true" /></Link>
          {next ? <Link href={`/projects/${next.slug}`}><span>Next project<strong>{next.shortTitle}</strong></span><ArrowRight size={19} aria-hidden="true" /></Link> : <span aria-hidden="true" />}
        </nav>
      </article>
    </PageFrame>
  )
}
