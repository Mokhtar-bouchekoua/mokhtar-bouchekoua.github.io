import type { Metadata } from "next"
import { localeAlternates } from "@/lib/site-url"

export const metadata: Metadata = {
  title: "Projets",
  description: "Projets sélectionnés en IA, IoT, données et génie logiciel Full Stack de Mokhtar Bouchekoua.",
  alternates: localeAlternates("/projects/", "fr"),
}

export default function FrenchProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
