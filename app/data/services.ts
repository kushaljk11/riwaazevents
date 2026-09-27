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
  titlePrefix: "We manage the event.",
  titleHighlight: "You live the moment.",
  subtitle:
    "Riwaz transforms every idea into a thoughtfully crafted celebration, where every detail has purpose.",
  services: [
    {
      id: "planning",
      number: "01",
      heading: "Planning",
      shortDescription: "We plan the details that bring your event together.",
      image: "/assets/s1/s1.png",
    },
    {
      id: "venue",
      number: "02",
      heading: "Venue",
      shortDescription:
        "We help find and prepare the right space for your event.",
      image: "/assets/s1/s2.png",
    },
    {
      id: "decor-styling",
      number: "03",
      heading: "Décor & Styling",
      shortDescription: "We transform the space to match your vision.",
      image: "/assets/s1/s3.png",
    },
    {
      id: "food-hospitality",
      number: "04",
      heading: "Food & Hospitality",
      shortDescription: "We take care of food, service, and guest comfort.",
      image: "/assets/s1/s4.png",
    },
    {
      id: "entertainment",
      number: "05",
      heading: "Entertainment",
      shortDescription:
        "Music, performances, and experiences that keep the celebration alive.",
      image: "/assets/s1/s1.png",
    },
    {
      id: "guest-management",
      number: "06",
      heading: "Guest Management",
      shortDescription: "We make sure your guests are welcomed and looked after.",
      image: "/assets/s1/s2.png",
    },
    {
      id: "event-coordination",
      number: "07",
      heading: "Event Coordination",
      shortDescription:
        "We manage everything on the day so it all runs smoothly.",
      image: "/assets/s1/s3.png",
    },
  ],
};
