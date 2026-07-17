import { skills } from "../data/portfolio"
import { SectionHeading } from "./About"

const categories = [...new Set(skills.map((s) => s.category))]

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Skills & Tools" subtitle="What I use" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <h3 className="font-display text-lg font-semibold text-white">
                {category}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <li
                      key={skill.name}
                      className="rounded-lg border border-white/5 bg-slate-900/50 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:border-violet-500/30 hover:text-white"
                    >
                      {skill.name}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
