import { projects } from "../data/portfolio"
import { SectionHeading } from "../components/About"

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen pt-24">
      <section className="relative overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="All Projects" subtitle="My work" />

          <div className="relative mt-12 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title + Math.random()} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/35 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-violet-950/20 md:p-6">
      <div className="mb-5 h-48 overflow-hidden rounded-xl border border-white/5 bg-gradient-to-br from-violet-600/10 to-indigo-600/5">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-cover opacity-65 transition duration-700 group-hover:scale-110 group-hover:opacity-90"
          loading="lazy"
        />
      </div>

      <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {project.tags[0]}
      </div>

      <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-md bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-300">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center">
  <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-white hover:shadow-lg hover:shadow-violet-500/20"
  >
    {/* GitHub SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-12"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.58.1.79-.25.79-.56v-2.03c-3.25.71-3.93-1.39-3.93-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.07-.73.08-.71.08-.71 1.18.08 1.8 1.22 1.8 1.22 1.05 1.8 2.75 1.28 3.42.98.11-.76.41-1.28.74-1.58-2.59-.29-5.31-1.3-5.31-5.79 0-1.28.46-2.33 1.21-3.15-.12-.3-.52-1.5.11-3.12 0 0 .99-.32 3.24 1.2a11.2 11.2 0 015.9 0c2.25-1.52 3.24-1.2 3.24-1.2.63 1.62.23 2.82.11 3.12.75.82 1.21 1.87 1.21 3.15 0 4.5-2.73 5.49-5.33 5.78.42.36.79 1.07.79 2.16v3.2c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"/>
    </svg>

    <span>Source Code</span>

    {/* Arrow SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17L17 7M17 7H9M17 7v8"
      />
    </svg>
  </a>
</div>
    </article>
  )
}