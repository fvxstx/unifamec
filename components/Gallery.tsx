import Image from "next/image";
import { galleryItems } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Gallery() {
  return (
    <section className="container-x relative z-10 mt-36 max-md:mt-20">
      <Reveal variant="fade-up">
        <h2 className="max-w-md font-sans text-3xl font-black leading-tight text-navy sm:text-4xl md:text-5xl">
          Memórias que criamos juntos!
        </h2>
      </Reveal>
      <Reveal variant="fade-up" delay={150}>
        <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-navy max-md:text-base">
          Uma estrutura completa, com ambientes modernos e espaços preparados para
          você aprender na prática, desenvolver suas
        </p>
      </Reveal>

      {/* GALLERY GRID */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-3 gap-y-3 max-md:mt-10 md:mt-20 md:grid-cols-3 md:gap-x-8">
        {galleryItems.slice(0, 9).map((item, i) => {
          const isMiddle = i % 3 === 1;

          return (
            // Reveal wraps the tile so its entrance transform doesn't fight
            // the tile's own offset/hover transforms. Columns cascade in.
            <Reveal
              key={`${item.image}-${i}`}
              variant="fade-up"
              delay={(i % 3) * 120}
              // 2-col grid on mobile: hide the 9th tile so rows stay even
              className={`relative hover:z-10 ${i === 8 ? "max-md:hidden" : ""}`}
            >
              <div
                className={`relative aspect-square overflow-hidden rounded-3xl transition-transform duration-300 ease-out hover:scale-110 ${
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
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
