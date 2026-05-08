export const profileData = {
  name: "Ruffin Rafanomezantsoa",
  role: "Développeur Web Fullstack Junior | DevOps",
  shortDesc: "Développeur web passionné, je conçois et réalise des applications web modernes et performantes en accompagnant mes clients de l'idée initiale jusqu'à la mise en ligne.",
  location: "Madagascar — Remote Available",
  availability: "Disponible pour des projets freelance",
  stats: [
    { label: "Années d'expérience", value: "2+" },
    { label: "Projets livrés", value: "15+" },
    { label: "Technologies maîtrisées", value: "20+" },
    { label: "Clients satisfaits", value: "10+" },
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    email: "hello@ruffin.dev",
    phone: "+261 34 00 000 00",
    whatsapp: "https://wa.me/261340000000",
    facebook: "https://facebook.com",
  }
};

export const skillCategories = [
  {
    title: "Backend & Frameworks",
    items: [
      { name: "Node.js", icon: "SiNodedotjs", color: "#68a063" },
      { name: "NestJS", icon: "SiNestjs", color: "#e0234e" },
      { name: "Express", icon: "SiExpress", color: "#ffffff" },
      { name: "Next.js", icon: "SiNextdotjs", color: "#ffffff" },
    ]
  },
  {
    title: "Frontend & Intégration",
    items: [
      { name: "React.js", icon: "SiReact", color: "#61dafb" },
      { name: "TypeScript", icon: "SiTypescript", color: "#3178c6" },
      { name: "JavaScript", icon: "SiJavascript", color: "#f7df1e" },
      { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#06b6d4" },
    ]
  },
  {
    title: "Intégration & Outils",
    items: [
      { name: "Docker", icon: "SiDocker", color: "#2496ed" },
      { name: "Nginx", icon: "SiNginx", color: "#009639" },
      { name: "GitHub Actions", icon: "SiGithubactions", color: "#2088ff" },
      { name: "Postman", icon: "SiPostman", color: "#ff6c37" },
    ]
  },
  {
    title: "Bases de données & Infra",
    items: [
      { name: "PostgreSQL", icon: "SiPostgresql", color: "#336791" },
      { name: "MySQL", icon: "SiMysql", color: "#4479a1" },
      { name: "Redis", icon: "SiRedis", color: "#dc382d" },
      { name: "Git / GitHub", icon: "SiGit", color: "#f05032" },
    ]
  }
];

export const skillTags = [
  "NODE.JS", "NESTJS", "EXPRESS", "REACT", "NEXT.JS", "TYPESCRIPT",
  "JAVASCRIPT", "TAILWIND", "POSTGRESQL", "MYSQL", "REDIS", "DOCKER",
  "NGINX", "GIT", "GITHUB", "REST API", "JWT", "PRISMA",
  "GITHUB ACTIONS", "LINUX", "HTML", "CSS", "FIGMA"
];

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
    description: "Système de gestion de paie entreprise avec calculs de taxes automatisés, rapports détaillés et portails employés sécurisés. Architecture multi-tenant complète.",
    image: "/images/project-payroll.png",
    tech: ["NestJS", "PostgreSQL", "React", "Docker"],
    status: "PROJET PHARE",
    statusColor: "green",
    category: "WEB APP",
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "SaaS Dashboard Platform",
    description: "Dashboard analytique multi-tenant avec traitement de données en temps réel et widgets personnalisables.",
    image: "/images/project-saas.png",
    tech: ["Next.js", "Prisma", "Redis", "Tailwind"],
    status: "TERMINÉ",
    statusColor: "green",
    category: "WEB APP",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "E-commerce Application",
    description: "Boutique e-commerce headless haute conversion avec paiement sécurisé et gestion des stocks.",
    image: "/images/project-ecommerce.png",
    tech: ["React", "Node.js", "MySQL", "Stripe"],
    status: "TERMINÉ",
    statusColor: "green",
    category: "E-COMMERCE",
    github: "#",
    live: "#",
    featured: false,
  },
  {
    title: "Finance Management App",
    description: "Application de gestion de finances personnelles avec visualisations interactives et catégorisation automatique.",
    image: "/images/project-finance.png",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Chart.js"],
    status: "TERMINÉ",
    statusColor: "green",
    category: "WEB APP",
    github: "#",
    live: "#",
    featured: false,
  }
];

export const services = [
  {
    title: "Sites Web Professionnels",
    description: "Création de sites vitrines élégants, boutiques e-commerce performantes et blogs optimisés pour le référencement.",
    icon: "Globe",
  },
  {
    title: "Applications Web sur Mesure",
    description: "Développement d'applications métier personnalisées, tableaux de bord interactifs et outils de gestion adaptés à vos besoins.",
    icon: "Layers",
  },
  {
    title: "Architectures Backend Robustes",
    description: "Conception de systèmes backend scalables avec Node.js ou NestJS. API REST sécurisées et performantes.",
    icon: "Database",
  },
  {
    title: "DevOps & Infrastructure",
    description: "Mise en place de pipelines CI/CD, containerisation Docker, configuration Nginx et déploiement sur VPS Linux.",
    icon: "Wrench",
  },
  {
    title: "Automatisation & Intégrations",
    description: "Automatisation de vos processus métier. Intégration d'API tierces et création de workflows intelligents.",
    icon: "Zap",
  },
  {
    title: "Maintenance & Support",
    description: "Suivi technique régulier, corrections de bugs, mises à jour de sécurité et optimisation continue de vos plateformes.",
    icon: "Shield",
  }
];

export const blogPosts = [
  {
    title: "Architecture Next.js App Router : Construire pour l'échelle",
    category: "Architecture",
    readTime: "8 min",
    date: "12 Oct 2023"
  },
  {
    title: "NestJS Best Practices : Injection de dépendances & Modules",
    category: "Backend",
    readTime: "6 min",
    date: "28 Sep 2023"
  },
  {
    title: "Déploiements Docker Zéro-Downtime avec Nginx",
    category: "DevOps",
    readTime: "10 min",
    date: "15 Sep 2023"
  },
  {
    title: "Optimisation des requêtes PostgreSQL",
    category: "Database",
    readTime: "7 min",
    date: "30 Août 2023"
  },
  {
    title: "Workflows CI/CD résilients avec GitHub Actions",
    category: "DevOps",
    readTime: "5 min",
    date: "14 Août 2023"
  },
  {
    title: "Clean Architecture en TypeScript : Guide pratique",
    category: "Engineering",
    readTime: "12 min",
    date: "22 Jul 2023"
  },
  {
    title: "Sécuriser les APIs Node.js : Au-delà des JWTs",
    category: "Sécurité",
    readTime: "6 min",
    date: "05 Jul 2023"
  }
];

export const testimonials = [
  {
    name: "Alex Thompson",
    company: "TechNova Solutions",
    text: "Ruffin a complètement transformé notre infrastructure. Notre temps de déploiement est passé de plusieurs heures à quelques minutes, et les performances de l'application ont augmenté de 40%. Un vrai professionnel."
  },
  {
    name: "Sarah Chen",
    company: "FinEdge Startups",
    text: "Travailler avec Ruffin sur notre plateforme SaaS a été incroyable. Sa maîtrise du frontend React et du backend Node signifiait qu'un seul développeur suffisait pour construire le MVP."
  },
  {
    name: "Michael Roberts",
    company: "Global E-commerce",
    text: "Les pipelines Docker et CI/CD que Ruffin a mis en place tournent sans aucun problème depuis des mois. Son code est propre, documenté et hautement scalable."
  }
];
