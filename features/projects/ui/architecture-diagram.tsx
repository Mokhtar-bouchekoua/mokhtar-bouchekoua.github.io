"use client"

import { useState } from "react"
import { architectures } from "@/lib/architectures"
import type { ProjectVisual } from "@/lib/projects"

const copy = {
  en: { label: "System architecture", hint: "Select a component to see its role." },
  fr: { label: "Architecture du système", hint: "Sélectionnez un composant pour voir son rôle." },
}

export function ArchitectureDiagram({ visual, locale = "en" }: { visual: ProjectVisual; locale?: "en" | "fr" }) {
  const stages = architectures[visual]
  const nodes = stages.flatMap((stage) => stage.nodes)
  const [selectedId, setSelectedId] = useState(nodes[0].id)
  const selected = nodes.find((node) => node.id === selectedId) ?? nodes[0]
  const t = copy[locale]

  return (
    <div className="arch">
      <ol className="arch-stages" aria-label={t.label} style={{ "--stages": stages.length } as React.CSSProperties}>
        {stages.map((stage, index) => (
          <li className="arch-stage" key={stage.label.en}>
            <span className="arch-stage-label">{stage.label[locale]}</span>
            <div className="arch-nodes">
              {stage.nodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  className="arch-node"
                  aria-current={node.id === selected.id ? "true" : undefined}
                  onClick={() => setSelectedId(node.id)}
                >
                  <strong>{node.name}</strong>
                  <span>{node.tech}</span>
                </button>
              ))}
            </div>
            {index < stages.length - 1 && <span className="arch-link" aria-hidden="true"><i /><i /></span>}
          </li>
        ))}
      </ol>
      <div className="arch-detail" aria-live="polite">
        <span className="arch-detail-tech">{selected.tech}</span>
        <strong>{selected.name}</strong>
        <p>{selected.detail[locale]}</p>
        <small>{t.hint}</small>
      </div>
    </div>
  )
}
