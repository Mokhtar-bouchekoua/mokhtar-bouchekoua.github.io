import type { Metadata } from "next"
import { localeAlternates } from "@/lib/site-url"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { ArrowUpRight } from "lucide-react"
import {
  Avatar,
  ButtonLink,
  ContactLink,
  FeatureStats,
  HeroVisual,
  MetricStrip,
  PageFrame,
  ProjectCard,
  ScrollCue,
  SectionIntro,
} from "@/components/site-shell"
import { availability, projects, skills } from "@/lib/projects"
import { projectForLocale } from "@/lib/project-translations"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "fr", namespace: "Home" })
  return { title: "Accueil", description: t("lede"), alternates: localeAlternates("/", "fr") }
}

export default async function FrenchHomePage() {
  const t = await getTranslations({ locale: "fr", namespace: "Home" })
  const proofPoints = [
    { value: "94 %", label: "HitRate@1 du RAG · évaluation" },
    { value: "99,6 %", label: "d’anomalies ERP en moins" },
    { value: "98,3 %", label: "F1 macro RCA · IoT synthétique" },
  ]

  return (
    <PageFrame locale="fr">
      <section className="hero container">
        <div className="hero-copy">
          <span className="eyebrow"><span className="status-dot" /> {t("eyebrow")}</span>
          <h1>{t("title")} <em>{t("titleAccent")}</em></h1>
          <p className="hero-lede">{t("lede")}</p>
          <div className="hero-actions">
            <ButtonLink href="/fr/projects">{t("work")}</ButtonLink>
            <ButtonLink href="/fr/resume" secondary>{t("resume")}</ButtonLink>
          </div>
          <div className="hero-person"><Avatar size={44} locale="fr" /><span><strong>Mokhtar Bouchekoua</strong><small>{t("building")}</small></span></div>
        </div>
        <HeroVisual locale="fr" />
        <ScrollCue locale="fr" />
      </section>

      <section className="proof-band" aria-label="Résultats mesurés des projets sélectionnés">
        <div className="container proof-inner">
          <div className="proof-label">{t("outcomes")}</div>
          <MetricStrip stats={proofPoints} />
        </div>
      </section>

      <section className="section-block container" id="selected-work">
        <div className="section-heading-row">
          <SectionIntro eyebrow={t("sectionEyebrow")} title={t("sectionTitle")} description={t("sectionDescription")} />
          <Link href="/fr/projects" className="text-link">{t("allProjects")} <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={projectForLocale(project, "fr")} featured={index === 0} locale="fr" />)}
        </div>
      </section>

      <section className="feature-story">
        <div className="container feature-grid">
          <div className="feature-copy">
            <span className="eyebrow light">{t("focusEyebrow")}</span>
            <h2>{t("focusTitle")}<br /><em>{t("focusAccent")}</em></h2>
            <p>{t("focusDescription")}</p>
            <Link href="/fr/projects/smartalpr-plaqueguard" className="feature-link">{t("focusLink")} <ArrowUpRight size={18} aria-hidden="true" /></Link>
          </div>
          <FeatureStats
            label="SMARTALPR / ÉVALUATION"
            foot="PROJET ACADÉMIQUE EN IA · VISION PAR ORDINATEUR"
            stats={[
              { value: "89 %", label: "mAP@0.5 · détection des plaques" },
              { value: "≈ 22", label: "FPS · débit de détection" },
              { value: "88 %", label: "Hit rate · recherche RAG" },
            ]}
          />
        </div>
      </section>

      <section className="technical-section container">
        <div>
          <span className="eyebrow">{t("toolkitEyebrow")}</span>
          <h2>{t("toolkitTitle")} <em>{t("toolkitAccent")}</em></h2>
          <p>{t("toolkitDescription")}</p>
          <Link href="/fr/about" className="text-link">{t("about")} <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section className="container closing-note">
        <div><span className="eyebrow">{t("opportunities")}</span><p className="availability-note">{availability.fr}</p></div>
        <p>{t("closing")}</p>
        <ContactLink locale="fr" />
      </section>
    </PageFrame>
  )
}
