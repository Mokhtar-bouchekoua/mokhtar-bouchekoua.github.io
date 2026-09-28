import type { Metadata } from "next"
import { ArrowUpRight, Mail } from "lucide-react"
import { Avatar, PageFrame } from "@/components/site-shell"
import { links, person } from "@/lib/projects"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Mokhtar Bouchekoua about AI engineering and full stack opportunities.",
}

export default function ContactPage() {
  return (
    <PageFrame>
      <section className="container contact-page">
        <div className="contact-topline"><span className="eyebrow">CONTACT / OPEN CHANNEL</span><span>SFAX, TUNISIA</span></div>
        <h1>Let&apos;s talk about <em>your project.</em></h1>
        <p>If you&apos;re building an AI product, working through a data challenge, or hiring across AI and full stack engineering, I&apos;d like to hear about it.</p>
        <a className="email-link" href={links.email}><Mail size={26} aria-hidden="true" /><span>{person.email}</span><ArrowUpRight size={28} aria-hidden="true" /></a>
        <div className="contact-bottom">
          <div className="contact-identity"><Avatar size={54} /><span><strong>Mokhtar Bouchekoua</strong><small>AI &amp; Full Stack Engineer</small></span></div>
          <div className="contact-socials"><a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} aria-hidden="true" /></a></div>
        </div>
      </section>
    </PageFrame>
  )
}
