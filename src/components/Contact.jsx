import { useState } from "react"

export default function Contact() {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const sendEmail = (subjectText, bodyText) => {
    const to = "shoaibansari012000@gmail.com"
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`
    window.location.href = mailto
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!subject.trim() || !message.trim()) return
    sendEmail(subject, message)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-[#7c5cfc] text-xs tracking-[3px] uppercase mb-2">Get In Touch</p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-4">Contact Me</h2>
        <p className="text-sm text-[#7a7890] leading-relaxed mb-10">
          Have a project in mind or want to collaborate? I'd love to hear from you. Reach out
          and let's build something great together.
        </p>

        <form className="text-left" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              className="w-full px-4 py-3.5 bg-[#13121a] border border-white/[0.08] rounded-xl text-[#e8e6f0] text-sm placeholder-[#7a7890] outline-none focus:border-[#7c5cfc] transition-colors"
            />
          </div>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            className="w-full px-4 py-3.5 bg-[#13121a] border border-white/[0.08] rounded-xl text-[#e8e6f0] text-sm placeholder-[#7a7890] outline-none focus:border-[#7c5cfc] transition-colors resize-y mb-4"
          />
          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#7c5cfc] to-[#fc5c9c] text-white font-display font-bold text-base rounded-xl hover:opacity-85 transition-opacity cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
