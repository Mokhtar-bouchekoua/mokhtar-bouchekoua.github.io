// Single source for the career timeline shown on the resume pages (EN and FR).
type Localized = { en: string; fr: string }

export type TimelineEntry = {
  period: Localized
  title: Localized
  place: Localized
  detail: Localized
}

export const experience: TimelineEntry[] = [
  {
    period: { en: "Feb – Jul 2026", fr: "Févr. – juil. 2026" },
    title: { en: "AI & Full Stack Engineer", fr: "Ingénieur IA et Full Stack" },
    place: { en: "I-Way · Final-year project", fr: "I-Way · Projet de fin d’études" },
    detail: {
      en: "Built a digital twin platform combining IoT ingestion, forecasting, anomaly detection, Agentic RAG and 3D visualization.",
      fr: "Développement d’un jumeau numérique réunissant ingestion IoT, prévisions, détection d’anomalies, RAG agentique et visualisation 3D.",
    },
  },
  {
    period: { en: "Jul – Aug 2025", fr: "Juil. – août 2025" },
    title: { en: "Data & AI / BI Intern", fr: "Stagiaire Data & IA / BI" },
    place: { en: "MyPartner", fr: "MyPartner" },
    detail: {
      en: "Improved ERP data quality and developed an AI-enhanced financial analysis application.",
      fr: "Amélioration de la qualité des données ERP et développement d’une application d’analyse financière enrichie par l’IA.",
    },
  },
  {
    period: { en: "Jan – Jun 2025", fr: "Janv. – juin 2025" },
    title: { en: "Research Project — Edge AI & Anomaly Detection", fr: "Projet de recherche — Edge AI et détection d’anomalies" },
    place: { en: "International Institute of Technology (IIT) Sfax", fr: "Institut International de Technologie (IIT) Sfax" },
    detail: {
      en: "Technical contribution to a broader academic research project under academic supervision and in collaboration with a research team in Toulouse, France, focused on anomaly detection, anomaly-type classification and root cause analysis in multivariate IoT data.",
      fr: "Contribution technique à un projet de recherche académique plus large, mené sous supervision universitaire et en collaboration avec une équipe de recherche à Toulouse, en France. Le projet porte sur la détection d’anomalies, la classification de leur type et l’analyse des causes racines dans des données IoT multivariées.",
    },
  },
  {
    period: { en: "Jun – Jul 2024", fr: "Juin – juil. 2024" },
    title: { en: "Full Stack Developer Intern", fr: "Stagiaire développeur Full Stack" },
    place: { en: "Flash Marketing Digital", fr: "Flash Marketing Digital" },
    detail: {
      en: "Independently developed the Allo Fruit e-commerce platform: Laravel REST API, Angular front end, role-based admin back office, MySQL data layer and sales dashboard.",
      fr: "Développement en autonomie de la plateforme e-commerce Allo Fruit : API REST Laravel, front-end Angular, back-office avec gestion des rôles, base MySQL et tableau de bord des ventes.",
    },
  },
  {
    period: { en: "Feb – Jun 2023", fr: "Févr. – juin 2023" },
    title: { en: "Smart Agricultural Drone — Best Final-Year Project Award", fr: "Drone agricole intelligent — Prix du meilleur PFE" },
    place: { en: "ISGI Sfax · Bachelor’s final-year project", fr: "ISGI Sfax · PFE de licence" },
    detail: {
      en: "Targeted spraying system combining an ESP32 IoT ground station (7-in-1 NPK sensor, RS485/Modbus RTU, 7 soil parameters), an Android app in Java sending measurements to Firebase, and a drone configured with ArduPilot and validated in flight tests.",
      fr: "Système de pulvérisation ciblée combinant une station de sol IoT ESP32 (capteur NPK 7-en-1, RS485/Modbus RTU, 7 paramètres du sol), une application Android en Java envoyant les mesures vers Firebase, et un drone configuré sous ArduPilot et validé par des tests en vol.",
    },
  },
]

export const education: Omit<TimelineEntry, "detail">[] = [
  {
    period: { en: "2023 – 2026", fr: "2023 – 2026" },
    title: { en: "National Engineering Degree (Diplôme National d’Ingénieur) in Computer Engineering", fr: "Diplôme National d’Ingénieur en Génie Informatique" },
    place: { en: "International Institute of Technology (IIT) · Sfax", fr: "Institut International de Technologie (IIT) · Sfax" },
  },
  {
    period: { en: "2023", fr: "2023" },
    title: { en: "Bachelor’s Degree in Electronics, Electrical Engineering and Automation — Industrial Computing Track", fr: "Licence en électronique, électrotechnique et automatique — parcours Informatique industrielle" },
    place: { en: "Higher Institute of Industrial Management (ISGI) · Sfax", fr: "Institut Supérieur de Gestion Industrielle (ISGI) · Sfax" },
  },
]

export const languages: Localized = { en: "Arabic · French · English", fr: "Arabe · Français · Anglais" }

// About page: how the work is approached, grounded in the case studies.
export const principles: { title: Localized; body: Localized }[] = [
  {
    title: { en: "Start from the source data", fr: "Partir des données sources" },
    body: {
      en: "Before modeling, I look at how data is produced, stored and validated: MQTT ingestion into TimescaleDB, or 22,387 ERP records cleaned before any KPI was computed.",
      fr: "Avant de modéliser, je regarde comment les données sont produites, stockées et validées : ingestion MQTT vers TimescaleDB, ou 22 387 enregistrements ERP nettoyés avant le moindre indicateur.",
    },
  },
  {
    title: { en: "Measure model behavior", fr: "Mesurer le comportement du modèle" },
    body: {
      en: "Every result is reported with its context: the metric, the dataset and its limits, such as MASE across evaluation folds or F1 on synthetic IoT data.",
      fr: "Chaque résultat est donné avec son contexte : la métrique, le jeu de données et ses limites, comme le MASE sur les plis d’évaluation ou le F1 sur des données IoT synthétiques.",
    },
  },
  {
    title: { en: "Make the result usable", fr: "Rendre le résultat utilisable" },
    body: {
      en: "A model matters once someone can act on it, so I build the interface too: monitoring dashboards, a 3D building view, conversational assistants and APIs.",
      fr: "Un modèle n’a de valeur que si quelqu’un peut agir dessus. Je construis donc aussi l’interface : tableaux de supervision, vue 3D du bâtiment, assistants conversationnels et API.",
    },
  },
]
