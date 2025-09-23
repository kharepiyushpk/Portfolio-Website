"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimateOnScroll from "./AnimateOnScroll"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechStart",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Working with this freelancer was an absolute pleasure. They delivered our website redesign on time and exceeded all our expectations. Their attention to detail and creative solutions helped us increase our conversion rate by 30%.",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "I've worked with many developers over the years, but none have been as professional and skilled. They understood our requirements perfectly and delivered a product that our customers love. I highly recommend their services.",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      position: "Founder, DesignHub",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "The quality of work and level of communication was outstanding. They took our vague idea and transformed it into a beautiful, functional website that perfectly represents our brand. We'll definitely be working together again.",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Product Manager, InnovateCorp",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Their technical expertise and creative approach to problem-solving made our project a success. They were responsive, professional, and delivered exactly what we needed. I couldn't be happier with the results.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <AnimateOnScroll direction="up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground">What my clients say about me</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-card rounded-lg p-8 md:p-12 border shadow-sm">
              <motion.div
                className="text-primary mb-6"
                initial={{ rotate: -10, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Quote size={48} />
              </motion.div>

              <AnimatePresence custom={direction} initial={false} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <p className="text-lg md:text-xl mb-8 italic">{testimonials[currentIndex].content}</p>

                  <div className="flex items-center">
                    <motion.div
                      className="mr-4"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <img
                        src={testimonials[currentIndex].image || "/placeholder.svg"}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-bold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-muted-foreground">{testimonials[currentIndex].position}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Previous testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? 1 : -1)
                      setCurrentIndex(index)
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                aria-label="Next testimonial"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
