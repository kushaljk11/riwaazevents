"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Container from "../ui/Container";
import { testimonialsData } from "../../data/testimonials";
import { RevealText, FadeUp } from "../animation";

export default function TestimonialsSection() {
  const items = testimonialsData.items;
  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const currentItem = items[activeIndex];

  const prev = () => setActiveIndex((i) => (i - 1 + total) % total);
  const next = () => setActiveIndex((i) => (i + 1) % total);

  return (
    <section className="relative bg-ivory py-16 md:py-20 lg:py-24 overflow-hidden select-none border-b border-charcoal/10">
      <Container size="wide" className="relative z-10 px-6 md:px-12 lg:px-16">

        {/* ── Top Row: Eyebrow + Heading Left | Description + Navigation Right ── */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 md:mb-12 gap-6">

          {/* Left: Eyebrow + Heading */}
          <div className="max-w-lg">
            <FadeUp delay={0.1} y={15} className="mb-2">
              <span className="font-editorial text-xs md:text-sm tracking-wider text-gold-dark font-normal">
                {testimonialsData.eyebrow}
              </span>
            </FadeUp>

            <h2 className="font-editorial text-3xl md:text-4xl lg:text-[42px] font-normal text-charcoal leading-[1.18] tracking-normal">
              <RevealText as="span" delay={0.2} duration={1.1} className="block">
                {testimonialsData.titlePrefix}
              </RevealText>
              <RevealText as="span" delay={0.35} duration={1.1} className="block mt-0.5">
                <span className="italic font-normal text-gold-dark">
                  {testimonialsData.titleHighlight}
                </span>
              </RevealText>
            </h2>
          </div>

          {/* Right: Description + Circular Arrow Buttons */}
          <div className="flex flex-col items-start md:items-end gap-3.5 md:pt-1">
            <FadeUp delay={0.3} y={15}>
              <p className="font-sans text-xs md:text-[13px] text-muted leading-relaxed font-normal max-w-xs md:text-right">
                {testimonialsData.description}
              </p>
            </FadeUp>

            {/* Navigation Arrows with subtle soft circular background */}
            <FadeUp delay={0.4} y={10}>
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="h-8.5 w-8.5 rounded-full bg-[#EAE4D9]/80 hover:bg-[#E0D8CB] text-charcoal/70 hover:text-charcoal flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <ArrowLeft className="h-4 w-4 stroke-[1.5]" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="h-8.5 w-8.5 rounded-full bg-[#EAE4D9]/80 hover:bg-[#E0D8CB] text-charcoal/70 hover:text-charcoal flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95"
                >
                  <ArrowRight className="h-4 w-4 stroke-[1.5]" />
                </button>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* ── Bottom Row: Photo Left + Testimonial Message Box (#F3EEE4) Right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-stretch">

          {/* Left Column: Couple Photo */}
          <div className="lg:col-span-4 flex">
            <FadeUp delay={0.2} y={20} className="w-full h-full">
              <div className="relative w-full h-80 sm:h-96 md:h-105 lg:h-full min-h-85 lg:min-h-105 overflow-hidden rounded-lg bg-charcoal">
                {items.map((item, idx) => (
                  <div
                    key={item.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-out ${idx === activeIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105 pointer-events-none"
                      }`}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.clientName} - ${item.event}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 35vw"
                      priority={idx === 0}
                      className="object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Testimonial Message Box with #F3EEE4 background */}
          <div className="lg:col-span-8 flex flex-col">
            <FadeUp delay={0.3} y={20} className="w-full h-full">
              <div className="bg-[#F3EEE4] rounded-lg p-8 sm:p-10 md:p-12 lg:p-14 flex flex-col justify-between h-full min-h-85 lg:min-h-105">

                {/* Top Section: Double-Quote + Event + Quote Text */}
                <div>
                  {/* Large Decorative Double-Quote Mark */}
                  <span
                    className="font-editorial text-5xl md:text-6xl lg:text-7xl text-maroon leading-none select-none block mb-3 md:mb-4"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>

                  {/* Event Label */}
                  <div className="min-h-6">
                    <p
                      key={`event-${activeIndex}`}
                      className="font-editorial italic text-xs md:text-sm text-muted/90 font-normal tracking-wide mb-3 animate-fade-in"
                    >
                      {currentItem.event}
                    </p>
                  </div>

                  {/* Quote Text */}
                  <div className="min-h-20 md:min-h-24">
                    <p
                      key={`quote-${activeIndex}`}
                      className="font-editorial text-base sm:text-lg md:text-xl lg:text-[21px] text-charcoal font-normal leading-relaxed tracking-wide max-w-2xl animate-fade-in"
                    >
                      {currentItem.quote}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Stars + Client Name */}
                <div className="mt-8 pt-2">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${i < currentItem.stars
                            ? "text-charcoal fill-charcoal"
                            : "text-charcoal/30 fill-transparent stroke-[1.5]"
                          }`}
                      />
                    ))}
                  </div>

                  {/* Client Name with underline */}
                  <p
                    key={`name-${activeIndex}`}
                    className="font-editorial text-sm md:text-base text-charcoal font-normal tracking-wide underline underline-offset-4 decoration-charcoal/40 inline-block animate-fade-in"
                  >
                    {currentItem.clientName}
                  </p>
                </div>

              </div>
            </FadeUp>
          </div>

        </div>
      </Container>
    </section>
  );
}
