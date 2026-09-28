export interface BehindTheScenesItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
  offset?: "up" | "down";
}

export interface BehindTheScenesData {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  images: BehindTheScenesItem[];
}

export const behindTheScenesData: BehindTheScenesData = {
  eyebrow: "Behind the scenes",
  titleLine1: "From the first sketch",
  titleLine2: "to the final goodbye.",
  description:
    "From planning and design to décor, hospitality, and coordination, we bring every detail together so you can simply enjoy the celebration.",
  images: [
    {
      id: "bts-1",
      image: "/assets/bts/bts-1.jpg",
      alt: "Couple under ceremony floral arch",
      caption: "Ceremony & Altar Florals",
      offset: "down",
    },
    {
      id: "bts-2",
      image: "/assets/bts/bts-2.jpg",
      alt: "Wedding guests celebrating with sparklers at night",
      caption: "Nighttime Sparkler Send-off",
      offset: "up",
    },
    {
      id: "bts-3",
      image: "/assets/bts/bts-3.jpg",
      alt: "Artisanal event catering and hors d'oeuvres presentation",
      caption: "Gourmet Hospitality & Dining",
      offset: "down",
    },
    {
      id: "bts-4",
      image: "/assets/bts/bts-4.jpg",
      alt: "Luxury sailcloth marquee wedding tent in scenic meadow",
      caption: "Bespoke Outdoor Venue Marquee",
      offset: "up",
    },
    {
      id: "bts-5",
      image: "/assets/s1/s1.png",
      alt: "Hand-drawn architectural event sketches and color swatches",
      caption: "Concept Sketches & Palettes",
      offset: "down",
    },
    {
      id: "bts-6",
      image: "/assets/gallery/g1.png",
      alt: "Evening banquet table setting with crystal chandeliers",
      caption: "Evening Candlelit Reception",
      offset: "up",
    },
    {
      id: "bts-7",
      image: "/assets/story-florist.jpg",
      alt: "Florists handcrafting floral arches on site",
      caption: "On-Site Floral Craftsmanship",
      offset: "down",
    },
    {
      id: "bts-8",
      image: "/assets/idontknow.png",
      alt: "Lakeside celebration with illuminated chandeliers and pool reflections",
      caption: "Atmospheric Venue Production",
      offset: "up",
    },
    {
      id: "bts-9",
      image: "/assets/story-bouquet.jpg",
      alt: "Hand-tied bridal bouquet with delicate peach ranunculus and garden roses",
      caption: "Bridal Floral Curation",
      offset: "down",
    },
    {
      id: "bts-10",
      image: "/assets/story-culinary.jpg",
      alt: "Executive banquet chefs garnishing fine-dining courses",
      caption: "Culinary Finishing & Presentation",
      offset: "up",
    },
  ],
};
