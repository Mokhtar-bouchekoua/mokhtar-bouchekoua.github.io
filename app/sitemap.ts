import type { MetadataRoute } from "next"
import { projects } from "@/lib/projects"
import { siteUrl } from "@/lib/site-url"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/about", "/resume", "/contact", ...projects.map((project) => `/projects/${project.slug}`)]
  return routes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: "monthly" }))
}
