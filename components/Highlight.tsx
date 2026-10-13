import Image from "next/image";

type Banner = {
  image: string;
  alt: string;
  titleParts: [string, string, string];
  imageOnRight: boolean;
  frame: string; // controls where the white border peeks out
};

const banners: Banner[] = [
  {
    image: "/images/places/campus.jpg",
    alt: "Estudantes estudando em grupo com notebooks",
    titleParts: ["The expeditious brown ", "fox jumps", " over the lazy dog"],
    imageOnRight: true,
    // visible on left, bottom and bottom-right
    frame: "-left-2 -right-0 -bottom-2.5 top-0",
  },
  {
    image: "/images/places/campus.jpg",
    alt: "Estudantes em sala de aula em grupo",
    titleParts: ["The expeditious brown ", "fox jumps", " over the lazy dog"],
    imageOnRight: false,
    // visible on left and top
    frame: "-left-2 -top-1.5 right-0 bottom-0",
  },
];

export default function Highlight() {
  return (
    <section id="experiencia" className="bg-gradiente bg-cover bg-center w-full h-full">
      {banners.map((banner, i) => (
        <div key={i} className="">
          <div className="container-x grid grid-cols-1 items-center gap-10 py-10 max-md:gap-6 md:py-14 lg:grid-cols-2">
            <div
              className={`max-w-md ${
                banner.imageOnRight ? "order-2 lg:order-1" : "order-2 lg:order-2 sm:ml-14"
              }`}
            >
              <h3 className="font-display text-3xl font-bold leading-tight text-white max-md:text-2xl sm:text-5xl">
                {banner.titleParts[0]}
                <span className="text-coral">{banner.titleParts[1]}</span>
                {banner.titleParts[2]}
              </h3>
              <p className="mt-4 max-w-[350px] text-white/70 max-md:text-sm">
                The expeditious brown fox jumps over the lazy dogThe expeditious brown fox jumps over the lazy dogThe expeditious brown fox jumps over the lazy dogThe expeditious brown fox jumps over the lazy dogThe expeditious brown fox jumps over the lazy dog
              </p>
              <a
                href="#contato"
                className="mt-6 inline-flex items-center rounded-2xl bg-coral px-12 py-1.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Submit
              </a>
            </div>

            {/* Outer wrapper: no overflow-hidden, so the white frame can stick out */}
            <div
              className={`relative h-[280px] w-full max-md:h-56 sm:h-[360px] ${
                banner.imageOnRight ? "order-1 lg:order-2" : "order-1 lg:order-1"
              }`}
            >
              {/* White frame behind the photo */}
              <div
                aria-hidden="true"
                className={`absolute rounded-3xl bg-white ${banner.frame}`}
              />

              {/* Photo */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src={banner.image}
                  alt={banner.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 45vw, 90vw"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}