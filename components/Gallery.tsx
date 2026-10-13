import Image from "next/image";
import { galleryItems } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="container-x relative z-10 mt-36">
      <h2 className="max-w-md font-sans text-3xl font-black leading-tight text-navy sm:text-4xl md:text-5xl">
        Memórias que criamos juntos!
      </h2>
      <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-navy">
        Uma estrutura completa, com ambientes modernos e espaços preparados para
        você aprender na prática, desenvolver suas
      </p>

      {/* GALLERY GRID */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-4 gap-y-4 md:mt-20 md:grid-cols-3 md:gap-x-8">
        {galleryItems.slice(0, 9).map((item, i) => {
          // middle column (2nd of every row on desktop) is shifted up
          const isMiddle = i % 3 === 1;

          return (
            <div
              key={`${item.image}-${i}`}
              className={`relative aspect-square overflow-hidden rounded-3xl ${
                isMiddle ? "md:-translate-y-8" : ""
              }`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 50vw"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}