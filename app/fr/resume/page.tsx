import type { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { ButtonLink, PageFrame } from "@/components/site-shell"
import { availability, links, recognition, techGroups } from "@/lib/projects"
import { education, experience, languages } from "@/lib/profile"
import { skillLabel } from "@/lib/project-translations"
import { localeAlternates } from "@/lib/site-url"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "fr", namespace: "Resume" })
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: localeAlternates("/resume/", "fr") }
}

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
          <div><span className="eyebrow">{t("availability")}</span><p>{availability.fr}</p></div>
          <div><span className="eyebrow">{t("contactLabel")}</span><a href={links.email}>mokhtarbouchekoua@gmail.com</a><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
          <div><span className="eyebrow">{t("languages")}</span><p>{languages.fr}</p></div>
        </aside>

        <div className="resume-main">
          <section className="resume-section"><h2 className="resume-heading">{t("experience")}</h2>
            {experience.map((item) => <article key={item.title.fr}><time>{item.period.fr}</time><div><h3>{item.title.fr}</h3><strong>{item.place.fr}</strong><p>{item.detail.fr}</p></div></article>)}
          </section>
          <section className="resume-section"><h2 className="resume-heading">{t("education")}</h2>
            {education.map((item) => <article key={item.title.fr}><time>{item.period.fr}</time><div><h3>{item.title.fr}</h3><strong>{item.place.fr}</strong></div></article>)}
          </section>
          <section className="resume-section"><h2 className="resume-heading">{t("focus")}</h2><div className="resume-tech">{techGroups.map((group) => <div key={group.label}><h3>{group.labelFr}</h3><ul className="skill-tags">{group.items.map((item) => <li key={item}>{skillLabel(item, "fr")}</li>)}</ul></div>)}</div></section>
          <section className="resume-section resume-last"><h2 className="resume-heading">{t("recognition")}</h2><p>{recognition.fr.join(" · ")}</p></section>
        </div>
      </div>
    </PageFrame>
  )
}
