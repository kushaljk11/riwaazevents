export interface EventGalleryItem {
  id: string;
  title: string;
  category: "Wedding" | "Engagement" | "Corporate" | "Private Events";
  location: string;
  image: string;
  images?: string[];
  aspect?: string;
}

export interface EventsGalleryData {
  categories: { label: string; value: string; count?: number }[];
  items: EventGalleryItem[];
}

export const eventsGalleryData: EventsGalleryData = {
  categories: [
    { label: "All", value: "all" },
    { label: "Wedding", value: "Wedding" },
    { label: "Engagement", value: "Engagement" },
    { label: "Corporate", value: "Corporate" },
    { label: "Private Events", value: "Private Events" },
  ],
  items: [
    {
      id: "event-1",
      title: "The Candle Night Dinner",
      category: "Private Events",
      location: "Kathmandu",
      image: "/assets/services/service-candelabra.webp",
      images: [
        "/assets/services/service-candelabra.webp",
        "/assets/services/service-chandelier.webp",
        "/assets/story-culinary.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-2",
      title: "The JK's Engagement Event",
      category: "Engagement",
      location: "Itahari",
      image: "/assets/bts/bts-2.webp",
      images: [
        "/assets/bts/bts-2.webp",
        "/assets/bts/bts-1.webp",
        "/assets/events/e8.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-3",
      title: "The Wedding Soiree",
      category: "Wedding",
      location: "Itahari",
      image: "/assets/gallery/g4.webp",
      images: [
        "/assets/gallery/g4.webp",
        "/assets/gallery/g2.webp",
        "/assets/events/e1.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-4",
      title: "Amick's Engagement Ceremony",
      category: "Engagement",
      location: "Lalitpur",
      image: "/assets/bts/bts-1.webp",
      images: [
        "/assets/bts/bts-1.webp",
        "/assets/bts/bts-3.webp",
        "/assets/events/e9.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-5",
      title: "Royal Mandap Celebration",
      category: "Wedding",
      location: "Dharan",
      image: "/assets/events/e2.webp",
      images: [
        "/assets/events/e2.webp",
        "/assets/services/service-mandap.webp",
        "/assets/events/e5.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-6",
      title: "Grand Ballroom Gala",
      category: "Corporate",
      location: "Kathmandu",
      image: "/assets/gallery/g1.webp",
      images: [
        "/assets/gallery/g1.webp",
        "/assets/events/e4.webp",
        "/assets/services/service-chandelier.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-7",
      title: "Botanical Garden Reception",
      category: "Wedding",
      location: "Pokhara",
      image: "/assets/events/e3.webp",
      images: [
        "/assets/events/e3.webp",
        "/assets/gallery/g6.webp",
        "/assets/story-florist.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-8",
      title: "Canopy & Fairy Lights Array",
      category: "Corporate",
      location: "Itahari",
      image: "/assets/bts/bts-4.webp",
      images: [
        "/assets/bts/bts-4.webp",
        "/assets/events/e7.webp",
        "/assets/services/service-candelabra.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-9",
      title: "Candlelit Altar & Drapes",
      category: "Wedding",
      location: "Biratnagar",
      image: "/assets/gallery/g8.webp",
      images: [
        "/assets/gallery/g8.webp",
        "/assets/story-bouquet.webp",
        "/assets/events/e6.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-10",
      title: "Palace Courtyard Mandap",
      category: "Wedding",
      location: "Kathmandu",
      image: "/assets/venue/v1.webp",
      images: [
        "/assets/venue/v1.webp",
        "/assets/venue/v2.webp",
        "/assets/venue/v3.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-11",
      title: "Heritage Sandstone Pavilion",
      category: "Private Events",
      location: "Bhaktapur",
      image: "/assets/idontknow.webp",
      images: [
        "/assets/idontknow.webp",
        "/assets/venue/v4.webp",
        "/assets/services/service-chandelier.webp",
      ],
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-12",
      title: "Architectural Golden Stage",
      category: "Corporate",
      location: "Kathmandu",
      image: "/assets/services/service-chandelier.webp",
      images: [
        "/assets/services/service-chandelier.webp",
        "/assets/gallery/g9.webp",
        "/assets/bts/bts-4.webp",
      ],
      aspect: "aspect-[4/5]",
    },
  ],
};
