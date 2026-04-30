const socials = [
  { name: 'GitHub', href: 'https://github.com/Shoaib-A-web' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shoaib-ansari-a02800228/' },
  { name: 'Instagram', href: 'https://www.instagram.com/shoaibansari8227/' },
  { name: 'Gmail', href: '#' },
]

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-white/[0.06] text-center bg-[#13121a]">
      <p className="font-display font-extrabold text-2xl bg-gradient-to-r from-[#7c5cfc] to-[#fc5c9c] bg-clip-text text-transparent mb-2">
        SHOAIB ANSARI
      </p>
      <span className="text-sm text-[#7a7890] mb-6 block">
        shoaibansari012000@gmail.com | 6206398993
      </span>
      <p className="text-sm text-[#7a7890] mb-6">
        Creating digital experiences that illuminate the future of web development.
      </p>
      <div className="flex justify-center gap-6 mb-6 flex-wrap">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            className="text-sm text-[#7a7890] hover:text-[#7c5cfc] transition-colors duration-200"
          >
            {s.name}
          </a>
        ))}
      </div>
      <p className="text-xs text-[rgba(122,120,144,0.5)]">
        © 2025 Shoaib Ansari. All rights reserved.
      </p>
    </footer>
  )
}
