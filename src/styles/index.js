export const SKILLS = [
  {
    icon: "⚛️",
    name: "React JS",
    level: 92,
    desc: "Hooks, lazy loading, context, advanced patterns",
  },
  {
    icon: "🔀",
    name: "Redux Toolkit",
    level: 88,
    desc: "RTK Query, slices, thunk, middleware",
  },
  {
    icon: "🎨",
    name: "Tailwind CSS",
    level: 90,
    desc: "Utility-first, custom design systems, responsive",
  },
  {
    icon: "🟢",
    name: "Node.js",
    level: 85,
    desc: "REST APIs, Express, middleware, microservices",
  },
  {
    icon: "🍃",
    name: "MongoDB",
    level: 84,
    desc: "Schema design, aggregation, indexing, Mongoose",
  },
  {
    icon: "🐘",
    name: "PostgreSQL",
    level: 82,
    desc: "Complex queries, joins, triggers, Sequelize/Prisma",
  },
  {
    icon: "🔷",
    name: "TypeScript",
    level: 80,
    desc: "Strict types, generics, decorators, full-stack safety",
  },
  {
    icon: "🔐",
    name: "JWT / Auth",
    level: 86,
    desc: "Authentication, authorization, refresh tokens, OAuth",
  },
  {
    icon: "🐳",
    name: "Docker / AWS",
    level: 72,
    desc: "Containers, CI/CD, EC2, S3, Lambda deployment",
  },
  {
    icon: "🔌",
    name: "WebSockets",
    level: 78,
    desc: "Real-time comms, Socket.io, live cricket feeds",
  },
  {
    icon: "📐",
    name: "REST / GraphQL",
    level: 83,
    desc: "API design, resolvers, Apollo, schema-first dev",
  },
  {
    icon: "🏏",
    name: "Cricket Logic",
    level: 95,
    desc: "Scoring engines, DLS, NRR, tournament systems",
  },
];

export const PROJECTS = [
  {
    id: 1,
    tag: "MERN Stack",
    year: "2024",
    title: "CricScore Live",
    subtitle: "Real-Time Cricket Scoring Platform",
    desc: "A full-featured, real-time cricket scoring platform supporting 500+ concurrent users. Built with the MERN stack — ball-by-ball WebSocket updates, Redux-powered state machine, DLS calculations, player statistics, and tournament bracket management. Handles T20, ODI, and Test formats.",
    tech: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Tailwind CSS",
      "JWT",
    ],
    highlights: [
      "500+ concurrent users",
      "Ball-by-ball updates",
      "DLS Calculator",
      "Multi-format",
    ],
    links: {
      live: "https://yoursite.com",
      github: "https://github.com/velubharathi",
    },
  },
  {
    id: 2,
    tag: "PERN Stack",
    year: "2024",
    title: "FantasyXI Manager",
    subtitle: "Fantasy Cricket League Platform",
    desc: "A fantasy cricket management system built with the PERN stack. Features auto-draft, real-time points engine with captain/vice-captain multipliers, live leaderboards, player credit system and deep analytics. PostgreSQL powers complex relational queries.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "JWT",
    ],
    highlights: [
      "Auto-draft system",
      "Real-time points",
      "Live leaderboards",
      "Player analytics",
    ],
    links: {
      live: "https://yoursite.com",
      github: "https://github.com/velubharathi",
    },
  },
];

