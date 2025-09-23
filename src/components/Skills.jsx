"use client"

import {
  Code,
  PenTool,
  Layout,
  Database,
  LineChart,
  Users,
  Server,
  Laptop,
  Wrench,
} from "lucide-react"
import AnimateOnScroll, { AnimateStagger } from "./AnimateOnScroll"

export default function Skills() {
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-gradient" />,
      title: "Web Design",
      description:
        "Creating beautiful, responsive websites that look great on all devices and provide an excellent user experience.",
    },
    {
      icon: <Code className="h-10 w-10 text-gradient" />,
      title: "Web Development",
      description: "Building robust web applications using modern technologies like React, Vue, and Node.js.",
    },
    {
      icon: <PenTool className="h-10 w-10 text-gradient" />,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and experiences that engage users and achieve business goals.",
    },
    {
      icon: <Database className="h-10 w-10 text-gradient" />,
      title: "Backend Development",
      description: "Creating secure, scalable backend systems and APIs to power your applications.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-gradient" />,
      title: "SEO Optimization",
      description: "Improving your website's visibility in search engines to drive more organic traffic.",
    },
    {
      icon: <Users className="h-10 w-10 text-gradient" />,
      title: "Consultation",
      description: "Providing expert advice on technology choices, architecture, and digital strategy.",
    },
  ]

  const skillCategories = [
    {
      category: "Frontend",
      icon: <Laptop className="w-5 h-5 text-primary" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Vue", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Server className="w-5 h-5 text-primary" />,
      skills: ["Node.js", "Express.js", "Java", "Spring Boot", "REST APIs", "GraphQL"],
    },
    {
      category: "Databases",
      icon: <Database className="w-5 h-5 text-primary" />,
      skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite", "Firebase"],
    },
    {
      category: "UI/UX & Design",
      icon: <PenTool className="w-5 h-5 text-primary" />,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping"],
    },
    {
      category: "Tools & DevOps",
      icon: <Wrench className="w-5 h-5 text-primary" />,
      skills: ["Git", "GitHub", "Docker", "AWS", "Vercel", "Jira"],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        {/* Header */}
        <AnimateOnScroll direction="up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services & Skills</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground">What I can do for you</p>
          </div>
        </AnimateOnScroll>

        {/* Services Section */}
        <AnimateStagger
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          staggerDelay={0.1}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border bg-card hover:scale-105 hover:shadow-xl hover:border-primary transition-all group"
            >
              <div className="mb-4 group-hover:rotate-6 transition-transform">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </AnimateStagger>

        {/* Skills Section - Categories */}
        <AnimateOnScroll direction="up" delay={0.3}>
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold mb-10 text-center">Technical Skills</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <AnimateOnScroll key={index} direction="up" delay={index * 0.1}>
                  <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-4">
                      {category.icon}
                      <h4 className="text-lg font-semibold">{category.category}</h4>
                    </div>
                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="px-3 py-1 text-sm bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
