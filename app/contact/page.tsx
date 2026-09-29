import type { Metadata } from "next";
import { Navbar /*, Footer */ } from "../component/layout";
import {
  /* ContactHero, */
  ContactSection,
  FAQSection,
  CTASection,
} from "../component/section";

export const metadata: Metadata = {
  title: "Contact & Plan Your Event | Riwaaj Events Itahari",
  description:
    "Begin the conversation for your extraordinary wedding or celebration with Riwaaj Events in Itahari, Nepal.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-32">
        {/* <ContactHero /> */}
        <ContactSection />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Call To Action (Bottom) */}
        <CTASection />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
