import Image from "next/image";
import Reveal from "@/components/Reveal";
import IngressCard from "@/components/IngressCard";

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

        {/* Title + ingress card */}
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
            <IngressCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
