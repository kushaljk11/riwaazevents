export interface StartToCelebrationItem {
  id: string;
  number: string;
  count: string;
  title: string;
  description: string;
  image: string;
}

export interface StartToCelebrationData {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  items: StartToCelebrationItem[];
}

export const startToCelebrationData: StartToCelebrationData = {
  eyebrow: "From starts to Celebration",
  titlePrefix: "From the venue to the",
  titleHighlight: "Final Goodbye",
  description:
    "Before the celebration begins, our team is already at work bringing every detail together with precision and care.",
  items: [
    {
      id: "venue-preparation",
      number: "01",
      count: "01/06",
      title: "Venue Preparation",
      description: "Preparing the space for everything that follows.",
      image: "/assets/celebration/step-venue-prep.png",
    },
    {
      id: "concept-planning",
      number: "02",
      count: "02/06",
      title: "Concept & Planning",
      description: "Turning your ideas into one thoughtful vision.",
      image: "/assets/celebration/step-concept-planning-clean.png",
    },
    {
      id: "food-hospitality",
      number: "03",
      count: "03/06",
      title: "Food & Hospitality",
      description: "Making sure every guest is served and cared for.",
      image: "/assets/celebration/step-food-hospitality.png",
    },
    {
      id: "entertainment-production",
      number: "04",
      count: "04/06",
      title: "Entertainment & Production",
      description: "Creating the atmosphere through music, lighting, and live moments.",
      image: "/assets/celebration/step-reception-closure.png",
    },
    {
      id: "event-coordination",
      number: "05",
      count: "05/06",
      title: "Event Coordination",
      description: "Keeping every person, vendor, and moment on schedule.",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "event-closure",
      number: "06",
      count: "06/06",
      title: "Event Closure",
      description: "Taking care of the final details even after the celebration ends.",
      image:
        "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800",
    },
  ],
};
