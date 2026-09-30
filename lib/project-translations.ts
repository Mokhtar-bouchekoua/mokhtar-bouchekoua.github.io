import type { Project } from "@/lib/projects"

const frenchProjectCopy: Record<string, Partial<Project>> = {
  "digital-twin-platform": {
    title: "Plateforme de jumeau numérique pilotée par l’IA",
    shortTitle: "Plateforme de jumeau numérique",
    type: "Projet de fin d’études · I-Way",
    timeframe: "Févr. — juil. 2026",
    role: "Ingénieur IA et Full Stack",
    summary: "Un jumeau numérique pour superviser des bâtiments grâce aux données IoT, à l’IA et à une visualisation 3D interactive.",
    overview: "Conception et développement d’une plateforme de supervision intelligente des bâtiments à partir de données IoT en temps réel et historiques. Elle associe détection d’anomalies, prévision énergétique à un jour, assistant RAG agentique et visualisation 3D interactive.",
    contribution: [
      "Développement du backend FastAPI avec ingestion HTTP/MQTT et stockage PostgreSQL/TimescaleDB.",
      "Mise en œuvre de la détection d’anomalies et de prévisions énergétiques avec LightGBM.",
      "Intégration d’un assistant RAG avec LangGraph et traçage des interactions LLM avec Langfuse.",
      "Création des interfaces de supervision et d’une vue 3D avec Three.js, Next.js et React.",
    ],
    implementation: [
      "Les flux HTTP et MQTT alimentent le backend FastAPI ; PostgreSQL et TimescaleDB stockent les séries temporelles et l’état des équipements.",
      "Le pipeline d’anomalies regroupe les événements bruts en incidents exploitables.",
      "LightGBM prévoit la demande énergétique à un jour ; le MASE est calculé sur les plis d’évaluation.",
      "LangGraph orchestre l’assistant RAG et Langfuse enregistre les traces des interactions LLM.",
    ],
    results: [
      { value: "470 857", label: "mesures IoT", context: "collectées sur environ 14,6 mois" },
      { value: "647 → 23", label: "incidents", context: "événements bruts regroupés en incidents exploitables" },
      { value: "0,842", label: "MASE moyen", context: "prévisions énergétiques LightGBM à un jour sur les plis d’évaluation" },
      { value: "94 %", label: "HitRate@1", context: "assistant RAG LangGraph sur l’ensemble d’évaluation" },
    ],
  },
  "erp-business-intelligence": {
    title: "Intelligence d’affaires augmentée par l’IA pour des données ERP",
    shortTitle: "Intelligence d’affaires ERP",
    type: "Stage · MyPartner",
    timeframe: "Juil. — août 2025",
    role: "Stagiaire Data & IA / Business Intelligence",
    summary: "Une application de BI enrichie par l’IA pour fiabiliser les données ERP et analyser les performances financières.",
    overview: "Le projet analyse les données extraites de l’ERP Paramedics. Une application Streamlit et Plotly présente des indicateurs financiers, un score de santé financière, une simulation What-If et un assistant IA pour l’analyse métier contextualisée.",
    contribution: [
      "Nettoyage et validation de 22 387 enregistrements ERP provenant de 20 fichiers CSV.",
      "Intégration des modèles Ollama et Groq avec injection de contexte pour les requêtes et recommandations métier.",
      "Développement de l’application BI avec Streamlit et Plotly.",
      "Mise en place de cinq indicateurs financiers, d’un score de santé, d’une simulation What-If et d’un assistant IA.",
    ],
    implementation: [
      "Les données ERP issues de 20 fichiers CSV sont nettoyées et validées avant analyse.",
      "Cinq indicateurs financiers et un score de santé rendent les données plus faciles à explorer.",
      "La simulation What-If permet de comparer différents scénarios financiers.",
      "Ollama et Groq fournissent une analyse conversationnelle à partir d’une injection de contexte.",
    ],
    results: [
      { value: "22 387", label: "enregistrements ERP", context: "nettoyés et validés à partir de 20 fichiers CSV" },
      { value: "8 497 → 36", label: "anomalies de qualité", context: "avant et après le nettoyage" },
      { value: "99,6 %", label: "de réduction", context: "des anomalies détectées dans les données" },
      { value: "5", label: "indicateurs financiers", context: "avec score de santé et simulation What-If" },
    ],
  },
  "edge-ai-anomaly-detection": {
    title: "IA embarquée : détection, classification et analyse des causes d’anomalies",
    shortTitle: "Détection d’anomalies en Edge AI",
    type: "Recherche académique · IIT Sfax",
    timeframe: "Janv. — juin 2025",
    role: "Développement du modèle et du système",
    summary: "Un système Edge AI multitâche pour détecter, classer et diagnostiquer les anomalies dans des séries temporelles IoT.",
    overview: "Développé pour des scénarios de ville intelligente et de mobilité autonome, le projet évalue un modèle multitâche sur des observations IoT synthétiques et le relie à une architecture Edge Computing en temps réel.",
    contribution: [
      "Développement et évaluation de l’architecture multitâche CAT_MTL_TwoStep.",
      "Combinaison de Causal TCN, Self-Attention et FusionGate pour la modélisation temporelle.",
      "Intégration du modèle avec MQTT, FastAPI, Firebase et Angular.",
      "Collaboration académique avec une équipe de recherche basée à Toulouse ; article scientifique soumis.",
    ],
    implementation: [
      "Le modèle combine Causal TCN, Self-Attention et FusionGate pour l’apprentissage multitâche.",
      "Il traite séparément la détection, la classification des anomalies et l’analyse de leurs causes racines.",
      "L’architecture Edge Computing temps réel s’appuie sur MQTT, FastAPI, Firebase et Angular.",
      "L’évaluation utilise 262 800 observations IoT multivariées synthétiques.",
    ],
    results: [
      { value: "262 800", label: "observations", context: "données IoT synthétiques utilisées pour l’évaluation" },
      { value: "95,0 %", label: "F1 · détection", context: "tâche de détection d’anomalies" },
      { value: "95,7 %", label: "F1 · classification", context: "tâche de classification des anomalies" },
      { value: "98,3 %", label: "F1 macro · RCA", context: "analyse des causes racines" },
    ],
  },
  "smartalpr-plaqueguard": {
    title: "SmartALPR / PlaqueGuard",
    shortTitle: "SmartALPR / PlaqueGuard",
    type: "Projet académique en IA",
    role: "Développement de la vision par ordinateur et du pipeline RAG",
    summary: "Reconnaissance de plaques tunisiennes avec traitement arabe RTL et assistant RAG pour le contrôle d’accès.",
    overview: "Le pipeline de contrôle d’accès associe détection et segmentation des plaques avec YOLOv11-L-seg, reconnaissance OCR par LPRNet, post-traitement arabe de droite à gauche et assistant LLM/RAG avec FAISS.",
    contribution: [
      "Mise en œuvre de la détection et de la segmentation des plaques avec YOLOv11-L-seg.",
      "Reconnaissance des caractères par LPRNet avec post-traitement arabe de droite à gauche.",
      "Intégration d’un assistant LLM/RAG avec FAISS pour la recherche d’informations contextuelles.",
      "Évaluation de la vitesse et de la précision de détection, ainsi que de la qualité de recherche RAG.",
    ],
    implementation: [
      "YOLOv11-L-seg détecte et segmente les plaques d’immatriculation tunisiennes.",
      "LPRNet reconnaît les caractères, puis un post-traitement gère l’écriture arabe de droite à gauche.",
      "Un assistant LLM/RAG fondé sur FAISS retrouve les informations contextuelles.",
      "La détection et la recherche sont évaluées avec des métriques distinctes.",
    ],
    results: [
      { value: "89 %", label: "mAP@0.5", context: "pipeline de détection de plaques" },
      { value: "84,5 %", label: "F1", context: "pipeline de détection de plaques" },
      { value: "≈ 22 FPS", label: "débit", context: "pipeline de détection de plaques" },
      { value: "88 % / 0,72", label: "Hit Rate / MRR", context: "évaluation RAG" },
    ],
  },
}

export function projectForLocale(project: Project, locale: "en" | "fr"): Project {
  if (locale === "en") return project
  return { ...project, ...frenchProjectCopy[project.slug] }
}

export function categoryLabel(category: Project["category"] | "All", locale: "en" | "fr") {
  if (locale === "en") return category
  const labels: Record<Project["category"] | "All", string> = {
    "AI/ML": "IA / ML",
    "Generative AI": "IA générative",
    "Computer Vision": "Vision par ordinateur",
    "Full Stack": "Full Stack",
    All: "Tous",
  }
  return labels[category]
}
