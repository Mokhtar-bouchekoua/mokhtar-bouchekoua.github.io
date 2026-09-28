import Link from "next/link"
import { PageFrame } from "@/components/site-shell"

export default function NotFound() {
  return <PageFrame><section className="container not-found"><span className="eyebrow">404 / PAGE NOT FOUND</span><h1>There&apos;s nothing here yet.</h1><p>The address may have changed. You can return to the homepage or explore the projects.</p><Link href="/projects" className="button-link">Explore projects</Link></section></PageFrame>
}
