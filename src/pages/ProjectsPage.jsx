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

      <div className="mt-6 flex gap-4">
        <a
          href={project.liveUrl}
          className="text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          Live Demo <span aria-hidden="true">&rarr;</span>
        </a>
        <a
          href={project.githubUrl}
          className="text-sm font-medium text-slate-500 transition-colors hover:text-white"
        >
          Source Code
        </a>
      </div>
    </article>
  )
}