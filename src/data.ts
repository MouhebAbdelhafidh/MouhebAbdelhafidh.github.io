export type Link = {
  label: string
  href: string
  /** hover-card title / description */
  title: string
  description: string
}

export type Publication = {
  title: string
  topic: string
  /** thumbnail in /public, shown in front of the publication */
  image?: string
  links: Link[]
}

export const profile = {
  name: "Moheb Abdelhafidh",
  roleLine: "AI Engineer / Data Scientist / AI Researcher",
  email: "mouhebabdelhafidh20@gmail.com",
  phone: "+49 155 10280220",
  phoneHref: "tel:015510280220",
  location: "Waldems, Germany",
  github: "https://github.com/MouhebAbdelhafidh",
  linkedin: "https://www.linkedin.com/in/moheb-abdelhafidh-978282236/",
  cv: "DSCVMohebAbdelhafidh.pdf",
  photo: "picture.png",
}

export const news = [
  {
    text: "Graduated with an excellent project thesis remark from the jury (1.2 German GPA).",
    image: "diploma.jpeg",
    alt: "Moheb holding his diploma",
  },
]

export const education = [
  {
    when: "2025–26",
    what: "Schmalkalden University of Applied Sciences",
    detail: "Exchange, Computer Science",
    where: "Schmalkalden, Germany",
    logo: "hsm-logo.jpg",
    url: "https://www.hs-schmalkalden.de/",
  },
  {
    when: "2021–26",
    what: "ESPRIT",
    detail: "Engineering cycle (Master equivalent), Data Science (1.4 German GPA)",
    where: "Tunis, Tunisia",
    logo: "esprit-logo.svg",
    url: "https://www.esprit.tn/nos-programmes/programmes-dingenieur/esprit-tunis/ingenieur-en-genie-informatique/",
  },
]

/** Opens a PDF in public/paper.html so the tab gets the paper favicon + title. */
export const paperHref = (file: string, title: string, kind?: "cv") =>
  `paper.html?file=${encodeURIComponent(file)}&title=${encodeURIComponent(title)}` +
  (kind ? `&kind=${kind}` : "")

/** CV opens in the same viewer, with its own favicon. */
export const cvHref = paperHref(
  "DSCVMohebAbdelhafidh.pdf",
  "Moheb Abdelhafidh — CV",
  "cv"
)

export const publications: Publication[] = [
  {
    title: "GNN benchmarking for customs fraud link prediction",
    topic: "Graph neural networks · Link prediction",
    image: "gnn-paper.jpg",
    links: [
      {
        label: "Paper",
        href: paperHref("GNN_GUCE_Benchmarking.pdf", "GNN benchmarking for customs fraud link prediction"),
        title: "GNN benchmarking for customs fraud link prediction",
        description:
          "Benchmark of graph neural network architectures for link prediction on customs fraud data.",
      },
    ],
  },
  {
    title:
      "Reproducing and extending backdoor-critical layer identification: a practical study on layer-wise poisoning and neuron responsibility",
    topic: "Federated learning · Model security",
    image: "backdoor-paper.jpg",
    links: [
      {
        label: "Paper",
        href: paperHref("FL_Backdoor_Attack__Layer_poisoning_.pdf", "Backdoor-critical layer identification in federated learning"),
        title: "Backdoor-critical layer identification in federated learning",
        description:
          "A practical study on layer-wise poisoning and neuron responsibility in federated learning.",
      },
      {
        label: "Code",
        href: "https://github.com/MouhebAbdelhafidh/Backdoor-Attacks-on-Deep-Learning-Models",
        title: "Backdoor-Attacks-on-Deep-Learning-Models",
        description:
          "Code for reproducing and extending backdoor-critical layer identification.",
      },
    ],
  },
  {
    title:
      "MARMT — the memory-augmented marketing maestro: ReAct RAG with strategic retrieval selection",
    topic: "Retrieval-augmented generation · Agents",
    image: "marmt-paper.jpg",
    links: [
      {
        label: "Paper",
        href: paperHref("MARMT.pdf", "MARMT: memory-augmented marketing maestro"),
        title: "MARMT: memory-augmented marketing maestro",
        description:
          "ReAct-style RAG agent with strategic retrieval selection for marketing tasks.",
      },
      {
        label: "Code",
        href: "https://github.com/MouhebAbdelhafidh/MarketMind-PIDS",
        title: "MarketMind-PIDS",
        description:
          "Multimodal agentic marketing assistant built with Gradio, Transformers and FastAPI.",
      },
    ],
  },
]

