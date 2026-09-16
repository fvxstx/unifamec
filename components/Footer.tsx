import { Phone, MessageCircle, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-deep pt-16 pb-8 text-white">
      <div className="container-x">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="lg:max-w-xs">
            <p className="font-display text-xl font-extrabold">Unifamec</p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:flex-1 lg:gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white/60">Endereço</h3>
              <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-white/85">
                Avenida Jorge Amado, s/nº, bairro Ponto Certo, Camaçari,
                Bahia, CEP 42.800-121
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/60">
                Nossos Cursos
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-white/85">
                <li>Cursos de Graduação</li>
                <li>Cursos de Pós-Graduação</li>
                <li>Cursos Técnicos</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white/60">Contato</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/85">
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-coral" />
                  1111-1111
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle size={16} className="text-coral" />
                  (11) 9999-9999
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-coral" />
                  contato@unifamec.edu.br
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4 lg:items-start">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-white/10"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        <hr className="my-10 border-white/10" />

        <p className="text-center text-xs leading-relaxed text-white/50">
          © 2026 Unifamec. Todos os direitos reservados. Proibida a
          reprodução total ou parcial deste site sem autorização prévia.
        </p>
      </div>
    </footer>
  );
}