export const CRICKET_FEATURES = [
  {
    num: "01",
    icon: "🏏",
    title: "Live Scoring Engine",
    desc: "Ball-by-ball processing with delivery types (wide, no-ball, bye, leg-bye), over management and instant scorecard computation via Redux slices and WebSocket broadcast.",
  },
  {
    num: "02",
    icon: "📊",
    title: "DLS Calculator",
    desc: "Duckworth-Lewis-Stern method for rain-interrupted matches. Calculates revised targets using resource percentage tables with real-time UI.",
  },
  {
    num: "03",
    icon: "⚡",
    title: "Tournament Engine",
    desc: "Automated points table, NRR computation, knockout brackets and fixture scheduling for IPL, T20, ODI and Test formats.",
  },
  {
    num: "04",
    icon: "🧠",
    title: "Analytics Dashboard",
    desc: "Player stats, wagon wheels, pitch maps, economy rates and batting averages rendered with Recharts and custom D3 visualizations.",
  },
  {
    num: "05",
    icon: "📱",
    title: "Fantasy Integration",
    desc: "Fantasy points engine with captain multipliers, credit changes and auto-substitution logic synced via Redux Thunk middleware.",
  },
  {
    num: "06",
    icon: "🔔",
    title: "Push Notifications",
    desc: "Event-driven alerts for wickets, boundaries and match results using Firebase Cloud Messaging and service workers for PWA.",
  },
];

export const EXPERIENCE = [
  {
    date: "2023 — Present",
    role: "Full Stack Developer",
    company: "SportsTech Innovations · Chennai",
    desc: "Leading development of a real-time cricket scoring platform serving 2M+ users. Architected Redux state management, Node.js microservices and Socket.io for live ball-by-ball updates across MERN and PERN stacks.",
  },
  {
    date: "2022 — 2023",
    role: "React Developer",
    company: "DigitalEdge Labs · Bangalore",
    desc: "Built reusable component libraries and responsive dashboards with React, Redux Toolkit and Tailwind CSS. Improved app performance by 60% through code splitting, memoization and lazy loading strategies.",
  },
];

export const EDUCATION = [
  {
    year: "2019 — 2023",
    degree: "B.E. Computer Science & Engineering",
    institution: "Anna University · Chennai",
    grade: "CGPA: 8.2 / 10",
  },
  {
    year: "2017 — 2019",
    degree: "Higher Secondary (HSC) — Computer Science",
    institution: "Government Higher Secondary School · Tamil Nadu",
    grade: "Percentage: 87%",
  },
];

export const CERTIFICATIONS = [
  {
    icon: "🏅",
    name: "Meta React Developer",
    issuer: "Meta / Coursera",
    year: "2024",
  },
  {
    icon: "🏅",
    name: "Node.js Application Developer",
    issuer: "OpenJS Foundation",
    year: "2023",
  },
  {
    icon: "🏅",
    name: "MongoDB Associate Developer",
    issuer: "MongoDB University",
    year: "2023",
  },
  {
    icon: "🏅",
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
  },
];

export const ACHIEVEMENTS = [
  {
    icon: "🏆",
    title: "Best Project Award",
    desc: "First place among 120 teams at State-level Tech Hackathon 2024 for CricScore Live.",
  },
  {
    icon: "🥇",
    title: "Open Source Contributor",
    desc: "Contributed scoring logic to a popular cricket API library with 1.2k+ GitHub stars.",
  },
  {
    icon: "⭐",
    title: "Top Performer",
    desc: "Recognized as Top Performer of the Quarter at SportsTech Innovations.",
  },
  {
    icon: "🎓",
    title: "Academic Excellence",
    desc: "Graduated top 5% of class with distinction in Web Technologies and DBMS.",
  },
];

export const TICKER_ITEMS = [
  "React JS",
  "Redux Toolkit",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "Express.js",
  "Socket.io",
  "REST APIs",
  "JWT Auth",
  "Docker",
  "AWS",
  "Prisma",
  "Full Stack Developer",
  "Cricket Scoring Engine",
  "MERN Stack",
  "PERN Stack",
];

export const NAV_LINKS = [
  "About",
  "Skills",
  "Cricket",
  "Projects",
  "Experience",
  "Education",
  "Certifications",
  "Contact",
];

export const SOCIAL_LINKS = [
  {
    label: "📧 velubharathi@email.com",
    href: "mailto:velubharathi@email.com",
    solid: true,
  },
  { label: "💼 LinkedIn", href: "#", solid: true },
  { label: "🐙 GitHub", href: "#", solid: false },
  { label: "📄 Resume", href: "#", solid: false },
];
