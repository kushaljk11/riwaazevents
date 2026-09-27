"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Check if the user has requested reduced motion
 */
export function isReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Hook to apply masked text reveal (line or container)
 */
export function useTextReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  delay?: number;
  duration?: number;
  trigger?: boolean;
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          yPercent: 100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: options?.duration ?? 1.1,
          delay: options?.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: options?.trigger !== false
            ? {
                trigger: el,
                start: "top 88%",
                once: true,
              }
            : undefined,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options?.delay, options?.duration, options?.trigger]);

  return ref;
}

/**
 * Hook to apply editorial clip-path image reveal with subtle zoom-out
 */
export function useImageReveal<T extends HTMLElement = HTMLDivElement>(options?: {
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "down";
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const initialClip =
      options?.direction === "left"
        ? "inset(0 100% 0 0)"
        : options?.direction === "down"
        ? "inset(100% 0 0 0)"
        : "inset(0 0 100% 0)";

    const img = el.querySelector("img") || el;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          once: true,
        },
      });

      tl.fromTo(
        el,
        { clipPath: initialClip },
        {
          clipPath: "inset(0 0 0% 0)",
          duration: options?.duration ?? 1.3,
          delay: options?.delay ?? 0,
          ease: "power3.inOut",
        }
      );

      if (img && img !== el) {
        tl.fromTo(
          img,
          { scale: 1.08 },
          {
            scale: 1,
            duration: options?.duration ?? 1.3,
            ease: "power3.out",
          },
          0
        );
      }
    }, el);

    return () => ctx.revert();
  }, [options?.delay, options?.direction, options?.duration]);

  return ref;
}

/**
 * Hook for subtle controlled parallax on large photography
 * Automatically disables or softens on mobile
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(options?: {
  speed?: number; // range -8 to 8
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const speed = options?.speed ?? 6;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.fromTo(
        el,
        { yPercent: -speed },
        {
          yPercent: speed,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    });

    return () => mm.revert();
  }, [options?.speed]);

  return ref;
}

/**
 * Hook for smooth, calm fade-up entrances
 */
export function useFadeUp<T extends HTMLElement = HTMLDivElement>(options?: {
  delay?: number;
  duration?: number;
  y?: number;
  trigger?: boolean;
}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          y: options?.y ?? 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: options?.duration ?? 0.95,
          delay: options?.delay ?? 0,
          ease: "power3.out",
          scrollTrigger: options?.trigger !== false
            ? {
                trigger: el,
                start: "top 86%",
                once: true,
              }
            : undefined,
        }
      );
    }, el);

    return () => ctx.revert();
  }, [options?.delay, options?.duration, options?.trigger, options?.y]);

  return ref;
}

/**
 * Hook to stagger elements within a container
 */
export function useStagger<T extends HTMLElement = HTMLDivElement>(
  childSelector: string,
  options?: {
    stagger?: number;
    delay?: number;
    duration?: number;
    y?: number;
  }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || isReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const items = el.querySelectorAll(childSelector);
      if (!items.length) return;

      gsap.fromTo(
        items,
        {
          y: options?.y ?? 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: options?.duration ?? 0.85,
          delay: options?.delay ?? 0,
          stagger: options?.stagger ?? 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [childSelector, options?.delay, options?.duration, options?.stagger, options?.y]);

  return ref;
}

/**
 * Hook for animated numerical counter (e.g. 0 -> 150+)
 */
export function useCounter<T extends HTMLElement = HTMLSpanElement>(
  targetValue: number,
  options?: {
    duration?: number;
    suffix?: string;
  }
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (isReducedMotion()) {
      el.textContent = `${targetValue}${options?.suffix ?? ""}`;
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const obj = { val: 0 };
    const suffix = options?.suffix ?? "";

    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: targetValue,
        duration: options?.duration ?? 1.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.floor(obj.val)}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [options?.duration, options?.suffix, targetValue]);

  return ref;
}
