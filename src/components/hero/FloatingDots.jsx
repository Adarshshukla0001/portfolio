import { motion } from "framer-motion";

const dots = [
  {
    size: 8,
    top: "10%",
    left: "15%",
    delay: 0,
    duration: 8,
    color: "bg-violet-400/60",
  },
  {
    size: 10,
    top: "25%",
    left: "80%",
    delay: 1,
    duration: 10,
    color: "bg-cyan-400/60",
  },
  {
    size: 6,
    top: "60%",
    left: "20%",
    delay: 2,
    duration: 9,
    color: "bg-fuchsia-400/60",
  },
  {
    size: 12,
    top: "75%",
    left: "72%",
    delay: 3,
    duration: 11,
    color: "bg-violet-300/50",
  },
  {
    size: 7,
    top: "42%",
    left: "50%",
    delay: 2,
    duration: 7,
    color: "bg-cyan-300/60",
  },
  {
    size: 9,
    top: "18%",
    left: "58%",
    delay: 4,
    duration: 12,
    color: "bg-fuchsia-300/50",
  },
  {
    size: 6,
    top: "82%",
    left: "35%",
    delay: 5,
    duration: 8,
    color: "bg-violet-400/60",
  },
  {
    size: 11,
    top: "52%",
    left: "88%",
    delay: 1,
    duration: 10,
    color: "bg-cyan-400/60",
  },
];

export default function FloatingDots() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
      {dots.map((dot, index) => (
        <motion.div
          key={index}
          initial={{
            y: 0,
            opacity: 0.3,
            scale: 0.8,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.25, 0.8, 0.25],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute rounded-full ${dot.color} blur-[2px]`}
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            top: dot.top,
            left: dot.left,
            boxShadow: "0 0 18px rgba(139,92,246,.5)",
          }}
        />
      ))}
    </div>
  );
}