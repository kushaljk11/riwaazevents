"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { isReducedMotion } from "./hooks/useAnimation";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number; // 0.1 to 0.4
}

export default function MagneticButton({
  children,
  className = "",
  strength = 0.25,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || isReducedMotion()) return;

    // Check if device supports fine hover (desktop only)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const xTo = gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.8, ease: "power3.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      xTo(deltaX);
      yTo(deltaY);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={buttonRef} className={`inline-block ${className}`}>
      {children}
    </div>
  );
}
