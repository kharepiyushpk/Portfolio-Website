"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function AnimateOnScroll({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 0.5,
  direction = null,
  distance = 50,
  once = true,
  className = "",
}) {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })

  // Set up variants based on direction
  let variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  if (direction === "up") {
    variants = {
      hidden: { opacity: 0, y: distance },
      visible: { opacity: 1, y: 0 },
    }
  } else if (direction === "down") {
    variants = {
      hidden: { opacity: 0, y: -distance },
      visible: { opacity: 1, y: 0 },
    }
  } else if (direction === "left") {
    variants = {
      hidden: { opacity: 0, x: -distance },
      visible: { opacity: 1, x: 0 },
    }
  } else if (direction === "right") {
    variants = {
      hidden: { opacity: 0, x: distance },
      visible: { opacity: 1, x: 0 },
    }
  }

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// For staggered animations of multiple children
export function AnimateStagger({ children, staggerDelay = 0.1, className = "", ...props }) {
  const [childrenArray, setChildrenArray] = useState([])
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, threshold: 0.1 })

  useEffect(() => {
    if (children?.props?.children && Array.isArray(children.props.children)) {
      setChildrenArray(children.props.children)
    } else if (Array.isArray(children)) {
      setChildrenArray(children)
    }
  }, [children])

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={container}
      className={className}
      {...props}
    >
      {Array.isArray(childrenArray) ? (
        childrenArray.map((child, index) => (
          <motion.div key={index} variants={item}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={item}>{children}</motion.div>
      )}
    </motion.div>
  )
}
