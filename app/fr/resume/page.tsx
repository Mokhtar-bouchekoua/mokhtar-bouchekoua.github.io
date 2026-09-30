import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { ButtonLink, PageFrame } from "@/components/site-shell"
import { links, techGroups } from "@/lib/projects"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "fr", namespace: "Resume" })
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: { canonical: "/fr/resume/" } }
}

const groupLabels = ["Programmation et backend", "IA et apprentissage automatique", "IA générative et LLMOps", "Frontend et visualisation", "Données, recherche et IoT", "Déploiement et observabilité"]

export default async function FrenchResumePage() {
  const t = await getTranslations({ locale: "fr", namespace: "Resume" })
  return (
    <PageFrame locale="fr">
      <section className="container page-hero resume-hero">
        <span className="eyebrow">{t("eyebrow")}</span>
        <h1>{t("title")} <em>{t("titleAccent")}</em></h1>
        <p>{t("intro")}</p>
        <div className="hero-actions">
          <ButtonLink href="/fr/projects">{t("projects")}</ButtonLink>
          <ButtonLink href="/fr/contact" secondary>{t("contact")}</ButtonLink>
        </div>
      </section>

      <div className="resume-content container">
        <aside className="resume-aside">
          <div><span className="eyebrow">{t("profile")}</span><h2>Mokhtar<br />Bouchekoua</h2><p>Ingénieur IA et Full Stack<br />Sfax, Tunisie</p></div>
          <div><span className="eyebrow">{t("contactLabel")}</span><a href={links.email}>mokhtarbouchekoua@gmail.com</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          <div><span className="eyebrow">{t("languages")}</span><p>Arabe · Français · Anglais</p></div>
        </aside>

        <div className="resume-main">
          <section className="resume-section"><span className="eyebrow">{t("experience")}</span>
            <article><time>2026</time><div><h3>Ingénieur IA et Full Stack</h3><strong>I-Way · Projet de fin d’études</strong><p>Développement d’un jumeau numérique réunissant ingestion IoT, prévisions, détection d’anomalies, RAG agentique et visualisation 3D.</p></div></article>
            <article><time>2025</time><div><h3>Stagiaire Data &amp; IA / BI</h3><strong>MyPartner</strong><p>Amélioration de la qualité des données ERP et développement d’une application d’analyse financière enrichie par l’IA.</p></div></article>
            <article><time>2025</time><div><h3>Projet de recherche en Edge AI</h3><strong>IIT Sfax</strong><p>Développement et évaluation d’un modèle multitâche pour la détection et la classification d’anomalies IoT et l’analyse de leurs causes.</p></div></article>
            <article><time>2024</time><div><h3>Stagiaire développeur Full Stack</h3><strong>Flash Marketing Digital</strong><p>Développement de la plateforme e-commerce Allo Fruit avec Laravel, React et MySQL.</p></div></article>
          </section>

          <section className="resume-section"><span className="eyebrow">{t("education")}</span>
            <article><time>2023—2026</time><div><h3>Diplôme d’ingénieur en informatique</h3><strong>Institut International de Technologie · Sfax</strong></div></article>
            <article><time>2023</time><div><h3>Licence en électronique, génie électrique et automatisme</h3><strong>Institut Supérieur de Gestion Industrielle · Sfax</strong></div></article>
          </section>

          <section className="resume-section"><span className="eyebrow">{t("focus")}</span><div className="resume-tech">{techGroups.map((group, index) => <div key={group.label}><strong>{groupLabels[index]}</strong><p>{group.items.join(" · ")}</p></div>)}</div></section>
          <section className="resume-section resume-last"><span className="eyebrow">{t("recognition")}</span><p>{t("award")}</p></section>
        </div>
      </div>
    </PageFrame>
  )
}
