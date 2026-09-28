import type { Metadata } from "next";
import { Navbar /*, Footer */ } from "../component/layout";
import {
  ServicesHero,
  ServicesListSection,
  FAQSection,
  CTASection,
} from "../component/section";

export const metadata: Metadata = {
  title: "Our Services | Riwaaj Events Nepal - Everything Your Celebration Needs",
  description:
    "Explore full-service event management by Riwaaj Events across Nepal. From bespoke wedding planning, floral architecture, and marquee design to catering and luxury production.",
  keywords: [
    "Riwaaj Events Services",
    "Wedding Planning Services Nepal",
    "Event Management Itahari Kathmandu",
    "Bespoke Wedding Decorators Nepal",
    "Floral Design Nepal",
    "Catering Hospitality Nepal",
  ],
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* Floating Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <ServicesHero />

        {/* 10 Detailed Reusable Services Sections (Alternating Layout) */}
        <ServicesListSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Call To Action */}
        <CTASection />
      </main>

      {/* Luxury Footer */}
      {/* <Footer /> */}
    </div>
  );
}
