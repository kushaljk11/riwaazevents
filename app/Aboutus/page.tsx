import type { Metadata } from "next";
import { Navbar, Footer } from "../component/layout";
import { AboutHero, AboutStorySection, CTASection } from "../component/section";

export const metadata: Metadata = {
  title: "About Us | Riwaaz Events Nepal - The Art of Bespoke Celebrations",
  description:
    "Discover the story behind Riwaaz Events, premier luxury wedding and celebration house in Nepal. From our humble beginnings with a van full of marigolds to crafting unforgettable weddings across Kathmandu and Itahari.",
  keywords: [
    "Riwaaz Events",
    "Wedding Planner Nepal",
    "About Riwaaz Events",
    "Luxury Event Management Nepal",
    "Bespoke Weddings Itahari Kathmandu",
    "Nepal Wedding Decorators",
  ],
};

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
        <AboutStorySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
