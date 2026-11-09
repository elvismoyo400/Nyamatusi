import { useState } from "react";
import { FaArrowRight, FaHeart } from "react-icons/fa";

import poolside from "../assets/itinerary-poolside.jpg";
import zambezi from "../assets/itinerary-zambezi.jpg";
import tent from "../assets/itinerary-tent.jpg";

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor";

const ITINERARIES = [
  {
    id: "zimbabwe-luxury",
    title: "Zimbabwe luxury",
    subtitle: "4 day luxury plan",
    description: LOREM,
    features: ["2 people", "All meals provided", "Luxury transport"],
    price: "$3,880 per person",
    image: poolside,
  },
  {
    id: "zambezi-best",
    title: "The best of the Zambezi",
    subtitle: "6 day tour deluxe plan",
    description: LOREM,
    features: ["2 people", "All meals provided", "Luxury transport"],
    price: "$4,250 per person",
    image: zambezi,
  },
  {
    id: "zambezi-camp",
    title: "The best of the Zambezi",
    subtitle: "6 day tour deluxe plan",
    description: LOREM,
    features: ["2 people", "All meals provided", "Luxury transport"],
    price: "$4,600 per person",
    image: tent,
  },
];

export default function SuggestedItineraries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState([]);

  function toggleLiked(id) {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return (
    <section
      id="itineraries"
      className="bg-white px-6 py-16 font-['Montserrat'] md:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-light text-slate-800 md:text-4xl">
          Suggested itineraries
        </h2>

        <ul className="mt-10 flex flex-col gap-4 lg:mt-14 lg:h-[26rem] lg:flex-row lg:gap-6">
          {ITINERARIES.map((trip, index) => {
            const isActive = index === activeIndex;
            const isLiked = liked.includes(trip.id);
            const tab = isActive ? 0 : -1;

            return (
              <li
                key={trip.id}
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`flex min-w-0 flex-col overflow-hidden outline-none transition-[flex-grow] duration-500 motion-reduce:transition-none lg:flex-row ${
                  isActive ? "lg:flex-[1.9]" : "lg:flex-1"
                } focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2`}
              >
                <div
                  className={`relative shrink-0 overflow-hidden bg-orange-600 text-white transition-[width] duration-500 motion-reduce:transition-none max-lg:w-full ${
                    isActive ? "lg:w-[54%]" : "lg:w-0"
                  }`}
                >
                  <div className="flex h-full flex-col lg:min-w-[16rem]">
                    <button
                      type="button"
                      tabIndex={tab}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLiked(trip.id);
                      }}
                      aria-pressed={isLiked}
                      aria-label={
                        isLiked ? "Remove from saved itineraries" : "Save itinerary"
                      }
                      className="absolute right-0 top-0 flex size-11 items-center justify-center bg-white text-red-600"
                    >
                      <FaHeart />
                    </button>

                    <div className="flex-1 p-6 pr-14">
                      <h3 className="text-base font-medium">{trip.title}</h3>
                      <p className="mt-4 text-xs leading-loose">
                        {trip.description}
                      </p>
                      <ul className="mt-5 space-y-3 text-xs">
                        {trip.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3">
                            <span className="size-1.5 shrink-0 rounded-full bg-white" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="border-y border-white/40 px-6 py-3 text-lg font-semibold">
                      {trip.price}
                    </p>

                    <a
                      href={`#${trip.id}`}
                      tabIndex={tab}
                      className="flex items-center justify-between px-6 py-5 text-sm font-medium focus-visible:underline"
                    >
                      See full itinerary
                      <FaArrowRight aria-hidden="true" />
                    </a>
                  </div>
                </div>

                <div className="relative h-64 flex-1 lg:h-auto">
                  <img
                    src={trip.image}
                    alt={trip.title}
                    className="absolute inset-0 size-full object-cover"
                  />
                  {!isActive && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/45 to-transparent px-4 pb-8 pt-20 text-center text-white max-lg:hidden">
                      <p className="text-base italic">{trip.title}</p>
                      <p className="mt-2 text-xs">{trip.subtitle}</p>
                    </div>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}