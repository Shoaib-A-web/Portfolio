const projects = [
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio built with HTML, CSS and responsive design principles.',
    tags: ['HTML', 'Tailwind CSS', 'JavaScript', 'React',],
    color: '#7c5cfc',
  },
  {
    title: 'UI Component Library',
    desc: 'A collection of reusable UI components with clean, accessible design patterns.',
    tags: ['CSS', 'Design', 'Accessibility'],
    color: '#fc5c9c',
  },
  {
    title: 'Landing Page Design',
    desc: 'Modern landing page with animations, hover effects and mobile-first layout.',
    tags: ['HTML', 'CSS', 'Animation'],
    color: '#5cf0fc',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#13121a]">
      <div className="max-w-6xl mx-auto">
        <p className="text-[#7c5cfc] text-xs tracking-[3px] uppercase text-center mb-2">
          What I've Built
        </p>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-center mb-14">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="bg-[#0a0a0f] border border-white/[0.07] rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-300 cursor-default"
              style={{ '--card-color': p.color }}
            >
              {/* Icon dot */}
              <div
                className="w-11 h-11 rounded-xl mb-5 flex items-center justify-center"
                style={{ background: p.color + '22' }}
              >
                <div
                  className="w-4 h-4 rounded-[4px]"
                  style={{ background: p.color  }}
                />
              </div>

              <h3 className="font-display font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-[#7a7890] leading-relaxed mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-3 py-1 rounded-full font-medium tracking-wide"
                    style={{ background: p.color + '18', color: p.color }}
                  >
                    {t}
                  </span>
                ))}

              </div>
              <button className="w-full my-2 text-[11px] px-3 py-1 rounded-full font-medium tracking-wide border border-[rgba(255,255,255,0.1)] text-[#7a7890] hover:border-[#7a7890] hover:text-white transition-colors">
                View Code
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
