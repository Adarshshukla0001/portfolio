import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import GlobalBackground from "./components/background/GlobalBackground"
import Navbar from "./components/Navbar"
import Hero from "./components/hero/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import AboutPage from "./pages/AboutPage"
import SkillsPage from "./pages/SkillsPage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"
import { personal } from "./data/portfolio"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-x-hidden">
        <GlobalBackground />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function HomePage() {
  return (
    <main>
      <Hero />
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <About />
      <Skills />
      <Projects />
      <HomeContact />
      <Footer />
    </main>
  )
}

function HomeContact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-violet-600/10 blur-[120px]" />
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-violet-400/15 bg-gradient-to-br from-violet-500/15 via-slate-900 to-indigo-500/10 px-6 py-14 text-center shadow-2xl shadow-violet-950/30 sm:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-300">Let&apos;s work together</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">Have an idea worth building?</h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">I&apos;m always happy to talk about new products, ambitious teams, and meaningful problems.</p>
        <Link
  to="/contact"
  className="
  mt-8 inline-flex items-center gap-2 
  rounded-full bg-white 
  px-7 py-3.5 
  text-sm font-semibold 
  text-slate-950 
  transition-transform 
  hover:-translate-y-0.5 
  hover:bg-violet-100 
  focus-visible:outline-2 
  focus-visible:outline-offset-4 
  focus-visible:outline-white
  "
>
  Start a conversation

  <svg 
    className="h-4 w-4" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor" 
    strokeWidth="2"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      d="M5 12h14m-6-6 6 6-6 6" 
    />
  </svg>

</Link>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-slate-950/70 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {personal.name}. All Rights Reserved.
        </p>

        <p className="text-xs tracking-wide text-slate-500">
          Designed & Developed By Adarsh Shukla
        </p>
      </div>
    </footer>
  );
}

export default App
