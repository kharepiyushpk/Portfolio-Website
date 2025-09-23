/* eslint-disable no-unused-vars */
"use client"

import { Heart, Twitter, Linkedin, Github, Instagram, ArrowUp, Mail, Phone, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ]

  const socials = [
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com/" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/piyush-khare-715179233/" },
    { name: "GitHub", icon: <Github className="w-5 h-5" />, url: "https://github.com/kharepiyushpk" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/piyush_khare_23/" },
  ]

  return (
    <footer className="footer py-10 lg:py-14 border-t bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
              Portfolio<span className="text-foreground">.</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Crafting modern websites, apps, and solutions that bring ideas to life.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="footer-link hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="footer-title">Contact</h3>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:kharepiyushpk@gmail.com" className="hover:text-primary">
                  kharepiyushpk@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919516467095" className="hover:text-primary">
                  +91 9516467095
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <p>Jabalpur, India</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="pt-6 mt-6 border-t flex flex-col sm:flex-row justify-between items-center text-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} Made with <Heart size={14} className="inline text-primary mx-1" /> by{" "}
            <span className="font-medium text-foreground">Piyush Khare</span>. All rights reserved.
          </p>

          {/* Back to Top */}
          <motion.a
            href="#"
            className="flex items-center gap-1 text-sm text-primary hover:underline"
            whileHover={{ y: -2 }}
          >
            <ArrowUp size={16} /> Back to Top
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}
