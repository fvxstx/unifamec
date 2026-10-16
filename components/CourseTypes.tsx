import Image from "next/image";
import { ChevronRight, GraduationCap } from "lucide-react";
import { courseTypes } from "@/lib/data";
import { noiseStyle } from "@/utils/noise";
import Reveal from "@/components/Reveal";


export default function CourseTypes() {
  return (
    <section id="cursos" className="relative py-16 md:py-24 bg-pattern bg-[length:max(100%,1800px)_auto] bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#F4F4F6]/75 backdrop-blur-[2px]"></div>

      {/* Noise on the background only (sits below the content, which is z-10) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={noiseStyle}
      />

      <div className="relative z-10 container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal variant="fade-up">
            <h2 className="max-w-md font-display text-5xl font-bold leading-tight text-navy max-md:text-3xl sm:text-4xl md:text-5xl">
              Escolha o curso
              <br />
               que combina com o seu futuro
            </h2>
          </Reveal>

          <ul className="mt-16 flex flex-col gap-4 max-md:mt-10">
            {courseTypes.map((course, i) => (
              <Reveal
                as="li"
                key={course.title}
                variant="fade-right"
                delay={150 + i * 150}
                className="flex gap-4 py-6 first:pt-0"
              >
                <GraduationCap className="mt-1 h-6 w-6 flex-shrink-0 text-navy" />
                <div>
                  <h3 className="font-display text-4xl font-medium text-navy max-md:text-2xl">
                    {course.title}
                  </h3>
                  <p className="relative right-9 mt-3 max-w-sm text-xl leading-relaxed text-navy max-md:right-0 max-md:text-base">
                    {course.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal
          variant="clip-up"
          duration={1200}
          delay={200}
          className="relative h-[420px] w-full overflow-hidden rounded-3xl max-md:h-64 sm:h-[520px] lg:h-auto"
        >
          <Image
            src="/images/section-1.jpg"
            alt="Estudantes caminhando no corredor da faculdade"
            fill
            className="reveal-media object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />

          {/* Noise on the photo only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={noiseStyle}
          />
        </Reveal>
      </div>
    </section>
  );
}
