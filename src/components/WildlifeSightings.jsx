
import giraffe from "../assets/girafee.png";
import impala from "../assets/impala.png";
import zebras from "../assets/zebras-grass.png";
import elephant from "../assets/elephant.png";
import wildebeest from "../assets/wildebeest.png";
import lion from "../assets/lion-closeup.jpg";

const COLUMNS = [
  {
    offset: "lg:mt-[23%]",
    photos: [{ src: giraffe, alt: "A giraffe at sunset", ratio: "121 / 142" }],
  },
  {
    offset: "lg:mt-[27%]",
    photos: [{ src: impala, alt: "Impala standing together", ratio: "122 / 141" }],
  },
  {
    offset: "lg:mt-[18%]",
    photos: [{ src: zebras, alt: "Two zebras side by side", ratio: "122 / 133" }],
  },
  {
    offset: "",
    photos: [
      { src: elephant, alt: "An elephant on the savanna", ratio: "121 / 188" },
      { src: wildebeest, alt: "A herd of wildebeest", ratio: "121 / 105" },
    ],
  },
  {
    offset: "lg:mt-[8%]",
    photos: [{ src: lion, alt: "A lion roaring", ratio: "121 / 265" }],
  },
];

export default function WildlifeSightings() {
  return (
    <section
      id="sightings"
      className="bg-white px-6 py-16 font-['Montserrat'] md:px-16 lg:py-24"
    >
      <div className="relative mx-auto max-w-5xl">
       
        <div className="mb-10 lg:absolute lg:left-0 lg:top-0 lg:z-10 lg:mb-0 lg:max-w-[48%]">
          <h2 className="text-3xl font-light text-slate-800 md:text-4xl">
            Recent wildlife sightings
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-slate-800 lg:mt-8">
            Wildlife sightings include elephant, kudu, sable antelope, zebra,
            wildebeest, the rare and endangered roan antelope, buffalo, lion,
            leopard, hyena, and many other wildlife species.
          </p>
        </div>

        
        <div className="grid grid-cols-2 items-start gap-3 lg:flex lg:gap-2.5">
          {COLUMNS.map(({ offset, photos }) => (
            <div
              key={photos[0].src}
              className={`flex flex-col gap-2.5 max-lg:contents lg:flex-1 ${offset}`}
            >
              {photos.map(({ src, alt, ratio }) => (
                <img
                  key={src}
                  src={src}
                  alt={alt}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: ratio }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}