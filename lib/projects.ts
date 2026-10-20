export type ProjectCategory = "AI/ML" | "Generative AI" | "Computer Vision" | "Full Stack"
export type ProjectVisual = "twin" | "bi" | "edge" | "alpr" | "rag"

export type Project = {
  slug: string
  number: string
  title: string
  shortTitle: string
  category: ProjectCategory
  filters: ProjectCategory[]
  type: string
  timeframe?: string
  role: string
  summary: string
  overview: string
  contribution: string[]
  implementation: string[]
  results: { value: string; label: string; context: string }[]
  stack: string[]
  visual: ProjectVisual
  repositoryUrl?: string
}

// Facts below come from the CV and AI Engineering Portfolio supplied by Mokhtar.
export const projects: Project[] = [
  {
    slug: "digital-twin-platform",
    number: "01",
    title: "AI-Powered Digital Twin Platform",
    shortTitle: "Digital Twin Platform",
    category: "AI/ML",
    filters: ["AI/ML", "Generative AI", "Full Stack"],
    type: "Final-year project · I-Way",
    timeframe: "Feb–Jul 2026",
    role: "AI & Full Stack Engineer",
    summary: "A digital twin for building supervision that brings together IoT data, AI, and interactive 3D visualization.",
    overview: "Designed and developed a platform for intelligent building monitoring using real-time and historical IoT data. It combines anomaly detection, day-ahead energy forecasting, an Agentic RAG assistant, and an interactive 3D view.",
    contribution: [
      "Built the FastAPI backend with HTTP/MQTT ingestion and PostgreSQL/TimescaleDB storage.",
      "Implemented anomaly detection and LightGBM energy forecasting over building data.",
      "Integrated a LangGraph RAG assistant and Langfuse tracing for LLM interactions.",
      "Developed monitoring interfaces and a Three.js 3D view with Next.js and React.",
    ],
    implementation: [
      "HTTP and MQTT feed the FastAPI backend; PostgreSQL and TimescaleDB hold time-series data and equipment state.",
      "The anomaly pipeline groups raw events into actionable incidents.",
      "LightGBM forecasts energy demand one day ahead, with MASE used across evaluation folds.",
      "LangGraph orchestrates the RAG assistant, while Langfuse records LLM traces.",
    ],
    results: [
      { value: "470,857", label: "IoT measurements", context: "collected over approximately 14.6 months" },
      { value: "647 → 23", label: "incidents", context: "raw anomaly events consolidated into actionable incidents" },
      { value: "0.842", label: "mean MASE", context: "LightGBM day-ahead energy forecasting across evaluation folds" },
      { value: "94%", label: "HitRate@1", context: "LangGraph RAG assistant on the evaluation set" },
    ],
    stack: ["FastAPI", "PostgreSQL", "TimescaleDB", "MQTT", "LightGBM", "LangGraph", "Langfuse", "Next.js", "React", "Three.js", "Docker"],
    visual: "twin",
  },
  {
    slug: "erp-business-intelligence",
    number: "02",
    title: "AI-Augmented Business Intelligence for ERP Data",
    shortTitle: "ERP Business Intelligence",
    category: "Generative AI",
    filters: ["Generative AI", "Full Stack"],
    type: "Internship · MyPartner",
    timeframe: "Jul–Aug 2025",
    role: "Data & AI / Business Intelligence Intern",
    summary: "An AI-enhanced BI application for cleaning ERP data and exploring financial performance.",
    overview: "The work analyzed data extracted from the Paramedics ERP. A Streamlit and Plotly application presents financial KPIs, a financial-health score, What-If simulation, and an AI assistant for contextual business analysis.",
    contribution: [
      "Cleaned and validated 22,387 ERP records from 20 CSV files.",
      "Integrated an LLM through Ollama/Groq, LangChain and Context Injection for data queries and recommendations.",
      "Built the Streamlit and Plotly BI application.",
      "Implemented five financial KPIs, a financial-health score, What-If simulation, and an AI assistant.",
    ],
    implementation: [
      "ERP records from 20 CSV files were cleaned and validated before analysis.",
      "Five financial KPIs and a financial-health score make the data explorable.",
      "What-If simulation supports comparison of financial scenarios.",
      "Ollama and Groq provide conversational analysis using Context Injection.",
    ],
    results: [
      { value: "22,387", label: "ERP records", context: "cleaned and validated from 20 CSV files" },
      { value: "8,497 → 36", label: "quality violations", context: "before and after cleaning" },
      { value: "99.6%", label: "reduction", context: "in detected data-quality violations" },
      { value: "5", label: "financial KPIs", context: "alongside a health score and What-If simulation" },
    ],
    stack: ["Python", "Pandas", "Streamlit", "Plotly", "Ollama", "Groq", "LangChain", "Context Injection"],
    visual: "bi",
    repositoryUrl: "https://github.com/Mokhtar-bouchekoua/paramedics-bi-dashboard",
  },
  {
    slug: "edge-ai-anomaly-detection",
    number: "03",
    title: "Edge AI Anomaly Detection, Classification & Root Cause Analysis",
    shortTitle: "Edge AI Anomaly Detection",
    category: "AI/ML",
    filters: ["AI/ML", "Full Stack"],
    type: "Research contribution · IIT Sfax",
    timeframe: "Jan–Jun 2025",
    role: "Technical contribution",
    summary: "Technical contribution to a broader academic project on Edge AI for anomaly detection, anomaly-type classification, and root cause analysis in multivariate IoT data.",
    overview: "Technical contribution to a broader academic research project, conducted under academic supervision and in collaboration with a research team in Toulouse, France, focused on anomaly detection, anomaly-type classification, and root cause analysis (RCA) in multivariate IoT data.",
    contribution: [
      "Designed and trained the CAT_MTL_TwoStep multi-task model in PyTorch (Causal TCN, Self-Attention, FusionGate) on 262,800 synthetic IoT observations, achieving 95.0% F1 for anomaly detection, 95.7% F1 for anomaly-type classification, and 98.3% macro F1 for RCA.",
      "Integrated the model into a real-time Edge Computing architecture using MQTT, FastAPI, Firebase, and Angular.",
    ],
    implementation: [
      "The model uses Causal TCN, Self-Attention, and FusionGate for multi-task learning.",
      "It addresses anomaly detection, anomaly-type classification, and root cause analysis as distinct tasks.",
      "The real-time Edge Computing architecture uses MQTT, FastAPI, Firebase, and Angular.",
      "Evaluation used 262,800 synthetic multivariate IoT observations.",
    ],
    results: [
      { value: "262,800", label: "observations", context: "synthetic IoT data used for evaluation" },
      { value: "95.0%", label: "F1 · detection", context: "anomaly detection task" },
      { value: "95.7%", label: "F1 · classification", context: "anomaly-type classification task" },
      { value: "98.3%", label: "macro F1 · RCA", context: "root cause analysis task" },
    ],
    stack: ["Python", "PyTorch", "Causal TCN", "Self-Attention", "FusionGate", "MQTT", "FastAPI", "Firebase", "Angular"],
    visual: "edge",
  },
  {
    slug: "smartalpr-plaqueguard",
    number: "04",
    title: "SmartALPR / PlaqueGuard",
    shortTitle: "SmartALPR / PlaqueGuard",
    category: "Computer Vision",
    filters: ["Computer Vision", "Generative AI"],
    type: "AI academic project",
    role: "Computer vision and RAG pipeline development",
    summary: "Tunisian license-plate recognition with Arabic RTL processing and a RAG-based access-control assistant.",
    overview: "The access-control pipeline combines YOLOv11-L-seg plate detection and segmentation, LPRNet OCR, Arabic right-to-left post-processing, and a FAISS-based LLM/RAG assistant.",
    contribution: [
      "Implemented license-plate detection and segmentation using YOLOv11-L-seg.",
      "Implemented LPRNet recognition with Arabic right-to-left post-processing.",
      "Integrated an LLM/RAG assistant using FAISS for contextual information retrieval.",
      "Evaluated detection speed and accuracy, as well as RAG retrieval quality.",
    ],
    implementation: [
      "YOLOv11-L-seg detects and segments Tunisian license plates.",
      "LPRNet reads plate characters, followed by Arabic RTL post-processing.",
      "A FAISS-based LLM/RAG assistant retrieves contextual information.",
      "Detection and retrieval were evaluated with separate metrics.",
    ],
    results: [
      { value: "89%", label: "mAP@0.5", context: "plate detection pipeline" },
      { value: "84.5%", label: "F1", context: "plate detection pipeline" },
      { value: "≈22 FPS", label: "throughput", context: "plate detection pipeline" },
      { value: "88% / 0.72", label: "Hit Rate / MRR", context: "RAG evaluation" },
    ],
    stack: ["YOLOv11-L-seg", "LPRNet", "OCR", "Arabic RTL", "FAISS", "LLM", "RAG"],
    visual: "alpr",
    repositoryUrl: "https://github.com/Mokhtar-bouchekoua/FacPark",
  },
  {
    slug: "semantia-rag-search",
    number: "05",
    title: "SémantIA — Semantic Search over Ingredient Technical Sheets",
    shortTitle: "SémantIA RAG Search",
    category: "Generative AI",
    filters: ["Generative AI", "Full Stack"],
    type: "Hackathon · AI Night Challenge",
    timeframe: "Feb 2026",
    role: "RAG pipeline and full stack development",
    summary: "A bilingual semantic search engine over food-ingredient technical sheets, built for A.M.T (ROSE BLANCHE Group) during the AI Night Challenge.",
    overview: "Bakery specialists need precise answers from technical sheets on enzymes, oxidizing agents and additives. SémantIA ingests the PDF sheets, embeds them into PostgreSQL with pgvector, and returns the three most relevant passages for a question asked in French or English.",
    contribution: [
      "Built the ingestion pipeline: PDF parsing, chunking, all-MiniLM-L6-v2 embeddings and storage in PostgreSQL 16 with pgvector.",
      "Structured the FastAPI backend with a hexagonal, domain-driven architecture (domain, ports, adapters, application).",
      "Implemented an offline IR evaluation module (Hit@K, MRR, nDCG) exposed through the API and a CLI.",
      "Developed the React 19 / Vite interface and packaged the database with Docker Compose.",
    ],
    implementation: [
      "Technical-sheet PDFs are split into chunks and embedded with all-MiniLM-L6-v2 (384 dimensions).",
      "Vectors are stored in PostgreSQL 16 with pgvector and ranked by cosine similarity (Top K = 3).",
      "FastAPI exposes search, health, corpus statistics and evaluation endpoints.",
      "Queries and scoring work in both French and English.",
    ],
    results: [
      { value: "384", label: "dimensions", context: "all-MiniLM-L6-v2 sentence embeddings" },
      { value: "Top 3", label: "passages", context: "cosine similarity through pgvector" },
      { value: "4", label: "API endpoints", context: "search, health, stats and offline evaluation" },
      { value: "FR / EN", label: "bilingual", context: "questions and scoring in French and English" },
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "sentence-transformers", "React", "Vite", "Docker Compose", "Hexagonal architecture"],
    visual: "rag",
    repositoryUrl: "https://github.com/Mokhtar-bouchekoua/RAG_A.T.M",
  },
]

