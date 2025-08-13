"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  tech: string[];
  url?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Landing - Astro Labs",
    description:
      "Responsive landing page with CTA and analytics integration. Built with modern performance optimizations.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "Dashboard - Inventory",
    description:
      "SaaS-style dashboard with real-time charts, advanced filters, and beautiful data visualization.",
    tech: ["React", "Tailwind", "Framer Motion"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "E-commerce Front",
    description:
      "Modern product listing with seamless checkout flow and optimized user experience.",
    tech: ["Next.js", "Tailwind", "Stripe"],
    gradient: "from-emerald-500 to-teal-500",
  },
];

const skills = [
  { name: "React", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Tailwind", level: 92 },
  { name: "Prisma", level: 80 },
  { name: "Postgres", level: 75 },
  { name: "MongoDB", level: 78 },
  { name: "Framer Motion", level: 88 },
];

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -25]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Cursor Glow */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between py-6 backdrop-blur-sm"
        >
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Raihan Arif
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {["Projects", "About", "Skills", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </motion.nav>

        {/* Hero Section */}
        <motion.section className="py-20 md:py-32">
          <motion.div
            style={{ y: y1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-sm font-medium text-purple-400 mb-4 tracking-wider uppercase">
                  Full-Stack Developer
                </div>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                  Building
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Digital
                  </span>
                  <br />
                  Experiences
                </h1>
                <p className="text-xl text-slate-300 mb-8 max-w-lg leading-relaxed">
                  I craft production-ready web applications with cutting-edge
                  technologies. Passionate about clean code, stunning UI, and
                  exceptional user experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.a
                  href="#projects"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-center hover:shadow-xl transition-all duration-300"
                >
                  View My Work
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 border border-slate-600 rounded-full font-semibold text-center hover:bg-slate-800 transition-all duration-300"
                >
                  Let&apos;s Talk
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex items-center space-x-6 text-sm text-slate-400"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for freelance</span>
                </div>
                <div>📍 Dhaka, Bangladesh</div>
              </motion.div>
            </div>

            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2 text-sm font-mono">
                      <div className="text-purple-400">
                        const developer = {"{"}
                      </div>
                      <div className="ml-4 text-cyan-400">
                        name: &quot;Raihan Arif&quot;,
                      </div>
                      <div className="ml-4 text-green-400">
                        skills: [&quot;React&quot;, &quot;Next.js&quot;,
                        &quot;TypeScript&quot;],
                      </div>
                      <div className="ml-4 text-pink-400">
                        passion: &quot;Creating amazing UX&quot;,
                      </div>
                      <div className="ml-4 text-yellow-400">
                        coffee: &quot;☕ Always brewing&quot;
                      </div>
                      <div className="text-purple-400">{"}"};</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A showcase of my latest work, featuring modern web applications
              built with cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  }}
                ></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700 hover:border-slate-600 transition-all duration-300">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} rounded-xl mb-6 flex items-center justify-center`}
                  >
                    <div className="text-white font-bold text-2xl opacity-80">
                      {project.title.split(" ")[0]}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    View Project
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Skills
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section id="about" className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Me
                </span>
              </h2>
              <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                I&apos;m a passionate full-stack developer with a unique
                background in chemistry. This scientific foundation gives me a
                methodical approach to problem-solving and attention to detail
                that sets my work apart.
              </p>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                I specialize in creating beautiful, performant web applications
                using modern technologies. My goal is always to deliver
                exceptional user experiences through clean code and intuitive
                design.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full font-semibold"
              >
                Download Resume
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Chemistry Background</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-300">
                      3+ Years of Development
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300">
                      15+ Projects Completed
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-pink-400 rounded-full"></div>
                    <span className="text-slate-300">Always Learning</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Connect
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s discuss your next
              project.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700"
            >
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <div className="block text-sm font-medium text-slate-300 mb-2">
                      Your Name
                    </div>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                  <div>
                    <div className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </div>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-400 transition-colors"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="block text-sm font-medium text-slate-300 mb-2">
                    Project Details
                  </div>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:border-purple-400 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  onClick={() =>
                    alert(
                      "Thanks! Replace this handler with your email sending logic."
                    )
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message ✨
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center space-x-8 mt-8"
            >
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                  📧
                </div>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  💼
                </div>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
                  🐙
                </div>
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-slate-800">
          <p className="text-slate-400 mb-4">
            © {new Date().getFullYear()} Raihan Arif. Crafted with ❤️ using
            Next.js & Framer Motion
          </p>
          <div className="text-sm text-slate-500">
            &quot;Code is poetry written in logic&quot; - Building the future,
            one pixel at a time.
          </div>
        </footer>
      </div>
    </div>
  );
}
