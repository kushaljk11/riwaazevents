import type { Metadata } from "next";
import { Navbar } from "../component/layout";
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
      <Navbar />

      <main className="flex-1">
        <ServicesHero />
        <ServicesListSection />
        <FAQSection />
        <CTASection />
      </main>
    </div>
  );
}
