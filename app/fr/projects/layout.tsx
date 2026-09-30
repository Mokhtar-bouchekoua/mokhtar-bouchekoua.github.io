import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projets",
  description: "Projets sélectionnés en IA, IoT, données et génie logiciel Full Stack de Mokhtar Bouchekoua.",
  alternates: { canonical: "/fr/projects/" },
}

export default function FrenchProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
