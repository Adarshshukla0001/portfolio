import { personal, portfolioStats } from "../data/portfolio"

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="Who I am" />

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-400">{personal.bio}</p>
            <div className="flex flex-wrap gap-4">
              <InfoCard label="Location" value={personal.location} />
              <InfoCard label="Email" value={personal.email} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatCard number={`${portfolioStats.totalSkills}+`} label="Technical Skills" />
            <StatCard number={`${portfolioStats.totalProjects}+`} label="Projects Built" />
            <StatCard number="10+" label="Certifications" />
            <StatCard number="100+" label="DSA Problems Solved" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-violet-400">
        {subtitle}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-xl border border-white/5 bg-white/[0.02] px-5 py-4">
      <p className="text-xs uppercase tracking-wider text-slate-500">{label}</p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  )
}

function StatCard({ number, label }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.04] to-transparent p-6 text-center transition-colors hover:border-violet-500/20">
      <p className="font-display text-3xl font-bold text-violet-400">{number}</p>
      <p className="mt-2 text-sm text-slate-500">{label}</p>
    </div>
  )
}

export { SectionHeading }
