import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  const x = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  const y = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX - 180);
      mouseY.set(e.clientY - 180);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Main Purple Glow */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-10
          h-[360px]
          w-[360px]
          rounded-full
          bg-violet-500/15
          blur-[120px]
        "
      />

      {/* Secondary Blue Glow */}
      <motion.div
        style={{
          x,
          y,
        }}
        className="
          pointer-events-none
          fixed
          left-0
          top-0
          z-10
          h-[220px]
          w-[220px]
          translate-x-10
          translate-y-10
          rounded-full
          bg-cyan-400/10
          blur-[80px]
        "
      />
    </>
  );
}