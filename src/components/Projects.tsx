"use client";

import { motion } from "framer-motion";
import { ExternalLink, Monitor, Database, Code2, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Classroom Occupancy System",
    category: "Full Stack · Python · Flask",
    description:
      "A real-time classroom management system that tracks room occupancy, manages bookings, and sends notifications — built with Flask and SQLite.",
    url: "https://classroom-management-system-d0xy.onrender.com",
    tags: ["Python", "Flask", "SQLite", "REST API"],
    icons: [Monitor, Database, Code2],
    gradient: "from-blue-600/20 via-cyan-500/10 to-transparent",
    accent: "blue",
    accentColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    glowColor: "group-hover:shadow-blue-500/10",
  },
];

export default function Projects() {
  return (
    <div className="relative bg-[#050505] text-white py-32 px-6 md:px-20 lg:px-32 z-20">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
            <Code2 className="w-4 h-4 text-cyan-400" />
            <span className="text-sm tracking-[0.2em] uppercase font-medium text-cyan-100">
              Selected Work
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative overflow-hidden bg-neutral-900/30 border border-white/5 hover:border-white/20 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[380px] transition-all duration-500 hover:shadow-2xl ${project.glowColor} cursor-pointer`}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              {/* Top Row: Icons + Arrow */}
              <div className="relative z-10 flex items-start justify-between mb-8">
                <div className="flex gap-3">
                  {project.icons.map((Icon, idx) => (
                    <div
                      key={idx}
                      className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-white/20 transition-all"
                    >
                      <Icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                    </div>
                  ))}
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 group-hover:bg-white/10 transition-all group-hover:rotate-12">
                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <p className="text-sm font-medium tracking-widest text-neutral-500 uppercase mb-3">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <p className="text-neutral-400 font-light leading-relaxed mb-8 text-base">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${project.accentColor} backdrop-blur-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Link */}
              <div className="relative z-10 mt-8 flex items-center gap-2 text-sm text-neutral-500 group-hover:text-white transition-colors">
                <ExternalLink className="w-4 h-4" />
                <span className="truncate">{project.url.replace("https://", "")}</span>
              </div>
            </motion.a>
          ))}

          {/* Coming Soon Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="group relative overflow-hidden bg-neutral-900/10 border border-dashed border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[380px]"
          >
            <div className="text-center">
              <div className="w-16 h-16 rounded-full border border-dashed border-white/20 flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl text-white/20">+</span>
              </div>
              <p className="text-neutral-600 text-lg font-light tracking-wider uppercase">
                More Projects
              </p>
              <p className="text-neutral-700 text-sm mt-2">Coming soon...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
