export type TermLine = { type: 'cmd' | 'out'; text: string };

export const portfolio = {
  identity: {
    name: "Anish Basnet",
    monogram: "AB",
    title: "Java Backend Developer · Spring Boot · React Full-Stack · C++ Systems",
    location: "Mississauga, Ontario, Canada",
    email: "theanishbasnet@gmail.com",
    linkedin: "https://linkedin.com/in/theanishbasnet",
    github: "https://github.com/anishbasnetAB",
    openTo:
      "Junior / Associate software developer roles — Java backend, Spring Boot APIs, backend-heavy full-stack, fintech systems, and selective C++ systems roles in Canada",
    workAuth: "Valid PGWP — no sponsorship required",
    cvUrl: "/Anish_Basnet_Resume.pdf",
  },

  hero: {
    availability: "Open to Junior / Associate Software Developer roles",
    locationLine: "Mississauga, ON · Canada",
    roleLine: "Java Backend · Spring Boot · React Full-Stack · C++ Systems",
    tagline:
      "I build backend systems with Java, Spring Boot, and PostgreSQL — focusing on reliable APIs, transaction safety, data integrity, and clean service-layer design. My strongest project is Ledger-Core, a money-movement API built around ACID transactions, idempotency, optimistic locking, double-entry bookkeeping, and automated reconciliation.",
    terminal: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'anish — java backend developer · spring boot · full-stack capable' },
      { type: 'cmd', text: './ledger-core --verify-correctness' },
      { type: 'out', text: 'transactions   ACID rollback-safe money movement' },
      { type: 'out', text: 'concurrency    optimistic locking · no stale balance updates' },
      { type: 'out', text: 'ledger         double-entry · append-only · reconciliation-ready' },
      { type: 'cmd', text: './status' },
      { type: 'out', text: '● open to junior / associate roles · PGWP — no sponsorship needed' },
    ] as TermLine[],
    stats: [
      { value: "ACID", unit: "transactions", label: "rollback-safe money movement" },
      { value: "2-entry", unit: "ledger", label: "debit / credit accounting" },
      { value: "1.6M", unit: "orders/sec", label: "C++20 matching engine" },
    ],
  },

  about: {
    bio:
      "I'm a Java Backend Developer based in Mississauga, Ontario, focused on building reliable REST APIs and backend systems with Java, Spring Boot, PostgreSQL, Spring Data JPA/Hibernate, Docker, and automated testing. My strongest current focus is backend engineering: clean API design, service-layer business logic, database transactions, validation, error handling, schema migrations, testing, and deployment. I also bring full-stack experience with React.js and REST API integration, plus a C++ systems background that helps me think carefully about concurrency, performance, data integrity, and system design.",
    focusAreas: [
      {
        title: "Java Backend & Spring Boot APIs",
        body:
          "REST APIs, service-layer business logic, validation, error handling, PostgreSQL persistence, Spring Data JPA/Hibernate, Flyway migrations, Docker deployment, and JUnit/Mockito testing.",
      },
      {
        title: "Data Integrity & Financial Systems",
        body:
          "Transaction-safe backend design using ACID transactions, optimistic locking, idempotent APIs, double-entry ledger concepts, append-only audit trails, and reconciliation workflows.",
      },
      {
        title: "Full-Stack & Systems Depth",
        body:
          "React.js frontends integrated with backend APIs, plus C++20 systems work involving concurrency, performance benchmarking, Redis event streaming, WebSocket market data, and PostgreSQL persistence.",
      },
    ],
    terminalLines: [
      { type: 'cmd', text: './profile --summary' },
      { type: 'out', text: '' },
      { type: 'out', text: 'primary      Java · Spring Boot · REST APIs · PostgreSQL' },
      { type: 'out', text: 'backend      Spring Data JPA · Hibernate · Flyway · Docker · JUnit · Mockito' },
      { type: 'out', text: 'full-stack   React.js · TypeScript · JavaScript · API integration · forms · state handling' },
      { type: 'out', text: 'messaging    Kafka · Redis Pub/Sub · event-driven architecture' },
      { type: 'out', text: 'systems      C++20/17 · concurrency · Redis Pub/Sub · WebSocket · Linux' },
      { type: 'out', text: 'education    PGD Software Engineering · BSc Computer Science' },
      { type: 'out', text: 'status       ● open to work · Canada · no sponsorship required' },
      { type: 'out', text: '' },
    ] as TermLine[],
  },

  experience: [
    {
      company: "NexGen",
      role: "Junior Software Developer",
      period: "May 2023 – Dec 2023",
      tech: ["Java", "Spring Boot", "REST APIs", "SQL", "React.js", "Git", "Jira", "Agile"],
      bullets: [
        "Developed and maintained backend features for a full-stack web application using Java, Spring Boot, REST APIs, and SQL.",
        "Built REST controllers, service-layer logic, and database-connected CRUD functionality under senior developer guidance.",
        "Integrated backend APIs with React.js UI components, including forms, validation, state handling, and API data flow.",
        "Wrote and debugged SQL queries for application features, data validation, and issue resolution.",
        "Used Git, pull requests, Jira, and Agile workflows to contribute to feature development and code reviews.",
      ],
    },
    {
      company: "NexGen",
      role: "Software Developer Intern",
      period: "Jan 2023 – Apr 2023",
      tech: ["Java", "Spring Boot", "React.js", "SQL", "REST APIs", "Git", "GitHub Actions"],
      bullets: [
        "Assisted in building full-stack web application features using Java, Spring Boot, React.js, and SQL.",
        "Contributed to backend development tasks including REST API endpoints, CRUD operations, and service-layer updates.",
        "Supported frontend development by creating React.js components and connecting them to backend API responses.",
        "Practiced writing SQL queries and helped debug application issues across the frontend, backend, and database layers.",
        "Participated in Agile development activities using Jira, Git branches, pull requests, and code review feedback.",
      ],
    },
    {
      company: "Leapfrog Technology",
      role: "Leapfrog Student Partner",
      period: "Jan 2022 – Dec 2022",
      tech: ["React.js", "Node.js", "JavaScript", "Code Reviews", "Web Development"],
      bullets: [
        "Strengthened practical software engineering skills through industry-oriented training focused on React.js, Node.js, collaborative workflows, and modern web application practices.",
        "Worked on structured development exercises involving frontend development, backend concepts, debugging, and code organization.",
        "Improved team collaboration and software development discipline through peer reviews, iterative development, and engineering best practices.",
      ],
    },
    {
      company: "Technobyte",
      role: "Flutter Intern",
      period: "Dec 2021 – Mar 2022",
      tech: ["Flutter", "MySQL", "Mobile Development", "Debugging"],
      bullets: [
        "Developed mobile application features using Flutter and MySQL while working with UI implementation, database interaction, and debugging workflows.",
        "Assisted with feature development, issue resolution, and testing within a collaborative internship environment.",
        "Strengthened understanding of mobile application architecture, responsive UI behavior, and software development lifecycle practices.",
      ],
    },
  ],

  projects: [
    {
      title: "Ledger-Core — Spring Boot Banking API",
      featured: true,
      tags: [
        "Java 21",
        "Spring Boot",
        "PostgreSQL",
        "Spring Data JPA",
        "Hibernate",
        "Flyway",
        "JUnit 5",
        "Mockito",
        "Docker",
        "Render",
        "Neon PostgreSQL",
      ],
      stats: [
        { value: "ACID", label: "transaction safety" },
        { value: "2-entry", label: "ledger accounting" },
        { value: "0", label: "duplicate charges on retry" },
      ],
      problem:
        "Money-movement systems cannot behave like basic CRUD apps. Transfers must stay correct when transactions fail, duplicate requests arrive, or concurrent updates hit the same account.",
      role: "Solo backend project — architecture, implementation, testing, database design, and deployment.",
      highlights: [
        "Built a production-style money-movement REST API with Java, Spring Boot, PostgreSQL, and Spring Data JPA/Hibernate.",
        "Implemented deposits, withdrawals, and transfers with ACID transactions and guaranteed rollback on failure.",
        "Used optimistic locking to prevent stale concurrent balance updates and verified the behavior with concurrency tests.",
        "Designed an append-only double-entry ledger with database-level immutability and an automated reconciliation engine.",
        "Added idempotent transfer APIs so retried requests return the original result instead of moving money twice.",
        "Managed schema changes with Flyway and tested failure cases with JUnit 5, AssertJ, and Mockito.",
      ],
      liveUrl: "https://ledger-core-frontend-gamma.vercel.app/",
      githubUrl: "https://github.com/anishbasnetAB/ledger-core",
    },
    {
      title: "Real-Time Distributed Trading Exchange Simulator",
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
        { value: "1,626,655", label: "orders/sec" },
        { value: "583ns", label: "p50 latency" },
        { value: "958ns", label: "p99 latency" },
      ],
      problem:
        "Trading systems need deterministic matching, fair execution, clean event flow, and low-latency processing. I built this project to understand how a matching engine, backend services, persistence layer, and real-time dashboard fit together.",
      role: "Solo project — architecture, C++ matching engine, backend services, frontend dashboard, benchmarking, CI, and deployment.",
      highlights: [
        "Built a C++20 matching engine with price-time priority FIFO order book, limit and market orders, partial fills, cancel support, and GoogleTest coverage.",
        "Benchmarked the engine at 1.6M+ orders/sec with 583ns p50 and 958ns p99 match latency across 1 million orders.",
        "Created backend services with Fastify, JWT authentication, refresh-token rotation, role-based authorization, and pre-trade risk checks.",
        "Used Redis Pub/Sub to fan out trade events to persistence and WebSocket services while keeping the matching hot path clean.",
        "Persisted trades and positions in PostgreSQL with atomic transaction writes.",
        "Built a React 18 trading dashboard with live order book, trade feed, positions, PnL, and WebSocket auto-reconnect.",
        "Containerized services with Docker Compose and added GitHub Actions CI for TypeScript checks plus C++ build and test.",
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
        "A full-stack job portal covering the core hiring flow: user accounts, job postings, applications, and API-driven frontend/backend interaction.",
      role: "Solo full-stack project.",
      highlights: [
        "Built a REST API backend with Node.js/Express and a MongoDB data layer.",
        "Created a React + TypeScript frontend for job search, postings, and application workflows.",
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
        "An enterprise-style bookstore and inventory system built to practise layered architecture, data access, and collaborative software development.",
      role: "Academic team project — Lambton College.",
      highlights: [
        "Built an n-tier application using ASP.NET Core, MVC/Razor Pages, and Entity Framework.",
        "Implemented CRUD workflows for bookstore and inventory management features.",
        "Worked collaboratively using Git-based development practices.",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/anishbasnetAB/Book-Store",
    },
  ],

  skills: [
    {
      category: "Primary Backend Stack",
      items: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "PostgreSQL",
        "Back-End Web Development",
        "Spring Data JPA",
        "Hibernate",
        "SQL",
      ],
    },
    {
      category: "Java Backend & Testing",
      items: [
        "JUnit 5",
        "Mockito",
        "AssertJ",
        "Flyway",
        "Maven",
        "Validation",
        "Error Handling",
        "API Development",
        "Transaction Management",
        "Optimistic Locking",
      ],
    },
    {
      category: "Frontend & Full-Stack",
      items: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "REST API Integration",
        "Forms",
        "State Handling",
      ],
    },
    {
      category: "Databases & Messaging",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Redis Pub/Sub",
        "Apache Kafka",
        "Database Design",
        "Transactions",
        "Reconciliation",
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Docker",
        "Docker Compose",
        "GitHub Actions",
        "CI/CD",
        "Render",
        "Vercel",
        "Railway",
        "Neon PostgreSQL",
        "Microsoft Azure",
        "Linux",
      ],
    },
    {
      category: "C++ Systems",
      items: [
        "C++20/17",
        "CMake",
        "GoogleTest",
        "Concurrency",
        "Memory Management",
        "STL",
        "RAII",
        "Smart Pointers",
        "Move Semantics",
        "Lock-Free Data Structures",
        "GDB",
        "Valgrind",
      ],
    },
    {
      category: "Engineering Practices",
      items: [
        "Git",
        "GitHub",
        "Postman",
        "Jira",
        "Agile/Scrum",
        "SDLC",
        "Object-Oriented Programming",
        "Data Structures and Algorithms",
        "Problem Solving",
        "Code Reviews",
      ],
    },
  ],

  education: [
    {
      institution: "Lambton College",
      degree: "Postgraduate Diploma, Computer Software Engineering",
      period: "Jan 2024 – Aug 2025",
    },
    {
      institution: "London Metropolitan University",
      degree: "Bachelor's Degree, Computer Science — First Class Honours",
      period: "Jan 2019 – Sep 2022",
    },
  ],

  certifications: [
    { name: "Getting Started with Microsoft Azure", issuer: "Birdify - LMSAFP", year: "Jan 2025" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "Feb 2023" },
  ],

  contact: {
    heading: "Let's build reliable backend systems.",
    note:
      "I'm looking for a Junior or Associate Software Developer role in Canada, with a strong focus on Java backend development, Spring Boot APIs, PostgreSQL, backend-heavy full-stack work, or fintech/product engineering. I am authorized to work full-time in Canada on a valid PGWP and do not require sponsorship.",
  },
};