"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import gsap from "gsap";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { navigationData } from "../../data/navigation";
import { MagneticButton } from "../animation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Soft entrance on initial load
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 1.0, ease: "power3.out", delay: 0.1 }
      );
    }

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${isScrolled
          ? "bg-black/30 backdrop-blur-md border-b border-white-text/10 py-1 md:py-1.5 shadow-xs"
          : "bg-linear-to-b from-black/60 via-black/25 to-transparent py-2 md:py-3"
        }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between">
          {/* Brand Logo in natural gold and white colors */}
          <Logo size="md" className="z-10" />

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-6 lg:space-x-8"
          >
            {navigationData.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative font-sans text-xs font-medium tracking-[0.22em] transition-colors duration-200 py-1 ${isActive
                      ? "text-primary font-medium"
                      : "text-white-text/85 hover:text-primary"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <MagneticButton strength={0.16}>
                <Button
                  href={navigationData.cta.href}
                  variant="outline"
                  size="sm"
                  theme="dark"
                  className="py-3! md:py-3.5! px-6 md:px-7"
                >
                  {navigationData.cta.label}
                </Button>
              </MagneticButton>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md transition-colors text-white-text hover:bg-white-text/10 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-maroon-dark/95 backdrop-blur-xl border-b border-white-text/15 shadow-2xl transition-all duration-300">
          <div className="px-6 py-8 flex flex-col space-y-6">
            <nav className="flex flex-col space-y-4">
              {navigationData.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-sans text-sm font-medium tracking-[0.2em] text-white-text hover:text-primary py-2 border-b border-white-text/10 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-primary" />
                </Link>
              ))}
            </nav>

            <div className="pt-2">
              <Button
                href={navigationData.cta.href}
                variant="outline"
                size="lg"
                theme="dark"
                className="w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navigationData.cta.label}
              </Button>
            </div>

            <div className="pt-4 border-t border-white-text/10 text-xs text-white-text/70 space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <span>+977 980 123 4567</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
