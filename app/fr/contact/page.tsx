import type { Metadata } from "next"
import { localeAlternates } from "@/lib/site-url"
import { getTranslations } from "next-intl/server"
import { ArrowUpRight, Mail } from "lucide-react"
import { Avatar, PageFrame } from "@/components/site-shell"
import { CopyEmailButton } from "@/features/contact/ui/copy-email-button"
import { availability, links, person } from "@/lib/projects"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "fr", namespace: "Contact" })
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: localeAlternates("/contact/", "fr") }
}

export default async function FrenchContactPage() {
  const t = await getTranslations({ locale: "fr", namespace: "Contact" })
  return (
    <PageFrame locale="fr">
      <section className="container contact-page">
        <div className="contact-topline"><span className="eyebrow">{t("eyebrow")}</span><span>{t("location")}</span></div>
        <h1>{t("title")} <em>{t("titleAccent")}</em></h1>
        <p>{t("intro")}</p>
        <p className="availability-note">{availability.fr}</p>
        <a className="email-link" href={links.email}><Mail size={26} aria-hidden="true" /><span>{person.email}</span><ArrowUpRight size={28} aria-hidden="true" /></a>
        <CopyEmailButton email={person.email} locale="fr" />
        <div className="contact-bottom">
          <div className="contact-identity"><Avatar size={54} locale="fr" /><span><strong>Mokhtar Bouchekoua</strong><small>Ingénieur IA et Full Stack</small></span></div>
          <div className="contact-socials"><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
      </section>
    </PageFrame>
  )
}
