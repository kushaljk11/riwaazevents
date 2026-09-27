export interface EventManagementItem {
  id: string;
  number: string;
  count: string;
  title: string;
  description: string;
  image: string;
}

export interface EventManagementData {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  items: EventManagementItem[];
}

export const eventManagementData: EventManagementData = {
  eyebrow: "COMPLETE EVENT MANAGEMENT",
  titlePrefix: "Everything your event needs,",
  titleHighlight: "managed by one team.",
  description:
    "From planning and venue setup to décor, food, entertainment, guests, and coordination we take care of every part of your event.",
  items: [
    {
      id: "planning-concept",
      number: "01",
      count: "01/07",
      title: "Planning & Concept",
      description: "Turning your ideas into a clear plan.",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "venue-setup",
      number: "02",
      count: "02/07",
      title: "Venue & Setup",
      description: "Finding, preparing, and styling the right space.",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "decor-production",
      number: "03",
      count: "03/07",
      title: "Décor & Production",
      description: "Bringing the entire look and atmosphere together.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "food-hospitality",
      number: "04",
      count: "04/07",
      title: "Food & Hospitality",
      description: "Taking care of food, service, and your guests.",
      image:
        "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "entertainment",
      number: "05",
      count: "05/07",
      title: "Entertainment",
      description:
        "Music, performances, and everything that keeps the celebration alive.",
      image:
        "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "guest-management",
      number: "06",
      count: "06/07",
      title: "Guest Management",
      description: "Making sure your guests are welcomed and looked after.",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
    },
    {
      id: "event-coordination",
      number: "07",
      count: "07/07",
      title: "Event Coordination",
      description: "Managing the entire event so everything runs smoothly.",
      image:
        "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    },
  ],
};
