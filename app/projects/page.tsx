"use client"

import { useState } from "react"
import { PageFrame, ProjectCard } from "@/components/site-shell"
import { categories, projects, type ProjectCategory } from "@/lib/projects"

export default function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "All">("All")
  const visible = active === "All" ? projects : projects.filter((project) => project.filters.includes(active))

  return (
    <PageFrame>
      <section className="container page-hero">
        <span className="eyebrow">SELECTED WORK / 01—04</span>
        <h1>Selected <em>AI &amp; software</em> projects.</h1>
        <p>Four projects spanning intelligent buildings, business intelligence, edge AI, and computer vision. Each case study shows the problem, my contribution, and the evaluation context.</p>
      </section>
      <section className="container projects-index">
        <div className="filter-row" role="group" aria-label="Filter projects by discipline">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={active === category ? "filter-active" : ""}
              aria-pressed={active === category}
              onClick={() => setActive(category)}
            >{category}</button>
          ))}
        </div>
        <p className="filter-count">SHOWING {visible.length} OF {projects.length} PROJECTS</p>
        <div className="project-grid">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
    </PageFrame>
  )
}
