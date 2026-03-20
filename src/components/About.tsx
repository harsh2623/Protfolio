"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Mail, Video, Code, BrainCircuit, PenTool, Sparkles, Figma } from "lucide-react";

export default function About() {
  const skills = [
    { icon: <Video className="w-8 h-8 text-white relative z-10" />, title: "Video Editing", desc: "Shorts, Reels, YouTube Content", color: "from-blue-500/20 to-cyan-500/20", border: "hover:border-blue-500/50" },
    { icon: <Code className="w-8 h-8 text-white relative z-10" />, title: "Programming", desc: "Python, HTML, CSS, XML", color: "from-emerald-500/20 to-teal-500/20", border: "hover:border-emerald-500/50" },
    { icon: <BrainCircuit className="w-8 h-8 text-white relative z-10" />, title: "AI & ML", desc: "Machine Learning Fundamentals", color: "from-purple-500/20 to-pink-500/20", border: "hover:border-purple-500/50" },
    { icon: <PenTool className="w-8 h-8 text-white relative z-10" />, title: "Creative", desc: "Visual Storytelling", color: "from-orange-500/20 to-red-500/20", border: "hover:border-orange-500/50" },
    { icon: <Sparkles className="w-8 h-8 text-white relative z-10" />, title: "Social Media", desc: "Content Optimization", color: "from-yellow-500/20 to-amber-500/20", border: "hover:border-yellow-500/50" },
    { icon: <Figma className="w-8 h-8 text-white relative z-10" />, title: "Figma", desc: "UI/UX Design & Prototyping", color: "from-rose-500/20 to-pink-500/20", border: "hover:border-rose-500/50" },
  ];

  return (
    <div className="relative min-h-screen bg-[#050505] text-white py-32 px-6 overflow-hidden rounded-t-[3rem] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.8)] z-20">
      
      {/* Background Glow */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[150px] rounded-full point-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 blur-[150px] rounded-full point-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        
        {/* Intro Hero inside About */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm tracking-[0.2em] uppercase font-medium text-purple-100">The Vision</span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight tracking-tighter mb-8">
            Merging <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Cinematic Creativity</span> with <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Advanced AI</span>.
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed">
            I am on a mission to build a successful career in video creation, combining my engineering knowledge in AI & ML to craft impactful storytelling that leaves a mark.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column: Education & Contact */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="group relative overflow-hidden bg-neutral-900/30 border border-white/5 hover:border-white/20 p-10 rounded-[2.5rem] transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-3xl font-semibold mb-3">B.E. Computer Science</h3>
                <p className="text-xl text-neutral-400 font-light mb-8">Specializing in AI & Machine Learning</p>
                
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <p className="text-white font-medium text-lg">Viva Institute of Technology</p>
                  <div className="inline-block mt-3 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold uppercase tracking-wider">
                    Currently Pursuing
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/30 border border-white/5 p-10 rounded-[2.5rem] flex items-center justify-between group cursor-pointer hover:bg-neutral-800/40 transition-colors">
              <div>
                <p className="text-sm font-medium tracking-[0.2em] text-neutral-500 uppercase mb-2">Let&apos;s Talk</p>
                <a href="mailto:hp1170828@gmail.com" className="text-xl md:text-2xl font-light group-hover:text-purple-400 transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-px after:bg-purple-400 group-hover:after:w-full after:transition-all after:duration-300">
                  hp1170828@gmail.com
                </a>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:rotate-12 transition-all">
                <Mail className="w-5 h-5 text-neutral-400 group-hover:text-purple-400" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Creative Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {skills.map((skill, i) => (
              <div 
                key={i} 
                className={`group relative overflow-hidden bg-neutral-900/20 border border-white/5 ${skill.border} transition-all duration-500 p-8 rounded-[2rem] flex flex-col justify-between ${i === 0 ? 'sm:col-span-2 sm:flex-row sm:items-center' : ''}`}
              >
                {/* Background gradient reveal */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                
                <div className={`relative z-10 ${i === 0 ? 'sm:mb-0 mb-6' : 'mb-8'}`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {skill.icon}
                  </div>
                </div>
                
                <div className="relative z-10 text-right sm:text-left">
                  {i === 0 && <div className="sm:text-right hidden sm:block">
                    <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">{skill.title}</h3>
                    <p className="text-neutral-400 font-light">{skill.desc}</p>
                  </div>}
                  
                  <div className={`${i === 0 ? 'sm:hidden block text-left' : 'text-left'}`}>
                    <h3 className="text-xl font-semibold text-white tracking-tight mb-2">{skill.title}</h3>
                    <p className="text-neutral-400 font-light text-sm">{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
