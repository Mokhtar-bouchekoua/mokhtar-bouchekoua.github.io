import type { ProjectVisual } from "@/lib/projects"

// System architecture shown on each case study. Stages run left to right (top to bottom on
// mobile); every node's description restates facts already given in lib/projects.ts.
type Localized = { en: string; fr: string }

export type ArchitectureNode = { id: string; name: string; tech: string; detail: Localized }
export type ArchitectureStage = { label: Localized; nodes: ArchitectureNode[] }

export const architectures: Record<ProjectVisual, ArchitectureStage[]> = {
  twin: [
    { label: { en: "Ingest", fr: "Ingestion" }, nodes: [
      { id: "iot", name: "IoT feeds", tech: "HTTP · MQTT", detail: { en: "Real-time and historical building measurements: 470,857 readings over about 14.6 months.", fr: "Mesures du bâtiment en temps réel et historiques : 470 857 relevés sur environ 14,6 mois." } },
      { id: "api", name: "Ingestion API", tech: "FastAPI", detail: { en: "FastAPI backend receiving the HTTP and MQTT feeds.", fr: "Backend FastAPI qui reçoit les flux HTTP et MQTT." } },
    ] },
    { label: { en: "Store", fr: "Stockage" }, nodes: [
      { id: "tsdb", name: "Time-series store", tech: "PostgreSQL · TimescaleDB", detail: { en: "Holds time-series data and equipment state.", fr: "Stocke les séries temporelles et l’état des équipements." } },
    ] },
    { label: { en: "Model", fr: "Modèles" }, nodes: [
      { id: "anomaly", name: "Anomaly pipeline", tech: "Detection · grouping", detail: { en: "Groups 647 raw anomaly events into 23 actionable incidents.", fr: "Regroupe 647 événements bruts en 23 incidents exploitables." } },
      { id: "forecast", name: "Energy forecasting", tech: "LightGBM", detail: { en: "Day-ahead energy demand, evaluated with MASE across folds (mean 0.842).", fr: "Demande énergétique à un jour, évaluée par MASE sur les plis (moyenne 0,842)." } },
      { id: "rag", name: "RAG assistant", tech: "LangGraph · Langfuse", detail: { en: "Agentic RAG orchestrated by LangGraph, traced with Langfuse; 94% HitRate@1 on the evaluation set.", fr: "RAG agentique orchestré par LangGraph et tracé avec Langfuse ; 94 % de HitRate@1 sur l’ensemble d’évaluation." } },
    ] },
    { label: { en: "Present", fr: "Interface" }, nodes: [
      { id: "ui", name: "Monitoring & 3D view", tech: "Next.js · React · Three.js", detail: { en: "Monitoring interfaces and an interactive 3D view of the building.", fr: "Interfaces de supervision et vue 3D interactive du bâtiment." } },
    ] },
  ],
  bi: [
    { label: { en: "Source", fr: "Source" }, nodes: [
      { id: "erp", name: "ERP exports", tech: "20 CSV files", detail: { en: "22,387 records extracted from the Paramedics ERP.", fr: "22 387 enregistrements extraits de l’ERP Paramedics." } },
    ] },
    { label: { en: "Clean", fr: "Nettoyage" }, nodes: [
      { id: "clean", name: "Validation", tech: "Python · Pandas", detail: { en: "Cleaning and validation cut detected quality violations from 8,497 to 36 (−99.6%).", fr: "Le nettoyage et la validation ramènent les anomalies de qualité de 8 497 à 36 (−99,6 %)." } },
    ] },
    { label: { en: "Analyse", fr: "Analyse" }, nodes: [
      { id: "kpi", name: "Financial KPIs", tech: "5 KPIs · health score", detail: { en: "Five financial KPIs and a financial-health score.", fr: "Cinq indicateurs financiers et un score de santé financière." } },
      { id: "whatif", name: "What-If simulation", tech: "Scenarios", detail: { en: "Compares financial scenarios.", fr: "Compare différents scénarios financiers." } },
      { id: "llm", name: "AI assistant", tech: "Ollama · Groq · LangChain", detail: { en: "Conversational analysis through Context Injection.", fr: "Analyse conversationnelle par injection de contexte." } },
    ] },
    { label: { en: "Present", fr: "Interface" }, nodes: [
      { id: "app", name: "BI application", tech: "Streamlit · Plotly", detail: { en: "Interactive dashboards for financial performance.", fr: "Tableaux de bord interactifs de la performance financière." } },
    ] },
  ],
  edge: [
    { label: { en: "Data", fr: "Données" }, nodes: [
      { id: "stream", name: "IoT stream", tech: "262,800 observations", detail: { en: "Synthetic multivariate IoT observations used for evaluation.", fr: "Observations IoT multivariées synthétiques utilisées pour l’évaluation." } },
    ] },
    { label: { en: "Model", fr: "Modèle" }, nodes: [
      { id: "mtl", name: "CAT_MTL_TwoStep", tech: "Causal TCN · Self-Attention · FusionGate", detail: { en: "Multi-task PyTorch model trained on the three tasks.", fr: "Modèle PyTorch multitâche entraîné sur les trois tâches." } },
    ] },
    { label: { en: "Tasks", fr: "Tâches" }, nodes: [
      { id: "detect", name: "Detection", tech: "F1 95.0%", detail: { en: "Anomaly detection task.", fr: "Tâche de détection d’anomalies." } },
      { id: "classify", name: "Classification", tech: "F1 95.7%", detail: { en: "Anomaly-type classification task.", fr: "Tâche de classification du type d’anomalie." } },
      { id: "rca", name: "Root cause", tech: "Macro F1 98.3%", detail: { en: "Root cause analysis task.", fr: "Tâche d’analyse des causes racines." } },
    ] },
    { label: { en: "Edge runtime", fr: "Exécution edge" }, nodes: [
      { id: "edge", name: "Real-time edge stack", tech: "MQTT · FastAPI · Firebase · Angular", detail: { en: "Real-time Edge Computing architecture integrating the model.", fr: "Architecture Edge Computing temps réel intégrant le modèle." } },
    ] },
  ],
  alpr: [
    { label: { en: "Input", fr: "Entrée" }, nodes: [
      { id: "image", name: "Plate image", tech: "Input image", detail: { en: "Image containing a Tunisian license plate.", fr: "Image contenant une plaque d’immatriculation tunisienne." } },
    ] },
    { label: { en: "Detect", fr: "Détection" }, nodes: [
      { id: "yolo", name: "Plate detection", tech: "YOLOv11-L-seg", detail: { en: "Detects and segments Tunisian plates: 89% mAP@0.5, 84.5% F1, ≈22 FPS.", fr: "Détecte et segmente les plaques tunisiennes : 89 % mAP@0.5, 84,5 % F1, ≈ 22 FPS." } },
    ] },
    { label: { en: "Read", fr: "Lecture" }, nodes: [
      { id: "ocr", name: "Plate reading", tech: "LPRNet · Arabic RTL", detail: { en: "Reads characters, then applies Arabic right-to-left post-processing.", fr: "Lit les caractères, puis applique un post-traitement arabe de droite à gauche." } },
    ] },
    { label: { en: "Assist", fr: "Assistance" }, nodes: [
      { id: "rag", name: "RAG assistant", tech: "FAISS · LLM", detail: { en: "Retrieves contextual information for access control: 88% hit rate, 0.72 MRR.", fr: "Retrouve les informations contextuelles du contrôle d’accès : 88 % de hit rate, MRR de 0,72." } },
    ] },
  ],
  rag: [
    { label: { en: "Ingest", fr: "Ingestion" }, nodes: [
      { id: "pdf", name: "Technical sheets", tech: "PDF", detail: { en: "Ingredient technical sheets split into chunks.", fr: "Fiches techniques d’ingrédients découpées en fragments." } },
    ] },
    { label: { en: "Embed", fr: "Vectorisation" }, nodes: [
      { id: "embed", name: "Embeddings", tech: "all-MiniLM-L6-v2 · 384-d", detail: { en: "Each chunk becomes a 384-dimension vector.", fr: "Chaque fragment devient un vecteur de 384 dimensions." } },
    ] },
    { label: { en: "Retrieve", fr: "Recherche" }, nodes: [
      { id: "pg", name: "Vector store", tech: "PostgreSQL 16 · pgvector", detail: { en: "Cosine similarity, Top K = 3.", fr: "Similarité cosinus, Top K = 3." } },
      { id: "api", name: "Search API", tech: "FastAPI", detail: { en: "Search, health, corpus statistics and offline evaluation endpoints.", fr: "Endpoints de recherche, d’état, de statistiques et d’évaluation hors ligne." } },
    ] },
    { label: { en: "Present", fr: "Interface" }, nodes: [
      { id: "ui", name: "Search interface", tech: "React 19 · Vite", detail: { en: "Bilingual questions in French or English.", fr: "Questions bilingues en français ou en anglais." } },
    ] },
  ],
  shop: [
    { label: { en: "Front end", fr: "Front-end" }, nodes: [
      { id: "web", name: "Storefront", tech: "Angular", detail: { en: "Angular front end of the platform.", fr: "Front-end Angular de la plateforme." } },
    ] },
    { label: { en: "API", fr: "API" }, nodes: [
      { id: "api", name: "REST API", tech: "Laravel", detail: { en: "Laravel REST API serving the front end and the back office.", fr: "API REST Laravel qui sert le front-end et le back-office." } },
    ] },
    { label: { en: "Data", fr: "Données" }, nodes: [
      { id: "db", name: "Data layer", tech: "MySQL", detail: { en: "MySQL data layer of the platform.", fr: "Base de données MySQL de la plateforme." } },
    ] },
    { label: { en: "Administration", fr: "Administration" }, nodes: [
      { id: "admin", name: "Back office", tech: "Role-based access", detail: { en: "Admin back office with features assigned by role.", fr: "Back-office d’administration avec fonctionnalités attribuées par rôle." } },
      { id: "sales", name: "Sales dashboard", tech: "Reporting", detail: { en: "Overview of sales for the back office.", fr: "Vue d’ensemble des ventes pour le back-office." } },
    ] },
  ],
  drone: [
    { label: { en: "Measure", fr: "Mesure" }, nodes: [
      { id: "npk", name: "Soil sensor", tech: "7-in-1 NPK", detail: { en: "Measures 7 soil parameters.", fr: "Mesure 7 paramètres du sol." } },
    ] },
    { label: { en: "Acquire", fr: "Acquisition" }, nodes: [
      { id: "esp32", name: "Ground station", tech: "ESP32 · MAX485 · Modbus RTU", detail: { en: "ESP32 reading the sensor over RS485 with Modbus RTU.", fr: "ESP32 qui lit le capteur via RS485 en Modbus RTU." } },
    ] },
    { label: { en: "Sync", fr: "Synchronisation" }, nodes: [
      { id: "firebase", name: "Cloud database", tech: "Firebase · Wi-Fi", detail: { en: "Measurements transmitted over Wi-Fi to Firebase.", fr: "Mesures transmises via Wi-Fi vers Firebase." } },
      { id: "android", name: "Mobile app", tech: "Android · Java / XML", detail: { en: "Android application developed in Java/XML.", fr: "Application Android développée en Java/XML." } },
    ] },
    { label: { en: "Fly", fr: "Vol" }, nodes: [
      { id: "drone", name: "Spraying drone", tech: "ArduPilot", detail: { en: "Flight controller configured with ArduPilot and validated in flight tests.", fr: "Contrôleur de vol configuré sous ArduPilot et validé par des tests en vol." } },
    ] },
  ],
}
