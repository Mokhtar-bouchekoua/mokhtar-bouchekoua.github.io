import Image from "next/image"
import type { Project } from "@/lib/projects"

const artwork = {
  twin: {
    src: "/projects/digital-twin.webp",
    alt: { en: "Concept illustration of a modern building with a subtle digital twin overlay", fr: "Illustration conceptuelle d’un bâtiment moderne avec une représentation discrète de son jumeau numérique" },
  },
  bi: {
    src: "/projects/erp-bi.webp",
    alt: { en: "Concept illustration of financial analysis charts reviewed beside a laptop", fr: "Illustration conceptuelle de graphiques financiers analysés à côté d’un ordinateur portable" },
  },
  edge: {
    src: "/projects/edge-ai.webp",
    alt: { en: "Concept illustration of an industrial vision sensor inspecting a component", fr: "Illustration conceptuelle d’un capteur de vision industrielle inspectant une pièce" },
  },
  alpr: {
    src: "/projects/alpr.webp",
    alt: { en: "Concept illustration of privacy-safe computer vision detecting a blank vehicle plate", fr: "Illustration conceptuelle d’une vision par ordinateur détectant une plaque vierge, sans donnée personnelle" },
  },
} satisfies Record<Project["visual"], { src: string; alt: Record<"en" | "fr", string> }>

export function ProjectArtwork({ visual, compact = false, locale = "en" }: {
  visual: Project["visual"]
  compact?: boolean
  locale?: "en" | "fr"
}) {
  const french = locale === "fr"
  const asset = artwork[visual]

  return (
    <div className={`project-art art-${visual}${compact ? " art-compact" : ""}`} role="img" aria-label={asset.alt[locale]}>
      <Image
        src={asset.src}
        alt=""
        fill
        sizes={compact ? "(max-width: 760px) 100vw, 50vw" : "(max-width: 760px) 100vw, 1200px"}
        className="project-art-photo"
        priority={!compact}
      />
      <span className="project-art-caption">{french ? "Illustration conceptuelle" : "Concept illustration"}</span>
    </div>
  )
}
