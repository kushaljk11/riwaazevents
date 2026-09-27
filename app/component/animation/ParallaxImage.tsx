"use client";

import React from "react";
import { useParallax } from "./hooks/useAnimation";

interface ParallaxImageProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // range -8 to 8
}

export default function ParallaxImage({
  children,
  className = "",
  speed = 5,
}: ParallaxImageProps) {
  const innerRef = useParallax<HTMLDivElement>({ speed });

  return (
    <div className={`overflow-hidden relative ${className}`}>
      <div ref={innerRef} className="will-change-transform h-full w-full">
        {children}
      </div>
    </div>
  );
}
