import type { Metadata } from "next";
import { Navbar, Footer } from "../component/layout";
import { ContactHero, ContactSection } from "../component/section";

export const metadata: Metadata = {
  title: "Contact & Plan Your Event | Riwaaz Events Itahari",
  description:
    "Begin the conversation for your extraordinary wedding or celebration with Riwaaz Events in Itahari, Nepal.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <Navbar />
      <main className="flex-1">
        <ContactHero />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
