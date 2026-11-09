import { useState } from "react";

import gameDrives from "../assets/game-drives.png";
import walkingSafari from "../assets/walking-safari.png";
import birdWatching from "../assets/bird-watching.png";
import canoeing from "../assets/canoeing.png";
import fishing from "../assets/fishing.png";

const ACTIVITIES = [
  {
    title: "Game drives",
    image: gameDrives,
    text: "Explore the bush and spot wildlife on a guided drive.",
  },
  {
    title: "Walking safari",
    image: walkingSafari,
    text: "Discover the wilderness on foot with an expert guide.",
  },
  {
    title: "Bird watching",
    image: birdWatching,
    text: "Look for vibrant birdlife along the Zambezi.",
  },
  {
    title: "Canoeing",
    image: canoeing,
    text: "Paddle the river and see wildlife from the water.",
  },
  {
    title: "Fishing",
    image: fishing,
    text: "Enjoy a quiet fishing experience on the Zambezi.",
  },
];

export default function OurActivities() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section
      id="activities"
      className="bg-white px-6 py-12 font-['Montserrat'] md:px-16 lg:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-normal text-slate-500">
          Our activities
        </h2>

        <ul className="mt-5 flex h-36 flex-row gap-1.5 sm:h-44 lg:h-64">
          {ACTIVITIES.map(({ title, image, text }, index) => {
            const isActive = index === activeIndex;

            return (
              <li
                key={title}
                tabIndex={0}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                onClick={() => setActiveIndex(index)}
                className="group relative min-w-0 flex-1 cursor-pointer overflow-hidden bg-cover bg-center outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#241a11]/90 via-[#3a2818]/25 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-start justify-between p-1.5 text-left text-white sm:p-2">
                  <h3
                    className={`absolute inset-x-1 text-center text-[10px] font-medium leading-tight transition-[top,transform] duration-300 ease-out motion-reduce:transition-none sm:text-xs ${
                      isActive
                        ? "top-1/2 -translate-y-1/2"
                        : "bottom-1.5 sm:bottom-2"
                    }`}
                  >
                    {title}
                  </h3>

                  <p
                    className={`absolute inset-x-1 bottom-1.5 line-clamp-3 text-[9px] leading-tight text-white/90 transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none sm:bottom-2 sm:text-xs ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-2 opacity-0"
                    }`}
                  >
                    {text}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}