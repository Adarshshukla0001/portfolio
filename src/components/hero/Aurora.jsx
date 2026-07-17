import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden mix-blend-screen">

      {/* Left Purple Glow */}
      <motion.div
        animate={{
          x: [-60, 60, -60],
          y: [-40, 30, -40],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-250px] top-[5%] h-[650px] w-[650px] rounded-full bg-violet-600/25 blur-[150px]"
      />

      {/* Right Blue Glow */}
      <motion.div
        animate={{
          x: [50, -50, 50],
          y: [30, -40, 30],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-250px] top-[10%] h-[600px] w-[600px] rounded-full bg-cyan-500/15 blur-[160px]"
      />

      {/* Pink Glow */}
      <motion.div
        animate={{
          x: [-30, 40, -30],
          y: [20, -20, 20],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[25%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-fuchsia-500/15 blur-[140px]"
      />

      {/* Bottom Purple Light */}
      <motion.div
        animate={{
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-[-250px] left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[180px]"
      />

      {/* Top Soft Light */}
      <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-violet-500/10 to-transparent" />

    </div>
  );
}