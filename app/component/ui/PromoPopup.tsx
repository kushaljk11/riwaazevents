"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";

export default function PromoPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // Check if user has already dismissed the popup in this browser session
    const seen = sessionStorage.getItem("riwaaz_popup_seen");
    if (seen) return;

    // Trigger popup after exactly 5 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll and listen for Escape key when popup is visible
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("riwaaz_popup_seen", "true");
  };

  if (!hasMounted || !isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Special Announcement"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300"
      onClick={handleClose}
    >
      <div
        className="relative max-w-sm sm:max-w-md md:max-w-lg w-full bg-[#160406] rounded-2xl overflow-hidden shadow-2xl border border-gold/40 transition-all duration-300 transform scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button on Top-Right Corner */}
        <button
          onClick={handleClose}
          aria-label="Close popup"
          className="absolute top-3 right-3 z-30 p-2 rounded-full bg-black/75 hover:bg-black text-white hover:text-gold border border-white/20 hover:border-gold/60 transition-all duration-200 cursor-pointer shadow-lg active:scale-90 focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Clickable Image Linking to Contact Form */}
        <Link
          href="/contact"
          onClick={handleClose}
          className="block relative w-full aspect-square overflow-hidden group cursor-pointer"
        >
          <Image
            src="/assets/popup.webp"
            alt="Riwaaj Events Special Announcement"
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 600px"
            className="object-contain transition-transform duration-500 group-hover:scale-102"
            priority
          />
        </Link>
      </div>
    </div>
  );
}
