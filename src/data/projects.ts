export type Category = "Full Stack" | "Internal Tool" | "Frontend" | "Backend" | "Testing" | "Java" | "Learning";

export type CoverKind =
  | "marketplace"
  | "dashboard"
  | "video"
  | "learning"
  | "tests"
  | "store"
  | "table"
  | "site"
  | "api"
  | "desktop"
  | "chat"
  | "pipeline"
  | "booking"
  | "basic";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string[];
  year: string;
  context: string;
  role: string;
  categories: Category[];
  status: "Live" | "In production" | "Internal" | "Completed" | "Archived";
  featured?: boolean;
  accent: string;
  cover: CoverKind;
  stack: { group: string; items: string[] }[];
  highlights: string[];
  challenges?: { title: string; body: string }[];
  metrics?: { value: string; label: string }[];
  links: { live?: string; github?: string };
};

export const projects: Project[] = [
  {
    slug: "kaasthify",
    title: "Kaasthify",
    tagline: "Multi-vendor furniture marketplace with custom design, 3D previews and AI assistance",
    summary:
      "A complete marketplace where furniture makers sell directly to customers — storefront, seller studio and admin console in one platform, with payments, payouts, invoices, returns and custom-made orders.",
    description: [
      "Kaasthify connects customers with independent furniture makers. Customers browse, buy, track and return products; sellers manage catalogues, fulfil orders and get paid; admins approve products, run promotions and resolve disputes.",
      "Beyond a normal store, customers can request a custom design: upload a photo or idea, chat with the seller, get a quote and pay — with an AI design assistant built on the Claude API, and a pipeline that turns images into 3D models (segmentation → 2D-to-3D reconstruction) shown in an in-browser 3D viewer.",
      "The platform is split into a Next.js frontend and a Next.js API backend in one npm workspace, with PostgreSQL via Prisma, Redis + BullMQ for background jobs and S3-compatible storage for media.",
    ],
    year: "2026",
    context: "Personal product",
    role: "Solo full stack developer — architecture, backend, frontend, DevOps",
    categories: ["Full Stack"],
    status: "Live",
    featured: true,
    accent: "#f59e0b",
    cover: "marketplace",
    stack: [
      { group: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "Zustand", "React Hook Form", "Zod", "React Three Fiber", "Leaflet"] },
      { group: "Backend", items: ["Next.js API", "Prisma", "PostgreSQL", "Redis", "BullMQ", "JWT", "TOTP (otplib)"] },
      { group: "Integrations", items: ["Razorpay", "Claude API", "AWS S3 / R2", "Cloudinary", "Twilio", "Resend", "Nodemailer", "Sentry"] },
      { group: "Infra", items: ["Vercel", "Render", "Cloudflare", "Docker Compose", "Vitest"] },
    ],
    highlights: [
      "Three apps in one: customer storefront, seller dashboard and admin console (~60 pages)",
      "34-model Prisma schema covering orders, payments, refunds, payouts, seller invoices, coupons, reviews, disputes and audit logs",
      "Razorpay checkout with signature verification and webhooks; scheduled jobs expire unpaid orders",
      "Custom design requests with buyer–seller chat, quotes and an AI design assistant",
      "3D product viewer (React Three Fiber) and map-based address picker (Leaflet)",
      "Bulk product upload from Excel, GST-ready seller invoices and tax reports",
      "MFA for admins, OTP verification, role-based staff access and full audit trail",
      "Mobile-first UI — checked for zero horizontal scroll on 28 pages",
    ],
    challenges: [
      {
        title: "Safe deploys across hosts",
        body: "The app moved between Render, Railway and back to Vercel + Render behind Cloudflare. I made the build host-neutral and made Prisma migrations run on every backend deploy after a missed migration caused a production 500.",
      },
      {
        title: "Trustworthy client IPs behind a proxy",
        body: "Rate limiting relies on the client IP. The backend only trusts the cf-connecting-ip header when the API is actually proxied by Cloudflare, so it can't be spoofed.",
      },
    ],
    metrics: [
      { value: "34", label: "Data models" },
      { value: "~60", label: "Pages" },
      { value: "3", label: "User roles" },
    ],
    links: { live: "https://kaasthify.in" },
  },
  {
    slug: "batch-ops-dashboard",
    title: "Batch Ops Dashboard",
    tagline: "The control room for running NEET and State Board batches at Arivihan",
    summary:
      "A web dashboard that replaced the team's Apps Script menus. It reads a master Google Sheet to find every other sheet and safely pushes live classes, notes, DPPs and learning paths to the platform.",
    description: [
      "Arivihan's batch operations ran on dozens of Google Sheets and a set of Apps Script menus. Every live class meant updating the live sheet, the NodePath (learning path) sheet and the internal content platform by hand.",
      "The Batch Ops Dashboard keeps Google Sheets as the database but moves all the logic into a Next.js app: one click pushes a lecture with its notes, nodes and DPP, rearranges a subject's schedule, generates thumbnails, or uploads a learning path — always with a preview first.",
      "Because it writes to live production data, safety was built in from day one: every save backs up the affected tabs, every action is logged in a hash-chained audit log, and each user has their own token and Stage/Prod permissions.",
    ],
    year: "2026",
    context: "Arivihan",
    role: "Sole developer — design, build, rollout and support",
    categories: ["Internal Tool", "Full Stack"],
    status: "In production",
    featured: true,
    accent: "#6366f1",
    cover: "dashboard",
    stack: [
      { group: "App", items: ["Next.js 15 (App Router)", "TypeScript", "Server Actions", "Tailwind CSS", "NextAuth"] },
      { group: "Data", items: ["Google Sheets API", "Service account auth", "unstable_cache / revalidateTag"] },
      { group: "Media", items: ["Puppeteer + @sparticuz/chromium", "Vercel Blob", "hls.js"] },
      { group: "Quality", items: ["Vitest (100+ tests)", "Vercel"] },
    ],
    highlights: [
      "Live Class push: lecture timing, 3 video qualities check, notes PDF, nodes and DPP in a single run, Stage and Prod",
      "Live Arrange: drag-and-drop schedule — rows move, date slots stay, NodePath re-arranges in the same save",
      "Add / delete / rename classes with smart detection of renamed lecture codes",
      "Rollback: every save copies affected tabs to hidden backups; any save can be undone (and the undo too)",
      "Tamper-evident, hash-chained audit logs and a client-error reporter",
      "Thumbnail generator with teacher cut-outs and per-subject styles, rendered with headless Chrome",
      "DPP checks before upload (IDs, sheets, NodePath rows, platform nodes) — any problem blocks the push",
      "Per-user accounts, per-feature access, per-user API tokens, Stage auto-off after 4 hours, freeze switch and rate limits",
      "Separate workspaces for NEET and every State Board, never merged",
    ],
    challenges: [
      {
        title: "Slow pages on real data",
        body: "Each Sheets call takes 0.4–0.8 s. With stale-while-revalidate caching, parallel reads and memoised tabs, the NodePath page went from ~12 s to 3.6 s and Sheet Health from 95 s to 17 s (instant on repeat).",
      },
      {
        title: "Read quota (429) crashes",
        body: "Heavy runs hit Google's per-minute read quota. I de-duplicated checks per file, batched long range requests into chunks, and added retry with a stale-store fallback.",
      },
      {
        title: "A crash nobody could reproduce",
        body: "Users saw 'Application error' only on Vercel. I added a browser error reporter that writes to the audit log; the next occurrence pointed straight to a state bug in the arrange page.",
      },
    ],
    metrics: [
      { value: "12s → 3.6s", label: "NodePath page" },
      { value: "100+", label: "Unit tests" },
      { value: "98", label: "Shipped commits" },
    ],
    links: {},
  },
  {
    slug: "sme-timing-tool",
    title: "SME Timing Tool",
    tagline: "Finds interactive-question timings inside multi-hour lecture videos automatically",
    summary:
      "A login-based dashboard for subject-matter experts. Paste a lecture video link and it detects every in-video question and its seek timings from the audio, so the team doesn't scrub through 8-hour videos by hand.",
    description: [
      "Interactive lecture videos pause at questions and jump to different clips for right and wrong answers. Each question needs seven timings in milliseconds, which experts used to find by hand.",
      "The tool streams the HLS video in the browser, scans the full audio for silences, and maps them to the sheet's rules (pause after the question, gaps between clips, first pause after the answer). It shows a frame for every detected timing so the expert can confirm it.",
      "Experts can fine-tune timings with keyboard shortcuts while the video plays, run a 'student simulation' that plays every right and wrong path, and copy all timings straight into the Google Sheet.",
    ],
    year: "2026",
    context: "Arivihan",
    role: "Sole developer",
    categories: ["Internal Tool", "Full Stack"],
    status: "In production",
    featured: true,
    accent: "#ec4899",
    cover: "video",
    stack: [
      { group: "App", items: ["Next.js", "TypeScript", "Middleware auth"] },
      { group: "Backend", items: ["Supabase Auth", "PostgreSQL", "Row Level Security"] },
      { group: "Media", items: ["hls.js", "Web Audio API", "IndexedDB", "Media proxy for CORS"] },
    ],
    highlights: [
      "Auto-detect: scans a 1-hour video in ~1 minute and an 8-hour video in ~8–10 minutes",
      "Matched the manual sheet on a 7.7-hour class: 14/14 questions, every column within 2 s, median ≤ 0.3 s",
      "Keyboard-driven editing (Q, C, W, E, R, arrows) while the video plays",
      "Student simulation tests every wrong-answer path with Y/N prompts",
      "Projects auto-save to the server; scan results cached in the browser",
      "Admin and SME roles, user management and admin-controlled tab access",
      "Added a PPT preparation module alongside the timing tool",
    ],
    metrics: [
      { value: "14/14", label: "Questions found" },
      { value: "≤0.3s", label: "Median error" },
      { value: "~1 min", label: "Per video hour" },
    ],
    links: {},
  },
  {
    slug: "gems-of-arivihan",
    title: "Gems of Arivihan",
    tagline: "PYQ-first learning app that teaches concepts through interactive visuals",
    summary:
      "A mobile-first Next.js app for CBSE, UP and MP Board Class 10 & 12 students that turns previous-year questions into engaging, step-by-step visual explanations and game-like formats.",
    description: [
      "Students practise previous-year questions (PYQs), but plain solutions are boring. Gems of Arivihan presents each PYQ with an interactive visual scene and a step-by-step player that builds the answer piece by piece.",
      "The first chapter (CBSE 12 Physics — Electrostatics) has 27 PYQs, each with its own visual. A PYQ Test Library organises tests by class and stream.",
      "A bonus section has 9 fun formats: Rapid Fire, story-based questions, 'spot the mistake', topper's answer copy, Assertion–Reason court, board favourites chart, 60-second reels, comic strips and mind maps.",
    ],
    year: "2026",
    context: "Arivihan",
    role: "Sole developer",
    categories: ["Frontend", "Full Stack"],
    status: "Completed",
    featured: true,
    accent: "#10b981",
    cover: "learning",
    stack: [
      { group: "App", items: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS v4"] },
      { group: "UI", items: ["SVG scenes", "Step-by-step visual player", "Mobile-first design"] },
      { group: "Hosting", items: ["Vercel"] },
    ],
    highlights: [
      "Data-driven chapters: add a chapter's PYQs as data and the pages are generated",
      "Interactive visual scenes chosen per question type",
      "PYQ Test Library by class and stream",
      "10 game-like formats including a timed Rapid Fire with streaks and a 2022 vs 2027 pattern comparison",
    ],
    metrics: [
      { value: "27", label: "PYQs with visuals" },
      { value: "10", label: "Learning formats" },
    ],
    links: {},
  },
  {
    slug: "kaasthify-automation",
    title: "Kaasthify Test Automation",
    tagline: "End-to-end UI test suite for the storefront, seller studio and admin console",
    summary:
      "A standalone Selenium 4 + TestNG framework with page objects for every screen and API helpers that set up test data, so each test checks exactly one feature.",
    description: [
      "The suite talks to any running Kaasthify site over HTTP, so it can run against local or live environments without the source code.",
      "API helpers sign in fast and create the data a test needs, then clean up after the suite. Tests are grouped into suites — smoke, customer, vendor, admin, mobile and end-to-end — runnable with a single mvn test.",
      "The flagship test follows an order through its whole life: a customer orders, the seller accepts, packs, ships and delivers, and the customer sees it delivered.",
    ],
    year: "2026",
    context: "Personal product",
    role: "Sole developer",
    categories: ["Testing", "Java"],
    status: "Completed",
    featured: true,
    accent: "#22c55e",
    cover: "tests",
    stack: [
      { group: "Core", items: ["Java 17", "Selenium 4", "TestNG", "Maven"] },
      { group: "Support", items: ["Jackson", "Page Object Model", "Selenium Manager"] },
    ],
    highlights: [
      "45+ test classes across storefront, customer, seller and admin",
      "Mobile tests at 390 px: no sideways scrolling on 28 pages",
      "Full order-lifecycle E2E test across three roles",
      "Role-based sessions, test listeners and per-suite XML configs",
      "Secrets kept out of git with a local, git-ignored config file",
    ],
    metrics: [
      { value: "45+", label: "Test classes" },
      { value: "6", label: "Suites" },
    ],
    links: {},
  },
  {
    slug: "aarambh-jewellers",
    title: "Aarambh Jewellers",
    tagline: "MERN e-commerce store for a jewellery brand, with admin dashboard",
    summary:
      "A full jewellery store with product catalogue, cart and orders, plus an admin panel for products, categories, orders and sales analytics.",
    description: [
      "Built at ADRS Technosoft for a jewellery brand. Customers browse collections and place orders; the admin manages the catalogue with drag-and-drop ordering, sees sales charts and generates PDF invoices.",
      "Product images are stored on Cloudinary; authentication uses JWT with HTTP-only cookies; order emails go out through Nodemailer.",
    ],
    year: "2025",
    context: "ADRS Technosoft",
    role: "Full stack developer (team project)",
    categories: ["Full Stack"],
    status: "Completed",
    accent: "#eab308",
    cover: "store",
    stack: [
      { group: "Frontend", items: ["React", "Vite", "Framer Motion", "Recharts", "jsPDF", "QR codes", "Firebase"] },
      { group: "Backend", items: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "bcrypt"] },
      { group: "Services", items: ["Cloudinary", "Multer", "Nodemailer"] },
    ],
    highlights: [
      "Admin dashboard with sales charts (Recharts)",
      "PDF invoices with jsPDF + AutoTable and QR codes",
      "Drag-and-drop ordering of products and categories",
      "Image uploads straight to Cloudinary",
    ],
    links: {},
  },
  {
    slug: "attendance-system",
    title: "Attendance Management System",
    tagline: "Mark, track and export attendance to Excel",
    summary:
      "A MERN app for recording daily attendance and exporting reports as Excel files, with separate frontend and backend deployments.",
    description: [
      "Staff mark attendance in a simple React interface; records are stored in MongoDB through an Express API.",
      "Reports can be exported to formatted Excel sheets in the browser with ExcelJS and FileSaver.",
    ],
    year: "2025",
    context: "ADRS Technosoft",
    role: "Full stack developer",
    categories: ["Full Stack"],
    status: "Live",
    accent: "#0ea5e9",
    cover: "table",
    stack: [
      { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Axios"] },
      { group: "Backend", items: ["Node.js", "Express", "MongoDB", "Mongoose"] },
      { group: "Tools", items: ["ExcelJS", "FileSaver", "Vercel"] },
    ],
    highlights: [
      "Daily attendance entry and history",
      "One-click Excel export of reports",
      "Separate deployable frontend and backend",
    ],
    links: {
      live: "https://attendance-frontend-eight-weld.vercel.app",
      github: "https://github.com/kharepiyushpk/attendance-frontend",
    },
  },
  {
    slug: "adrs-website",
    title: "ADRS Technosoft Website",
    tagline: "Animated company website for a software agency",
    summary:
      "A modern marketing site with particle backgrounds, scroll animations, animated counters and a working contact form.",
    description: [
      "Company site for ADRS Technosoft showing services, portfolio and contact details.",
      "Uses tsParticles for the hero, AOS and Framer Motion for scroll effects, and EmailJS so the contact form sends mail without a backend.",
    ],
    year: "2025",
    context: "ADRS Technosoft",
    role: "Frontend developer",
    categories: ["Frontend"],
    status: "Live",
    accent: "#8b5cf6",
    cover: "site",
    stack: [
      { group: "Frontend", items: ["React", "Vite", "Tailwind CSS", "Material UI", "Headless UI", "Radix UI"] },
      { group: "Motion", items: ["Framer Motion", "AOS", "tsParticles", "React CountUp"] },
      { group: "Services", items: ["EmailJS", "Vercel"] },
    ],
    highlights: ["Particle hero background", "Scroll-triggered animations and counters", "Serverless contact form with EmailJS"],
    links: { live: "https://adrs-website.vercel.app", github: "https://github.com/kharepiyushpk/adrs_website" },
  },
  {
    slug: "sea-world-water-solution",
    title: "Sea World Water Solution",
    tagline: "Business website for a water purification company",
    summary: "A responsive, animated product and services site with smooth scrolling and enquiry notifications.",
    description: [
      "Built at ADRS Technosoft for a water purification business to showcase products and services and capture enquiries.",
    ],
    year: "2025",
    context: "ADRS Technosoft",
    role: "Frontend developer (team project)",
    categories: ["Frontend"],
    status: "Completed",
    accent: "#06b6d4",
    cover: "site",
    stack: [{ group: "Frontend", items: ["React", "Vite", "Tailwind CSS v4", "Framer Motion", "React Scroll", "React Toastify"] }],
    highlights: ["Smooth in-page scrolling navigation", "Animated sections", "Toast feedback on enquiries"],
    links: {},
  },
  {
    slug: "job-application-api",
    title: "Job Application API",
    tagline: "Spring Boot REST API for companies, jobs and reviews",
    summary:
      "A layered Spring Boot service with Company, Job and Review resources, backed by PostgreSQL in Docker and containerised with its own Dockerfile.",
    description: [
      "Each domain (company, job, review) has its own entity, repository, service interface, implementation and controller — a clean layered architecture.",
      "PostgreSQL runs through Docker Compose for local development; H2 is available for quick tests; Actuator exposes health endpoints.",
    ],
    year: "2024",
    context: "Personal",
    role: "Developer",
    categories: ["Backend", "Java"],
    status: "Completed",
    accent: "#84cc16",
    cover: "api",
    stack: [
      { group: "Backend", items: ["Java", "Spring Boot", "Spring Data JPA", "Spring Actuator"] },
      { group: "Data & Ops", items: ["PostgreSQL", "H2", "Docker", "Docker Compose", "Maven"] },
    ],
    highlights: ["CRUD for companies, jobs and nested reviews", "Service-layer abstractions with interfaces", "Dockerised app and database"],
    links: { github: "https://github.com/kharepiyushpk/Job_Application" },
  },
  {
    slug: "kodbook",
    title: "Kodbook — Social Media App",
    tagline: "A small social network built with Spring Boot and Thymeleaf",
    summary: "Users sign up, log in, create posts and browse a feed — server-rendered with Spring MVC and Thymeleaf templates.",
    description: [
      "Kodbook is a learning project to understand the full Spring MVC flow: controllers, services, JPA repositories and server-rendered templates.",
    ],
    year: "2024",
    context: "Personal",
    role: "Developer",
    categories: ["Backend", "Java"],
    status: "Completed",
    accent: "#3b82f6",
    cover: "chat",
    stack: [{ group: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Spring Data JPA", "Thymeleaf", "MySQL"] }],
    highlights: ["Sign-up and login", "Create and view posts", "Layered controller → service → repository design"],
    links: { github: "https://github.com/kharepiyushpk/Social-Media-App" },
  },
  {
    slug: "employee-management-api",
    title: "Employee Management API",
    tagline: "CRUD REST API for employees with Spring Boot and MySQL",
    summary: "A Spring Boot REST service for creating, reading, updating and deleting employee records, using Lombok to keep entities lean.",
    description: ["Built to practise REST design, JPA mappings and MySQL integration in Spring Boot."],
    year: "2024",
    context: "Personal",
    role: "Developer",
    categories: ["Backend", "Java", "Learning"],
    status: "Completed",
    accent: "#14b8a6",
    cover: "api",
    stack: [{ group: "Backend", items: ["Java", "Spring Boot", "Spring Data JPA", "MySQL", "H2", "Lombok", "Maven"] }],
    highlights: ["Full CRUD endpoints", "JPA entities with Lombok", "Actuator health checks"],
    links: {},
  },
  {
    slug: "bank-management-system",
    title: "Bank Management System",
    tagline: "ATM-style desktop banking app in Java Swing",
    summary:
      "A desktop app that simulates an ATM: multi-step account sign-up, PIN login, deposit, withdrawal, fast cash, balance enquiry, mini statement and PIN change.",
    description: [
      "Built with Java Swing and JDBC on MySQL. Account opening is a three-step form; every transaction is stored and shown in the mini statement.",
    ],
    year: "2024",
    context: "Personal",
    role: "Developer",
    categories: ["Java", "Learning"],
    status: "Completed",
    accent: "#f97316",
    cover: "desktop",
    stack: [{ group: "Desktop", items: ["Java", "Swing / AWT", "JDBC", "MySQL", "JCalendar", "NetBeans"] }],
    highlights: ["3-step account opening form", "Deposit, withdraw and fast cash", "Mini statement and balance enquiry", "PIN change"],
    links: { github: "https://github.com/kharepiyushpk/Bank-Management-System" },
  },
  {
    slug: "chat-application",
    title: "Chat Application",
    tagline: "Real-time desktop chat over Java sockets",
    summary: "A two-way chat app with a WhatsApp-style Swing interface, using a socket server and client to exchange messages in real time.",
    description: ["Built to learn networking in Java: a ServerSocket accepts the connection and both sides send and receive messages on separate streams."],
    year: "2024",
    context: "Personal",
    role: "Developer",
    categories: ["Java", "Learning"],
    status: "Completed",
    accent: "#25d366",
    cover: "chat",
    stack: [{ group: "Desktop", items: ["Java", "Socket programming", "Swing"] }],
    highlights: ["Client–server messaging", "Chat-bubble UI with timestamps"],
    links: { github: "https://github.com/kharepiyushpk/Chat-Apllication" },
  },
  {
    slug: "bus-ticket-booking",
    title: "Bus Ticket Booking",
    tagline: "Search routes, pick seats and book bus tickets",
    summary: "A React booking flow: search form, featured routes, bus list, interactive seat selection, payment page and booking history.",
    description: ["A multi-page React app with client-side routing and animated transitions."],
    year: "2025",
    context: "Personal",
    role: "Frontend developer",
    categories: ["Frontend"],
    status: "Completed",
    accent: "#ef4444",
    cover: "booking",
    stack: [{ group: "Frontend", items: ["React", "Vite", "React Router", "Tailwind CSS", "Framer Motion"] }],
    highlights: ["Interactive seat selection", "Search → seats → payment → bookings flow", "Animated, responsive UI"],
    links: { github: "https://github.com/kharepiyushpk/Ticket-Booking-Website" },
  },
  {
    slug: "salon-website",
    title: "Salon Website",
    tagline: "Elegant landing site for a beauty salon",
    summary: "A responsive salon site with services, gallery and booking call-to-actions, animated with AOS and Animate.css.",
    description: ["A single-page React site focused on clean typography and smooth reveal animations."],
    year: "2025",
    context: "Personal",
    role: "Frontend developer",
    categories: ["Frontend"],
    status: "Completed",
    accent: "#d946ef",
    cover: "site",
    stack: [{ group: "Frontend", items: ["React", "Tailwind CSS", "AOS", "Animate.css", "Lucide icons"] }],
    highlights: ["Scroll reveal animations", "Mobile-first layout"],
    links: { github: "https://github.com/kharepiyushpk/Salon-Website" },
  },
  {
    slug: "cicd-pipeline",
    title: "CI/CD Pipeline",
    tagline: "GitHub Actions workflows for pull requests and test deployments",
    summary: "Two GitHub Actions pipelines: one validates every pull request, the other deploys to a test environment.",
    description: ["Built while learning continuous integration and delivery with GitHub Actions."],
    year: "2025",
    context: "Learning",
    role: "Developer",
    categories: ["Learning"],
    status: "Completed",
    accent: "#64748b",
    cover: "pipeline",
    stack: [{ group: "DevOps", items: ["GitHub Actions", "YAML", "CI/CD"] }],
    highlights: ["Pull-request validation pipeline", "Deploy-to-test pipeline"],
    links: { github: "https://github.com/kharepiyushpk/CICD" },
  },
  {
    slug: "amazon-clone",
    title: "Amazon Clone",
    tagline: "Pixel-close Amazon homepage in HTML and CSS",
    summary: "A static recreation of the Amazon homepage layout — nav bar, hero, product grid and footer — to practise layout with Flexbox.",
    description: ["One of my first web projects, focused on layout and CSS fundamentals."],
    year: "2024",
    context: "Learning",
    role: "Developer",
    categories: ["Frontend", "Learning"],
    status: "Archived",
    accent: "#ff9900",
    cover: "store",
    stack: [{ group: "Frontend", items: ["HTML5", "CSS3", "Flexbox"] }],
    highlights: ["Responsive nav and product grid"],
    links: { github: "https://github.com/kharepiyushpk/Amazon-Clone" },
  },
  {
    slug: "login-signup",
    title: "Login / Sign-up Page",
    tagline: "Animated auth form with client-side validation",
    summary: "A toggleable login and sign-up form with validation written in plain JavaScript.",
    description: ["Built to practise DOM manipulation and form validation."],
    year: "2024",
    context: "Learning",
    role: "Developer",
    categories: ["Frontend", "Learning"],
    status: "Archived",
    accent: "#a855f7",
    cover: "basic",
    stack: [{ group: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] }],
    highlights: ["Switch between login and sign-up", "Client-side validation"],
    links: { github: "https://github.com/kharepiyushpk/Login-SignUp-Page" },
  },
  {
    slug: "calculator",
    title: "Calculator",
    tagline: "A clean calculator in vanilla JavaScript",
    summary: "A responsive calculator with keyboard-like buttons and expression evaluation.",
    description: ["A small project to practise event handling in JavaScript."],
    year: "2024",
    context: "Learning",
    role: "Developer",
    categories: ["Frontend", "Learning"],
    status: "Archived",
    accent: "#94a3b8",
    cover: "basic",
    stack: [{ group: "Frontend", items: ["HTML5", "CSS3", "JavaScript"] }],
    highlights: ["Basic arithmetic", "Clear and delete controls"],
    links: { github: "https://github.com/kharepiyushpk/Calculator" },
  },
  {
    slug: "portfolio",
    title: "This Portfolio",
    tagline: "The site you're looking at — rebuilt with Next.js",
    summary: "A statically generated portfolio with a page for every project, dark/light themes, motion and SEO metadata.",
    description: [
      "Rebuilt from a Vite + React template into a Next.js App Router site. All projects live in one typed data file, and each gets its own statically generated page with Open Graph metadata.",
    ],
    year: "2026",
    context: "Personal",
    role: "Designer & developer",
    categories: ["Frontend"],
    status: "Live",
    accent: "#38bdf8",
    cover: "site",
    stack: [{ group: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Motion"] }],
    highlights: ["Static generation for every project page", "Theme toggle without flash", "Filterable project explorer"],
    links: { github: "https://github.com/kharepiyushpk/Portfolio-Website" },
  },
];

export const categories: Category[] = ["Full Stack", "Internal Tool", "Frontend", "Backend", "Testing", "Java", "Learning"];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function allTech() {
  const set = new Set<string>();
  projects.forEach((p) => p.stack.forEach((g) => g.items.forEach((i) => set.add(i))));
  return set;
}
