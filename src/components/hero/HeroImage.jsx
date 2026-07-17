import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import NeonRings from "./NeonRings";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="relative flex items-center justify-center"
    >
      <Tilt
        tiltMaxAngleX={0}
 tiltMaxAngleY={0}
 glareEnable={false}
 perspective={1000}
 transitionSpeed={2000}
      >
        {/* Neon Rings */}
        <NeonRings />

        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-full bg-violet-600/20 blur-[90px]" />

        {/* Secondary Glow */}
        <div className="absolute inset-10 rounded-full bg-cyan-500/10 blur-[70px]" />

        {/* Glass Circle */}
        <div
          className="
            relative
            flex
            h-[430px]
            w-[430px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            shadow-[0_0_80px_rgba(139,92,246,.35)]
          "
        >
          {/* Reflection */}
          <div
            className="
              absolute
              left-12
              top-10
              h-24
              w-24
              rounded-full
              bg-white/10
              blur-2xl
            "
          />

          {/* Image */}
          <motion.img
    src="/assets/profile.png"
    alt="Profile"
    draggable={false}
    className="
        relative
        z-10
        h-[440px]
        w-auto
        object-contain
        drop-shadow-[0_30px_60px_rgba(139,92,246,.55)]
        select-none
    "
/>
        </div>

        {/* Bottom Glow */}
        <div
          className="
            absolute
            left-1/2
            top-[92%]
            h-14
            w-64
            -translate-x-1/2
            rounded-full
            bg-violet-500/30
            blur-3xl
          "
        />
      </Tilt>
    </motion.div>
  );
}