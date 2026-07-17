import { useState } from "react"
import { personal } from "../data/portfolio"
import { SectionHeading } from "../components/About"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

async function handleSubmit(e) {
  e.preventDefault()
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  try {

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    );


    setSubmitted(true)


    setFormData({
      name:"",
      email:"",
      message:""
    })


  } catch(error) {

    console.log(error)

    alert("Message send nahi hua. Please try again.")

  }
}

  return (
    <div className="relative min-h-screen pt-24">
      <section className="relative px-6 py-24">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-violet-600/10 blur-[120px]" />
        <div className="mx-auto max-w-4xl">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="mt-12 mx-auto max-w-2xl">
            {submitted ? (
              <div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-10 text-center">
                <svg className="mx-auto h-12 w-12 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 font-display text-xl font-semibold text-white">Message Sent!</h3>
                <p className="mt-2 text-slate-400">Thank you for reaching out. I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:border-violet-500/50 focus:outline-none focus:ring-1 focus:ring-violet-500/30 resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all hover:bg-violet-500 hover:shadow-violet-500/30 hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500">Or reach out directly at</p>
              <a
                href={`mailto:${personal.email}`}
                className="mt-1 inline-block text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
              >
                {personal.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}