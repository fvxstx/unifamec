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
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container-x flex items-center justify-between py-6">
        <Link href="/" className="font-display text-xl font-extrabold text-white tracking-tight">
          <Image src="/logo.png" alt="Unifamec" width={100} height={100} />
        </Link>

        <div className="flex gap-4">
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`text-lg font-medium text-white/90 hover:text-white transition-colors ${index === 0 ? "border-b-2 border-red-500 font-bold" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center rounded-full bg-coral px-10 py-2 text-lg font-bold text-white transition hover:opacity-90"
          >
            Inscreva-se
          </a>
        </div>
        
        <button
          type="button"
          aria-label="Abrir menu"
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-navy/95 backdrop-blur px-4 pb-6 pt-2">
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
