import type { Metadata } from "next"
import { localeAlternates } from "@/lib/site-url"

export const metadata: Metadata = {
  title: {
    default: "Projects",
    template: "Mokhtar Bouchekoua — AI & Full Stack Engineer | %s",
  },
  description: "Selected AI, IoT, data and full stack engineering projects by Mokhtar Bouchekoua.",
  alternates: localeAlternates("/projects/", "en"),
}

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
