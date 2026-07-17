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
  const icons = {
    github: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.58.1.79-.25.79-.56v-2.17c-3.25.71-3.94-1.39-3.94-1.39-.54-1.35-1.31-1.71-1.31-1.71-1.07-.74.08-.73.08-.73 1.18.08 1.8 1.22 1.8 1.22 1.05 1.79 2.76 1.27 3.43.97.11-.77.41-1.28.74-1.57-2.59-.29-5.32-1.29-5.32-5.76 0-1.27.46-2.3 1.21-3.11-.12-.29-.52-1.47.11-3.06 0 0 .99-.32 3.25 1.19a11.2 11.2 0 015.92 0c2.26-1.51 3.25-1.19 3.25-1.19.63 1.59.23 2.77.11 3.06.75.81 1.21 1.84 1.21 3.11 0 4.48-2.74 5.47-5.35 5.75.42.36.79 1.08.79 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),

    linkedin: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5A2.48 2.48 0 012.5 6a2.48 2.48 0 010-4.96A2.48 2.48 0 014.98 3.5zM.5 8h4V24h-4zM8 8h3.83v2.19h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.1c0-1.69-.03-3.87-2.36-3.87-2.37 0-2.73 1.85-2.73 3.75V24H8z" />
      </svg>
    ),

    leetcode: (
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M15.7 3.3a1 1 0 011.4 1.4L8.8 13H20a1 1 0 110 2H6.4a1 1 0 01-.7-1.7l10-10zM6.7 16.3a1 1 0 011.4 0l3.6 3.6a1 1 0 11-1.4 1.4l-3.6-3.6a1 1 0 010-1.4z" />
      </svg>
    ),
  };

  return icons[platform] || null;
}