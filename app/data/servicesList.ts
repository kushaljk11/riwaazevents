export interface ServiceListItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

export interface ServicesListData {
  services: ServiceListItem[];
}

export const servicesListData: ServicesListData = {
  services: [
    {
      id: "wedding-planning",
      number: "01",
      title: "Wedding Planning",
      description:
        "From the first initial vision to the final send-off, we design and manage the entire wedding journey: timeline creation, vendor curation, budgets, and seamless day-of coordination.",
      tags: [
        "Full Wedding Weekend",
        "Destination Weddings",
        "Budget & Timeline Control",
        "Vendor & Venue Coordination",
      ],
      image: "/assets/services/service-mandap.jpg",
      imageAlt: "Royal traditional red floral mandap wedding setup by Riwaaz Events",
    },
    {
      id: "event-design-styling",
      number: "02",
      title: "Event Design and Styling",
      description:
        "Transforming raw venues into immersive worlds of art. We design the mood, palette, textures, bespoke backdrops, and signature decor elements unique to your love story.",
      tags: [
        "Bespoke Theme Concepts",
        "Spatial Floor Plans",
        "Fabric Draping & Linens",
        "Personalized Accent Details",
      ],
      image: "/assets/story-bouquet.jpg",
      imageAlt: "Bespoke bridal styling and floral aesthetics",
    },
    {
      id: "venue-tent-design",
      number: "03",
      title: "Venue & Tent Design",
      description:
        "Creating breathtaking custom marquees, clear-span canopies, and architectural structures in open lawns, private estates, and remote destinations across Nepal.",
      tags: [
        "Sailcloth Marquees",
        "Outdoor Estate Prep",
        "Climate & Flooring Control",
        "Stage & Structural Framing",
      ],
      image: "/assets/bts/bts-4.jpg",
      imageAlt: "Luxury sailcloth marquee tent in meadow",
    },
    {
      id: "floral-design",
      number: "04",
      title: "Floral Design",
      description:
        "Artisanal botanical installations that breathe life into every corner: majestic ceremonial arches, suspended floral clouds, cascading centerpieces, and bridal blooms.",
      tags: [
        "Suspended Floral Ceilings",
        "Mandap & Altar Installations",
        "Hand-Tied Bridal Bouquets",
        "Table Scapes & Centerpieces",
      ],
      image: "/assets/story-florist.jpg",
      imageAlt: "Luxury floral arrangements and grand ceremonial arch decor",
    },
    {
      id: "catering-coordination",
      number: "05",
      title: "Catering Coordination",
      description:
        "Curation of multi-course gastronomic journeys honoring authentic traditional regional recipes and sophisticated international cuisines with five-star hospitality.",
      tags: [
        "Menu Curation & Tasting",
        "Live Culinary Counters",
        "Banquet Table Service",
        "Dessert & Beverage Styling",
      ],
      image: "/assets/story-culinary.jpg",
      imageAlt: "Artisanal culinary preparation and banquet plating",
    },
    {
      id: "entertainment",
      number: "06",
      title: "Entertainment",
      description:
        "Curating unforgettable live performances, soundscapes, and celebratory moments: live acoustic ensembles, traditional folk artists, DJs, and celebratory send-offs.",
      tags: [
        "Live Bands & Artists",
        "DJ & Dancefloor Production",
        "Traditional Folk Performers",
        "Sparkler & Special Effects",
      ],
      image: "/assets/bts/bts-2.jpg",
      imageAlt: "Nighttime wedding celebration with sparklers",
    },
    {
      id: "lighting-production",
      number: "07",
      title: "Lighting & Production",
      description:
        "Engineering emotional atmosphere through architectural illumination, grand vintage crystal chandeliers, warm pin-spotting, ambient mood washes, and concert-grade sound.",
      tags: [
        "Crystal Chandelier Arrays",
        "Intelligent Stage Lighting",
        "Ambient Fairy & Festoon Lights",
        "Concert Grade Audio Production",
      ],
      image: "/assets/services/service-chandelier.jpg",
      imageAlt: "Grand antique crystal chandelier illumination",
    },
    {
      id: "guest-management",
      number: "08",
      title: "Guest Management",
      description:
        "Gracious Nepali hospitality ensuring every attendee is warmly cared for: airport pickups, personalized welcome hampers, RSVP tracking, and on-ground concierge desks.",
      tags: [
        "RSVP & Invitation Tracking",
        "VIP Concierge Services",
        "Hospitality Desk & Check-in",
        "Custom Welcome Hampers",
      ],
      image: "/assets/services/service-candelabra.jpg",
      imageAlt: "Outdoor wedding guest tables with candelabras and luxury setting",
    },
    {
      id: "destination-weddings",
      number: "09",
      title: "Destination Weddings",
      description:
        "From the lakeside palaces of Pokhara to historic durbar courtyards of Kathmandu and luxury mountain resorts, we handle all destination travel and celebrations.",
      tags: [
        "Destination Scouting",
        "Guest Travel & Hotel Blocks",
        "Multi-Day Itinerary Design",
        "Remote Site Infrastructure",
      ],
      image: "/assets/idontknow.png",
      imageAlt: "Destination lakeside evening celebration by Riwaaz Events",
    },
    {
      id: "post-event-services",
      number: "10",
      title: "Post-Event Services & Wrap-up",
      description:
        "Our commitment continues until the last detail is completed: efficient venue breakdown, heirloom floral preservation, vendor settlement, and photo deliverable coordination.",
      tags: [
        "Eco-Conscious Teardown",
        "Floral Gifting & Repurposing",
        "Vendor Closure & Billing",
        "Memories & Media Follow-up",
      ],
      image: "/assets/celebration/step-concept-planning-clean.png",
      imageAlt: "Detailed event styling and final closure",
    },
  ],
};