export type Role = {
  title: string
  meta: string
  desc: string
  logo?: string
}

export const roles: Role[] = [
  {
    title: "Master's Thesis — ML Engineer",
    meta: "ADDINN Group · Paris, France · Mar 2026 – Oct 2026",
    desc: "Production grade multimodal customs fraud detection system.",
    logo: "addinn-logo.jpg",
  },
  {
    title: "AI Researcher Engineer",
    meta: "ACTIA Group · Tunis, Tunisia · Jul 2025 – Sep 2025",
    desc: "Spatio-temporal autonomous driving system based on radars (point cloud).",
    logo: "actia-logo.png",
  },
  {
    title: "SDE",
    meta: "ADDINN Group · Tunis, Tunisia · Jul 2024 – Sep 2024",
    desc: "Dashboard for product management admins with conversational chatbot.",
    logo: "addinn-logo.jpg",
  },
]

export type TechItem = {
  name: string
  /** official site / reference opened from the pill */
  href: string
  /** shown in the hover card */
  description: string
}

export type TechCategory = {
  label: string
  items: TechItem[]
}

export const techStack: TechCategory[] = [
  {
    label: "Agentic AI",
    items: [
      {
        name: "MCP",
        href: "https://modelcontextprotocol.io",
        description:
          "Model Context Protocol: an open standard for connecting LLM applications to tools and data sources.",
      },
      {
        name: "A2A",
        href: "https://a2a-protocol.org",
        description:
          "Agent2Agent protocol: an open standard for communication and interoperability between AI agents.",
      },
      {
        name: "Multi-Agent Systems",
        href: "https://en.wikipedia.org/wiki/Multi-agent_system",
        description:
          "Systems where several specialised agents collaborate, delegate and coordinate to solve a task.",
      },
      {
        name: "RAG",
        href: "https://arxiv.org/abs/2005.11401",
        description:
          "Retrieval-Augmented Generation: grounding LLM answers in documents retrieved at query time.",
      },
      {
        name: "ReAct agents",
        href: "https://arxiv.org/abs/2210.03629",
        description:
          "Agents that interleave reasoning traces with tool-using actions.",
      },
      {
        name: "LangGraph",
        href: "https://www.langchain.com/langgraph",
        description:
          "Framework for building stateful, graph-based agent workflows.",
      },
      {
        name: "LangChain",
        href: "https://www.langchain.com",
        description:
          "Framework for composing LLM applications with tools, retrievers and memory.",
      },
      {
        name: "CrewAI",
        href: "https://www.crewai.com",
        description:
          "Framework for orchestrating role-playing multi-agent crews.",
      },
      {
        name: "HF Transformers",
        href: "https://huggingface.co/docs/transformers",
        description:
          "Hugging Face library of pretrained models for text, vision and audio.",
      },
      {
        name: "SDKs",
        href: "https://en.wikipedia.org/wiki/Software_development_kit",
        description:
          "Using provider and framework SDKs to integrate model and agent APIs.",
      },
      {
        name: "Plugins",
        href: "https://en.wikipedia.org/wiki/Plug-in_(computing)",
        description: "Extending assistants and agents with pluggable capabilities.",
      },
      {
        name: "Connectors",
        href: "https://modelcontextprotocol.io",
        description:
          "Connecting agents to external tools, data and services.",
      },
    ],
  },
  {
    label: "LLMs",
    items: [
      {
        name: "LLMs",
        href: "https://en.wikipedia.org/wiki/Large_language_model",
        description:
          "Large language models: transformer models trained on large text corpora.",
      },
      {
        name: "Fine-tuning",
        href: "https://huggingface.co/docs/transformers/training",
        description: "Adapting pretrained models to a specific task or domain.",
      },
      {
        name: "LoRA",
        href: "https://arxiv.org/abs/2106.09685",
        description:
          "Low-Rank Adaptation: parameter-efficient fine-tuning with small trainable matrices.",
      },
      {
        name: "QLoRA",
        href: "https://arxiv.org/abs/2305.14314",
        description:
          "LoRA on a quantized base model, enabling fine-tuning on modest GPUs.",
      },
      {
        name: "Prompt engineering",
        href: "https://www.promptingguide.ai",
        description:
          "Designing prompts and instructions that steer model behaviour reliably.",
      },
      {
        name: "Context engineering",
        href: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents",
        description:
          "Curating what goes into the context window so agents stay accurate and efficient.",
      },
      {
        name: "Inference optimization",
        href: "https://huggingface.co/docs/transformers/llm_optims",
        description:
          "Reducing latency and memory at serving time: quantization, caching, batching.",
      },
    ],
  },
  {
    label: "MLOps",
    items: [
      {
        name: "MLOps pipelines",
        href: "https://ml-ops.org",
        description:
          "End-to-end pipelines for training, deploying and maintaining models.",
      },
      {
        name: "Airflow",
        href: "https://airflow.apache.org",
        description: "Apache Airflow: workflow orchestration and scheduling.",
      },
      {
        name: "MLflow",
        href: "https://mlflow.org",
        description: "Experiment tracking, model registry and deployment.",
      },
      {
        name: "Docker",
        href: "https://www.docker.com",
        description: "Containerising services and models for reproducible deployment.",
      },
      {
        name: "CI/CD",
        href: "https://en.wikipedia.org/wiki/CI/CD",
        description:
          "Automated build, test and deployment pipelines for training and serving.",
      },
      {
        name: "PyTest",
        href: "https://docs.pytest.org",
        description: "Python testing framework for unit and integration tests.",
      },
      {
        name: "Model monitoring",
        href: "https://ml-ops.org",
        description:
          "Tracking performance, drift and data quality of models in production.",
      },
    ],
  },
  {
    label: "Languages",
    items: [
      {
        name: "Python",
        href: "https://www.python.org",
        description: "Primary language for ML, data and backend work.",
      },
      {
        name: "R",
        href: "https://www.r-project.org",
        description: "Statistical computing, time series and data analysis.",
      },
      {
        name: "C++",
        href: "https://isocpp.org",
        description: "Systems-level, performance-critical programming.",
      },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "Language of the web, for front-end and tooling.",
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org",
        description: "Typed superset of JavaScript, used for this site.",
      },
      {
        name: "SQL",
        href: "https://en.wikipedia.org/wiki/SQL",
        description: "Querying and modelling relational data.",
      },
      {
        name: "NoSQL",
        href: "https://en.wikipedia.org/wiki/NoSQL",
        description: "Document, key-value and graph stores for flexible schemas.",
      },
    ],
  },
  {
    label: "Backend & APIs",
    items: [
      {
        name: "FastAPI",
        href: "https://fastapi.tiangolo.com",
        description: "Modern, high-performance Python framework for building APIs.",
      },
      {
        name: "Flask",
        href: "https://flask.palletsprojects.com",
        description: "Lightweight Python web framework.",
      },
      {
        name: "Swagger",
        href: "https://swagger.io",
        description: "OpenAPI tooling for documenting and exploring APIs.",
      },
      {
        name: "Postman",
        href: "https://www.postman.com",
        description: "Designing, testing and documenting API requests.",
      },
    ],
  },
  {
    label: "Data & ML",
    items: [
      {
        name: "PySpark",
        href: "https://spark.apache.org/docs/latest/api/python/",
        description: "Python API for distributed data processing with Apache Spark.",
      },
      {
        name: "Hadoop",
        href: "https://hadoop.apache.org",
        description: "Distributed storage and processing for large datasets.",
      },
      {
        name: "XGBoost",
        href: "https://xgboost.readthedocs.io",
        description: "Gradient-boosted trees for tabular data.",
      },
      {
        name: "LightGBM",
        href: "https://lightgbm.readthedocs.io",
        description: "Fast, memory-efficient gradient boosting framework.",
      },
    ],
  },
]

