"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Unifamec", href: "#unifamec" },
  { label: "Cursos", href: "#cursos" },
  { label: "Experiência", href: "#experiencia" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 max-md:relative max-md:bg-navy">
      <div className="container-x flex items-center justify-between py-4 md:py-6">
        <Link href="/" className="font-display text-xl font-extrabold text-white tracking-tight">
          <Image src="/logo-blue.png" alt="Unifamec" width={1000} height={1000} className="h-auto w-64 max-md:w-40" />
        </Link>

        <div className="flex gap-6">
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-lg font-medium text-white/90 hover:text-white transition-colors ${index == 0 ? "border-b-2 border-red-500 font-extrabold" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center rounded-full bg-coral px-11 py-1 text-lg font-semibold text-white transition hover:opacity-90"
          >
            Inscreva-se
          </a>
        </div>
        
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-navy px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/90 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-coral px-6 py-3 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Inscreva-se
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
