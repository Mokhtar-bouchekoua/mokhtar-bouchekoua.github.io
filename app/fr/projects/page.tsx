import { getTranslations } from "next-intl/server"
import { PageFrame } from "@/components/site-shell"
import { ProjectIndex } from "@/features/projects/ui/project-index"

export default async function FrenchProjectsPage() {
  const t = await getTranslations({ locale: "fr", namespace: "Projects" })
  return (
    <PageFrame locale="fr">
      <section className="container page-hero">
        <span className="eyebrow">{t("eyebrow")}</span>
        <h1>{t("title")} <em>{t("titleAccent")}</em></h1>
        <p>{t("description")}</p>
      </section>
      <section className="container projects-index">
        <ProjectIndex locale="fr" />
      </section>
    </PageFrame>
  )
}
