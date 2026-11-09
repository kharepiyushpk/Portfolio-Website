export const profile = {
  name: "Piyush Khare",
  shortName: "Piyush",
  role: "Full Stack Developer",
  headline: "I build products end to end — from database schema to the last pixel.",
  intro:
    "Full stack developer working with Next.js, TypeScript, Node.js and Java. I ship marketplaces, internal tools that replace manual spreadsheet work, and learning apps that students actually enjoy.",
  location: "India",
  email: "kharepiyushpk@gmail.com",
  phone: "+91 95164 67095",
  avatar: "/avatar.png",
  available: true,
  siteUrl: "https://portfolio-website-tan-gamma-33.vercel.app",
  socials: {
    github: "https://github.com/kharepiyushpk",
    linkedin: "https://www.linkedin.com/in/piyush-khare-715179233/",
    instagram: "https://www.instagram.com/piyush_khare_23/",
  },
  roles: ["Full Stack Developer", "Next.js Engineer", "Automation Builder", "Java Developer"],
  about: [
    "I started with HTML, CSS and plain JavaScript, moved into Java and Spring Boot, and today spend most of my time in the React / Next.js and Node.js ecosystem with TypeScript everywhere.",
    "What I enjoy most is taking a messy, manual process — a team working out of twenty Google Sheets, a QA engineer clicking through a site by hand, a teacher timing quiz questions in a 7-hour video — and turning it into a tool that does the work in seconds, with previews, backups and logs so people can trust it.",
    "I care about the boring parts too: migrations that run on every deploy, rollback before every write, tests for the tricky logic, and pages that stay fast on real data.",
  ],
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  points: string[];
  stack: string[];
  projects?: string[];
};

export const experience: Experience[] = [
  {
    company: "Arivihan",
    role: "Full Stack Developer · Batch Operations",
    period: "2026 — Present",
    summary:
      "Building internal tools for an ed-tech platform that runs NEET and State Board batches — replacing Apps Script menus and manual sheet work with fast, safe web dashboards.",
    points: [
      "Built the Batch Ops Dashboard (Next.js 15 + Google Sheets API) that runs live-class pushes, NodePath arrangement, DPP uploads and thumbnail generation for every subject.",
      "Added rollback-before-every-write, tamper-evident audit logs and per-user Stage/Prod access so ops can work on production data with confidence.",
      "Cut page loads from ~12 s to ~3.6 s and Sheet Health from 95 s to 17 s with caching, request de-duplication and parallel reads.",
      "Built the SME Timing Tool that auto-detects quiz timings in multi-hour lecture videos (14/14 questions within 2 s on a 7.7-hour class).",
      "Built Gems of Arivihan, a PYQ-first learning app with interactive step-by-step visual explanations.",
    ],
    stack: ["Next.js", "TypeScript", "Google Sheets API", "Supabase", "Puppeteer", "Vercel", "Vitest"],
    projects: ["batch-ops-dashboard", "sme-timing-tool", "gems-of-arivihan"],
  },
  {
    company: "Kaasthify",
    role: "Full Stack Developer (Solo build)",
    period: "2026 — Present",
    summary:
      "Designed and built a multi-vendor furniture marketplace with customer storefront, seller studio and admin console — plus a full Selenium automation suite for it.",
    points: [
      "Modelled the business in 34 Prisma models: orders, payouts, seller invoices, coupons, returns and disputes, custom design requests, chat and audit logs.",
      "Integrated Razorpay payments with webhooks, MFA with TOTP, OTP flows, S3 uploads, background jobs on BullMQ + Redis and an AI design assistant on the Claude API.",
      "Deployed on Vercel + Render behind Cloudflare, with migrations on every deploy and cron-driven jobs for expiring payments.",
      "Wrote 45+ Selenium / TestNG test classes covering storefront, customer, seller, admin, mobile layouts and a full order lifecycle E2E test.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis", "Razorpay", "Three.js", "Selenium"],
    projects: ["kaasthify", "kaasthify-automation"],
  },
  {
    company: "ADRS Technosoft",
    role: "Web Developer",
    period: "2025",
    summary:
      "Built client websites and web apps in a small agency team — e-commerce, attendance management and business sites.",
    points: [
      "Worked on Aarambh Jewellers, a MERN e-commerce store with admin dashboard, Cloudinary media, PDF invoices and QR codes.",
      "Built an attendance system with Excel export on React, Express and MongoDB, deployed on Vercel.",
      "Built responsive, animated marketing sites (ADRS company site, Sea World Water Solution) with React, Tailwind and Framer Motion.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion"],
    projects: ["aarambh-jewellers", "attendance-system", "adrs-website", "sea-world-water-solution"],
  },
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Three.js / R3F", "Vue 3", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Next.js API Routes", "Server Actions", "Java", "Spring Boot", "REST APIs", "JWT / NextAuth", "BullMQ"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "Prisma", "MongoDB", "Mongoose", "MySQL", "Supabase", "Redis", "Google Sheets API"],
  },
  {
    title: "Cloud & DevOps",
    items: ["Vercel", "Render", "Cloudflare", "AWS S3", "Docker", "GitHub Actions", "Sentry"],
  },
  {
    title: "Testing & Automation",
    items: ["Selenium 4", "TestNG", "Vitest", "Puppeteer", "Apps Script"],
  },
  {
    title: "Integrations",
    items: ["Razorpay", "Claude API", "Cloudinary", "Twilio", "Resend", "hls.js", "EmailJS"],
  },
];
