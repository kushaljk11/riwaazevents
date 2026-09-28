"use client";

import React, { useState } from "react";
import Image from "next/image";
import { eventsGalleryData, EventGalleryItem } from "../../data/eventsGallery";

export default function EventsGallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<EventGalleryItem | null>(null);

  // Filter items based on active category
  const filteredItems =
    activeCategory === "all"
      ? eventsGalleryData.items
      : eventsGalleryData.items.filter((item) => item.category === activeCategory);

  // Calculate counts for each category
  const getCategoryCount = (catValue: string) => {
    if (catValue === "all") return eventsGalleryData.items.length;
    return eventsGalleryData.items.filter((item) => item.category === catValue).length;
  };

  return (
    <section className="relative py-16 sm:py-24 bg-ivory text-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter Bar */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-stone-200/80 mb-10 sm:mb-12">
          {eventsGalleryData.categories.map((cat) => {
            const isActive = activeCategory === cat.value;
            const count = getCategoryCount(cat.value);

            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`relative pb-2 text-sm sm:text-base font-serif tracking-wide transition-all duration-300 flex items-baseline gap-1.5 ${isActive
                    ? "text-stone-900 font-medium"
                    : "text-stone-400 hover:text-stone-700"
                  }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] sm:text-xs font-sans tabular-nums ${isActive ? "text-gold font-semibold" : "text-stone-400"
                    }`}
                >
                  {count}
                </span>

                {/* Active Indicator Underline */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - 3 Columns with Hover Details Overlay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative cursor-pointer overflow-hidden rounded-sm bg-stone-900 shadow-sm transition-all duration-500 hover:shadow-xl w-full"
            >
              {/* Image Container with 4:5 Aspect Ratio */}
              <div className="relative w-full aspect-4/5 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority={index < 4}
                />

                {/* Gradient overlay - appears on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Subtle border highlight on hover */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-gold/40 transition-colors duration-500 pointer-events-none" />

                {/* Card Content Overlay - appears on hover with gentle slide-up */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                  {/* Category Tag */}
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-gold font-sans font-medium mb-1">
                    {item.category}
                  </span>

                  {/* Decreased Title font size as requested */}
                  <h3 className="font-serif text-base sm:text-lg text-white font-medium tracking-wide leading-snug text-balance">
                    {item.title}
                  </h3>

                  {/* Location */}
                  <div className="mt-1 flex items-center gap-1.5 text-stone-200 text-xs font-sans tracking-wide">
                    <svg
                      className="w-3.5 h-3.5 text-gold shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm transition-all duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close Preview"
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div
              className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[65vh] rounded-sm overflow-hidden">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs uppercase tracking-widest text-gold mb-1 font-sans">
                  {selectedImage.category} • {selectedImage.location}
                </p>
                <h2 className="font-serif text-xl sm:text-2xl text-white">
                  {selectedImage.title}
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
