import { useState } from 'react'
import shoaibImg from '../assets/img/shoaib/C2026, 04_45_03 PM.png'

const links = ['Home', 'Projects', 'About', 'Contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgba(10,10,15,0.85)] backdrop-blur-md border-b border-[rgba(124,92,252,0.15)]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
      {  <div className='overflow-hidden w-16 h-16 scale-90 rounded-full flex items-center justify-center'> 
          <img src={shoaibImg} alt="Logo" className="w-full h-full object-cover" />
        </div> ||
        <span className="font-display font-extrabold text-xl bg-gradient-to-r from-[#7c5cfc] to-[#fc5c9c] bg-clip-text text-transparent">
          SA
        </span>}

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-9 list-none items-center">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-[#7a7890] text-sm tracking-widest uppercase hover:text-white transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-2xl text-white bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[rgba(10,10,15,0.98)] px-6 pb-4 border-t border-[rgba(124,92,252,0.1)]">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-[#7a7890] text-sm border-b border-white/5 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
