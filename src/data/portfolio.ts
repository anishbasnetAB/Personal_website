export type TermLine = { type: 'cmd' | 'out'; text: string };

export const portfolio = {
  identity: {
    name: "Anish Basnet",
    monogram: "AB",
    title: "Software Developer | Java, Spring Boot, PostgreSQL, Apache Kafka | AWS Certified",
    location: "Greater Toronto Area, Ontario, Canada",
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
    locationLine: "Greater Toronto Area, ON, Canada",
    roleLine: "Java Backend • Spring Boot • PostgreSQL • Kafka • Financial Systems",
    tagline:
      "I build backend systems in Java, Spring Boot, and PostgreSQL where correctness has to hold under concurrency, retries, and failure. My flagship project, Ledger-Core, is a banking backend with ACID transactions, idempotent transfers, optimistic locking, double-entry bookkeeping, Kafka event processing, and automated reconciliation, stress-tested with 1,000 concurrent transfers and zero duplicate postings.",
    terminal: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'anish, software developer focused on financial and distributed systems' },
      { type: 'cmd', text: './ledgerCore verify' },
      { type: 'out', text: 'transactions   ACID money movement with rollback protection' },
      { type: 'out', text: 'concurrency    optimistic locking protects against stale balance updates' },
      { type: 'out', text: 'idempotency    1,000 concurrent transfers, replayed requests, 0 duplicates' },
      { type: 'out', text: 'ledger         double-entry, append-only records with reconciliation' },
      { type: 'cmd', text: './status' },
      { type: 'out', text: 'open to backend software engineering roles in canada' },
    ] as TermLine[],
    stats: [
      { value: "0", unit: "duplicates", label: "across 1,000 concurrent HTTP transfers" },
      { value: "30%", unit: "faster APIs", label: "after removing N+1 queries at NexGen" },
      { value: "3", unit: "replicas", label: "zero-downtime Kubernetes rollouts" },
    ],
  },

  about: {
    bio:
      "Software developer with professional experience shipping Spring Boot REST APIs, database-backed services, and automated tests on a payments and inventory platform for small retailers. I work primarily with Java 21, Spring Boot, PostgreSQL, Kafka, Redis, Docker, Kubernetes, and AWS, with a focus on fintech and distributed systems. My recent work explores transaction correctness, double-entry ledgering, idempotency, concurrency control, event-driven processing, reconciliation, and production-style deployment.",
    focusAreas: [
      {
        title: "Java Backend Engineering",
        body:
          "Java 21, Spring Boot, REST APIs, service-layer business logic, Spring Data JPA, Hibernate, PostgreSQL, MySQL, Flyway migrations, validation, error handling, and automated testing.",
      },
      {
        title: "Financial Systems and Data Integrity",
        body:
          "ACID transactions, optimistic locking, idempotent APIs enforced at the database level, double-entry bookkeeping, append-only ledgers, BigDecimal money handling, reconciliation jobs, and failure-oriented testing.",
      },
      {
        title: "Distributed Systems and Reliability",
        body:
          "Kafka producers that publish only after commit, idempotent consumers, Redis caching that degrades safely, rate limiting, concurrency control, event-driven architecture, Docker, and CI/CD.",
      },
      {
        title: "Cloud and Deployment",
        body:
          "AWS Certified Cloud Practitioner with hands-on EC2 deployment, a 3-replica Kubernetes (k3s) setup with health-gated zero-downtime rolling updates, GitHub Actions pipelines, and Linux.",
      },
    ],
    terminalLines: [
      { type: 'cmd', text: './profile summary' },
      { type: 'out', text: '' },
      { type: 'out', text: 'primary      Java 21, Spring Boot, REST APIs, PostgreSQL' },
      { type: 'out', text: 'fintech      ACID, idempotency, double-entry ledgering, reconciliation' },
      { type: 'out', text: 'messaging    Kafka, Redis, event-driven architecture' },
      { type: 'out', text: 'testing      JUnit 5, Mockito, concurrency and failure cases' },
      { type: 'out', text: 'delivery     Docker, Kubernetes, GitHub Actions CI/CD, Flyway' },
      { type: 'out', text: 'cloud        AWS Certified Cloud Practitioner; EC2 deployment' },
      { type: 'out', text: 'frontend     React, TypeScript, Flutter' },
      { type: 'out', text: 'status       authorized to work full-time in canada' },
      { type: 'out', text: '' },
    ] as TermLine[],
  },

  experience: [
    {
      company: "Independent",
      role: "Backend Engineering and Professional Development",
      period: "Jan 2026 to Present",
      subPeriod: "Greater Toronto Area, Canada",
      tech: [
        "Java 21",
        "Spring Boot",
        "PostgreSQL",
        "Kafka",
        "Redis",
        "Docker",
        "Kubernetes",
        "AWS",
        "System Design",
      ],
      bullets: [
        "Built Ledger-Core, a Java 21 and Spring Boot banking backend focused on transaction correctness, concurrency control, idempotency, double-entry bookkeeping, reconciliation, and event-driven processing.",
        "Achieved zero duplicate postings across 1,000 concurrent transfers over real HTTP against PostgreSQL, with 16 parallel workers and 50 requests deliberately replayed three times each.",
        "Deployed a 3-replica Kubernetes (k3s) setup on AWS EC2 with health-gated zero-downtime rolling updates, backed by Docker, Flyway, and a GitHub Actions CI/CD pipeline.",
        "Continued structured study in distributed systems, databases, cloud computing, and system design, and earned the AWS Certified Cloud Practitioner certification in July 2026.",
      ],
    },
    {
      company: "NexGen",
      role: "Software Developer",
      period: "Jan 2023 to Dec 2023",
      subPeriod: "Digital Pasal: inventory, store-credit, and payments platform for small retailers",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "REST APIs", "MySQL", "React", "JUnit 5", "Mockito", "Git", "Jira", "Agile"],
      bullets: [
        "Delivered accounts and payments features that supported Digital Pasal scaling from about 10 to 30 to 40 active retail shops, by building and shipping 10+ REST API endpoints across three client-facing modules using Java, Spring Boot, and Spring Data JPA within a six-person Agile team.",
        "Cut average API response time by 30 percent and database round trips by more than 40 percent, by refactoring service and data access layers to remove N+1 query patterns in Hibernate and MySQL.",
        "Reduced the open bug backlog by about 40 percent, by resolving 15+ defects during QA and pre-production while integrating backend APIs with React frontend components across three product modules.",
        "Sustained about 80 percent unit-test coverage with JUnit 5 and Mockito, catching regressions before release, by validating service-layer business rules independently of the database and contributing through Git pull requests, Jira, and weekly code reviews.",
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
      role: "Flutter Developer Intern",
      period: "Dec 2021 to Mar 2022",
      tech: ["Flutter", "Dart", "MySQL", "REST APIs", "Mobile Development", "Debugging"],
      bullets: [
        "Shipped Flutter user interface features in Dart across three mobile releases, by integrating MySQL-backed REST services and building reusable components.",
        "Resolved 10+ QA-reported defects and post-release fixes, by consuming and testing REST API endpoints, handling JSON responses and error states across multiple screens, and coordinating with a cross-functional team through structured QA handoff.",
      ],
    },
  ],

  projects: [
    {
      title: "Ledger-Core: Banking Backend REST API",
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
        "GitHub Actions",
      ],
      stats: [
        { value: "0", label: "duplicate postings across 1,000 concurrent transfers" },
        { value: "0", label: "overdrafts in 10-thread concurrency test" },
        { value: "3", label: "replicas with zero-downtime rolling updates" },
      ],
      problem:
        "Financial systems must stay correct when requests are retried, transactions fail, or concurrent updates hit the same account. Ledger-Core focuses on those failure cases rather than treating money movement as basic CRUD.",
      role: "Solo backend project covering architecture, implementation, database design, testing, reliability, and deployment.",
      highlights: [
        "Achieved zero duplicate postings and fully balanced ledgers across 1,000 concurrent transfers over real HTTP against PostgreSQL (16 parallel workers, 50 requests deliberately replayed three times each), by enforcing idempotency keys with a database-level UNIQUE constraint and BigDecimal money handling.",
        "Kept account balances correct under concurrent load by implementing double-entry bookkeeping, an append-only ledger enforced at the database level, ACID transactions, and optimistic locking; stress tested concurrent withdrawals with 10 threads and recorded 0 overdrafts.",
        "Secured the API with Spring Security login and signup, JWT authentication, and role-based access control, and added a scheduled reconciliation job that verifies stored balances against the ledger.",
        "Built event-driven ledger processing with an Apache Kafka producer that publishes only after the database transaction commits and idempotent consumers using atomic inserts.",
        "Added a Redis balance cache with rate limiting that degrades safely when Redis is unavailable, so a cache outage can only make a read stale, never incorrect.",
        "Wrote 50+ JUnit 5 and Mockito tests covering rollbacks, duplicate transfers, concurrent withdrawals, business rules, and ledger consistency.",
        "Deployed a 3-replica Kubernetes (k3s) setup on AWS EC2 with health-gated zero-downtime rolling updates, containerized with Docker, versioned the schema with Flyway, and shipped through a GitHub Actions CI/CD pipeline.",
      ],
      liveUrl: "https://ledger-core-frontend-anish.vercel.app/",
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
        { value: "1.63M", label: "orders/sec, in-process matching engine" },
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
        "Persisted completed trades and buyer and seller position updates to PostgreSQL using atomic transaction writes.",
        "Used Redis Pub/Sub to distribute trade events to persistence and WebSocket services and built authenticated real-time market-data feeds.",
        "Built a React 18 and TypeScript dashboard showing live order books, trades, positions, and PnL with WebSocket reconnect handling.",
        "Ran 4 services with Docker Compose and automated C++ builds and tests and TypeScript validation through GitHub Actions.",
      ],
      liveUrl: "https://trading-exchange-simulator.vercel.app",
      githubUrl: "https://github.com/anishbasnetAB/Trading-Exchange-Simulator",
    },
    {
      title: "Job Connect: Full Stack Job Portal",
      featured: false,
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs"],
      stats: [],
      problem:
        "A full-stack job portal covering user accounts, job postings, applications, and API-driven frontend and backend interaction.",
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
        "Spring Data JPA",
        "Spring Security",
        "Hibernate",
        "REST APIs",
        "API Design",
        "Microservices",
        "Object-Oriented Programming (OOP)",
        "Maven",
      ],
    },
    {
      category: "Financial Systems and Data",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQL",
        "ACID Transactions",
        "Idempotency",
        "Optimistic Locking",
        "Double-Entry Ledgering",
        "Reconciliation",
        "Relational Database Design",
        "Flyway",
      ],
    },
    {
      category: "Messaging and Distributed Systems",
      items: [
        "Apache Kafka",
        "Redis",
        "Event-Driven Architecture",
        "Idempotent Consumers",
        "Rate Limiting",
        "Concurrency",
        "WebSockets",
      ],
    },
    {
      category: "Testing and DevOps",
      items: [
        "JUnit 5",
        "Mockito",
        "Unit Testing",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
        "AWS",
        "Linux",
      ],
    },
    {
      category: "Languages",
      items: [
        "Java",
        "Python",
        "SQL",
        "TypeScript",
        "Dart",
        "C++20",
      ],
    },
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Flutter",
      ],
    },
    {
      category: "Methodologies",
      items: [
        "Agile",
        "Scrum",
        "Code Review",
        "Git",
        "GitHub",
        "Jira",
        "SOLID",
        "Postman",
      ],
    },
    {
      category: "AI Assisted Dev",
      items: [
        "GitHub Copilot",
        "Claude Code",
        "ChatGPT",
        "Cursor",
      ],
    },
  ],

  education: [
    {
      institution: "Lambton College, Ontario, Canada",
      degree: "Postgraduate Diploma, Computer Software Engineering",
      period: "Jan 2024 to Dec 2025",
    },
    {
      institution: "London Metropolitan University, United Kingdom",
      degree: "BSc (Honours) Computer Science, First-Class Honours",
      period: "Jan 2019 to Sep 2022",
    },
  ],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "Jul 2026" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "Feb 2023" },
  ],

  contact: {
    heading: "Let's build reliable backend and financial systems.",
    note:
      "I am looking for backend software engineering opportunities in Canada, especially Java, Spring Boot, fintech, payments, financial platforms, and other transaction-heavy systems. I am authorized to work full-time in Canada and do not currently require employer sponsorship.",
  },
};