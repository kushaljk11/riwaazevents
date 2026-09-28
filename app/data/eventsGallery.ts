export interface EventGalleryItem {
  id: string;
  title: string;
  category: "Wedding" | "Engagement" | "Corporate" | "Private Events";
  location: string;
  image: string;
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
      image: "/assets/services/service-candelabra.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-2",
      title: "The JK's Engagement Event",
      category: "Engagement",
      location: "Itahari",
      image: "/assets/bts/bts-2.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-3",
      title: "The Wedding Soiree",
      category: "Wedding",
      location: "Itahari",
      image: "/assets/gallery/g4.png",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-4",
      title: "Amick's Engagement Ceremony",
      category: "Engagement",
      location: "Lalitpur",
      image: "/assets/bts/bts-1.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-5",
      title: "Royal Mandap Celebration",
      category: "Wedding",
      location: "Dharan",
      image: "/assets/services/service-mandap.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-6",
      title: "Grand Ballroom Gala",
      category: "Corporate",
      location: "Kathmandu",
      image: "/assets/gallery/g1.png",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-7",
      title: "Botanical Garden Reception",
      category: "Wedding",
      location: "Pokhara",
      image: "/assets/gallery/g6.png",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-8",
      title: "Canopy & Fairy Lights Array",
      category: "Corporate",
      location: "Itahari",
      image: "/assets/bts/bts-4.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-9",
      title: "Candlelit Altar & Drapes",
      category: "Wedding",
      location: "Biratnagar",
      image: "/assets/story-florist.jpg",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-10",
      title: "Palace Courtyard Mandap",
      category: "Wedding",
      location: "Kathmandu",
      image: "/assets/venue/v1.png",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-11",
      title: "Heritage Sandstone Pavilion",
      category: "Private Events",
      location: "Bhaktapur",
      image: "/assets/idontknow.png",
      aspect: "aspect-[4/5]",
    },
    {
      id: "event-12",
      title: "Architectural Golden Stage",
      category: "Corporate",
      location: "Kathmandu",
      image: "/assets/services/service-chandelier.jpg",
      aspect: "aspect-[4/5]",
    },
  ],
};
