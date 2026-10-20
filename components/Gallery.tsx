"use client";

import { useCallback, useEffect, useRef, useState, type TouchEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems } from "@/lib/data";
import Reveal from "@/components/Reveal";

const items = galleryItems.slice(0, 9);

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    []
  );
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % items.length)),
    []
  );

  // Keyboard navigation + lock page scroll while the lightbox is open
  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, prev, next]);

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx > 0) prev();
    else next();
  };

  const current = openIndex !== null ? items[openIndex] : null;

  return (
    <section className="container-x relative z-10 mt-36 max-md:mt-20">
      <Reveal variant="fade-up">
        <h2 className="max-w-md font-sans text-3xl font-black leading-tight text-navy sm:text-4xl md:text-5xl">
          Memórias que criamos juntos!
        </h2>
      </Reveal>
      <Reveal variant="fade-up" delay={150}>
        <p className="mt-4 max-w-xl text-lg font-semibold leading-relaxed text-navy max-md:text-base">
          Uma estrutura completa, com ambientes modernos e espaços preparados para
          você aprender na prática, desenvolver suas
        </p>
      </Reveal>

      {/* GALLERY GRID */}
      <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-3 gap-y-3 max-md:mt-10 md:mt-20 md:grid-cols-3 md:gap-x-8">
        {items.map((item, i) => {
          const isMiddle = i % 3 === 1;

          return (
            // Reveal wraps the tile so its entrance transform doesn't fight
            // the tile's own offset/hover transforms. Columns cascade in.
            <Reveal
              key={`${item.image}-${i}`}
              variant="fade-up"
              delay={(i % 3) * 120}
              // 2-col grid on mobile: show only 6 tiles (3 even rows)
              className={`relative hover:z-10 ${i >= 6 ? "max-md:hidden" : ""}`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Ampliar imagem: ${item.alt}`}
                className={`relative block aspect-square w-full cursor-zoom-in overflow-hidden rounded-3xl transition-transform duration-300 ease-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy ${
                  isMiddle ? "md:-translate-y-8" : ""
                }`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 30vw, 50vw"
                />
              </button>
            </Reveal>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      {current && openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Galeria de imagens"
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-4 text-white md:px-8">
            <span className="text-sm font-semibold tabular-nums">
              {openIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="rounded-full p-2 transition-colors hover:bg-white/10"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* Main image */}
          <div className="relative flex flex-1 items-center justify-center px-4 md:px-20">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Imagem anterior"
              className="absolute left-2 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 max-md:hidden md:left-6"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>

            <div
              className="relative h-full max-h-[75vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                key={current.image}
                src={current.image}
                alt={current.alt}
                fill
                className="animate-lightbox-in object-contain"
                sizes="100vw"
                priority
              />
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Próxima imagem"
              className="absolute right-2 z-10 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 max-md:hidden md:right-6"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          </div>

          {/* Thumbnails */}
          <div
            className="flex gap-2 overflow-x-auto px-4 py-4 md:justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {items.map((item, i) => (
              <button
                key={`thumb-${item.image}-${i}`}
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Ver imagem ${i + 1}`}
                aria-current={i === openIndex}
                className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl transition-opacity md:h-20 md:w-20 ${
                  i === openIndex
                    ? "opacity-100 ring-2 ring-white"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
