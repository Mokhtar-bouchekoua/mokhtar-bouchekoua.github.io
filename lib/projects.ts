export type ProjectCategory = "AI/ML" | "Generative AI" | "Computer Vision" | "Full Stack"
export type ProjectVisual = "twin" | "bi" | "edge" | "alpr"

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
  diagram: ProjectVisual
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
    diagram: "twin",
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
    overview: "The work analysed data extracted from the Paramedics ERP. A Streamlit and Plotly application presents financial KPIs, a financial-health score, What-If simulation, and an AI assistant for contextual business analysis.",
    contribution: [
      "Cleaned and validated 22,387 ERP records from 20 CSV files.",
      "Integrated Ollama and Groq LLMs using Context Injection for data queries and recommendations.",
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
    stack: ["Python", "Pandas", "Streamlit", "Plotly", "Ollama", "Groq", "Context Injection"],
    diagram: "bi",
    repositoryUrl: "https://github.com/Mokhtar-bouchekoua/paramedics-bi-dashboard",
  },
  {
    slug: "edge-ai-anomaly-detection",
    number: "03",
    title: "Edge AI Anomaly Detection, Typing & Root Cause Analysis",
    shortTitle: "Edge AI Anomaly Detection",
    category: "AI/ML",
    filters: ["AI/ML", "Full Stack"],
    type: "Academic research · IIT Sfax",
    timeframe: "Jan–Jun 2025",
    role: "Model and system development",
    summary: "A multi-task Edge AI system for detecting, classifying, and diagnosing anomalies in IoT time series.",
    overview: "Developed for Smart City and autonomous-mobility scenarios, the project evaluates a multi-task model on synthetic IoT observations and connects it to a real-time Edge Computing architecture.",
    contribution: [
      "Developed and evaluated the CAT_MTL_TwoStep multi-task architecture.",
      "Combined Causal TCN, Self-Attention, and FusionGate for temporal modelling.",
      "Integrated the model with MQTT, FastAPI, Firebase, and Angular.",
      "Worked in an academic collaboration with a Toulouse-based research team; a scientific paper was submitted.",
    ],
    implementation: [
      "The model uses Causal TCN, Self-Attention, and FusionGate for multi-task learning.",
      "It addresses anomaly detection, anomaly typing, and root cause analysis as distinct tasks.",
      "The real-time Edge Computing architecture uses MQTT, FastAPI, Firebase, and Angular.",
      "Evaluation used 262,800 synthetic multivariate IoT observations.",
    ],
    results: [
      { value: "262,800", label: "observations", context: "synthetic IoT data used for evaluation" },
      { value: "95.0%", label: "F1 · detection", context: "anomaly detection task" },
      { value: "95.7%", label: "F1 · typing", context: "anomaly typing task" },
      { value: "98.3%", label: "macro F1 · RCA", context: "root cause analysis task" },
    ],
    stack: ["Python", "PyTorch", "Causal TCN", "Self-Attention", "FusionGate", "MQTT", "FastAPI", "Firebase", "Angular"],
    diagram: "edge",
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
    diagram: "alpr",
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
  { label: "Programming & backend", items: ["Python", "SQL", "JavaScript", "TypeScript", "C", "C++", "C#", "Java", "FastAPI", "Laravel"] },
  { label: "AI & machine learning", items: ["PyTorch", "LightGBM", "Transformers", "YOLOv11", "LPRNet", "Anomaly detection", "Forecasting"] },
  { label: "Generative AI & LLMOps", items: ["LangGraph", "LangChain", "RAG", "Agentic AI", "FAISS", "Langfuse", "MLflow"] },
  { label: "Frontend & visualization", items: ["Next.js", "React", "Angular", "Three.js", "Streamlit", "Plotly", "Flutter"] },
  { label: "Data, retrieval & IoT", items: ["PostgreSQL", "TimescaleDB", "pgvector", "MySQL", "SQL Server", "Firebase", "MQTT", "Edge Computing"] },
  { label: "Delivery & monitoring", items: ["Docker", "Git", "GitLab", "CI/CD", "Jenkins", "Model monitoring", "LLM tracing"] },
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

export const proofPoints = [
  { value: "94%", label: "RAG HitRate@1 · evaluation set" },
  { value: "99.6%", label: "fewer ERP data violations" },
  { value: "98.3%", label: "RCA macro F1 · synthetic IoT" },
]
