import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getTranslations } from "next-intl/server"
import { ArrowUpRight } from "lucide-react"
import { ButtonLink, PageFrame, SectionIntro } from "@/components/site-shell"
import { languages, principles } from "@/lib/profile"
import { localeAlternates } from "@/lib/site-url"

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "fr", namespace: "About" })
  return { title: t("metaTitle"), description: t("metaDescription"), alternates: localeAlternates("/about/", "fr") }
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
          <Image src="/mokhtar-bouchekoua-portrait.jpg" alt="Portrait de Mokhtar Bouchekoua" width={1080} height={1080} className="about-portrait" priority />
        </div>
        <div className="about-intro-copy">
          <span className="eyebrow">{t("short")}</span>
          <h2>{t("shortTitle")}</h2>
          <p>{t("shortP1")}</p>
          <p>{t("shortP2")}</p>
          <Link href="/fr/projects" className="text-link">{t("work")} <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="about-principles">
        <div className="container principles-grid">
          <SectionIntro eyebrow={t("principlesEyebrow")} title={t("principlesTitle")} />
          <div className="principles-list">
            {principles.map((item) => <article key={item.title.fr}><h3>{item.title.fr}</h3><p>{item.body.fr}</p></article>)}
          </div>
        </div>
      </section>

      <section className="container about-more">
        <div><span className="eyebrow">{t("languages")}</span><p>{languages.fr}</p></div>
        <div><span className="eyebrow">{t("community")}</span><p>{t("ieee")}</p></div>
        <div><span className="eyebrow">{t("basedIn")}</span><p>{t("location")}</p></div>
      </section>

      <section className="container about-next">
        <div><span className="eyebrow">{t("next")}</span><p>{t("nextText")}</p></div>
        <div className="hero-actions">
          <ButtonLink href="/fr/resume">{t("resume")}</ButtonLink>
          <ButtonLink href="/fr/contact" secondary>{t("contact")}</ButtonLink>
        </div>
      </section>
    </PageFrame>
  )
}
