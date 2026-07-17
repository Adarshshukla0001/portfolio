import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { personal } from "../../data/portfolio";
import HeroImage from "./HeroImage";
import Aurora from "./Aurora";
import MouseGlow from "./MouseGlow";
import FloatingDots from "./FloatingDots";
import SocialIcons from "./SocialIcons";

export default function Hero() {
  return (
    <section
  id="home"
  // className="relative min-h-screen overflow-hidden bg-transparent"
>
      {/* Aurora Effect */}
      <Aurora />

      {/* Mouse Glow */}
      <MouseGlow />

      {/* Floating Particles */}
      <FloatingDots />

      {/* Main Content */}
      <div className="relative z-20 mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Hi,
            <br />
            I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          <h2 className="mt-5 text-2xl font-semibold text-slate-300">
            {personal.title}
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            {personal.tagline}
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/projects"
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-700/30 transition duration-300 hover:-translate-y-1 hover:scale-105"
            >
              View Projects →
            </Link>
          </div>

          {/* Social Icons */}

          <div className="mt-10">
            <SocialIcons />
          </div>

          </motion.div>
        {/* ================= RIGHT CONTENT ================= */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <HeroImage />
        </motion.div>

      </div>

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-0 h-80 w-[900px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

    </section>
  );
}