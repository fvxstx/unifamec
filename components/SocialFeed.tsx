"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Instagram } from "lucide-react";
import { socialPosts } from "@/lib/data";

export default function SocialFeed() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 300;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradiente bg-cover bg-center py-16 md:py-24">
      <div className="absolute inset-0 bg-navy-deep/85" />

      <div className="container-x relative">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
            Acompanhe a <span className="text-coral">Unifamec</span>
          </h2>
          <p className="mt-3 text-sm text-white/70 md:text-base">
            Nos siga nas redes sociais!
          </p>
        </div>

        <div
          ref={trackRef}
          className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {socialPosts.map((post, i) => (
            <div
              key={i}
              data-card
              className="relative h-80 w-[75%] flex-shrink-0 snap-center overflow-hidden rounded-3xl sm:w-[340px]"
            >
              <Image
                src={post.image}
                alt={`Post do Instagram ${post.handle}`}
                fill
                className="object-cover"
                sizes="340px"
              />
              <div className="absolute inset-x-0 top-0 flex items-center gap-2 bg-gradient-to-b from-black/60 to-transparent p-4">
                <Instagram className="h-5 w-5 text-white" />
                <span className="text-sm font-semibold text-white">
                  {post.handle}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Post anterior"
            onClick={() => scrollBy(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            aria-label="Próximo post"
            onClick={() => scrollBy(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
