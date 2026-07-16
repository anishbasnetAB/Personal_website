export type TermLine = { type: 'cmd' | 'out'; text: string };

export const portfolio = {
  identity: {
    name: "Anish Basnet",
    monogram: "AB",
    title: "Junior Software Developer focused on Java, Spring Boot, REST APIs, and full stack work",
    location: "Mississauga, Ontario, Canada",
    email: "theanishbasnet@gmail.com",
    linkedin: "https://linkedin.com/in/theanishbasnet",
    github: "https://github.com/anishbasnetAB",
    openTo:
      "Open to Junior or Associate Software Developer roles in Canada, especially Java backend, Spring Boot API, full stack, fintech, and selected C++ systems roles",
    workAuth: "Valid PGWP with no sponsorship needed",
    cvUrl: "/Anish_Basnet_Resume.pdf",
  },

  hero: {
    availability: "Open to Junior or Associate Software Developer roles",
    locationLine: "Mississauga, ON, Canada",
    roleLine: "Java Backend, Spring Boot, REST APIs, and full stack development",
    tagline:
      "I build backend systems with Java, Spring Boot, and PostgreSQL. I care about reliable APIs, safe transactions, clean data, and service code that is easy to understand and maintain. My strongest project is Ledger Core, a money movement API with ACID transactions, idempotency, optimistic locking, double entry bookkeeping, and automated reconciliation.",
    terminal: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'anish, java backend developer with spring boot and full stack experience' },
      { type: 'cmd', text: './ledgerCore verify' },
      { type: 'out', text: 'transactions   safe money movement with rollback support' },
      { type: 'out', text: 'concurrency    optimistic locking with no stale balance updates' },
      { type: 'out', text: 'ledger         double entry records with reconciliation support' },
      { type: 'cmd', text: './status' },
      { type: 'out', text: 'open to junior and associate roles, PGWP, no sponsorship needed' },
    ] as TermLine[],
    stats: [
      { value: "ACID", unit: "transactions", label: "safe money movement with rollback support" },
      { value: "2 entry", unit: "ledger", label: "debit and credit accounting" },
      { value: "1.6M", unit: "orders per second", label: "C++20 matching engine" },
    ],
  },

  about: {
    bio:
      "I am a Junior Software Developer based in Mississauga, Ontario. I focus on building reliable REST APIs and backend systems with Java, Spring Boot, PostgreSQL, Spring Data JPA, Hibernate, Docker, and automated testing. I enjoy the backend side of development most, including API design, service logic, database transactions, validation, error handling, schema migrations, testing, and deployment. I also have full stack experience with React.js and REST API integration, along with a C++ systems background that helps me think carefully about concurrency, performance, data integrity, and system design. I am AWS Certified Cloud Practitioner and I am growing my cloud skills to build and deploy backend systems on AWS.",
    focusAreas: [
      {
        title: "Java Backend and Spring Boot APIs",
        body:
          "REST APIs, service layer business logic, validation, error handling, PostgreSQL persistence, Spring Data JPA, Hibernate, Flyway migrations, Docker deployment, and JUnit and Mockito testing.",
      },
      {
        title: "Data Integrity and Financial Systems",
        body:
          "Backend design with ACID transactions, optimistic locking, idempotent APIs, double entry ledger concepts, append only audit trails, and reconciliation workflows.",
      },
      {
        title: "Full Stack and Systems Experience",
        body:
          "React.js frontends connected to backend APIs, plus C++20 systems work with concurrency, performance benchmarking, Redis event streaming, WebSocket market data, and PostgreSQL persistence.",
      },
      {
        title: "Cloud with AWS",
        body:
          "AWS Certified Cloud Practitioner with working knowledge of core AWS services, cloud fundamentals, and deploying backend systems to the cloud.",
      },
    ],
    terminalLines: [
      { type: 'cmd', text: './profile summary' },
      { type: 'out', text: '' },
      { type: 'out', text: 'primary      Java, Spring Boot, REST APIs, PostgreSQL' },
      { type: 'out', text: 'backend      Spring Data JPA, Hibernate, Flyway, Docker, JUnit, Mockito' },
      { type: 'out', text: 'full stack   React.js, TypeScript, JavaScript, API integration, forms, state handling' },
      { type: 'out', text: 'messaging    Kafka, Redis Pub/Sub, event driven architecture' },
      { type: 'out', text: 'cloud        AWS Certified Cloud Practitioner' },
      { type: 'out', text: 'systems      C++20 and C++17, concurrency, Redis Pub/Sub, WebSocket, Linux' },
      { type: 'out', text: 'education    PGD Software Engineering, BSc Computer Science' },
      { type: 'out', text: 'status       open to work in Canada, no sponsorship required' },
      { type: 'out', text: '' },
    ] as TermLine[],
  },

  experience: [
    {
      company: "NexGen",
      role: "Junior Software Developer",
      period: "Jan 2023 to Dec 2023",
      subPeriod: "Started as an intern from Jan to Apr 2023, then continued as a Junior Developer from May to Dec 2023",
      tech: ["Java", "Spring Boot", "Spring Data JPA", "REST APIs", "SQL", "React.js", "Git", "Jira", "Agile"],
      bullets: [
        "Built and shipped more than 10 REST API endpoints and service features using Java, Spring Boot, Spring Data JPA, Hibernate, and SQL as part of a 6 person Agile team.",
        "Connected backend APIs with React.js frontend components across 3 product modules. I also fixed more than 15 QA and pre production defects, which helped reduce the bug backlog by about 40%.",
        "Kept unit test coverage above 80% with JUnit 5 and Mockito, wrote documented code, and took part in weekly code reviews using Git, Jira, and pull requests.",
        "Worked on REST controllers, service logic, and database backed CRUD features while following Git branching, pull request, and Agile sprint practices.",
      ],
    },
    {
      company: "Leapfrog Technology",
      role: "Student Partner",
      period: "Jan 2022 to Dec 2022",
      tech: ["React.js", "Node.js", "JavaScript", "Code Reviews", "Web Development"],
      bullets: [
        "Completed structured industry training in React.js, Node.js, and JavaScript, with regular practice in peer code reviews and team based development exercises.",
      ],
    },
    {
      company: "Technobyte",
      role: "Flutter Intern",
      period: "Dec 2021 to Mar 2022",
      tech: ["Flutter", "MySQL", "Mobile Development", "Debugging"],
      bullets: [
        "Built mobile UI features in Flutter and connected them with MySQL backed REST services. I also resolved QA defects across 3 feature releases.",
      ],
    },
  ],

  projects: [
    {
      title: "Ledger Core, Spring Boot Banking API",
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
        { value: "2 entry", label: "ledger accounting" },
        { value: "0", label: "duplicate charges during retry testing" },
      ],
      problem:
        "Money movement systems need more care than a basic CRUD app. Transfers must stay correct when transactions fail, duplicate requests arrive, or two updates hit the same account at the same time.",
      role: "Solo backend project covering architecture, implementation, testing, database design, and deployment.",
      highlights: [
        "Designed and built a banking style REST API with Java, Spring Boot, PostgreSQL, and Spring Data JPA and Hibernate.",
        "Implemented deposits, withdrawals, and transfers with ACID transactions and rollback on failure.",
        "Used optimistic locking to prevent stale balance updates, then stress tested it with 10 concurrent threads and reached 0 overdrafts.",
        "Designed an append only double entry ledger with database level immutability and an automated reconciliation engine.",
        "Added idempotent transfer APIs, with 0 duplicate charges in a 1,000 retry test.",
        "Managed 8 Flyway schema migrations and wrote more than 50 tests with JUnit 5, AssertJ, and Mockito for failure cases, concurrency, and idempotency.",
      ],
      liveUrl: "https://ledger-core-frontend-gamma.vercel.app/",
      githubUrl: "https://github.com/anishbasnetAB/ledger-core",
    },
    {
      title: "Real Time Distributed Trading Exchange Simulator",
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
        { value: "1,626,655", label: "orders per second" },
        { value: "583 ns", label: "p50 latency" },
        { value: "958 ns", label: "p99 latency" },
      ],
      problem:
        "Trading systems need predictable matching, fair execution, clear event flow, and low latency processing. I built this project to understand how a matching engine, backend services, persistence, and a live dashboard work together.",
      role: "Solo project covering architecture, C++ matching engine work, backend services, frontend dashboard, benchmarking, CI, and deployment.",
      highlights: [
        "Built a C++20 matching engine with price time priority, FIFO order book behavior, limit and market orders, partial fills, cancel support, and GoogleTest coverage.",
        "Benchmarked the engine at 1,626,655 orders per second, with p50 match latency of 583 ns and p99 match latency of 958 ns across 1 million orders.",
        "Developed backend services with Fastify, JWT authentication, refresh token rotation, role based authorization, and pre trade risk checks.",
        "Used Redis Pub/Sub to send trade events to persistence and WebSocket services.",
        "Stored trades and positions in PostgreSQL with atomic transaction writes.",
        "Built a React 18 and TypeScript dashboard with a live order book, trade feed, positions, PnL, and WebSocket auto reconnect.",
        "Ran 4 services with Docker Compose and automated builds through GitHub Actions CI/CD.",
      ],
      liveUrl: "https://trading-exchange-simulator.vercel.app",
      githubUrl: "https://github.com/anishbasnetAB/Trading-Exchange-Simulator",
    },
    {
      title: "Job Connect, Full Stack Job Portal",
      featured: false,
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "REST APIs"],
      stats: [],
      problem:
        "A full stack job portal that covers the main hiring flow, including user accounts, job postings, applications, and API driven frontend and backend interaction.",
      role: "Solo full stack project.",
      highlights: [
        "Built a REST API backend with Node.js, Express, and MongoDB.",
        "Created a React and TypeScript frontend for job search, job postings, and application workflows.",
        "Practiced full stack data flow, API integration, form handling, and reusable frontend components.",
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
        "A bookstore and inventory system built to practise layered architecture, data access, and collaborative software development.",
      role: "Academic team project at Lambton College.",
      highlights: [
        "Built an n tier application using ASP.NET Core 6, MVC, Razor Pages, and Entity Framework.",
        "Implemented CRUD workflows for bookstore and inventory management features.",
        "Worked with the team using Git based development practices.",
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
        "Flyway",
        "Maven",
        "REST APIs",
        "Microservices",
        "Node.js",
      ],
    },
    {
      category: "Frontend",
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
      category: "Data and Messaging",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Kafka",
        "SQL",
        "ACID Transactions",
        "Relational Design",
        "NoSQL",
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
      category: "Testing and DevOps",
      items: [
        "JUnit 5",
        "Mockito",
        "AssertJ",
        "TDD",
        "Docker",
        "Docker Compose",
        "GitHub Actions CI/CD",
        "Linux",
      ],
    },
    {
      category: "Languages",
      items: [
        "Java 21",
        "C++20",
        "Python",
        "TypeScript",
        "JavaScript",
        "SQL",
      ],
    },
    {
      category: "Methodologies",
      items: [
        "OOP",
        "SOLID",
        "Code Reviews",
        "Agile and Scrum",
        "Jira",
        "Git",
        "Postman",
      ],
    },
    {
      category: "AI Assisted Development",
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
      period: "Jan 2024 to Aug 2025",
    },
    {
      institution: "London Metropolitan University",
      degree: "Bachelor's Degree, Computer Science, First Class Honours",
      period: "Jan 2019 to Sep 2022",
    },
  ],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2025" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "Feb 2023" },
  ],

  contact: {
    heading: "Let's build backend systems that people can trust.",
    note:
      "I am looking for a Junior or Associate Software Developer role in Canada, with a strong focus on Java backend development, Spring Boot APIs, PostgreSQL, full stack work with a backend focus, or fintech and product engineering. I am authorized to work full time in Canada on a valid PGWP and do not require sponsorship.",
  },
};