"use client"

import AnimateOnScroll from "../components/AnimateOnScroll"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
import { Award, Users, Coffee, Clock, Mail, Folder, Download } from "lucide-react"
import CountUp from "react-countup"

export default function About() {
  const stats = [
    { icon: <Award className="h-8 w-8" />, number: 100, label: "Projects Completed", link: "/portfolio" },
    { icon: <Users className="h-8 w-8" />, number: 50, label: "Happy Clients", link: "/contact" },
    { icon: <Coffee className="h-8 w-8" />, number: 1000, label: "Cups of Coffee", link: "#" },
    { icon: <Clock className="h-8 w-8" />, number: 5, label: "Years Experience", link: "#" },
  ]

  const timeline = [
    { year: "2019", title: "Started Freelancing", description: "Began my journey as a freelance web developer, focusing on small business websites.", icon: "🚀" },
    { year: "2020", title: "Expanded Services", description: "Added UI/UX design and mobile app development to my service offerings.", icon: "🎨" },
    { year: "2021", title: "Major Projects", description: "Worked with several Fortune 500 companies on large-scale web applications.", icon: "🏢" },
    { year: "2022", title: "Team Growth", description: "Built a network of trusted freelancers to handle larger projects efficiently.", icon: "👥" },
    { year: "2023", title: "Specialization", description: "Focused on React, Next.js, and modern web technologies for better client outcomes.", icon: "⚡" },
  ]

  const testimonials = [
    { name: "John Smith", role: "CEO, Startup Inc.", feedback: "Piyush delivered our platform on time and with outstanding quality. Highly recommended!" },
    { name: "Emily Johnson", role: "Product Manager, TechCorp", feedback: "A great collaborator who brought our ideas to life with React and Java backend systems." },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-muted/50 to-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <AnimateOnScroll direction="right">
              <div className="relative">
                <div className="aspect-[4/5] max-h-[500px] rounded-2xl overflow-hidden backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
                  <img src="images/about.png" alt="About Me" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <p className="font-bold text-2xl animate-pulse">5+</p>
                  <p className="text-sm">Years Experience</p>
                </motion.div>
              </div>
            </AnimateOnScroll>

            <div className="space-y-6">
              <AnimateOnScroll direction="left">
                <p className="text-primary font-medium">Building Digital Experiences That Drive Growth</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  About <span className="text-primary">Me</span>
                </h1>
              </AnimateOnScroll>

              <AnimateOnScroll direction="left" delay={0.2}>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I’m Piyush Khare, a freelance developer and designer with over 5 years of experience crafting scalable, modern digital solutions. I specialize in React, Next.js, and Java-based systems, helping businesses transform their ideas into high-performing products.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll direction="left" delay={0.3}>
                <p className="text-muted-foreground leading-relaxed">
                  My approach combines clean design, efficient code, and user-first thinking. I’ve worked with startups, small businesses, and enterprises, delivering projects that not only look great but also drive measurable results.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll direction="left" delay={0.4}>
                <p className="text-muted-foreground leading-relaxed">
                 Beyond coding, I’m passionate about exploring new technologies, contributing to open source, and mentoring other developers. When I’m not building digital products, you’ll probably find me sketching UI ideas over coffee ☕ or learning the next big thing in tech.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll direction="left" delay={0.5}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md 
                               bg-gradient-to-r from-primary to-purple-500 
                               text-white font-medium shadow-lg 
                               hover:scale-105 hover:shadow-xl transition-all"
                  >
                    <Mail className="w-4 h-4" /> Let's Work Together
                  </a>
                  <a
                    href="/portfolio"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md 
                               border border-input bg-background 
                               hover:bg-muted hover:scale-105 transition-all"
                  >
                    <Folder className="w-4 h-4" /> View My Work
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md 
                               bg-gradient-to-r from-purple-500 to-primary 
                               text-white font-medium shadow-lg 
                               hover:scale-105 hover:shadow-xl transition-all"
                  >
                    <Download className="w-4 h-4" /> Download Resume
                  </a>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-muted/30">
        <div className="container">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Journey in Numbers</h2>
              <p className="text-muted-foreground">Some statistics about my work</p>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <AnimateOnScroll key={index} direction="up" delay={index * 0.1}>
                <a
                  href={stat.link}
                  className="block text-center p-6 bg-card rounded-lg border shadow-sm 
                             hover:scale-105 hover:shadow-xl hover:border-primary transition-all"
                >
                  <div className="text-primary mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold mb-2">
                    <CountUp end={stat.number} duration={2} />+
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">My Journey</h2>
              <p className="text-muted-foreground">Key milestones in my career</p>
            </div>
          </AnimateOnScroll>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-500"></div>

              {timeline.map((item, index) => (
                <AnimateOnScroll key={index} direction="up" delay={index * 0.2}>
                  <div
                    className={`relative flex items-center mb-8 lg:mb-12 
                                flex-col sm:flex-row ${
                                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                                }`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="absolute left-4 sm:left-1/2 sm:transform sm:-translate-x-1/2 
                                 w-8 h-8 rounded-full border-4 border-background shadow-lg 
                                 z-10 flex items-center justify-center text-sm text-white 
                                 bg-gradient-to-r from-primary to-purple-500"
                    >
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div
                      className={`ml-12 sm:ml-0 sm:w-1/2 ${
                        index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"
                      }`}
                    >
                      <div className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-xl hover:border-primary transition-all">
                        <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/20">
        <div className="container">
          <AnimateOnScroll direction="up">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">What Clients Say</h2>
              <p className="text-muted-foreground">Feedback from my clients and partners</p>
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <AnimateOnScroll key={i} direction="up" delay={i * 0.2}>
                <div className="p-6 rounded-lg border bg-card shadow-sm hover:shadow-lg transition-all">
                  <p className="text-muted-foreground italic mb-4">“{t.feedback}”</p>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
