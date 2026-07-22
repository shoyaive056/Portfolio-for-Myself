export const profile = {
  name: "Mahmudul Hassan Shoyaive",
  role: "Software Engineer",
  tagline:
    "I design and build reliable web systems Landing pages, web applications, and APIs that scale.",
  location: "Dhaka, Bangladesh · Open to remote & on-site roles",
  email: "alex.rivera@email.com",
  resumeUrl: "#", // link to a hosted PDF resume
  socials: [
    { label: "GitHub", url: "https://github.com/yourhandle" },
    { label: "LinkedIn", url: "https://linkedin.com/in/yourhandle" },
    { label: "X / Twitter", url: "https://x.com/yourhandle" },
  ],
};

export const about = {
  paragraphs: [
    "I'm a software engineer with a background in building product-facing web applications and the infrastructure behind them. I care about code that's easy to delete as much as code that's easy to write.",
    "Most of my recent work sits at the intersection of frontend architecture and backend systems design — API design, data modelling, and the small performance decisions that add up to a fast, dependable product.",
  ],
  facts: [
    { label: "Experience", value: "5+ years" },
    { label: "Focus", value: "Web platforms, APIs, DX tooling" },
    { label: "Currently", value: "Senior Engineer @ Your Company" },
    { label: "Stack", value: "TypeScript, React, Node, PostgreSQL" },
  ],
};

export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "Go"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Redis", "REST & GraphQL"],
  },
  {
    title: "Infrastructure",
    items: ["Docker", "AWS", "CI/CD", "Nginx", "Linux"],
  },
];

export const projects = [
  {
    id: "01",
    year: "2026",
    title: "Ledger — Small Business Invoicing",
    description:
      "A full-stack invoicing platform with recurring billing, PDF generation, and a reconciliation dashboard used by 200+ small businesses.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe API"],
    links: { live: "#", code: "#" },
  },
  {
    id: "02",
    year: "2025",
    title: "Northwind Analytics",
    description:
      "Real-time analytics dashboard ingesting event streams and rendering sub-second charts for operations teams.",
    stack: ["TypeScript", "Next.js", "Kafka", "ClickHouse"],
    links: { live: "#", code: "#" },
  },
  {
    id: "03",
    year: "2024",
    title: "Fieldnote — Offline-First Notes",
    description:
      "A note-taking app built for field researchers with spotty connectivity — local-first sync with conflict resolution.",
    stack: ["React Native", "SQLite", "CRDTs"],
    links: { live: "#", code: "#" },
  },
  {
    id: "04",
    year: "2023",
    title: "DevBoard — Internal Tooling Suite",
    description:
      "Internal developer portal consolidating deploy status, feature flags, and service health into a single pane of glass.",
    stack: ["Go", "React", "gRPC", "Docker"],
    links: { live: "#", code: "#" },
  },
];

export const experience = [
  {
    role: "Senior Software Engineer",
    company: "Your Company",
    period: "2023 — Present",
    points: [
      "Led migration of the core web app to a modular architecture, cutting build times by 40%.",
      "Designed the internal API gateway now serving 12 downstream services.",
      "Mentored three engineers through their first production launches.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Previous Company",
    period: "2021 — 2023",
    points: [
      "Built and shipped the customer-facing billing dashboard from scratch.",
      "Introduced automated testing, raising coverage from 20% to 78%.",
    ],
  },
  {
    role: "Junior Developer",
    company: "First Company",
    period: "2019 — 2021",
    points: [
      "Maintained and extended a Django monolith serving 50k daily users.",
      "Owned the release process end to end.",
    ],
  },
];

export const contact = {
  heading: "Let's work together",
  body: "I'm currently open to senior engineering roles and select freelance projects. The fastest way to reach me is email.",
};