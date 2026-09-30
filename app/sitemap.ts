import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"
import { siteUrl } from "@/lib/site-url"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "", "/projects/", "/about/", "/resume/", "/contact/",
    "/fr/", "/fr/projects/", "/fr/about/", "/fr/resume/", "/fr/contact/",
    ...projects.flatMap((project) => [`/projects/${project.slug}/`, `/fr/projects/${project.slug}/`]),
  ]
  return routes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: "monthly" }))
}
