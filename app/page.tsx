import { Navbar } from "./component/layout";
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

      <PromoPopup />
    </div>
  );
}
