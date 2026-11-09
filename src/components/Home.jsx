import zebraBanner from '../assets/zebra banner 2 1.png'
import Navbar from './Navbar.jsx'
import SocialLinks from './SocialLinks.jsx'
import OurStory from './Ourstory.jsx'
import OurActivities from './Ouractivities.jsx'
import SuggestedItineraries from './SuggestedItineraries.jsx'
import WildlifeSightings from './WildlifeSightings.jsx'
import Testimonials from './Testimonials.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'

function Home() {
  return (
    <>
      <main
        className="relative min-h-screen overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(25, 50, 80, 0.12), rgba(20, 30, 40, 0.12)), url("${zebraBanner}")`,
        }}
      >
        <Navbar />

        <section
          id="home"
          className="relative z-10 flex min-h-[calc(100svh-5rem)] flex-col items-center justify-start px-4 pt-[clamp(4rem,25vh,20rem)] text-center"
        >
          <h1 className="-translate-y-[60px] whitespace-nowrap text-[clamp(2.75rem,9vw,5.5rem)] font-extralight leading-none">
            Indulge in
            <span className="sr-only"> Nature</span>
          </h1>
        </section>

        <SocialLinks />

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-7 left-1/2 z-30 -translate-x-1/2 transition hover:translate-y-1"
        >
          <svg viewBox="0 0 40 24" className="h-8 w-12 fill-none stroke-white" strokeWidth="1.5">
            <path d="M2 2 20 21 38 2" />
          </svg>
        </a>
      </main>
      <OurStory />
      <OurActivities />
      <WildlifeSightings />
      <SuggestedItineraries />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home