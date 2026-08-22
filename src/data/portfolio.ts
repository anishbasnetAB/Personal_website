export type TermLine = { type: 'cmd' | 'out'; text: string };

export const portfolio = {
  identity: {
    name: "Anish Basnet",
    monogram: "AB",
    title: "Java Backend Developer | Spring Boot, PostgreSQL, Kafka | Financial & Distributed Systems",
    location: "Mississauga, Ontario, Canada",
    email: "theanishbasnet@gmail.com",
    linkedin: "https://linkedin.com/in/theanishbasnet",
    github: "https://github.com/anishbasnetAB",
    blog: "https://dev.to/anishbasnetab",
    openTo:
      "Open to Backend Developer, Java Developer, Software Developer, Software Engineer, and Backend Software Engineer roles in Canada, especially fintech, payments, and transaction-heavy systems",
    workAuth: "Authorized to work full-time in Canada; no current employer sponsorship required",
    cvUrl: "/Anish_Basnet_Resume.pdf",
  },

  hero: {
    availability: "Open to backend software engineering opportunities in Canada",
    locationLine: "Mississauga, ON, Canada",
    roleLine: "Java Backend • Spring Boot • PostgreSQL • Kafka • Financial Systems",
    tagline:
      "I build reliable backend systems with Java, Spring Boot, and PostgreSQL, with a focus on transaction correctness, concurrency, event-driven architecture, and fintech. My flagship project, Ledger Core, implements ACID transactions, idempotent transfers, optimistic locking, double-entry bookkeeping, Kafka processing, and automated reconciliation.",
    terminal: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'anish, java backend developer focused on financial and distributed systems' },
      { type: 'cmd', text: './ledgerCore verify' },
      { type: 'out', text: 'transactions   ACID money movement with rollback protection' },
      { type: 'out', text: 'concurrency    optimistic locking protects against stale balance updates' },
      { type: 'out', text: 'ledger         double-entry records with reconciliation support' },
      { type: 'cmd', text: './status' },
      { type: 'out', text: 'open to backend software engineering roles in canada' },
    ] as TermLine[],
    stats: [
      { value: "ACID", unit: "transactions", label: "rollback-safe money movement" },
      { value: "0", unit: "duplicates", label: "in 1,000 transfer retry tests" },
      { value: "1.6M", unit: "orders/sec", label: "in-process C++20 matching engine benchmark" },
    ],
  },

  about: {
    bio:
      "Java backend developer with professional experience building Spring Boot APIs, database-backed services, and automated tests. I work primarily with Java, Spring Boot, PostgreSQL, Kafka, Docker, and AWS fundamentals, with a growing focus on fintech and distributed systems. My recent projects explore transaction correctness, double-entry ledgering, idempotency, concurrency, event-driven processing, reconciliation, and high-performance trading systems.",
    focusAreas: [
      {
        title: "Java Backend Engineering",
        body:
          "Java 21, Spring Boot, REST APIs, service-layer business logic, Spring Data JPA, Hibernate, PostgreSQL, Flyway migrations, validation, error handling, and automated testing.",
      },
      {
        title: "Financial Systems and Data Integrity",
        body:
          "ACID transactions, optimistic locking, idempotent APIs, double-entry bookkeeping, append-only ledgers, reconciliation workflows, and failure-oriented testing.",
      },
      {
        title: "Distributed Systems and Reliability",
        body:
          "Kafka event processing, idempotent consumers, Redis, concurrency control, event-driven architecture, Docker, CI/CD, observability-minded design, and recovery-focused testing.",
      },
      {
        title: "Cloud and Systems",
        body:
          "AWS Certified Cloud Practitioner with working knowledge of EC2, S3, IAM, and cloud fundamentals, plus C++20 systems work involving performance benchmarking, Redis event distribution, WebSockets, and Linux.",
      },
    ],
    terminalLines: [
      { type: 'cmd', text: './profile summary' },
      { type: 'out', text: '' },
      { type: 'out', text: 'primary      Java 21, Spring Boot, REST APIs, PostgreSQL' },
      { type: 'out', text: 'fintech      ACID, idempotency, double-entry ledgering, reconciliation' },
      { type: 'out', text: 'messaging    Kafka, Redis, event-driven architecture' },
      { type: 'out', text: 'testing      JUnit 5, Mockito, AssertJ, concurrency and failure cases' },
      { type: 'out', text: 'delivery     Docker, GitHub Actions CI/CD, Flyway, Kubernetes manifests' },
      { type: 'out', text: 'cloud        AWS Certified Cloud Practitioner; EC2, S3, IAM fundamentals' },
      { type: 'out', text: 'systems      C++20, low-latency benchmarking, WebSockets, Linux' },
      { type: 'out', text: 'status       authorized to work full-time in canada' },
      { type: 'out', text: '' },
    ] as TermLine[],
  },

  experience: [
    {
      company: "Independent",
      role: "Backend Engineering & Professional Development",
      period: "Jan 2026 to Present",
      subPeriod: "Greater Toronto Area, Canada",
      tech: [
        "Java 21",
        "Spring Boot",
        "PostgreSQL",
        "Kafka",
        "Redis",
        "Docker",
        "C++20",
        "AWS",
        "System Design",
      ],
      bullets: [
        "Built Ledger Core, a Java 21 and Spring Boot financial backend focused on transaction correctness, concurrency control, idempotency, double-entry bookkeeping, reconciliation, and event-driven processing.",
        "Implemented PostgreSQL-backed ACID transactions, optimistic locking, append-only ledger records, Kafka consumers, Redis functionality, Flyway migrations, and automated tests for duplicate transfers, concurrent withdrawals, rollbacks, and ledger consistency.",
        "Built a real-time trading exchange simulator with a C++20 matching engine, pre-trade risk controls, PostgreSQL transaction processing, Redis event distribution, WebSocket market data, and a React dashboard.",
        "Continued structured study in distributed systems, databases, cloud computing, system design, and backend reliability, and earned the AWS Certified Cloud Practitioner certification in July 2026.",
      ],
    },
    {
      company: "NexGen",
      role: "Junior Software Developer",
      period: "Jan 2023 to Dec 2023",
      subPeriod: "Started as an intern from Jan to Apr 2023, then continued as a Junior Developer from May to Dec 2023",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "SQL", "React.js", "JUnit 5", "Mockito", "Git", "Jira", "Agile"],
      bullets: [
        "Built and shipped more than 10 REST API endpoints and backend service features using Java, Spring Boot, Spring Data JPA, Hibernate, and SQL as part of a 6-person Agile team.",
        "Integrated backend APIs with React.js frontend components across 3 product modules and resolved more than 15 QA and pre-production defects, helping reduce the bug backlog by about 40%.",
        "Maintained unit test coverage above 80% with JUnit 5 and Mockito and contributed documented, testable code through Git-based pull request workflows.",
        "Participated in weekly code reviews, sprint planning, debugging, defect triage, and iterative feature delivery using Git, Jira, and Agile development practices.",
      ],
    },
    {
      company: "Leapfrog Technology",
      role: "Student Partner",
      period: "Jan 2022 to Dec 2022",
      tech: ["React.js", "Node.js", "JavaScript", "Code Reviews", "Web Development"],
      bullets: [
        "Completed industry-oriented training in React.js, Node.js, and JavaScript through structured exercises, peer reviews, hackathons, and collaborative development activities.",
      ],
    },
    {
      company: "Technobyte",
      role: "Flutter Intern",
      period: "Dec 2021 to Mar 2022",
      tech: ["Flutter", "MySQL", "REST APIs", "Mobile Development", "Debugging"],
      bullets: [
        "Built Flutter UI features integrated with MySQL-backed REST services and supported API integration, testing, QA defect resolution, and post-implementation fixes across 3 feature releases.",
      ],
    },
  ],

  projects: [
    {
      title: "Ledger Core — Financial Ledger & Money Movement Backend",
      featured: true,
      tags: [
        "Java 21",
        "Spring Boot",
        "PostgreSQL",
        "Spring Data JPA",
        "Hibernate",
        "Kafka",
        "Redis",
        "Spring Security",
        "JWT",
        "Flyway",
        "JUnit 5",
        "Mockito",
        "Docker",
        "Kubernetes",
      ],
      stats: [
        { value: "ACID", label: "transaction safety" },
        { value: "0", label: "duplicate transfers in 1,000 retry tests" },
        { value: "0", label: "overdrafts in 10-thread concurrency test" },
      ],
      problem:
        "Financial systems must stay correct when requests are retried, transactions fail, or concurrent updates hit the same account. Ledger Core focuses on those failure cases rather than treating money movement as basic CRUD.",
      role: "Solo backend project covering architecture, implementation, database design, testing, reliability, and deployment.",
      highlights: [
        "Designed account, deposit, withdrawal, and transfer workflows using Java 21, Spring Boot, PostgreSQL, and Spring Data JPA/Hibernate.",
        "Implemented double-entry bookkeeping and an append-only ledger to preserve an auditable history of financial postings.",
        "Used ACID transactions and optimistic locking to protect financial state during failures and concurrent operations; stress tested concurrent withdrawals with 10 threads and recorded 0 overdrafts.",
        "Implemented idempotent transfer processing and recorded 0 duplicate money movements across a 1,000-request retry test.",
        "Added Kafka-based event processing with idempotent consumers, automated reconciliation, Redis-backed functionality, and Flyway schema migrations.",
        "Implemented JWT authentication and role-based authorization with Spring Security and wrote more than 50 automated tests covering rollbacks, duplicate transfers, concurrency, business rules, and ledger consistency.",
        "Containerized the application with Docker and created Kubernetes deployment manifests with replica and rolling-update configuration.",
      ],
      liveUrl: "https://ledger-core-frontend-gamma.vercel.app/",
      githubUrl: "https://github.com/anishbasnetAB/ledger-core",
    },
    {
      title: "Real-Time Trading Exchange Simulator",
      featured: true,
      tags: [
        "C++20",
        "Node.js",
        "Fastify",
        "React 18",
        "Redis",
        "PostgreSQL",
        "WebSocket",
        "Docker",
        "GitHub Actions",
      ],
      stats: [
        { value: "1.63M", label: "orders/sec — in-process matching engine" },
        { value: "583 ns", label: "p50 matching latency" },
        { value: "958 ns", label: "p99 matching latency" },
      ],
      problem:
        "Trading systems need deterministic matching, fair execution, clear event flow, transaction safety, and predictable latency. I built this project to understand how a matching engine, backend services, persistence, risk controls, and a live market-data interface work together.",
      role: "Solo systems project covering architecture, C++ matching-engine development, backend services, frontend integration, benchmarking, CI, and deployment.",
      highlights: [
        "Built a C++20 price-time-priority matching engine supporting FIFO order-book behavior, limit and market orders, partial fills, cancellations, and GoogleTest coverage.",
        "Benchmarked the in-process matching engine across 1 million orders at 1,626,655 orders per second, with p50 matching latency of 583 ns and p99 latency of 958 ns.",
        "Implemented pre-trade risk controls including symbol validation, maximum quantity, notional limits, and buying-power checks.",
        "Persisted completed trades and buyer/seller position updates to PostgreSQL using atomic transaction writes.",
        "Used Redis Pub/Sub to distribute trade events to persistence and WebSocket services and built authenticated real-time market-data feeds.",
        "Built a React 18 and TypeScript dashboard showing live order books, trades, positions, and PnL with WebSocket reconnect handling.",
        "Ran 4 services with Docker Compose and automated C++ builds/tests and TypeScript validation through GitHub Actions.",
      ],
      liveUrl: "https://trading-exchange-simulator.vercel.app",
      githubUrl: "https://github.com/anishbasnetAB/Trading-Exchange-Simulator",
    },
    {
      title: "Job Connect — Full Stack Job Portal",
      featured: false,
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs"],
      stats: [],
      problem:
        "A full-stack job portal covering user accounts, job postings, applications, and API-driven frontend/backend interaction.",
      role: "Solo full-stack project.",
      highlights: [
        "Built a REST API backend with Node.js, Express, and MongoDB.",
        "Created a React and TypeScript frontend for job search, job postings, and application workflows.",
        "Practiced full-stack data flow, API integration, form handling, and reusable frontend components.",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/anishbasnetAB/Job-Connect-MERN-Stack-",
    },
    {
      title: "Book Store Management System",
      featured: false,
      tags: ["ASP.NET Core 6", "C#", "Entity Framework", "Razor Pages", "Bootstrap"],
      stats: [],
      problem:
        "An academic bookstore and inventory system built to practice layered architecture, data access, and collaborative software development.",
      role: "Academic team project at Lambton College.",
      highlights: [
        "Built an n-tier application using ASP.NET Core 6, MVC, Razor Pages, and Entity Framework.",
        "Implemented bookstore and inventory management workflows.",
        "Worked with the team using Git-based development practices.",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/anishbasnetAB/Book-Store",
    },
  ],

  skills: [
    {
      category: "Backend",
      items: [
        "Java 21",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Hibernate",
        "Spring Security",
        "Flyway",
        "Maven",
        "REST APIs",
        "Microservices",
      ],
    },
    {
      category: "Financial Systems and Data",
      items: [
        "PostgreSQL",
        "SQL",
        "ACID Transactions",
        "Idempotency",
        "Optimistic Locking",
        "Double-Entry Ledgering",
        "Reconciliation",
        "Relational Design",
        "MySQL",
      ],
    },
    {
      category: "Messaging and Distributed Systems",
      items: [
        "Apache Kafka",
        "Redis",
        "Event-Driven Architecture",
        "Idempotent Consumers",
        "Redis Pub/Sub",
        "WebSockets",
        "Concurrency",
      ],
    },
    {
      category: "Testing and Delivery",
      items: [
        "JUnit 5",
        "Mockito",
        "AssertJ",
        "Docker",
        "Docker Compose",
        "GitHub Actions CI/CD",
        "Kubernetes Manifests",
        "Linux",
      ],
    },
    {
      category: "Cloud",
      items: [
        "AWS Certified Cloud Practitioner",
        "AWS EC2",
        "AWS S3",
        "AWS IAM",
        "Cloud Fundamentals",
      ],
    },
    {
      category: "Systems and Languages",
      items: [
        "Java 21",
        "C++20",
        "TypeScript",
        "JavaScript",
        "Python",
        "SQL",
      ],
    },
    {
      category: "Frontend — Secondary",
      items: [
        "React 18",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5",
        "Tailwind CSS",
        "Responsive Web Design",
      ],
    },
    {
      category: "Engineering Practices",
      items: [
        "OOP",
        "SOLID",
        "Code Reviews",
        "Agile and Scrum",
        "Git",
        "Jira",
        "Postman",
      ],
    },
    {
      category: "AI-Assisted Development",
      items: [
        "GitHub Copilot",
        "ChatGPT",
        "Claude Code",
        "Cursor",
      ],
    },
  ],

  education: [
    {
      institution: "Lambton College",
      degree: "Postgraduate Diploma, Computer Software Engineering",
      period: "Jan 2024 to Dec 2025",
    },
    {
      institution: "London Metropolitan University",
      degree: "Bachelor's Degree, Computer Science, First Class Honours",
      period: "Jan 2019 to Sep 2022",
    },
  ],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2026" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "Feb 2023" },
  ],

  contact: {
    heading: "Let's build reliable backend and financial systems.",
    note:
      "I am looking for backend software engineering opportunities in Canada, especially Java, Spring Boot, fintech, payments, financial platforms, and other transaction-heavy systems. I am authorized to work full-time in Canada and do not currently require employer sponsorship.",
  },
};