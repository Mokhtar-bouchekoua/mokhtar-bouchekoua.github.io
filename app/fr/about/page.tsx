import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { ArrowUpRight } from "lucide-react"
import { PageFrame, SectionIntro } from "@/components/site-shell"
import { techGroups } from "@/lib/projects"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "fr", namespace: "About" })
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: { canonical: "/fr/about/" } }
}

const experience = [
  { date: "FÉV — JUIL 2026", title: "Ingénieur IA et Full Stack", place: "I-Way · Projet de fin d’études", detail: "Plateforme de jumeau numérique pour la supervision intelligente des bâtiments, les prévisions, la détection d’anomalies, le RAG et la visualisation 3D." },
  { date: "JUIL — AOÛT 2025", title: "Stagiaire Data & IA / BI", place: "MyPartner", detail: "Qualité des données ERP, indicateurs financiers, simulation What-If et assistant IA d’analyse métier." },
  { date: "JAN — JUIN 2025", title: "Projet de recherche en Edge AI", place: "IIT Sfax", detail: "Détection et classification multitâches des anomalies et analyse de leurs causes dans des séries temporelles IoT multivariées." },
  { date: "JUIN — JUIL 2024", title: "Stagiaire développeur Full Stack", place: "Flash Marketing Digital", detail: "Développement de la plateforme e-commerce Allo Fruit avec Laravel, React et MySQL." },
  { date: "FÉV — JUIN 2023", title: "Drone agricole intelligent", place: "ISGI Sfax · Projet de fin d’études", detail: "Drone équipé d’un capteur NPK 7-en-1 et d’une application Flutter pour l’analyse des sols, les mesures et les alertes." },
]

const groupLabels = [
  "Programmation et backend",
  "IA et apprentissage automatique",
  "IA générative et LLMOps",
  "Frontend et visualisation",
  "Données, recherche et IoT",
  "Déploiement et observabilité",
]
const itemLabels: Record<string, string> = {
  "Anomaly detection": "Détection d’anomalies",
  Forecasting: "Prévision",
  "Edge Computing": "Edge Computing",
  "Model monitoring": "Suivi des modèles",
  "LLM tracing": "Traçage des LLM",
}

export default async function FrenchAboutPage() {
  const t = await getTranslations({ locale: "fr", namespace: "About" })
  return (
    <PageFrame locale="fr">
      <section className="container page-hero about-hero">
        <span className="eyebrow">{t("eyebrow")}</span>
        <h1>{t("title")} <em>{t("titleAccent")}</em></h1>
        <p>{t("intro")}</p>
      </section>

      <section className="container about-intro">
        <div className="portrait-wrap">
          <Image src="/mokhtar-bouchekoua.jpg" alt="Portrait de Mokhtar Bouchekoua" width={620} height={704} className="about-portrait" priority />
          <span>{t("profile")}</span>
        </div>
        <div className="about-intro-copy">
          <span className="eyebrow">{t("short")}</span>
          <h2>{t("shortTitle")}</h2>
          <p>{t("shortP1")}</p>
          <p>{t("shortP2")}</p>
          <Link href="/fr/projects" className="text-link">{t("work")} <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="container about-timeline">
        <SectionIntro eyebrow={t("experienceEyebrow")} title={t("experienceTitle")} />
        <div className="timeline-list">{experience.map((item) => <article key={item.date}>
          <span>{item.date}</span><div><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.detail}</p></div>
        </article>)}</div>
      </section>

      <section className="about-education">
        <div className="container education-grid">
          <SectionIntro eyebrow={t("educationEyebrow")} title={t("educationTitle")} />
          <div className="education-list">
            <div><span>2023 — 2026</span><h3>{t("degree1")}</h3><p>{t("school1")}</p></div>
            <div><span>2023</span><h3>{t("degree2")}</h3><p>{t("school2")}</p></div>
          </div>
        </div>
      </section>

      <section className="container about-toolkit">
        <SectionIntro eyebrow={t("toolkitEyebrow")} title={t("toolkitTitle")} />
        <div className="tech-groups">{techGroups.map((group, index) => <div key={group.label}><h3>{groupLabels[index]}</h3><p>{group.items.map((item) => itemLabels[item] ?? item).join(" · ")}</p></div>)}</div>
      </section>

      <section className="container about-more">
        <div><span className="eyebrow">{t("languages")}</span><p>Arabe · Français · Anglais</p></div>
        <div><span className="eyebrow">{t("certifications")}</span><p>Arduino (ISGIS) · Certificat Python · CCNA · Badge AWS</p></div>
        <div><span className="eyebrow">{t("recognition")}</span><p>{t("award")}<br />{t("ieee")}</p></div>
      </section>
      <div className="container about-next"><span className="eyebrow">{t("next")}</span><Link href="/fr/contact">{t("connect")} <ArrowUpRight size={26} aria-hidden="true" /></Link></div>
    </PageFrame>
  )
}