export const categories: (ProjectCategory | "All")[] = ["All", "AI/ML", "Generative AI", "Computer Vision", "Full Stack"]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug)
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index >= 0 && index < projects.length - 1 ? projects[index + 1] : undefined,
  }
}

export const techGroups = [
  { label: "AI & machine learning", labelFr: "IA et apprentissage automatique", items: ["Python", "PyTorch", "LightGBM", "Transformers", "YOLOv11", "Anomaly detection", "Forecasting"] },
  { label: "Generative AI & LLMOps", labelFr: "IA générative et LLMOps", items: ["LangGraph", "LangChain", "RAG", "Agentic AI", "FAISS", "pgvector", "Langfuse", "MLflow"] },
  { label: "Backend & data", labelFr: "Backend et données", items: ["FastAPI", "SQL", "PostgreSQL", "TimescaleDB", "MQTT", "Edge Computing"] },
  { label: "Frontend & visualization", labelFr: "Frontend et visualisation", items: ["TypeScript", "Next.js", "React", "Three.js", "Streamlit", "Plotly"] },
  { label: "Delivery & monitoring", labelFr: "Déploiement et observabilité", items: ["Docker", "Git", "CI/CD", "Model monitoring", "LLM tracing"] },
  { label: "Also used", labelFr: "Également utilisé", items: ["C/C++", "C#", "Java", "Android (Java)", "Laravel", "Angular", "ESP32", "Modbus RTU", "ChromaDB", "Firebase", "MySQL", "SQL Server", "GitLab", "Jenkins"] },
] as const

