import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 240,
    damping: 28,
    mass: 0.8,
  });

  const y = useSpring(mouseY, {
    stiffness: 240,
    damping: 28,
    mass: 0.8,
  });

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window) return;

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <motion.div
  className="pointer-events-none fixed left-0 top-0 z-[99999] flex h-12 w-12 items-center justify-center -translate-x-1/2 -translate-y-1/2"
  style={{ x, y }}
  animate={{
    opacity: visible ? 1 : 0,
    scale: visible ? 1 : 0,
  }}
  transition={{
    duration: 0.2,
  }}
>
      {/* Outer Ring */}
<motion.div
  className="absolute inset-0 rounded-full border border-white/20 bg-white/5 backdrop-blur-md"
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.7, 1, 0.7],
    boxShadow: [
      "0 0 12px rgba(139,92,246,.35)",
      "0 0 28px rgba(6,182,212,.6)",
      "0 0 16px rgba(236,72,153,.4)",
      "0 0 12px rgba(139,92,246,.35)",
    ],
  }}
  transition={{
    duration: 2.2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>

      {/* Center Dot */}
<motion.div
  className="h-3.5 w-3.5 rounded-full bg-white"
  animate={{
    scale: [1, 1.4, 1],
    opacity: [0.75, 1, 0.75],
  }}
  transition={{
    duration: 1.5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  style={{
    boxShadow:
      "0 0 18px #8b5cf6,0 0 28px #06b6d4,0 0 38px #ec4899",
  }}
/>
    </motion.div>
  );
}