import Image from "next/image";
import { courseOptions, modalityOptions, specificCourseOptions } from "@/lib/data";
import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradiente bg-cover bg-center">
      <div className="container-x relative grid grid-cols-1 items-end gap-8 pt-8 pb-26 max-md:gap-5 max-md:pb-8 max-md:pt-6 lg:grid-cols-2 lg:gap-10 lg:pt-36 lg:pb-0">
        {/* Student photo */}
        <div className="relative order-1 mx-auto aspect-[4/5] w-full max-w-xs max-md:absolute max-md:right-0 max-md:top-0 max-md:z-0 max-md:aspect-auto max-md:h-[300px] max-md:w-[58%] max-md:max-w-none lg:order-1 lg:aspect-auto lg:h-[920px] lg:max-w-none">
          <Reveal variant="fade-right" duration={1100} className="absolute inset-0">
            <Image
              src="/images/man-hero.png"
              alt="Estudante da Unifamec sorrindo, vestindo jaqueta jeans"
              fill
              priority
              className="rounded-3xl object-cover object-top lg:rounded-none lg:rounded-tr-[2.5rem] lg:object-center"
              sizes="(min-width: 1024px) 45vw, 90vw"
            />
          </Reveal>
        </div>

        {/* Title + form */}
        <div className="relative z-10 order-2 flex flex-col gap-8 max-md:gap-5 lg:pb-16">
          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            <Reveal as="span" variant="blur-up" delay={250} duration={1000} className="block">
              <Image
                src="/images/lettering.png"
                alt="Sua escolha começa aqui"
                width={600}
                height={150}
                className="mr-auto block max-md:h-auto max-md:w-[88%] max-md:max-w-[340px]"
              />
            </Reveal>
          </h1>

          <Reveal variant="fade-up" delay={500}>
          <form
            id="contato"
            className="w-full rounded-3xl bg-white p-6 shadow-xl sm:p-8"
          >
            <h2 className="mb-5 font-display text-4xl font-bold text-navy max-md:text-3xl">
              Entre em contato!
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="sr-only" htmlFor="nome">
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="Nome Completo *"
                  className="w-full rounded-lg border-none font-medium bg-[#EAE9F6] px-4 py-3 text-sm text-navy  focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="sr-only" htmlFor="email">
                  Melhor e-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Seu melhor email *"
                  className="w-full rounded-lg border-none font-medium bg-[#EAE9F6] px-4 py-3 text-sm text-navy focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="tipo-curso">
                  Tipo de curso
                </label>
                <select
                  id="tipo-curso"
                  name="tipo-curso"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border-none font-medium bg-[#EAE9F6] px-4 py-3 text-sm text-navy/70 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
                >
                  <option value="" disabled>
                    Tipo de Curso *
                  </option>
                  {courseOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="sr-only" htmlFor="modalidade">
                  Modalidade
                </label>
                <select
                  id="modalidade"
                  name="modalidade"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border-none font-medium bg-[#EAE9F6] px-4 py-3 text-sm text-navy/70 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
                >
                  <option value="" disabled>
                    Modalidade *
                  </option>
                  {modalityOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="sr-only" htmlFor="telefone">
                  Telefone
                </label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  placeholder="Telefone *"
                  className="w-full rounded-lg border-none font-medium bg-[#EAE9F6] px-4 py-3 text-sm text-navy  focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="curso">
                  Cursos
                </label>
                <select
                  id="curso"
                  name="curso"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border-none font-medium bg-[#EAE9F6] px-4 py-3 text-sm text-navy/70 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
                >
                  <option value="" disabled>
                    Cursos *
                  </option>
                  {specificCourseOptions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-fit rounded-xl bg-coral px-4 py-2 text-sm font-extrabold text-white transition hover:opacity-90 max-md:w-full max-md:justify-center"
            >
              Entrar em contato
            </button>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
