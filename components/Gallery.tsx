import Image from "next/image";
import { galleryItems } from "@/lib/data";

// alternate portrait/landscape aspect ratios to create the mosaic feel
const spanPattern = [
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
  "aspect-square",
  "aspect-[4/5]",
];

export default function Gallery() {
  return (
    <section className="bg-navy py-16 md:py-24">
      <div className="container-x">
        <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
          <span className="text-coral">Memórias</span> que criamos juntos!
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
          Momentos de aprendizado, conquista e amizade que fazem parte da
          trajetória de quem estuda na Unifamec.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {galleryItems.map((item, i) => (
            <div
              key={item.image}
              className={`relative overflow-hidden rounded-3xl ${spanPattern[i % spanPattern.length]}`}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(min-width: 768px) 30vw, 45vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
