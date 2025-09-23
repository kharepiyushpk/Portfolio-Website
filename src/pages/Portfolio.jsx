"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  User,
  Star,
  X,
  Target,
  Lightbulb,
  TrendingUp,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "design", name: "UI/UX Design" },
    { id: "mobile", name: "Mobile Apps" },
    { id: "ecommerce", name: "E-commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "ecommerce",
      image: "/images/project-ecommerce.jpg",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and payments.",
      longDescription:
        "Built a comprehensive e-commerce solution with inventory management, order tracking, and analytics dashboard. Integrated Stripe for payments and implemented SEO optimization.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      client: "TechStore Inc.",
      duration: "3 months",
      featured: true,
    },
    {
      id: 2,
      title: "Travel Booking App",
      category: "design",
      image: "/images/project-travel.jpg",
      description:
        "Modern UI design for a travel booking app with strong focus on UX and accessibility.",
      longDescription:
        "Designed a complete interface for a travel booking platform, including user research, wireframing, prototyping, and final designs. Created a design system for consistency.",
      technologies: ["Figma", "Adobe XD", "Illustrator", "Principle"],
      liveUrl: "#",
      githubUrl: "#",
      client: "WanderLust Travel",
      duration: "2 months",
      featured: true,
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/images/project-fitness.jpg",
      description:
        "A mobile app for tracking workouts, nutrition, and fitness progress with data visualization.",
      longDescription:
        "Developed a cross-platform app with workout tracking, nutrition logging, charts, and social features. Integrated with health APIs and wearables.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      client: "FitLife Solutions",
      duration: "4 months",
      featured: false,
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const featuredProjects = projects.filter((p) => p.featured);

  // Case Studies
  const caseStudies = [
    {
      title: "Scaling an E-commerce Platform",
      image: "/images/case-ecommerce.jpg",
      challenge:
        "The client needed an online store that could handle thousands of daily users while maintaining fast load times and secure transactions.",
      solution:
        "I developed a React + Node.js based e-commerce solution with optimized queries, caching strategies, and Stripe payment integration.",
      impact:
        "The client saw a 45% increase in conversions and handled peak traffic during sales events with zero downtime.",
    },
    {
      title: "Redesigning a Travel App Experience",
      image: "/images/case-travel.jpg",
      challenge:
        "The old app had high bounce rates due to poor navigation and lack of accessibility features.",
      solution:
        "Conducted user research, redesigned the UI in Figma, and introduced accessibility-first design patterns.",
      impact:
        "User engagement increased by 60%, and customer booking rates improved significantly.",
    },
    {
      title: "Building a Fitness Tracking App",
      image: "/images/case-fitness.jpg",
      challenge:
        "Users wanted a seamless way to log workouts, track nutrition, and integrate with wearables.",
      solution:
        "Created a React Native app with Firebase backend, real-time syncing, and data visualization using Chart.js.",
      impact:
        "The app reached 10k+ downloads in 3 months and became a top-rated fitness app in its category.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-primary/5 via-background to-primary/5 relative overflow-hidden">
        {/* Subtle overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,theme(colors.primary)_0%,transparent_70%)]"></div>

        <div className="container text-center max-w-3xl mx-auto relative z-10">
          <AnimateOnScroll direction="up">
            <span className="text-sm uppercase tracking-wider text-primary font-semibold block mb-3">
              Showcasing My Work
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="text-primary">Portfolio</span>
            </h1>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-muted-foreground mb-6">
              Explore my recent projects and see how I’ve helped businesses
              achieve their digital goals through innovation, design, and
              development.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll direction="up" delay={0.3}>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-md 
                   bg-gradient-to-r from-primary to-purple-500 
                   text-white font-medium shadow-lg 
                   hover:scale-105 hover:shadow-xl transition-all"
            >
              Let’s Build Something Together
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-muted-foreground">
                A selection of my best work
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {featuredProjects.map((project, i) => (
              <AnimateOnScroll
                key={project.id}
                direction={i % 2 === 0 ? "right" : "left"}
                delay={i * 0.2}
              >
                <div className="relative bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-xl transition-all">
                  {project.featured && (
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3" /> Featured
                    </span>
                  )}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-background/80 px-3 py-1 text-xs rounded-md">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                All Projects
              </h2>
              <p className="text-muted-foreground">
                Browse through my complete portfolio
              </p>
            </div>
          </AnimateOnScroll>

          {/* Filter Buttons */}
          <div className="flex overflow-x-auto justify-start sm:justify-center gap-2 mb-10 pb-2 scrollbar-hide">
            {categories.map((c) => (
              <motion.button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-md text-sm whitespace-nowrap ${
                  filter === c.id
                    ? "bg-primary text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {c.name}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  className="bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  layout
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-background/80 px-2 py-1 text-xs rounded-md">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-secondary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-secondary rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-sm text-primary font-medium hover:underline"
                    >
                      View Details
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-gradient-to-b from-muted/20 to-background">
        <div className="container max-w-5xl mx-auto">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Case Studies
              </h2>
              <p className="text-muted-foreground">
                A deeper look at how I solve problems and deliver impact
              </p>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-12">
            {caseStudies.map((cs, i) => (
              <AnimateOnScroll
                key={i}
                direction={i % 2 === 0 ? "right" : "left"}
                delay={i * 0.2}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-xl border p-6 lg:p-10 shadow-sm hover:shadow-xl transition-all">
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold mb-2">{cs.title}</h3>
                    <div className="flex items-start gap-2">
                      <Target className="text-primary w-5 h-5 mt-1" />
                      <p>
                        <strong>Challenge:</strong> {cs.challenge}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Lightbulb className="text-primary w-5 h-5 mt-1" />
                      <p>
                        <strong>Solution:</strong> {cs.solution}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="text-primary w-5 h-5 mt-1" />
                      <p>
                        <strong>Impact:</strong> {cs.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-card rounded-xl max-w-2xl w-full p-6 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary"
                onClick={() => setSelectedProject(null)}
              >
                <X size={20} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedProject.longDescription}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedProject.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 bg-secondary rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1">
                  <User size={14} /> {selectedProject.client}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {selectedProject.duration}
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink size={16} className="inline-block mr-1" /> Live
                </a>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-md border border-input hover:bg-muted transition-colors"
                >
                  <Github size={16} className="inline-block mr-1" /> Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
