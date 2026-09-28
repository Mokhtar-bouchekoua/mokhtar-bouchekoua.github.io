import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageFrame, SectionIntro } from "@/components/site-shell"
import { techGroups } from "@/lib/projects"

export const metadata: Metadata = {
  title: "About",
  description: "Experience, education and technical approach of Mokhtar Bouchekoua, AI & Full Stack Engineer.",
}

const experience = [
  { date: "FEB — JUL 2026", title: "AI & Full Stack Engineer", place: "I-Way · Final-year project", detail: "Digital twin platform for intelligent building monitoring, forecasting, anomaly detection, RAG and 3D visualization." },
  { date: "JUL — AUG 2025", title: "Data & AI / BI Intern", place: "MyPartner", detail: "ERP data quality, financial KPIs, What-If simulation and an AI assistant for business analysis." },
  { date: "JAN — JUN 2025", title: "Edge AI Research Project", place: "IIT Sfax", detail: "Multi-task anomaly detection, typing and root cause analysis in multivariate IoT time series." },
  { date: "JUN — JUL 2024", title: "Full Stack Developer Intern", place: "Flash Marketing Digital", detail: "Developed the Allo Fruit e-commerce platform with Laravel, React and MySQL." },
  { date: "FEB — JUN 2023", title: "Smart Agricultural Drone", place: "ISGI Sfax · Final-year project", detail: "Drone with a 7-in-1 NPK sensor and a Flutter app for soil analysis, measurements and alerts." },
]

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="container page-hero about-hero">
        <span className="eyebrow">ABOUT / MOKHTAR BOUCHEKOUA</span>
        <h1>AI is one layer. <em>I build the whole system.</em></h1>
        <p>I&apos;m an AI &amp; Full Stack Engineer in Sfax, Tunisia. I work across applied machine learning, real-time data and product engineering.</p>
      </section>

      <section className="container about-intro">
        <div className="portrait-wrap">
          <Image src="/mokhtar-bouchekoua.jpg" alt="Mokhtar Bouchekoua" width={620} height={704} className="about-portrait" priority />
          <span>MOKHTAR BOUCHEKOUA / PROFILE</span>
        </div>
        <div className="about-intro-copy">
          <span className="eyebrow">THE SHORT VERSION</span>
          <h2>Good AI work reaches beyond the model.</h2>
          <p>My projects have taken me from IoT ingestion and time-series storage to model evaluation, LLM observability and interactive interfaces. I enjoy the engineering decisions that connect those layers.</p>
          <p>I bring a full stack perspective to AI problems: understand the source data, measure model behavior, and make the result clear to the person using it.</p>
          <Link href="/projects" className="text-link">Explore the work <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
      </section>

      <section className="container about-timeline">
        <SectionIntro eyebrow="01 / EXPERIENCE & PROJECTS" title="A path through data, AI and software." />
        <div className="timeline-list">{experience.map((item) => <article key={item.date}>
          <span>{item.date}</span><div><h3>{item.title}</h3><strong>{item.place}</strong><p>{item.detail}</p></div>
        </article>)}</div>
      </section>

      <section className="about-education">
        <div className="container education-grid">
          <SectionIntro eyebrow="02 / EDUCATION" title="Grounded in engineering." />
          <div className="education-list">
            <div><span>2023 — 2026</span><h3>Engineering Degree in Computer Science</h3><p>International Institute of Technology (IIT) · Sfax, Tunisia</p></div>
            <div><span>2023</span><h3>Bachelor&apos;s Degree in Electronics, Electrical Engineering and Automation</h3><p>Higher Institute of Industrial Management (ISGI) · Sfax, Tunisia</p></div>
          </div>
        </div>
      </section>

      <section className="container about-toolkit">
        <SectionIntro eyebrow="03 / TOOLKIT" title="Tools for the whole stack." />
        <div className="tech-groups">{techGroups.map((group) => <div key={group.label}><h3>{group.label}</h3><p>{group.items.join(" · ")}</p></div>)}</div>
      </section>

      <section className="container about-more">
        <div><span className="eyebrow">LANGUAGES</span><p>Arabic · French · English</p></div>
        <div><span className="eyebrow">CERTIFICATIONS</span><p>Arduino (ISGIS) · Python Certificate · CCNA · AWS Badge</p></div>
        <div><span className="eyebrow">RECOGNITION</span><p>Best Final-Year Project Award, 2023<br />IEEE member</p></div>
      </section>
      <div className="container about-next"><span className="eyebrow">NEXT / LET&apos;S CONNECT</span><Link href="/contact">Have a project or role in mind? <ArrowUpRight size={26} aria-hidden="true" /></Link></div>
    </PageFrame>
  )
}
