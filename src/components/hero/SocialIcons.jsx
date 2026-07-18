import { motion } from "framer-motion";
import { personal } from "../../data/portfolio";

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-5">
      {Object.entries(personal.social).map(([platform, url], index) => (
        <motion.a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
          }}
          whileHover={{
            y: -8,
            scale: 1.15,
          }}
          whileTap={{
            scale: 0.9,
          }}
          className="
            group
            relative
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            transition-all
            duration-300
            hover:border-violet-400/40
            hover:bg-violet-500/10
            hover:shadow-[0_0_30px_rgba(139,92,246,.35)]
          "
        >
          <span className="text-slate-300 transition group-hover:text-violet-300">
            <Icon platform={platform} />
          </span>

          <div
            className="
              absolute
              inset-0
              rounded-2xl
              bg-gradient-to-br
              from-violet-500/0
              via-violet-400/5
              to-cyan-400/10
              opacity-0
              transition
              duration-300
              group-hover:opacity-100
            "
          />
        </motion.a>
      ))}
    </div>
  );
}

function Icon({ platform }) {
  const commonClass =
    "h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6";

  const icons = {
    github: (
      <svg
        className={commonClass}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.24.78-.55v-1.94c-3.2.69-3.88-1.35-3.88-1.35-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.19-3.07-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.03 11.03 0 015.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.57.24 2.73.12 3.02.74.8 1.19 1.82 1.19 3.07 0 4.41-2.69 5.38-5.26 5.66.42.36.78 1.05.78 2.13v3.16c0 .31.21.66.79.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
      </svg>
    ),

    linkedin: (
      <svg
        className={commonClass}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M4.98 3.5A2.48 2.48 0 012.5 6a2.48 2.48 0 010-4.96A2.48 2.48 0 014.98 3.5zM2.5 8h5V21h-5zM10 8h4.8v1.8h.07c.67-1.2 2.3-2.46 4.73-2.46 5.05 0 5.98 3.32 5.98 7.63V21h-5v-5.72c0-1.36-.03-3.12-1.9-3.12-1.9 0-2.2 1.48-2.2 3V21h-5z"/>
      </svg>
    ),

    leetcode: (
  <svg
    className={commonClass}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.343.497 1.885-.038.545-.535.564-1.365.05-1.879l-2.639-2.617a5.29 5.29 0 00-1.925-1.204l2.42-2.415c.516-.517.516-1.355 0-1.872-.517-.517-1.354-.517-1.87 0L4.235 9.443c-.955.957-1.475 2.317-1.457 3.734-.018 1.435.5 2.795 1.457 3.751l4.332 4.363c.955.957 2.316 1.464 3.751 1.464 1.436 0 2.797-.507 3.752-1.464l2.694-2.63c.514-.514.495-1.344-.05-1.879-.546-.535-1.371-.552-1.884-.038z"/>
    <path d="M10.878 15.686h9.484c.735 0 1.331-.596 1.331-1.331s-.596-1.331-1.331-1.331h-9.484c-.735 0-1.331.596-1.331 1.331s.596 1.331 1.331 1.331z"/>
  </svg>
),
  };

  return icons[platform] || null;
}