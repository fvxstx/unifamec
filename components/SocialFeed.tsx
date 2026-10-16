"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Heart,
  MessageCircle,
  MoreVertical,
  Send,
} from "lucide-react";
import { socialPosts } from "@/lib/data";
import Reveal from "@/components/Reveal";

const GAP = 28; // keep in sync with gap-7 (1.75rem)

export default function SocialFeed() {
  const trackRef = useRef<HTMLDivElement>(null);
  // indexes of the cards that are fully visible (the others get dimmed)
  const [visible, setVisible] = useState<Set<number>>(new Set([0, 1, 2]));

  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;

    const io = new IntersectionObserver(
      (entries) => {
        setVisible((prev) => {
          const next = new Set(prev);
          entries.forEach((e) => {
            const idx = Number((e.target as HTMLElement).dataset.index);
            if (e.intersectionRatio >= 0.95) next.add(idx);
            else next.delete(idx);
          });
          return next;
        });
      },
      { root, threshold: [0, 0.5, 0.95, 1] },
    );

    root.querySelectorAll("[data-card]").forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + GAP : 300;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradiente bg-cover bg-center py-16 md:py-20">
      <div className="container-x relative">
        <Reveal variant="fade-up">
          <h2 className="max-w-md font-sans text-4xl font-black leading-tight text-white max-md:text-3xl sm:text-6xl">
            Acompanhe a Unifamec
          </h2>
        </Reveal>
        <Reveal variant="fade-up" delay={150}>
          <p className="mt-3 text-xl font-medium text-white">
            Nos siga nas redes sociais!
          </p>
        </Reveal>
      </div>

      {/* CAROUSEL: full-width on mobile, exactly 3 cards visible from md up.
          Slides in from the right, like a feed being swiped in. */}
      <Reveal
        variant="fade-left"
        delay={250}
        duration={1000}
        className="relative mt-10 md:mx-auto md:max-w-7xl md:px-8"
      >
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-7 overflow-x-auto py-2"
        >
          {socialPosts.map((post, i) => (
            <article
              key={i}
              data-card
              data-index={i}
              className={`w-[min(72vw,320px)] flex-shrink-0 snap-center overflow-hidden rounded-xl bg-white shadow-lg transition-opacity duration-300 first:ml-[calc(50%_-_min(36vw,160px))] last:mr-[calc(50%_-_min(36vw,160px))] md:w-[calc((100%-56px)/3)] md:snap-start md:first:ml-0 md:last:mr-0 ${
                visible.has(i) ? "opacity-100" : "opacity-50"
              }`}
            >
              {/* header */}
              <header className="flex items-center justify-between px-3 py-2">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-fuchsia-600 p-[2px]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-navy text-[9px] font-bold text-white">
                      <img src={"/logo.png"} alt={post.handle} className="h-full w-full rounded-full object-cover" />
                    </span>
                  </span>
                  <span className="text-[11px] font-bold text-black">
                    {post.handle}
                  </span>
                </div>
                <MoreVertical size={14} className="text-black" />
              </header>

              {/* square photo */}
              <div className="relative aspect-square w-full">
                <Image
                  src={post.image}
                  alt={`Post do Instagram ${post.handle}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 400px, 320px"
                />
              </div>

              {/* footer actions */}
              <footer className="flex items-center justify-between px-3 py-2.5 text-black">
                <div className="flex items-center gap-3">
                  <Heart size={16} />
                  <MessageCircle size={16} />
                  <Send size={16} />
                </div>
                <Bookmark size={16} />
              </footer>
            </article>
          ))}
        </div>

        {/* ARROWS (red squares over the edges) */}
        <button
          type="button"
          aria-label="Post anterior"
          onClick={() => scrollBy(-1)}
          className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-redDark text-white shadow-md transition hover:brightness-110 md:left-1"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Próximo post"
          onClick={() => scrollBy(1)}
          className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-redDark text-white shadow-md transition hover:brightness-110 md:right-1"
        >
          <ArrowRight size={18} />
        </button>
      </Reveal>
    </section>
  );
}