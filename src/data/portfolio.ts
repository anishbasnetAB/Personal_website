export const portfolio = {
  identity: {
    name: "Anish Basnet",
    monogram: "AB",
    title: "C++ Systems Engineer · Backend Developer · Full Stack",
    location: "Mississauga, Ontario, Canada",
    email: "theanishbasnet@gmail.com",
    linkedin: "https://linkedin.com/in/theanishbasnet",
    github: "https://github.com/anishbasnetAB",
    openTo: "FinTech, trading systems, backend engineering, C++ systems roles in Canada",
    workAuth: "Valid PGWP — no sponsorship required",
    cvUrl: "/anish-portfolio/Anish_Basnet_Resume.pdf",
  },

  hero: {
    locationLine: "Based in Mississauga, ON · Open to work",
    tagline:
      "I build high-performance systems and production-grade backend infrastructure — from sub-microsecond C++20 matching engines to full-stack distributed platforms. Focused on systems where correctness and throughput both matter.",
    stats: [
      { value: "1.6M", unit: "orders/sec", label: "C++20 matching engine" },
      { value: "583ns", unit: "p50 match latency", label: "benchmarked · 1M orders" },
      { value: "11×", unit: "thread pool scaling", label: "across 14 threads" },
    ],
  },

  about: {
    bio: "I'm a systems engineer and backend developer with a strong foundation in C++20, distributed systems, and full-stack development. I specialise in high-throughput, low-latency infrastructure — the kind of work where a nanosecond matters. From lock-free data structures to React dashboards, I care about the full stack but live closest to the metal. Currently based in Mississauga, ON and actively looking for opportunities in FinTech, trading technology, and backend systems engineering.",
    terminalLines: [
      { prompt: "$", command: "./profile --summary", output: null },
      { prompt: null, command: null, output: "" },
      { prompt: null, command: null, output: "Systems programming:  C++20/17" },
      { prompt: null, command: null, output: "Backend:              Node.js, Fastify, REST, Redis" },
      { prompt: null, command: null, output: "Full stack:           React 18, TypeScript" },
      { prompt: null, command: null, output: "Status:               Open to work" },
      { prompt: null, command: null, output: "" },
    ],
  },

  experience: [
    {
      company: "NexGen",
      role: "Full Stack Developer Intern",
      period: "Jul 2023 – Dec 2023",
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
      bullets: [
        "Industry-oriented training in React.js, Node.js, and collaborative development workflows.",
        "Frontend development, backend concepts, debugging, and structured peer reviews.",
      ],
    },
    {
      company: "Technobyte",
      role: "Flutter Intern",
      period: "Dec 2021 – Mar 2022",
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
      description:
        "Production-grade distributed trading platform with a C++20 matching engine, microservice architecture, Redis Pub/Sub event streaming, JWT auth with refresh token rotation, atomic PostgreSQL transactions, WebSocket real-time market data, and a React 18 dashboard.",
      liveUrl: "https://trading-exchange-simulator.vercel.app",
      githubUrl: "https://github.com/anishbasnetAB/Trading-Exchange-Simulator",
    },
    {
      title: "Job Connect — Full Stack Job Portal",
      featured: false,
      tags: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
      stats: [],
      description:
        "Full-stack job portal with a RESTful API backend, MongoDB data layer, and React/TypeScript frontend. Includes CI/CD pipeline, Docker containerisation, and automated testing.",
      liveUrl: "",
      githubUrl: "https://github.com/anishbasnetAB/Job-Connect-MERN-Stack-",
    },
    {
      title: "Book Store Management System",
      featured: false,
      tags: ["ASP.NET Core 6", "C#", "Entity Framework", "Razor Pages", "Bootstrap"],
      stats: [],
      description:
        "n-Tier enterprise web application with MVC architecture, Entity Framework, and full CRUD operations. Built as an academic team project at Lambton College.",
      liveUrl: "",
      githubUrl: "https://github.com/anishbasnetAB/Book-Store",
    },
  ],

  skills: [
    {
      category: "C++ / Systems",
      items: [
        "C++20/17", "STL", "RAII", "Smart Pointers", "Move Semantics",
        "Lock-Free Data Structures", "std::atomic", "Concurrency",
        "Memory Ordering", "GoogleTest", "CMake", "GDB", "Valgrind", "Linux",
      ],
    },
    {
      category: "Backend & APIs",
      items: [
        "Java", "Python", "Node.js", "Fastify", "Express.js", "ASP.NET Core 6",
        "C#", "REST APIs", "WebSocket", "Microservices", "Redis Pub/Sub",
        "JWT Auth", "OOP", "SOLID",
      ],
    },
    {
      category: "System Design",
      items: [
        "Redis", "AWS", "Docker", "Docker Compose", "GitHub Actions",
        "CI/CD", "PostgreSQL", "Caching", "Load Balancing", "Scalable Architecture",
      ],
    },
    {
      category: "Full Stack",
      items: [
        "React 18", "TypeScript", "JavaScript", "Tailwind CSS", "Bootstrap",
        "HTML5", "CSS3", "MongoDB", "MySQL",
      ],
    },
    {
      category: "Tools & AI",
      items: [
        "Claude Code", "OpenAI Codex", "Cursor", "Git", "GitHub",
        "VS Code", "Postman", "Jira", "Agile/Scrum",
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
      "I'm actively looking for roles in FinTech, trading systems, and backend engineering across Canada. If you're building something technically interesting — especially in the low-latency or distributed systems space — I'd love to talk.",
  },
};
