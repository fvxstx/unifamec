"use client";

import { useEffect, useState } from "react";
import { markPageReady } from "@/utils/pageReady";

const MAX_WAIT = 10000; // ms — never block the page longer than this
const FADE_DURATION = 500; // ms

/**
 * Full-screen loader shown until every image on the page (including
 * lazy next/image ones and CSS background images) has finished loading.
 */
export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [hiding, setHiding] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    document.documentElement.style.overflow = "hidden";

    const waitForImg = (img: HTMLImageElement) =>
      new Promise<void>((resolve) => {
        if (img.complete) return resolve();
        img.addEventListener("load", () => resolve(), { once: true });
        img.addEventListener("error", () => resolve(), { once: true });
      });

    const waitForUrl = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = img.onerror = () => resolve();
        img.src = src;
      });

    // <img> tags: force lazy ones to load now, otherwise they'd wait for scroll
    const imgs = Array.from(document.querySelectorAll("img"));
    imgs.forEach((img) => {
      if (img.loading === "lazy") img.loading = "eager";
    });

    // CSS background images (e.g. bg-pattern, bg-gradiente)
    const bgUrls = new Set<string>();
    document.querySelectorAll<HTMLElement>("body *").forEach((el) => {
      const bg = getComputedStyle(el).backgroundImage;
      bg.replace(/url\(["']?(.*?)["']?\)/g, (_, url: string) => {
        bgUrls.add(url);
        return "";
      });
    });

    const tasks = [
      ...imgs.map(waitForImg),
      ...Array.from(bgUrls).map(waitForUrl),
    ];
    const total = tasks.length || 1;
    let loaded = 0;
    tasks.forEach((t) =>
      t.then(() => {
        loaded += 1;
        if (!cancelled) setProgress(Math.round((loaded / total) * 100));
      }),
    );

    const finish = () => {
      if (cancelled) return;
      cancelled = true;
      setProgress(100);
      setHiding(true);
      document.documentElement.style.overflow = "";
      markPageReady();
      setTimeout(() => setDone(true), FADE_DURATION);
    };

    const timeout = setTimeout(finish, MAX_WAIT);
    Promise.all(tasks).then(finish);

    return () => {
      clearTimeout(timeout);
      cancelled = true;
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (done) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Carregando"
      className={`page-loader fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-8 bg-white transition-opacity ${
        hiding ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_DURATION}ms` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/logo-blue.png" alt="Unifamec" className="h-auto w-48 md:w-64" />

      <div className="h-1.5 w-48 overflow-hidden rounded-full bg-navy/10 md:w-64">
        <div
          className="h-full rounded-full bg-coral transition-[width] duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="font-sans text-sm font-medium text-navy/70">{progress}%</span>
    </div>
  );
}
