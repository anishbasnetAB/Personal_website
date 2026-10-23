export type TermLine = { type: 'cmd' | 'out'; text: string };

export const portfolio = {
  identity: {
    name: "Anish Basnet",
    monogram: "AB",
    title: "Backend Software Engineer | Java · Spring Boot · PostgreSQL · Kafka | REST APIs & Distributed Systems",
    location: "Greater Toronto Area, Canada",
    email: "theanishbasnet@gmail.com",
    linkedin: "https://linkedin.com/in/theanishbasnet",
    github: "https://github.com/anishbasnetAB",
    blog: "https://dev.to/anishbasnetab",
    openTo:
      "Open to backend roles in fintech, payments, and banking infrastructure across the Greater Toronto Area, Canada, or the US (hybrid or remote)",
    workAuth: "Authorized to work full-time in Canada; no current employer sponsorship required",
    cvUrl: "/Anish_Basnet_Resume.pdf",
  },

  hero: {
    availability: "Open to backend software engineering opportunities · Recruiters welcome",
    locationLine: "Greater Toronto Area, ON, Canada",
    roleLine: "Java Backend • Spring Boot • PostgreSQL • Kafka • Fintech Systems",
    tagline:
      "Backend Software Engineer and Founder building reliable full-stack products and backend systems. I work with Java, Spring Boot, PostgreSQL, React Native, Expo, Next.js, and TypeScript. I am currently building Burnhive, a fitness and social platform that brings workout planning, progress tracking, gym discovery, and community engagement into one application.",
    terminal: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'anish, software developer focused on financial and distributed systems' },
      { type: 'cmd', text: './burnhive status' },
      { type: 'out', text: 'product       workout planning, progress, gyms, community' },
      { type: 'out', text: 'backend       modular Spring Boot services and REST APIs' },
      { type: 'out', text: 'platform      React Native, Expo, Next.js, TypeScript' },
      { type: 'out', text: 'delivery      founder-led product development from design to testing' },
      { type: 'cmd', text: './status' },
      { type: 'out', text: 'open to backend software engineering roles in canada' },
    ] as TermLine[],
    stats: [
      { value: "1", unit: "working MVP", label: "Burnhive fitness and social platform" },
      { value: "10+", unit: "REST APIs", label: "shipped at NexGen" },
      { value: "80%+", unit: "unit coverage", label: "maintained with JUnit 5 and Mockito" },
    ],
  },

  about: {
    bio:
      "Backend Software Engineer and Founder with professional experience building REST APIs, backend services, and database-driven applications using Java, Spring Boot, and PostgreSQL. I am currently building Burnhive, a fitness and social platform, while developing full-stack products with React Native, Expo, Next.js, and TypeScript. I focus on modular architecture, secure user experiences, maintainable systems, and reliable delivery from system design through testing and iteration.",
    focusAreas: [
      {
        title: "Java Backend Engineering",
        body:
          "Java 21, Spring Boot, REST APIs, service-layer business logic, Spring Data JPA, Hibernate, PostgreSQL, MySQL, Flyway migrations, validation, error handling, and automated testing.",
      },
      {
        title: "Product and Data Foundations",
        body:
          "PostgreSQL-backed application design, authentication, user data, workout management, social interactions, REST APIs, validation, and maintainable service-layer business logic.",
      },
      {
        title: "Full-Stack Product Development",
        body:
          "React Native and Expo mobile development, Next.js web applications, TypeScript, responsive interfaces, API integration, testing, and iterative product improvements.",
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
      { type: 'out', text: 'product      Burnhive fitness, workouts, gyms, community' },
      { type: 'out', text: 'fullstack    React Native, Expo, Next.js, TypeScript' },
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
      company: "Burnhive",
      role: "Founder & Full-Stack Developer",
      period: "Jan 2026 – Present",
      subPeriod: "Burnhive · Permanent Full-time · Greater Toronto Area, Canada · Remote",
      tech: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "React Native",
        "Expo",
        "Next.js",
        "TypeScript",
        "REST APIs",
        "Distributed Systems",
      ],
      bullets: [
        "Building Burnhive, a fitness and social platform that brings workout planning, progress tracking, gym discovery, and community engagement into one application.",
        "Developed a working MVP using Java, Spring Boot, PostgreSQL, React Native, Expo, Next.js, and TypeScript.",
        "Architecting modular backend services and REST APIs supporting authentication, workout management, social interactions, and user data.",
        "Leading end-to-end product development across system design, implementation, testing, security, usability, and iterative improvements.",
      ],
    },
    {
      company: "NexGen",
      role: "Software Developer",
      period: "Sep 2022 – Aug 2024",
      subPeriod: "NexGen · Permanent Full-time · Digital Pasal payments and inventory platform · Nepal",
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
      role: "Leapfrog Student Partner",
      period: "Jan 2022 – Sep 2022",
      subPeriod: "Leapfrog Technology, Inc. · Permanent Part-time · On-site",
      tech: ["React.js", "Node.js", "JavaScript", "Code Reviews", "Web Development"],
      bullets: [
        "Completed industry-oriented training in React.js, Node.js, and JavaScript through structured exercises, peer reviews, hackathons, and collaborative development activities.",
      ],
    },
    {
      company: "Technobyte",
      role: "Flutter Intern",
      period: "Jul 2021 – Dec 2021",
      subPeriod: "Technobyte · Internship",
      tech: ["Flutter", "Dart", "MySQL", "REST APIs", "Mobile Development", "Debugging"],
      bullets: [
        "Shipped Flutter user interface features in Dart across three mobile releases, by integrating MySQL-backed REST services and building reusable components.",
        "Resolved 10+ QA-reported defects and post-release fixes, by consuming and testing REST API endpoints, handling JSON responses and error states across multiple screens, and coordinating with a cross-functional team through structured QA handoff.",
      ],
    },
  ],

  projects: [
    {
      title: "Burnhive: Fitness and Social Platform",
      featured: true,
      tags: [
        "Java",
        "Spring Boot",
        "PostgreSQL",
        "React Native",
        "Expo",
        "Next.js",
        "TypeScript",
        "REST APIs",
        "Distributed Systems",
      ],
      stats: [
        { value: "1", label: "working MVP" },
        { value: "2", label: "cross-platform surfaces: mobile and web" },
        { value: "4", label: "core product areas: auth, workouts, social, user data" },
      ],
      problem:
        "Fitness communities need more than isolated workout tracking. Burnhive brings planning, progress, gym discovery, and social engagement together in one usable product.",
      role: "Founder and full-stack developer leading product direction, system architecture, implementation, testing, and iteration.",
      highlights: [
        "Developed a working MVP spanning React Native and Expo mobile applications and a Next.js web application.",
        "Built Java and Spring Boot backend services with PostgreSQL persistence and modular REST APIs.",
        "Implemented product foundations for authentication, workout management, social interactions, and user data.",
        "Led end-to-end delivery from system design and implementation through testing, security, usability, and iterative improvements.",
      ],
      liveUrl: "",
      githubUrl: "",
    },
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
    heading: "Let's build reliable products and backend systems.",
    note:
      "I am looking for backend software engineering opportunities in Canada, especially Java, Spring Boot, fintech, payments, financial platforms, and other transaction-heavy systems. I am authorized to work full-time in Canada and do not currently require employer sponsorship.",
  },
};
