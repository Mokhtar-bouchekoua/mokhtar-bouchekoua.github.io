import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Mokhtar Bouchekoua — AI & Full Stack Engineer | Projects",
    template: "Mokhtar Bouchekoua — AI & Full Stack Engineer | %s",
  },
  description: "Selected AI, IoT, data and full stack engineering projects by Mokhtar Bouchekoua.",
}

export default function ProjectsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
