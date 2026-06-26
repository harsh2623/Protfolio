"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, KeyRound, CheckCircle2, Monitor, Cpu, Figma } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Classroom Occupancy Management System",
      subtitle: "Real-Time Room Status & Administrative Portal",
      desc: "A production-grade, full-stack application designed to monitor and manage classroom occupancy in real-time. Created to optimize educational facility usage, the system enables administrators to track occupied versus vacant rooms, manage schedule allocations, and update credentials via a secure login dashboard.",
      screenshot: "/Protfolio/classroom-occupancy.png",
      demoUrl: "https://classroom-management-system-d0xy.onrender.com",
      type: "Web Application",
      techStack: [
        { name: "React", color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" },
        { name: "Tailwind CSS", color: "bg-sky-500/10 text-sky-400 border-sky-500/20" },
        { name: "Node.js", color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" },
        { name: "Express", color: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20" },
        { name: "Render", color: "bg-purple-500/10 text-purple-400 border-purple-500/20" }
      ],
      features: [
        "Role-Based Access Control (Admin/User states)",
        "Interactive Room occupancy table displaying live status",
        "Real-time UI updates reflecting database changes",
        "Robust REST APIs for status management and auth verification",
      ],
      isWeb: true,
      credentials: {
        username: "admin",
        password: "admin123"
      }
    },
    {
      title: "OrbitX Space Adventure Portal",
      subtitle: "Web & Mobile Login/Signup UI/UX Concept",
      desc: "A premium, cosmic-themed interface designed for an immersive space exploration platform. Designed in Figma with a focus on rich aesthetics, featuring deep space imagery, an astronaut silhouette, and custom atmospheric glows. Completely optimized for both desktop and mobile viewports.",
      screenshot: "/Protfolio/orbitx-design.png",
      demoUrl: "https://www.figma.com/design/hcadrxolcvPeawOxtKQoyw/Login---SignUp-Web---Mobile-App-Design--Community-?node-id=0-1&t=c5GlCJUVaWl58Iee-1",
      type: "UI/UX Design",
      techStack: [
        { name: "Figma", color: "bg-orange-500/10 text-orange-400 border-orange-500/20" },
        { name: "UI/UX Design", color: "bg-rose-500/10 text-rose-400 border-rose-500/20" },
        { name: "Responsive Layouts", color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" },
        { name: "Space Aesthetics", color: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" },
        { name: "Figma Community", color: "bg-blue-500/10 text-blue-400 border-blue-500/20" }
      ],
      features: [
        "Complete Desktop (MacBook Pro 14\") & Mobile (iPhone 14 Pro Max) viewport layouts",
        "Stunning galactic space background with high-fidelity asset rendering",
        "Pre-built form elements (inputs, social login buttons, logo, and active hover state indications)",
        "Custom design system with scalable typography and color palettes",
      ],
      isWeb: false,
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-[#050505] text-white py-32 px-6 overflow-hidden z-20">
      
      {/* Enhanced Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto flex flex-col gap-24 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
            <Cpu className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-sm tracking-[0.2em] uppercase font-bold text-purple-200">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6">
            What I&apos;ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">Built & Designed</span>
          </h2>
          <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
            A premium showcase of digital solutions bridging full-stack engineering, custom Figma design systems, and seamless client experiences.
          </p>
        </motion.div>

        {/* Projects Stack */}
        <div className="flex flex-col gap-20">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 }}
              className="group relative overflow-hidden bg-neutral-900/30 backdrop-blur-xl border border-white/10 hover:border-purple-500/30 rounded-[3rem] transition-all duration-700 shadow-[0_0_40px_-15px_rgba(0,0,0,0.7)] hover:shadow-[0_0_80px_-15px_rgba(168,85,247,0.2)]"
            >
              {/* Glass Overlay Glow inside card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 p-8 md:p-12 lg:p-16 items-center relative z-10">
                
                {/* Device Mockup */}
                <div className={`lg:col-span-6 w-full flex flex-col gap-4 ${idx % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
                  {/* Browser / Canvas Mockup Container */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-950/90 shadow-2xl transition-all duration-700 group-hover:scale-[1.03] group-hover:border-purple-500/40 group-hover:shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                    
                    {/* Top Bar (Browser mock style) */}
                    <div className="h-10 px-4 bg-neutral-900/80 flex items-center gap-2 border-b border-white/5 relative backdrop-blur-md">
                      <div className="flex gap-2 z-10">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
                        <span className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
                        <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
                      </div>
                      {/* URL / Info Bar */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-neutral-950/80 text-[10px] text-neutral-400 px-6 py-1.5 rounded-md border border-white/5 truncate max-w-[280px] font-mono shadow-inner">
                          {project.isWeb ? "classroom-management-system.onrender.com" : "figma.com/design/orbitx-portal"}
                        </div>
                      </div>
                    </div>

                    {/* Screenshot Area */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      {/* Overlay gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className={`lg:col-span-6 flex flex-col justify-center h-full ${idx % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="inline-block w-fit px-3 py-1 rounded-full border border-purple-500/20 bg-purple-500/10 text-xs font-bold tracking-widest text-purple-300 uppercase mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                    {project.type}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400 group-hover:to-purple-300 transition-all duration-500 leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-lg text-neutral-300 font-light leading-relaxed mb-8">
                    {project.desc}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.techStack.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className={`px-4 py-1.5 text-xs font-bold tracking-wide rounded-full border backdrop-blur-md transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Key Features List */}
                  <div className="flex flex-col gap-4 mb-10">
                    {project.features.map((feat, featIdx) => (
                      <div key={featIdx} className="flex items-start gap-3 group/feat">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 drop-shadow-[0_0_8px_rgba(52,211,153,0.6)] transition-transform duration-300 group-hover/feat:scale-125" />
                        <span className="text-base text-neutral-200 font-medium transition-colors duration-300 group-hover/feat:text-white">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Call-to-Actions & Credentials Panel */}
                  <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center border-t border-white/10 pt-8">
                    
                    {/* Live Link Button */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:-translate-y-1 active:scale-95"
                    >
                      {project.isWeb ? <Monitor className="w-5 h-5" /> : <Figma className="w-5 h-5" />}
                      {project.isWeb ? "Visit Live Site" : "Open in Figma"}
                      <ExternalLink className="w-5 h-5 ml-1" />
                    </a>

                    {/* Conditional Credentials Badge */}
                    {project.isWeb && project.credentials && (
                      <div className="flex flex-col justify-center px-5 py-2.5 border border-purple-500/20 bg-purple-500/5 rounded-2xl backdrop-blur-xl hover:bg-purple-500/10 transition-colors duration-300">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-purple-300 mb-1.5">
                          <KeyRound className="w-4 h-4 text-purple-400" />
                          Default Admin Access
                        </div>
                        <div className="flex items-center gap-3 text-sm text-neutral-300 font-mono">
                          <div>
                            User: <span className="text-white font-semibold select-all">{project.credentials.username}</span>
                          </div>
                          <div className="w-px h-4 bg-white/20" />
                          <div>
                            Pass: <span className="text-white font-semibold select-all">{project.credentials.password}</span>
                          </div>
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
