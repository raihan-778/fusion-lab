"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  title: string;
  description: string;

  tech: string[];
  url?: string;
  live?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Astro Labs",
    description:
      "Conversion-focused landing page with A/B testing, analytics integration and sub-second load times.",
    tech: ["Next.js 14", "Tailwind CSS", "TypeScript", "Vercel Analytics"],
    live: "https://astro-labs.dev",
    gradient: "from-indigo-600 via-purple-600 to-cyan-600",
  },
  {
    id: 2,
    title: "Inventory OS",
    description:
      "Real-time SaaS dashboard featuring role-based access, advanced filters and live KPI charts.",
    tech: ["React", "Tailwind", "Framer Motion", "Recharts", "Prisma"],
    live: "https://inventory-os.vercel.app",
    gradient: "from-slate-700 via-slate-800 to-slate-900",
  },
  {
    id: 3,
    title: "E-Commerce Core",
    description:
      "Headless storefront with Stripe Checkout, edge caching and 98 Lighthouse performance.",
    tech: ["Next.js", "Stripe", "Edge Config", "Redis", "PostgreSQL"],
    live: "https://shop-demo-psi.vercel.app",
    gradient: "from-neutral-800 via-neutral-900 to-black",
  },
];

const skills = [
  { name: "Next.js 14", level: 96 },
  { name: "TypeScript", level: 94 },
  { name: "React", level: 98 },
  { name: "Tailwind CSS", level: 97 },
  { name: "Prisma ORM", level: 90 },
  { name: "PostgreSQL", level: 88 },
  { name: "Redis", level: 85 },
  { name: "Docker", level: 82 },
];

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -25]);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    const handleScroll = () => {
      const sections = ["hero", "projects", "skills", "about", "contact"];
      const scrollPos = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [cursorX, cursorY]);

  return (
    <div className="relative min-h-screen bg-black text-slate-100 overflow-x-hidden font-sans">
      {/* Dark Noise Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='.12'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Custom Cursor */}

      <motion.div
        className="fixed w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      <div
        className="fixed w-96 h-96 pointer-events-none z-50 transition-opacity duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Aurora Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-700/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-700/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Navigation */}
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center justify-between py-6 backdrop-blur-sm sticky top-0 z-40 bg-black/30"
        >
          <div className="text-2xl font-bold tracking-tighter">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              raihan
            </span>
            <span className="text-slate-500">.</span>
            <span className="text-slate-400">dev</span>
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {["projects", "skills", "about", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`capitalize transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-gradient-to-r after:from-indigo-400 after:to-purple-400 after:transition-all after:duration-300 ${
                  activeSection === item
                    ? "text-white after:w-full"
                    : "text-slate-400 hover:text-white after:w-0"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:shadow-lg hover:shadow-indigo-600/20 transition-all"
          >
            Hire Me <ArrowRight size={14} />
          </motion.a>
        </motion.nav>

        {/* Hero Section */}
        <section id="hero" className="py-20 md:py-32">
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
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium bg-slate-800 rounded-full border border-slate-700">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for select projects
                </div>

                <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter">
                  Full-Stack <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    Engineer
                  </span>
                </h1>

                <p className="text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
                  I architect high-performance web applications with obsessive
                  attention to detail. From database schema to pixel-perfect
                  UI—every line serves a purpose.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-600/20 transition-all"
                  >
                    View Work
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.a>

                  <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 rounded-lg font-semibold hover:bg-slate-800/50 transition-all"
                  >
                    <Download size={16} />
                    Resume
                  </motion.a>
                </div>

                <div className="flex items-center gap-6 text-sm">
                  <div className="flex -space-x-2">
                    {["React", "Next.js", "TypeScript"].map((tech) => (
                      <div
                        key={tech}
                        className="w-10 h-10 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-xs font-bold"
                      >
                        {tech.slice(0, 2)}
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-500">+5 more technologies</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              style={{ y: y2 }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-800">
                <div className="space-y-4 font-mono text-sm">
                  <div className="text-slate-500">`// current-stack.js`</div>
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">stack</span> = {"{"}
                  </div>
                  <div className="ml-4">
                    <span className="text-pink-400">frontend</span>: [
                    <span className="text-green-400">
                      &quot;Next.js 14&quot;, &quot;React&quot;,
                      &quot;TypeScript&quot;
                    </span>
                    ],
                  </div>
                  <div className="ml-4">
                    <span className="text-pink-400">styling</span>: [
                    <span className="text-green-400">
                      &quot;Tailwind CSS&quot;, &quot;Framer Motion&quot;
                    </span>
                    ],
                  </div>
                  <div className="ml-4">
                    <span className="text-pink-400">backend</span>: [
                    <span className="text-green-400">
                      &quot;PostgreSQL&quot;, &quot;Prisma&quot;,
                      &quot;Redis&quot;
                    </span>
                    ],
                  </div>
                  <div>
                    {"}"};<span className="text-purple-400">`//`</span> Always
                    optimizing...
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Selected{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Projects
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Production applications serving thousands of users with 99.9%
              uptime.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity`}
                />
                <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg mb-4 flex items-center justify-center border border-slate-700">
                    <span className="text-4xl font-bold text-slate-600">
                      {project.title[0]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">
                      {project.tech.length} technologies
                    </span>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      Live Demo <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Expertise
              </span>
            </h2>
            <p className="text-slate-400 text-lg">
              Deep expertise across the modern web stack.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-sm text-slate-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Me
                </span>
              </h2>

              <div className="space-y-4 text-slate-400">
                <p>
                  Former chemist turned full-stack engineer. My scientific
                  background gives me a unique approach to problem-solving—every
                  decision is backed by data and testing.
                </p>
                <p>
                  I specialize in building scalable applications that handle
                  millions of requests. Currently focused on Next.js 14, server
                  components, and edge computing.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm">4+ years in web development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm">
                    50+ production applications shipped
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-sm">Mentoring junior developers</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-800">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">
                      99.9%
                    </div>
                    <div className="text-sm text-slate-400 mt-1">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">
                      50ms
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      API Response
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">
                      98
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      Lighthouse
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-400">
                      1M+
                    </div>
                    <div className="text-sm text-slate-400 mt-1">
                      Requests Handled
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
              Let&apos;s Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Together
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Let&apos;s discuss how we can bring it to
              life.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Replace with your email service integration");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Project Details
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-indigo-600/20 transition-all"
              >
                Send Message
              </motion.button>
            </motion.form>

            <div className="flex justify-center items-center gap-6 mt-8">
              <a
                href="mailto:hello@raihan.dev"
                className="p-3 bg-slate-900 rounded-lg hover:bg-indigo-600 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 rounded-lg hover:bg-slate-700 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center border-t border-slate-800">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Raihan Arif. Built with Next.js 14 &
            Framer Motion.
          </p>
          <p className="text-sm text-slate-600 mt-2">
            Optimized for performance • Deployed on Vercel Edge Network
          </p>
        </footer>
      </div>
    </div>
  );
}
