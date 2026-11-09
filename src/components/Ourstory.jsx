import jeepElephants from "../assets/jeep-elephant.png";
import lion from "../assets/lion.png";
import deck from "../assets/lodge-deck.png";

const PARAGRAPHS = [
  "Nyamatusi Camp is our flagship in terms of its Eco-conscious style. Our Mana Pools safari lodge is set in one of the wildest and most remote parts of Africa, on the banks of the Zambezi, one of the world's oldest rivers. Embracing comfort, this property embodies sustainable design. Fully solar-powered and built from all-natural materials it encompasses its wilderness location in the most elegant way. Here, your Mana Pools safari plays out against a sweeping riverine landscape, where epic encounters of the giants that roam this land await.",
  "Consisting of six luxury tented suites, with uninterrupted views of the river and escarpment beyond, our Mana Pools safari lodge invites a blissful escape to nature. Each romantic guest tent is adorned with soft drapery and is replete with…",
];

export default function OurStory() {
  return (
    <section
      id="about"
      className="bg-white px-6 py-16 font-['Montserrat'] md:px-16 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)_minmax(0,0.6fr)] lg:gap-6">
        <div className="flex flex-col lg:pr-10">
          <h2 className="text-3xl font-light text-slate-800 md:text-4xl">
            Our story
          </h2>

          <div className="mt-8 max-w-md space-y-5 text-sm leading-relaxed text-slate-800 lg:mt-20">
            {PARAGRAPHS.map((text) => (
              <p key={text.slice(0, 24)}>{text}</p>
            ))}
          </div>

          <a
            href="#enquire"
            className="mt-8 inline-block w-fit bg-orange-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
          >
            Enquire now
          </a>
        </div>

        <div className="lg:mt-24">
          <img
            src={jeepElephants}
            alt="Elephants walking along a dirt track, seen from inside a safari vehicle"
            className="aspect-[5/6] w-full object-cover lg:aspect-[208/252]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-col lg:gap-[18px]">
          <img
            src={lion}
            alt="A lion roaring"
            className="aspect-[4/5] w-full object-cover lg:aspect-[120/149]"
          />
          <img
            src={deck}
            alt="A wooden deck with a lounge chair at the lodge"
            className="aspect-[4/5] w-full object-cover lg:aspect-[120/210]"
          />
        </div>
      </div>
    </section>
  );
}