import { useState } from "react";

import jacob from "../assets/jacob-stone.jpg";
import gemma from "../assets/gemma-johnson.jpg";
import brownFamily from "../assets/brown-family.jpg";

const TESTIMONIALS = [
  {
    id: "jacob-stone",
    name: "Jacob Stone",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.",
    photo: jacob,
  },
  {
    id: "gemma-johnson",
    name: "Gemma Johnson",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.",
    photo: gemma,
  },
  {
    id: "brown-family",
    name: "Brown family",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.",
    photo: brownFamily,
  },
];

function PhotoCard({ person, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Show testimonial from ${person.name}`}
      className="group relative h-64 w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 lg:h-full"
    >
      <img
        src={person.photo}
        alt=""
        className="absolute inset-0 size-full object-cover"
      />
      <span className="absolute inset-0 bg-orange-500/50 transition-opacity duration-300 group-hover:opacity-0 motion-reduce:transition-none" />
      <span className="absolute bottom-3 right-4 block text-xs italic text-white drop-shadow">
        {person.name}
      </span>
    </button>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  const count = TESTIMONIALS.length;
  const prevIndex = (activeIndex + count - 1) % count;
  const nextIndex = (activeIndex + 1) % count;

  const active = TESTIMONIALS[activeIndex];

  return (
    <section
      id="reviews"
      className="bg-white px-6 py-16 font-['Montserrat'] md:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-light text-slate-800 md:text-4xl">
          Testimonials
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:mt-14 lg:h-[26rem] lg:grid-cols-[2fr_3fr_2fr] lg:gap-5">
          <PhotoCard
            person={TESTIMONIALS[prevIndex]}
            onSelect={() => setActiveIndex(prevIndex)}
          />

          <figure
            aria-live="polite"
            className="order-first col-span-2 flex flex-col items-center justify-center border border-rose-200 bg-white px-8 py-10 text-center lg:order-none lg:col-span-1"
          >
            <img
              src={active.avatar ?? active.photo}
              alt={active.name}
              className="size-16 rounded-full object-cover"
            />
            <blockquote className="mt-8 max-w-xs text-xs leading-loose text-slate-800">
              “ {active.quote} ”
            </blockquote>
            <span className="my-5 block h-px w-16 bg-orange-600" />
            <figcaption className="text-xs font-semibold italic text-slate-900">
              {active.name}
            </figcaption>
          </figure>

          <PhotoCard
            person={TESTIMONIALS[nextIndex]}
            onSelect={() => setActiveIndex(nextIndex)}
          />
        </div>
      </div>
    </section>
  );
}