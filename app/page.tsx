"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Code,
  GraduationCap,
  User,
  FolderOpen,
  ExternalLink,
  ChevronUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { SpaceBackground } from "@/components/space-background"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [showScrollTop, setShowScrollTop] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "education", "skills", "achievements", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      // Show/hide scroll to top button
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 relative">
      {/* Space Background (only in dark mode) */}
      <div className="dark:block hidden">
        <SpaceBackground />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold text-slate-900 dark:text-white"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Alan Sultan
            </motion.div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex space-x-8">
                {["About", "Experience", "Education", "Skills", "Achievements", "Projects", "Contact"].map((item) => (
                  <motion.button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-sm font-medium transition-colors ${
                      activeSection === item.toLowerCase()
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 relative overflow-hidden"
      >
        {/* Animated background elements (dark mode only) */}
        <div className="hidden dark:block">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-900/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-900/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.12, 0.17, 0.12],
            }}
            transition={{
              duration: 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6" variants={fadeIn}>
              Hi, I'm Alan Sultan
            </motion.h1>

            <motion.div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8" variants={fadeIn}>
              Software Engineering Student & Problem Solver
            </motion.div>

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              variants={fadeIn}
            >
              I'm passionate about building efficient software solutions and solving complex problems. Currently
              studying at A2SV while working on various projects and competitive programming.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={fadeIn}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Projects
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 px-8 py-3"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardContent className="p-8">
                    <p className="text-lg leading-relaxed mb-6 text-slate-700 dark:text-slate-300">
                      I'm a dedicated Software Engineering student with a strong foundation in multiple programming
                      languages including C++, Java, Python, and web technologies. My journey in tech is driven by
                      curiosity and a genuine love for problem-solving.
                    </p>
                    <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                      Through my studies at A2SV and personal projects, I've developed skills in both theoretical
                      computer science and practical software development. I enjoy tackling challenging problems and
                      building solutions that make a difference.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div
                className="flex items-center space-x-4 text-slate-700 dark:text-slate-300"
                variants={itemFade}
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>Addis Ababa, Ethiopia</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4 text-slate-700 dark:text-slate-300"
                variants={itemFade}
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>+251944300768</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4 text-slate-700 dark:text-slate-300"
                variants={itemFade}
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <span>alannn15021@gmail.com</span>
              </motion.div>

              <motion.div className="pt-6" variants={itemFade}>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Languages</h3>
                <div className="space-y-3">
                  <motion.div className="flex justify-between items-center" whileHover={{ scale: 1.02 }}>
                    <span className="text-slate-700 dark:text-slate-300">English</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Fluent</Badge>
                  </motion.div>
                  <motion.div className="flex justify-between items-center" whileHover={{ scale: 1.02 }}>
                    <span className="text-slate-700 dark:text-slate-300">Amharic</span>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Native</Badge>
                  </motion.div>
                  <motion.div className="flex justify-between items-center" whileHover={{ scale: 1.02 }}>
                    <span className="text-slate-700 dark:text-slate-300">Arabic</span>
                    <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                      Basic
                    </Badge>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-950 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-slate-900 dark:text-white">
                          A2SV | Africa to Silicon Valley
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400">
                          Software Engineering Student • 2023 - Present
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                      Currently part of A2SV's intensive software engineering program, which focuses on building
                      world-class technical skills and connecting African talent with global opportunities.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Key Learning Areas:</h4>
                        <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                          <li>• Advanced algorithms and data structures</li>
                          <li>• System design principles</li>
                          <li>• Software engineering best practices</li>
                          <li>• Competitive programming techniques</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Industry Connections:</h4>
                        <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-400">
                          <li>• Google, Palantir, Databricks partnerships</li>
                          <li>• Bloomberg and Meta collaborations</li>
                          <li>• Access to global tech opportunities</li>
                          <li>• Mentorship from industry professionals</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                        <User className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-slate-900 dark:text-white">Section Representative</CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400">
                          Student Leadership Role • University
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                      <motion.li
                        className="flex items-start space-x-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Serve as the main communication bridge between students and faculty, ensuring student concerns
                          and feedback are properly addressed
                        </span>
                      </motion.li>
                      <motion.li
                        className="flex items-start space-x-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Coordinate and organize academic and extracurricular activities to enhance student engagement
                          and learning experience
                        </span>
                      </motion.li>
                      <motion.li
                        className="flex items-start space-x-3"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>
                          Facilitate effective communication by sharing important announcements and updates with
                          classmates in a timely manner
                        </span>
                      </motion.li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-slate-900 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-slate-900 dark:text-white">
                          Addis Ababa Science and Technology University
                        </CardTitle>
                        <CardDescription className="text-slate-600 dark:text-slate-400 text-lg">
                          Bachelor of Science in Software Engineering
                        </CardDescription>
                        <CardDescription className="text-slate-500 dark:text-slate-500">
                          2022 - 2027 (Expected)
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      Currently pursuing a comprehensive Software Engineering degree with focus on modern development
                      practices, software architecture, algorithms, and system design. The program emphasizes both
                      theoretical foundations and practical application of software engineering principles.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2 text-slate-900 dark:text-white">
                      <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>Technical Skills</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {[
                      { name: "C++", level: 85, note: "" },
                      { name: "Java", level: 80, note: "" },
                      { name: "Advanced Java Programming", level: 85, note: "Built a Multi-Chat System" },
                      { name: "Python", level: 90, note: "" },
                      { name: "JavaScript/React", level: 82, note: "" },
                      { name: "PHP", level: 78, note: "Developed a Travel Booking System" },
                      { name: "HTML/CSS", level: 85, note: "" },
                      { name: "Data Structures & Algorithms", level: 88, note: "" },
                      { name: "Object-Oriented Programming", level: 85, note: "" },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex justify-between mb-2">
                          <div>
                            <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                            {skill.note && (
                              <div className="text-xs text-slate-500 dark:text-slate-400 italic">{skill.note}</div>
                            )}
                          </div>
                          <span className="text-slate-600 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute top-0 left-0 h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center space-x-2 text-slate-900 dark:text-white">
                      <User className="w-5 h-5 text-green-600 dark:text-green-400" />
                      <span>Soft Skills</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        "Problem Solving",
                        "Team Collaboration",
                        "Communication",
                        "Time Management",
                        "Leadership",
                        "Critical Thinking",
                        "Adaptability",
                        "Project Management",
                      ].map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                          className="bg-slate-50 dark:bg-slate-700 p-3 rounded-lg text-center border border-slate-200 dark:border-slate-600 transition-colors duration-300"
                        >
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coding Achievements Section */}
      <section id="achievements" className="py-20 bg-white dark:bg-slate-900 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Coding Achievements</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              I'm passionate about competitive programming and problem-solving. Here are some of my achievements on
              popular coding platforms that demonstrate my algorithmic thinking and programming skills.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Code className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">LeetCode</h3>
                    <motion.div
                      className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      436+
                    </motion.div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Problems Solved</p>
                    <motion.a
                      href="https://leetcode.com/u/Ala_kaii/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      View Profile <ExternalLink className="w-4 h-4 ml-1" />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.7 }}
                    >
                      <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Codeforces</h3>
                    <motion.div
                      className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      702+
                    </motion.div>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">Problems Solved</p>
                    <motion.a
                      href="https://codeforces.com/profile/Ala_Kaii"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                      whileHover={{ x: 5 }}
                    >
                      View Profile <ExternalLink className="w-4 h-4 ml-1" />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-950 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              Here are some of the projects I've worked on that showcase my technical skills and problem-solving
              abilities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                          <FolderOpen className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                        </div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          Inventory Management System
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A comprehensive inventory management solution for businesses to track products, manage orders, and
                      maintain customer relationships.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <li>• Product catalog management with categories and pricing</li>
                      <li>• Order processing and status tracking system</li>
                      <li>• Customer database with purchase history</li>
                      <li>• Inventory alerts and reporting features</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Java
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        MySQL
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        JavaFX
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                          <FolderOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">
                          Hotel Room Reservation System
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A web-based hotel management system that allows customers to search, book, and manage room
                      reservations with real-time availability.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <li>• Room search and booking with availability calendar</li>
                      <li>• Customer profile management and booking history</li>
                      <li>• Payment processing and confirmation system</li>
                      <li>• Admin dashboard for hotel management</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        HTML/CSS
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        JavaScript
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        PHP
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        MySQL
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                          <FolderOpen className="w-5 h-5 text-red-600 dark:text-red-400" />
                        </div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">Multi-Chat System</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A real-time messaging application built with Advanced Java, supporting multiple concurrent users
                      with a modern GUI interface.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <li>• Real-time messaging with multiple chat rooms</li>
                      <li>• User authentication and profile management</li>
                      <li>• Private messaging and group chat features</li>
                      <li>• Message history and file sharing capabilities</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        Advanced Java
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Socket Programming
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Multithreading
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        JavaFX
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <motion.div
                whileHover={{
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                          <FolderOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <CardTitle className="text-lg text-slate-900 dark:text-white">Travel Booking System</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      A comprehensive travel booking platform that allows users to search, compare, and book flights,
                      hotels, and travel packages.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <li>• Flight and hotel search with price comparison</li>
                      <li>• User registration and booking management</li>
                      <li>• Payment gateway integration</li>
                      <li>• Travel package recommendations</li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="text-xs">
                        PHP
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        MySQL
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Bootstrap
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        JavaScript
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-slate-900 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Let's Connect</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborating on projects, or just having a
              conversation about technology. Feel free to reach out!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.7 }}
                      >
                        <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                      <p className="text-slate-600 dark:text-slate-400">alannn15021@gmail.com</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.7 }}
                      >
                        <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
                      <p className="text-slate-600 dark:text-slate-400">+251944300768</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-center">
                    <CardContent className="p-8">
                      <motion.div
                        className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.7 }}
                      >
                        <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Location</h3>
                      <p className="text-slate-600 dark:text-slate-400">Addis Ababa, Ethiopia</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400">© 2024 Alan Sultan. Thanks for visiting my portfolio!</p>
        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="fixed bottom-8 right-8 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-full shadow-lg z-50"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
