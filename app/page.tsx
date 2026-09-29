import { Navbar /*, Footer */ } from "./component/layout";
import { PromoPopup } from "./component/ui";
import {
  HomeHero,
  EventTicker,
  ServicesSection,
  EventManagementSection,
  FeaturedEventsSection,
  StartToCelebrationSection,
  TestimonialsSection,
  GallerySection,
  FAQSection,
  CTASection,
} from "./component/section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      {/* Reusable Transparent Navbar (Floats over Hero) */}
      <Navbar />

      <main className="flex-1">
        <HomeHero />
        <EventTicker />
        <ServicesSection />
        <EventManagementSection />
        <FeaturedEventsSection />
        <StartToCelebrationSection />
        <TestimonialsSection />
        <GallerySection />
        <FAQSection />
        <CTASection />
      </main>

      {/* 5-Second Promotional Popup */}
      <PromoPopup />

      {/* Reusable Luxury Footer */}
      {/* <Footer /> */}
    </div>
  );
}
