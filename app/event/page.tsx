import type { Metadata } from "next";
import { Navbar /*, Footer */ } from "../component/layout";
import {
  EventHero,
  EventsGallerySection,
  CTASection,
  FAQSection,
} from "../component/section";

export const metadata: Metadata = {
  title: "Our Events | Riwaaj Events Nepal - Every Event Tells a Different Story",
  description:
    "Explore unforgettable weddings, galas, and bespoke celebrations curated by Riwaaj Events across Nepal. Every celebration is tailored to your unique love story.",
  keywords: [
    "Riwaaj Events Portfolio",
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

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Call To Action (Bottom) */}
        <CTASection />
      </main>

      {/* Luxury Footer */}
      {/* <Footer /> */}
    </div>
  );
}
