import type { Metadata } from "next";
import { Navbar /*, Footer */ } from "../component/layout";
import {
  AboutHero,
  AboutStorySection,
  TeamSection,
  FAQSection,
  StatsSection,
  BehindTheScenesSection,
  CTASection,
} from "../component/section";

export const metadata: Metadata = {
  title: "About Us | Riwaaj Events Nepal - Event Planning & Management",
  description:
    "Riwaaj is a full-service event management company helping families, couples, and businesses plan and manage memorable events across Nepal.",
  keywords: [
    "Riwaaj Events",
    "About Riwaaj Events",
    "Wedding Planner Nepal",
    "Riwaaj Events Team",
    "Event Management Nepal",
    "Weddings Itahari Kathmandu",
    "Nepal Wedding Planners",
  ],
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* Floating Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <AboutHero />

        {/* 2. Brand Story Chapters (Alternating Zig-Zag) */}
        <AboutStorySection />

        {/* 3. Our Teams Section */}
        <TeamSection />

        {/* 4. Values & FAQ Accordion Section with Left Watermark */}
        <FAQSection
          eyebrow="Our values"
          titlePrefix="A few things you may want"
          titleHighlight="to know."
          description="Real experiences from clients who trust us with their everyday looks and special moments."
          watermarkPosition="left"
        />

        {/* 5. Riwaaj in Numbers (4-Card Staggered Stats) */}
        <StatsSection />

        {/* 6. Behind the Scenes 4-Photo Showcase */}
        <BehindTheScenesSection />

        {/* 7. Call to Action Banner */}
        <CTASection />
      </main>

      {/* Luxury Footer */}
      {/* <Footer /> */}
    </div>
  );
}
