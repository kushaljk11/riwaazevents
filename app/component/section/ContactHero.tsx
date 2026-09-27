"use client";

import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import { contactData } from "../../data/contact";

export default function ContactHero() {
  return (
    <section className="relative min-h-[72vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-maroon-dark">
      {/* Background Hero Image with luxury overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
          alt="Riwaaz Luxury Events Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-maroon/95 via-black/60 to-black/75" />
      </div>

      {/* Hero Content */}
      <Container size="wide" className="relative z-10 py-28 md:py-36 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="mb-4">
            <span className="font-sans text-xs font-semibold tracking-[0.28em] text-primary uppercase">
              {contactData.badge}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-normal text-white-text tracking-wide leading-tight mb-4">
            {contactData.titlePrefix}
            <span className="font-editorial italic font-normal text-gold-light">
              {contactData.titleHighlight}
            </span>
          </h1>

          <p className="font-sans text-sm md:text-base text-white-text/80 tracking-widest max-w-xl">
            {contactData.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
