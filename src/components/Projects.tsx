import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ArrowRightCircle } from "lucide-react";

const soloProjects = [
  {
    type: "solo",
    title: "The Office co-working space",
    company: null,
    logo: "/images/theoffice-logo.png",
    img: "/images/theoffice-sample.png",
    url: "https://app.theofficeng.com/",
    desc: "A progressive web app for managing coworking memberships — enabling users to sign up, book workspaces, and manage subscriptions seamlessly. Designed with offline-first capabilities, push notifications, and mobile responsiveness to deliver a native-app-like experience across devices.",
    shortDesc:
      "A progressive web app for coworking memberships, enabling users to sign up, book spaces, and manage subscriptions seamlessly.",
    tech: [
      "React",
      "TypeScript",
      "Express.js",
      "Postgres",
      "Tailwind",
      "Firebase",
    ],
    details: {
      diagram: "/images/theoffice-sample.png",
      role: "Fullstack Engineer: frontend, backend, deployment.",
      impact: [
        "Simplified workspace booking and membership management",
        "Reduced admin workload by ~50%",
        "Integrated secure payments for bookings",
        "Improved member onboarding and retention",
      ],

    },
  },
];

const featuredProjects = [
  {
    type: "work",
    title: "Blockops Website",
    company: "Blockops",
    logo: "/images/blockops-logo.png",
    img: "/images/website-sample.png",
    url: "https://www.blockops.network",
    desc: "Marketing website for blockops network",
    shortDesc: "Marketing website for blockops network",
    tech: ["React", "TypeScript", "Tailwind", "GSAP", 'Framer motion'],
    details: {
      diagram: "/images/website-sample.png",
      role: "Frontend Engineer - Built Landing page and feature pages for marketing website",
      impact: [
        "Increased brand visibility with a modern, high-performing website",
        "Boosted user engagement through interactive animations (GSAP, Framer Motion)",
        "Improved conversion rates with optimized landing and feature pages",
        "Delivered a fully responsive design tailored for desktop and mobile",
        "Enhanced SEO performance with clean, semantic, and fast-loading code",
        "Strengthened Blockops’ online presence to attract new clients and partners"
      ],
    },
  },
  {
    type: "work",
    title: "Blockops Mission Control",
    company: "Blockops",
    logo: "/images/blockops-logo.png",
    img: "/images/mission-control-sample.png",
    url: "https://app.blockops.network",
    desc: "A unified dashboard to deploy and manage blockchain nodes seamlessly.",
    shortDesc: "Simplified blockchain node deployment.",
    tech: ["React", "TypeScript", "Redux Toolkit", "TailwindCSS"],
    details: {
      diagram: "/images/mission-control-sample.png",
      role: "Frontend lead – architected and built reusable React component library.",
      impact: [
        "Reduced EVM chain onboarding time by ~70% (2–4 weeks → 3–7 days)",
        "Streamlined complex node operations into a single dashboard",
        "Adopted across multiple blockchain providers",
        "Boosted onboarding experience for non-technical users",
        "Contributed to partnerships with SSV, Obol, Starknet, and Paycrest",
      ],
    },
  },
  {
    type: "work",
    title: "Blockops Telescope",
    company: "Blockops",
    logo: "/images/blockops-logo.png",
    img: "/images/telescope-sample.png",
    url: "https://app.blockops.network",
    desc: "Real-time monitoring tool for blockchain node health and performance.",
    shortDesc: "Realtime node monitoring & analytics.",
    tech: ["React", "TypeScript", "Redux Query", "TailwindCSS", "ECharts"],
    details: {
      diagram: "/images/telescope-sample.png",
      role: "Frontend lead – implemented optimized queries and realtime updates.",
      impact: [
        "Built real-time monitoring dashboards with Redux Toolkit Query to optimize requests",
        "Reduced redundant API calls and improved data-fetch performance by ~40%",
        "Enabled proactive incident detection and faster response through intuitive visualizations",
        "Increased transparency and trust with accessible system metrics",
        "Contributed to partnerships with SSV, Obol, Starknet, and Paycrest",
      ],

    },
  },
  {
    type: "work",
    title: "Blockops Pulsar",
    company: "Blockops",
    logo: "/images/blockops-logo.png",
    img: "/images/pulsar-sample.png",
    url: "https://app.blockops.network",
    desc: "Indexing engine for blockchain data to enable fast retrieval and queries.",
    shortDesc: "Accelerated blockchain data indexing and access.",
    tech: ["React", "TypeScript", "Redux", "Tailwind"],
    details: {
      diagram: "/images/pulsar-sample.png",
      role: "Frontend lead – Built frontend for managing indexing pipelines and results.",
      impact: [
        "Enabled seamless indexer deployment for faster time-to-first-index",
        "Simplified blockchain data access via structured, queryable outputs",
        "Reduced manual intervention in data retrieval and maintenance",
        "Unlocked cross-chain analytics and developer productivity",
        "Contributed to partnerships with Subquery",
      ],

    },
  },
];

