"use client"

import AnimateOnScroll, { AnimateStagger } from "../components/AnimateOnScroll"
import {
  Code,
  PenTool,
  Layout,
  Database,
  LineChart,
  Users,
  Smartphone,
  Globe,
  Zap,
  Shield,
  Star,
} from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Layout className="h-12 w-12 text-primary group-hover:text-white transition-colors" />,
      title: "Web Design",
      description:
        "Creating beautiful, responsive websites that look great on all devices and provide an excellent user experience.",
      features: ["Responsive Design", "UI/UX Design", "Wireframing", "Prototyping"],
    },
    {
      icon: <Code className="h-12 w-12 text-primary group-hover:text-white transition-colors" />,
      title: "Web Development",
      description: "Building robust web applications using modern technologies like React, Vue, and Node.js.",
      features: ["Frontend Development", "Backend Development", "API Integration", "Database Design"],
      popular: true, // highlight this one
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary group-hover:text-white transition-colors" />,
      title: "Mobile Apps",
      description: "Developing cross-platform mobile applications that work seamlessly on iOS and Android.",
      features: ["React Native", "Cross-platform", "App Store Deployment", "Push Notifications"],
    },
    {
      icon: <Database className="h-12 w-12 text-primary group-hover:text-white transition-colors" />,
      title: "Backend Development",
      description: "Creating secure, scalable backend systems and APIs to power your applications.",
      features: ["RESTful APIs", "Database Design", "Authentication", "Cloud Deployment"],
    },
    {
      icon: <LineChart className="h-12 w-12 text-primary group-hover:text-white transition-colors" />,
      title: "SEO Optimization",
      description: "Improving your website's visibility in search engines to drive more organic traffic.",
      features: ["Technical SEO", "Content Optimization", "Performance Optimization", "Analytics Setup"],
    },
    {
      icon: <Users className="h-12 w-12 text-primary group-hover:text-white transition-colors" />,
      title: "Consultation",
      description: "Providing expert advice on technology choices, architecture, and digital strategy.",
      features: ["Technology Consulting", "Code Review", "Architecture Planning", "Team Training"],
    },
  ]

  const process = [
    { step: "01", title: "Discovery", description: "Understanding your goals, audience, and requirements.", icon: <Globe className="h-8 w-8" /> },
    { step: "02", title: "Planning", description: "Crafting timelines, milestones, and technical specifications.", icon: <PenTool className="h-8 w-8" /> },
    { step: "03", title: "Development", description: "Agile development with frequent updates and feedback.", icon: <Code className="h-8 w-8" /> },
    { step: "04", title: "Testing", description: "Rigorous testing to ensure performance and stability.", icon: <Shield className="h-8 w-8" /> },
    { step: "05", title: "Launch", description: "Smooth deployment with training and post-launch support.", icon: <Zap className="h-8 w-8" /> },
  ]

  const techStack = {
    Frontend: ["React", "Next.js", "Vue", "HTML", "CSS", "Tailwind CSS"],
    Backend: ["Node.js", "Express.js", "Java", "Spring Boot"],
    Database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
    Tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  }

  return (
    <div className="min-h-screen">
     {/* Hero Section */}
<section className="py-16 bg-gradient-to-br from-primary/5 via-background to-muted/30 relative overflow-hidden">
  <div className="container max-w-3xl mx-auto text-center relative z-10">
    <AnimateOnScroll direction="up">
      <span className="inline-block px-4 py-1 mb-4 text-xs font-medium rounded-full bg-primary/10 text-primary">
        ⭐ What I Offer
      </span>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        My <span className="text-primary">Services</span>
      </h1>
    </AnimateOnScroll>

    <AnimateOnScroll direction="up" delay={0.2}>
      <p className="text-base sm:text-lg text-muted-foreground mb-6">
        End-to-end digital solutions crafted with <span className="text-primary font-medium">expertise</span> 
        and <span className="text-primary font-medium">creativity</span>.  
        From concept to deployment, I make sure every project delivers results.
      </p>
    </AnimateOnScroll>

    <AnimateOnScroll direction="up" delay={0.3}>
      <a
        href="/contact"
        className="inline-block px-6 py-3 rounded-lg 
                   border border-primary text-primary 
                   hover:bg-primary hover:text-white 
                   transition-all font-medium shadow-sm"
      >
        Let’s Discuss Your Project
      </a>
    </AnimateOnScroll>
  </div>

  {/* Decorative background effect */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
  </div>
</section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container">
          <AnimateStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-6 lg:p-8 rounded-xl border bg-card hover:scale-105 hover:shadow-xl transition-all duration-300
                ${service.popular ? "border-primary shadow-md" : ""}`}
              >
                {service.popular && (
                  <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" /> Popular
                  </span>
                )}
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <a
                    href="/contact"
                    className="inline-block w-full px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Process</h2>
              <p className="text-muted-foreground">A clear, collaborative approach for delivering great results</p>
            </div>
          </AnimateOnScroll>

          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 max-w-5xl mx-auto">
            {process.map((item, index) => (
              <AnimateOnScroll key={index} direction="up" delay={index * 0.1}>
                <div className="flex-1 text-center lg:text-left p-6 bg-card rounded-lg border hover:shadow-md transition-all">
                  <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding">
        <div className="container">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tech Stack</h2>
              <p className="text-muted-foreground">Technologies and tools I use to bring ideas to life</p>
            </div>
          </AnimateOnScroll>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {Object.entries(techStack).map(([category, skills], index) => (
              <AnimateOnScroll key={index} direction="up" delay={index * 0.1}>
                <div className="p-6 rounded-lg border bg-card hover:shadow-md transition-all">
                  <h4 className="font-bold text-lg mb-4 text-primary">{category}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {skills.map((skill, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm bg-muted rounded-full hover:bg-primary hover:text-white transition-colors"
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
      </section>
    </div>
  )
}
