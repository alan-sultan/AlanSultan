"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, Mail, Phone, MapPin, Code, GraduationCap, User, FolderOpen, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "education", "skills", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

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

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-cyan-500/20"
        style={{
          boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-2xl font-bold text-white"
              style={{
                textShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
              }}
              whileHover={{ scale: 1.05 }}
              animate={{
                textShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.8)",
                  "0 0 30px rgba(6, 182, 212, 1)",
                  "0 0 20px rgba(6, 182, 212, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Alan Sultan
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["About", "Experience", "Education", "Skills", "Projects", "Contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? "text-cyan-400" : "text-white/70 hover:text-cyan-300"
                  }`}
                  style={{
                    textShadow: activeSection === item.toLowerCase() ? "0 0 10px rgba(6, 182, 212, 0.8)" : "none",
                  }}
                  whileHover={{
                    scale: 1.1,
                    textShadow: "0 0 15px rgba(6, 182, 212, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative z-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 40px rgba(6, 182, 212, 0.8)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              whileHover={{
                textShadow: "0 0 60px rgba(6, 182, 212, 1)",
                scale: 1.05,
              }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 60px rgba(236, 72, 153, 0.8)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Alan Sultan
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl text-cyan-300 mb-8 h-12"
              style={{
                textShadow: "0 0 20px rgba(6, 182, 212, 0.6)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <TypewriterText text="Software Engineer" />
            </motion.div>

            <motion.p
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto"
              style={{
                textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Passionate about creating efficient, scalable software solutions and continuous learning in dynamic
              environments.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-400 hover:to-pink-400 text-white px-8 py-3 border-0"
                  style={{
                    boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)",
                  }}
                  onClick={() => scrollToSection("projects")}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  View My Work
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/10 px-8 py-3 hover:border-cyan-300"
                  style={{
                    boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)",
                  }}
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
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          style={{
            filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.6))",
          }}
        >
          <ChevronDown className="w-8 h-8 text-cyan-300" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/60 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 30px rgba(6, 182, 212, 0.8)",
              }}
            >
              About Me
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 mx-auto mb-8"
              style={{
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.8)",
                  "0 0 30px rgba(236, 72, 153, 0.8)",
                  "0 0 20px rgba(6, 182, 212, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className="bg-gray-900/50 backdrop-blur-xl border-cyan-500/30 text-white"
                style={{
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.2)",
                }}
              >
                <CardContent className="p-8">
                  <p
                    className="text-lg leading-relaxed mb-6"
                    style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.3)" }}
                  >
                    Versatile Software Engineer with expertise in C++, Java, Python, HTML, and CSS. Skilled in
                    Object-Oriented Programming (OOP) and Data Structures and Algorithms (DSA), with a strong focus on
                    developing efficient, scalable, and user-focused software solutions.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.3)" }}>
                    Passionate about continuous learning and leveraging technical skills to deliver high-quality results
                    in dynamic environments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <motion.div
                className="flex items-center space-x-4 text-white"
                whileHover={{ x: 10, textShadow: "0 0 10px rgba(6, 182, 212, 0.8)" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <MapPin
                    className="w-6 h-6 text-cyan-400"
                    style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))" }}
                  />
                </motion.div>
                <span className="text-lg">Addis Ababa, Ethiopia</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4 text-white"
                whileHover={{ x: 10, textShadow: "0 0 10px rgba(6, 182, 212, 0.8)" }}
              >
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <Phone
                    className="w-6 h-6 text-cyan-400"
                    style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))" }}
                  />
                </motion.div>
                <span className="text-lg">+251944300768</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-4 text-white"
                whileHover={{ x: 10, textShadow: "0 0 10px rgba(6, 182, 212, 0.8)" }}
              >
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
                  <Mail
                    className="w-6 h-6 text-cyan-400"
                    style={{ filter: "drop-shadow(0 0 8px rgba(6, 182, 212, 0.8))" }}
                  />
                </motion.div>
                <span className="text-lg">alannn15021@gmail.com</span>
              </motion.div>

              <div className="pt-6">
                <h3
                  className="text-xl font-semibold text-white mb-4"
                  style={{ textShadow: "0 0 10px rgba(6, 182, 212, 0.6)" }}
                >
                  Languages
                </h3>
                <div className="space-y-3">
                  <motion.div className="flex justify-between items-center" whileHover={{ scale: 1.05 }}>
                    <span className="text-white">English</span>
                    <Badge
                      variant="secondary"
                      className="bg-emerald-600 text-white"
                      style={{ boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)" }}
                    >
                      Fluent
                    </Badge>
                  </motion.div>
                  <motion.div className="flex justify-between items-center" whileHover={{ scale: 1.05 }}>
                    <span className="text-white">Amharic</span>
                    <Badge
                      variant="secondary"
                      className="bg-emerald-600 text-white"
                      style={{ boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)" }}
                    >
                      Fluent
                    </Badge>
                  </motion.div>
                  <motion.div className="flex justify-between items-center" whileHover={{ scale: 1.05 }}>
                    <span className="text-white">Arabic</span>
                    <Badge
                      variant="secondary"
                      className="bg-yellow-600 text-white"
                      style={{ boxShadow: "0 0 15px rgba(234, 179, 8, 0.6)" }}
                    >
                      Basics
                    </Badge>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 30px rgba(236, 72, 153, 0.8)",
              }}
            >
              Experience
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-pink-400 to-cyan-400 mx-auto mb-8"
              style={{
                boxShadow: "0 0 20px rgba(236, 72, 153, 0.8)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(236, 72, 153, 0.8)",
                  "0 0 30px rgba(6, 182, 212, 0.8)",
                  "0 0 20px rgba(236, 72, 153, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card
                className="bg-gray-900/50 backdrop-blur-xl border-pink-500/30 text-white mb-8"
                style={{
                  boxShadow: "0 0 40px rgba(236, 72, 153, 0.3)",
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-lg flex items-center justify-center"
                      style={{
                        boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(236, 72, 153, 0.6)",
                          "0 0 30px rgba(6, 182, 212, 0.6)",
                          "0 0 20px rgba(236, 72, 153, 0.6)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Code className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl" style={{ textShadow: "0 0 10px rgba(236, 72, 153, 0.8)" }}>
                        A2SV | Africa to Silicon Valley
                      </CardTitle>
                      <CardDescription
                        className="text-pink-300"
                        style={{ textShadow: "0 0 8px rgba(236, 72, 153, 0.6)" }}
                      >
                        Software Engineering Student • 1 Year
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-lg leading-relaxed mb-4"
                    style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.3)" }}
                  >
                    Currently learning at A2SV, a nonprofit organization dedicated to building a sustainable tech
                    ecosystem in Africa by empowering the continent's brightest minds.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4
                        className="font-semibold text-pink-300 mb-2"
                        style={{ textShadow: "0 0 8px rgba(236, 72, 153, 0.6)" }}
                      >
                        Training Highlights:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• World-class software engineering skills</li>
                        <li>• Advanced problem-solving techniques</li>
                        <li>• Industry best practices</li>
                      </ul>
                    </div>
                    <div>
                      <h4
                        className="font-semibold text-cyan-300 mb-2"
                        style={{ textShadow: "0 0 8px rgba(6, 182, 212, 0.6)" }}
                      >
                        Global Connections:
                      </h4>
                      <ul className="space-y-1 text-sm">
                        <li>• Google, Palantir, Databricks</li>
                        <li>• Bloomberg, Meta partnerships</li>
                        <li>• Innovation incubator access</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-white/80">
                    A2SV has trained over 800 students from 20 African countries, bridging the gap between talent and
                    opportunity while driving technological advancement across the continent.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card
                className="bg-gray-900/50 backdrop-blur-xl border-emerald-500/30 text-white"
                style={{
                  boxShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center"
                      style={{
                        boxShadow: "0 0 20px rgba(16, 185, 129, 0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(16, 185, 129, 0.6)",
                          "0 0 30px rgba(20, 184, 166, 0.6)",
                          "0 0 20px rgba(16, 185, 129, 0.6)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <User className="w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl" style={{ textShadow: "0 0 10px rgba(16, 185, 129, 0.8)" }}>
                        Section Representative
                      </CardTitle>
                      <CardDescription
                        className="text-emerald-300"
                        style={{ textShadow: "0 0 8px rgba(16, 185, 129, 0.6)" }}
                      >
                        Student Leadership Role
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-emerald-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <span>
                        Act as the primary point of communication between students and faculty, addressing concerns,
                        suggestions, and feedback
                      </span>
                    </motion.li>
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-emerald-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      />
                      <span>
                        Share updates, announcements, and important information with classmates promptly and accurately
                      </span>
                    </motion.li>
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-emerald-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(16, 185, 129, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      />
                      <span>
                        Organize and assist in academic and extracurricular activities, ensuring active participation
                        and smooth execution
                      </span>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-black/60 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 30px rgba(59, 130, 246, 0.8)",
              }}
            >
              Education
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"
              style={{
                boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.8)",
                  "0 0 30px rgba(147, 51, 234, 0.8)",
                  "0 0 20px rgba(59, 130, 246, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card
                className="bg-gray-900/50 backdrop-blur-xl border-blue-500/30 text-white"
                style={{
                  boxShadow: "0 0 50px rgba(59, 130, 246, 0.4)",
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                      style={{
                        boxShadow: "0 0 25px rgba(59, 130, 246, 0.6)",
                      }}
                      animate={{
                        rotate: [0, 360],
                        boxShadow: [
                          "0 0 25px rgba(59, 130, 246, 0.6)",
                          "0 0 35px rgba(147, 51, 234, 0.6)",
                          "0 0 25px rgba(59, 130, 246, 0.6)",
                        ],
                      }}
                      transition={{
                        rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                        boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                      }}
                    >
                      <GraduationCap className="w-8 h-8 text-white" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-2xl" style={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.8)" }}>
                        Addis Ababa Science and Technology University
                      </CardTitle>
                      <CardDescription
                        className="text-blue-300"
                        style={{ textShadow: "0 0 8px rgba(59, 130, 246, 0.6)" }}
                      >
                        Bachelor Degree in Software Engineering
                      </CardDescription>
                      <CardDescription className="text-white/60">2022 - 2027</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.3)" }}>
                    Currently pursuing a comprehensive Software Engineering degree, focusing on modern development
                    practices, algorithms, and software architecture principles.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 30px rgba(168, 85, 247, 0.8)",
              }}
            >
              Skills
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"
              style={{
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.8)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(168, 85, 247, 0.8)",
                  "0 0 30px rgba(236, 72, 153, 0.8)",
                  "0 0 20px rgba(168, 85, 247, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className="bg-gray-900/50 backdrop-blur-xl border-purple-500/30 text-white"
                style={{
                  boxShadow: "0 0 40px rgba(168, 85, 247, 0.3)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    >
                      <Code
                        className="w-6 h-6 text-purple-400"
                        style={{ filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.8))" }}
                      />
                    </motion.div>
                    <span style={{ textShadow: "0 0 10px rgba(168, 85, 247, 0.8)" }}>Technical Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { name: "C++", level: 85, color: "from-cyan-400 to-blue-400" },
                    { name: "Java", level: 80, color: "from-orange-400 to-red-400" },
                    { name: "Python", level: 90, color: "from-green-400 to-emerald-400" },
                    { name: "HTML/CSS", level: 85, color: "from-pink-400 to-purple-400" },
                    { name: "Data Structures & Algorithms", level: 88, color: "from-yellow-400 to-orange-400" },
                    { name: "Object-Oriented Programming", level: 85, color: "from-indigo-400 to-purple-400" },
                  ].map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-purple-300" style={{ textShadow: "0 0 8px rgba(168, 85, 247, 0.6)" }}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress value={skill.level} className="h-3 bg-gray-800" />
                        <motion.div
                          className={`absolute top-0 left-0 h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                          style={{
                            width: `${skill.level}%`,
                            boxShadow: `0 0 20px rgba(168, 85, 247, 0.6)`,
                          }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className="bg-gray-900/50 backdrop-blur-xl border-emerald-500/30 text-white"
                style={{
                  boxShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-2">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <User
                        className="w-6 h-6 text-emerald-400"
                        style={{ filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.8))" }}
                      />
                    </motion.div>
                    <span style={{ textShadow: "0 0 10px rgba(16, 185, 129, 0.8)" }}>Soft Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: "Teamwork", color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-400/30" },
                      {
                        name: "Time Management",
                        color: "from-green-500/20 to-emerald-500/20",
                        border: "border-green-400/30",
                      },
                      {
                        name: "Leadership",
                        color: "from-purple-500/20 to-pink-500/20",
                        border: "border-purple-400/30",
                      },
                      {
                        name: "Effective Communication",
                        color: "from-orange-500/20 to-red-500/20",
                        border: "border-orange-400/30",
                      },
                      {
                        name: "Critical Thinking",
                        color: "from-yellow-500/20 to-orange-500/20",
                        border: "border-yellow-400/30",
                      },
                      {
                        name: "Problem Solving",
                        color: "from-indigo-500/20 to-purple-500/20",
                        border: "border-indigo-400/30",
                      },
                    ].map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)",
                        }}
                        className={`bg-gradient-to-r ${skill.color} p-4 rounded-lg border ${skill.border} text-center cursor-pointer`}
                        style={{
                          boxShadow: "0 0 15px rgba(16, 185, 129, 0.3)",
                        }}
                      >
                        <span className="font-medium">{skill.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black/60 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 30px rgba(251, 146, 60, 0.8)",
              }}
            >
              Projects
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-8"
              style={{
                boxShadow: "0 0 20px rgba(251, 146, 60, 0.8)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(251, 146, 60, 0.8)",
                  "0 0 30px rgba(239, 68, 68, 0.8)",
                  "0 0 20px rgba(251, 146, 60, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card
                className="bg-gray-900/50 backdrop-blur-xl border-orange-500/30 text-white h-full"
                style={{
                  boxShadow: "0 0 40px rgba(251, 146, 60, 0.3)",
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center"
                      style={{
                        boxShadow: "0 0 20px rgba(251, 146, 60, 0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(251, 146, 60, 0.6)",
                          "0 0 30px rgba(239, 68, 68, 0.6)",
                          "0 0 20px rgba(251, 146, 60, 0.6)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <FolderOpen className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl" style={{ textShadow: "0 0 10px rgba(251, 146, 60, 0.8)" }}>
                      Inventory Management System
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-orange-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(251, 146, 60, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <span>
                        Manage product listings with features for adding, updating, and categorizing items, including
                        images, descriptions, and pricing
                      </span>
                    </motion.li>
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-orange-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(251, 146, 60, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      />
                      <span>
                        Streamline the processing of customer orders with functionalities for tracking, updating order
                        statuses, and managing returns
                      </span>
                    </motion.li>
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-orange-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(251, 146, 60, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      />
                      <span>
                        Maintain a customer database with details like purchase history, preferences, and feedback to
                        enhance the shopping experience
                      </span>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <Card
                className="bg-gray-900/50 backdrop-blur-xl border-blue-500/30 text-white h-full"
                style={{
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
                }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center"
                      style={{
                        boxShadow: "0 0 20px rgba(59, 130, 246, 0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(59, 130, 246, 0.6)",
                          "0 0 30px rgba(147, 51, 234, 0.6)",
                          "0 0 20px rgba(59, 130, 246, 0.6)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <FolderOpen className="w-6 h-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl" style={{ textShadow: "0 0 10px rgba(59, 130, 246, 0.8)" }}>
                      Hotel Room Reservation System
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-blue-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(59, 130, 246, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <span>
                        Enable customers to search, view, and book available rooms with details like pricing, amenities,
                        and photos
                      </span>
                    </motion.li>
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-blue-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(59, 130, 246, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                      />
                      <span>Provide a real-time calendar to manage room availability and prevent double bookings</span>
                    </motion.li>
                    <motion.li className="flex items-start space-x-3" whileHover={{ x: 5 }}>
                      <motion.div
                        className="w-2 h-2 bg-blue-400 rounded-full mt-2"
                        style={{ boxShadow: "0 0 8px rgba(59, 130, 246, 0.8)" }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                      />
                      <span>
                        Maintain customer profiles, booking history, and preferences for personalized service and
                        loyalty programs
                      </span>
                    </motion.li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{
                textShadow: "0 0 30px rgba(6, 182, 212, 0.8)",
              }}
            >
              Get In Touch
            </h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"
              style={{
                boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)",
              }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.8)",
                  "0 0 30px rgba(147, 51, 234, 0.8)",
                  "0 0 20px rgba(6, 182, 212, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <p
              className="text-xl text-white/90 max-w-2xl mx-auto"
              style={{ textShadow: "0 0 10px rgba(255, 255, 255, 0.3)" }}
            >
              I'm always open to discussing new opportunities and interesting projects. Let's connect!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <Card
                  className="bg-gray-900/50 backdrop-blur-xl border-cyan-500/30 text-white text-center"
                  style={{
                    boxShadow: "0 0 40px rgba(6, 182, 212, 0.3)",
                  }}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        boxShadow: "0 0 25px rgba(6, 182, 212, 0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 25px rgba(6, 182, 212, 0.6)",
                          "0 0 35px rgba(59, 130, 246, 0.6)",
                          "0 0 25px rgba(6, 182, 212, 0.6)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Mail className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ textShadow: "0 0 10px rgba(6, 182, 212, 0.8)" }}
                    >
                      Email
                    </h3>
                    <p className="text-white/80">alannn15021@gmail.com</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <Card
                  className="bg-gray-900/50 backdrop-blur-xl border-emerald-500/30 text-white text-center"
                  style={{
                    boxShadow: "0 0 40px rgba(16, 185, 129, 0.3)",
                  }}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        boxShadow: "0 0 25px rgba(16, 185, 129, 0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 25px rgba(16, 185, 129, 0.6)",
                          "0 0 35px rgba(20, 184, 166, 0.6)",
                          "0 0 25px rgba(16, 185, 129, 0.6)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <Phone className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ textShadow: "0 0 10px rgba(16, 185, 129, 0.8)" }}
                    >
                      Phone
                    </h3>
                    <p className="text-white/80">+251944300768</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -10 }}
              >
                <Card
                  className="bg-gray-900/50 backdrop-blur-xl border-pink-500/30 text-white text-center"
                  style={{
                    boxShadow: "0 0 40px rgba(236, 72, 153, 0.3)",
                  }}
                >
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{
                        boxShadow: "0 0 25px rgba(236, 72, 153, 0.6)",
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 25px rgba(236, 72, 153, 0.6)",
                          "0 0 35px rgba(244, 63, 94, 0.6)",
                          "0 0 25px rgba(236, 72, 153, 0.6)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    >
                      <MapPin className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ textShadow: "0 0 10px rgba(236, 72, 153, 0.8)" }}
                    >
                      Location
                    </h3>
                    <p className="text-white/80">Addis Ababa, Ethiopia</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/80 border-t border-cyan-500/20 relative z-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60" style={{ textShadow: "0 0 5px rgba(255, 255, 255, 0.2)" }}>
            © 2025 Alan Sultan. Built with passion and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  )
}

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text])

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        className="inline-block w-1 h-8 bg-cyan-400 ml-1"
        style={{
          filter: "drop-shadow(0 0 10px rgba(6, 182, 212, 0.8))",
        }}
      />
    </span>
  )
}