export type Project = {
  title: string
  stack: string
  desc: string
  code: string
  /** pill text, defaults to "Code" */
  label?: string
  /** shows a small star next to the link */
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "Fraud Detection System for Cameroon Customs - Thesis project",
    stack: "Spark · PyTorch Geometric · FastAPI · Docker · RAG · MLOps · ML flow · Airflow · AI agents · postgreSQL",
    desc: "Customs fraud detection system through historical big data for Cameroon customs using a hybrid multimodal GNN and unsupervised machine learning models, integrating a RAG memory-augmented AI agents for explainability and a 100% MLOps CI/monitoring pipeline within an Agile SCRUM framework.",
    code: "https://drive.google.com/file/d/1D3gIN6GRTm-aA1Lc_Daci3QfYvN6VLJj/view?usp=sharing",
    label: "Report",
    featured: true,
  },
  {
    title: "Industrial SCL System ",
    stack: "FastMCP · Ollama (Qwen2.5-Coder) · ChromaDB RAG · SimaticML · Streamlit ",
    desc: "Agentic pipeline implementing execution-grounded self-repair (RLEF) and RAG to generate, statically validate, and export IEC 61131-3 compliant Siemens SCL code.",
    code: "https://github.com/MouhebAbdelhafidh/Siemens-Code-Agent-System",
  },
  {
    title: "MarketMind",
    stack: "Gradio · Transformers · FastAPI",
    desc: "Multimodal agentic marketing assistant that generates personalized social posts, full marketing strategies, detects sentiment, and recommends influencers.",
    code: "https://github.com/MouhebAbdelhafidh/MarketMind-PIDS",
  },
  {
    title: "Customer Churn MLOps Pipeline",
    stack: "Airflow · MLflow · FastAPI · Docker",
    desc: "End-to-end MLOps pipeline for churn prediction, with CI/CD-driven training, deployment, and monitoring.",
    code: "https://github.com/MouhebAbdelhafidh/Customer-churn-prediction-with-MLOps",
  },
  {
    title: "MatchWize",
    stack: "Multi-agent systems",
    desc: "AI recruiter agent crew that automates candidate screening, interviewing, and feedback.",
    code: "https://github.com/MouhebAbdelhafidh/MatchWize",
  },
  {
    title: "Emotion Recognition in Audio Signals",
    stack: "Variational autoencoders · Diffusion models",
    desc: "Reproduces a VAE and diffusion-based data augmentation paper to improve audio emotion recognition.",
    code: "https://github.com/MouhebAbdelhafidh/Emotion-recognition-in-audio-signals",
  },
  {
    title: "COVID-19 Deaths Time Series Forecasting",
    stack: "R · Time series analysis",
    desc: "Decomposes and models COVID-19 death trends, seasonality, and residuals with statistical testing.",
    code: "https://github.com/MouhebAbdelhafidh/Covid19-Deaths-Time-Series-Forecasting",
  },
  {
    title: "COVID-19 India Deaths Prediction",
    stack: "R · Linear regression",
    desc: "Statistical study predicting weekly COVID-19 deaths in India using regression models on prior-week data.",
    code: "https://github.com/MouhebAbdelhafidh/COVID-19-India-Deaths",
  },
]
