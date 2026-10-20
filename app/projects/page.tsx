import { PageFrame } from "@/components/site-shell"
import { ProjectIndex } from "@/features/projects/ui/project-index"

export default function ProjectsPage() {
  return (
    <PageFrame>
      <section className="container page-hero">
        <span className="eyebrow">SELECTED WORK</span>
        <h1>Selected <em>AI &amp; software</em> projects.</h1>
        <p>Seven projects spanning intelligent buildings, business intelligence, edge AI, computer vision, semantic search, full stack e-commerce and IoT. Each case study shows the problem, my contribution, and the evaluation context.</p>
      </section>
      <section className="container projects-index">
        <ProjectIndex />
      </section>
    </PageFrame>
  )
}
