"use client";

import React, { ElementType } from "react";
import { useStagger } from "./hooks/useAnimation";

interface StaggerContainerProps {
  children: React.ReactNode;
  as?: ElementType;
  childSelector?: string;
  className?: string;
  stagger?: number;
  delay?: number;
  y?: number;
}

export default function StaggerContainer({
  children,
  as: Component = "div",
  childSelector = ".stagger-item",
  className = "",
  stagger = 0.08,
  delay = 0,
  y = 25,
}: StaggerContainerProps) {
  const ref = useStagger<HTMLDivElement>(childSelector, {
    stagger,
    delay,
    y,
  });

  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
