export interface ServiceCard {
  id: string;
  number: string;
  heading: string;
  shortDescription: string;
  image: string;
}

export interface ServicesSectionData {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  services: ServiceCard[];
}

export const servicesData: ServicesSectionData = {
  badge: "Made for your Celebration",
  titlePrefix: "Everything your event needs",
  titleHighlight: "all in one place.",
  subtitle:
    "Riwaz transforms every idea into a thoughtfully crafted celebration, where every detail has purpose.",
  services: [
    {
      id: "planning",
      number: "01",
      heading: "Planning",
      shortDescription: "We plan the details that bring your event together.",
      image:
        "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "venue",
      number: "02",
      heading: "Venue",
      shortDescription:
        "We help find and prepare the right space for your event.",
      image:
        "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "decor-styling",
      number: "03",
      heading: "Décor & Styling",
      shortDescription: "We transform the space to match your vision.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "food-hospitality",
      number: "04",
      heading: "Food & Hospitality",
      shortDescription: "We take care of food, service, and guest comfort.",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "entertainment",
      number: "05",
      heading: "Entertainment",
      shortDescription:
        "Music, performances, and experiences that keep the celebration alive.",
      image:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "guest-management",
      number: "06",
      heading: "Guest Management",
      shortDescription: "We make sure your guests are welcomed and looked after.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000",
    },
    {
      id: "event-coordination",
      number: "07",
      heading: "Event Coordination",
      shortDescription:
        "We manage everything on the day so it all runs smoothly.",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1000",
    },
  ],
};
