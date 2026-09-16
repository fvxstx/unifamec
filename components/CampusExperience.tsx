import Image from "next/image";
import { beyondItems } from "@/lib/data";

export default function CampusExperience() {
  const [big, ...rest] = beyondItems;

  return (
    <section className="bg-offwhite py-16 md:py-24">
      <div className="container-x">
        <h2 className="max-w-2xl font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
          Sua Universidade Vai <span className="text-coral">Além</span> da
          sala de aula.
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/70 md:text-base">
          Uma estrutura completa, com ambientes modernos e espaços preparados
          para você aprender na prática, desenvolver suas habilidades e viver
          cada etapa da sua jornada universitária.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2 md:gap-5">
          <BentoImage
            item={big}
            className="col-span-2 row-span-2 h-64 md:col-span-1 md:h-auto"
          />
          {rest.map((item) => (
            <BentoImage
              key={item.label}
              item={item}
              className="col-span-1 h-40 md:h-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoImage({
  item,
  className,
}: {
  item: { image: string; label: string; alt: string };
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className ?? ""}`}>
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover"
        sizes="(min-width: 768px) 20vw, 45vw"
      />
      <span className="absolute bottom-3 left-3 rounded-md bg-navy/80 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-white sm:text-xs">
        {item.label}
      </span>
    </div>
  );
}
