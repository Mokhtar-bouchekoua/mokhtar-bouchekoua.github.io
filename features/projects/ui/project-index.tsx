"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/site-shell"
import { categories, projects, type ProjectCategory } from "@/lib/projects"
import { categoryLabel, projectForLocale } from "@/lib/project-translations"

type Locale = "en" | "fr"

const copy = {
  en: { filter: "Filter projects by discipline", count: (shown: number, total: number) => `SHOWING ${shown} OF ${total} PROJECTS` },
  fr: { filter: "Filtrer les projets par domaine", count: (shown: number, total: number) => `${shown} ${shown > 1 ? "PROJETS AFFICHÉS" : "PROJET AFFICHÉ"} SUR ${total}` },
} satisfies Record<Locale, { filter: string; count: (shown: number, total: number) => string }>

export function ProjectIndex({ locale = "en" }: { locale?: Locale }) {
  const [active, setActive] = useState<ProjectCategory | "All">("All")
  const visible = active === "All" ? projects : projects.filter((project) => project.filters.includes(active))
  const t = copy[locale]

  return (
    <>
      <div className="filter-row" role="group" aria-label={t.filter}>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={active === category ? "filter-active" : ""}
            aria-pressed={active === category}
            onClick={() => setActive(category)}
          >{categoryLabel(category, locale)}</button>
        ))}
      </div>
      <p className="filter-count" aria-live="polite">{t.count(visible.length, projects.length)}</p>
      <div className="project-grid">
        {visible.map((project, index) => (
          <ProjectCard
            key={project.slug}
            project={projectForLocale(project, locale)}
            locale={locale}
            // In a two-column grid an odd count leaves the last card alone; give it the full-width layout instead.
            featured={visible.length % 2 === 1 && index === visible.length - 1}
          />
        ))}
      </div>
    </>
  )
}
