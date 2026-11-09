import { useState } from 'react'

const navLinks = ['About', 'Activities', 'Itineraries', 'Reviews', 'Gallery']

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="relative z-20 flex h-20 items-center justify-between border-b border-white/80 px-6 md:px-12">
      <a href="#home" className="font-serif text-3xl text-orange-500">
        Nyamatusi
      </a>

      <nav className="hidden items-center gap-8 lg:flex xl:gap-11">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-lg font-light transition hover:text-orange-300"
          >
            {link}
          </a>
        ))}
      </nav>

      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        className="flex flex-col gap-2 p-2"
      >
        <span className="h-0.5 w-12 bg-white" />
        <span className="ml-auto h-0.5 w-9 bg-white" />
        <span className="h-0.5 w-12 bg-white" />
      </button>

      {menuOpen && (
        <nav className="absolute right-6 top-full flex min-w-48 flex-col gap-5 bg-slate-900/95 p-6 shadow-xl md:right-12 lg:right-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-300"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Navbar
