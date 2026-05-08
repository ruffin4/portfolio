export const profileData = {
  name: "Ruffin Rafanomezantsoa",
  role: "Fullstack JavaScript & TypeScript Developer | DevOps Engineer",
  shortDesc: "I build scalable, high-performance and modern web applications with JavaScript, TypeScript, cloud infrastructure and DevOps practices.",
  location: "Madagascar",
  availability: "Available for freelance and remote opportunities",
  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Technologies", value: "25+" },
    { label: "Happy Clients", value: "30+" },
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "hello@ruffin.dev"
  }
};

export const skills = {
  frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Next.js", icon: "SiNextdotjs" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Framer Motion", icon: "SiFramer" },
    { name: "Redux", icon: "SiRedux" },
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "NestJS", icon: "SiNestjs" },
    { name: "Express", icon: "SiExpress" },
  ],
  database: [
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "Prisma", icon: "SiPrisma" },
    { name: "Redis", icon: "SiRedis" },
  ],
  devops: [
    { name: "Docker", icon: "SiDocker" },
    { name: "Ubuntu", icon: "SiUbuntu" },
    { name: "Nginx", icon: "SiNginx" },
    { name: "GitHub Actions", icon: "SiGithubactions" },
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "Figma", icon: "SiFigma" },
    { name: "Postman", icon: "SiPostman" },
  ]
};

export const projects = [
  {
    title: "Payroll Management System",
    description: "Enterprise-grade payroll system with automated tax calculations, reporting, and secure employee portals.",
    image: "/images/project-payroll.png",
    tech: ["NestJS", "PostgreSQL", "React", "Docker"],
    status: "Private",
    github: "#",
    live: "#"
  },
  {
    title: "SaaS Dashboard Platform",
    description: "Multi-tenant analytics dashboard with real-time data processing and customizable widget layouts.",
    image: "/images/project-saas.png",
    tech: ["Next.js", "Prisma", "Redis", "Tailwind"],
    status: "Live",
    github: "#",
    live: "#"
  },
  {
    title: "E-commerce Application",
    description: "High-conversion headless e-commerce store with secure payment processing and inventory management.",
    image: "/images/project-ecommerce.png",
    tech: ["React", "Node.js", "MySQL", "Stripe"],
    status: "Live",
    github: "#",
    live: "#"
  },
  {
    title: "Dockerized REST API",
    description: "Highly scalable microservice architecture API with load balancing and automated SSL provisioning.",
    image: "/images/project-api.png",
    tech: ["Express", "Docker Compose", "Nginx", "JWT"],
    status: "Open Source",
    github: "#",
    live: "#"
  },
  {
    title: "Finance Management App",
    description: "Personal wealth tracking application with interactive visualizations and automated transaction categorization.",
    image: "/images/project-finance.png",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Chart.js"],
    status: "Live",
    github: "#",
    live: "#"
  }
];

export const services = [
  {
    title: "Fullstack Web Development",
    description: "End-to-end application development using modern React and Node.js ecosystems.",
    icon: "SiReact"
  },
  {
    title: "API Development",
    description: "Robust, secure, and documented RESTful and GraphQL APIs built for scale.",
    icon: "SiNodedotjs"
  },
  {
    title: "SaaS Application Development",
    description: "Architecting multi-tenant platforms with subscription management and analytics.",
    icon: "SiNextdotjs"
  },
  {
    title: "Backend Architecture",
    description: "Designing scalable database schemas, caching layers, and microservices.",
    icon: "SiNestjs"
  },
  {
    title: "DevOps & Deployment",
    description: "Automated provisioning and management of cloud infrastructure.",
    icon: "SiUbuntu"
  },
  {
    title: "Docker Infrastructure",
    description: "Containerizing applications for consistent deployment across environments.",
    icon: "SiDocker"
  },
  {
    title: "CI/CD Setup",
    description: "Implementing automated testing and deployment pipelines to accelerate delivery.",
    icon: "SiGithubactions"
  },
  {
    title: "Performance Optimization",
    description: "Auditing and improving application speed, Core Web Vitals, and server response times.",
    icon: "SiSpeedtest" // Will map to a generic icon if not found
  }
];

export const blogPosts = [
  {
    title: "Next.js App Router Architecture: Building for Scale",
    category: "Architecture",
    readTime: "8 min read",
    date: "Oct 12, 2023"
  },
  {
    title: "NestJS Best Practices: Dependency Injection & Modules",
    category: "Backend",
    readTime: "6 min read",
    date: "Sep 28, 2023"
  },
  {
    title: "Zero-Downtime Docker Deployments with Nginx",
    category: "DevOps",
    readTime: "10 min read",
    date: "Sep 15, 2023"
  },
  {
    title: "PostgreSQL Query Optimization Techniques",
    category: "Database",
    readTime: "7 min read",
    date: "Aug 30, 2023"
  },
  {
    title: "Building Resilient CI/CD Workflows with GitHub Actions",
    category: "DevOps",
    readTime: "5 min read",
    date: "Aug 14, 2023"
  },
  {
    title: "Clean Architecture in TypeScript: A Practical Guide",
    category: "Engineering",
    readTime: "12 min read",
    date: "Jul 22, 2023"
  },
  {
    title: "Securing Node.js APIs: Beyond JWTs",
    category: "Security",
    readTime: "6 min read",
    date: "Jul 05, 2023"
  }
];

export const testimonials = [
  {
    name: "Alex Thompson",
    company: "TechNova Solutions",
    text: "Ruffin completely transformed our infrastructure. Our deployment time went from hours to minutes, and the application performance improved by 40%. A true professional."
  },
  {
    name: "Sarah Chen",
    company: "FinEdge Startups",
    text: "Working with Ruffin on our SaaS platform was incredible. His knowledge of both frontend React patterns and backend Node architecture meant we only needed one engineer to build the MVP."
  },
  {
    name: "Michael Roberts",
    company: "Global E-commerce",
    text: "The Docker setup and CI/CD pipelines Ruffin built for us have been running flawlessly for months without a single issue. His code is clean, documented, and highly scalable."
  }
];