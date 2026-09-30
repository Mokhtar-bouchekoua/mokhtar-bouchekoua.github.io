"use client"

import { useState } from "react"
import { PageFrame, ProjectCard } from "@/components/site-shell"
import { categories, projects, type ProjectCategory } from "@/lib/projects"
import { categoryLabel, projectForLocale } from "@/lib/project-translations"

export default function FrenchProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "All">("All")
  const visible = active === "All" ? projects : projects.filter((project) => project.filters.includes(active))

  return (
    <PageFrame locale="fr">
      <section className="container page-hero">
        <span className="eyebrow">PROJETS SÉLECTIONNÉS / 01—04</span>
        <h1>Projets <em>d’IA et de logiciel.</em></h1>
        <p>Quatre projets autour des bâtiments intelligents, de l’intelligence d’affaires, de l’IA en périphérie et de la vision par ordinateur. Chaque étude présente le problème, ma contribution et le contexte d’évaluation.</p>
      </section>
      <section className="container projects-index">
        <div className="filter-row" role="group" aria-label="Filtrer les projets par domaine">
          {categories.map((category) => (
            <button key={category} type="button" className={active === category ? "filter-active" : ""} aria-pressed={active === category} onClick={() => setActive(category)}>
              {categoryLabel(category, "fr")}
            </button>
          ))}
        </div>
        <p className="filter-count">AFFICHAGE DE {visible.length} PROJETS SUR {projects.length}</p>
        <div className="project-grid">{visible.map((project) => <ProjectCard key={project.slug} project={projectForLocale(project, "fr")} locale="fr" />)}</div>
      </section>
    </PageFrame>
  )
}
