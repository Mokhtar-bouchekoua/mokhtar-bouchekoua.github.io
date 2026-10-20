"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

// three.js is ~150 kB gzipped: load it on the client only, after the page is interactive.
const TwinScene = dynamic(() => import("./twin-scene"), { ssr: false })

const copy = {
  en: {
    label: "Interactive model of the digital twin case study: a building whose floor sensors stream data to an AI model",
    eyebrow: "INTERACTIVE MODEL · DIGITAL TWIN",
    stages: ["IoT sensors", "FastAPI · MQTT", "TimescaleDB", "LightGBM · LangGraph"],
    stat: "IoT measurements over ~14.6 months",
    link: "Open the case study",
    href: "/projects/digital-twin-platform",
  },
  fr: {
    label: "Modèle interactif de l’étude de cas du jumeau numérique : un bâtiment dont les capteurs envoient leurs données à un modèle d’IA",
    eyebrow: "MODÈLE INTERACTIF · JUMEAU NUMÉRIQUE",
    stages: ["Capteurs IoT", "FastAPI · MQTT", "TimescaleDB", "LightGBM · LangGraph"],
    stat: "mesures IoT sur ~14,6 mois",
    link: "Voir l’étude de cas",
    href: "/fr/projects/digital-twin-platform",
  },
}

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas")
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl")
    gl?.getExtension("WEBGL_lose_context")?.loseContext()
    return Boolean(gl)
  } catch {
    return false
  }
}

export function HeroTwin({ locale = "en" }: { locale?: "en" | "fr" }) {
  const t = copy[locale]
  const [webgl, setWebgl] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => setWebgl(supportsWebGL()), [])

  return (
    <figure className="hero-twin" data-ready={ready}>
      <p className="visually-hidden">{t.label}</p>
      <div className="hero-twin-backdrop" aria-hidden="true" />
      {webgl && <TwinScene onReady={() => setReady(true)} />}

      <div className="hero-twin-top">
        <span className="hero-twin-live" aria-hidden="true" />
        <span>{t.eyebrow}</span>
      </div>

      <ol className="hero-twin-stages">
        {t.stages.map((stage) => <li key={stage}>{stage}</li>)}
      </ol>

      <figcaption className="hero-twin-bottom">
        <div className="hero-twin-stat">
          <strong>{locale === "fr" ? "470 857" : "470,857"}</strong>
          <span>{t.stat}</span>
        </div>
        <Link href={t.href} className="hero-twin-link">{t.link} <ArrowUpRight size={16} aria-hidden="true" /></Link>
      </figcaption>
    </figure>
  )
}
