"use client";

import { ArrowRight, Folder } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-12 md:pt-20 section-padding bg-gradient-to-b from-muted/50 to-background relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div className="space-y-5 text-center md:text-left">
            <AnimateOnScroll direction="up" delay={0.1}>
              <p className="text-primary font-medium text-sm sm:text-base">
                🚀 Turning Ideas into Reality
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Piyush Khare
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.4}>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2000,
                    "UI/UX Enthusiast",
                    2000,
                    "MERN Stack Developer",
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll direction="up" delay={0.6}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-md mx-auto md:mx-0">
                I help businesses grow by building scalable, modern, and
                visually stunning digital solutions.
              </p>
            </AnimateOnScroll>

            {/* Buttons */}
            <AnimateOnScroll direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md 
                             bg-gradient-to-r from-primary to-purple-500 
                             text-white font-medium shadow-md 
                             hover:scale-105 hover:shadow-xl transition-all"
                >
                  Hire Me <ArrowRight size={18} />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md 
                             border border-input bg-background 
                             hover:bg-muted hover:scale-105 transition-all"
                >
                  <Folder size={18} /> View Projects
                </Link>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Content (Profile Image) */}
         {/* Right Content (Profile Image) */}
<AnimateOnScroll direction="left" delay={0.5}>
  <div className="relative justify-center hidden md:flex">
    <motion.div
  className="rounded-xl overflow-hidden backdrop-blur-md 
             bg-white/10 border-4 border-gradient-to-r from-primary to-purple-500 
             shadow-xl hover:shadow-2xl hover:shadow-primary/30 
             max-w-[280px] sm:max-w-[320px] md:max-w-md mx-auto 
             max-h-[400px]"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  whileHover={{ scale: 1.05 }}
>
  <motion.img
    src="/images/about.png"
    alt="Piyush Khare"
    className="w-full h-full object-cover"
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
  />
</motion.div>


    {/* Experience Badge */}
    <motion.div
      className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-3 sm:p-4 rounded-lg shadow-lg text-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <p className="font-medium text-base sm:text-lg animate-pulse">5+ Years Experience</p>
      <p className="text-xs sm:text-sm text-background/90">in Full Stack Development</p>
    </motion.div>
  </div>
</AnimateOnScroll>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex">
          <motion.div
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
