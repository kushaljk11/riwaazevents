export interface GalleryItem {
  id: string;
  image: string;
  alt: string;
  caption?: string;
}

export interface GalleryData {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  description: string;
  row1: GalleryItem[];
  row2: GalleryItem[];
}

export const galleryData: GalleryData = {
  eyebrow: "Our Gallery",
  titlePrefix: "Moments that are deserved",
  titleHighlight: "to be remembered",
  description:
    "A glimpse at the celebrations, experiences, and memories we've created along the way.",
  row1: [
    {
      id: "row1-1",
      image: "/assets/gallery/g1.png",
      alt: "Outdoor wedding ceremony setup",
      caption: "Floral Canopy & Ceremony",
    },
    {
      id: "row1-2",
      image: "/assets/gallery/g3.png",
      alt: "Celebration moments with warm lighting",
      caption: "Golden Hour Celebration",
    },
    {
      id: "row1-3",
      image: "/assets/gallery/g6.png",
      alt: "Bridal portrait under floral installation",
      caption: "Lush Floral Arch",
    },
    {
      id: "row1-4",
      image: "/assets/gallery/g2.png",
      alt: "Traditional wedding couple portrait",
      caption: "Heritage Regalia",
    },
    {
      id: "row1-5",
      image: "/assets/gallery/g4.png",
      alt: "Grand crystal chandelier hall reception",
      caption: "Grand Ballroom Chandelier",
    },
    {
      id: "row1-6",
      image: "/assets/gallery/g5.png",
      alt: "Artisanal culinary preparation and plating",
      caption: "Fine Culinary Arts",
    },
  ],
  row2: [
    {
      id: "row2-1",
      image: "/assets/gallery/g6.png",
      alt: "Bridal portrait under floral installation",
      caption: "Lush Floral Arch",
    },
    {
      id: "row2-2",
      image: "/assets/gallery/g5.png",
      alt: "Artisanal culinary preparation and plating",
      caption: "Fine Culinary Arts",
    },
    {
      id: "row2-3",
      image: "/assets/gallery/g3.png",
      alt: "Celebration moments with warm lighting",
      caption: "Golden Hour Celebration",
    },
    {
      id: "row2-4",
      image: "/assets/gallery/g4.png",
      alt: "Grand crystal chandelier hall reception",
      caption: "Grand Ballroom Chandelier",
    },
    {
      id: "row2-5",
      image: "/assets/gallery/g2.png",
      alt: "Traditional wedding couple portrait",
      caption: "Heritage Regalia",
    },
    {
      id: "row2-6",
      image: "/assets/gallery/g1.png",
      alt: "Outdoor wedding ceremony setup",
      caption: "Floral Canopy & Ceremony",
    },
  ],
};
