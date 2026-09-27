"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import { contactData } from "../../data/contact";
import { RevealText, FadeUp, useParallax } from "../animation";

export default function ContactHero() {
  const bgRef = useParallax<HTMLDivElement>({ speed: 7 });

  return (
    <section className="relative min-h-[72vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-maroon-dark">
      {/* Background Hero Image with luxury overlay and subtle parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="relative h-full w-full will-change-transform scale-105">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
            alt="Riwaaz Luxury Events Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-maroon/95 via-black/60 to-black/75 pointer-events-none" />
      </div>

      {/* Hero Content */}
      <Container size="wide" className="relative z-10 py-28 md:py-36 text-center md:text-left">
        <div className="max-w-3xl">
          <FadeUp delay={0.1} y={15} className="mb-4">
            <span className="font-sans text-xs font-semibold tracking-[0.28em] text-primary uppercase">
              {contactData.badge}
            </span>
          </FadeUp>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-white-text tracking-wide leading-tight mb-4">
            <RevealText as="span" delay={0.25} duration={1.1}>
              {contactData.titlePrefix}
            </RevealText>
            <RevealText as="span" delay={0.45} duration={1.1}>
              <span className="font-editorial italic font-normal text-gold-light">
                {contactData.titleHighlight}
              </span>
            </RevealText>
          </h1>

          <FadeUp delay={0.65} y={20}>
            <p className="font-sans text-sm md:text-base text-white-text/80 tracking-widest max-w-xl">
              {contactData.subtitle}
            </p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
}
