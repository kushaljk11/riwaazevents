"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import { MagneticButton, isReducedMotion } from "../animation";

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bgImageRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const line1Ref = useRef<HTMLSpanElement | null>(null);
  const line2Ref = useRef<HTMLSpanElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // 1. Initial Cinematic Timeline on Load
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Step 1: Background image subtly scales from 1.06 -> 1 over 1.8s
      if (bgImageRef.current) {
        tl.fromTo(
          bgImageRef.current,
          { scale: 1.06 },
          { scale: 1, duration: 1.8, ease: "power3.out" },
          0
        );
      }

      // Step 2: Dark overlay gently fades into its final opacity
      if (overlayRef.current) {
        tl.fromTo(
          overlayRef.current,
          { opacity: 0.35 },
          { opacity: 1, duration: 1.5, ease: "power2.out" },
          0.1
        );
      }

      // Step 3: Main heading line 1 masked reveal
      if (line1Ref.current) {
        tl.fromTo(
          line1Ref.current,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
          0.35
        );
      }

      // Step 4: Highlighted italic/gold line 2 reveals slightly after
      if (line2Ref.current) {
        tl.fromTo(
          line2Ref.current,
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 1.1, ease: "power3.out" },
          0.55
        );
      }

      // Step 5: Description fades upward
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
          0.8
        );
      }

      // Step 6: CTA buttons appear last
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
          1.0
        );
      }

      // Subtle Controlled Parallax on Hero Image during scroll
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        if (bgImageRef.current && sectionRef.current) {
          gsap.fromTo(
            bgImageRef.current,
            { yPercent: 0 },
            {
              yPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-end justify-start overflow-hidden bg-maroon-dark"
    >
      {/* Background Hero Mandap Image with controlled parallax & zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgImageRef} className="relative h-full w-full will-change-transform">
          <Image
            src="/assets/heroimage.png"
            alt="Riwaaz Events Grand Floral Mandap"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* Luxury multi-stop gradient for clear text readability */}
        <div ref={overlayRef} className="absolute inset-0 z-1 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-black/45" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Hero Content (Positioned at bottom-left matching design) */}
      <Container size="wide" className="relative z-10 pb-16 md:pb-20 pt-36">
        <div className="max-w-3xl md:max-w-4xl text-left">
          {/* Main Headline with masked reveals */}
          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-normal text-white-text leading-tight tracking-wide mb-3">
            <span className="block overflow-hidden py-1">
              <span
                ref={line1Ref}
                className="block md:whitespace-nowrap will-change-transform"
              >
                Everything your event needs is.
              </span>
            </span>

            <span className="block overflow-hidden py-1">
              <span
                ref={line2Ref}
                className="font-editorial italic font-normal text-gold-light block will-change-transform"
              >
                Managed by Riwaaz
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="font-sans text-xs md:text-sm text-white-text/85 leading-relaxed max-w-xl mb-8 font-normal will-change-transform"
          >
            A calming retreat at Ananda Spa created to restore balance, renew
            your energy, and give you space to truly unwind.
          </p>

          {/* CTA Buttons with Magnetic effect on desktop */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 will-change-transform">
            <MagneticButton strength={0.18}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-xs md:text-sm font-medium tracking-[0.16em] bg-primary text-white-text hover:bg-gold-light active:scale-[0.99] transition-all duration-300 py-3 md:py-3.5 px-6 md:px-7 select-none cursor-pointer"
              >
                Book Appointment
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.18}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center font-sans text-xs md:text-sm font-medium tracking-[0.16em] border border-white-text/60 text-white-text hover:bg-white-text hover:text-charcoal active:scale-[0.99] transition-all duration-300 py-3 md:py-3.5 px-6 md:px-7 select-none cursor-pointer"
              >
                Plan your event
              </Link>
            </MagneticButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
