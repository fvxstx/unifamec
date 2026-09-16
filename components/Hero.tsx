import Image from "next/image";
import { courseOptions, modalityOptions, specificCourseOptions } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradiente bg-cover bg-center">
      <div className="container-x relative grid grid-cols-1 items-end gap-10 pt-28 pb-16 lg:grid-cols-2 lg:pt-36 lg:pb-0">
        {/* Student photo */}
        <div className="relative order-1 mx-auto h-[380px] w-full max-w-sm lg:order-1 lg:h-[720px] lg:max-w-none">
          <Image
            src="/images/man-hero.png"
            alt="Estudante da Unifamec sorrindo, vestindo jaqueta jeans"
            fill
            priority
            className="rounded-3xl object-cover lg:rounded-none lg:rounded-tr-[2.5rem]"
            sizes="(min-width: 1024px) 45vw, 90vw"
          />
        </div>

        {/* Title + form */}
        <div className="order-2 flex flex-col gap-8 lg:pb-16">
          <h1 className="font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            <Image
              src="/images/lettering.png"
              alt="Sua escolha começa aqui"
              width={600}
              height={150}
              className="block"
            />
          </h1>

          <form
            id="contato"
            className="w-full rounded-3xl bg-white p-6 shadow-xl sm:p-8"
          >
            <h2 className="mb-5 font-display text-4xl font-bold text-navy">
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
              className="mt-5 w-fit rounded-xl bg-coral py-3 text-sm font-extrabold text-white transition hover:opacity-90"
            >
              Entrar em contato
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
