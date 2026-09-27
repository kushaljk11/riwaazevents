"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { footerData } from "../../data/footer";
import { isReducedMotion } from "../animation";

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = footerRef.current;
    if (!el || isReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cols = el.querySelectorAll(".footer-col");
      if (cols.length) {
        gsap.fromTo(
          cols,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-maroon-dark text-white-text pt-16 md:pt-20 pb-10 md:pb-12 border-t border-white-text/10"
    >
      <Container size="wide">
        {/* Main Footer Grid (4-2-3-3 = 12 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 pb-12 md:pb-16 border-b border-white-text/10">
          {/* Column 1: Brand & Philosophy (4 cols) */}
          <div className="footer-col md:col-span-4 space-y-6 will-change-transform">
            <Logo theme="dark" size="lg" />

            <p className="font-editorial italic text-lg md:text-xl text-gold-light/90 font-normal leading-relaxed max-w-sm">
              {footerData.tagline}
            </p>

            {/* Social Media Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              {footerData.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-xs uppercase tracking-[0.2em] text-white-text/60 hover:text-primary transition-colors duration-200"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Menu (2 cols) */}
          <div className="footer-col md:col-span-2 md:pl-2 will-change-transform">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-5">
              MENU
            </h3>
            <ul className="space-y-3">
              {footerData.menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-xs md:text-sm text-white-text/75 hover:text-primary transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="footer-col md:col-span-3 md:pl-2 will-change-transform">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-5">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {footerData.servicesLinks.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="font-sans text-xs md:text-sm text-white-text/75 hover:text-primary transition-colors duration-200 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Studio (3 cols) */}
          <div className="footer-col md:col-span-3 md:pl-2 will-change-transform">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-primary mb-5">
              CONTACT
            </h3>
            <div className="space-y-3 font-sans text-xs md:text-sm text-white-text/75">
              <div>
                <a
                  href={`mailto:${footerData.contact.email}`}
                  className="hover:text-primary transition-colors duration-200 block"
                >
                  {footerData.contact.email}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${footerData.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-primary transition-colors duration-200 block"
                >
                  {footerData.contact.phone}
                </a>
              </div>
              <div className="text-white-text/60">
                {footerData.contact.studio}
              </div>
              <div className="text-white-text/60">
                {footerData.contact.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & location bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] md:text-xs tracking-[0.2em] uppercase text-white-text/50 font-sans">
          <p>{footerData.bottomBar.copyright}</p>
          <p>{footerData.bottomBar.location}</p>
        </div>
      </Container>
    </footer>
  );
}
