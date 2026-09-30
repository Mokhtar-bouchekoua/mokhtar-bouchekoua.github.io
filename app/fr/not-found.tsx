import Link from "next/link"
import { PageFrame } from "@/components/site-shell"

export default function FrenchNotFound() {
  return <PageFrame locale="fr"><section className="container not-found"><span className="eyebrow">404 / PAGE INTROUVABLE</span><h1>Cette page n’existe pas encore.</h1><p>L’adresse a peut-être changé. Vous pouvez revenir à l’accueil ou parcourir les projets.</p><Link href="/fr/projects" className="button-link">Découvrir les projets</Link></section></PageFrame>
}
