export type TermLine = { type: 'cmd' | 'out'; text: string };

export const portfolio = {
  identity: {
    name: "Anish Basnet",
    monogram: "AB",
    title: "Software Engineer · Backend & Full-Stack · C++ Systems",
    location: "Mississauga, Ontario, Canada",
    email: "theanishbasnet@gmail.com",
    linkedin: "https://linkedin.com/in/theanishbasnet",
    github: "https://github.com/anishbasnetAB",
    openTo: "Entry-level software engineering — backend, full-stack, FinTech & trading systems, C++ roles in Canada",
    workAuth: "Valid PGWP — no sponsorship required",
    cvUrl: "/Anish_Basnet_Resume.pdf",
  },

  hero: {
    availability: "Open to entry-level software engineering roles",
    locationLine: "Mississauga, ON · Canada",
    roleLine: "Backend · Full-Stack · C++ Systems",
    tagline:
      "I build backend systems and full-stack products that are measured, not guessed — from a C++20 matching engine benchmarked at 1.6M orders/sec to REST APIs, real-time dashboards, and the CI/CD pipelines that ship them.",
    terminal: [
      { type: 'cmd', text: 'whoami' },
      { type: 'out', text: 'anish — software engineer · backend / full-stack / systems' },
      { type: 'cmd', text: './bench matching-engine --orders 1e6' },
      { type: 'out', text: 'throughput   1,626,655 orders/sec' },
      { type: 'out', text: 'latency      p50 583ns · p99 958ns' },
      { type: 'cmd', text: './status' },
      { type: 'out', text: '● open to entry-level roles · PGWP — no sponsorship needed' },
    ] as TermLine[],
    stats: [
      { value: "1.6M", unit: "orders/sec", label: "C++20 matching engine" },
      { value: "583ns", unit: "p50 match latency", label: "benchmarked · 1M orders" },
      { value: "11×", unit: "thread pool scaling", label: "across 14 threads" },
    ],
  },

  about: {
    bio: "I'm an early-career software engineer who thinks in systems. My strongest work lives in the backend — APIs, data layers, event streaming, and high-throughput C++ where a nanosecond matters — but I ship the whole stack, from lock-free data structures to React dashboards. I learn fast, measure everything, and care about code the next engineer can actually maintain. Based in Mississauga, ON and actively interviewing for entry-level software engineering roles, especially in FinTech, trading technology, and backend systems.",
    focusAreas: [
      {
        title: "Backend & APIs",
        body: "REST and WebSocket services in Node.js, Java, and C# — auth, caching, event streaming, and the data layer behind them.",
      },
      {
        title: "Systems & Low-Latency",
        body: "C++20, lock-free data structures, and concurrency — performance work that's benchmarked and verified, never assumed.",
      },
      {
        title: "Full-Stack Delivery",
        body: "React + TypeScript frontends wired to real backends, containerised with Docker and shipped through CI/CD.",
      },
    ],
    terminalLines: [
      { type: 'cmd', text: './profile --summary' },
      { type: 'out', text: '' },
      { type: 'out', text: 'languages    C++20/17 · TypeScript · Java · Python · C#' },
      { type: 'out', text: 'backend      Node.js · Fastify · REST · Redis · PostgreSQL' },
      { type: 'out', text: 'frontend     React 18 · Tailwind CSS' },
      { type: 'out', text: 'education    PGD Software Eng · BSc First Class Honours' },
      { type: 'out', text: 'status       ● open to work' },
      { type: 'out', text: '' },
    ] as TermLine[],
  },

  experience: [
    {
      company: "NexGen",
      role: "Full Stack Developer Intern",
      period: "Jul 2023 – Dec 2023",
      tech: ["Java", "JavaScript", "TypeScript", "REST APIs", "CI/CD", "Git"],
      bullets: [
        "Built and shipped backend REST API services and frontend features across Java, JavaScript, and TypeScript.",
        "Applied OOP, SOLID principles, CI/CD, and Git workflows within an Agile team.",
        "Resolved production defects through root-cause analysis; led code reviews, unit and integration testing.",
      ],
    },
    {
      company: "Leapfrog Technology",
      role: "Student Partner",
      period: "Jan 2022 – Dec 2022",
      tech: ["React.js", "Node.js", "Code Reviews"],
      bullets: [
        "Industry-oriented training in React.js, Node.js, and collaborative development workflows.",
        "Frontend development, backend concepts, debugging, and structured peer reviews.",
      ],
    },
    {
      company: "Technobyte",
      role: "Flutter Intern",
      period: "Dec 2021 – Mar 2022",
      tech: ["Flutter", "MySQL"],
      bullets: [
        "Shipped mobile features integrating Flutter frontends with MySQL-backed backend services.",
        "Contributed across design, testing, debugging, and issue resolution.",
      ],
    },
  ],

  projects: [
    {
      title: "Real-Time Distributed Trading Exchange Simulator",
      featured: true,
      tags: ["C++20", "Node.js", "Fastify", "React 18", "Redis", "PostgreSQL", "Docker", "GitHub Actions"],
      stats: [
        { value: "1,626,655", label: "orders/sec" },
        { value: "583ns", label: "p50 latency" },
        { value: "958ns", label: "p99 latency" },
      ],
      problem:
        "Order matching at exchange scale has to be deterministic, fair, and extremely fast — every microsecond of latency and every dropped event matters. I wanted to see how close a self-built engine could get to production-grade numbers.",
      role: "Solo project — architecture, implementation, benchmarking, and deployment.",
      highlights: [
        "C++20 matching engine benchmarked at 1.6M+ orders/sec with sub-microsecond match latency",
        "Microservice architecture with Redis Pub/Sub event streaming between services",
        "JWT auth with refresh-token rotation and atomic PostgreSQL transactions",
        "Real-time market data over WebSocket feeding a React 18 dashboard",
        "Dockerised services with CI on GitHub Actions",
      ],
      liveUrl: "https://trading-exchange-simulator.vercel.app",
      githubUrl: "https://github.com/anishbasnetAB/Trading-Exchange-Simulator",
    },
    {
      title: "Job Connect — Full Stack Job Portal",
      featured: false,
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
      stats: [],
      problem:
        "A complete hiring flow — postings, applications, and accounts — built end-to-end with the same pipeline rigour as a production service.",
      role: "Solo full-stack project.",
      highlights: [
        "RESTful API backend with Node.js/Express and a MongoDB data layer",
        "React + TypeScript frontend",
        "CI/CD pipeline, Docker containerisation, and automated testing",
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
        "An enterprise-style storefront and inventory system, built to practise the layered architecture patterns used in real .NET teams.",
      role: "Academic team project — Lambton College.",
      highlights: [
        "n-Tier architecture with MVC and Razor Pages",
        "Entity Framework data access with full CRUD operations",
        "Built collaboratively with shared Git workflows",
      ],
      liveUrl: "",
      githubUrl: "https://github.com/anishbasnetAB/Book-Store",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["C++20/17", "TypeScript", "JavaScript", "Java", "Python", "C#"],
    },
    {
      category: "Backend & APIs",
      items: [
        "Node.js", "Fastify", "Express.js", "ASP.NET Core 6", "REST APIs",
        "WebSocket", "Microservices", "Redis Pub/Sub", "JWT Auth",
      ],
    },
    {
      category: "Frontend",
      items: ["React 18", "Tailwind CSS", "Bootstrap", "HTML5", "CSS3"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      category: "DevOps & Cloud",
      items: ["Docker", "Docker Compose", "GitHub Actions", "CI/CD", "AWS", "Linux"],
    },
    {
      category: "Systems & Concepts",
      items: [
        "Lock-Free Data Structures", "std::atomic", "Memory Ordering", "Concurrency",
        "RAII", "Move Semantics", "Smart Pointers", "STL", "OOP", "SOLID",
        "Caching", "Load Balancing", "Scalable Architecture",
      ],
    },
    {
      category: "Tools & Testing",
      items: [
        "GoogleTest", "CMake", "GDB", "Valgrind", "Git", "GitHub", "Postman",
        "Jira", "Agile/Scrum", "Claude Code", "Cursor", "OpenAI Codex",
      ],
    },
  ],

  education: [
    {
      institution: "Lambton College",
      degree: "Postgraduate Diploma, Computer Software Engineering",
      period: "2024 – 2025",
    },
    {
      institution: "London Metropolitan University",
      degree: "BSc Computing, First Class Honours",
      period: "2019 – 2022",
    },
  ],

  certifications: [
    { name: "Microsoft Azure Fundamentals", issuer: "Microsoft", year: "Jan 2025" },
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "Feb 2023" },
  ],

  contact: {
    heading: "Let's build something.",
    note:
      "I'm looking for an entry-level software engineering role — backend, full-stack, or systems — in Canada. If your team is building something technically interesting, especially in the low-latency or distributed-systems space, I'd love to talk.",
  },
};
