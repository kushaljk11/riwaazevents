"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Container from "../ui/Container";
import { servicesData } from "../../data/services";
import { RevealText, FadeUp, MagneticButton } from "../animation";

export default function ServicesSection() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = () => {
    const el = carouselRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanScrollLeft(el.scrollLeft > 15);
    setCanScrollRight(el.scrollLeft < maxScroll - 15);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    checkScrollLimits();
    el.addEventListener("scroll", checkScrollLimits, { passive: true });
    window.addEventListener("resize", checkScrollLimits);

    return () => {
      el.removeEventListener("scroll", checkScrollLimits);
      window.removeEventListener("resize", checkScrollLimits);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;

    const scrollDistance = el.clientWidth * 0.75;
    el.scrollBy({
      left: direction === "left" ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative bg-ivory py-16 md:py-24 overflow-hidden border-b border-charcoal/10 select-none">
      <Container size="wide" className="relative z-10 px-6 md:px-16">
        {/* Top Header Layout matching exact design */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6">
          {/* Left Title & Eyebrow */}
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Eyebrow */}
            <FadeUp delay={0.1} y={15} className="mb-2">
              <span className="font-editorial italic text-xs md:text-sm text-gold-dark font-normal">
                {servicesData.badge}
              </span>
            </FadeUp>

            {/* Main Heading (Single line on desktop) */}
            <h2 className="font-serif text-2xl md:text-3xl lg:text-[38px] xl:text-[42px] font-normal text-charcoal leading-tight tracking-wide">
              <RevealText as="span" delay={0.2} duration={1.1} className="block md:whitespace-nowrap">
                {servicesData.titlePrefix}
              </RevealText>
              <RevealText as="span" delay={0.35} duration={1.1} className="block mt-1">
                <span className="font-editorial italic font-normal text-gold-dark">
                  {servicesData.titleHighlight}
                </span>
              </RevealText>
            </h2>
          </div>

          {/* Right Subtitle & Navigation Buttons */}
          <div className="flex flex-col items-start md:items-end gap-5 max-w-md">
            <FadeUp delay={0.3} y={15}>
              <p className="font-sans text-xs md:text-[13px] text-muted md:text-right leading-relaxed font-normal">
                {servicesData.subtitle}
              </p>
            </FadeUp>

            {/* Minimal Round Arrow Controls (← →) */}
            <div className="flex items-center gap-2.5">
              <MagneticButton strength={0.15}>
                <button
                  onClick={() => handleScroll("left")}
                  disabled={!canScrollLeft}
                  aria-label="Previous services"
                  className={`h-9 w-9 md:h-10 md:w-10 rounded-full border border-charcoal/25 flex items-center justify-center transition-all duration-300 ${canScrollLeft
                      ? "text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white-text cursor-pointer active:scale-95"
                      : "text-charcoal/25 border-charcoal/15 cursor-not-allowed opacity-40"
                    }`}
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <button
                  onClick={() => handleScroll("right")}
                  disabled={!canScrollRight}
                  aria-label="Next services"
                  className={`h-9 w-9 md:h-10 md:w-10 rounded-full border border-charcoal/25 flex items-center justify-center transition-all duration-300 ${canScrollRight
                      ? "text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white-text cursor-pointer active:scale-95"
                      : "text-charcoal/25 border-charcoal/15 cursor-not-allowed opacity-40"
                    }`}
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>

      {/* Horizontal Scrollable Carousel (Contained within Container size="wide" md:px-16) */}
      <Container size="wide" className="px-6 md:px-16">
        <div
          ref={carouselRef}
          className="flex space-x-4 md:space-x-5 lg:space-x-6 overflow-x-auto scrollbar-none pb-4 pt-2 will-change-scroll snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {servicesData.services.map((service) => (
            <div
              key={service.id}
              data-cursor="EXPLORE"
              className="group relative shrink-0 w-65 md:w-72.5 lg:w-77.5 aspect-[4/4.9] overflow-hidden bg-maroon-dark snap-start transition-shadow duration-500 hover:shadow-2xl cursor-pointer"
            >
              {/* Pure Uncluttered Photography */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.heading}
                  fill
                  sizes="(max-width: 768px) 260px, (max-width: 1024px) 290px, 310px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
                />

                {/* Dark Gradient Overlay — Hidden by default, smoothly reveals on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out z-1" />
              </div>

              {/* Hover Content: Heading and Description — ONLY shown when hover */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-6 flex flex-col justify-end pointer-events-none transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                {/* Card Number */}
                <span className="font-serif text-xs md:text-sm font-normal tracking-[0.24em] text-primary mb-1">
                  {service.number}
                </span>

                {/* Card Heading */}
                <h3 className="font-serif text-2xl md:text-[26px] font-normal text-white-text tracking-wide leading-snug mb-2">
                  {service.heading}
                </h3>

                {/* Short Description */}
                <p className="font-sans text-xs md:text-sm text-white-text/85 leading-relaxed font-normal tracking-wide">
                  {service.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
