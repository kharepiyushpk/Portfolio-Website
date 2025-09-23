"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  ChevronDown,
} from "lucide-react";
import AnimateOnScroll from "../components/AnimateOnScroll";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs
      .send(
        "service_u34z1o7", // replace with your EmailJS service ID
        "template_6eb4god", // replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          budget: formData.budget,
          timeline: formData.timeline,
        },
        "s3ne_Q9qKir9IZAyV" // replace with your EmailJS public key
      )
      .then(
        () => {
          setSubmitted(true);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            budget: "",
            timeline: "",
          });
          setTimeout(() => setSubmitted(false), 4000);
        },
        (error) => {
          console.error("Email send error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "kharepiyushpk@gmail.com",
      link: "mailto:kharepiyushpk@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+91 9516467095",
      link: "tel:+91 9516467095",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Jabalpur, India",
      link: null,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      link: null,
    },
  ];

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Timelines vary depending on complexity. Most websites take 2–6 weeks, while larger applications take 2–4 months.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! I regularly work with clients worldwide and adapt to different time zones and communication styles.",
    },
    {
      question: "What's included in your web development service?",
      answer:
        "My service covers design, development, testing, deployment, and 30 days of post-launch support.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes, I offer maintenance packages to keep your website updated, secure, and performing well.",
    },
    {
      question: "Can you help redesign an existing website?",
      answer:
        "Absolutely! I can audit your existing site and revamp it with a modern design and improved performance.",
    },
    {
      question: "Do you offer custom solutions or just templates?",
      answer:
        "I specialize in fully custom solutions tailored to your brand and business goals. Templates are only used when requested.",
    },
    {
      question: "Will my website be SEO friendly?",
      answer:
        "Yes, all my websites are built with SEO best practices including fast loading speed, mobile responsiveness, and semantic markup.",
    },
    {
      question: "How do we communicate during the project?",
      answer:
        "I use email, Zoom/Google Meet, and project management tools like Trello or Slack to keep everything transparent.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "My stack includes React, Next.js, Node.js, Java, and modern tools like Tailwind, MongoDB, PostgreSQL, and Firebase.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
        {/* Smaller Background Accent */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-10 left-1/2 -translate-x-1/2 w-52 h-52 bg-primary/10 rounded-full blur-2xl -z-10"
        />

        <div className="container text-center max-w-2xl mx-auto relative z-10">
          {/* Highlight Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-3 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            Available Worldwide 🌍
          </motion.div>

          <AnimateOnScroll direction="up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
              Let's Work <span className="text-primary">Together</span>
            </h1>
          </AnimateOnScroll>

          {/* Animated Divider */}
          <AnimateOnScroll direction="up" delay={0.1}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "60px" }}
              transition={{ duration: 0.6 }}
              className="h-1 bg-primary mx-auto mb-4"
            />
          </AnimateOnScroll>

          {/* Tagline */}
          <AnimateOnScroll direction="up" delay={0.2}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
              Ready to bring your project to life? From modern web apps to
              custom digital solutions — I transform ideas into engaging
              experiences.
            </p>
          </AnimateOnScroll>

          {/* CTA Button */}
          <AnimateOnScroll direction="up" delay={0.3}>
            <motion.a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                   bg-gradient-to-r from-primary to-purple-500 text-white font-medium
                   shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <AnimateOnScroll direction="right">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="text-muted-foreground mb-8">
                I'm always excited to collaborate on new projects and help
                businesses achieve their goals.
              </p>
            </AnimateOnScroll>

            <div className="space-y-6">
              {contactInfo.map((item, i) => (
                <AnimateOnScroll
                  key={i}
                  direction="right"
                  delay={0.1 + i * 0.1}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll direction="right" delay={0.5}>
              <div className="pt-8 border-t">
                <h3 className="font-medium mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  <motion.a
                    href="https://twitter.com/"
                    target="_blank"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/piyush-khare-715179233/"
                    target="_blank"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/kharepiyushpk"
                    target="_blank"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/piyush_khare_23/"
                    target="_blank"
                    className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-white"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimateOnScroll direction="left">
              <div className="bg-card p-6 lg:p-8 rounded-xl border shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Budget + Timeline */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg 
             bg-background text-foreground 
             focus:outline-none focus:ring-2 focus:ring-primary/50 
             transition-colors"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-plus">$25,000+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border rounded-lg 
                 bg-background text-foreground 
                 focus:outline-none focus:ring-2 focus:ring-primary/50 
                 transition-colors"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-month">Within 1 month</option>
                        <option value="2-3-months">2–3 months</option>
                        <option value="flexible">Flexible</option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg"
                      placeholder="Project inquiry"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border rounded-lg resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <Send size={18} />
                  </motion.button>
                </form>

                {/* Success Message */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      className="mt-6 p-4 rounded-lg bg-green-100 text-green-700 font-medium"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                    >
                      ✅ Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-muted/30">
        <div className="container max-w-3xl mx-auto">
          <AnimateOnScroll direction="up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card p-4 rounded-lg border">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex justify-between items-center text-left font-medium"
                >
                  {faq.question}{" "}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFAQ === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-2 text-muted-foreground"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
