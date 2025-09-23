"use client";

import AnimateOnScroll from "./AnimateOnScroll";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, MapPin, Briefcase, Download } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-gradient-to-b from-muted/40 to-background relative overflow-hidden"
    >
      <div className="container relative z-10">
        <AnimateOnScroll direction="up">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            {/* Animated Divider */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-primary mx-auto mb-6"
            ></motion.div>
            <p className="text-muted-foreground">
              Crafting digital experiences that help businesses grow
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <AnimateOnScroll direction="right" delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden border-8 border-background shadow-xl hover:shadow-2xl hover:shadow-primary/30 transition-all">
                <img
                  src="/images/about.png"
                  alt="About Me"
                  className="w-full h-auto max-h-[300px] md:max-h-[400px] lg:max-h-[450px] object-cover rounded-lg"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
                className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-5 py-4 rounded-lg shadow-lg"
              >
                <p className="font-bold text-xl">100+</p>
                <p className="text-sm">Projects Completed</p>
              </motion.div>
            </motion.div>
          </AnimateOnScroll>

          {/* Content */}
          <div className="space-y-6">
            <AnimateOnScroll direction="left" delay={0.3}>
              <h3 className="text-2xl font-bold">
                I design & build digital products for growing businesses
              </h3>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.4}>
              <p className="text-muted-foreground leading-relaxed">
                With 5+ years of experience in web development and design, I
                specialize in creating beautiful, functional solutions that not
                only look great but also deliver measurable results.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="left" delay={0.5}>
              <p className="text-muted-foreground leading-relaxed">
                My approach blends technical expertise with creative
                problem-solving, ensuring each project helps clients achieve
                their goals efficiently and effectively.
              </p>
            </AnimateOnScroll>

            {/* Info Grid */}
            <AnimateOnScroll direction="left" delay={0.6}>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">Piyush Khare</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">
                    kharepiyushpk@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">Jabalpur, India</p>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <p className="text-muted-foreground">Freelance / Contract</p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* CTA Buttons */}
            <AnimateOnScroll direction="left" delay={0.7}>
              <div className="flex flex-wrap gap-4 pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md 
                             bg-gradient-to-r from-primary to-purple-500 
                             text-white font-medium shadow-md 
                             hover:scale-105 hover:shadow-xl transition-all"
                >
                  Contact Me
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-md 
                             border border-input bg-background 
                             hover:bg-muted hover:scale-105 transition-all"
                >
                  <Download className="w-4 h-4" /> Download CV
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Trusted by 50+ clients worldwide
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
