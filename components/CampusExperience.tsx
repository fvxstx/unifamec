import Image from "next/image";
import { beyondItems } from "@/lib/data";
import { noiseStyle } from "@/utils/noise";
import Reveal from "@/components/Reveal";

const tileClasses = [
  "col-span-2 md:col-span-1", // 1 – top left (wide)
  "col-span-2 md:col-span-2", // 2 – top right (wide)
  "col-span-2 md:col-span-1", // 3 – bottom left (wide)
  "col-span-1 md:col-span-1", // 4 – bottom middle
  "col-span-1 md:col-span-1", // 5 – bottom right
];

export default function CampusExperience() {
  return (
    <section className="container-x relative z-10">
      <Reveal variant="fade-up">
        <h2 className="max-w-2xl font-sans text-4xl font-bold leading-tight text-navy max-md:text-3xl sm:text-5xl md:text-6xl">
          Sua Universidade <span className="text-redDark"> Vai Além</span> da sala
          de aula.
        </h2>
      </Reveal>
      <Reveal variant="fade-up" delay={150}>
        <p className="mt-4 max-w-xl font-medium text-redDark text-xl leading-tight max-md:text-base">
          Uma estrutura completa, com ambientes modernos e espaços preparados para
          você aprender na prática, desenvolver suas habilidades e viver cada
          etapa da sua jornada universitária.
        </p>
      </Reveal>

      {/* IMAGE DIV */}
      <div className="mt-10 grid grid-cols-2 auto-rows-[11rem] gap-3 sm:auto-rows-[20rem] md:grid-cols-[7fr_3fr_3fr] md:gap-3">
        {beyondItems.slice(0, 5).map((item, i) => (
          <BentoImage
            key={`${item.label}-${i}`}
            item={item}
            priority={i === 0}
            delay={i * 120}
            className={tileClasses[i]}
          />
        ))}
      </div>
    </section>
  );
}

function BentoImage({
  item,
  className,
  priority = false,
  delay = 0,
}: {
  item: { image: string; label: string; alt: string };
  className?: string;
  priority?: boolean;
  delay?: number;
}) {
  return (
    <Reveal
      variant="zoom-in"
      delay={delay}
      className={`relative overflow-hidden rounded-3xl shadow-sm ${className ?? ""}`}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        priority={priority}
        className="reveal-media object-cover"
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      {/* Noise on the photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={noiseStyle}
      />

      {/* White pill label — slides up after the tile appears (driven by the tile's Reveal) */}
      <span className="reveal-child absolute bottom-3 left-3 rounded-xl bg-white px-4 py-2.5 text-[10px] font-bold uppercase tracking-wide text-navy shadow-sm sm:bottom-4 sm:left-4 sm:text-xs">
        {item.label}
      </span>
    </Reveal>
  );
}
