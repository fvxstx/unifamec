import {
  PiInstagramLogoBold,
  PiLinkedinLogoBold,
  PiWhatsappLogoBold,
} from "react-icons/pi";
import Reveal from "@/components/Reveal";

const socials = [
  { label: "WhatsApp", href: "#", Icon: PiWhatsappLogoBold },
  { label: "Instagram", href: "#", Icon: PiInstagramLogoBold },
  { label: "LinkedIn", href: "#", Icon: PiLinkedinLogoBold },
];

const courses = [
  { label: "Cursos de Graduação", href: "#" },
  { label: "Cursos de Pós Graduação", href: "#" },
  { label: "Cursos Técnicos", href: "#" },
];

export default function Footer() {
  return (
    <footer className="font-sans text-white">
      {/* MAIN AREA */}
      <div className="bg-[#1f2a3a] px-6 py-10 lg:px-10 lg:pb-12 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[14rem_1.6fr_1fr_1.4fr_auto] lg:gap-x-8">
          {/* Logo */}
          <Reveal variant="fade-up" className="flex items-start lg:items-center">
            <img
              src="/logo-blue.png"
              alt="Centro Universitário UniFamec"
              className="h-auto w-[180px] max-w-full lg:w-[200px]"
            />
          </Reveal>

          {/* Endereço */}
          <Reveal variant="fade-up" delay={100}>
            <h3 className="font-display text-base font-bold lg:text-lg">
              Endereço
            </h3>
            <p className="mt-1 max-w-[20rem] text-xs leading-relaxed lg:text-[13px]">
              Avenida Jorge Amado, s/nº, no bairro Ponto Certo, Camaçari,
              Bahia, CEP 42.800-121
            </p>
          </Reveal>

          {/* Nossos Cursos */}
          <Reveal variant="fade-up" delay={200}>
            <h3 className="font-display text-base font-bold lg:text-lg">
              Nossos Cursos
            </h3>
            <ul className="mt-2 text-xs leading-relaxed lg:text-[13px]">
              {courses.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="underline hover:opacity-80">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Contato */}
          <Reveal variant="fade-up" delay={300}>
            <h3 className="font-display text-base font-bold lg:text-lg">
              Contato
            </h3>
            <ul className="mt-1 text-xs leading-relaxed lg:text-[13px]">
              <li>
                <strong className="font-bold">Telefone</strong>: 1111-111
              </li>
              <li>
                <strong className="font-bold">WhatsApp</strong>: (11)
                9999-99999
              </li>
              <li>
                <strong className="font-bold">e-mail</strong>:{" "}
                <a
                  href="mailto:contato@unifamec.edu.br"
                  className="hover:underline max-md:break-all"
                >
                  contato@unifamec.edu.br
                </a>
              </li>
            </ul>
          </Reveal>

          {/* Redes Sociais */}
          <Reveal variant="fade-up" delay={400}>
            <h3 className="font-display text-base font-bold lg:text-lg">
              Redes Sociais
            </h3>
            <div className="mt-2 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition hover:opacity-80"
                >
                  <Icon size={26} />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="bg-[#00095e] px-4 py-1.5 text-center text-[11px] leading-snug sm:text-xs">
        © 2026 Unifamec. Todos os direitos reservados. Proibida a reprodução
        total ou parcial deste site sem autorização prévia.
      </div>
    </footer>
  );
}
