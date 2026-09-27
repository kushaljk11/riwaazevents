"use client";

import React from "react";
import { useImageReveal } from "./hooks/useAnimation";

interface RevealImageProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "down";
}

export default function RevealImage({
  children,
  className = "",
  delay = 0,
  duration = 1.3,
  direction = "up",
}: RevealImageProps) {
  const containerRef = useImageReveal<HTMLDivElement>({
    delay,
    duration,
    direction,
  });

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden relative will-change-[clip-path] ${className}`}
    >
      {children}
    </div>
  );
}
