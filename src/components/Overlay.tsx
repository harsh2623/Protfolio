"use client";

import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 w-full overflow-hidden">
      <div className="flex flex-col w-full text-white">
        
        {/* Section 1 */}
        <div className="h-screen w-full flex flex-col items-center justify-center snap-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center drop-shadow-2xl z-20 mix-blend-difference"
          >
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase leading-none">
              Harsh
              <br/>
              <span className="text-transparent" style={{ WebkitTextStroke: "2px white" }}>Patil</span>
            </h1>
            <p className="mt-8 text-xl md:text-3xl font-light tracking-widest uppercase text-white/90 drop-shadow-lg">
              Video & AI Creator
            </p>
          </motion.div>
        </div>

        {/* Section 2 */}
        <div className="h-screen w-full flex flex-col items-end justify-center px-10 md:px-32 snap-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-right max-w-2xl drop-shadow-2xl mix-blend-difference"
          >
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-white uppercase italic pr-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Create
            </h2>
            <div className="w-full h-px bg-white/50 my-6" />
            <p className="text-2xl md:text-4xl text-gray-200 font-light leading-snug">
              Designing impactful visual storytelling through <span className="font-semibold text-white">advanced video editing</span>.
            </p>
          </motion.div>
        </div>

        {/* Section 3 */}
        <div className="h-screen w-full flex flex-col items-start justify-center px-10 md:px-32 snap-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-left max-w-2xl drop-shadow-2xl mix-blend-difference"
          >
            <h2 className="text-6xl md:text-9xl font-black tracking-tighter text-transparent uppercase italic pl-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" style={{ WebkitTextStroke: "3px white" }}>
              Compute
            </h2>
            <div className="w-full h-px bg-white/50 my-6" />
            <p className="text-2xl md:text-4xl text-gray-200 font-light leading-snug">
              Empowered by <span className="font-semibold text-white">AI and Machine Learning</span> engineering fundamentals.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
