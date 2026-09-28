import type { Metadata } from "next";
import { Navbar, Footer } from "../component/layout";
import {
  EventHero,
  EventsGallerySection,
  CTASection,
  FAQSection,
} from "../component/section";

export const metadata: Metadata = {
  title: "Our Events | Riwaaz Events Nepal - Every Event Tells a Different Story",
  description:
    "Explore unforgettable weddings, galas, and bespoke celebrations curated by Riwaaz Events across Nepal. Every celebration is tailored to your unique love story.",
  keywords: [
    "Riwaaz Events Portfolio",
    "Nepal Wedding Gallery",
    "Luxury Weddings Nepal",
    "Event Management Itahari Kathmandu",
  ],
};

export default function EventPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* Floating Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Event Hero Section */}
        <EventHero />

        {/* Events Gallery Section (Matching Sequence with Hover Effects & Filter) */}
        <EventsGallerySection />

        {/* Call To Action */}
        <CTASection />

        {/* FAQ Section (Called After CTA) */}
        <FAQSection />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
