import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { navLinks, personal } from "../data/portfolio"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const location = useLocation()

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled
      ? "border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.35)]"
      : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-center px-6 py-4">

<ul className="hidden items-center gap-8 md:flex">
  {navLinks.map((link) => {
    const active = location.pathname === link.href

    return (
      <li key={link.href}>
        <Link
          to={link.href}
          className={`group relative py-2 text-sm font-medium transition-all duration-300 ${
            active
              ? "text-white"
              : "text-slate-400 hover:text-white"
          }`}
        >
          {link.label}

          <span
            className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 transition-all duration-300 ${
              active ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      </li>
    )
  })}
</ul>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-slate-950 px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="block text-slate-300 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
