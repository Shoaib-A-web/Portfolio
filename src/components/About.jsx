const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React','Tailwind CSS',  
  'python', 'Django', 'MYSQL','php', 'Laravel', 'REST APIs',
  'Tkinter','Git & GitHub',
  'java', 'C','C++', 'c#', '.NET', 'Postman','Canva','UI/UX Design',
]

const bars = [
  { title: 'Frontend Development', desc: 'Building fast, responsive UIs with clean semantic code.', pct: 85 },
  { title: 'UI Design', desc: 'Designing user-centered interfaces with strong visual hierarchy.', pct: 78 },
  { title: 'React & Tailwind', desc: 'Component-based development with utility-first styling.', pct: 72 },
  { title: 'Backend Development (PHP / Laravel)', desc: 'Building robust backend systems with modern frameworks.', pct: 65 },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <div>
          <p className="text-[#7c5cfc] text-xs tracking-[3px] uppercase mb-2">Who I Am</p>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mb-6">About Me</h2>
          <p className="text-sm text-[#7a7890] leading-[1.9] mb-4">
            I'm Shoaib Ansari, a frontend developer and UI designer passionate about crafting
            beautiful, intuitive digital experiences.
          </p>
          <p className="text-sm text-[#7a7890] leading-[1.9] mb-8">
            I specialize in creating immersive interfaces that merge design thinking with clean,
            modern code. Every project I take on, I approach with curiosity and attention to detail.
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span
                key={s}
                className="text-xs px-4 py-1.5 border border-[rgba(124,92,252,0.3)] text-[#7a7890] rounded-md"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right — skill bars */}
        <div className="flex flex-col gap-7">
          {bars.map(({ title, desc, pct }) => (
            <div key={title}>
              <div className="flex justify-between mb-1.5">
                <span className="font-display font-semibold text-sm">{title}</span>
                <span className="text-xs text-[#7c5cfc]">{pct}%</span>
              </div>
              <p className="text-xs text-[#7a7890] mb-2">{desc}</p>
              <div className="h-[3px] bg-white/[0.08] rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#7c5cfc] to-[#fc5c9c] rounded-full"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
