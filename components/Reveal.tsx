"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type RevealVariant =
  | "fade-up"
  | "fade-down"
  | "fade-left" // enters from the right, moving left
  | "fade-right" // enters from the left, moving right
  | "zoom-in"
  | "blur-up"
  | "clip-up";

type RevealProps = {
  children?: ReactNode;
  variant?: RevealVariant;
  delay?: number; // ms
  duration?: number; // ms
  className?: string;
  as?: ElementType;
  once?: boolean;
};

/**
 * Animates its children into view when scrolled into the viewport.
 * The animation itself lives in globals.css (.reveal / .reveal-*).
 */
export default function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  as: Tag = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  const style = {
    "--reveal-delay": `${delay}ms`,
    "--reveal-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal reveal-${variant} ${visible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