export const skills = ["Python", "FastAPI", "PyTorch", "LightGBM", "LangGraph", "Next.js", "React", "TimescaleDB", "MQTT", "Three.js", "Docker", "Langfuse"]

export const links = {
  email: "mailto:mokhtarbouchekoua@gmail.com",
  linkedin: "https://www.linkedin.com/in/mokhtar-bouchekoua-084267248/",
  github: "https://github.com/Mokhtar-bouchekoua",
}

export const person = {
  name: "Mokhtar Bouchekoua",
  title: "AI & Full Stack Engineer",
  location: "Sfax, Tunisia",
  email: "mokhtarbouchekoua@gmail.com",
}

export const availability = {
  en: "Engineering graduate 2026 · Available now · Full-time (CDI) · Tunisia or remote",
  fr: "Ingénieur diplômé 2026 · Disponible immédiatement · CDI · Tunisie ou remote",
}

export const recognition = {
  en: ["Best Final-Year Project Award, 2023", "IEEE member (ISGIS & IIT)", "Cisco CCNA: Introduction to Networks (ITN)", "AWS Academy Graduate — Cloud Foundations"],
  fr: ["Prix du meilleur projet de fin d’études, 2023", "Membre IEEE (ISGIS et IIT)", "Cisco CCNA : Introduction to Networks (ITN)", "AWS Academy Graduate — Cloud Foundations"],
}

export const proofPoints = [
  { value: "94%", label: "RAG HitRate@1 · evaluation set" },
  { value: "99.6%", label: "fewer ERP data violations" },
  { value: "98.3%", label: "RCA macro F1 · synthetic IoT" },
]
