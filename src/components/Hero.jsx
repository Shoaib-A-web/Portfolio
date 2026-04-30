import React from 'react'
import shoaibImg from '../assets/img/shoaib/C2026, 04_45_03 PM.png'


const socials = [
  { name: 'GitHub', href: 'https://github.com/Shoaib-A-web' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shoaib-ansari-a02800228/' },
  { name: 'Instagram', href: 'https://www.instagram.com/shoaibansari8227/' },
  { name: 'Gmail', href: 'mailto:shoaibansari012000@gmail.com' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-12 px-6 relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-[15%] right-[-5%] w-[420px] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(124,92,252,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-8%] w-[320px] h-[320px] rounded-full bg-[radial-gradient(circle,rgba(252,92,156,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-[#7c5cfc] text-xs tracking-[3px] uppercase mb-4">
            Hello, my name is
          </p>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] mb-5">
            Shoaib
            <br />
            <span className="bg-gradient-to-r from-[#7c5cfc] to-[#fc5c9c] bg-clip-text text-transparent">
              Ansari
            </span>
          </h1>
          <h2 className="font-light text-lg md:text-xl text-[#7a7890] mb-6">
            Frontend Developer & UI Designer
          </h2>
          <p className="text-sm text-[#7a7890] leading-relaxed max-w-md mb-10">
            shoaibansari012000@gmail.com
          </p>
          <p className="text-sm text-[#7a7890] leading-relaxed max-w-md mb-10">
            I create immersive digital experiences that blend cutting-edge
            technology with stunning visuals. My passion is turning complex ideas
            into intuitive interfaces that captivate users and push boundaries.
          </p>
          <p className="text-sm text-[#7a7890] italic leading-relaxed max-w-md mb-10">
            6206398993
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="px-7 py-3 bg-[#7c5cfc] text-white rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-7 py-3 border border-[rgba(124,92,252,0.5)] text-[#7c5cfc] rounded-lg text-sm font-medium hover:bg-[rgba(124,92,252,0.1)] transition-all"
            >
              Contact Me
            </a>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-5">
            {socials.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                className="text-xs text-[#7a7890] border-b border-[rgba(122,120,144,0.4)] pb-0.5 hover:text-[#7c5cfc] hover:border-[#7c5cfc] transition-colors duration-200"
              >
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            {/* Gradient border shape */}
            
            <div className="absolute inset-0 rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-gradient-to-br from-[#7c5cfc] to-[#fc5c9c] animate-morph" />
            {/* Inner */}
            <div className="absolute inset-1 rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-[#13121a] overflow-hidden flex items-center justify-center animate-morph">
              {<img
                src={shoaibImg}       
                alt="Shoaib Ansari"
                className="w-full h-full object-cover animate-float"
              />||
              <span className="font-display font-extrabold text-7xl bg-gradient-to-br from-[#7c5cfc] to-[#fc5c9c] bg-clip-text text-transparent">
                SA
              </span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
