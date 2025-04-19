"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Users,
  Zap,
  Target,
  Network,
  Lightbulb,
  Award,
  Clock,
  Calendar,
  BookOpen,
  Mail,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const containerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  const toggleTheme = () => setDarkMode(!darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const audience = [
    {
      icon: <Briefcase className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Placement-Ready Students",
      desc: "For final and pre-final year students preparing to land their dream job."
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Career Explorers",
      desc: "Early-career professionals who want clarity on career direction and goals."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />,
      title: "Growth Seekers",
      desc: "Anyone eager to assess their mindset, potential, and readiness to grow."
    }
  ];

  const team = [
    {
      name: "Krishna K",
      role: "Innovation & Execution Lead",
      college: "K.Ramakrishnan College of Engineering",
      department: "Computer Science and Business Systems",
      about:
        "Krishna turns big ideas into reality — from conceptualizing TalentRadar’s mission to ensuring its seamless execution. With a strong foundation in AI, development, and leadership, he drives both innovation and impact, making sure the team’s vision comes to life in practical and purposeful ways."
    },
    {
      name: "Sriswasthika A",
      role: "Data Analyst & Survey Designer",
      college: "K.Ramakrishnan College of Engineering",
      department: "Computer Science Engineering (CSE)",
      about:
        "Sriswasthika transforms thoughts into structured insights. She crafts intelligent questions and decodes participant data to uncover patterns that fuel strategic improvements in career readiness."
    },
    {
      name: "Sanjanah A",
      role: "Research Support & Outreach Strategist",
      college: "Thiagarajar College of Engineering, Madurai",
      department: "Data Science (DS)",
      about:
        "A data enthusiast and effective communicator, Sanjanah is the voice behind the outreach. She ensures the initiative connects with the right people and gains the visibility it deserves across campuses."
    },
    {
      name: "Sowmiya S",
      role: "System Designer & Visual Experience Coordinator",
      college: "K.Ramakrishnan College of Engineering",
      department: "Electronics and Communication Engineering (ECE)",
      about:
        "Sowmiya merges creativity with systems thinking. She focuses on user-friendly form layouts and visual clarity, ensuring every touchpoint of the TalentRadar experience is smooth, aesthetic, and impactful."
    }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        {/* Fixed Header */}
        <header className="fixed w-full top-0 z-50 bg-white dark:bg-gray-800 shadow">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            

            {/* Center: Logo */}
            <div className="text-2xl font-bold text-primary">TalentRadar</div>

            {/* Right: Navigation */}
            <nav className="hidden md:flex space-x-6 text-lg">
              <a href="#home" className="hover:text-indigo-600 transition">
                Home
              </a>
              <a href="#about" className="hover:text-indigo-600 transition">
                About Us
              </a>
              <a href="#vision" className="hover:text-indigo-600 transition">
                Vision
              </a>
              <a href="#team" className="hover:text-indigo-600 transon">
                Team
              </a>
              <a href="#contact" className="hover:text-indigo-600 transition">
                Contact
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-800 dark:text-gray-100 text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>
          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <nav className="md:hidden bg-white dark:bg-gray-800 px-4 pb-4 text-lg">
              <a href="#home" className="block py-1 hover:text-indigo-600 transition">
                Home
              </a>
              <a href="#about" className="block py-1 hover:text-indigo-600 transition">
                About Us
              </a>
              <a href="#vision" className="block py-1 hover:text-indigo-600 transition">
                Vision
              </a>
              <a href="#team" className="block py-1 hover:text-indigo-600 transition">
                Team
              </a>
              <a href="#contact" className="block py-1 hover:text-indigo-600 transition">
                Contact
              </a>
            </nav>
          )}
        </header>

        {/* Main Content */}
        <main className="pt-20" ref={containerRef}>
          {/* Hero Section with Parallax */}
          <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background dark:from-gray-800 to-accent dark:to-gray-700"
          >
            <motion.div
              className="absolute inset-0 w-full h-full bg-grid-white/[0.2] bg-grid"
              style={{
                y: useTransform(scrollYProgress, [0, 1], [0, 300]),
                opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0])
              }}
            />
            <div className="relative z-10 container mx-auto px-4 text-center">
              <motion.h1
                className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Join Our Unique
                <span className="text-primary block mt-2">Universe of Talent</span>
              </motion.h1>
              <motion.p
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                We're not just building a network—we're crafting an entire universe filled with brilliant minds and endless opportunities.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Button
                  size="lg"
                  className="text-lg group"
                  onClick={() =>
                    (window.location.href =
                      "https://forms.gle/4rCBfmwUQdoVssBV7")
                  }
                >
                  Sign Up Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </section>

          {/* About Us Section */}
          <section id="about" className="py-24 bg-background dark:bg-gray-800 relative overflow-hidden">
            <motion.div className="container mx-auto px-4" style={{ opacity, scale }}>
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  About Us
                </motion.h2>
                <motion.p
                  className="text-lg text-muted-foreground mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  We are a dedicated team of visionaries and professionals who have come together with a single goal: to create a universe where talent thrives. With deep industry insight and a relentless drive for innovation, we are planning and building a platform that redefines how opportunities are discovered.
                </motion.p>
                <motion.p
                  className="text-lg text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  At Talent Radar, our commitment is to ensure that every career opportunity reaches those who deserve it, forming a community that not only transforms careers but also fosters personal and professional growth.
                </motion.p>
              </div>
            </motion.div>
          </section>

          {/* Vision Section */}
          <section id="vision" className="py-24 bg-background dark:bg-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="container mx-auto px-4 relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="mb-12"
                >
                  <Sparkles className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vision</h2>
                </motion.div>
                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Imagine a universe where every career opportunity is within reach, where the brightest talents come together to share ideas, insights, and success stories. This is the vision behind Talent Radar—a realm where innovation meets collaboration, and each member plays a vital role in shaping the future of work.
                </motion.p>
                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  In this universe, boundaries are redefined, and every member is more than just a participant; you are an essential part of a movement that is revolutionizing the way opportunities are discovered and shared.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-24 bg-background dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                How It Works
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Zap className="h-12 w-12" />,
                    title: "Proactive Monitoring",
                    description:
                      "Our team monitors designated company career pages daily to bring you the latest opportunities."
                  },
                  {
                    icon: <Briefcase className="h-12 w-12" />,
                    title: "Instant Sharing",
                    description:
                      "Receive real-time alerts as soon as new positions are posted at your favorite companies."
                  },
                  {
                    icon: <Users className="h-12 w-12" />,
                    title: "Community-Driven",
                    description:
                      "Join a collaborative network of professionals sharing insights and opportunities."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-2">
                      <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Who Is This For Section */}
          <section className="bg-gradient-to-br from-indigo-50 dark:from-gray-700 to-white dark:to-gray-600 py-16 px-6">
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
                Who Is This For?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
                TalentRadar is designed to empower and guide individuals at different stages of their career journey.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {audience.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10 p-6 bg-indigo-100 dark:bg-gray-700 rounded-xl shadow-inner">
                <p className="text-indigo-800 dark:text-indigo-200 font-medium">
                  💡 <strong>Your responses</strong> may also lead to <strong>real hiring opportunities</strong> via TalentRadar if your goals align with what top recruiters are seeking.
                </p>
              </div>
            </div>
          </section>

          {/* Member Benefits Section */}
          <section className="py-24 bg-gradient-to-b from-background dark:from-gray-900 to-accent dark:to-gray-700">
            <div className="container mx-auto px-4">
              <motion.h2
                className="text-3xl sm:text-4xl font-bold text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Member Benefits
              </motion.h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Target className="h-8 w-8" />,
                    title: "Direct Access",
                    description: "Real-time updates on new job postings from top companies"
                  },
                  {
                    icon: <Network className="h-8 w-8" />,
                    title: "Networking",
                    description: "Connect with professionals and industry experts"
                  },
                  {
                    icon: <Lightbulb className="h-8 w-8" />,
                    title: "Industry Insights",
                    description: "Stay informed with latest market trends"
                  },
                  {
                    icon: <Award className="h-8 w-8" />,
                    title: "Personal Branding",
                    description: "Enhance your professional profile"
                  },
                  {
                    icon: <Clock className="h-8 w-8" />,
                    title: "Flexibility",
                    description: "Contribute at your own pace"
                  },
                  {
                    icon: <Calendar className="h-8 w-8" />,
                    title: "Exclusive Events",
                    description: "Access webinars and workshops"
                  },
                  {
                    icon: <BookOpen className="h-8 w-8" />,
                    title: "Resources",
                    description: "Access career development resources"
                  },
                  {
                    icon: <Users className="h-8 w-8" />,
                    title: "Growth",
                    description: "Earn recognition and advance your career"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                  >
                    <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg">
                      <div className="text-primary mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">{benefit.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Join Our Team Section */}
          <section className="py-24 bg-accent dark:bg-gray-700">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2
                  className="text-3xl sm:text-4xl font-bold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  Join Our Team
                </motion.h2>
                <motion.p
                  className="text-lg sm:text-xl text-muted-foreground mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Be part of our mission to connect talent with opportunity. Help us monitor career pages and share opportunities with the community.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Button
                    size="lg"
                    className="text-lg group"
                    onClick={() =>
                      (window.location.href =
                        "https://forms.gle/4rCBfmwUQdoVssBV7")
                    }
                  >
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="team" className="py-12 px-6 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Meet Our Teammates</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                {team.map((member, index) => (
                  <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow">
                    <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                    <p className="text-sm text-gray-500 italic">
                      {member.college} — {member.department}
                    </p>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">{member.about}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer / Contact Section */}
          <footer id="contact" className="bg-background dark:bg-gray-800 border-t dark:border-gray-700">
            <section className="py-24 bg-background dark:bg-gray-800">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="max-w-3xl mx-auto text-center"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Us</h2>
                  <p className="text-lg sm:text-xl text-muted-foreground mb-12">
                    We would love to hear from you—whether you have questions, ideas, or simply want to learn more about our unique universe. Connect with us and become part of a movement that's reshaping the future of talent.
                  </p>
                  <div className="flex justify-center">
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="flex items-center"
                    >
                      <Mail className="h-6 w-6 text-primary" />
                      <a href="mailto:syntellects@gmail.com" className="ml-2 text-lg hover:text-primary transition-colors">
                        syntellects@gmail.com
                      </a>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </section>
            <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Talent Radar. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
