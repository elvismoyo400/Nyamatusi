function SocialLinks() {
  return (
    <aside className="absolute right-5 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center gap-8 md:right-12">
      <a
        href="https://facebook.com"
        aria-label="Facebook"
        className="flex h-6 w-6 items-center justify-center text-2xl font-bold leading-none transition hover:scale-125"
      >
        f
      </a>

      <a href="https://instagram.com" aria-label="Instagram" className="flex h-6 w-6 items-center justify-center transition hover:scale-125">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
        </svg>
      </a>

      <a href="https://twitter.com" aria-label="Twitter" className="flex h-6 w-6 items-center justify-center transition hover:scale-125">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
          <path d="M23 3.01a9.3 9.3 0 0 1-2.67.73 4.66 4.66 0 0 0 2.04-2.57 9.3 9.3 0 0 1-2.95 1.13 4.64 4.64 0 0 0-8.02 3.17c0 .36.04.72.12 1.06A13.18 13.18 0 0 1 1.95 1.7a4.64 4.64 0 0 0 1.44 6.2 4.6 4.6 0 0 1-2.1-.58v.06a4.65 4.65 0 0 0 3.72 4.55 4.7 4.7 0 0 1-2.09.08 4.65 4.65 0 0 0 4.34 3.22A9.32 9.32 0 0 1 .4 17.14a13.15 13.15 0 0 0 7.12 2.09c8.54 0 13.21-7.07 13.21-13.2l-.01-.6A9.4 9.4 0 0 0 23 3.01Z" />
        </svg>
      </a>
    </aside>
  )
}

export default SocialLinks
