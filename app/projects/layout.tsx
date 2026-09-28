import type { Metadata } from "next"

export const metadata: Metadata = {
  title: { default: "Projects", template: "%s — Mokhtar Bouchekoua" },
  description: "Selected AI, IoT, data and full stack engineering projects by Mokhtar Bouchekoua.",
}

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
