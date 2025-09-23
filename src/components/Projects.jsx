"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import AnimateOnScroll, { AnimateStagger } from "./AnimateOnScroll"
import { motion } from "framer-motion"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "design", name: "UI/UX Design" },
    { id: "mobile", name: "Mobile Apps" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      category: "web",
      image: "/images/project-ecommerce.jpg?height=600&width=800",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Travel App UI Design",
      category: "design",
      image: "/images/project-travel.jpg?height=600&width=800",
      description:
        "A modern UI design for a travel booking application with a focus on user experience and accessibility.",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      category: "mobile",
      image: "/images/project-fitness.jpg?height=600&width=800",
      description:
        "A mobile application for tracking workouts, nutrition, and fitness progress with data visualization.",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "web",
      image: "/images/project-ecommerce.jpg?height=600&width=800",
      description: "A personal portfolio website showcasing projects and skills with a clean, modern design.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Restaurant Booking System",
      category: "web",
      image: "/images/project-restaurant.jpg?height=600&width=800",
      description: "An online reservation system for restaurants with table management and customer notifications.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Music App Interface",
      category: "design",
      image: "/images/project-music.jpg?height=600&width=800",
      description: "A sleek interface design for a music streaming application with dark mode support.",
      technologies: ["Figma", "Photoshop", "Prototyping"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="container">
        <AnimateOnScroll direction="up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground">Check out some of my recent work</p>
          </div>
        </AnimateOnScroll>

        {/* Filter Buttons */}
        <AnimateOnScroll direction="up" delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Projects Grid */}
        <AnimateStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden border hover:shadow-lg transition-all"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background rounded-full hover:bg-muted transition-colors"
                    aria-label="View live site"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-background rounded-full hover:bg-muted transition-colors"
                    aria-label="View source code"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs px-3 py-1 bg-secondary rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimateStagger>
      </div>
    </section>
  )
}
