import Image from "next/image";
import { ChevronRight, GraduationCap } from "lucide-react";
import { courseTypes } from "@/lib/data";

export default function CourseTypes() {
  return (
    <section id="cursos" className="py-16 md:py-24 bg-gradiente bg-cover bg-center">
      <div className="container-x grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-5xl font-extrabold leading-tight text-navy sm:text-4xl md:text-5xl">
            Escolha o curso que
            <br />
            combina com o seu futuro
          </h2>

          <ul className="mt-10 flex flex-col divide-y divide-navy/10">
            {courseTypes.map((course) => (
              <li key={course.title} className="flex gap-4 py-6 first:pt-0">
                <GraduationCap className="mt-1 h-6 w-6 flex-shrink-0 text-navy" />
                <div>
                  <h3 className="font-display text-3xl font-bold text-navy">
                    {course.title}
                  </h3>
                  <p className="mt-1 max-w-md text-lg leading-relaxed text-navy">
                    {course.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[320px] w-full overflow-hidden rounded-3xl sm:h-[420px] lg:h-auto">
          <Image
            src="/section-1.png"
            alt="Estudantes caminhando no corredor da faculdade"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>
      </div>
    </section>
  );
}