export const Projects = React.memo(() => {
  const [activeProject, setActiveProject] = useState(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll] = useState(true);
  const directionRef = useRef(1); // 1 = down, -1 = up

  useEffect(() => {
    if (!autoScroll) return;
    const el = scrollRef.current;
    if (!el) return;

    const speed = 1; // px per tick
    const interval = setInterval(() => {
      if (!el) return;

      el.scrollTop += directionRef.current * speed;

      if (el.scrollTop >= el.scrollHeight - el.clientHeight) {
        directionRef.current = -1;
      }
      if (el.scrollTop <= 0) {
        directionRef.current = 1;
      }
    }, 20);

    return () => clearInterval(interval);
  }, [autoScroll]);

  return (
    <section
      id="projects"
      className="min-h-screen relative py-20 sm:py-24 md:py-28 lg:py-32 text-neutral-900"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 md:mb-20 text-center text-neutral-100"
        >
          💻 Solo & Featured Projects
        </motion.h2>

        {/* Project Grid */}
        <div className="flex flex-col xl:flex-row gap-8 sm:gap-10 justify-center items-start">
          {soloProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: -1 }}
              onClick={() => setActiveProject(project)}
              className="relative cursor-pointer rounded-2xl overflow-hidden shadow-2xl group 
              w-full xl:w-3/5 
              h-[400px] sm:h-[500px] md:h-[600px] 
              bg-white/20 backdrop-blur-md transition-all"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url(${project.img})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-white/10" />

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end h-full">
                <div className="flex items-center gap-3 mb-3">
                  {project.logo && (
                    <img
                      src={project.logo}
                      alt="logo"
                      className="h-7 w-7 sm:h-10 sm:w-10 p-1 sm:p-2 bg-white rounded-full border border-white/30 backdrop-blur"
                    />
                  )}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>
                <p className="text-neutral-200 text-xs sm:text-sm mb-4">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-cyan-700/30 text-cyan-200 border border-cyan-500/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover hint */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                  className="flex items-center gap-2 text-cyan-300 font-semibold text-xs sm:text-sm"
                >
                  <span>Click to Explore</span>
                  <ArrowRightCircle size={20} />
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Featured Projects */}
          <div className="relative w-full xl:w-2/5">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-cyan-300 mb-4">
              Featured Projects{" "}
              <span className="text-sm sm:text-base text-cyan-600">
                Blockops Network
              </span>
            </h2>
            <div
              ref={scrollRef}
              className="w-full h-[400px] sm:h-[500px] md:h-[550px] rounded-xl overflow-y-auto space-y-6 no-scrollbar bg-transparent"
            >
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveProject(project)}
                  className="w-full relative cursor-pointer rounded-2xl overflow-hidden shadow-none group 
                  h-[300px] sm:h-[350px] md:h-[400px] 
                  bg-white/20 backdrop-blur-md transition-all"
                >
                  {/* Background */}
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url(${project.img})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-white/10" />

                  {/* Content */}
                  <div className="relative z-10 p-4 sm:p-6 flex flex-col justify-end h-full">
                    <div className="flex items-center gap-3 mb-3">
                      {project.logo && (
                        <img
                          src={project.logo}
                          alt="logo"
                          className="h-7 w-7 sm:h-10 sm:w-10 p-1 sm:p-2 rounded-full border border-white/30 bg-white backdrop-blur"
                        />
                      )}
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-neutral-200 text-xs sm:text-sm mb-4">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-[10px] sm:text-xs rounded-full bg-cyan-700/30 text-cyan-200 border border-cyan-500/40"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/30">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.2 }}
                      className="flex items-center gap-2 text-cyan-300 font-semibold text-xs sm:text-sm"
                    >
                      <span>Click to Explore</span>
                      <ArrowRightCircle size={20} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999999] p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="max-h-[80vh] overflow-scroll no-scrollbar bg-neutral-900 text-white max-w-lg sm:max-w-2xl md:max-w-3xl w-full rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(34,211,238,0.3)] relative p-6 sm:p-8 border border-cyan-500/20"
              initial={{ scale: 0.7, y: 80, rotateX: -10, opacity: 0 }}
              animate={{ scale: 1, y: 0, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.7, y: 80, rotateX: -10, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-neutral-400 hover:text-cyan-400 transition-colors"
                onClick={() => setActiveProject(null)}
              >
                <X size={22} />
              </button>

              {/* Content with stagger animation */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
              >
                {/* Header */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="flex items-center gap-3 mb-4 sm:mb-6 mt-2"
                >
                  {activeProject.logo && (
                    <img
                      src={activeProject.logo}
                      alt="logo"
                      className="h-8 w-8 sm:h-10 sm:w-10 p-1 sm:p-2 rounded-full border border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.4)]"
                    />
                  )}
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    {activeProject.title}
                  </h3>
                </motion.div>

                {/* Diagram */}
                <motion.a
                  variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                  className="mb-4 sm:mb-6"
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={activeProject.details.diagram}
                    alt="diagram"
                    className="rounded-xl border border-cyan-500/30 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                  />
                </motion.a>

                {/* Role & Impact */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className="space-y-6 mb-8 mt-4"
                >
                  {/* Role */}
                  <div className="p-4 sm:p-5 rounded-xl border border-cyan-500/30 bg-neutral-800/50 backdrop-blur-sm">
                    <p className="text-sm sm:text-base text-neutral-300">
                      <span className="font-semibold text-cyan-400">🎯 Role:</span>{" "}
                      {activeProject.details.role}
                    </p>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-cyan-400 mb-3">
                      🚀 Impact
                    </h4>
                    <ul className="grid gap-3 sm:gap-4">
                      {activeProject.details.impact.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-neutral-800/60 border border-neutral-700/40 hover:border-cyan-500/40 transition-colors"
                        >
                          <span className="text-cyan-400 mt-1">✔️</span>
                          <span className="text-neutral-300 text-sm sm:text-base">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>


                {/* Website Link */}
                {activeProject.url && (
                  <motion.a
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm sm:text-base font-medium hover:from-cyan-400 hover:to-blue-400 transition-all shadow-lg hover:shadow-cyan-500/30"
                  >
                    Visit Site <ExternalLink size={16} />
                  </motion.a>
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
});
