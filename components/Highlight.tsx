import Image from "next/image";

type Banner = {
  image: string;
  alt: string;
  titleParts: [string, string, string];
  imageOnRight: boolean;
};

const banners: Banner[] = [
  {
    image: "/images/highlight-1.jpg",
    alt: "Estudantes estudando em grupo com notebooks",
    titleParts: ["The expeditious brown ", "fox jumps", " over the lazy dog"],
    imageOnRight: true,
  },
  {
    image: "/images/highlight-2.jpg",
    alt: "Estudantes em sala de aula em grupo",
    titleParts: ["The expeditious brown ", "fox jumps", " over the lazy dog"],
    imageOnRight: false,
  },
];

export default function Highlight() {
  return (
    <section id="experiencia" className="bg-gradiente bg-cover bg-center">
      {banners.map((banner, i) => (
        <div key={i} className="bg-navy-deep">
          <div className="container-x grid grid-cols-1 items-center gap-10 py-16 md:py-20 lg:grid-cols-2">
            <div
              className={
                banner.imageOnRight ? "order-2 lg:order-1" : "order-2 lg:order-2"
              }
            >
              <h3 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                {banner.titleParts[0]}
                <span className="text-coral">{banner.titleParts[1]}</span>
                {banner.titleParts[2]}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
                The expeditious brown fox jumps over the lazy dog. The
                expeditious brown fox jumps over the lazy dog.
              </p>
              <a
                href="#contato"
                className="mt-6 inline-flex items-center rounded-lg bg-coral px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Saiba mais
              </a>
            </div>

            <div
              className={`relative h-[280px] w-full overflow-hidden rounded-3xl sm:h-[360px] ${
                banner.imageOnRight ? "order-1 lg:order-2" : "order-1 lg:order-1"
              }`}
            >
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
      ))}
    </section>
  );
}
