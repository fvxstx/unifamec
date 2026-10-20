"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { ingressTabs } from "@/lib/data";

export default function IngressCard() {
  const [activeTab, setActiveTab] = useState(0);
  const { options } = ingressTabs[activeTab];

  return (
    <div
      id="contato"
      className="w-full rounded-3xl bg-white p-6 shadow-xl sm:p-8"
    >
      <h2 className="font-display text-3xl font-bold text-navy max-md:text-2xl">
        Como você quer ingressar ?
      </h2>
      <p className="mt-1 text-sm text-navy/60">
        Escolha o curso e a forma de ingresso para abrir sua inscrição.
      </p>

      <div
        role="tablist"
        aria-label="Tipo de curso"
        className="mt-5 grid grid-cols-2 gap-1 rounded-xl bg-[#EAE9F6] p-1"
      >
        {ingressTabs.map((tab, i) => {
          const isActive = i === activeTab;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              id={`ingresso-tab-${i}`}
              aria-selected={isActive}
              aria-controls="ingresso-panel"
              onClick={() => setActiveTab(i)}
              className={`rounded-lg px-4 py-3 text-base font-bold transition max-md:text-sm ${
                isActive
                  ? "bg-coral text-white shadow"
                  : "text-navy hover:bg-white/60"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <ul
        id="ingresso-panel"
        role="tabpanel"
        aria-labelledby={`ingresso-tab-${activeTab}`}
        className="mt-4 flex flex-col gap-3"
      >
        {options.map((option) => (
          <li key={option.title}>
            <a
              href={option.href}
              className="group flex items-center justify-between gap-4 rounded-xl border border-navy/20 px-4 py-3 transition hover:border-coral"
            >
              <span>
                <span className="block font-display text-lg font-bold text-navy">
                  {option.title}
                </span>
                <span className="block text-sm text-navy/70">
                  {option.description}
                </span>
              </span>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-coral text-white transition group-hover:bg-coral-dark">
                <ChevronRight className="h-5 w-5" strokeWidth={3} aria-hidden />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
