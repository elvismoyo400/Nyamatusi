import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

import jeep from "../assets/gallery-jeep.jpg";
import elephants from "../assets/gallery-elephants.jpg";
import kayak from "../assets/gallery-kayak.jpg";
import giraffe from "../assets/gallery-giraffe.jpg";
import sunset from "../assets/galley-sunset.jpg";
import pawprint from "../assets/galley-pawprint.jpg";
import lodge from "../assets/gallery-lodge.jpg";

const PHOTOS = [
  { src: jeep, alt: "Safari vehicle on a dirt road with hills behind", span: "col-span-2 md:col-span-3" },
  { src: elephants, alt: "Elephants on a track seen from inside a safari vehicle" },
  { src: kayak, alt: "A woman paddling a canoe on the river" },
  { src: giraffe, alt: "A giraffe silhouetted against an orange sky" },
  { src: sunset, alt: "A lone acacia tree at sunset" },
  { src: pawprint, alt: "Big cat paw prints in the sand", span: "col-span-2 md:col-span-1" },
  { src: lodge, alt: "Lodge interior with draped canopy and river view", span: "col-span-2" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const isOpen = selected !== null;

  const close = () => setSelected(null);
  const showNext = () => setSelected((i) => (i + 1) % PHOTOS.length);
  const showPrev = () =>
    setSelected((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight")
        setSelected((i) => (i + 1) % PHOTOS.length);
      if (e.key === "ArrowLeft")
        setSelected((i) => (i - 1 + PHOTOS.length) % PHOTOS.length);
    }

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section
      id="gallery"
      className="bg-white px-6 py-16 font-['Montserrat'] md:px-16 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-light text-slate-800 md:text-4xl">
          Our gallery
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-[1fr_1fr_1fr_1.37fr_1.37fr] md:grid-rows-2 md:aspect-[480/238] lg:mt-14">
          {PHOTOS.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Open photo: ${photo.alt}`}
              className={`group aspect-[4/3] overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 md:aspect-auto ${
                photo.span ?? ""
              }`}
            >
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
              />
            </button>
          ))}
        </div>
      </div>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
        >
          <button
            type="button"
            autoFocus
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 p-3 text-2xl text-white hover:opacity-70"
          >
            <FaTimes />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 p-4 text-2xl text-white hover:opacity-70 md:left-6"
          >
            <FaChevronLeft />
          </button>

          <img
            src={PHOTOS[selected].src}
            alt={PHOTOS[selected].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-full object-contain md:max-w-[80vw]"
          />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
            className="absolute right-2 p-4 text-2xl text-white hover:opacity-70 md:right-6"
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}