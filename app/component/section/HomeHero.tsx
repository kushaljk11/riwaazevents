"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-end justify-start overflow-hidden bg-maroon-dark">
      {/* Background Hero Mandap Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/heroimage.png"
          alt="Riwaaz Events Grand Floral Mandap"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Luxury multi-stop gradient for clear text readability while showcasing the floral mandap */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/45" />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Hero Content (Positioned at bottom-left matching design) */}
      <Container size="wide" className="relative z-10 pb-16 md:pb-20 pt-36">
        <div className="max-w-3xl md:max-w-4xl text-left">
          {/* Main Headline */}
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-white-text leading-tight tracking-wide mb-3">
            <span className="block md:whitespace-nowrap">
              Carried with tradition. Celebrated
            </span>
            <span className="font-editorial italic font-normal text-gold-light block mt-1">
              With Elegance
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-xs md:text-sm text-white-text/85 leading-relaxed max-w-xl mb-8 font-normal">
            A calming retreat at Ananda Spa created to restore balance, renew
            your energy, and give you space to truly unwind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sans text-xs md:text-sm font-medium tracking-[0.16em] bg-primary text-white-text hover:bg-gold-light active:scale-[0.99] transition-all duration-300 py-3 md:py-3.5 px-6 md:px-7 select-none cursor-pointer"
            >
              Book Appointment
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center font-sans text-xs md:text-sm font-medium tracking-[0.16em] border border-white-text/60 text-white-text hover:bg-white-text hover:text-charcoal active:scale-[0.99] transition-all duration-300 py-3 md:py-3.5 px-6 md:px-7 select-none cursor-pointer"
            >
              Plan your event
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
